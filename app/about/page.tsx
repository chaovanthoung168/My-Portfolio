import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function AboutPage() {
  const experience = [
    {
      title: "Senior Full-Stack Engineer",
      company: "Tech Startup",
      period: "2022 - Present",
      description:
        "Leading development of core platform features, mentoring junior developers, and architecting scalable solutions.",
      responsibilities: [
        "Architected and implemented microservices architecture handling 100k+ daily requests",
        "Mentored 5+ junior developers and conducted code reviews",
        "Reduced database query time by 60% through optimization",
        "Led migration from monolith to microservices",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Royal University of Phnom Penh",
      year: "2023 - 2026",
    },
    {
      degree: "Full-Stack Web Development & Spring Microservices",
      school:
        "Institute of Science and Technology Advanced Development (ISTAD)",
      year: "2025 - 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
          >
            <span>←</span>
            Back to Home
          </Link>

          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              My name is Chao Vanthoung. I am a Computer Science graduate with a
              strong passion for web development and software engineering. I
              enjoy building modern, scalable, and user-friendly applications
              while continuously improving my technical skills.
            </p>
          </div>

          {/* Bio */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I graduated from the Department of Computer Science at the Royal
                University of Phnom Penh. In addition, I successfully completed
                my studies at ISTAD, where I gained practical, hands-on
                experience in modern web development and real-world software
                projects.
              </p>
              <p>
                Throughout my academic journey, I worked on various projects
                that strengthened my knowledge in both frontend and backend
                development. I focus on writing clean, maintainable code and
                building applications that solve real problems.
              </p>
              <p>
                My goal is to grow as a professional full-stack developer,
                create scalable systems, and contribute to impactful technology
                solutions.
              </p>
              <p>
                Outside of coding, I continue learning new technologies,
                improving my problem-solving skills, and building personal
                projects to expand my experience.
              </p>
            </div>
          </div>

          {/* Experience */}
          {/* <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-primary pl-6">
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-primary text-lg mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.period}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li
                        key={respIdx}
                        className="text-muted-foreground flex gap-3"
                      >
                        <span className="text-accent flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div> */}

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-accent pl-6">
                  <h3 className="text-2xl font-bold">{edu.degree}</h3>
                  <p className="text-accent text-lg mb-1">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}

          {/* CTA */}
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out if you'd like to discuss a project or just say hello.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
