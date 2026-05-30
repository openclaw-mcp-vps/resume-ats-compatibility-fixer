import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ATS Resume Fixer — Pass Every Applicant Tracking System',
  description: 'Upload your resume and a job description. Get AI-powered fixes for formatting, keywords, and structure to beat ATS screening systems and land more interviews.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="96ab0c6b-69e0-4e5c-b677-bde0adbea220"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
