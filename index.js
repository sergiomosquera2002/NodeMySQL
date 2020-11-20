const express = require('express');
const app = express();
const routes = require('./routes/routes');
const cors = require("cors");

require('dotenv').config()

//Ajustes
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(express.json());
app.use(cors({origin: '*'}));

//Routes
app.use('/api', routes);
app.get('/', (req, res)=>{
  res.send('Hola!, mi primer conexión con MySQL')
})

//Ajustes del servidor
app.listen(app.get('port'),()=>{
  console.log(`servidor corriendo en el puerto ${app.get('port')}`);
})

