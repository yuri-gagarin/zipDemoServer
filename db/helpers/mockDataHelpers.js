import faker from "faker";
import { Types } from "mongoose";

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
    phoneNumber: faker.phone.phoneNumber(0)

  };
  return userData;
};

/**
 * Generates a mock conversation for Conversation model
 * @param {Object} options - An options object
 * @param {string} options.startingUser - An objectId string for a starting User
 * @param {string} options.target - An objectId string for a target User
 * @return {Object} An object containing mocked Conversation data
 */
export const generateConversation = ({ startingUser, target } = {}) => {
  const startedBy = startingUser || Types.ObjectId();
  const targetUser = target || Types.ObjectId();

  const convoData = {
    startedBy: startedBy,
    targetUsers: [targetUser],
    messages: [],
    numOfMessages: 0
  };
  return convoData;
};

export const generateMessage = () => {

};