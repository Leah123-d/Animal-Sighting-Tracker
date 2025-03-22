import express from 'express';

import { getSpecies,
        getOneSpecies,
        createSpecies,
        updateSpecies,
        deleteSpecies,
        rightJoinSpecies,
 } from '../controllers/SpeciesController.js';

const router = express.Router();

router.get("/:common_name", getOneSpecies);
router.get("/:id", rightJoinSpecies);
router.get("/", getSpecies);
router.post("/", createSpecies);
router.put("/:common_name", updateSpecies);
router.delete("/:common_name", deleteSpecies);

export default router;


