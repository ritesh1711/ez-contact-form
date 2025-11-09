import React from 'react'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


export default function App(){
return (
<div className="min-h-screen flex flex-col">
<header className="bg-white shadow-sm">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="text-xl font-bold">EZ Labs</div>
<nav className="space-x-6 hidden md:block text-sm text-gray-600">
<a href="#home">Home</a>
<a href="#contact">Contact</a>
</nav>
</div>
<hea
</header>


<main className="flex-1">
<Hero />
<ContactForm />
</main>


<Footer />
</div>
)
}