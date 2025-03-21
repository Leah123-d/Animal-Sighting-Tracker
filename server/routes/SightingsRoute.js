import express from 'express';
import { getSightings,
        getOneSighting,
        createSighting,
        updateSighting,
        deleteSighting,
 } from '../controllers/SightingsController.js';

const router = express.Router();

router.get("/", getSightings);

router.get("/:date_sighted", getOneSighting);
router.post("/", createSighting);
router.put("/:date_sighted", updateSighting);
router.delete("/:date_sighted", deleteSighting);
// add 1 function that uses a join it can be a get

export default router;