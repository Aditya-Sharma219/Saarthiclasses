'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

export default function Contact() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, message } = formData

    if (!name || !email || !message) {
      toast.error('Please fill all fields')
      return
    }

    setIsSubmitting(true)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
      }),
    })

    const result = await res.json()
    if (result.success) {
      toast.success('Query submitted successfully!')
      setFormData({ name: '', email: '', message: '' })
    } else {
      toast.error('Something went wrong. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-24 px-4"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 max-w-xl mx-auto p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Have a Query or Want to Connect With Us?
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Fill the form below and we will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your query..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Query'}
          </button>
        </form>
      </div>
    </section>
  )
}
