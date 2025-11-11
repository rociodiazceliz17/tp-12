const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req,res)=> res.send('API de prueba - Rocío - TP12'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Server Rocío running on', PORT));
