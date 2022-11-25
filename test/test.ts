import assert from 'assert';

import {Person} from "../client"
import { FirstClass, SecondClass, Departure, Arrival, ArrivalTime, DepartureTime} from '../trainTrip';

describe('My function', function() {
    it('should test', function() {
        assert.equal(2, 2);
    });

    it('should display the train class chosed by a client', function() {
       
        let test = new FirstClass;
        let actual = test.begin();
        let expected = "FIRSTCLASS";
        console.log(actual)
        assert.equal(actual, expected)
    });

    it('should print the passenger time', function() {
       
        let test = new DepartureTime;
        let actual = test.begin();
        let expected = "Departure time 19:00 pm" ;
        console.log(actual)
        assert.equal(actual, expected)
    });

    it('should print the passenger arrival time', function() {
       
        let test = new ArrivalTime;
        let actual = test.begin();
        let expected = "Arrival time 10:20 am" ;
        console.log(actual)
        assert.equal(actual, expected)
    });

    it('should print the town destination ', function() {

        let test = new Departure;
        let actual = test.begin();
        let expected = "from CAPE TOWN" ;
        console.log(actual)
        assert.equal(actual, expected)
    });

    it('should print the arrival town destination ', function() {

        let test = new Arrival;
        let actual = test.begin();
        let expected = "to QUEENSTOWN." ;
        console.log(actual)
        assert.equal(actual, expected)
    });

   
});