import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  AppBar, Toolbar, Typography, Stack, InputBase, Box, 
  IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Badge 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory'; // Nuevo icono de producto
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Icono de cuenta
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function Header({ search, setSearch }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Lógica para actualizar el contador del carrito
  useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem('MyCart')) || [];
      setCartCount(cart.length);
    };

    updateCount();
    window.addEventListener('storage', updateCount);
    return () => window.removeEventListener('storage', updateCount);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearchChange = (e) => {
    const valor = e.target.value;
    setSearch(valor);
    if (valor.length > 0) navigate('/articles');
  };

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#90caf9' : 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.85rem',
    fontWeight: isActive ? 'bold' : 'normal',
    transition: '0.3s',
  });

  // Lista de items del menú actualizada
  const menuItems = [
    { text: 'Inicio', icon: <HomeIcon />, path: '/' },
    { text: 'Productos', icon: <InventoryIcon />, path: '/articles' }, // Icono cambiado
    { text: 'Ofertas', icon: <LocalOfferIcon />, path: '/offers' },
    { text: 'Favoritos', icon: <FavoriteIcon />, path: '/myfavorities' },
    { text: 'Mi Cuenta', icon: <AccountCircleIcon />, path: '/myaccount' }, // Añadido Cuenta
    { text: 'Mi Carrito', icon: <ShoppingCartIcon />, path: '/mycart' }, 
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#121212', height: '100%', color: 'white' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        🏎️ AUTO-SISTEMA
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              component={NavLink} 
              to={item.path}
              sx={{ '&.active': { color: '#90caf9', '& .MuiListItemIcon-root': { color: '#90caf9' } } }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                {item.text === 'Mi Carrito' ? (
                  <Badge badgeContent={cartCount} color="error">{item.icon}</Badge>
                ) : item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(18, 18, 18, 0.95)', backdropFilter: 'blur(10px)', zIndex: 1201, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ fontWeight: 'bold', cursor: 'pointer', display: { xs: 'none', sm: 'block' } }} onClick={() => navigate('/')}>
            🏎️ AUTO-SISTEMA
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            bgcolor: 'rgba(255,255,255,0.08)', 
            borderRadius: '20px', 
            px: 2, 
            width: { xs: '60%', sm: '220px', md: '280px' }, 
            border: '1px solid rgba(144, 202, 249, 0.3)', 
            '&:focus-within': { border: '1px solid #90caf9' } 
          }}>
            <SearchIcon sx={{ color: '#90caf9', fontSize: '1.2rem', mr: 1 }} />
            <InputBase 
              placeholder="Buscar auto..." 
              value={search} 
              onChange={handleSearchChange} 
              sx={{ color: 'white', fontSize: '0.85rem', width: '100%' }} 
            />
          </Box>

          <Stack direction="row" spacing={2.5} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <NavLink key={item.text} to={item.path} style={navLinkStyle}>
                {item.text === 'Mi Carrito' ? (
                  <Badge badgeContent={cartCount} color="primary" sx={{ mr: 0.5 }}>
                    <ShoppingCartIcon sx={{ fontSize: '1.2rem' }} />
                  </Badge>
                ) : (
                  React.cloneElement(item.icon, { fontSize: 'small' })
                )}
                {item.text}
              </NavLink>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: '#121212' } }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> 
    </>
  );
}