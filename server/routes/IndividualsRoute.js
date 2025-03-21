import express from 'express';
import { getIndividuals,
        getOneIndividual,
        createIndividual,
        updateIndividual,
        deleteIndividual,
} from '../controllers/IndividualsController.js';

const router = express.Router();

router.get("/", getIndividuals);
router.get("/:nickname", getOneIndividual);
router.post("/", createIndividual);
router.put("/:nickname", updateIndividual);
router.delete("/:nickname", deleteIndividual);
//add 1 function that uses a join it can be a get

export default router;