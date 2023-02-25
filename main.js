var paciente = [];
var medico =[];
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
    paciente.push(pa1);
    alert("Guardado");
}

function mostrarPaciente(){
    for(i=0;i<paciente.length;i++){
        console.log(paciente[i]);
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
medico.push(med);
console.log("Guardado");
}

function mostrarMedico (){
    for(i=0; i<medico.length; i++){
        console.log(medico[i]);

    }

} 



