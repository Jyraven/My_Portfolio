import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TechWatch() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const articles = [
    {
      id: 1,
      title: "L'évolution de l'Intelligence Artificielle en 2024",
      date: "15 Mars 2024",
      summary: "Analyse des dernières avancées en IA et leur impact sur le développement web...",
      image: "/assets/images/cover.webp",
      readTime: "5 min"
    }
  ];

  return (
    <section id="techwatch" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Veille Technologique</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Restez informé des dernières tendances tech</p>
        </motion.div>

        <div className="flex justify-center">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl w-full"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.summary}</p>
                <Link
                  to={`/techwatch/${article.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300"
                >
                  Lire la suite
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}