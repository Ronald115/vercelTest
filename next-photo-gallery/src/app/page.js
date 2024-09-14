"use client";

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import PhotoGallery from '../components/PhotoGallery';
import { AppBar, Toolbar, Typography, Box, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Ícono de menú
import CatIcon from '@mui/icons-material/Pets'; // Ícono de gato

export default function Home() {
  const [currentSection, setCurrentSection] = useState('Sol Modelo');

  return (
    <Box sx={{ flexGrow: 1, paddingRight: '0px' }}>
      <AppBar sx={{ background: 'transparent', boxShadow: 'none', paddingRight: '0px' }}>
        <Toolbar sx={{paddingRight: '0px'}}>
          <Box sx={{ flexGrow: 1 }} /> {/* Espaciador */}
          <Box
            sx={{
              backgroundColor: '#fff59d', // Fondo amarillo
              borderRadius: '20px',
              padding: '10px 15px',
              margin: '10px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
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
                variant="h6"
                sx={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Álbum de fotos de Sol
                <CatIcon sx={{ ml: 1 }} /> {/* Espacio a la izquierda del ícono */}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box style={{ }}>
        <Sidebar onSectionChange={setCurrentSection} />
        <PhotoGallery section={currentSection} />
      </Box>
    </Box>
  );
}