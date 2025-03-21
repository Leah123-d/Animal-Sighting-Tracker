const router = require ('../routes/IndividualsRoute');
const IndividualsController = require ('../controllers/IndividualsController');
//routers go untested, I should be testing controllers
//what are you holding in the test while you're running it 
//next steps: see if this can respond when running a local server, run the server and run tests 


describe('testing individuals controller', () => {

afterEach(() => {
  jest.resetAllMocks();
});

//this does not hit router 
// 

let req, res, next;

//properly forms object, should look like controller is getting
beforeEach(() => {
  req = { body: {} };
  res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  next = jest.fn();
});
it('individuals controller get', async () => {
 
  //arrange need a req and response variable request

  //act 
  await IndividualsController.getIndividuals(req,res)
  // console.log('reponse console log: ', res);
  console.log('json response', res.json);
  //assert res expect json
  expect(res.length === 4).toBe(true); //evaluation of the equivalence true
  //eval response 
  //test is working as expected

});
})