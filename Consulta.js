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

function agregarConsulta(){
this.FolioPaciente = document.getElementById("FolioPaciente").value;
this.MedicinaR = document.getElementById("MedicinaR").value;
let con = new Consulta(asignarPaciente(),asignarMedico(),MedicoT,MedicinaR);
consulta.push(con);
alert("Consulta Agregada");
}

function mostrarConsultas(){
    for(i=0; i<consulta.length; i++){
        console.log(consulta[i]);

    }
}

