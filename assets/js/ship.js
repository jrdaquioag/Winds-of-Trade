// temp
// because of firebase array handling, should get list of goods before writing functions for them
const defaultCargo = [["Arms",0], ["Olive Oil",0], ["Fish",0], ["Cheese",0]];

class Ship {

    constructor(location = "Houston", hull = 5000, money = 1000, hold = 100, fuel = 100, cargo = defaultCargo) {
        this.location = location;
        this.hull = hull;
        this.money = money;
        this.hold = hold;
        this.fuel = fuel;
<<<<<<< HEAD
        this.cargo = cargo;
        // localStorage.setItem("location", this.location);
        // localStorage.setItem("money", this.money);
        // localStorage.setItem("hull", this.hull);
        // localStorage.setItem("hold", this.hold);
        // localStorage.setItem("fuel", this.fuel);
        // localStorage.setItem('cargo', JSON.stringify(this.cargo));
=======
        if (cargo === defaultCargo)
            this.cargo = cargo;
        else
            this.setCargoHold(cargo);
        localStorage.setItem("location", this.location);
        localStorage.setItem("money", this.money);
        localStorage.setItem("hull", this.hull);
        localStorage.setItem("hold", this.hold);
        localStorage.setItem("fuel", this.fuel);
        localStorage.setItem('cargo', JSON.stringify(this.cargo));
>>>>>>> c53a6f920f8efd30b863fc75e7a9771740c49ae6
    }

    // Setters
    setCargoHold(cargo) {
        this.cargo = JSON.parse(cargo);
    }

    setItem(item, value) {
<<<<<<< HEAD
        switch(item) {
=======
        switch (item) {
>>>>>>> c53a6f920f8efd30b863fc75e7a9771740c49ae6
            case "location":
                this.location = value;
                localStorage.setItem(item, value);
                break;
            case "hull":
                this.hull = value;
                localStorage.setItem(item, value);
                break;
            case "money":
<<<<<<< HEAD
                this.money = money;
=======
                this.money = value;
>>>>>>> c53a6f920f8efd30b863fc75e7a9771740c49ae6
                localStorage.setItem(item, value);
                break;
            case "hold":
                this.hold = value;
                localStorage.setItem(item, value);
                break;
            case "fuel":
                this.fuel = value;
                localStorage.setItem(item, value);
                break;
            default:
<<<<<<< HEAD
                console.log("Invalid item - " + item);
=======
>>>>>>> c53a6f920f8efd30b863fc75e7a9771740c49ae6
        }
    }

    setCargo(name, amount) {
        for (var i = 0; i < this.cargo.length; i++)
            if (this.cargo[i][0] == name) {
                this.cargo[i].pop();
                this.cargo[i].push(amount);
                i = this.cargo.length;
                localStorage.setItem('cargo', JSON.stringify(this.cargo));
            }
    }

    // Getters
    getCargo(name) {
        for (var i = 0; i < this.cargo.length; i++)
            if (this.cargo[i][0] == name)
                return this.cargo[i];
        return null;
    }

    // checks if the cargo hold is full if the amount passed in is added
    isSpace(amount = 0){
        for (var i = 0; i < this.cargo.length; i++)
            amount += this.cargo[i][1];
        if (amount <= this.hold)
            return true;
        else
            return false;
    }

    // Getting a new ship
    newShip(hull, hold, fuel) {
        this.hull = hull;
        this.hold = hold;
        localStorage.setItem("hull", this.hull);
        localStorage.setItem("hold", this.hold);
    }

    outputCargo() {
        // write code here to display to the various html pages that needs it
    }
    
}


