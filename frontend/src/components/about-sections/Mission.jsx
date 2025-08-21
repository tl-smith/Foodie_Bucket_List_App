import { Target } from "lucide-react";
export default function MissionSection() {
  return (
    <section className="mb-20">
      <div className="relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="relative p-12">
          <div className="flex items-center mb-8">
            <Target className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-4xl font-bold text-primary">Mission</h2>
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
  )
}
