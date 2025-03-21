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
  try{
    const { date_sighted } = req.params; 
    const result = await dbConnection.query(`SELECT * FROM sightings WHERE date_sighted = $1`, [date_sighted]);

    if(result.rows.length === 0){
        return res.send('sighting not found');
    }

    res.json(result.rows[0]);
    }catch (error){
        console.error('No sighting found', error);
    }
}

export const createSighting  = async (req,res) => {
  try{
    const { date_sighted, individual_seen, location_of_sighting, health, sighter_contact, season_spotted } = req.body;
    const result = await dbConnection.query(
        'INSERT INTO sightings (date_sighted, individual_seen, location_of_sighting, health, sighter_contact, season_spotted) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [date_sighted, individual_seen, location_of_sighting, health, sighter_contact, season_spotted]
    );
    console.log(result);
    
    res.json({ message:`new sighting ${result.rows[0].title} was added with date_sighted ${result.rows[0].date_sighted}`})
    }catch (error) {
        console.error('Error creating new sighting: ', error);
    }
}

export const updateSighting  = async (req,res) => {
  try{
    const { date_sighted } = req.params; //how to find the row we want to update
    const { individual_seen } = req.body; //the column we are updating

    const result = await dbConnection.query("UPDATE sightings SET individual_seen = $1 WHERE date_sighted = $2 RETURNING *", [date_sighted, individual_seen]);
    res.json(result.rows[0]);
  }catch (error) {
    console.error('Error updating sighting: ', error);
  }
}

export const deleteSighting  = async (req,res) => {
  try{
    const { date_sighted } = req.params;
    const result = await dbConnection.query("DELETE FROM indiviudals WHERE date_sighted = $1 RETURNING *", [date_sighted]);
    if(result.rowCount === 0){
        return res.send(`species not found`);
    }
    res.send(`species with common_name ${date_sighted} has been deleted`);
    } catch (error){
        console.error(`Could not locate species with common_name: ${date_sighted}: `, error);
    }
}