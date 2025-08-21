import { MapPin, Target, Cog, Users } from "lucide-react";
export default function HowItWorksSection() {
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Cog className="h-8 w-8 text-secondary mr-4" />
          <h2 className="text-4xl font-bold text-primary">How It Works</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Discovering amazing food experiences has never been easier
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 rounded-lg border bg-card text-card-foreground shadow">
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-accent-foreground" />
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
              <Target className="h-8 w-8 text-accent-foreground" />
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
  )
}
