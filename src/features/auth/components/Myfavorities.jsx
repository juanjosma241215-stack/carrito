import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  Divider, 
  Stack, 
  Grid 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export function Myfavorities() {
  const [favs, setFavs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('Myfavorities')) || [];
    setFavs(guardados);
  }, []);

  const removeOne = (id) => {
    const updated = favs.filter(auto => auto.id !== id);
    setFavs(updated);
    localStorage.setItem('Myfavorities', JSON.stringify(updated));
  };

  const clearFavs = () => {
    if(window.confirm("¿Estás seguro de que quieres vaciar tu garaje?")) {
      localStorage.removeItem('Myfavorities');
      setFavs([]);
    }
  };

  return (
    <Box sx={{ 
      bgcolor: '#0a0a0a', 
      minHeight: '100vh', 
      pt: { xs: 10, md: 15 }, 
      pb: 10, 
      color: 'white' 
    }}>
      <Container maxWidth="lg">
        
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between" 
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={3}
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          <Box>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 900, 
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
                letterSpacing: -1
              }}
            >
              MI <span style={{ color: '#90caf9' }}>GARAJE</span>
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', mt: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
              <DirectionsCarIcon fontSize="small" /> {favs.length} vehículos en tu lista de deseos
            </Typography>
          </Box>

          <Button 
            variant="text"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/articles')}
            sx={{ 
              color: '#90caf9', 
              fontWeight: 'bold',
              '&:hover': { bgcolor: 'rgba(144, 202, 249, 0.08)' }
            }}
          >
            VOLVER A LA TIENDA
          </Button>
        </Stack>

        {favs.length === 0 ? (
          <Box sx={{ 
            textAlign: 'center', 
            py: { xs: 8, md: 12 },
            bgcolor: 'rgba(255,255,255,0.02)',
            borderRadius: 8,
            border: '1px dashed rgba(255,255,255,0.1)'
          }}>
            <Typography variant="h5" sx={{ color: '#555', mb: 4, fontWeight: 600 }}>
              Tu garaje está esperando un motor... 🏎️💨
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/articles')}
              sx={{ 
                bgcolor: '#90caf9', 
                color: 'black', 
                fontWeight: 'bold',
                px: 6,
                borderRadius: '12px',
                '&:hover': { bgcolor: '#64b5f6' }
              }}
            >
              EXPLORAR CATÁLOGO
            </Button>
          </Box>
        ) : (
          <>
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                variant="outlined"
                color="error"
                size="small"
                startIcon={<DeleteOutlineIcon />}
                onClick={clearFavs} 
                sx={{ 
                  borderRadius: '8px',
                  textTransform: 'none',
                  borderColor: 'rgba(255, 82, 82, 0.3)',
                  '&:hover': { borderColor: '#ff5252', bgcolor: 'rgba(255, 82, 82, 0.05)' }
                }}
              >
                Vaciar garaje
              </Button>
            </Box>

            <Grid container spacing={4}>
              {favs.map((auto) => (
                // CORRECCIÓN: El key va como prop directo del Grid
                <Grid key={auto.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card sx={{ 
                    bgcolor: '#161616', 
                    color: 'white', 
                    borderRadius: 5, 
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      borderColor: '#90caf9',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                    }
                  }}>
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia 
                        component="img" 
                        height="220"
                        image={auto.img} 
                        sx={{ transition: '0.5s', '&:hover': { scale: '1.05' } }} 
                      />
                      <Box sx={{ 
                        position: 'absolute', 
                        top: 10, 
                        right: 10, 
                        bgcolor: 'rgba(0,0,0,0.6)', 
                        backdropFilter: 'blur(5px)',
                        px: 1.5, py: 0.5, borderRadius: 2
                      }}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#90caf9' }}>
                          DESTACADO
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent sx={{ p: 3, flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, fontSize: '1.1rem' }}>
                        {auto.nombre}
                      </Typography>
                      <Typography variant="h5" sx={{ color: '#90caf9', fontWeight: 900, mb: 3 }}>
                        ${auto.precio.toLocaleString()}
                      </Typography>
                      
                      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.05)', mb: 3 }} />
                      
                      <Stack direction="row" spacing={1.5}>
                        <Button 
                          fullWidth
                          variant="outlined" 
                          onClick={() => removeOne(auto.id)}
                          sx={{ 
                            color: '#ff5252', 
                            borderColor: 'rgba(255, 82, 82, 0.2)',
                            borderRadius: '10px',
                            fontWeight: 'bold'
                          }}
                        >
                          QUITAR
                        </Button>
                        <Button 
                          fullWidth
                          variant="contained" 
                          sx={{ 
                            bgcolor: 'white', 
                            color: 'black', 
                            fontWeight: 'bold',
                            borderRadius: '10px'
                          }}
                        >
                          DETALLES
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
}