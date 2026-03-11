import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, Box, Card, 
  CardMedia, CardContent, Button, Divider, Stack, Grid,
  IconButton, Paper, Breadcrumbs, Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export function Mycart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // 1. Cargar los productos guardados en el localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('MyCart')) || [];
    setCart(savedCart);
  }, []);

  // 2. Función para eliminar un producto específico
  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('MyCart', JSON.stringify(updatedCart));
    
    // Esto avisa al Header para que el numerito del carrito baje
    window.dispatchEvent(new Event('storage'));
  };

  // 3. Cálculo del total dinámico
  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  const handleFinalize = () => {
    alert("🚀 ¡Pedido realizado con éxito! Un asesor se pondrá en contacto contigo.");
    localStorage.removeItem('MyCart');
    setCart([]);
    window.dispatchEvent(new Event('storage'));
    navigate('/');
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
        
        {/* Encabezado y Navegación */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>
            MI <span style={{ color: '#90caf9' }}>CARRITO</span>
          </Typography>
          <Button 
            startIcon={<ArrowBackIcon />} 
            onClick={() => navigate('/articles')}
            sx={{ color: '#90caf9', textTransform: 'none', fontWeight: 'bold' }}
          >
            Volver al catálogo
          </Button>
        </Box>

        {cart.length === 0 ? (
          /* VISTA CUANDO EL CARRITO ESTÁ VACÍO */
          <Box sx={{ 
            textAlign: 'center', py: 10, bgcolor: 'rgba(255,255,255,0.02)', 
            borderRadius: 6, border: '1px dashed rgba(255,255,255,0.1)' 
          }}>
            <RemoveShoppingCartIcon sx={{ fontSize: 80, color: '#333', mb: 2 }} />
            <Typography variant="h5" sx={{ color: '#888', mb: 4 }}>
              No has añadido ningún vehículo todavía.
            </Typography>
            <Button 
              variant="contained" 
              onClick={() => navigate('/articles')}
              sx={{ bgcolor: '#90caf9', color: 'black', fontWeight: 'bold', px: 4 }}
            >
              EXPLORAR MODELOS
            </Button>
          </Box>
        ) : (
          /* VISTA CON PRODUCTOS */
          <Grid container spacing={4}>
            {/* LADO IZQUIERDO: LISTA DE PRODUCTOS */}
            <Grid size= {{ xs:12, md:8}}>
              <Stack spacing={2}>
                {cart.map((item) => (
                  <Card key={item.id} sx={{ 
                    display: 'flex', bgcolor: '#161616', color: 'white', 
                    borderRadius: 4, border: '1px solid rgba(255,255,255,0.05)',
                    transition: '0.3s', '&:hover': { borderColor: '#90caf9' }
                  }}>
                    <CardMedia
                      component="img"
                      sx={{ width: { xs: 120, sm: 200 }, objectFit: 'cover' }}
                      image={item.img}
                      alt={item.nombre}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.nombre}</Typography>
                          <Typography variant="body2" sx={{ color: '#90caf9' }}>{item.hp}</Typography>
                        </Box>
                        <IconButton onClick={() => removeItem(item.id)} sx={{ color: '#ff5252' }}>
                          <DeleteOutlineIcon />
                        </IconButton>
                      </Box>
                      <Box sx={{ mt: 'auto', textAlign: 'right' }}>
                        <Typography variant="h6" sx={{ fontWeight: 900 }}>
                          ${item.precio.toLocaleString()}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Stack>
            </Grid>

            {/* LADO DERECHO: RESUMEN DE PAGO */}
            <Grid size = {{xs:12, md:4}}>
              <Paper sx={{ 
                p: 4, bgcolor: '#161616', color: 'white', borderRadius: 4, 
                border: '1px solid #90caf9', position: 'sticky', top: 120 
              }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 800 }}>RESUMEN</Typography>
                
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: '#888' }}>Vehículos ({cart.length})</Typography>
                    <Typography>${total.toLocaleString()}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: '#888' }}>Impuestos de importación </Typography> <br />
                    <Typography sx={{ color: '#4caf50' }}>Incluidos</Typography>
                  </Box>
                  <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 1 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6">TOTAL</Typography>
                    <Typography variant="h5" sx={{ color: '#90caf9', fontWeight: 900 }}>
                      ${total.toLocaleString()}
                    </Typography>
                  </Box>
                  
                  <Button 
                    fullWidth 
                    variant="contained" 
                    size="large"
                    startIcon={<ShoppingCartCheckoutIcon />}
                    onClick={handleFinalize}
                    sx={{ 
                      bgcolor: '#90caf9', color: 'black', fontWeight: 'bold', py: 1.5, mt: 2,
                      '&:hover': { bgcolor: '#64b5f6', transform: 'scale(1.02)' },
                      transition: '0.2s'
                    }}
                  >
                    CONFIRMAR COMPRA
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}