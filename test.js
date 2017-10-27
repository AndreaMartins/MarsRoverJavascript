let chai = require("chai")
let should = chai.should()

let rovers = require("./MarsRoversThoughtworks.js")

// describe('It should return a number')

describe(`TEST`, () => {
  it("should return an object", () => {
    return rovers.enterData().then(res => {
      res.should.be.a("object")
    })
  })
