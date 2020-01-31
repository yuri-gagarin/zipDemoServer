import mongoose from "mongoose";
import User from '../../models/User';
import { expect } from "chai";
import config from "../../config/config";
import { generateUserData } from "../../db/helpers/mockDataHelpers";

describe("{User} Model unit tests", function() {
  before("Connect to the database", function(done) {
    const { dbPath, dbOptions } = config;
    mongoose.connect(dbPath, dbOptions, (error) => {
      if (error) return console.error(error);
      done();
    });
  });
  after("Close the connection and clean up", function(done) {
    mongoose.disconnect((error) => {
      if (error) return console.error(error);
      done();
    });
  });
  describe("Invalid {User} Model data", function() {

  });

  describe("Valid {User} Model data", function() {
    it("Should create and save a {User} Model", function(done) {
      User.create(generateUserData())
        .then((user) => {
          expect(user).to.be.an("object");
          done();
        })
    });
  });
});