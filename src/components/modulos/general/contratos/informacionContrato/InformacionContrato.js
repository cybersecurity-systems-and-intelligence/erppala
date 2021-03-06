import { Fragment, useContext } from 'react';

// se importan los componentes
import DatosCliente from './datosCliente/DatosCliente'
import DatosObra from './datosObra/DatosObra'
import DatosContrato from './datosContrato/DatosContrato'

// se importan los context
import contratosObrasContext from '../../../../../context/general/contratosObras/contratosObrasContext'

const InformacionContrato = () => {

    // se extrae la informacion del context
    const contratosObrassContext = useContext(contratosObrasContext)
    const { cambiarOpcion } = contratosObrassContext

    return (
        <Fragment>
            <DatosContrato/>
            <DatosCliente/>
            <DatosObra/>          
            <button onClick={e => cambiarOpcion(0)}>Atras</button>
        </Fragment>
    );
}
 
export default InformacionContrato;