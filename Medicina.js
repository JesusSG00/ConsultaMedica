class Medicina {
    NombreMedicina;
    Proveedor;
    
    constructor(NombreMedicina,Proveedor) {
        this.NombreMedicina = NombreMedicina;
        this.Proveedor = Proveedor;
    }
}
var medicamento = [];
function agregarMedicina(){
    this.NombreMedicina = document.getElementById("Medicina").value;
    this.Proveedor = document.getElementById("Proveedor").value;
    let medi = new Medicina(NombreMedicina,Proveedor);
    medicamento.push(medi);
    alert("Medicina agregada")
}
function mostrarMedicinas(){
        for(i=0; i<medicamento.length; i++){
            console.log(medicamento[i]);
        }
    } 



  