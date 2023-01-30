class Consulta extends Paciente{
    FolioConsulta;
    /**
     * 
     * @param {String} FolioConsulta
     */
    constructor(FolioConsulta){
        super(FolioPaciente);
        this._folioConsulta = FolioConsulta;
    }

}