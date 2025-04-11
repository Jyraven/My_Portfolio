import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TechArticle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const articles = {
    "1": {
      title: "L’IA générative : nouvel allié du développement de jeux vidéo",
      date: "15 Mars 2025",
      readTime: "5 min",
      image: "/My_Portfolio/assets/images/cover.webp",
      extraInfo: [
        { type: "title", content: "L'IA générative dans le développement de jeux vidéo : révolution des processus de création" },
        { type: "subtitle", content: "Introduction à l'IA générative dans le jeu vidéo" },
        { type: "paragraph", content: "L’intelligence artificielle générative chamboule les codes du développement de jeux vidéo. Contrairement à l'IA traditionnelle, qui se limite à répondre à des actions prédéfinies, l’IA générative est capable de créer du contenu original de manière autonome. Ce type d’IA utilise des algorithmes d’apprentissage profond tels que les réseaux neuronaux et les GANs (Generative Adversarial Networks) pour produire des mondes, des personnages ou des scénarios uniques." },
        { type: "paragraph", content: "Cette capacité de génération automatisée ouvre de nouvelles perspectives dans la création de jeux vidéo, tant au niveau des graphismes, que des interactions narratives et des mécaniques de jeu. Des jeux comme No Man’s Sky, qui propose un univers presque infini basé sur la génération procédurale, montrent déjà l’impact de cette technologie dans l'industrie. À une époque où les attentes des joueurs sont de plus en plus élevées, l’IA générative permet de repousser les limites de l'imagination humaine tout en optimisant les processus de production." },
      
        { type: "title", content: "L'IA générative : un atout pour accélérer et enrichir la création" },
        { type: "image", src: "assets/images/image1.webp", alt: "Illustration IA accélérant la création de contenus"},
        { type: "subtitle", content: "Automatisation et gain de temps dans le développement" },
        { type: "paragraph", content: "L’une des principales forces de l’IA générative réside dans sa capacité à réduire considérablement les temps de production. Des tâches complexes comme la création d’environnements, de quêtes ou de personnages peuvent désormais être automatisées. Au lieu de concevoir manuellement chaque détail d’un monde, les développeurs peuvent laisser l’IA générer des structures tout en ajustant certains paramètres pour maintenir la cohérence artistique et technique." },
        { type: "paragraph", content: "Prenons l’exemple de la génération d’environnements : dans un jeu comme Minecraft, le monde est généré de manière procédurale à partir d’algorithmes qui utilisent des règles définies pour créer un espace cohérent. Ce processus permet de proposer une variété de terrains et d’éléments infinis, offrant aux joueurs une expérience toujours nouvelle." },
      
        { type: "subtitle", content: "PNJ plus intelligents et réalistes" },
        { type: "paragraph", content: "L’IA générative permet également de révolutionner la manière dont les personnages non-joueurs (PNJ) interagissent avec les joueurs. Plutôt que de se limiter à des comportements programmés, ces personnages peuvent réagir de manière plus dynamique, en fonction des actions du joueur. Le système Némésis dans Middle-Earth: Shadow of Mordor est un exemple innovant : chaque PNJ mémorise ses interactions avec le joueur et adapte ses comportements en conséquence, rendant l’expérience plus immersive et personnalisée." },
        { type: "paragraph", content: "Avec l'IA générative, la programmation des PNJ devient plus complexe, mais aussi plus enrichissante, car les développeurs doivent concevoir des systèmes où l’adaptabilité et l’apprentissage machine permettent aux PNJ d’évoluer en temps réel." },
      
        { type: "subtitle", content: "Pathfinding et génération procédurale de niveaux" },
        { type: "paragraph", content: "Le pathfinding (ou la recherche du meilleur chemin pour un personnage) est également amélioré grâce à l’IA générative. Les algorithmes modernes peuvent calculer les chemins optimaux dans des environnements en constante évolution, générés de manière procédurale. Dans un jeu comme Rogue Legacy, les niveaux sont générés à la volée, ce qui signifie que les développeurs doivent non seulement prévoir des systèmes de déplacement intelligents pour les personnages, mais aussi veiller à ce que les niveaux soient équilibrés et jouables." },
      
        { type: "title", content: "L'IA générative et les outils des développeurs" },
        { type: "image", src: "assets/images/image2.webp", alt: "Illustration IA générative et outils de développement"},
        { type: "subtitle", content: "Génération procédurale d'environnements et de contenu" },
        { type: "paragraph", content: "Les développeurs de jeux vidéo, notamment ceux travaillant avec des moteurs comme Unity ou Unreal Engine, bénéficient directement des avancées de l'IA générative. Des outils tels que GPT (pour les dialogues) ou les GANs (pour les visuels) permettent d’automatiser la création de niveaux, d’objets interactifs, ou même de scénarios. Ces systèmes peuvent être programmés pour générer des expériences uniques pour chaque joueur, avec des environnements qui évoluent de manière organique en fonction des décisions prises dans le jeu." },
        { type: "paragraph", content: "Dans Unreal Engine, il est possible d'intégrer des algorithmes procéduraux pour créer des environnements modulables et interactifs, offrant une flexibilité sans précédent aux développeurs." },
      
        { type: "subtitle", content: "Création de musique et de design via l'IA" },
        { type: "paragraph", content: "L'IA générative ne se limite pas aux aspects visuels. Des outils comme AIVA et Amper permettent de générer des bandes-son adaptées à l’ambiance et aux actions des joueurs en temps réel. Cela permet de créer une atmosphère immersive sans nécessiter une création manuelle pour chaque scène ou séquence du jeu." },
        { type: "paragraph", content: "Les développeurs peuvent également utiliser l’IA pour créer des visuels, en générant des textures ou des designs spécifiques selon les besoins du jeu, ce qui allège considérablement la charge de travail des artistes et des concepteurs graphiques." },
      
        { type: "subtitle", content: "Tendances récentes dans les moteurs de jeux vidéo" },
        { type: "paragraph", content: "Les moteurs de jeux vidéo évoluent rapidement pour intégrer l'IA générative dans leurs systèmes. Unity et Unreal Engine intègrent des outils avancés d'IA pour faciliter la création de contenu généré dynamiquement. NVIDIA, avec son outil Omniverse, explore également des solutions basées sur l’IA pour générer des animations et des personnages en temps réel." },
        { type: "paragraph", content: "Les jeux récents comme AI Dungeon, qui s’appuie sur des systèmes d'IA générative pour créer des dialogues et des récits interactifs, ou No Man’s Sky, montrent la puissance de cette technologie dans des cas pratiques concrets." },
      
        { type: "title", content: "Défis techniques et créatifs pour les programmeurs" },
        { type: "image", src: "assets/images/image3.webp", alt: "Illustration des défis techniques de l'IA générative"},
        { type: "subtitle", content: "Complexité de l'intégration" },
        { type: "paragraph", content: "Bien que l’IA générative ouvre de nouvelles perspectives créatives, son intégration n’est pas sans défis. Les systèmes génératifs peuvent produire du contenu incohérent ou mal équilibré, ce qui demande aux programmeurs de concevoir des systèmes robustes pour encadrer et contrôler les créations générées. La cohérence des niveaux ou des dialogues générés peut être difficile à maintenir, et la gestion de bugs issus de ces systèmes autonomes pose des défis supplémentaires. Les développeurs doivent donc prévoir des garde-fous pour valider et corriger les éléments produits par l’IA." },
      
        { type: "subtitle", content: "Adaptabilité des outils IA" },
        { type: "paragraph", content: "Pour travailler avec l’IA générative, les développeurs doivent également acquérir de nouvelles compétences. La maîtrise des algorithmes d’apprentissage automatique, des modèles pré-entraînés, ainsi que leur intégration dans les moteurs de jeu sont désormais des compétences cruciales. Les bibliothèques comme TensorFlow ou PyTorch permettent de concevoir des modèles capables de générer du contenu de manière fluide, mais nécessitent une compréhension approfondie du machine learning." },
      
        { type: "subtitle", content: "Impact sur le métier de développeur" },
        { type: "paragraph", content: "L'IA générative transforme le rôle des développeurs. Au lieu de passer des heures à concevoir manuellement chaque détail, les programmeurs doivent désormais se concentrer sur la supervision des systèmes qui génèrent des mondes, des personnages et des scénarios. Cette transition implique une adaptation des compétences, mais permet aussi de créer des expériences de jeu plus immersives et personnalisées pour les joueurs. Les développeurs peuvent utiliser ces technologies pour proposer des jeux dont l’histoire et les interactions se modifient en fonction des choix des joueurs, offrant des expériences uniques à chaque session de jeu." },
      
        { type: "title", content: "Conclusion : une révolution prometteuse mais complexe" },
        { type: "image", src: "assets/images/image4.webp", alt: "Illustration interaction entre IA et développeurs"},
        { type: "paragraph", content: "L’IA générative est indéniablement un outil puissant pour le développement de jeux vidéo. Elle permet d’automatiser des tâches complexes, de réduire les temps de production et d’enrichir les expériences de jeu avec des mondes et des interactions uniques." },
        { type: "paragraph", content: "Cependant, cette technologie pose aussi des défis importants, notamment en termes d’intégration technique et de gestion de la cohérence des contenus générés." },
        { type: "paragraph", content: "Pour les développeurs, l’avenir passe par l’apprentissage des technologies d’IA, comme les GANs et les modèles de deep learning. Ces outils deviennent incontournables pour ceux qui souhaitent créer les expériences vidéoludiques de demain." }
      ]
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
  className="w-full h-[550px] object-cover bg-black rounded-xl"
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

              <div className="mt-8 space-y-6">
              {article.extraInfo.map((block, index) => {
                switch (block.type) {
                  case 'title':
                    return <h2 key={index} className="text-2xl font-bold dark:text-white">{block.content}</h2>;
                  case 'subtitle':
                    return <h3 key={index} className="text-lg italic font-medium dark:text-white">{block.content}</h3>;
                  case 'paragraph':
                    return <p key={index} className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{block.content}</p>;
                  case 'image':
                    return (
                      <img
                        key={index}
                        src={block.src}
                        alt={block.alt || ''}
                        className="w-full my-6 rounded-xl shadow-md"
                      />
                    );
                  default:
                    return null;
                }
              })}
              </div>
            </div>
          </motion.article>
        </div>
      </main>
    </div>
  );
}