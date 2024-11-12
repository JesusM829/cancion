import { useState } from "react"
import { ARREGLO_CANCIONES } from "../../../mocks/Cancion-mocks";
import { Cancion } from "../../modelos/Cancion";

export const CancionListar = () => {
    const [arrCanciones] = useState<Cancion[]>(ARREGLO_CANCIONES);

    const nombreGenero = (valor: string)=>{
       for(const objGene of ARREGLO_CANCIONES){
        if (objGene .codgeneroCancion==valor){
            return objGene.tituloCancion;
        }
       }
    }

    return (
        <>
        <div className="pt-5 d-flex justify-content-center">
            <div className="col-md-8">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Título Canción</th>
                        <th>Cantante</th>
                        <th>Género</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>

                {arrCanciones.map((miCan: Cancion)=>(
                    <tr key={miCan.codCancion}>
                        <td>{miCan.codCancion}</td>
                        <td>{miCan.tituloCancion}</td>
                        <td>{miCan.cantanteCancion}</td>
                        <td>{nombreGenero(miCan.codgeneroCancion)}</td>
                        <td>{miCan.imagenCancion}</td>
                        <td>
                            {miCan.imagenCancionBase64} alt="className="imagenListado" />
                            <br />
                            {miCan.imagenCancion}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            </div>
        </>
    )
}
 