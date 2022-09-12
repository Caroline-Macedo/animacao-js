var botao = document.querySelector("button");
var lista = document.querySelector("ul");

// botao.addEventListener("mouseover" , passaMouse)
// lista.addEventListener("mouseleave", retiraMouse)
// function retiraMouse(){
//     lista.classList.add("hidden")
// }
// function passaMouse(){
//     lista.classList.remove("hidden")
// }

botao.addEventListener("click" , ()=>{
  lista.classList.toggle("hidden")  
})