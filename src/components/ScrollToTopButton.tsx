import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
<button
  onClick={scrollToTop}
  className="fixed bottom-7 left-1/2 translate-x-[22rem] z-50 p-3 rounded-full bg-white/90 dark:bg-gray-950/90 backdrop-blur shadow-[0_8px_80px_rgba(0,0,0,0.6)] hover:bg-gray-100 dark:hover:bg-gray-800/50 dark:hover:text-blue-400 transition-colors"
  aria-label="Scroll to top"
>
  <ArrowUp className="w-5 h-5 text-gray-700 dark:text-gray-200 transition-colors" />
</button>



    )
  );
}