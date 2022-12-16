console.log("Bonjour")

const windows = document.querySelectorAll('.window')
console.log(windows)

windows.forEach((window, index)=>{
    window.addEventListener("click", ()=>{
    //window.classList.add("active")
    window.classList.toggle("active")
    console.log("boite n°" + (index+1) + "cliquée");
    //cibler toutes les div ayant commme class txt-box
    const textBoxes = document.querySelectorAll('.text-box')
    //générer un tableau de 1 à 24
    let numeros = Array.from({length: 24},(k,v) => v + 1)
    //mélanger aléatoirement les numéros
    let shuffle = numeros.sort(() =>Math.random() - 0.5)
    //tableau pour les couleurs des différentes fenêtres
    let colors = ["green","red","blue","yellow"]

    // pour chaque élément "txt-box"
    textBoxes.forEach((txBox, index) => {
        //attribuer un numéro aléatoire à la fenêtre
        txBox.firstElementChild.innerHTML = shuffle[index]
        //piocher une valeur aléatoire dans le tableau des couleurs
        let randomColor = Math.floor(Math.random() * colors.length)
        //ajouter la classe de la couleur à la txtBox courante
        txBox.classList.add(colors[randomColor])
})
    
})})
/*console.log("boite n°" + (index+1) + "cliquée");
//cibler toutes les div ayant commme class txt-box
const textBoxes = document.querySelectorAll('.text-box')
//générer un tableau de 1 à 24
let numeros = Array.from({length: 24},(k,v) => v + 1)
//mélanger aléatoirement les numéros
let shuffle = numeros.sort(() =>Math.random() - .5)
//tableau pour les couleurs des différentes fenêtres
let colors = ["green","red","blue","yellow"]

// pour chaque élément "txt-box"
textBoxes.forEach((txBox, index) => {
    //attribuer un numéro aléatoire à la fenêtre
    txBox.firstElementChild.innerHTML = shuffle[index]
    //piocher une valeur aléatoire dans le tableau des couleurs
    let randomColor = Math.floor(Math.random() * colors.length)
    //ajouter la classe de la couleur à la txtBox courante
    txBox.classList.add(colors[randomColor])
})*/