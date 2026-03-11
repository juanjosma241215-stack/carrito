import React from 'react';
import { UseColor } from '../hooks/UseColor'; 
import { UseOnline } from '../hooks/UseOnline'; 
import { UseContador } from '../hooks/UseContador'; 
import { UseTemporizador } from '../hooks/UseTemporizador';
import { UseRef } from '../hooks/UseRef';
import { UseCallback } from '../hooks/UseCallback';
import { Box, Typography, Button, Stack, Container } from '@mui/material';


export const Offers = () => {
  return (
   <>
   <UseColor/>
   <UseOnline/>
   <UseContador/>
   <UseTemporizador/>
   <UseRef/>
   <UseCallback/>


   </>
  );
};
