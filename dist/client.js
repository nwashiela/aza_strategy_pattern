"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, getTicket) {
        this.name = name;
        this.getTicket = getTicket;
    }
    travel() {
        this.name;
        return `passenger ticket: ${this.name}, printed detail:`;
        // console.log(`passenger ticket: ${ this.name }, printed detail:`);
        // this.getTicket.begin()
    }
}
exports.Person = Person;
