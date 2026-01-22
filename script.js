const boton = document.querySelector("#btn-rojo")
const boton2 = document.querySelector("#btn-amarillo")
const boton3 = document.querySelector("#btn-verde")

const titulo = document.querySelector("#title")

boton.addEventListener("click", () =>{
    if (boton.innerText === "Rojo"){
        boton.innerText = "Apagar"
        titulo.innerText = "Semaforo en Rojo"
        document.getElementById("img-semaforo").src = "Imagen 2 rojo.png"
        document.getElementById("title").style.color = "#972222"
        document.getElementById("title").style.textShadow = "2px 2px 4px #ed565676"
        document.getElementById("btn-rojo").style.backgroundColor = "#fd0105"
       

    } else {
        boton.innerText = "Rojo"
        titulo.innerText = "Semaforo Apagado"
        document.getElementById("img-semaforo").src = "Imagen 1 inicio.png"
        document.getElementById("title").style.color = "gray"
        document.getElementById("title").style.textShadow = "2px 2px 4px rgba(194, 191, 191, 0.7)"
        document.getElementById("btn-rojo").style.backgroundColor = "gray"
    }




})

boton2.addEventListener("click", () =>{
    if (boton2.innerText === "Amarillo"){
        boton2.innerText = "Apagar"
        titulo.innerText = "Semaforo en Amarillo"
        document.getElementById("img-semaforo").src = "Imagen 3 amarillo.png"
        document.getElementById("title").style.color = "#e7e247"
        document.getElementById("title").style.textShadow = "2px 2px 4px #edd65676"
        document.getElementById("btn-amarillo").style.backgroundColor = "#fdf705"
       

    } else {
        boton2.innerText = "Amarillo"
        titulo.innerText = "Semaforo Apagado"
        document.getElementById("img-semaforo").src = "Imagen 1 inicio.png"
        document.getElementById("title").style.color = "gray"
        document.getElementById("title").style.textShadow = "2px 2px 4px rgba(194, 191, 191, 0.7)"
        document.getElementById("btn-amarillo").style.backgroundColor = "gray"
    }




})

boton3.addEventListener("click", () =>{
    if (boton3.innerText === "Verde"){
        boton3.innerText = "Apagar"
        titulo.innerText = "Semaforo en Verde"
        document.getElementById("img-semaforo").src = "Imagen 4 verde.png"
        document.getElementById("title").style.color = "#309722"
        document.getElementById("title").style.textShadow = "2px 2px 4px #65ed5676"
        document.getElementById("btn-verde").style.backgroundColor = "#a6ff00"
       

    } else {
        boton3.innerText = "Verde"
        titulo.innerText = "Semaforo Apagado"
        document.getElementById("img-semaforo").src = "Imagen 1 inicio.png"
        document.getElementById("title").style.color = "gray"
        document.getElementById("title").style.textShadow = "2px 2px 4px rgba(194, 191, 191, 0.7)"
        document.getElementById("btn-verde").style.backgroundColor = "gray" 
    }




})

