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
      description: "Une application web complète développée pour GSB ,qui est une entreprise fictive, permettant la gestion de fiches de frais.",
      image: "/My_Portfolio/assets/images/gsb.webp",
      technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Jyraven/Afip.git",
      demo: "/project/1"
    },
    {
      id: 2,
      title: "Portail Admin",
      description: "Une application web développée pour mon entreprise destiné à la gestion des comptes utilisateurs qui serviront à une application mobile en interne.",
      image: "/My_Portfolio/assets/images/admin.webp",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "PgSQL"],
      demo: "/project/2"
    },
    {
      id: 3,
      title: "Portfolio",
      description: "Portfolio personnel présentant mes compétences et réalisations de manière interactive.",
      image: "/My_Portfolio/assets/images/portfolio.webp",
      technologies: ["React","TypeScript","Tailwind CSS","Framer Motion","React Router","Lucide React","Formspree","Vite","ESLint"],
      github: "https://github.com/Jyraven/My_Portfolio",
      demo: "/project/3"
    },
    {
      id: 4,
      title: "Présence en ligne de l'organisation",
      description: "Travail pratique sur les stratégies de référencement et la visibilité en ligne d'une organisation.",
      image: "/My_Portfolio/assets/images/seo.webp",
      technologies: ["HTML5"],
      demo: "/project/4"
    },
    {
      id: 5,
      title: "GLPI",
      description: "Mise en œuvre de GLPI pour le support technique, la gestion d'inventaire et la traçabilité des incidents.",
      image: "/My_Portfolio/assets/images/glpi.webp",
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
                  {project.github && (
                    <a
                      href={project.github}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  )}
                  {project.demo && (
                    <Link
                      to={project.demo}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </Link>
                  )}
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