import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';



const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
       await emailjs.send(
                'service_ivg27qn',
                'template_tdtpl3h',
                {
                    from_name: form.name,
                    to_name: 'Sharan',
                    from_email: form.email,
                    to_email: 'workksharan@gmail.com',
                    message: form.message,
                },
           'A2xxIS48WHKPS21OA')

            setLoading(false);
       alert('Your message has been sent!')

        } catch (error) {
            setLoading(false);

            console.log(error);
            alert('Something went wrong!')
        }

        }



    return (
        <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-full" />

                <div className="contact-container">
                    <h3 className="head-text mt-10">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you need a new website, want to enhance your current platform, or have a unique project idea, I'm eager to assist you in bringing it to life.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"

                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"

                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;