"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const trainTrip_1 = require("../trainTrip");
describe('My function', function () {
    it('should test', function () {
        assert_1.default.equal(2, 2);
    });
    it('should display the train class chosed by a client', function () {
        // const name = "josh"
        // let user  = new Person(name, new SecondClass());
        let test = new trainTrip_1.FirstClass;
        let actual = test.begin();
        let expected = "FIRSTCLASS";
        assert_1.default.equal(actual, expected);
    });
    // it('should display the train class chosed by a client', function() {
    //     let user  = new FirstClass();
    //     let actual = user.begin()
    //     let expected = "FIRSTCLASS"
    //     assert.equal(actual, expected)
    // });
});
