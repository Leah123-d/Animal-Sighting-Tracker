import router from '../routes/wyldlife';
import 

jest.mock('../routes/wyldlife');

describe('testing routes', () => {

afterEach(() => {
  jest.resetAllMocks();
});



it('should return second animal', async () => {
  router.get.mockResolvedValue({
    data: [
      {
      id: 1,
      commonName: "tiger",
      scientificName:"tiger-tiger"
      },
      { 
      id: 2,
      commonName: "turtle",
      scientificName:"turtle-turtle"
      }
    ]
  });

  const response = await router.get();
  const commonName = response.data[1].commonName;
  expect(commonName).toEqual("turtle");

});

it('should update first animal', async () => {
  router.patch.mockResolvedValue({
    data: [
      {
      id: 1,
      commonName: "tiger",
      scientificName:"tiger-tiger"
      },
      { 
      id: 2,
      commonName: "turtle",
      scientificName:"turtle-turtle"
      }
    ]
  });

  const response = await router.patch().send({
    id: 1,
    commonName: "puma",
    scientificName:"tiger-tiger"

  })
  const udpatedAnimal = response.data[0].commonName;
  expect(updatedAnimal).toEqual("puma");

});

})