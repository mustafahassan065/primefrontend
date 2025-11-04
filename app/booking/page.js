"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BookingPage() {
  const [availableSlots, setAvailableSlots] = useState([])
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1) // 1: Select slot, 2: Form
  const [selectedDate, setSelectedDate] = useState(null)
  const [showAreasBox, setShowAreasBox] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'domestic',
    propertyAddress: '',
    message: ''
  })

  const router = useRouter()

  // Areas data
  const areas = [
    "EPC Altrincham", "EPC Ashton-in-Makerfield", "EPC Ashton-under-Lyne", "EPC Astley",
    "EPC Atherton", "EPC Bolton", "EPC Bramhall", "EPC Bury", "EPC Chadderton", "EPC Cheadle",
    "EPC Chorlton", "EPC Denton", "EPC Droylsden", "EPC Eccles", "EPC Farnworth", "EPC Gorton",
    "EPC Hale", "EPC Handforth", "EPC Harpurhey", "EPC Hazel Grove", "EPC Heywood", "EPC Hindley",
    "EPC Horwich", "EPC Ince", "EPC Leigh", "EPC Lymm", "EPC Levenshulme", "EPC Longsight",
    "EPC Lowton", "EPC Manchester", "EPC Middleton", "EPC Millbrook", "EPC Milnrow", "EPC Mossley",
    "EPC Oldham", "EPC Openshaw", "EPC Partington", "EPC Prestwich", "EPC Radcliffe", "EPC Reddish",
    "EPC Rochdale", "EPC Saddleworth", "EPC Salford", "EPC Stalybridge", "EPC Stockport",
    "EPC Stoneclough", "EPC Stretford", "EPC The Gay Village", "EPC Timperley", "EPC Tottington",
    "EPC Walshaw", "EPC Waterloo", "EPC Westhoughton", "EPC Whitefield", "EPC Wigan",
    "EPC Withington", "EPC Worsley", "EPC Wythenshawe"
  ]

  // Fetch all available slots on component mount
  useEffect(() => {
    fetchAvailableSlots()
  }, [])

  const fetchAvailableSlots = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:5000/api/booking/available-slots-all')
      const data = await response.json()

      console.log('📊 Raw API data:', data.data); // Debug

      if (data.success) {
        // Group slots by date
        const groupedByDate = data.data.reduce((acc, slot) => {
          if (!acc[slot.date]) {
            acc[slot.date] = []
          }
          acc[slot.date].push(slot)
          return acc
        }, {})

        // Convert to array and sort by date - FIXED DATE CREATION
        const slotsArray = Object.entries(groupedByDate)
          .map(([date, slots]) => {
            // FIX: Create date object without timezone issues
            const [year, month, day] = date.split('-').map(Number);
            const dateObj = new Date(year, month - 1, day); // month is 0-indexed
            
            return {
              date,
              dateObj: dateObj,
              slots: slots.sort((a, b) => a.startTime.localeCompare(b.startTime))
            }
          })
          .sort((a, b) => a.dateObj - b.dateObj)

        console.log('📅 Processed dates:', slotsArray.map(item => ({
          storedDate: item.date,
          displayDate: item.dateObj.toDateString()
        }))); // Debug

        setAvailableSlots(slotsArray)
        // Auto-select first date if available
        if (slotsArray.length > 0) {
          setSelectedDate(slotsArray[0])
        }
      } else {
        alert('Error fetching available slots')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSlotSelect = (slot, dateData) => {
    setSelectedSlot({ ...slot, dateData })
    setStep(2)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const bookingData = {
        ...formData,
        preferredDate: `${selectedSlot.dateData.date}T${selectedSlot.startTime}`,
        slotId: selectedSlot.id
      }

      const response = await fetch('http://localhost:5000/api/booking/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
      })

      const data = await response.json()

      if (data.success) {
        alert('Booking created successfully! We will contact you soon.')
        router.push('/')
      } else {
        alert('Error creating booking: ' + data.message)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const formattedHour = hour % 12 || 12
    return `${formattedHour}:${minutes} ${ampm}`
  }

  const formatDate = (dateObj) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    // FIX: Compare dates properly
    const inputDate = new Date(dateObj);
    inputDate.setHours(0, 0, 0, 0);
    
    if (inputDate.getTime() === today.getTime()) {
      return 'Today'
    } else if (inputDate.getTime() === tomorrow.getTime()) {
      return 'Tomorrow'
    } else {
      return inputDate.toLocaleDateString('en-GB', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      })
    }
  }

  // FIX: Format date for display without timezone issues
  const formatDateDisplay = (dateObj) => {
    const date = new Date(dateObj);
    return date.toLocaleDateString('en-GB', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  // Get day of week
  const getDayOfWeek = (dateObj) => {
    const date = new Date(dateObj);
    return date.toLocaleDateString('en-GB', { weekday: 'short' });
  }

  // Get day number
  const getDayNumber = (dateObj) => {
    const date = new Date(dateObj);
    return date.getDate();
  }

  // Get month name
  const getMonthName = (dateObj) => {
    const date = new Date(dateObj);
    return date.toLocaleDateString('en-GB', { month: 'short' });
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Book Your EPC Assessment
            <button
              onClick={() => setShowAreasBox(true)}
              className="text-blue-600 hover:text-blue-800 ml-2 text-sm font-normal border-b  border-blue-600 pb-0.5"
            >
              (check your area)
            </button>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from available time slots for your Energy Performance Certificate assessment.
          </p>
        </div>

        {/* Areas Covered Popup Box */}
        {showAreasBox && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
              {/* Header */}
              <div className="bg-green-600 text-white p-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Areas We Cover</h2>
                <button
                  onClick={() => setShowAreasBox(false)}
                  className="text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-700 transition-colors"
                >
                  ×
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {areas.map((area, index) => (
                    <div
                      key={index}
                      className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-800 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Footer */}
              
            </div>
          </div>
        )}

        {/* Rest of the component remains the same */}
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {[1, 2].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= stepNumber 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 2 && (
                  <div className={`w-20 h-1 ${
                    step > stepNumber ? 'bg-green-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600 max-w-xs mx-auto">
            <span>Select Time Slot</span>
            <span>Your Details</span>
          </div>
        </div>

        {/* Step 1: Slot Selection */}
        {step === 1 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Available Time Slots
            </h2>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading available slots...</p>
              </div>
            ) : availableSlots.length > 0 ? (
              <div className="space-y-6">
                {/* Calendar Style Date Selection */}
                <div className="mb-6">
                  <div className="flex overflow-x-auto pb-4 space-x-3 scrollbar-hide">
                    {availableSlots.map((dateData) => (
                      <button
                        key={dateData.date}
                        onClick={() => setSelectedDate(dateData)}
                        className={`flex flex-col items-center justify-center p-4 min-w-[80px] rounded-lg border-2 transition-all duration-200 ${
                          selectedDate && selectedDate.date === dateData.date
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-sm font-medium uppercase tracking-wide">
                          {getDayOfWeek(dateData.dateObj)}
                        </div>
                        <div className="text-2xl font-bold mt-1">
                          {getDayNumber(dateData.dateObj)}
                        </div>
                        <div className="text-xs font-medium mt-1">
                          {getMonthName(dateData.dateObj)}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots for Selected Date */}
                {selectedDate && (
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Date Header */}
                    <div className="bg-green-50 px-6 py-4 border-b border-green-200">
                      <h3 className="text-lg font-semibold text-green-900">
                        {formatDate(selectedDate.dateObj)}
                      </h3>
                      <p className="text-sm text-green-700">
                        {formatDateDisplay(selectedDate.dateObj)}
                      </p>
                    </div>
                    
                    {/* Time Slots Grid */}
                    <div className="p-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {selectedDate.slots.map((slot) => (
                          <button
                            key={slot.id}
                            onClick={() => handleSlotSelect(slot, selectedDate)}
                            className="flex flex-col items-center justify-center p-4 border border-green-300 bg-green-50 rounded-lg hover:border-green-500 hover:bg-green-100 transition-all duration-200"
                          >
                            <div className="text-base font-semibold text-green-700">
                              {formatTime(slot.startTime)}-{formatTime(slot.endTime)}
                            </div>
                            <div className="text-xs text-green-600 mt-1">
                              Available
                            </div>
                            {slot.currentBookings > 0 && (
                              <div className="text-xs text-gray-500 mt-1">
                                {slot.maxBookings - slot.currentBookings} left
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No Available Slots
                </h3>
                <p className="text-gray-600 mb-4">
                  There are no available time slots at the moment.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Please check back later or contact us for special arrangements.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>📞 Contact: +44 7469 340373</p>
                  <p>📧 Email: Primeepc.design@gmail.com</p>
                </div>
                <button
                  onClick={fetchAvailableSlots}
                  className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Refresh Availability
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Booking Form */}
        {step === 2 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Your Details
              </h2>
              <button
                onClick={() => setStep(1)}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                ← Change Time Slot
              </button>
            </div>

            {/* Selected Appointment Summary */}
            <div className="mb-6 p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <p className="text-green-800 font-medium text-lg mb-2">
                Selected Appointment
              </p>
              <p className="text-green-700 text-xl font-semibold">
                {formatDateDisplay(selectedSlot.dateData.dateObj)}
              </p>
              <p className="text-green-700 text-lg">
                at {formatTime(selectedSlot.startTime)}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="+44 1234 567890"
                  />
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="domestic">Domestic Property</option>
                    <option value="commercial">Commercial Property</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address *
                </label>
                <textarea
                  id="propertyAddress"
                  name="propertyAddress"
                  required
                  rows={3}
                  value={formData.propertyAddress}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Full address including postcode"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Any special instructions or questions..."
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back to Slots
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Booking...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}