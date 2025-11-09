import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus('Form Submitted — thank you!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        const body = await res.text();
        setStatus('Submission failed: ' + res.status);
        console.error('API error', res.status, body);
      }
    } catch (err) {
      console.error(err);
      setStatus('Submission failed: network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-root">
      <div
        className="background"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(135deg, #9b0ae3ff 0%, #B5FFFC 50%, #2e0fdfff 100%)',
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          // smooth rendering on high-DPI
          backgroundSize: 'cover',
        }}
      />

      <div className="contact-container">
        {/* Left column - intro / copy */}
        <div className="contact-left">
          <div className="left-inner">
            <h2 className="left-title">Join the Story</h2>
            <p className="left-sub">
              Ready to bring your vision to life? Let’s talk.
            </p>

            <div className="left-body">
              <p>
                Whether you have an idea, a question, or simply want to explore how V can work with you, V’re just a message away.
              </p>
              <p>Let's catch up over coffee.</p>
              <p>Great stories always begin with a good conversation</p>
            </div>
          </div>
        </div>

        {/* Right column - form */}
        <div className="contact-right">
          <div className="form-card">
            <h3 className="form-head">Contact Us</h3>
            <p className="form-sub">Fill the form and we will get back to you.</p>

            <form className="form-grid" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Your name*</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={errors.name ? 'input error' : 'input'}
                  placeholder="Your name"
                />
                {errors.name && <div className="error-text">{errors.name}</div>}
              </div>

              <div className="form-field">
                <label htmlFor="email">Your email*</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={errors.email ? 'input error' : 'input'}
                  placeholder="Your email"
                />
                {errors.email && <div className="error-text">{errors.email}</div>}
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={errors.phone ? 'input error' : 'input'}
                  placeholder="Phone"
                />
                {errors.phone && <div className="error-text">{errors.phone}</div>}
              </div>

              <div className="form-field full">
                <label htmlFor="message">Your message*</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows="5"
                  className={errors.message ? 'textarea error' : 'textarea'}
                  placeholder="Your message"
                />
                {errors.message && <div className="error-text">{errors.message}</div>}
              </div>

              <div className="form-actions">
                <div className="status">{status}</div>
                <button
                  type="submit"
                  disabled={loading}
                  className="submit-btn"
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>

            <div className="contact-footer">
              
              <span className="sep">|</span>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
