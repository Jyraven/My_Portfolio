import { motion} from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Header() {
  const text = "Étudiant en BTS SIO SLAM";

  return (
    <header className="relative h-screen flex items-center justify-center parallax"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80")'
      }}>
      <div className="text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
        </motion.div>
        
        <motion.h1
          className="text-5xl font-bold mb-4"
          variants={floatingAnimation}
          animate="animate"
        >
          Jérémy VERNAY
        </motion.h1>

        <motion.div
          variants={typewriterVariants}
          initial="hidden"
          animate="visible"
          className="h-12 flex justify-center items-center"
        >
          <motion.div className="flex overflow-hidden">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="#about"
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
          >
            En savoir plus
          </a>
        </motion.div>
      </div>
    </header>
  );
}