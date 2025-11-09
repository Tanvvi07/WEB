# Contact Form Application

A single-page responsive web application built with Next.js 14 and Tailwind CSS, featuring a contact form integrated with a REST API endpoint.

## Features

- ✅ Fully responsive design (mobile, tablet, mini desktop, desktop)
- ✅ Contact form with front-end validation
- ✅ Email validation
- ✅ Empty form submission prevention
- ✅ API integration with success message display
- ✅ Modern UI with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Integration

The contact form submits to:
- **Endpoint**: `https://vernanbackend.ezlab.in/api/contact-us/`
- **Method**: POST
- **Content-Type**: application/json

### Request Format
```json
{
  "name": "Test user",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message"
}
```

### Response Format (200)
```json
{
  "created_at": "2025-10-10T05:27:59.371578Z",
  "email": "testuser@gmail.com",
  "id": 49,
  "message": "This is a message",
  "name": "Test user",
  "phone": "908765498",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
```

## Form Validation

- All fields are required
- Email format validation
- Real-time error display
- Success message on successful submission

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   └── ContactForm.tsx # Contact form component
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

