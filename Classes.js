class Car {
    constructor(color, brand, lightsOn, numberOfWheels) {
        this.color = color;
        this.brand = brand;
        this.lightsOn = lightsOn;
        this.numberOfWheels = numberOfWheels;
    }
    changeColor (newColor) {
        this.color = newColor;
    }
    toggleLights (){
        this.lightsOn = !this.lightsOn
    }
    addRemoveWheels(n){
        try{
            if (n % 2 != 0){
                throw new Error(`To add or remove wheels enter an even number`)
            }
            else {
                if (n > 0){
                    this.numberOfWheels = this.numberOfWheels + n;
                }
                if (n < 0){
                    this.numberOfWheels = this.numberOfWheels + n;
                }
            }
        }catch(err){
            console.log(`!Error`)
        }
    }
}
class RaceCar extends Car {
    constructor(passengers, topSpeed, tailWindGate, color, brand, lightsOn, numberOfWheels){
        super(color, brand, lightsOn, numberOfWheels)
        this.passengers = passengers;
        this.topSpeed = topSpeed;
        this.tailWindGate = tailWindGate;
    }
    toggleTailWindGate(){
        this.tailWindGate = !this.tailWindGate;
        console.log(`Warning! Tail Gate is ${this.tailWindGate}`)
    }
}
let car2 = new RaceCar(2, `180Mph`, true);
car2.changeColor(`Purple`)
car2.brand = `Ferari`;
car2.toggleLights();
car2.numberOfWheels = 4;
car2.addRemoveWheels()
console.log(car2)