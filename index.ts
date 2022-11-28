import { Person } from "./client"
import { Arrival, Departure, ArrivalTime, DepartureTime, FirstClass } from "./trainTrip";

let client = new Person("john", new Departure()) //print from cape town
client.travel()
console.log(client.travel())

let client1 = new Person("john", new Arrival()) //print to queenstown town
client.travel()
console.log(client1.travel())

let client2 = new Person("john", new DepartureTime()) //print depature time 19:00 pm
client.travel()
console.log(client2.travel())

let client3 = new Person("john", new ArrivalTime()) //print arrival time 10:20 am
client.travel()
console.log(client3.travel())

let client4 = new Person("john", new FirstClass()) //print first class
client.travel()
console.log(client4.travel())

