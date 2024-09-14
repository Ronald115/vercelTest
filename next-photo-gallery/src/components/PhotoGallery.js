"use client";

import { useState } from 'react';
import { Box, Stack, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PhotoGallery = ({ section }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define las imágenes para cada sección desde una única carpeta
  const images = {
    'Sol Durmiendo': [
      '/images/Sol-Durmiendo1.png',
      '/images/Sol-Durmiendo2.png',
      '/images/Sol-Durmiendo3.png'
    ],
    'Sol Modelo': [
      '/images/Sol-Modelo1.png',
      '/images/Sol-Modelo2.png',
    ],
    'Sol Pequeña': [
      '/images/Sol-Pequena1.png',
      '/images/Sol-Pequena2.png',
    ],
    'Sol ???': [
        '/images/Sol-Crazy1.png',
        '/images/Sol-Crazy2.png',
        '/images/Sol-Crazy3.png',
        '/images/Sol-Crazy4.png',
      ],
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images[section].length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images[section].length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #fff59d, #f8bbd0)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        overflow: 'auto',
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: '100%',
          maxWidth: 'calc(100% - 40px)', // 20% margen izquierdo y derecho
          maxHeight: 'calc(100vh - 40px)', // 20% margen arriba y abajo
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative', // Para el posicionamiento de los botones
        }}
      >
        <Box
          sx={{
            width: '375px', // Ancho simulado de un dispositivo móvil
            height: '667px', // Alto simulado de un dispositivo móvil
            borderRadius: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#fff', // Fondo blanco para el contenedor
            position: 'relative',
          }}
        >
          {/* Botón de flecha hacia atrás */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '20%',
              height: '100%',
              backgroundColor: 'transparent',
              borderRadius: 0, // Hacer el botón rectangular
              '&:hover': {
                backgroundColor: 'transparent', // Eliminar el efecto de hover
              },
              zIndex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <ArrowBackIosIcon sx={{ color: '#ffffff' }} /> {/* Color rosado */}
          </IconButton>

          <img
            src={images[section][currentIndex]}
            alt={section}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // La imagen se ajusta sin distorsionarse
            }}
          />

          {/* Botón de flecha hacia adelante */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '20%',
              height: '100%',
              backgroundColor: 'transparent',
              borderRadius: 0, // Hacer el botón rectangular
              '&:hover': {
                backgroundColor: 'transparent', // Eliminar el efecto de hover
              },
              zIndex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <ArrowForwardIosIcon sx={{ color: '#ffffff' }} /> {/* Color rosado */}
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default PhotoGallery;
