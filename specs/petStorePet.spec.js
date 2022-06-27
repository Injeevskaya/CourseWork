import supertest from 'supertest';
import api from '../framework/services/index';
import BuildPet from '../framework/fixtures/builder/pet';

test('Add a new pet to the store  - I can successfully create a pet in pet store', async () => {
  const body = new BuildPet().addCatName().addPhotoUrls().addId().addCategory().addTag().addStatus()
    .generate();
  const r = await api().Pet().postNewAnimal(body);
    expect(r.status).toEqual(200);
    expect(r.body.id).toEqual(body.id);
    expect(r.body.name).toEqual(body.name);
});
test('Add a new pet to the store - I can not create a pet in pet store with invalid input', async () => {
  const r = await api().Pet().postNewAnimal();
    expect(r.status).toEqual(415);
});

test('Find pet by ID - I can successfully find a pet by ID', async () => {
  const body = new BuildPet().addCatName().addPhotoUrls().addId().addCategory().addTag().addStatus()
    .generate();
  await api().Pet().postNewAnimal(body);
    const r = await api().Pet().getAnimalById(body.id);
      expect(r.status).toEqual(200);
      expect(r.body.id).toEqual(body.id);
      expect(r.body.name).toEqual(body.name);
});
//This test should return 400 instead of 404, as {ID:INTEGER}, putting a string instead of an int should return 400.
test('Find pet by ID - I can find a pet by invalid ID', async () => {
  const invalid_id = 'String'
  const body = new BuildPet().addCatName().addPhotoUrls().addId().addCategory().addTag().addStatus()
    .generate();
  await api().Pet().postNewAnimal(body);
    const r = await api().Pet().getAnimalById(invalid_id);
      expect(r.status).toEqual(400);
});
test('Find pet by ID - I can not find non-existent pet', async () => {
  const body = new BuildPet().addCatName().addPhotoUrls().addId().addCategory().addTag().addStatus()
    .generate();
      await api().Pet().postNewAnimal(body);
    const r = await api().Pet().getAnimalById(body.id + 1);
      expect(r.status).toEqual(404);
});

test('Find pets by status - I can successfully find pets by status "available"', async () => {
    const r = await api().Pet().getAnimalByStatus('available');
    const resp = r.body;
    let checkSts = resp.filter(word => word.status != "available");
    expect(r.statusCode).toEqual(200);
    expect(checkSts).toEqual([]);
});
test('Find pets by status - I can successfully find pets by status "pending"', async () => {
    const r = await api().Pet().getAnimalByStatus('pending');
    const resp = r.body;
    let checkSts = resp.filter(word => word.status != "pending");
    expect(r.statusCode).toEqual(200);
    expect(checkSts).toEqual([]);
});
test('Find pets by status - I can successfully find pets by status "sold"', async () => {
    const r = await api().Pet().getAnimalByStatus('sold');
    const resp = r.body;
    let checkSts = resp.filter(word => word.status != "sold");
    expect(r.statusCode).toEqual(200);
    expect(checkSts).toEqual([]);
});

test('Delete a pet - I can successfully delete pet by id', async () => {
  const body = new BuildPet().addCatName().addPhotoUrls().addId().addCategory().addTag().addStatus()
    .generate();
      await api().Pet().postNewAnimal(body);
      await api().Pet().getAnimalById(body.id);
    const r = await api().Pet().deleteAnimalById(body.id);
      expect(r.status).toEqual(200);
    //Getting Id of deleting animal should return 404 there is one more test to check it
    const r_get = await api().Pet().getAnimalById(body.id); 
      expect(r_get.status).toEqual(404);
});
test('Delete a pet - I can not delete non-existent pet', async () => {
  const body = new BuildPet().addCatName().addPhotoUrls().addId().addCategory().addTag().addStatus()
    .generate();
      await api().Pet().postNewAnimal(body);
      await api().Pet().getAnimalById(body.id);
    const r = await api().Pet().deleteAnimalById(body.id +1 );
      expect(r.status).toEqual(404);
  });