import { Drawer, ListItemButton, ListItemText, List, Box, Typography, Collapse} from "@mui/material"
import { useState } from "react";
import LateralMenuItem from "./LateralMenuItem";
import { useNavigate } from "react-router-dom";


const LateralBar = ({anchoCaja}) => {
  const navigate = useNavigate();
  return (
    <Box id='lateral-bar-box'
      component='nav'
      sx={{ width: { sm: anchoCaja }, flexShrink: { sm: 0 }}}>
    <Drawer variant='permanent'
        open={true}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: anchoCaja, marginTop: 12.5, backgroundColor: '#FBCC00' }
        }}>
      <List sx={{color: '#4F4F4F', top:40}}>
        <ListItemButton
          onClick={() => navigate('/CredencialesTED/Inicio')}
          sx={{
            '& .MuiListItemText-primary': {
              fontWeight: 'bold', fontSize: 15 
            },
            '&:hover .MuiListItemText-primary': {
              color: 'primary.main',
            },
          }}
        >
          <ListItemText primary="Inicio"/>
        </ListItemButton>

        <LateralMenuItem 
          titulo="Usuarios" 
          subItems={[
            {label: 'Lista de Credenciales', path:'Lista_Credenciales'}, 
            {label: 'Crear Credencial Masivo', path:'Credencial_Masivo'}, 
            {label: 'Crear Credencial Individual', path:'Credencial_Individual'}]} />

        <LateralMenuItem titulo="Organización" 
          subItems={[
            {label: 'Gestionar Unidad', path:'Gestionar_Unidad'}, 
            {label: 'Gestionar Cargo', path:'Gestionar_Cargo'}, 
            {label: 'Gestionar Externo', path:'Gestionar_Externo'}]} />

        <ListItemButton
          onClick={() => navigate('/Credenciales/Prueba')}
          sx={{
            '& .MuiListItemText-primary': {
              fontWeight: 'bold', fontSize: 15 
            },
            '&:hover .MuiListItemText-primary': {
              color: 'primary.main',
            },
          }}
        >
          <ListItemText primary="Prueba"/>
        </ListItemButton>
      </List>
    </Drawer>
  </Box>
  )
}

export default LateralBar;