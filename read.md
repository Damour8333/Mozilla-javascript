echo "# Mozilla-javascript" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Damour8333/Mozilla-javascript.git
git push -u origin main




Note : La raison pour laquelle nous avons placé l'élément <script> en bas du fichier HTML est que le HTML est chargé par le navigateur dans l'ordre dans lequel il apparaît dans le fichier. Si le JavaScript est chargé en premier et qu'il est supposé affecter le HTML en dessous, il pourrait ne pas fonctionner, car le JavaScript serait chargé avant le HTML sur lequel il est supposé travailler. Par conséquent, placer JavaScript près du bas de la page HTML est souvent la meilleure stratégie.


Le texte du titre a été changé en «Bonjour, monde ! » en utilisant JavaScript. Pour cela, on a utilisé une fonction appelée querySelector() pour obtenir une référence sur l'en‑tête et la stocker dans une variable appelée myHeading. C'est assez proche de ce qu'on a fait avec les sélecteurs CSS. Lorsqu'on souhaite manipuler un élément, il faut d'abord le sélectionner.


<!-- les variables -->
let my Variable;
VM139:1 Uncaught SyntaxError: Unexpected identifier 'Variable'
let myVariable;
undefined
myVariable =' Bob';
' Bob'
myVariable
' Bob'
myVariable ='Etienne';
'Etienne'
myVariable;
'Etienne'



<!-- return -->

Note : L'instruction return indique au navigateur qu'il faut renvoyer la variable result en dehors de la fonction afin qu'elle puisse être réutilisée par ailleurs. Cette instruction est nécessaire car les variables définies à l'intérieur des fonctions sont uniquement disponibles à l'intérieur de ces fonctions. C'est ce qu'on appelle une portée (pour en savoir plus, lisez cet article).
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Grammar_and_types#les_port%c3%a9es_de_variables

https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/A_first_splash
apres je fais ça 
https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps



Je vous demande de créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi. À chaque tour, le joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui indique si son estimation est trop basse ou trop élevée. Le jeu doit également rappeler au joueur les nombres déjà proposés. Le jeu se termine quand le joueur a deviné le nombre mystère, ou s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle partie.

La première chose à faire en regardant ce résumé, c'est de le décomposer en tâches simples et codables comme le ferait un programmeur :

Générer un nombre aléatoire entre 1 et 100.
Stocker le nombre de tours déjà joués. Commencer par 1.
Fournir au joueur le moyen de saisir un nombre.
Stocker l'ensemble des propositions de nombres pour que le joueur puisse les consulter.
Vérifier si le nombre saisi par le joueur est correct.
S'il est correct :
Afficher un message de félicitations.
Empêcher que le joueur saisisse de nouveau un nombre.
Afficher un contrôle pour que le joueur puisse rejouer.
S'il est faux et que le joueur a encore des tours à jouer :
Informer le joueur que sa proposition de nombre est fausse.
Lui permettre d'entrer une nouvelle proposition de nombre.
Incrémenter le nombre de tours de 1.
S'il est faux et que le joueur n'a plus de tours à jouer :
Informer le joueur qu'il a perdu et que la partie est finie.
Empêcher que le joueur saisisse de nouveau un nombre.
Afficher un contrôle pour que le joueur puisse rejouer.
Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1.
Voyons maintenant comment nous pouvons transformer ces étapes en code. Nous allons développer cet exemple et explorer les fonctionnalités JavaScript au fur et à mesure.

Configuration initiale
Pour commencer ce didacticiel, faites une copie locale du fichier number-guessing-game-start.html (à voir directement ici). Ouvrez-le dans votre éditeur de code et votre navigateur web. Pour l'instant, vous ne verrez qu'un titre, un paragraphe d'instructions et un formulaire pour entrer une estimation, mais le formulaire est pour l'instant inactif.

L'endroit où nous allons ajouter tout notre code se trouve dans l'élément