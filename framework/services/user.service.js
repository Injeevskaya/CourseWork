import supertest from "supertest";
import urls from "../config";

const User = {
    createUser: async(body) => {
        const r = await supertest(urls.pet) 
        .post('/v2/user')
        .set('Accept', 'application/json')
        .send(body);
    return r
    },
    createWithList: async(body) => {
        const r = await supertest(urls.pet) 
        .post('/v2/user/createWithList')
        .set('Accept', 'application/json')
        .send(body);
    return r
    },

    getUserByUserName: async(name) => {
        const r = await supertest(urls.pet)
        .get(`/v2/user/${name}`)
        .set('Accept','application/json')
        .send();
    return r
    },

    login: async(username, password) => {
        const r = await supertest(urls.pet)
        .get(`/v2/user/login?username=${username}&password=${password}`) 
        .set('Accept', 'application/json')
        .send();
    return r
    },

}

export default User;