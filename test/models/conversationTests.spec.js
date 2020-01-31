import mongoose from "mongoose";
import { expect } from "chai";
import Conversation from "../../models/Conversation";
import config from "../../config/config";
import { generateConversation } from "../../db/helpers/mockDataHelpers";

const VALIDATION_ERROR = mongoose.Error.ValidationError.name;

describe("{Conversation} Model unit tests", function () {
  // pre test setup and cleanup //
  before("Connect to the database", function (done) {
    const { dbPath, dbOptions } = config;
    mongoose.connect(dbPath, dbOptions, (error) => {
      if (error) return done(error);
      return done();
    });
  });
  after("Close the connection and cleanup", function (done) {
    mongoose.disconnect((error) => {
      if (error) return done(error);
      return done();
    });
  });
  // END pre test setup and cleanup //
  // invalid {Conversation} model data tests //
  describe("Invalid {Conversation} model data", function () {
    const validConvoData = generateConversation();
    it("Should NOT create a new record without a {startedBy} field", function (done) {
      Conversation.create({ ...validConvoData, startedBy: null })
        .catch((error) => {
          const { startedBy } = error.errors;
          expect(error).to.be.an("object");
          expect(startedBy).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record without at least one {recipients}", function (done) {
      Conversation.create({ ...validConvoData, recipients: [] })
        .catch((error) => {
          const { recipients } = error.errors;
          expect(error).to.be.an("object");
          expect(recipients).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
  });
  // END invalid {Conversation} model data tests //
  // Valid {Conversation} model data tests //
  describe("Valid {Conversation} model data", function () {
    let createdConversation;
    const validConvoData = generateConversation();
    it("Should create and save a {Conversation} model", function (done) {
      Conversation.create(validConvoData)
        .then((conversation) => {
          createdConversation = conversation;
          expect(conversation).to.be.an("object");
          done();
        });
    });
    it("Should correctly set the {startedBy} field", function () {
      expect(createdConversation.startedBy).to.equal(validConvoData.startedBy);
    });
    it("Should correctly set the {recipients} field", function () {
      expect(createdConversation.recipients).to.be.an("array");
      expect(createdConversation.recipients).to.deep.equal(validConvoData.recipients);
    });
    it("Should correctly set the {participants} field", function () {
      expect(createdConversation.participants).to.be.an("array");
      expect(createdConversation.participants).to.deep.equal(validConvoData.participants);
    });
    it("Should correctly set the {groupConversation} field", function () {
      expect(createdConversation.isGroupConversation).to.eq(false);
    });
    it("Should correctly set the {numOfMessages} field", function () {
      expect(createdConversation.numOfMessages).to.eq(0);
    });
    it("Should set {createdAt} field to a {Date} type", function () {
      const { createdAt } = createdConversation;
      expect(createdAt instanceof Date);
    });
  });
  // END valid {Conversation} model data tests //
});