import {mathEnforcer} from '../mathEnforcer.js'
import { expect } from 'chai'
import { describe } from 'mocha';


describe("Test mathenforcer object", () => {
    describe('Test if addFive method works as expected', () => {
        it('should return undefined if input is not a number', () => {

            //Arrange
            let inputNumber = "5"

            //Act

            let result = mathEnforcer.addFive(inputNumber)

            //Assert
            expect(result).is.undefined

           
        });

        it('should add 5 to positive number', () => {

            //Arrange
            let inputNumber = 5;
            let expected = 10;

            //Act

            let result = mathEnforcer.addFive(inputNumber)

            //Assert
            expect(result).is.equal(expected)
            
        });

        it('should add 5 to negative number', () => {

            //Arrange
            let inputNumber = -5;
            let expected = 0;

            //Act

            let result = mathEnforcer.addFive(inputNumber)

            //Assert
            expect(result).is.equal(expected)
            
        });

        it('should add 5 to floating point number', () => {

            //Arrange
            let inputNumber = 5.757;
            let expected = 10.757;

            //Act

            let result = mathEnforcer.addFive(inputNumber)

            //Assert
            expect(result).to.be.closeTo(expected, 0.01)
            
        });
    });
    describe('Test if subtract10 method works as expected', () => {
        it('should return undefined if input is not a number', () => {

            //Arrange
            let inputNumber = "5"

            //Act

            let result = mathEnforcer.subtractTen(inputNumber)

            //Assert
            expect(result).is.undefined
            
        });

        it('should subtract 10 from positive number', () => {
            //Arrange
            let inputNumber = 5;
            let expected = -5;

            //Act

            let result = mathEnforcer.subtractTen(inputNumber)

            //Assert
            expect(result).is.equal(expected)
           
        });

        it('should subtract 10 from negative number', () => {
            //Arrange
            let inputNumber = -5;
            let expected = -15;

            //Act

            let result = mathEnforcer.subtractTen(inputNumber)

            //Assert
            expect(result).is.equal(expected)
            
        });

        it('should subtract 10 from floating point number', () => {
            //Arrange
            let inputNumber = 20.775;
            let expected = 10.775;

            //Act

            let result = mathEnforcer.subtractTen(inputNumber)

            //Assert
            expect(result).to.be.closeTo(expected, 0.01)
           
        });
    });
    describe('Test if sum method works as expected', () => {
        it('should return undefined if first param is not a number', () => {

            //Arrange
            let inputNumber = "5"

            //Act

            let result = mathEnforcer.sum(inputNumber, 7)

            //Assert
            expect(result).is.undefined
            
        });

        it('should return undefined if second param is not a number', () => {
            //Arrange
            let inputNumber = "5"

            //Act

            let result = mathEnforcer.sum(5, inputNumber)

            //Assert
            expect(result).is.undefined
            
        });

        it('should return sum of two positive numbers', () => {
            //Arrange
            let inputNumber1 = 5;
            let inputNumber2 = 5;
            let expected = 10;

            //Act

            let result = mathEnforcer.sum(inputNumber1, inputNumber2)

            //Assert
            expect(result).is.equal(expected);
            
        });

        it('should return sum of positive and negative number', () => {
            //Arrange
            let inputNumber1 = 5;
            let inputNumber2 = -5;
            let expected = 0;

            //Act

            let result = mathEnforcer.sum(inputNumber1, inputNumber2)

            //Assert
            expect(result).is.equal(expected);
            
        });

        it('should return sum of two floating point numbers', () => {

            //Arrange
            let inputNumber1 = 2.5;
            let inputNumber2 = 2.5;
            let expected = 5;

            //Act

            let result = mathEnforcer.sum(inputNumber1, inputNumber2)

            //Assert
            expect(result).is.equal(expected);
            
        });
    });
});