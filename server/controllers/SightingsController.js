import dbConnection from '../db-connection.js';

export const getSightings = async (req,res) => {
  try{
      const result = await dbConnection.query('SELECT * FROM sightings;');
      res.json(result.rows);
  } catch (error){
      console.error('error fetching sightings data: ', error);
  }
}

export const getOneSighting  = async (req,res) => {
  //query param /:date_sighted
}

export const createSighting  = async (req,res) => {
}

export const updateSightings  = async (req,res) => {
  //query param /:location_of_sighting
}

export const deleteSightings  = async (req,res) => {
  //query param /:health
}