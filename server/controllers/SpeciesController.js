import dbConnection from '../db-connection.js';

export const getSpecies = async (req,res) => {
  try{
      const result = await dbConnection.query('SELECT * FROM species;');
      res.json(result.rows);
  } catch (error){
      console.error('error fetching species data: ', error);
  }
}

export const getOneSpecies = async (req,res) => {
//query param /:common_name
}

export const createSpecies = async (req,res) => {

}
export const updateSpecies = async (req,res) => {
//query param "/:species"
}

export const deleteSpecies = async (req,res) => {
//query param "/:species"
}



