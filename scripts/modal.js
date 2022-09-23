let button          = document.querySelector(".esqueciSenha")
let background      = document.querySelector(".back")
let closeX          = document.querySelector(".btnOut")
let push            = document.querySelector(".send")

button.addEventListener("click",function(event){
event.preventDefault()
background.classList.add("aparecerTelaPorCima")
})


closeX.addEventListener("click",function(event){
event.preventDefault()
background.classList.remove("aparecerTelaPorCima")
})

push.addEventListener("click",function(event){
event.preventDefault()
background.classList.remove("aparecerTelaPorCima")
})