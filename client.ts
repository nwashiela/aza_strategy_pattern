import TrainTrip from "./strategy";
import { Arrival, Departure } from "./trainTrip";

export class Person {
    public name: string;
    public getTicket: TrainTrip;
  
    constructor(name: string, getTicket: TrainTrip) {
      this.name = name;
      this.getTicket = getTicket;
    }
  
    travel(): string {

      this.name ;
      return `passenger ticket: ${ this.name }, printed detail:${this.getTicket.begin()}`
      
      
      // console.log(`passenger ticket: ${ this.name }, printed detail:`);
      // this.getTicket.begin()
    }
  
  }


  let client = new Person("john", new Departure())
  client.travel()
  console.log(client.travel())