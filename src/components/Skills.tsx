import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Globe, Server, Shield } from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Front-end",
      icon: Layout,
      items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      category: "Back-end",
      icon: Server,
      items: ["PHP", "Node.js", "Python"]
    },
    {
      category: "Base de données",
      icon: Database,
      items: ["MySQL", "PostgreSQL"]
    },
    {
      category: "Outils & DevOps",
      icon: Code2,
      items: ["Git", "Docker", "VS Code", "Postman", "Linux"]
    },
    {
      category: "Web",
      icon: Globe,
      items: ["SEO", "Responsive Design", "Web Performance", "API REST"]
    },
    {
      category: "Sécurité",
      icon: Shield,
      items: ["Auth JWT", "Cryptographie", "RGPD"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Compétences</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Technologies et outils que j'utilise</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-semibold dark:text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}