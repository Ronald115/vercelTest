"use client";

import { Box, Button, Drawer, List, ListItem, Typography } from '@mui/material';
import { useState } from 'react';
import PetsIcon from '@mui/icons-material/Pets'; // Ícono de pata

const Sidebar = ({ onSectionChange }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={toggleDrawer}
        sx={{
          position: 'fixed',
          top: '10px', // Ajustar según sea necesario
          left: '10px', // Ajustar según sea necesario
          backgroundColor: '#fff59d', // Fondo amarillo
          borderRadius: '20px',
          padding: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 1200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#f8bbd0', // Fondo rosa
            borderRadius: '10px',
            padding: '5px 10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <PetsIcon sx={{ color: '#ffffff', fontSize: '30px' }} /> {/* Ícono de pata en blanco */}
        </Box>
      </Button>

      <Drawer
        anchor='left'
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            background: '#ffcc80', // Fondo amarillo
            borderRadius: '10px',
            padding: '10px', // Margen interno para el contenido
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundColor: '#f8bbd0', // Fondo rosa
            color: '#ffffff',
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '10px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Estados
        </Typography>
        <List>
          {['Sol Modelo', 'Sol Durmiendo', 'Sol Pequeña', 'Sol ???'].map(section => (
            <ListItem 
              button 
              key={section} 
              onClick={() => { onSectionChange(section); toggleDrawer(); }}
              sx={{
                backgroundColor: '#fff59d', // Fondo amarillo claro
                borderRadius: '10px',
                margin: '5px 0',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer', // Asegura que el cursor sea de tipo puntero
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#f8bbd0', // Fondo rosa
                  borderRadius: '10px',
                  padding: '5px 10px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: '#ffffff',
                    fontWeight: 'bold',
                    marginRight: '10px', // Espacio entre texto e ícono
                  }}
                >
                  {section}
                </Typography>
                <PetsIcon sx={{ color: '#ffffff', fontSize: '20px' }} /> {/* Ícono de pata en blanco */}
              </Box>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
