import Link from "next/link";

const projectsData = [
  {
    title: "RestLab Application",
    description:
      "RestLab is an API testing platform similar to Postman that helps developers send requests, test endpoints, and analyze responses efficiently. It supports team collaboration and provides mock JSON data to simulate requests and streamline API development.",
    tags: ["Next.js", "WebSockets", "PostgreSQL", "Spring Boot", "RabbitMQ"],
    link: "#",
    featured: true,
  },
  {
    title: "Todo List Application",
    description:
      "Todo List Application is a simple and intuitive task management app that helps users organize, track, and manage daily activities efficiently. It allows users to create, update, delete, and mark tasks as completed, improving productivity and time management.",
    tags: ["React.js", "RTK Query", "Spring Boot", "PostgreSQL", "Docker"],
    link: "#",
    featured: true,
  },
  {
    title: "Rean Data Application",
    description:
      "Rean Data Application is a data learning and analysis platform designed to help users understand different types of data and visualize insights through interactive charts. It allows users to explore datasets, analyze patterns, and present information in a clear and meaningful way.",
    tags: ["React.js", "RTK Query", "TanStack"],
    link: "#",
    featured: true,
  },
  {
    title: "School Register API (Backend System)",
    description:
      "A backend system for managing school registration, including student enrollment and departments. Provides secure authentication and user access control. Supports payment processing and transactions. Built with a scalable and maintainable architecture.",
    tags: ["Spring Boot", "PostgreSQL", "Docker", "Bakong"],
    link: "#",
    featured: true,
  },
];

export default function Projects() {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-orange-600 text-sm font-mono mb-2 animate-fade-in">
            Featured Work
          </p>
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up animate-delay-100">
            Selected Projects
          </h2>
          {/* <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-smooth animate-fade-in-up animate-delay-200"
          >
            View all projects →
          </Link> */}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, idx) => (
            <Link key={idx} href={project.link}>
              <div
                className={`group p-6 rounded-lg border border-border bg-card hover:border-primary hover:bg-card/80 transition-all duration-300 cursor-pointer transform hover:scale-105 animate-fade-in-up animate-delay-${idx * 100}`}
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
