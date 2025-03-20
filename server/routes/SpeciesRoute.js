import express from 'express';

import { getSpecies,
        getOneSpecies,
        createSpecies,
        updateSpecies,
        deleteSpecies

 } from '../controllers/SpeciesController.js';

const router = express.Router();

// router.get("/", getSpecies);
// router.get("/:common_name", getOneSpecies);
// router.post("/", createSpecies);
// router.put("/:species", updateSpecies);
// router.delete("/:speices", deleteSpecies);

export default router;


