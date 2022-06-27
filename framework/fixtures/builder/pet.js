import faker from 'faker';

/* function deepCopy(example) {
  return JSON.parse(JSON.stringify(example));
};
const BuildPet = function () {
 this.get = function () {
  const data = {
    name: faker.animal.cat(),
    photoUrls: [faker.random.image()],
    id: faker.datatype.number(),
    category: {id: faker.datatype.number(),name: faker.animal.cat()},
    tags:[{id: faker.datatype.number(), name: faker.animal.cat()}, {id: faker.datatype.number(),name: faker.random.word()}],
    status: "available"};
 return deepCopy(data);
    };
 this.getEmptyPetBody = function () {
  const data = {};
 return deepCopy(data);
    };
  };
  
export default BuildPet; */

const BuildPet = function () {
  this.addCatName = function () {
    this.name = faker.animal.cat();
    return this;
  };
  this.addDogName = function () {
    this.name = faker.animal.dog();
    return this;
  };
  this.addPhotoUrls = function () {
    this.photoUrls = [faker.random.image()];
    return this;
  };
  this.addId = function (id = faker.datatype.number()) {
    this.id = id;
    return this;
  };
  this.addCategory = function () {
    this.category = {id: faker.datatype.number(), name: faker.animal.cat()};
    return this;
  };

  this.addTag = function () {
    this.tag = [{id: faker.datatype.number(), name: faker.animal.cat()}, {id: faker.datatype.number(),name: faker.random.word()}];
    return this;
  };
  this.addStatus = function (status = "available") {
    this.status = status;
    return this;
  };
  
  this.generate = function () {
    const fields = Object.getOwnPropertyNames(this);
    const data = {};

    fields.forEach((fieldName) => {
      if (this[fieldName] && typeof this[fieldName] !== 'function') {
        data[fieldName] = this[fieldName];
      }   
    });
    return data;
  };
};

export default BuildPet;

