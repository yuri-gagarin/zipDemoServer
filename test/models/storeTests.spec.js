import mongoose from "mongoose";
import { expect } from "chai";
import Store from "../../models/Store";
import config from "../../config/config";
import { generateStore } from "../../db/helpers/mockDataHelpers";
// constants //
import { storeCategories } from "../../models/helpers/modelConstants";

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
          const locationCity = error.errors["location.city"];
          expect(error).to.be.an("object");
          expect(locationCity).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record without a {location.country} field", function (done) {
      Store.create({ ...validStoreData, "location.country": null })
        .catch((error) => {
          const locationCountry = error.errors["location.country"];
          expect(error).to.be.an("object");
          expect(locationCountry).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record without a {location.latitude} field", function (done) {
      Store.create({ ...validStoreData, "location.latitude": null })
        .catch((error) => {
          const locationLatitude = error.errors["location.latitude"];
          expect(error).to.be.an("object");
          expect(locationLatitude).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record without a {location.longitute} field", function (done) {
      Store.create({ ...validStoreData, "location.longitude": null })
        .catch((error) => {
          const locationLongitude = error.errors["location.longitude"];
          expect(error).to.be.an("object");
          expect(locationLongitude).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
  });
  // END invalid {Store} model data tests //
  // Valid {Store} model data tests //
  describe("Valid {Store} model data", function () {
    let createdStore;
    const validStoreData = generateStore({ category: storeCategories.SPORTS });
    it("Should create and save a new {Store} model", function (done) {
      Store.create(validStoreData)
        .then((newStore) => {
          createdStore = newStore;
          expect(newStore).to.be.an("object");
          done();
        });
    });
    it("Should correctly set the {administrators} field", function () {
      expect(createdStore.administrators).to.deep.equal(validStoreData.administrators);
    });
    it("Should correctly set the {storeName} field", function () {
      expect(createdStore.storeName).to.equal(validStoreData.storeName);
    });
    it("Should correctly set the {category} field", function () {
      expect(createdStore.category).to.equal(validStoreData.category);
    });
    it("Should correctly set the {location} fields", function () {
      expect(JSON.stringify(createdStore.location)).to.equal(JSON.stringify(validStoreData.location));
    });
    it("Should set the {createdAt} field to a {Date} instance", function () {
      const { createdAt } = createdStore;
      expect(createdAt instanceof Date);
    });
  });
  // END valid {Store} model data tests //
});