var pacientes = [];
var medicos =[];
function guardarPaciente(){
    this.IdPaciente = generador();
    this.Nombre = document.getElementById("Nombre").value;
    this.ApellidoP= document.getElementById("ApellidoP").value;
    this.ApellidoM = document.getElementById("ApellidoM").value;
    this.Direccion= document.getElementById("Direccion").value;
    this.Cp= document.getElementById("Cp").value;
    this.Telefono= document.getElementById("Telefono").value;
    this.FechaNac= document.getElementById("FechaNac").value;
    this.FolioPaciente= document.getElementById("FolioPaciente").value;
    let pa1 = new Paciente(IdPaciente,Nombre,ApellidoP,ApellidoM,Direccion,Cp,Telefono,FechaNac,FolioPaciente);
     pacientes.push(pa1);
     agregarLocalStorage('Paciente',pacientes);

    alert("Guardado");
}
function datosPacientes(){
    let text = '';
    pacientes.forEach(paci=>{
         text += `
         <tr>
         <td scope="row">${paci.IdPaciente}</td>
         <td>${paci.fullName()}</td>
         <td>${paci.FolioPaciente}</td>
         </tr>`;   
    });
    let cuerpoTablaPaciente = document.getElementById('cuerpo-tabla-pacientes');
    cuerpoTablaPaciente.innerHTML = text;
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
         text += `<tr>
         <td scope="row">${med.IdMedico}</td>
         <td>${med.fullName()}</td>
         <td>${med.Telefono}</td>
         <td>${med.Cedula}</td>
         </tr>`;  
    });
    let cuerpoTablaMedico = document.getElementById('cuerpo-tabla-medicos');
    cuerpoTablaMedico.innerHTML = text;
    alert("Mostrando...");
    
} 









