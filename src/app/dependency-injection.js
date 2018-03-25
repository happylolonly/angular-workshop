
class Wheel {
    constructor() {

    }

}

class BigWheel extends Wheel {
    
}

class Door {
    constructor() {
        
    }

}

class Car {
    constructor(wheel, door) {
        this.wheel = wheel;
        this.door = door;
    }
}


const car1 = new Car(
    new Wheel(),
    new Door(),
)

const car2 = new Car(
    new Wheel(),
    new Door()
)

