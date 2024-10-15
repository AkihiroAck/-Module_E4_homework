function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPluggedIn = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    this.isPluggedIn = true;
    console.log(`${this.name} включен в розетку.`);
};

ElectricalAppliance.prototype.unplug = function() {
    this.isPluggedIn = false;
    console.log(`${this.name} отключен от розетки.`);
};

ElectricalAppliance.prototype.getPower = function() {
    return this.isPluggedIn ? this.power : 0;
};

function DeskLamp(name, power, brightness) {
    ElectricalAppliance.call(this, name, power);
    this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.getBrightness = function() {
    return this.brightness;
};

function Computer(name, power, type) {
    ElectricalAppliance.call(this, name, power);
    this.type = type;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.getType = function() {
    return this.type;
};

const deskLamp = new DeskLamp("Настольная лампа", 60, "Высокая");
const computer = new Computer("Ноутбук", 100, "Лаптоп");

deskLamp.plugIn();
computer.plugIn();

const totalPower = deskLamp.getPower() + computer.getPower();
console.log(`Общая потребляемая мощность: ${totalPower} Вт`);

console.log(`Яркость лампы: ${deskLamp.getBrightness()}`);
console.log(`Тип компьютера: ${computer.getType()}`);

deskLamp.unplug();
computer.unplug();
