import { Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Jérémy VERNAY</h3>
            <p className="text-gray-400">Étudiant en BTS SIO SLAM</p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/Jyraven"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:jeremver69@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm pb-24">
          <p>&copy; {currentYear} Jérémy VERNAY. Tous droits réservés.</p>
          <p className="mt-2">Développé en React et avec Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}