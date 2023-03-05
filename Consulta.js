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
function guardarConsultaEnLocalStorage() {
    localStorage.setItem('consultas', JSON.stringify(consulta));
  }
  function agregarConsulta() {
    this.FolioPaciente = document.getElementById("FolioPaciente").value;
    this.MedicinaR = document.getElementById("MedicinaR").value;
    let con = new Consulta(asignarPaciente(),asignarMedico(),MedicoT,MedicinaR);
    consulta.push(con);
    alert("Consulta Agregada");
    guardarConsultaEnLocalStorage(); // Guarda los datos en el LocalStorage
  }
  function mostrarConsulta() {
    var consultasGuardadas = localStorage.getItem('consultas');
    if (consultasGuardadas) {
      consulta = JSON.parse(consultasGuardadas); // Convierte la cadena JSON en un array
      var resultado = '';
      for (var i = 0; i < consulta.length; i++) {
        resultado += '<p>' + consulta[i].NombrePaciente + ' - ' + consulta[i].FolioPaciente + ' - ' + consulta[i].MedicoT + ' - ' + consulta[i].MedicinaR + '</p>';
      }
      document.getElementById('resultado').innerHTML = resultado; // Muestra el resultado en la página HTML
    } else {
      document.getElementById('resultado').innerHTML = 'No hay consultas guardadas.'; // Muestra un mensaje si no hay datos en el LocalStorage
    }
  }