import mongoose from "mongoose";
import { expect } from "chai";
import Conversation from "../../models/Conversation";
import config from "../../config/config";
import { generateConversation } from "../../db/helpers/mockDataHelpers";

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
    it("Should work", function () {
      console.info(validConvoData);
    })
  });
  // END invalid {Conversation} model data tests //
});