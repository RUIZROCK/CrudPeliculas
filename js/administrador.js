import { Pelicula } from "./classPelicula.js";
let newPelicula
const crearPelicula=()=>{
    //tomamos los datos y creamos el objeto
    let form=document.querySelector('.formAgregarPelicula')
    console.log(form);
    let campos=form.elements
    let codigo=campos[0].value
    let titulo=campos[1].value
    let descripcion=campos[2].value
    let url=campos[3].value
    let genero=campos[4].value

    newPelicula = new Pelicula(codigo,titulo,descripcion,url,genero)

    console.log(newPelicula);

    setTimeout(function() {
        console.log(newPelicula);
      }, 2000);
    //guardar en el local storage

}


const formularioAdminPelis=document.querySelector('.formAgregarPelicula')



formularioAdminPelis.addEventListener('submit',crearPelicula)
setTimeout(function() {
    console.log("¡Han pasado 2 segundos!");
  }, 2000);