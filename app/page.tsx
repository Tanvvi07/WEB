"use client";

import { useState, FormEvent } from "react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're here to help you achieve your goals. Get in touch with us and
            let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
              Contact Us
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Email Support
            </h3>
            <p className="text-gray-600">
              Reach out via email for detailed inquiries
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Quick Response
            </h3>
            <p className="text-gray-600">
              We typically respond within 24 hours
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Live Chat
            </h3>
            <p className="text-gray-600">
              Available for immediate assistance
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

