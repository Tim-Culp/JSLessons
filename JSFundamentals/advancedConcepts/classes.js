class Car {
    //put a # to declare private variables
    #vin

        constructor(make, model, year, miles, color, vin) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.miles = miles;
            this.color = color;
            this.#vin = vin;
        }
        //getter allows value to be fetched, but not written
        get vin() {
            this.#vin;
        }
        //setter allows writing
        set vin(value) {
            this.#vin = value;
        }
    }


    let myCar = new Car("Yes", "I Know", 3000, 3456, "Cars", 12345);

    myCar.vin = 5;
    console.log(myCar.vin);