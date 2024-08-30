
 const formulario = document.querySelector(".formulario-fale-conosco")

 const mascara = document.querySelector(".segunda-mascara")

 const meubutton =document.querySelector(".contato")


     function mostrarforms(){
  formulario.style.left = "50%"
  formulario.style.transform = "translateX(-50%)"
  mascara.style.visibility = "visible"


}

function desaparecer(){

formulario.style.left = "-300px"
formulario.style.transform =" translateX (0)"
mascara.style.visibility = "hidden"



}










 