"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    fetchBlogs()
  }, [])

  const checkAuth = () => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
    }
  }

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch('http://localhost:5000/api/admin/blogs', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json()

      if (data.success) {
        setBlogs(data.data)
      } else {
        setError('Failed to fetch blogs')
      }
    } catch (error) {
      setError('Network error. Please check if backend server is running.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (blogId) => {
  if (!confirm('Are you sure you want to delete this blog?')) return

  try {
    const token = localStorage.getItem('adminToken')
    
    console.log('🗑️ Deleting blog ID:', blogId)
    
    const response = await fetch(`http://localhost:5000/api/admin/blogs/${blogId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const data = await response.json()

    console.log('🗑️ Delete response:', data)

    if (data.success) {
      // ✅ FIX: Use 'id' instead of '_id'
      setBlogs(blogs.filter(blog => blog.id !== blogId))
      alert('✅ Blog deleted successfully')
    } else {
      alert('❌ Failed to delete blog: ' + data.message)
    }
  } catch (error) {
    console.error('❌ Delete error:', error)
    alert('❌ Network error')
  }
}

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('admin')
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
  {/* Header */}
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-6">
        {/* Left side - Admin Dashboard title */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center space-x-4">
          {/* Manage Bookings and Schedule buttons */}
          <div className="flex space-x-3">
            <Link
              href="/admin/bookings"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Manage Bookings
            </Link>
            <Link
              href="/admin/schedule"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Manage Schedule
            </Link>
          </div>
          
          {/* Create Blog and Logout buttons */}
          <div className="flex items-center space-x-3 border-l border-gray-300 pl-4">
            <Link
              href="/admin/create-blog"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Create New Blog
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>


      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Blog Posts
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Manage your blog posts and content
              </p>
            </div>
            

            {blogs.length === 0 ? (
              <div className="px-4 py-12 text-center">
                <p className="text-gray-500">No blog posts found.</p>
                <Link
                  href="/admin/create-blog"
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Create Your First Blog
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {blogs.map((blog) => (
  <li key={blog.id}> {/* ✅ Use blog.id */}
    <div className="px-4 py-4 flex items-center justify-between sm:px-6">
      <div className="flex-1">
        <h4 className="text-lg font-medium text-gray-900">{blog.title}</h4>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {blog.content?.substring(0, 200)}...
        </p>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <span>
            Created: {new Date(blog.createdAt).toLocaleDateString()}
          </span>
          <span className="mx-2">•</span>
          <span className="bg-gray-100 px-2 py-1 rounded text-xs">
            ID: {blog.id} {/* ✅ Show ID for debugging */}
          </span>
        </div>
      </div>
      <div className="flex space-x-2">
        <Link
          href={`/admin/edit-blog/${blog.id}`} 
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete(blog.id)} 
          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  </li>
))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}