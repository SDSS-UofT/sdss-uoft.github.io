"use client"

import type React from "react"
import { useState } from "react"

export default function MemberRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentNumber: "",
    year: "",
    program: "",
    newsletter: "",
    eventsInterested: [] as string[],
    eventsSpecify: "",
    comments: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const eventOptions = [
    "Technical Workshops",
    "Networking Events",
    "Speaker/Discussion Events",
    "Resume Workshops",
    "Socials",
    "Datathon/Hackathon",
    "Volunteering/leadership opportunities",
    "Other",
  ]

  const yearOptions = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "ASIP/PEY/Internship"]

  const handleCheckboxChange = (event: string) => {
    setFormData((prev) => ({
      ...prev,
      eventsInterested: prev.eventsInterested.includes(event)
        ? prev.eventsInterested.filter((e) => e !== event)
        : [...prev.eventsInterested, event],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    // Validate UofT email
    if (!formData.email.endsWith("@mail.utoronto.ca") && !formData.email.endsWith("@utoronto.ca")) {
      setMessage("Please use a valid UofT email address")
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch("https://nybucudurreongmvrbnx.functions.supabase.co/member-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          eventsInterested: formData.eventsInterested.join(", "),
        }),
      })

      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to register")

        setMessage(
          data.created
            ? "Thank you for registering with SDSS!"
            : "You’re already registered, thanks!"
        );

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        studentNumber: "",
        year: "",
        program: "",
        newsletter: "",
        eventsInterested: [],
        eventsSpecify: "",
        comments: "",
      })
    } catch (err: any) {
      setMessage(err.message || "Something went wrong. Try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center p-4 py-20">
      <div className="relative w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">SDSS General Member Registration</h1>
          <p className="text-lg text-gray-600 text-pretty">Join the Students in Data Science and Statistics Club at UofT!</p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6 space-y-2 border-b border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900">Register</h2>
            <p className="text-gray-600">Complete this form to become a member of SDSS</p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-base font-medium text-gray-900">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Jane Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                  required
                  className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B5F8D] focus:border-transparent transition-all"
                />
              </div>

              {/* UofT Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-base font-medium text-gray-900">
                  UofT Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane.doe@mail.utoronto.ca"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B5F8D] focus:border-transparent transition-all"
                />
                <p className="text-sm text-gray-500">Please use your UofT email</p>
              </div>

              {/* Student Number */}
              <div className="space-y-2">
                <label htmlFor="studentNumber" className="block text-base font-medium text-gray-900">
                  Student Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="studentNumber"
                  type="text"
                  placeholder="1234567890"
                  value={formData.studentNumber}
                  onChange={(e) => setFormData((prev) => ({ ...prev, studentNumber: e.target.value }))}
                  required
                  className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B5F8D] focus:border-transparent transition-all"
                />
              </div>

              {/* Year */}
              <div className="space-y-2">
                <label htmlFor="year" className="block text-base font-medium text-gray-900">
                  Year <span className="text-red-500">*</span>
                </label>
                <select
                  id="year"
                  value={formData.year}
                  onChange={(e) => setFormData((prev) => ({ ...prev, year: e.target.value }))}
                  required
                  className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B5F8D] focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select your year</option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Program */}
              <div className="space-y-2">
                <label htmlFor="program" className="block text-base font-medium text-gray-900">
                  Program <span className="text-red-500">*</span>
                </label>
                <input
                  id="program"
                  type="text"
                  placeholder="e.g., Computer Science, Statistics, Data Science"
                  value={formData.program}
                  onChange={(e) => setFormData((prev) => ({ ...prev, program: e.target.value }))}
                  required
                  className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B5F8D] focus:border-transparent transition-all"
                />
              </div>

              {/* Newsletter */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-gray-900">
                  Would you like to subscribe to our monthly newsletter? <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="newsletter"
                      value="Count me in!"
                      checked={formData.newsletter === "Count me in!"}
                      onChange={(e) => setFormData((prev) => ({ ...prev, newsletter: e.target.value }))}
                      required
                      className="w-4 h-4 text-[#5B5F8D] border-gray-300 focus:ring-[#5B5F8D]"
                    />
                    <span className="text-base text-gray-900">Count me in!</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="newsletter"
                      value="Maybe next time"
                      checked={formData.newsletter === "Maybe next time"}
                      onChange={(e) => setFormData((prev) => ({ ...prev, newsletter: e.target.value }))}
                      className="w-4 h-4 text-[#5B5F8D] border-gray-300 focus:ring-[#5B5F8D]"
                    />
                    <span className="text-base text-gray-900">Maybe next time</span>
                  </label>
                </div>
              </div>

              {/* Events/Workshops Interested */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-gray-900">
                  What kinds of events/workshops are you looking forward to? <span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-gray-500 mb-3">Select all that apply</p>
                <div className="space-y-2">
                  {eventOptions.map((event) => (
                    <label key={event} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.eventsInterested.includes(event)}
                        onChange={() => handleCheckboxChange(event)}
                        className="w-4 h-4 text-[#5B5F8D] border-gray-300 rounded focus:ring-[#5B5F8D]"
                      />
                      <span className="text-base text-gray-900">{event}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Specify Events */}
              <div className="space-y-2">
                <label htmlFor="eventsSpecify" className="block text-base font-medium text-gray-900">
                  If you chose 'Other', please specify
                </label>
                <textarea
                  id="eventsSpecify"
                  placeholder="Please specify any particular events or workshops you're interested in..."
                  value={formData.eventsSpecify}
                  onChange={(e) => setFormData((prev) => ({ ...prev, eventsSpecify: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B5F8D] focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Comments */}
              <div className="space-y-2">
                <label htmlFor="comments" className="block text-base font-medium text-gray-900">
                  Any questions or comments?
                </label>
                <textarea
                  id="comments"
                  placeholder="Feel free to share any questions, comments, or suggestions..."
                  value={formData.comments}
                  onChange={(e) => setFormData((prev) => ({ ...prev, comments: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B5F8D] focus:border-transparent transition-all resize-none"
                />
              </div>

              {message && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    message.includes("Thank you")
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-base font-semibold text-white bg-[#5B5F8D] rounded-lg hover:bg-[#4A4E7A] focus:outline-none focus:ring-2 focus:ring-[#5B5F8D] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
