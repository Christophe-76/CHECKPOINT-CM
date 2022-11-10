// change l'image en cliquant dessus
function change()
        {
         a = document.getElementById("image2").getAttribute("src");
         if (a=='image/avatar.svg') {
                      document.getElementById("image2").src='image/avatar-bis.png';
                  }
 
                  else {
                 document.getElementById("image2").src='image/avatar.svg';
                  }
 
        }

// change la couleur du nom
        var colorName = document.getElementById("name"); 
        colorName.setAttribute("style", "color:white");
// change le nom
const nameUser = document.querySelector("name")
// créer 1 boutton
const myButton = document.createElement("button")
const description = document.querySelector(".description")
        description.appendChild(myButton)
        const textValue = document.createTextNode("Changer le nom et la couleur de fond")
        myButton.appendChild(textValue)
const clickButton = () => {
                const nameUserPrompt = prompt("Quel est votre nom ?")
                nameUser.innerHTML = nameUserPrompt
                nameUser.getElementsByClassName.color="white"
                const colorUserPrompt = prompt("Quelle couleur ?")
                description.getElementsByClassName.backgroundColor = colorUserPrompt

}
myButton.addEventListener("click", clickButton)
// changer le texte
function changerTexte() {
        var nouveauTexte = "Christophe the King";
        document.getElementById("name").innerHTML = nouveauTexte;
        }
        