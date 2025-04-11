import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ArrowLeft, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  const handleReturn = () => {
    navigate('/#projects');
    // Add a small delay to ensure the navigation has completed
    setTimeout(() => {
      const projectsSection = document.querySelector('#projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    features: string[];
    challenges: string;
    solutions: string;
    extraInfo?: {
      type: 'title' | 'subtitle' | 'paragraph' | 'list';
      content?: string;
      items?: string[];
    }[];
  };

  const projects: Record<string, Project> = {
    "1": {
      title: "Application de Gestion des frais",
      description: "Une application web complète développée pour GSB ,qui est une entreprise fictive, permettant la gestion de fiches de frais.",
      image: "public/assets/images/gsb.webp",
      technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Jyraven/Afip.git",
      features: [
        "Connexion sécurisée avec rôles",
        "Création de fiches de frais",
        "Upload de justificatifs",
        "Clôture manuelle des fiches",
        "Validation et refus des frais",
        "Remboursement partiel ou total",
        "Gestion des utilisateurs",
        "Suivi et statistiques des fiches"
      ],
      challenges: "La principale difficulté était de gérer des droits d'accès stricts selon les rôles tout en assurant la sécurité et la traçabilité des données sensibles.",
      solutions: "Utilisation de sessions PHP sécurisées, mise en place d'un système de rôles (visiteur, comptable, admin), vérifications d'accès sur chaque page, et architecture modulaire inspirée du modèle MVC.",
      extraInfo: [
        { type: "title", content: "Gérer le patrimoine informatique" },
        { type: "subtitle", content: "▸ Exploiter des référentiels, normes et standards adoptés par le prestataire informatique" },
        { type: "paragraph", content: "Les contraintes apposées par le contexte le l'entreprise GSB ont été respecté et la demande a été complété en suivant ces contraintes. On pouvait retrouvé par exemple :" },
        { type: "list", items: [
          "Prise en compte du turnover : Le système doit être simple à prendre en main pour les nouveaux arrivants.",
          "Gestion de fichiers : Possibilité d'ajouter des justificatifs scannés (pdf,png,jpeg).",
          "Centralisation des données : Remplacer la dispersion actuelle par une base de données unique."
        ] },
        { type: "subtitle", content: "▸ Mettre en place et vérifier les niveaux d'habilitation associés à un service" },
        { type: "paragraph", content: "A la connexion le rôle est vérifié et en fonction de ce dernier l'utilisateur a accès ou non a certaine fonctionnalité. Par exemple un visiteur ne pourra pas créer de nouveau utilisateurs" },
        { type: "subtitle", content: "▸ Gérer des sauvegardes" },
        { type: "paragraph", content: "J'ai utilisé GitHub lors du développement de ce projet et je gardais également une sauvegarde en .zip du projet complet (y compris le .sql de ma base de données) que je stockais localement pour éviter toute perte de donnée" },
        { type: "title", content: "Travailler en mode projet" },
        { type: "subtitle", content: "▸ Analyser les objectifs et les modalités d'organisation d'un projet" },
        { type: "paragraph", content: "Avant de commencer à développer ce projet une réflexion a été faite sur les objectifs qui étaient donner de sorte a pouvoir y répondre pleinement. On pouvait par exemple retrouver la centralisation des données auquel j'ai répondu en créant un Model Conceptuel de Donnée me permettant ensuite de mettre en place une base de données répondant à cet objectif." },
        { type: "subtitle", content: "▸ Planifier les activités" },
        { type: "paragraph", content: "Un calendrier prévisionnel a été créer en se basant sur le plan de fonctionnement de l'application qui avait été établi. Ainsi j'ai pu avoir un calendrier avec les périodes et estimation du temps que me prendrai a réalisé les différentes taches prévu pour l'application." },
        { type: "paragraph", content: "En parallèle j'avais donc une liste de taches a faire que je suivais via le tableau et l'application bloc note dans laquelle j'écrivait les point a traiter pour le lendemain et les bug ou comportement anormal que j'avais relevé dans la journée." },
        { type: "paragraph", content: "J'avais également commencer a créer un Trello mais que j'ai abandonné pour soucis pratique. Etant seul sur ce projet, l'application bloc note était plus rapide d'accès et c'était plus facile de m'y retrouver." },
        { type: "subtitle", content: "▸ Évaluer les indicateurs de suivi d'un projet et analyser les écarts" },
        { type: "paragraph", content: "Tout au long du projet j'ai complété un autre tableau avec les durée et période réelles de chaque tache pour pouvoir faire un comparatif entre le calendrier prévisionnel et ce nouveau calendrier réel." }
      ]
    },
    "2": {
      title: "Portail Admin",
      description: "Une application web développée pour mon entreprise destiné à la gestion des comptes utilisateurs qui serviront à une application mobile en interne.",
      image: "public/assets/images/admin.webp",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "PgSQL"],
      github: "",
      features: [
        "Connexion sécurisée avec rôles",
        "Création de comptes utilisateurs",
        "Modification et suppression de comptes",
        "Affichage dynamique des comptes selon le dépôt attribué",
        "Création et impression de code barre unique pour chaque compte",
      ],
      challenges: "La mise en place de l'impression de code barre sur une imprimante zebra donc au format zpl a été la principale difficulté.",
      solutions: "Utilisation de sessions PHP sécurisées, impression géré en PHP, mise en place d'un système de rôles (Admin,Prépa), vérifications d'accès sur chaque page, et architecture modulaire inspirée du modèle MVC.",
      extraInfo: [
        { type: "title", content: "Mettre à disposition des utilisateurs un service informatique" },
        { type: "subtitle", content: "▸ Déployer un service" },
        { type: "paragraph", content: "Pour ce projet j'ai pour commencer paramétrer la VM qui a été montée pour héberger cette appli et j'ai pu l'a mettre en ligne. La mise en production est prévue pour le 22 avril en même temps que le mise en production de notre nouvel ERP." },
        { type: "title", content: "Répondre aux incidents et aux demandes d'assistance et d'évolution" },
        { type: "subtitle", content: "▸ Traiter des demandes concernant les applications" },
        { type: "paragraph", content: "Après la mise en ligne de la première version, des demandes d'évolution m'ont été soumise pour la création et l'impression de code barre unique pour chaque utilisateur à leur création avec possibilité de sélectionner l'imprimante sur laquelle on veut l'imprimer. Petite particularité les imprimantes cible étaient des zébra donc le format du fichier envoyé doit être .zpl." }
      ]
    },
    "3": {
      title: "Portfolio",
      description: "Portfolio personnel présentant mes compétences et réalisations de manière interactive.",
      image: "public/assets/images/portfolio.webp",
      technologies: ["React","TypeScript","Tailwind CSS","Framer Motion","React Router","Lucide React","Formspree","Vite","ESLint"],
      github: "https://github.com/Jyraven/My_Portfolio",
      features: ["Design responsive", "Animations fluides", "Mode sombre", "SEO optimisé", "Performance optimisée"],
      challenges: "Créer une expérience utilisateur unique tout en maintenant des performances optimales.",
      solutions: "Utilisation de Framer Motion pour les animations, optimisation des images, et implementation progressive des fonctionnalités.",
      extraInfo: [
        { type: "title", content: "Organiser son développement professionnel" },
        
        { type: "subtitle", content: "▸ Mettre en place son environnement d'apprentissage personnel" },
        { type: "subtitle", content: "▸ Mettre en œuvre des outils et stratégies de veille informationnelle" },
        { type: "paragraph", content: "La mise en place d’une veille m’a permis de me tenir informé et à jour sur un sujet qui m’intéresse via des newsletters ou la consultation d’articles. J’ai pu apprendre diverses choses concernant l’utilisation de l’IA dans le domaine du jeu vidéo, comme par exemple son vaste champ d’application : non seulement dans les graphismes ou la génération de dialogues, mais aussi dans l’optimisation des performances."},
        { type: "subtitle", content: "▸ Gérer son identité professionnelle" },
        { type: "subtitle", content: "▸ Développer son projet professionnel" },
        {type: "paragraph", content:"Mon portfolio me permet de me présenter auprès d’entreprises souhaitant en savoir plus sur mon profil. Il constitue une vitrine bien plus complète qu’un simple CV, et me permet de valoriser mes compétences, mes projets et mon identité professionnelle." }
      ]
    },
    "4": {
      title: "Présence en ligne de l'organisation",
      description: "Travail pratique sur les stratégies de référencement et la visibilité en ligne d'une organisation.",
      image: "public/assets/images/seo.webp",
      technologies: ["HTML5"],
      github: "",
      features: ["apprentissage des méthode de référencement","stratégies de visibilité en ligne","optimisation des balises SEO","analyse de la concurrence","suivi des performances"],
      challenges: "Comprendre les différentes méthodes de référencement et leur impact sur la visibilité en ligne.",
      solutions: "Utilisation d'outils d'analyse SEO pour évaluer et optimiser la présence en ligne.",
      extraInfo: [
        { type: "title", content: "Développer la présence en ligne de l'organisation" },
        { type: "subtitle", content: "▸ Référencer les services en ligne de l'organisation et mesurer leur visibilité." },
        { type: "paragraph", content: "J’ai pu apprendre et mettre en pratique différentes méthodes de référencement web lors de ce travail pratique. Grâce à des outils comme SEOQuake, Google Analytics ou Wappalyzer, il est possible d’évaluer la visibilité d’un site selon les critères de référencement définis par Google." },
        { type: "paragraph", content: "Ces outils permettent d’analyser en détail ce qui fonctionne et ce qui doit être amélioré sur un site. Par exemple : la présence d’un unique H1 par page, l’utilisation correcte des balises de titre (H2, H3...), de balises strong pour mettre en avant des mots-clés importants, ou encore le maillage interne avec des liens vers d’autres pages du site ou des ressources externes." },
        { type: "paragraph", content: "Pour qu’un article soit bien référencé, il est recommandé qu’il contienne au moins 1200 mots, qu’il intègre des mots-clés pertinents liés au sujet traité, et qu’il s’appuie sur un champ lexical riche avec plusieurs itérations des termes importants. L’ensemble de ces éléments contribue à améliorer la position du site dans les résultats de recherche." }
      ]      
    },
    "5": {
      title: "GLPI",
      description: "Mise en œuvre de GLPI pour le support technique, la gestion d'inventaire et la traçabilité des incidents.",
      image: "public/assets/images/glpi.webp",
      technologies: [],
      github: "",
      features: ["Gestion des tickets d'incidents", "Suivi des demandes d'assistance", "Gestion de l'inventaire matériel", "Traçabilité des incidents"],
      challenges: "Découvrir et maîtriser GLPI pour une utilisation optimale dans un environnement professionnel.",
      solutions: "Formation sur GLPI, mise en place de procédures pour le suivi des incidents et la gestion des demandes ainsi que la gestion de l'inventaire.",
      extraInfo: [
        { type: "title", content: "Répondre aux incidents et aux demandes d'assistance et d'évolution" },
        { type: "subtitle", content: "▸ Collecter, suivre et orienter des demandes" },
        { type: "paragraph", content: "L’utilisation de GLPI au sein de mon entreprise permet une gestion des demandes efficace. En plus de mon rôle de développeur, j’ai un rôle de support : je m’occupe donc de répondre aux tickets d’incident ou de demande d’assistance qui relèvent de mon domaine. Les tickets hors périmètre sont redirigés vers les services compétents afin d’assurer un traitement rapide." },
        { type: "subtitle", content: "▸ Traiter des demandes concernant les services réseau et système, applicatifs" },
        { type: "paragraph", content: "Au cours de mon contrat, j’ai pris en charge la résolution d’un incident signalé via GLPI concernant une coupure du Wi-Fi dans une partie des locaux. Après analyse, un problème matériel sur le switch de cette zone a été identifié. J’ai effectué le suivi complet de la demande jusqu’à la résolution finale, rétablissant ainsi le fonctionnement du réseau." },    
      
        { type: "title", content: "Gérer le patrimoine informatique" },
        { type: "subtitle", content: "▸ Recenser et identifier les ressources numériques" },
        { type: "paragraph", content: "GLPI, via un agent installé sur les postes, permet de maintenir un inventaire dynamique et complet des machines déployées. On peut ainsi voir quel utilisateur s’est connecté récemment, consulter l’historique des actions effectuées, et obtenir la liste des logiciels installés. Cela évite de nombreux déplacements, notamment pour les machines situées en succursale à distance." },
        { type: "paragraph", content: "En plus de l’inventaire automatisé des postes, GLPI est également utilisé pour gérer manuellement le stock de matériel informatique et les imprimantes déployées. Je suis en charge de la mise à jour régulière de ces inventaires." },
        { type: "subtitle", content: "▸ Vérifier le respect des règles d'utilisation des ressources numériques" },
        { type: "paragraph", content: "Comme mentionné précédemment, GLPI permet de contrôler l’usage des ressources numériques en analysant les dernières actions effectuées sur les machines et les logiciels installés. En cas d’anomalie ou de comportement inapproprié, ces informations permettent d’intervenir rapidement et de faire respecter les règles d’usage." }
      ]      
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Projet non trouvé</div>;
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
              className="w-full h-[480px] object-cover rounded-xl mb-8"
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
  
              {Array.isArray(project.extraInfo) && (
                <div className="mt-12 space-y-4">
                  {project.extraInfo.map((block, index) => {
                    switch (block.type) {
                      case 'title':
                        return <h2 key={index} className="text-2xl font-bold dark:text-white">{block.content}</h2>;
                      case 'subtitle':
                        return <h3 key={index} className="text-lg italic font-medium dark:text-white">{block.content}</h3>;
                      case 'paragraph':
                        return <p key={index} className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{block.content}</p>;
                      case 'list':
                        return (
                          <ul key={index} className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                            {block.items?.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
              )}
  
              <div className="flex gap-4 mt-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Voir le code
                  </a>
                )}
  
                <a
                  href="public/assets/docs/referentiel.xlsx"
                  download
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Télécharger le référentiel
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );  
}