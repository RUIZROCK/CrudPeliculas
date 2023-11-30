import { Pelicula } from "./classPelicula.js";

const codigo=document.getElementById("codigo"),
    titulo=document.getElementById("titulo"),
    descripcion=document.getElementById("descripcion"),
    url=document.getElementById("url"),
    genero=document.getElementById("genero");
    
    console.log(codigo + "  asdasddsa");

const modalPelicula=new bootstrap.Modal(document.getElementById("modalPelicula"))

const listPeliculas=JSON.parse(localStorage.getItem("keyListaPeliculas")) || [] 
//si JSON.Parse es null entonces se crea el array vacio "[]"

const abrirModalPelicula=()=>{{
  modalPelicula.show();
}}


const crearPelicula=(e)=>{
    //tomamos los datos y creamos el objeto
    e.preventDefault();

    if(titulo.value.length>20 || titulo.value.length<=1){
      alert("ponele titulo!!!");
      return;
    }
    if(descripcion.value.length>150 || descripcion.value.length<20){
      alert("Agrega una descripcion!!!");
      return;
    }

    if(url.value.length>20 || descripcion.value.length<=6){
      alert("Agrega una descripcion!!!");
      return;
    } 


    const newPelicula = new Pelicula(codigo.value==""?undefined:codigo.value,titulo.value,descripcion.value,url.value,genero.value)
    console.log(newPelicula);
    listPeliculas.push(newPelicula)
    guardarEnLocalStorage();
    limpiarFormPelicula();
    crearFila(newPelicula,listPeliculas.lenght);
    //guardar en el local storage
}

const guardarEnLocalStorage=()=>{
  localStorage.setItem("keyListaPeliculas",JSON.stringify(listPeliculas));
}


const limpiarFormPelicula=()=>{
  formularioAdminPelis.reset();
}

const cargaInicial=()=>{
  if(listPeliculas.lenght!=0){
    listPeliculas.map((pelicula,posicion)=>crearFila(pelicula,posicion+1))
  }else{
    alert("No hay peliculas!")
  }
}

const crearFila=(pelicula,nfila)=>{
  const tablaPelicula= document.querySelector("tbody");
  tablaPelicula.innerHTML+=`
  <tr>
  <th scope="row">${nfila}</th>
  <td>${pelicula.titulo}</td>
  <td class="text-truncate" style="max-width: 200px;">${pelicula.descripcion}</td>
  <td>${pelicula.url}</td>
  <td>${pelicula.genero}</td>
  <td><button class="btn btn-warning mx-1">Editar</button><button class="btn btn-danger">Borrar</button></td>
  </tr>
  `
}

const formularioAdminPelis=document.querySelector('.formAgregarPelicula')
formularioAdminPelis.addEventListener('submit',crearPelicula)

const btnAgregar=document.getElementById("btnAgregar");
btnAgregar.addEventListener('click',abrirModalPelicula);


cargaInicial();