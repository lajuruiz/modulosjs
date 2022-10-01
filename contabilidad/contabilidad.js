
import RecursosHumanos ,{ JuegosRifasEspectaculos,reporteGerencia } from "../recursosHumano/recursoshumanos.js";
import Ventas, { GastosMarketing } from "../index.js";


class Contabilidad {
    constructor (){
        console.log("Iniciando Modulo de contabilidad")
        this.recursosHumanos  = new RecursosHumanos()
        this.ventas= new Ventas()    
    }
  
    reporteDeGastos(){
        return `El reporte de gastos es:
        -juegos y rifas: ${JuegosRifasEspectaculos.gastos}
        -Gastos Marketing:${GastosMarketing.gastos}`
    }

    reporteContabilidad() {
        return "Reporte Contabilidad " + reporteGerencia();
    }
} 

let x = new Contabilidad()
console.log(x.reporteDeGastos())
export default Contabilidad;
