import { chooseYourCar } from '../chooseYourCar.js'
import { describe } from 'mocha'
import { expect, assert } from 'chai';

describe('Test chooseYourCar', () => {
    describe('choosingType', () => {
        it('should throw an error on invalid input', () => {
            
            expect(() => chooseYourCar.choosingType("hatchback", "red", 2000)).to.throw("This type of car is not what you are looking for.");
            expect(() => chooseYourCar.choosingType("Sedan", "red", 1899)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType("Sedan", "red", 2023)).to.throw("Invalid Year!");
        });
        it('should meet requirments for a car', () => {
            expect(chooseYourCar.choosingType("Sedan", "red", 2010)).to.equal("This red Sedan meets the requirements, that you have.");
            expect(chooseYourCar.choosingType("Sedan", "red", 2020)).to.equal("This red Sedan meets the requirements, that you have.")
        });
        it('should not meet requirments for a car', () => {
            expect(chooseYourCar.choosingType("Sedan", "red", 2009)).to.equal("This Sedan is too old for you, especially with that red color.");
        });
    });

    describe('brandName', () => {
        it('should throw an error on invalid input', () => {
            expect(() => chooseYourCar.brandName("Toyota", 2)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.brandName(2, "toyota")).to.throw("Invalid Information!")
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -2)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 4)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw("Invalid Information!")
            
        });

        it('should return the correct brands', () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.equal('BMW, Toyota')
        });
    });

    describe('carFuelConsumption', () => {
        it('should throw an error on invalid input', () => {
            expect(() => chooseYourCar.carFuelConsumption("22", 40)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(0, 40)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(-5, 40)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(25, "40")).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(25, 0)).to.throw("Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(25, -2)).to.throw("Invalid Information!")
        });

        it('should return message for an efficient car', () => {
            expect(chooseYourCar.carFuelConsumption(350, 5)).to.equal("The car is efficient enough, it burns 1.43 liters/100 km.")
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.")
        });

        it('should return message for an non efficient car', () => {
            expect(chooseYourCar.carFuelConsumption(20, 100)).to.equal("The car burns too much fuel - 500.00 liters!")
        });
    });
});