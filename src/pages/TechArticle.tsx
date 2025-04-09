import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TechArticle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const articles = {
    "1": {
      title: "L'évolution de l'Intelligence Artificielle en 2024",
      date: "15 Mars 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      content: `
        L'intelligence artificielle continue de révolutionner notre façon de travailler et de vivre. En 2024, nous observons des avancées significatives dans plusieurs domaines clés...

        ## Les grandes tendances

        1. **L'IA générative** devient plus précise et plus efficace
        2. **L'apprentissage automatique** s'améliore constamment
        3. **L'IA éthique** prend une place centrale dans les discussions

        ## Impact sur le développement web

        L'IA transforme également la façon dont nous développons des applications web...

        ## Perspectives d'avenir

        Les prochaines années promettent d'être encore plus excitantes...
      `
    },
    "2": {
      title: "Les tendances DevOps pour 2024",
      date: "10 Mars 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80",
      content: `
        Le DevOps continue d'évoluer rapidement, apportant de nouvelles pratiques et outils qui transforment le développement logiciel...

        ## Principales tendances

        1. **L'automatisation** devient encore plus importante
        2. **La sécurité** s'intègre davantage dans le pipeline
        3. **Le cloud native** continue sa progression

        ## Nouveaux outils

        De nombreux outils innovants font leur apparition...

        ## Meilleures pratiques

        Les équipes DevOps adoptent de nouvelles approches...
      `
    }
  };

  const article = articles[id as keyof typeof articles];

  const handleReturn = () => {
    navigate('/#techwatch');
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900">
        <p className="text-xl text-gray-600 dark:text-gray-300">Article non trouvé</p>
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
        <div className="max-w-4xl mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-6 dark:text-white">{article.title}</h1>

              <div className="prose dark:prose-invert max-w-none">
                {article.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </main>
    </div>
  );
}