/*
écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des arrays de string numbers.
Ta fonction doit renvoyer un seul array avec la somme des
éléments correspondants en string.
Si l'un des deux éléments est vide, il doit être considéré comme 0.
Exemple :
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]
*/

function sumArr(arrayA, arrayB, fn) {
  // Your code here !
  var arrayA = [];
  var arrayB = [];
  for(i=0;i<arrayA.length;i++){
    sumArr += arrayA[i]; // on additionne d'abord les valeur de tab
  }
  for(j=0;j<arrayB.length;j++){
    sumArr += arrayB[j]; // puis on ajoute les valeurs de tab2
  }
  return(sumArr)
}

module.exports = sumArr;
