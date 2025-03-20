import express from 'express';
import { getIndividuals,
        getOneIndividual,
        createIndividuals,
        updateIndividuals,
        deleteIndividuals
} from '../controllers/IndividualsController.js';

const router = express.Router();

router.get("/", getIndividuals);
//router.get("/:nickname", getOneIndividual);
// router.post("/", createIndividual);
// router.put("/:classification", updateIndividual);
// router.delete("/:id", deleteIndividual);

export default router;