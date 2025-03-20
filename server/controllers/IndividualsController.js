import dbConnection from '../db-connection.js';

export const getIndividuals = async (req,res) => {
  try{
      const result = await dbConnection.query('SELECT * FROM individuals;');
      res.json(result.rows);
  } catch (error){
      console.error('error fetching individual data: ', error);
  }
}

export const getOneIndividual = async (req,res) => {
  //query param /:nickname
}

export const createIndividual = async (req,res) => {

}
export const updateIndividual = async (req,res) => {
  //query param /:classification
}
export const deleteIndividual = async (req,res) => {
  //query param "/:id"
}

