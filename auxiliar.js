
function generador(){
    const ids=[];
    let id;
    id = Math.floor(Math.random() * 500) + 1;
    for(var i=0;i<ids.length;i++){
         if(id==ids[i]){
          id = Math.floor(Math.random() * 500) + 1;  
        }else{
            return id;
        }   
    }
    return id;
}
/**
 * 
 * @param {String} parametro 
 * @param {Array} dato 
 */
function agregarLocalStorage(parametro,dato){
  localStorage.setItem(parametro,JSON.stringify(dato));
}

function sacarLocalStorage(parametro){
  return JSON.parse(localStorage.getItem(parametro));
}
/*
function sacarPacientesFromLocalStorage(parameter="pacientes"){
  let paciente = []; 
  let pacienteArray = JSON.parse(localStorage.getItem(parameter));
  if(pacienteArray.length != 0){
      mecanicsArray.forEach(element => {
          let per1 =  new Paciente(Element.IdPaciente,Element.Nombre,Element.ApellidoP,Element.ApellidoM,Element.Direccion,Elemento.Cp,Element.Telefono,Element.FechaNac,Element.FolioPaciente);
          paciente.push(per1);
      });
  }
  return mecanics;
}*/
