import { Users } from "lucide-react";
export default function TeamSection() {
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
    <section className="mb-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Users className="h-8 w-8 text-accent mr-4" />
          <h2 className="text-4xl font-bold text-primary">Meet The Wander Women</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          The passionate food and travel enthusiasts behind WanderBite
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="group hover:shadow-adventure transition-all duration-300 transform hover:scale-105 rounded-lg border bg-card text-card-foreground shadow">
            <div className="p-6 text-center">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-foreground">
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
  )
}
