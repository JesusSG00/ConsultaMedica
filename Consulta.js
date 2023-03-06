class Consulta{
    NombrePaciente;
    FolioPaciente;
    MedicoT;
    MedicinaR;
    constructor(NombrePaciente,FolioPaciente,MedicoT,MedicinaR){
        this.NombrePaciente = NombrePaciente;
        this.FolioPaciente= FolioPaciente;
        this.MedicoT = MedicoT;
        this.MedicinaR = MedicinaR;
        this.Sintomas = Sintomas;
        this.Diagnostico = Diagnostico;
     
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
this.Diagnostico = document.getElementById ("Diagnostico").value;
this.Sintomas = document.getElementById ("Sintomas").value;
let con = new Consulta(asignarPaciente(),FolioPaciente,asignarMedico(),MedicinaR, Sintomas, Diagnostico);
consulta.push(con);
agregarLocalStorage("Consulta",JSON.stringify(consulta));
alert("Consulta Agregada");
}

function mostrarConsultas(){
  var consultasGuardadas = sacarLocalStorage("Consulta");
  if (consultasGuardadas) {
    consulta = JSON.parse(consultasGuardadas);
    var resultado = '';
    for(var i = 0; i < consulta.length; i++) {
      resultado+= `<tr>
      <td scope="row">${consulta[i].NombrePaciente}</td>
      <td>${consulta[i].FolioPaciente}</td>
      <td>${consulta[i].MedicoT}</td>
      <td>${consulta[i].MedicinaR}</td>
      <td>${consulta[i].Sintomas}</td>
      <td>${consulta[i].Diagnostico}</td>
      </tr>`
    }
    document.getElementById('cuerpo-tabla-consultas').innerHTML = resultado;
  } else {
    document.getElementById('cuerpo-tabla-consultas').innerHTML = 'No hay consultas guardadas.';
  }
}

