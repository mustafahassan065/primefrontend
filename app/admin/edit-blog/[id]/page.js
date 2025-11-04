"use client"

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function EditBlog() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [fetchLoading, setFetchLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    fetchBlog()
  }, [])

  const fetchBlog = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const blogId = params.id
      
      console.log('📝 Fetching blog with ID:', blogId)
      
      // ✅ FIX: Directly fetch the specific blog by ID
      const response = await fetch(`http://localhost:5000/api/admin/blogs`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json()

      console.log('📄 All blogs data:', data)

      if (data.success) {
        // ✅ FIX: Use 'id' field and proper comparison
        const blog = data.data.find(b => b.id == blogId)
        
        console.log('🔍 Found blog:', blog)
        console.log('🔍 Looking for ID:', blogId)
        console.log('🔍 Available IDs:', data.data.map(b => b.id))
        
        if (blog) {
          setTitle(blog.title)
          setContent(blog.content)
        } else {
          setError(`Blog not found with ID: ${blogId}. Available blogs: ${data.data.map(b => b.id).join(', ')}`)
        }
      } else {
        setError('Failed to fetch blogs: ' + data.message)
      }
    } catch (error) {
      console.error('❌ Fetch blog error:', error)
      setError('Network error. Please check if backend server is running.')
    } finally {
      setFetchLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const token = localStorage.getItem('adminToken')
      const blogId = params.id
      
      console.log('✏️ Updating blog ID:', blogId)
      
      const response = await fetch(`http://localhost:5000/api/admin/blogs/${blogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title,
          content
        }),
      })

      const data = await response.json()

      console.log('📤 Update response:', data)

      if (data.success) {
        alert('✅ Blog updated successfully!')
        router.push('/admin/dashboard')
      } else {
        setError(data.message || 'Failed to update blog')
      }
    } catch (error) {
      console.error('❌ Update blog error:', error)
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (fetchLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Edit Blog Post {params.id && `(ID: ${params.id})`}
            </h1>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Content
                </label>
                <textarea
                  id="content"
                  rows="15"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Write your blog content here..."
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => router.push('/admin/dashboard')}
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                >
                  {loading ? 'Updating...' : 'Update Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}