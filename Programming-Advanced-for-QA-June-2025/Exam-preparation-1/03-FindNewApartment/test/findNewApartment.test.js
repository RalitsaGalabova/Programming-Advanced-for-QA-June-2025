import { findNewApartment } from '../findNewApartment.js'
import { describe } from 'mocha'
import { expect, assert } from 'chai'

describe('test_findNewApartment', () =>{
    describe('isGoodLocation', () => {
        it('should throw error on invalid input', () => {
            expect(() => findNewApartment.isGoodLocation(32, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Plovdiv", "yes")).to.throw("Invalid input!");
        });
        it('should return "This location is not suitable for you." if location is not valid', () => {
           
            expect(findNewApartment.isGoodLocation("Haskovo", true)).to.equal("This location is not suitable for you.")
        });
        it('should return "You can go on home tour!" if location is good and public transport is available', () => {

           expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!")
           expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal("You can go on home tour!")
           expect(findNewApartment.isGoodLocation("Varna", true)).to.equal("You can go on home tour!")
        });
        it('should return "There is no public transport in area." if location is good but public transport is unavailable', () => {

           expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.")
           expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal("There is no public transport in area.")
           expect(findNewApartment.isGoodLocation("Varna", false)).to.equal("There is no public transport in area.")
        });
    }),
    describe('Test isLargeEnough', () => {
        it('Should return apartments that meet the wanted criteria for minimal square meters', () => {
     
            expect(findNewApartment.isLargeEnough([56, 78, 122, 144], 100)).to.equal("122, 144");
        });

        it('Should throw error on onvalid input', () => {
            expect(() => findNewApartment.isLargeEnough(3444, 120)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([56, 78, 122, 144], "120")).to.throw("Invalid input!");
            expect( () => findNewApartment.isLargeEnough([], 100)).to.throw("Invalid input!");
        });
    }),
    describe('isItAffordable', () => {
        it('should throw an error on invalid input', () => {
            expect(() => findNewApartment.isItAffordable("120", 300)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(-2, 300)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(0, 300)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(120, "300")).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(120, -200)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(120, 0)).to.throw("Invalid input!");
            
        });
        it('should not be affordable if price is greater than budget', () => {
            //Arrange
            let price = 500;
            let buget = 300;
            let expected = "You don't have enough money for this house!";

            //Act
            let result = findNewApartment.isItAffordable(price, buget);

            //Assert
            expect(result).to.equal(expected)
        });
        it('should be affordable if price is equal to or less than budget', () => {
            //Arrange
            let price = 500;
            let buget = 900;
            let expected = "You can afford this home!";

            //Act
            let result = findNewApartment.isItAffordable(price, buget);

            //Assert
            expect(result).to.equal(expected)
        });
    })
})


