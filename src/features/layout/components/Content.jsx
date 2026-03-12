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
      
      {/* SECCIÓN HERO (Se mantiene igual, optimizada) */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 'auto', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: { xs: 10, md: 0 },
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
          <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', md: '4rem' }, mb: 3 }}>
            PASIÓN POR LA <Box component="span" sx={{ color: '#90caf9' }}>VELOCIDAD</Box>
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button component={Link} to="/articles" variant="contained" sx={{ bgcolor: '#90caf9', color: '#000', fontWeight: 'bold', borderRadius: 3, px: 4 }}>
              Explorar Artículos
            </Button>
            <Button component={Link} to="/mybuys" variant="outlined" sx={{ borderColor: '#90caf9', color: '#90caf9', borderRadius: 3, px: 4 }}>
              Mis Compras
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* ================= SECCIÓN DE SERVICIOS ACTUALIZADA ================= */}
      <Container sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2 }}>
            Nuestros Servicios
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: '#90caf9', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Grid container spacing={3}>
          {servicios.map((servicio, index) => (
            <Grid 
              key={index} 
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  p: 4,
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: '#90caf9',
                    background: 'rgba(144,202,249,0.08)',
                  }
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    backgroundColor: 'rgba(144,202,249,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    color: '#90caf9'
                  }}
                >
                  {servicio.icon}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>
                  {servicio.title}
                </Typography>

                <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.6 }}>
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