import faker from "faker";
/**
 * Generates fake data for a user model 
 * @returns {Object} An object containing fake User data 
 */
export const generateUserData = () => {
  const userData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(12),
    phoneNumber: faker.phone.phoneNumber(),

  }
  return userData;
};
export const generateConversation = () => {

};
export const generateMessage = () => {

};