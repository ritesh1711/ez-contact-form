import React from 'react'


export default function Hero(){
return (
<section id="home" className="bg-gradient-to-r from-sky-50 to-white">
<div className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
<div>
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">EZ Labs — UI Assignment</h1>
<p className="mt-4 text-gray-600">A responsive home page recreation with a contact form integrated to the assignment API.</p>
<div className="mt-6">
<a href="#contact" className="inline-block bg-sky-600 text-white px-5 py-3 rounded-lg shadow hover:opacity-90">Contact Us</a>
</div>
</div>


<div className="bg-white rounded-2xl p-6 shadow md:ml-6">
<h3 className="text-lg font-semibold">What we built</h3>
<ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
<li>Responsive layout (mobile, tablet, desktop)</li>
<li>Contact form with client-side validation</li>
<li>API integration to provided endpoint</li>
</ul>
</div>
</div>
</section>
)
}