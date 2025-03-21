import express from 'express';
import { getSightings,
        getOneSighting,
        createSighting,
        updateSighting,
        deleteSighting,
 } from '../controllers/SightingsController.js';

const router = express.Router();

router.get("/", getSightings);

router.get("/:individual_seen", getOneSighting);
router.post("/", createSighting);
router.put("/:individual_seen", updateSighting);
router.delete("/:individual_seen", deleteSighting);
// add 1 function that uses a join it can be a get
//can I make my routes more dynamic where it can accept more than 1 query parameter?

export default router;