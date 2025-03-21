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
    const { individual_seen } = req.params; 
    const result = await dbConnection.query(`SELECT * FROM sightings WHERE individual_seen = $1`, [individual_seen]);

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
    
    res.json({ message:`new sighting ${result.rows[0].individual_seen} was added with individual_seen ${result.rows[0].date_sighted}`})
    }catch (error) {
        console.error('Error creating new sighting: ', error);
    }
}

export const updateSighting  = async (req,res) => {
  try{
    const { individual_seen } = req.params; //how to find the row we want to update
    const { location_of_sighting } = req.body; //the column we are updating

    const result = await dbConnection.query("UPDATE sightings SET location_of_sighting = $1 WHERE individual_seen = $2 RETURNING *", [location_of_sighting, individual_seen]);
    res.json(result.rows[0]);
  }catch (error) {
    console.error('Error updating sighting: ', error);
  }
}

export const deleteSighting  = async (req,res) => {
  const { individual_seen } = req.params;
  try{
    const result = await dbConnection.query(`DELETE FROM sightings 
                                            WHERE individual_seen = $1 RETURNING *`, [individual_seen]);
    if(result.rowCount === 0){
        return res.send(`species not found`);
    }
    res.send(`species with common_name ${individual_seen} has been deleted`);
    } catch (error){
        console.error(`Could not locate species with common_name: ${individual_seen}: `, error);
    }
}

export const fullOuterJoinSighting  = async (req,res) => {
  const { id } = req.params;
  try{
    const result = await dbConnection.query(`SELECT sightings.id AS sightings_id, sightings.date_sighted, sightings.individual_seen, 
                                            sightings.location_of_sighting, sightings.health, sightings.sighter_contact, 
                                            sightings.season_spotted, sightings.created_at, individuals.nickname AS indiv_nickname 
                                            FROM sightings FULL JOIN individuals ON sightings.id = individuals.id WHERE sightings.id = $1 OR individuals.id = $1`, [id]); 
    res.json(result.rows[0]);
  }catch (error) {
    console.error('Error updating sighting: ', error);
  }
}


