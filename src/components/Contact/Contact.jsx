import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    setErrorMessage('');

    try {
      const response = await emailjs.send(
        'service_eflw7ot', 
        'template_ifdky24', 
        {
          to_name: 'Priyanshi',
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          reply_to: formData.from_email
        },
        'rQCcQKPbS3ja5Am0i' 
      );

      if (response.status === 200) {
        setSuccess(true);
        setFormData({ from_name: '', from_email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError(true);
      setErrorMessage(
        error.text || 'Failed to send message. Please try contacting through LinkedIn or email directly.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/20 via-transparent to-transparent dark:from-purple-900/10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-violet-700 dark:text-purple-400 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting conversations.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-violet-700 dark:text-purple-400 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="from_name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-purple-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="from_email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-purple-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-purple-400"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {success && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/10 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/10 p-3 rounded-lg"
                  >
                    <XCircle className="w-5 h-5" />
                    <div className="flex flex-col">
                      <span>{errorMessage}</span>
                      <span className="text-sm mt-1">
                        Alternative contacts: 
                        <a 
                          href="mailto:priyanshiigupta01@gmail.com"
                          className="text-violet-600 dark:text-purple-400 hover:underline ml-1"
                        >
                          priyanshiigupta01@gmail.com
                        </a>
                      </span>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full px-6 py-3 rounded-lg bg-violet-700 dark:bg-purple-500 text-white hover:bg-violet-800 dark:hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-100 dark:bg-purple-400/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-violet-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-violet-700 dark:text-purple-400 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Delhi, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-violet-700 dark:text-purple-400 mb-6">
                Connect with Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/priyanshiguptaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-violet-50 dark:bg-purple-400/5 hover:bg-violet-100 dark:hover:bg-purple-400/10 transition-colors duration-300 hover:text-blue-500"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/priyanshiiguptaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-violet-50 dark:bg-purple-400/5 hover:bg-violet-100 dark:hover:bg-purple-400/10 transition-colors duration-300 hover:text-gray-800 dark:hover:text-white"
                >
                  <Github className="w-6 h-6" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="mailto:priyanshiigupta01@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-violet-50 dark:bg-purple-400/5 hover:bg-violet-100 dark:hover:bg-purple-400/10 transition-colors duration-300 hover:text-red-500"
                >
                  <Mail className="w-6 h-6" />
                  <span className="font-medium">Email</span>
                </a>
                <a
                  href="https://twitter.com/priyanshiiguptaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-violet-50 dark:bg-purple-400/5 hover:bg-violet-100 dark:hover:bg-purple-400/10 transition-colors duration-300 hover:text-blue-400"
                >
                  <Twitter className="w-6 h-6" />
                  <span className="font-medium">Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
