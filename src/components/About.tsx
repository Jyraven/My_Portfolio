import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileDown } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">À Propos de Moi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionné par le développement et les nouvelles technologies, je suis actuellement en 2 ème année en BTS SIO SLAM. 
            Mon objectif a terme est de devenir développeur de jeux vidéo mais l'année prochaine je voudrait fare une bachelor concepteur et développeur d'application.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">Expériences Professionnelles</h3>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Technicien support</h4>
              <p className="text-gray-600">Entreprise Exadis • 2023</p>
              <p className="mt-2">Support technique interne</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Appli web</h4>
              <p className="text-gray-600">Entreprise Exadis • 2025</p>
              <p className="mt-2">Développent d'une application de gestion des comptes</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Projet École</h4>
              <p className="text-gray-600">BTS SIO • 2024-2025</p>
              <p className="mt-2">Création d'une application de gestion des frais</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Portfolio</h4>
              <p className="text-gray-600">BTS SIO • 2024-2025</p>
              <p className="mt-2">Création d'un portfolio qui servira pour mon identité professionnel</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="public/assets/docs/cv.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            <FileDown className="w-5 h-5" />
            Télécharger mon CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}