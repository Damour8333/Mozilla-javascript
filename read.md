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