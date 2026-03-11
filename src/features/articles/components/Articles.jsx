import React from 'react';
import { 
  Container, Card, CardMedia, CardContent, 
  Typography, Button, Box, Stack, Chip 
} from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// CORRECCIÓN: Extraemos currentSlide y slideCount para que no ensucien el DOM
const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <ArrowForwardIosIcon 
    {...props} 
    sx={{ 
      color: "#90caf9", 
      cursor: "pointer", 
      position: 'absolute', 
      right: "-35px", 
      top: '50%', 
      zIndex: 1,
      transition: '0.3s',
      '&:hover': { color: 'white', transform: 'translateY(-50%) scale(1.2)' }
    }} 
  />
);

const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <ArrowBackIosNewIcon 
    {...props} 
    sx={{ 
      color: "#90caf9", 
      cursor: "pointer", 
      position: 'absolute', 
      left: "-35px", 
      top: '50%', 
      zIndex: 1,
      transition: '0.3s',
      '&:hover': { color: 'white', transform: 'translateY(-50%) scale(1.2)' }
    }} 
  />
);

export function Articles({ search }) {
  const navigate = useNavigate();
  
  const inventario = [
    { id: 1, nombre: "Porsche 911 Turbo", precio: 230000, hp: "640 HP", img: "/img/porsche911.webp" },
    { id: 2, nombre: "Ferrari F8 Tributo", precio: 280000, hp: "710 HP", img: "/img/f8negro.jpg" },
    { id: 3, nombre: "Lamborghini Aventador SVJ", precio: 517000, hp: "770 HP", img: "/img/lambonegro.webp" },
    { id: 4, nombre: "Audi R8 ", precio: 197000, hp: "602 HP", img: "/img/mibb.jpg" },
    { id: 5, nombre: "McLaren 720S", precio: 310000, hp: "710 HP", img: "/img/mclarenegro.jpg" },
    { id: 6, nombre: "Aston Martin DBS Volante", precio: 330000, hp: "715 HP", img: "/img/astonegro.jpg" },
    { id: 7, nombre: "Bugatti Chiron Sport", precio: 3200000, hp: "1500 HP", img: "/img/chironnegro.jpg" },
    { id: 8, nombre: "Nissan GT-R Nismo", precio: 210000, hp: "600 HP", img: "/img/gtrnegro.jpg" },
    { id: 9, nombre: "Mercedes-AMG GT Black Series", precio: 325000, hp: "720 HP", img: "/img/amgnegro.jpg" },
    { id: 10, nombre: "Ford GT Carbon Series", precio: 500000, hp: "660 HP", img: "/img/fordgtnegro.jpg" },
    { id: 11, nombre: "Chevrolet Corvette Z06", precio: 106000, hp: "670 HP", img: "/img/ZO6negro.jpg" },
    { id: 12, nombre: "BMW M4 Competition", precio: 82000, hp: "503 HP", img: "/img/Bmwnegro.jpg" }
  ];

  const handleAddToCart = (auto) => {
    const currentCart = JSON.parse(localStorage.getItem('MyCart')) || [];
    const isAlreadyInCart = currentCart.some(item => item.id === auto.id);
    
    if (!isAlreadyInCart) {
      const newCart = [...currentCart, auto];
      localStorage.setItem('MyCart', JSON.stringify(newCart));
      window.dispatchEvent(new Event('storage'));
    }
    navigate('/mycart');
  };

  const handleAddToFavorites = (auto) => {
    const currentFavs = JSON.parse(localStorage.getItem('Myfavorities')) || [];
    if (!currentFavs.some(fav => fav.id === auto.id)) {
      localStorage.setItem('Myfavorities', JSON.stringify([...currentFavs, auto]));
      window.dispatchEvent(new Event('storage'));
    }
    navigate('/myfavorities');
  };

  const filtrados = inventario.filter(auto => 
    auto.nombre.toLowerCase().includes((search || "").toLowerCase())
  );

  const settings = {
    dots: true,
    infinite: filtrados.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, arrows: false } }
    ]
  };

  return (
    <Box sx={{ bgcolor: '#121212', minHeight: '100vh', pt: 15, pb: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, mb: 1, letterSpacing: -1 }}>
            DESTACADOS DEL <span style={{ color: '#90caf9' }}>MES</span>
          </Typography>
          <Typography variant="body1" sx={{ color: '#666' }}>
            Explora nuestra selección exclusiva de superdeportivos
          </Typography>
        </Box>

        <Box sx={{ px: { xs: 2, sm: 4 } }}>
          {filtrados.length > 0 ? (
            <Slider {...settings}>
              {filtrados.map((auto) => (
                <Box key={auto.id} sx={{ px: 1.5, py: 2 }}>
                  <Card sx={{ 
                    bgcolor: '#1e1e1e', color: 'white', borderRadius: 4, 
                    border: '1px solid rgba(255,255,255,0.05)',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': { transform: 'translateY(-10px)', borderColor: '#90caf9' }
                  }}>
                    <CardMedia 
                      component="img" 
                      height="200" 
                      image={auto.img} 
                      alt={auto.nombre} 
                      sx={{ objectFit: 'cover' }} 
                    />

                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                          {auto.nombre}
                        </Typography>
                        <FavoriteBorderIcon 
                          sx={{ color: '#90caf9', cursor: 'pointer', '&:hover': { color: 'white' } }} 
                          onClick={() => handleAddToFavorites(auto)} 
                        />
                      </Box>
                      
                      <Chip 
                        label={auto.hp} 
                        size="small" 
                        icon={<SpeedIcon style={{ color: '#90caf9' }} />} 
                        sx={{ bgcolor: '#333', color: '#90caf9', mb: 'auto', alignSelf: 'flex-start' }} 
                      />

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 900 }}>
                          ${auto.precio.toLocaleString()}
                        </Typography>
                        <Button 
                          variant="contained" 
                          startIcon={<ShoppingCartIcon />}
                          onClick={() => handleAddToCart(auto)}
                          sx={{ 
                            bgcolor: '#90caf9', 
                            color: 'black', 
                            fontWeight: 'bold', 
                            borderRadius: 2,
                            '&:hover': { bgcolor: 'white' }
                          }}
                        >
                          COMPRAR
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>
          ) : (
            <Box sx={{ textAlign: 'center', mt: 5 }}>
              <Typography variant="h5" sx={{ color: '#444' }}>No se encontraron resultados para "{search}"</Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}