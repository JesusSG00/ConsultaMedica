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
    alert("Guardado");
}

function mostrarPaciente(){
    let text = '';
    pacientes.forEach(pac=>{
         text += `<tr scope='col'><td>${pac.fullName()}</td></tr>`;   
    });
    let cuerpoTabla = document.getElementById('cuerpo-tabla');
    cuerpoTabla.innerHTML = text;
    alert("Mostrando...");
}

function guardarMedico(){
    this.Nombre = document.getElementById("NombreMed").value;
    this.ApellidoP= document.getElementById("ApellidoPMed").value;
    this.ApellidoM = document.getElementById("ApellidoMMed").value;
    this.Direccion= document.getElementById("DireccionMed").value;
    this.Cp= document.getElementById("CpMed").value;
    this.Telefono= document.getElementById("TelefonoMed").value;
    this.FechaNac= document.getElementById("FechaNacMed").value;
    this.IdMedico = generador();
    this.Cedula= document.getElementById("CedulaMed").value;
 let med= new Medico(Nombre, ApellidoP, ApellidoM, Direccion, Cp, Telefono,FechaNac, IdMedico,Cedula);
medicos.push(med);
alert("Guardado");
}

function mostrarMedico (){
    let text = '';
    medicos.forEach(med=>{
         text += `<tr><td>${med.datosMedico()}</td></tr>`;   
    });
    let cuerpoTabla = document.getElementById('cuerpo-tabla-medicos');
    cuerpoTabla.innerHTML = text;
    alert("Mostrando...");
    
} 









