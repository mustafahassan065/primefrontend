"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/blogs');
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>EPC Blog | Prime EPC Manchester</title>
        <meta name="description" content="Read our latest articles about Energy Performance Certificates, property energy efficiency, and Manchester EPC requirements." />
        <link rel="canonical" href="http://localhost:3000/blog" />
      </Head>

      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              EPC Blog & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights on Energy Performance Certificates, property efficiency, and Manchester regulations.
            </p>
          </div>

          {loading ? (
            <div className="text-center">Loading blogs...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogs.map((blog) => (
                <article key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {blog.featuredImage && (
                    <img 
                      src={blog.featuredImage} 
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                      <Link href={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt || blog.metaDescription}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                      <Link 
                        href={`/blog/${blog.slug}`}
                        className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}