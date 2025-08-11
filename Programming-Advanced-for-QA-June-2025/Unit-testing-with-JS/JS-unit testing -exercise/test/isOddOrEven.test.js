import {isOddOrEven} from '../isOddOrEven.js'
import { expect } from 'chai'
import { describe } from 'mocha';

describe('Test odd or even function', () => {
    it('should return undefined if the input is a number', () =>{
        //Arrange

        let input = 1;

        //Act
        let result = isOddOrEven(input);

        //Assert
        expect(result).is.undefined
    })
    it('should return undefined if the input is an array', () =>{
        //Arrange

        let input = [1,3,3];

        //Act
        let result = isOddOrEven(input);

        //Assert
        expect(result).is.undefined
    })
    it('should return odd if the input length is an odd number', () =>{
        //Arrange

        let input = "hey";
        let expected = "odd"

        //Act
        let result = isOddOrEven(input);

        //Assert
        expect(result).is.equal(expected)
    })
    it('should return even if the input length is an even number', () =>{
        //Arrange

        let input = "door";
        let expected = "even"

        //Act
        let result = isOddOrEven(input);

        //Assert
        expect(result).is.equal(expected)
    })
    it('additional test to verify that the function is working as expected', () =>{
        //Arrange

        let input = "Hello,I am Rally";
        let expected = "even"

        //Act
        let result = isOddOrEven(input);

        //Assert
        expect(result).is.equal(expected)
    })
    

})