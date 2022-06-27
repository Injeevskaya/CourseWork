import supertest from "supertest";
import urls from "../configs";


const Pet = {
    postNewAnimal: async(body) => {
        const r = await supertest(urls.pet) 
        .post('/v2/pet')
        .set('Accept', 'application/json')
        .send(body);
    return r
    },

    updateExistedAnimal: async(body) => {
        const r = await supertest(urls.pet)
        .put('/v2/pet')
        .set('Accept', 'application/json')
        .send(body);
    return r
    },

    getAnimalById: async(id) => {
        const r = await supertest(urls.pet)
        .get(`/v2/pet/+${id}`)
        .set('Accept', 'application/json')
        .send();
    return r
    },

    getAnimalByStatus: async(sts) => {
        const r = await supertest(urls.pet)
        .get(`/v2/pet/findByStatus?status=${sts}`)
        .set('Accept','application/json')
        .send();
    return r
    },

    deleteAnimalById: async(id) => {
        const r = await supertest(urls.pet)
        .delete(`/v2/pet/+${id}`)
        .set('Accept', 'application/json')
        .set('api_key', 'test_api')
        .send();
    return r
    },
};

export default Pet;