/* On te donne 2 angles d'un triangle.
écris la fonction qui permet de récupérer la valeur du 3e angle.
(Pour rappel, la somme des 3 angles d'un triangle est toujours égale à 180)
Exemple :
thirdAngle(90, 30) doit renvoyer 60
thirdAngle(20, 80) doit renvoyer 80
*/

function thirdAngle(a, b) {
  return 180 - (a + b);// Your code here !
}

console.log(thirdAngle(30, 60)); // return 90
console.log(thirdAngle(60, 60)); // return 60

module.exports = thirdAngle;
