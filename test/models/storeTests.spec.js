import mongoose from "mongoose";
import { expect } from "chai";
import Store from "../../models/Store";
import config from "../../config/config";
import { generateStore } from "../../db/helpers/mockDataHelpers";

const VALIDATION_ERROR = mongoose.Error.ValidationError.name;

describe("{Store} model unit tests", function () {
  // pre test setup and subsequent cleanup //
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
  // END pre test setup - cleanup //
  // invalid {Store} model data tests //
  describe("Invalid {Store} model data", function () {
    const validStoreData = generateStore();
    it("Should NOT create a new record without at least one {administrator}", function (done) {
      Store.create({ ...validStoreData, administrators: [] })
        .catch((error) => {
          const { administrators } = error.errors;
          expect(error).to.be.an("object");
          expect(administrators).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record without a {storeName} field", function (done) {
      Store.create({ ...validStoreData, storeName: null })
        .catch((error) => {
          const { storeName } = error.errors;
          expect(error).to.be.an("object");
          expect(storeName).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record without a {location.city} field", function (done) {
      Store.create({ ...validStoreData, "location.city": null })
        .catch((error) => {
          console.error(error);
          done();
        });
    });
    it("Should NOT create a new record without a {location.country} field", function (done) {

    });
    it("Should NOT create a new record without a {location.latitude} field", function (done) {

    });
    it("Should NOT create a new record without a {location.longitute} field", function (done) {

    });
  });
  // END invalid {Store} model data tests //
});