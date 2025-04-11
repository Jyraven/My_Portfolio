import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, FolderGit2, Mail, Menu, X, BookOpen } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navItems = [
    { icon: User, label: 'À Propos', hash: '#about' },
    { icon: FolderGit2, label: 'Projets', hash: '#projects' },
    { icon: BookOpen, label: 'Veille Tech', hash: '#techwatch' },
    { icon: Mail, label: 'Contact', hash: '#contact' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollPosition > 100 ? 1 : 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg rounded-full shadow-lg">
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-full"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {(isOpen || window.innerWidth >= 768) && (
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 md:relative md:bottom-0 md:left-0 md:translate-x-0 md:mb-0"
            >
              <ul className="flex flex-col md:flex-row gap-2 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg rounded-2xl p-4 md:p-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(item.hash)}
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300 w-full text-left"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}