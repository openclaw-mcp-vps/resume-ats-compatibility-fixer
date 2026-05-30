export default function Page() {
  const faqs = [
    {
      q: 'What is an ATS and why does it matter?',
      a: 'Applicant Tracking Systems automatically filter resumes before a human ever sees them. Over 75% of resumes are rejected by ATS before reaching a recruiter. Proper formatting and keyword alignment are critical.'
    },
    {
      q: 'How does the analysis work?',
      a: 'You upload your resume and paste the job description. Our AI scans for keyword gaps, formatting issues, missing sections, and structural problems that cause ATS rejections, then gives you a prioritized fix list.'
    },
    {
      q: 'What file formats are supported?',
      a: 'We support PDF, DOCX, and plain text resumes. For best results, use a clean single-column format without tables or graphics.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          ATS Resume Fixer
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Getting Filtered Out.<br />
          <span className="text-[#58a6ff]">Fix Your Resume for ATS.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste a job description, upload your resume, and get a precise AI report showing exactly what to fix — keywords, formatting, and structure — so your resume reaches a real human.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Get Started — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { step: '1', title: 'Upload Resume', desc: 'PDF, DOCX, or plain text — any format works.' },
            { step: '2', title: 'Paste Job Description', desc: 'Copy the full job posting you are applying to.' },
            { step: '3', title: 'Get Your Fix Report', desc: 'Receive a prioritized list of ATS fixes to apply.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="w-9 h-9 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] font-bold text-sm flex items-center justify-center mx-auto mb-3 border border-[#58a6ff]/20">{step}</div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to pass ATS screening</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              'Unlimited resume analyses',
              'Keyword gap detection',
              'Formatting & structure fixes',
              'ATS compatibility score',
              'Tailored per job description',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Start Fixing My Resume
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} ATS Resume Fixer. All rights reserved.
      </footer>
    </main>
  )
}
