console.log("Bonjour")

const windows = document.querySelectorAll('.window')
console.log(windows)

windows.forEach((window, index)=>{
    window.addEventListener("click", ()=>{
    //window.classList.add("active")
    window.classList.toggle("active")
    
})})
console.log("boite n°" + (index+1) + "cliquée");


