class Consulta{
    NombrePaciente;
    FolioPaciente;
    MedicoT;
    MedicinaR;
    /**
     * 
     * @param {String} NombrePaciente 
     * @param {Int} FolioPaciente 
     * @param {String} MedicoT 
     * @param {String} MedicinaR 
     */
    constructor(NombrePaciente,FolioPaciente,MedicoT,MedicinaR){
        this.NombrePaciente = NombrePaciente;
        this.FolioPaciente= FolioPaciente;
        this.MedicoT = MedicoT;
        this.MedicinaR = MedicinaR;
     
    }
}
var consulta=[];
function asignarPaciente() {
    this.NombrePaciente = document.getElementById("NombrePaciente").value;       
return this.NombrePaciente;
} 

function asignarMedico(){
    this.MedicoT = document.getElementById("MedicoTurno").value;
    return this.MedicoT;
}

function agregarConsulta(){
this.FolioPaciente = document.getElementById("FolioPaciente").value;
this.MedicinaR = document.getElementById("MedicinaR").value;
let con = new Consulta(asignarPaciente(),FolioPaciente,asignarMedico(),MedicinaR);
consulta.push(con);
agregarLocalStorage("Consulta",JSON.stringify(consulta));
alert("Consulta Agregada");
}

function mostrarConsultas(){
  var consultasGuardadas = sacarLocalStorage("Consulta");
  if (consultasGuardadas) {
    consulta = JSON.parse(consultasGuardadas);
    let resultado = '';
    for(let i = 0; i < consulta.length; i++) {
      resultado+= `<tr>
      <td scope="row">${consulta[i].NombrePaciente}</td>
      <td>${consulta[i].FolioPaciente}</td>
      <td>${consulta[i].MedicoT}</td>
      <td>${consulta[i].MedicinaR}</td>
      </tr>`
    }
    document.getElementById('cuerpo-tabla-consultas').innerHTML = resultado;
  } else {
    document.getElementById('cuerpo-tabla-consultas').innerHTML = 'No hay consultas guardadas.';
  }
  alert("Mostrando");
}

