import React, { useState } from 'react';
import { 
  Box, Container, Typography, TextField, Button, 
  IconButton, InputAdornment, Paper 
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

export function Myaccount() {
  const navigate = useNavigate();
  
  // Estados para el formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Lógica para mostrar/ocultar contraseña
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  // Validación: mínimo 8 caracteres para la contraseña y email no vacío
  const isFormInvalid = password.length < 8 || email === '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormInvalid) {
      console.log("Iniciando sesión con:", email);
      navigate('/articles'); // Redirige tras el login
    }
  };

  return (
    <Box sx={{ 
      bgcolor: '#121212', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <Container maxWidth="xs">
        <Paper elevation={6} sx={{ p: 4, bgcolor: '#1e1e1e', color: 'white', borderRadius: 4 }}>
          
          <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 1 }}>
            BIENVENIDO <span style={{ color: '#90caf9' }}>A TU SITIO</span>
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', color: '#888', mb: 4 }}>
            Ingresa tus credenciales para acceder al garaje
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
         
            <TextField
              fullWidth
              label="Correo Electrónico"
              variant="filled"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ bgcolor: '#2c2c2c', borderRadius: 1 }}
              InputLabelProps={{ style: { color: '#888' } }}
              inputProps={{ style: { color: 'white' } }}
            />

            {/* CAMPO CONTRASEÑA CON OJO */}
            <TextField
              fullWidth
              label="Contraseña"
              type={showPassword ? 'text' : 'password'}
              variant="filled"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText={password.length < 8 ? "Mínimo 8 caracteres" : ""}
              FormHelperTextProps={{ style: { color: '#555' } }}
              sx={{ bgcolor: '#2c2c2c', borderRadius: 1, mb: 3 }}
              InputLabelProps={{ style: { color: '#888' } }}
              inputProps={{ style: { color: 'white' } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ color: '#90caf9' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* BOTÓN DESHABILITADO SI NO SE CUMPLE LA VALIDACIÓN */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={isFormInvalid}
              sx={{ 
                py: 1.5, 
                fontWeight: 'bold', 
                bgcolor: '#90caf9', 
                color: 'black',
                '&:disabled': {
                  bgcolor: '#333',
                  color: '#666'
                },
                '&:hover': { bgcolor: '#64b5f6' }
              }}
            >
              INICIAR SESIÓN
            </Button>
          </Box>

        </Paper>
      </Container>
    </Box>
  );
}