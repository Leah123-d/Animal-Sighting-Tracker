import express from 'express';

import { getSpecies,
        getOneSpecies,
        createSpecies,
        updateSpecies,
        deleteSpecies,
 } from '../controllers/SpeciesController.js';

const router = express.Router();

router.get("/", getSpecies);
router.get("/:common_name", getOneSpecies);
router.post("/", createSpecies);
router.put("/:common_name", updateSpecies);
router.delete("/:common_name", deleteSpecies);

//add 1 function that uses a join it can be a get
//add a get route for species

export default router;


