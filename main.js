var pacientes = [];
var medicos =[];
function guardarPaciente(){
    this.Nombre = document.getElementById("Nombre").value;
    this.ApellidoP= document.getElementById("ApellidoP").value;
    this.ApellidoM = document.getElementById("ApellidoM").value;
    this.Direccion= document.getElementById("Direccion").value;
    this.Cp= document.getElementById("Cp").value;
    this.Telefono= document.getElementById("Telefono").value;
    this.FechaNac= document.getElementById("FechaNac").value;
    this.FolioPaciente= document.getElementById("FolioPaciente").value;
    let pa1 = new Paciente(this.Nombre,this.ApellidoP,this.ApellidoM,this.Direccion,this.Cp,this.Telefono,this.FechaNac,this.FolioPaciente);
    pacientes.push(pa1);
    let text = '';
    pacientes.forEach(pac=>{
        text += `El nombre del paciente es: ${pac.fullName()}<hr>`;
    })
    let ejemplo = document.getElementById('ejemplo');
    ejemplo.innerHTML = text
    alert("Guardado");
}

function mostrarPaciente(){
    for(i=0;i<pacientes.length;i++){
        console.log(pacientes[i]);
    }
}

function guardarMedico(){
    this.Nombre = document.getElementById("NombreMed").value;
    this.ApellidoP= document.getElementById("ApellidoPMed").value;
    this.ApellidoM = document.getElementById("ApellidoMMed").value;
    this.Direccion= document.getElementById("DireccionMed").value;
    this.Cp= document.getElementById("CpMed").value;
    this.Telefono= document.getElementById("TelefonoMed").value;
    this.FechaNac= document.getElementById("FechaNacMed").value;
    this.Cedula= document.getElementById("CedulaMed").value;
 let med= new Medico(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac, this.IdMedico, this.Cedula);
medicos.push(med);
console.log("Guardado");
}

function mostrarMedico (){
    for(i=0; i<medicos.length; i++){
        console.log(medicos[i]);
    }
    
} 







