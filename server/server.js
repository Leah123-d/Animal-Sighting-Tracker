import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import SpeciesRoute from './routes/SpeciesRoute.js';
import IndividualsRoute from './routes/IndividualsRoute.js';
import SightingsRoute from './routes/SightingsRoute.js';
const app = express();
dotenv.config();

app.use(bodyParser.json()) 

//to read the tables
app.use('/species', SpeciesRoute); 
app.use('/individuals', IndividualsRoute); 
app.use('/sightings', SightingsRoute); 


app.get('/', (req,res) => res.send("Hello! This is the homepage!")); //test connection to the home page


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`wyldlife server is listening on PORT ${port}`)
})

