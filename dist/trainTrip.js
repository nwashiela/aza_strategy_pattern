"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondClass = exports.FirstClass = exports.DepartureTime = exports.ArrivalTime = exports.Arrival = exports.Departure = void 0;
class Departure {
    begin() {
        return "from CAPE TOWN";
        // console.log('from CAPE TOWN.')
    }
}
exports.Departure = Departure;
class Arrival {
    begin() {
        return "to QUEENSTOWN.";
        // console.log('to QUEENSTOWN.')
    }
}
exports.Arrival = Arrival;
class ArrivalTime {
    begin() {
        return "Arrival time 10:20 am";
        // console.log('Arrival time 10:20 am')
    }
}
exports.ArrivalTime = ArrivalTime;
class DepartureTime {
    begin() {
        return "Departure time 19:00 pm";
        // console.log('Departure time 19:00 pm')
    }
}
exports.DepartureTime = DepartureTime;
class FirstClass {
    begin() {
        return "FIRSTCLASS";
        // console.log('FIRSTCLASS')
    }
}
exports.FirstClass = FirstClass;
class SecondClass {
    begin() {
        return "SECONDCLASS";
        // console.log('SECONDCLASS')
    }
}
exports.SecondClass = SecondClass;
