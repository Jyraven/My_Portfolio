import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Application web de Gestion des Frais",
      description: "Application web développée dans le cadre del'épreuve E5 du BTS SIO SLAM.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Jyraven/Afip.git",
      demo: "/project/1"
    },
    {
      id: 2,
      title: "Portail Admin",
      description: "Projet de développement d'une application web en entreprise visant a créer des comptes destinées a être utilisé dans une appli mobile",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "PHP", "pgSQL"],
      demo: "/project/2"
    },
    {
      id: 3,
      title: "Portfolio",
      description: "Portfolio personnel présentant mes compétences et réalisations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "/project/3"
    },
    {
      id: 4,
      title: "Présence en ligne de l'organisation",
      description: "TP ",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: [],
      demo: "/project/4"
    },
    {
      id: 5,
      title: "GLPI",
      description: "Utilisation de GLPI dans un but de support technique et de contrôle d'inventaire.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: [],
      demo: "/project/5"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Mes Projets</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Découvrez mes dernières réalisations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <Link
                      to={project.demo}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Link to={project.demo}>
                  <h3 className="text-xl font-bold mb-2 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}