import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ContactForm from "@/components/contact-form"
import AnimatedBackground from "@/components/animated-background"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Umer Patel</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href="#about"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#projects"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#skills"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative group"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <AnimatedBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <AnimatedText
                  text="Hi, I'm Umer"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                />
                <AnimatedText
                  text="Full Stack Developer specializing in building exceptional digital experiences"
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
                  delay={0.5}
                />
              </div>
              <AnimatedSection delay={0.8}>
                <Link href="#contact">
                  <Button className="px-8 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-primary-foreground z-0 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    I'm a passionate developer with relevant experience building web applications. I love solving
                    complex problems and creating intuitive, user-friendly interfaces.
                  </p>
                </div>
              </AnimatedSection>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <AnimatedSection
                  delay={0.2}
                  className="mx-auto aspect-square overflow-hidden rounded-xl sm:w-full lg:order-last"
                >
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    width="400"
                    height="400"
                    alt="Profile"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </AnimatedSection>
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <AnimatedSection delay={0.3}>
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Background</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Data Science student with a focus on web technologies and user experience design.
                          </p>
                        </div>
                      </li>
                    </AnimatedSection>
                    <AnimatedSection delay={0.4}>
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Experience</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Worked at tech startups and established companies, building everything from e-commerce
                            platforms to SaaS applications.
                          </p>
                        </div>
                      </li>
                    </AnimatedSection>
                    <AnimatedSection delay={0.5}>
                      <li>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">Approach</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            I believe in clean code, user-centered design, and continuous learning.
                          </p>
                        </div>
                      </li>
                    </AnimatedSection>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Here are some of my recent projects. Each one presented unique challenges and learning
                    opportunities.
                  </p>
                </div>
              </AnimatedSection>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
                <ProjectCard
                  title="E-commerce Platform"
                  description="A full-featured online store with product management, cart functionality, and payment processing."
                  tags={["React", "Node.js", "MongoDB", "Stripe"]}
                  imageUrl="/placeholder.svg?height=250&width=500"
                  githubUrl="https://github.com/callmeumair/E-Commerce"
                  liveUrl="https://e-commerce-six-rose-77.vercel.app/"
                  index={0}
                />
                <ProjectCard
                  title="Task Management App"
                  description="A productivity application with drag-and-drop task organization, reminders, and team collaboration features."
                  tags={["Next.js", "TypeScript", "Prisma", "Tailwind"]}
                  imageUrl="/placeholder.svg?height=250&width=500"
                  githubUrl="https://github.com/callmeumair/Task-manager"
                  liveUrl="https://task-manager-flax-pi.vercel.app/"
                  index={1}
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A responsive portfolio website built with modern web technologies."
                  tags={["React", "Tailwind CSS", "Framer Motion"]}
                  imageUrl="/placeholder.svg?height=250&width=500"
                  githubUrl="https://github.com"
                  liveUrl="https://example.com"
                  index={2}
                />
                <ProjectCard
                  title="Weather Dashboard"
                  description="A weather application that provides real-time forecasts, historical data, and interactive maps."
                  tags={["JavaScript", "APIs", "Chart.js", "CSS"]}
                  imageUrl="/placeholder.svg?height=250&width=500"
                  githubUrl="https://github.com"
                  liveUrl="https://example.com"
                  index={3}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills & Technologies</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    These are the technologies and tools I work with on a regular basis.
                  </p>
                </div>
              </AnimatedSection>
              <div className="mx-auto grid max-w-5xl gap-6 py-12">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  <SkillBadge name="JavaScript" index={0} />
                  <SkillBadge name="TypeScript" index={1} />
                  <SkillBadge name="React" index={2} />
                  <SkillBadge name="Next.js" index={3} />
                  <SkillBadge name="Node.js" index={4} />
                  <SkillBadge name="Express" index={5} />
                  <SkillBadge name="MongoDB" index={6} />
                  <SkillBadge name="SQL" index={7} />
                  <SkillBadge name="Tailwind CSS" index={8} />
                  <SkillBadge name="HTML/CSS" index={9} />
                  <SkillBadge name="Git" index={10} />
                  <SkillBadge name="Docker" index={11} />
                  <SkillBadge name="AWS" index={12} />
                  <SkillBadge name="GraphQL" index={13} />
                  <SkillBadge name="Redux" index={14} />
                  <SkillBadge name="Jest" index={15} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative">
          <AnimatedBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AnimatedSection>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Have a project in mind or want to chat? Feel free to reach out!
                  </p>
                </div>
              </AnimatedSection>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                <AnimatedSection delay={0.2} className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center space-x-2 group">
                    <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 text-primary" />
                    <span className="transition-colors duration-300 group-hover:text-primary">
                      umerpatel1540@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/umerpatel/"
                      className="hover:underline transition-colors duration-300 group-hover:text-primary"
                    >
                      linkedin.com/in/umerpatel
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <Github className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 text-primary" />
                    <a
                      href="https://github.com/callmeumair"
                      className="hover:underline transition-colors duration-300 group-hover:text-primary"
                    >
                      github.com/callmeumair
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <Twitter className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 text-primary" />
                    <a
                      href="https://twitter.com"
                      className="hover:underline transition-colors duration-300 group-hover:text-primary"
                    >
                      @umerpatel
                    </a>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <ContactForm />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Umer Patel. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

