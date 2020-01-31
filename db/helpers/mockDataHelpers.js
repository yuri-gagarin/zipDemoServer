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
 * @param {string} options.startingUser - An ObjectId string for a starting User
 * @param {string} options.target - An ObjectId string for a target User
 * @return {Object} An object containing mocked Conversation data
 */
export const generateConversation = ({ startingUser, target } = {}) => {
  const startedBy = startingUser || Types.ObjectId();
  const targetUser = target || Types.ObjectId();

  const convoData = {
    startedBy: startedBy,
    recipients: [targetUser],
    participants: [startedBy, targetUser],
    messages: [],
    numOfMessages: 0
  };
  return convoData;
};

/**
 * Generates a mock message for Message model
 * @param {Object} options - An options object
 * @param {string} options.conversationId - An ObjectId string for a Conversation model
 * @param {string} options.userId - An ObjectId string for a Conversation model
 * @returns {Object} An object containing mocked Message data
 */
export const generateMessage = ({ conversationId, userId } = {}) => {
  const _conversationId = conversationId || Types.ObjectId();
  const _userId = userId || Types.ObjectId();

  const messageData = {
    user: _userId,
    conversation: _conversationId,
    content: faker.lorem.paragraph(1)
  };
  return messageData;
};