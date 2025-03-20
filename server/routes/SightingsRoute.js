import express from 'express';
import { getSightings,
          getOneSighting,
          createSighting,
          updateSighting,
          deleteSighting
 } from '../controllers/SightingsController.js';

const router = express.Router();

router.get("/", getSightings);

router.get("/:date_sighted", getOneSighting);
router.post("/", createSighting);
router.put("/:location_of_sighting", updateSighting);
router.delete("/:health", deleteSighting);

export default router;