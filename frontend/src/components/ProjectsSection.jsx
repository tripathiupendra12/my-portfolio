import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowRight, FaGithub, FaTrash } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  // Fetch Projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("https://my-portfolio-backend-dlwe.onrender.com/project");
        setProjects(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, []);

  //  Delete Project (without reload)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://my-portfolio-backend-dlwe.onrender.com/project/${id}`);
      setProjects((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="Projects" className="py-24 px-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div
              key={item._id}
              className="group bg-card rounded-lg overflow-hidden shadow"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>

                {/*Actions */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-color duration-300"
                    >
                      <FiExternalLink size={20} />
                    </a>

                    <a
                      href={item.gitHubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-color duration-300"
                    >
                      <FaGithub size={20} />
                    </a>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-foreground/80 hover:text-primary transition-color duration-300"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Project */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/newProject")}
            className="cosmic-button flex items-center mx-auto gap-2"
          >
            Add New Project <FaArrowRight size={16} />
          </button>
        </div>

        {/* Github */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/tripathiupendra12"
            target="_blank"
            rel="noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <FaArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
