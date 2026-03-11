import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  Stack
} from '@mui/material';

import SpeedIcon from '@mui/icons-material/Speed';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export function Content() {

  const servicios = [
    {
      title: 'Modelos Únicos',
      desc: 'Acceso exclusivo a subastas y preventas de vehículos de edición limitada.',
      icon: <DirectionsCarIcon />
    },
    {
      title: 'Alto Rendimiento',
      desc: 'Interfaz optimizada para cargar datos en milisegundos.',
      icon: <SpeedIcon />
    },
    {
      title: 'Soporte VIP',
      desc: 'Asistencia personalizada para compradores y coleccionistas 24/7.',
      icon: <WorkspacePremiumIcon />
    },
    {
      title: 'Garantía Total',
      desc: 'Certificamos el estado mecánico y legal de cada unidad disponible.',
      icon: <VerifiedUserIcon />
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#121212', color: 'white', overflowX: 'hidden' }}>

      <Box
        sx={{
          position: 'relative',
          height: { xs: 'auto', md: '85vh' },
          minHeight: { xs: '500px', md: '700px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          pt: { xs: 12, md: 0 }, // Espacio para el header en móvil si es fixed
          pb: { xs: 8, md: 0 },
          px: 2,
          backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9))'
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.2rem', sm: '3.5rem', md: '4.5rem' },
              lineHeight: 1.1,
              mb: 3
            }}
          >
            PASIÓN POR LA{' '}
            <Box component="span" sx={{ 
              color: '#90caf9',
              display: { xs: 'block', sm: 'inline' } // Salto de línea estético en móvil
            }}>
              VELOCIDAD
            </Box>
          </Typography>

          <Typography 
            variant="h6" 
            sx={{ 
              mb: 5, 
              opacity: 0.85, 
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Encuentra los vehículos más exclusivos y gestiona tu colección personal con tecnología de punta.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ width: { xs: '100%', sm: 'auto' }, px: { xs: 4, sm: 0 } }}
          >
            <Button
              component={Link}
              to="/articles"
              variant="contained"
              size="large"
              fullWidth={{ xs: true, sm: false }}
              sx={{
                bgcolor: '#90caf9',
                color: '#000',
                fontWeight: 'bold',
                py: 1.5,
                px: 4,
                borderRadius: '12px'
              }}
            >
              Explorar Artículos
            </Button>

            <Button
              component={Link}
              to="/mybuys"
              variant="outlined"
              size="large"
              fullWidth={{ xs: true, sm: false }}
              sx={{
                borderColor: '#90caf9',
                color: '#90caf9',
                py: 1.5,
                px: 4,
                borderRadius: '12px',
                '&:hover': { borderColor: '#64b5f6', bgcolor: 'rgba(144,202,249,0.05)' }
              }}
            >
              Mis Compras
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* ================= SERVICIOS ================= */}
      <Container sx={{ py: { xs: 8, md: 12 } }}>

        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.8rem', md: '2.8rem' },
              mb: 2
            }}
          >
            Nuestros Servicios
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: '#90caf9', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {servicios.map((servicio, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'flex-start', md: 'center' }, // Alineación lateral en móvil para variar
                  textAlign: { xs: 'left', md: 'center' },
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 6,
                  p: { xs: 4, md: 5 },
                  transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: '#90caf9',
                    background: 'rgba(144,202,249,0.05)',
                  }
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '16px',
                    backgroundColor: 'rgba(144,202,249,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    color: '#90caf9',
                    '& svg': { fontSize: 30 }
                  }}
                >
                  {servicio.icon}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {servicio.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: '#888', lineHeight: 1.6 }}
                >
                  {servicio.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}