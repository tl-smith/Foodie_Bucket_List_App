import { useState } from "react";
import { Mail, Phone, MapPinIcon } from "lucide-react";

function ContactInformation() {
  return (
    <div className="lg:col-span-1 space-y-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow">
        <div className="p-8">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-2">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-primary mr-3" />
              <span className="text-muted-foreground">hello@wanderbite.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-primary mr-3" />
              <span className="text-muted-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 text-primary mr-3" />
              <span className="text-muted-foreground">New York, NY</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow">

        <div className="p-8">
          <h3 className="text-xl font-semibold mb-6">Why Send us a Message?</h3>

          <div className="space-y-2">
            Have questions, feedback, or suggestions? We'd love to hear from you! Let us know how we can make your culinary adventure even better.
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow">
        <div className="p-8">
          <h3 className="text-xl font-semibold mb-6">Follow Our Journey</h3>

          <div className="space-y-2">
            <div className="grid grid-cols-4 gap-4">
              {/* Social Media Icons. Each one is an SVG since lucide doesn't provide social icons */}
              <div className="flex justify-center items-center">
                {/*X*/}
                <svg className="w-5 h-5 fill-primary" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
              </div>

              {/*Facebook*/}
              <div className="flex justify-center items-center">
                <svg className="w-5 h-5 fill-primary" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
              </div>

              {/*Instagram*/}
              <div className="flex justify-center items-center">
                <svg className="w-5 h-5 fill-primary" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
              </div>

              {/*TikTok*/}
              <div className="flex justify-center items-center">
                <svg className="w-5 h-5 fill-primary" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactFormInput({ label, id, placeholder, val, handleInputChange, inputType }) {
  return (
    <>
      <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={inputType ?? "text"}
        placeholder={placeholder}
        value={val}
        onChange={handleInputChange}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </>
  )
}

const ContactFormTextarea = ({ label, id, placeholder, val, handleInputChange }) => {
  return (
    <>
      <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={val}
        onChange={handleInputChange}
        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </>
  )
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for the Message ${formData.name}!. We will reach out to you when possible.`);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Mail className="h-8 w-8 text-primary mr-4" />
          <h2 className="text-4xl font-bold text-primary">Get In Touch</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Have questions or suggestions? We'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-card text-card-foreground shadow">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <ContactFormInput
                      label="Name"
                      id="name"
                      placeholder="Your full name"
                      val={formData.name}
                      handleInputChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <ContactFormInput
                      label="Email"
                      id="email"
                      placeholder="your.email@example.com"
                      val={formData.email}
                      handleInputChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <ContactFormInput
                    label="Subject"
                    id="subject"
                    placeholder="What's this about?"
                    val={formData.subject}
                    handleInputChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <ContactFormTextarea
                    label="Message"
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    val={formData.message}
                    handleInputChange={handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-white hover:bg-primary/80 hover:cursor-pointer h-11 px-8 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <ContactInformation />
      </div>
    </section>
  )
}

