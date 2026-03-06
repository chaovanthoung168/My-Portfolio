'use client'

export default function Skills() {
  const allSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Tailwind CSS',
    'React',
    'Next.js',
    'Spring',
    'Java',
    'Microservices',
    'Kafka',
    'Debezium',
    'Docker',
    'PostgreSQL',
    'MongoDB',
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">
            Full-stack development expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up animate-delay-100">
          {allSkills.map((skill, idx) => (
            <div
              key={skill}
              className="px-5 py-2.5 rounded-full border border-border bg-card/30 hover:bg-card hover:border-primary/50 transition-all duration-300 cursor-default group"
              style={{
                animationDelay: `${idx * 30}ms`,
              }}
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
