import mongoose from "mongoose";
import { expect } from "chai";
import Message from "../../models/Message";
import config from "../../config/config";
import { generateMessage } from "../../db/helpers/mockDataHelpers";

const VALIDATION_ERROR = mongoose.Error.ValidationError.name;

describe("{Message} Model unit tests", function () {
  // pre test setup and cleanup //
  before("Connect to the database", function (done) {
    const { dbPath, dbOptions } = config;
    mongoose.connect(dbPath, dbOptions, (error) => {
      if (error) return done(error);
      return done();
    });
  });
  after("close the connection", function (done) {
    mongoose.disconnect((error) => {
      if (error) return done(error);
      return done();
    });
  });
  // END pre test setup and cleanup //
  // invalid {Message} model data tests //
  describe("Invalid {Message} model data", function () {
    const validMessage = generateMessage();
    it("Should NOT create a new record without a {user} field", function (done) {
      Message.create({ ...validMessage, user: null })
        .catch((error) => {
          const { user } = error.errors;
          expect(error).to.be.an("object");
          expect(user).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record without a {conversation} field", function (done) {
      Message.create({ ...validMessage, conversation: null })
        .catch((error) => {
          const { conversation } = error.errors;
          expect(error).to.be.an("object");
          expect(conversation).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record without a {content} field", function (done) {
      Message.create({ ...validMessage, content: null })
        .catch((error) => {
          const { content } = error.errors;
          expect(error).to.be.an("object");
          expect(content).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
  });
  // END invalid {Message} model data tests //
  // valid {Message} model data tests //
  describe("User model with invalid parameters", function () {
    let createdMessage;
    const validMessageData = generateMessage();
    it("Should create and save a {Message} model", function (done) {
      Message.create(validMessageData)
        .then((message) => {
          createdMessage = message;
          expect(message).to.be.an("object");
          done();
        });
    });
    it("Should correctly set the {user} field", function () {
      expect(validMessageData.user).to.equal(createdMessage.user);
    });
    it("Should correctly set the {conversation} field", function () {
      expect(validMessageData.conversation).to.equal(createdMessage.conversation);
    });
    it("Should correctly set the {content} field", function () {
      expect(validMessageData.content).to.equal(createdMessage.content);
    });
    it("Should correctly set the {delivered} field", function () {
      expect(createdMessage.delivered).to.equal(false);
    });
    it("Should correctly set the {read} field", function () {
      expect(createdMessage.read).to.equal(false);
    });
    it("Should set the {createdAt} field to a {Date} instance", function () {
      const { createdAt } = createdMessage;
      expect(createdAt instanceof Date);
    });
  });
  // END valid {Message} model data tests //
});