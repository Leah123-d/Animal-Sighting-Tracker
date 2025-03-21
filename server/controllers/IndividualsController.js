import dbConnection from '../db-connection.js';

export const getIndividuals = async (req,res) => {
  try{
      const result = await dbConnection.query('SELECT * FROM individuals;');
      console.log('individuals get test: ', result);
      return res.json(result.rows);

  } catch (error){
      console.error('error fetching individual data: ', error);
  }
}

export const getOneIndividual = async (req,res) => {
  try{
    const { nickname } = req.params; 
    const result = await dbConnection.query(`SELECT * FROM individuals WHERE nickname = $1`, [nickname]);

    if(result.rows.length === 0){
        return res.send('individual not found');
    }

    res.json(result.rows[0]);
    }catch (error){
        console.error('No individual found', error);
    }
}

export const createIndividual = async (req,res) => {
  try{
    const { nickname, classification, active_season } = req.body;
    const result = await dbConnection.query(
        'INSERT INTO individuals (nickname, classification, active_season) VALUES ($1, $2, $3) RETURNING *',
        [nickname, classification, active_season]
    );
    console.log(result);
    //using parameterized quries to prevent SQL injection

    res.json({ message:`new individual ${result.rows[0].title} was added with nickname ${result.rows[0].nickname}`})
    }catch (error) {
        console.error('Error creating new individual: ', error);
    }

}
export const updateIndividual = async (req,res) => {
  try{
    const { nickname } = req.params; //how to find the row we want to update
    const { classification } = req.body; //the column we are updating

    const result = await dbConnection.query("UPDATE individuals SET classification = $1 WHERE nickname = $2 RETURNING *", [classification, nickname]);
    //the return order will impact the result's behavior
    res.json(result.rows[0]);
  }catch (error) {
    console.error('Error updating individual: ', error);
}

}
export const deleteIndividual = async (req,res) => {
  const { nickname } = req.params;
  try{
    const result = await dbConnection.query("DELETE FROM individuals WHERE nickname = $1 RETURNING *", [nickname]);
    if(result.rowCount === 0){
        return res.send(`species not found`);
    }
    res.send(`species with nickname ${nickname} has been deleted`);
    } catch (error){
        console.error(`Could not locate species with ${nickname}: `, error);
    }
}

