import { MapPin, Target, Cog, Users, Mail, Phone, MapPinIcon } from "lucide-react";
import { useState } from "react";

function About() {
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

  //This is where the team members would be placed. More specifically, the name, role, and description of each team member.
  const teamMembers = [
    {
      name: "Winona Murphy",
      role: "Founder & Full Stack Developer",
      description: "Full-stack developer passionate about user experience",
      avatar: "WM"
    },
    {
      name: "Tyechia Smith",
      role: "Founder & Full Stack Developer",
      description: "Full-stack developer passionate about user experience",
      avatar: "TS"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            About WanderBite
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting food lovers with authentic local experiences around the world
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
            <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
            <div className="relative p-12">
              <div className="flex items-center mb-8">
                <Target className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At WanderBite, we believe that the best way to experience a destination is through its food. 
                Our mission is to connect travelers with authentic, local dining experiences that showcase 
                the true flavors and culture of each destination.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not just about finding restaurants – we're about creating memorable culinary journeys 
                that bring people together, support local communities, and celebrate the diversity of global cuisine.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Cog className="h-8 w-8 text-secondary mr-4" />
              <h2 className="text-4xl font-bold text-foreground">How It Works</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Discovering amazing food experiences has never been easier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 rounded-lg border bg-card text-card-foreground shadow">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">1. Share Your Location</h3>
                <p className="text-muted-foreground">
                  Tell us where you're traveling or where you'd like to explore locally. 
                  Our system understands both specific addresses and general areas.
                </p>
              </div>
            </div>

            <div className="group hover:shadow-adventure transition-all duration-300 transform hover:scale-105 rounded-lg border bg-card text-card-foreground shadow">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-adventure rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">2. Get Curated Recommendations</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes local food scenes, reviews, and cultural preferences 
                  to suggest authentic restaurants and hidden gems you'll love.
                </p>
              </div>
            </div>

            <div className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 rounded-lg border bg-card text-card-foreground shadow">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-food rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">3. Experience & Share</h3>
                <p className="text-muted-foreground">
                  Visit recommended spots, enjoy authentic local cuisine, and share 
                  your experiences to help other food lovers discover amazing places.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-accent mr-4" />
              <h2 className="text-4xl font-bold text-foreground">Meet Our Team</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              The passionate food and travel enthusiasts behind WanderBite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group hover:shadow-glow transition-all duration-300 transform hover:scale-105 rounded-lg border bg-card text-card-foreground shadow">
                <div className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-4xl font-bold text-foreground">Get In Touch</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Have questions or suggestions? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="rounded-lg border bg-card text-card-foreground shadow">
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
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
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border bg-card text-card-foreground shadow">
                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-hero text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
