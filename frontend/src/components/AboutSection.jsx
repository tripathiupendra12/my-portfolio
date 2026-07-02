import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="About" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I am a passionate <b>Full Stack Developer</b> with a strong
              foundation in frontend and backend development and a growing
              enthusiasm for <b>Artificial Intelligence.</b> I enjoy building responsive,
              user-friendly web applications and integrating AI-powered features
              to create smarter digital experiences. My expertise includes{" "}
              <b>
                {" "}
                HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, Node.js,
                Express.js, MongoDB, REST APIs, Git, and deployment tools.
              </b>
            </p>

            <p className="text-muted-foreground">
              I love solving real-world problems through technology and
              continuously learning new tools and frameworks. Currently, I am
              expanding my knowledge in AI, including LLMs, RAG, vector
              databases, embeddings, and AI application development. My goal is
              to build scalable, high-performance web and AI solutions that
              deliver meaningful impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Passionate about writing clean, efficient, and scalable code
                    to build modern, responsive, and user-friendly web
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Designing for people
                  </h4>
                  <p className="text-muted-foreground">
                    Dedicated to understanding user needs and crafting intuitive
                    interfaces that enhance user experience and accessibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Building Professional Projects
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced in managing projects, collaborating with teams,
                    and delivering creative web solutions that meet business
                    goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
