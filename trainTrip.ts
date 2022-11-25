import TrainTrip from "./strategy";

export class Departure implements TrainTrip {
    public begin(): string {
      return "from CAPE TOWN"
      // console.log('from CAPE TOWN.')
    }
  }

  export class Arrival implements TrainTrip {
    public begin(): string {
      return "to QUEENSTOWN."
      // console.log('to QUEENSTOWN.')
    }
  }

  export class ArrivalTime implements TrainTrip {
    public begin(): string {
      return "Arrival time 10:20 am"
      // console.log('Arrival time 10:20 am')
    }
  }

  export class DepartureTime implements TrainTrip {
    public begin(): string {
      return "Departure time 19:00 pm"
      // console.log('Departure time 19:00 pm')
    }
  }

  export class FirstClass implements TrainTrip {
    public begin(): string {
      return "FIRSTCLASS";
      // console.log('FIRSTCLASS')
      }
  }

  export class SecondClass implements TrainTrip {
    public begin(): string {
      return "SECONDCLASS";
      // console.log('SECONDCLASS')
      }
  }