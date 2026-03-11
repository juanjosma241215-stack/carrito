import React from 'react';
import { Box, Container, Typography, Link, Stack, IconButton, Divider, Grid } from '@mui/material'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

export function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#0a0a0a', 
        color: 'white', 
        pt: { xs: 6, md: 8 }, // Menos padding superior en móvil
        pb: 4, 
        borderTop: '1px solid rgba(255,255,255,0.05)' 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 2 }}>
          
          {/* SECCIÓN LOGO Y DESCRIPCIÓN */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#90caf9' }}>
              🏎️ AUTO-SISTEMA
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', mb: 3, maxWidth: { xs: '100%', md: '300px' }, mx: { xs: 'auto', md: 0 } }}>
              Expertos en vehículos de alto rendimiento y exclusividad. Llevamos la pasión del motor a tu pantalla.
            </Typography>
            <Stack 
              direction="row" 
              spacing={1} 
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <IconButton sx={{ color: '#90caf9', '&:hover': { bgcolor: 'rgba(144, 202, 249, 0.1)' } }}><FacebookIcon /></IconButton>
              <IconButton sx={{ color: '#90caf9', '&:hover': { bgcolor: 'rgba(144, 202, 249, 0.1)' } }}><InstagramIcon /></IconButton>
              <IconButton sx={{ color: '#90caf9', '&:hover': { bgcolor: 'rgba(144, 202, 249, 0.1)' } }}><TwitterIcon /></IconButton>
            </Stack>
          </Grid>

          {/* SECCIÓN NAVEGACIÓN */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Navegación</Typography>
            <Stack spacing={1.5}>
              <Link href="/" underline="none" sx={{ color: '#888', '&:hover': { color: '#90caf9' } }}>Inicio</Link>
              <Link href="#/articles" underline="none" sx={{ color: '#888', '&:hover': { color: '#90caf9' } }}>Artículos</Link>
              <Link href="#/offers" underline="none" sx={{ color: '#888', '&:hover': { color: '#90caf9' } }}>Ofertas</Link>
            </Stack>
          </Grid>

          {/* SECCIÓN CONTACTO */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>Contacto</Typography>
            <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOnIcon sx={{ color: '#90caf9', fontSize: '1.2rem' }} />
                <Typography variant="body2" sx={{ color: '#888' }}>Ciudad Motor, Calle 101 #24</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon sx={{ color: '#90caf9', fontSize: '1.2rem' }} />
                <Typography variant="body2" sx={{ color: '#888' }}>contacto@auto-sistema.com</Typography>
              </Box>
            </Stack>
          </Grid>

        </Grid>

        <Divider sx={{ mt: 6, mb: 4, bgcolor: 'rgba(255,255,255,0.05)' }} />
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="caption" sx={{ color: '#555' }}>
            © {new Date().getFullYear()} AUTO-SISTEMA. Todos los derechos reservados.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" variant="caption" sx={{ color: '#555', textDecoration: 'none' }}>Privacidad</Link>
            <Link href="#" variant="caption" sx={{ color: '#555', textDecoration: 'none' }}>Términos</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}