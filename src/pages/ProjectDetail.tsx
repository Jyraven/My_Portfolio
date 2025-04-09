import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = {
    "1": {
      title: "Application de Gestion",
      description: "Une application web complète développée pour une association permettant la gestion des membres et des événements.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "#",
      demo: "#",
      features: [
        "Gestion des membres et des cotisations",
        "Calendrier des événements",
        "Système de notification",
        "Tableau de bord administrateur",
        "Export de rapports"
      ],
      challenges: "La principale difficulté était de créer une interface intuitive tout en gérant des données complexes.",
      solutions: "Utilisation de React Query pour la gestion du cache, implementation d'un système de rôles, et mise en place d'une architecture modulaire."
    },
    "2": {
      title: "E-commerce",
      description: "Une plateforme e-commerce moderne avec système de panier et paiement en ligne.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe", "Redis"],
      github: "#",
      demo: "#",
      features: [
        "Catalogue produits",
        "Système de panier",
        "Paiement sécurisé",
        "Gestion des commandes",
        "Espace client"
      ],
      challenges: "L'optimisation des performances et la gestion du cache étaient cruciales pour une expérience utilisateur fluide.",
      solutions: "Mise en place de Redis pour le cache, lazy loading des images, et optimisation des requêtes SQL."
    },
    "3": {
      title: "Portfolio",
      description: "Portfolio personnel présentant mes compétences et réalisations de manière interactive.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      github: "#",
      demo: "#",
      features: [
        "Design responsive",
        "Animations fluides",
        "Mode sombre",
        "SEO optimisé",
        "Performance optimisée"
      ],
      challenges: "Créer une expérience utilisateur unique tout en maintenant des performances optimales.",
      solutions: "Utilisation de Framer Motion pour les animations, optimisation des images, et implementation progressive des fonctionnalités."
    }
  };

  const project = projects[id as keyof typeof projects];

  const handleReturn = () => {
    navigate('/#projects');
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900">
        <p className="text-xl text-gray-600 dark:text-gray-300">Projet non trouvé</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
      <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button
            onClick={handleReturn}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour au portfolio
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h1 className="text-3xl font-bold mb-4 dark:text-white">{project.title}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">Fonctionnalités</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">Défis & Solutions</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Défis</h3>
                      <p className="text-gray-600 dark:text-gray-300">{project.challenges}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Solutions</h3>
                      <p className="text-gray-600 dark:text-gray-300">{project.solutions}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  Voir le code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  Voir le projet
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}