import faker from 'faker';

/*const body = [{
   //id: random_number,
   //username: faker.internet.userName(),
    //firstName: faker.name.firstName(),
    //lastName: faker.name.lastName(),
    //email: faker.internet.email(),
    //password: faker.internet.password(),
    //phone: faker.phone.phoneNumber(),
    //userStatus:random_number 
  },] */

const BuildPetUser = function () {
    this.addId = function (id = faker.datatype.number()) {
        this.id = id;
        return this;
    };
    this.addUserName = function(){
        this.username = faker.internet.userName();
        return this;
    };
    this.addFirstName = function(){
        this.firstName = faker.name.firstName();
        return this; 
    };
    this.addLastName = function(){
        this.lastName = faker.name.lastName();
        return this; 
    };
    this.addEmail = function(){
        this.email = faker.internet.email();
        return this;
    };
    this.addPassword = function () {
      this.password = faker.internet.password();
      return this;
    };
    this.addPhone = function () {
      this.phone = faker.phone.phoneNumber();
      return this;
    };

    this.addUserStatus = function () {
      this.status = faker.datatype.number()
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
export default BuildPetUser;