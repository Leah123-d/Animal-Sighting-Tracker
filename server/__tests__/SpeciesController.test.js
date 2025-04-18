import { createSpecies, getSpecies, updateSpecies } from '../controllers/SpeciesController'
import db from '../db-connection.js'

jest.mock('../db-connection.js');

afterEach(() => {
  jest.clearAllMocks();
});

//test for GET data from database

test("returns mocked sightings", async () => {
  db.query.mockResolvedValueOnce({ rows: [{id: 1, common_name: "jaguar" }]});

  const req = {}, res = { json: jest.fn() };
  await getSpecies(req,res);

  expect(res.json).toHaveBeenCalledWith([{ id:1, common_name: "jaguar"}]);
});

//test for POST data to database

test("should return the updated species", async () => {
  db.query.mockResolvedValueOnce({common_name: "elephant"})

  const req = {body: {common_name: "elephant"}, params: {id: 1}};
  const res = { json: jest.fn() };

  await updateSpecies(req,res);

  expect(res.json).toHaveBeenCalledWith({common_name: "elephant"});

})


