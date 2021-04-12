import { useContext } from 'react';
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core/';
import { BorderColorTwoTone, ListAlt, ContactMailOutlined } from '@material-ui/icons';

// se importan los context
import barraContext from '../../../context/barras/barraContext'
import registroObraContext from '../../../context/registroObra/registroObraContext'

const ListItemsAdmin = ( { } ) => {

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { cambiarMenu } = barrasContext

  // se extrae la informacion del context registroObra
  const registroObrasContext = useContext(registroObraContext)
  const { cambiarEstado } = registroObrasContext

  const registroObra = () => {
    cambiarMenu(0)
    cambiarEstado(false)
  }

  return (
    <List style={{background:'#202444',color:'#fff'}}>
    <div style={{background:'#202444'}}>
      <ListItem 
        button
        onClick={() => registroObra(0)}
      >
        <ListItemIcon  style={{color:'#fff'}}>
          <BorderColorTwoTone />
        </ListItemIcon>
        <ListItemText primary="Registrar obra" />
      </ListItem>
      <ListItem
        button
        onClick={() => { cambiarMenu(1) }}
      >
      <ListItemIcon style={{color:'#fff'}}>
          <ListAlt />
      </ListItemIcon>
      <ListItemText primary="Obras creadas" />
      </ListItem>

      <ListItem
        button
        onClick={() => cambiarMenu(2)}
      >
      <ListItemIcon style={{color:'#fff'}}>
          <ContactMailOutlined />
      </ListItemIcon>
      <ListItemText primary="Datos del cliente" />
      </ListItem>
    </div>
    </List>
  )
}

export default ListItemsAdmin
