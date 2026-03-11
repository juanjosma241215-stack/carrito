import { useState } from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';

export const UseColor = () => {
  // Corregido: Definimos el estado aquí, no llamamos a la función UseColor()
  const [color, setColor] = useState("blue");

  const changeColor = (newColor) => setColor(newColor);

  return (
    <Box sx={{ bgcolor: '#121212', minHeight: '50vh', display: 'flex', alignItems: 'center', pt: 5 }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
          ESTILO <span style={{ color: color }}>SELECCIONADO</span>
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 4, color: '#888' }}>
          Color actual: <b style={{ color: color }}>{color.toUpperCase()}</b>
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" gap={2}>
          <Button variant="contained" onClick={() => changeColor("blue")} sx={{ bgcolor: 'blue' }}>Blue</Button>
          <Button variant="contained" onClick={() => changeColor("red")} sx={{ bgcolor: 'red' }}>Red</Button>
          <Button variant="contained" onClick={() => changeColor("pink")} sx={{ bgcolor: 'pink' }}>Pink</Button>
          <Button variant="contained" onClick={() => changeColor("green")} sx={{ bgcolor: 'green' }}>Green</Button>
        </Stack>
      </Container>
    </Box>
  );
};