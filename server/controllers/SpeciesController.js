import dbConnection from '../db-connection.js';

export const getSpecies = async (req,res) => {
  try{
    const result = await dbConnection.query(`SELECT * FROM species;`);
      res.json(result.rows);
  }catch (error){
      console.error('error fetching species data: ', error);
  }
}

export const getOneSpecies = async  (req, res) => {
  try{
    const { common_name } = req.params; 
    const result = await dbConnection.query(`SELECT * FROM species WHERE common_name = $1`, [common_name]);

    if(result.rows.length === 0){
        return res.send({ "error": "Species not found" });
    }

    res.json(result.rows[0]);
    }catch (error){
        console.error('No species found', error);
    }
}

export const createSpecies = async (req,res) => {
  try{
    const {species, common_name, scientific_name, est_living_in_wild, conservation_status_code } = req.body;
    const result = await dbConnection.query(`INSERT INTO species (species, common_name, 
                                              scientific_name, est_living_in_wild, conservation_status_code) 
                                              VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [species, common_name, scientific_name, est_living_in_wild, conservation_status_code]
    );
    console.log(result);
    res.json({ message:`new species ${result.rows[0].title} was added with ID ${result.rows[0].common_name}`})
    }catch (error) {
        console.error('Error creating new species: ', error);
    }
}

export const updateSpecies = async (req,res) => {
  try{
    const { common_name } = req.params; 
    const {conservation_status_code} = req.body; 

    const result = await dbConnection.query(`UPDATE species SET 
                                            conservation_status_code = $1 
                                            WHERE common_name = $2 RETURNING *`, [conservation_status_code, common_name]);
    res.json(result.rows[0]);
  }catch (error) {
    console.error('Error updating species: ', error);
}
}

export const deleteSpecies = async (req,res) => {
  try{
    const { common_name } = req.params;
    const result = await dbConnection.query(`DELETE FROM species WHERE common_name = $1 RETURNING *`, [common_name]);
    if(result.rowCount === 0){
        return res.send( { "error": "Species not found" } );
    }
    res.send(`species with common_name ${common_name} has been deleted`);
    } catch (error){
        console.error(`Could not locate species with common_name: ${common_name}: `, error);
    }
}

export const rightJoinSpecies = async(req, res) => {
  const { id } = req.params;
  try{
    const result = await dbConnection.query(`SELECT species.species AS species_name, individuals.nickname AS indiv_nickname, 
                                              individuals.active_season AS indiv_active FROM species RIGHT JOIN individuals ON 
                                              species.species = individuals.classification WHERE species.id = $1`, [id]);

    res.json(result.rows[0]);
  }catch (error){
    console.error(`Could not locate species with common_name: ${id}: `, error);
}
}


