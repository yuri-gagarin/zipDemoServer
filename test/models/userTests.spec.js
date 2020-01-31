import mongoose from "mongoose";
import { expect } from "chai";
import User from '../../models/User';
import config from "../../config/config";
import { generateUserData } from "../../db/helpers/mockDataHelpers";

const VALIDATION_ERROR = mongoose.Error.ValidationError.name;

describe("{User} Model unit tests", function () {
  // pre-test setup and cleanup //
  before("Connect to the database", function (done) {
    const { dbPath, dbOptions } = config;
    mongoose.connect(dbPath, dbOptions, (error) => {
      if (error) return done(error);
      return done();
    });
  });
  after("Close the connection and clean up", function (done) {
    mongoose.disconnect((error) => {
      if (error) return done(error);
      return done();
    });
  });
  // end pre-test setup and cleanup //
  // invalid {User} data model tests //
  describe("Invalid {User} model data", function () {
    const validUserData = generateUserData();

    it("Should NOT create a new record without a {firstName} field", function (done) {
      User.create({ ...validUserData, firstName: null })
        .catch((error) => {
          const { firstName } = error.errors;
          expect(error).to.be.an("object");
          expect(firstName).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record without a {lastName} field", function (done) {
      User.create({ ...validUserData, lastName: null })
        .catch((error) => {
          const { lastName } = error.errors;
          expect(error).to.be.an("object");
          expect(lastName).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record without a {password} field", function (done) {
      User.create({ ...validUserData, password: null })
        .catch((error) => {
          const { password } = error.errors;
          expect(error).to.be.an("object");
          expect(password).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record without an {email} field", function (done) {
      User.create({ ...validUserData, email: null })
        .catch((error) => {
          const { email } = error.errors;
          expect(error).to.be.an("object");
          expect(email).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });
    it("Should NOT create a new record witout a {phoneNumber} field", function (done) {
      User.create({ ...validUserData, phoneNumber: null })
        .catch((error) => {
          const { phoneNumber } = error.errors;
          expect(error).to.be.an("object");
          expect(phoneNumber).to.be.an("object");
          expect(error.name).to.equal(VALIDATION_ERROR);
          done();
        });
    });

  });
  // END invalid {User} model tests //
  // valid {User} data model tests //
  describe("Valid {User} model data", function () {
    let createdUser;
    const userData = generateUserData();

    it("Should create and save a {User} Model", function (done) {
      User.create(userData)
        .then((user) => {
          createdUser = user;
          expect(user).to.be.an("object");
          done();
        });
    });
    it("Should have a {firstName] and {lastName} field", function () {
      expect(createdUser.firstName).to.equal(userData.firstName);
      expect(createdUser.lastName).to.equal(userData.lastName);
    });
    it("Should have an {email} field", function () {
      expect(createdUser.email).to.equal(userData.email);
    });
    it("Should have a {phoneNumber} field", function () {
      expect(createdUser.phoneNumber).to.equal(userData.phoneNumber);
    });
    it("Should set {banned} and {warned} to {false}", function () {
      expect(createdUser.banned).to.equal(false);
      expect(createdUser.warned).to.equal(false);
    });
    it("Should set {createdAt} field to a {Date} type", function () {
      const { createdAt } = createdUser;
      expect(createdAt instanceof Date);
    });

  });
  // END valid {User} model tests //
});