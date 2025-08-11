import {lookupChar} from '../lookupChar.js'
import { expect } from 'chai'
import { describe } from 'mocha';

describe('Test lookup char function', () => {
    it('should return char at the specified index', () =>{
        //Arrange

        let inputString = "hello";
        let inputIndex = 2;
        let expected = 'l'

        //Act
        let result = lookupChar(inputString,inputIndex);

        //Assert
        expect(result).is.equal(expected)
    })
    it('should return undefined if the input is not a string', () =>{
        //Arrange

        let inputString = ["hello"];
        let inputIndex = 2;

        //Act
        let result = lookupChar(inputString,inputIndex);

        //Assert
        expect(result).is.undefined
    })
    it('should return error message if the index is out of range', () =>{
        //Arrange

        let inputString = "hello";
        let inputIndex = 22;
        let expected = "Incorrect index";

        //Act
        let result = lookupChar(inputString,inputIndex);

        //Assert
        expect(result).is.equal(expected)
    })
    it('should return error message if the index is negative number', () =>{
        //Arrange

        let inputString = "hello";
        let inputIndex = -2;
        let expected = "Incorrect index";

        //Act
        let result = lookupChar(inputString,inputIndex);

        //Assert
        expect(result).is.equal(expected)
    })
    it('should return undefined if the index is floating-point number', () =>{
        //Arrange

        let inputString = "hello";
        let inputIndex = 2.5;

        //Act
        let result = lookupChar(inputString,inputIndex);

        //Assert
        expect(result).is.undefined
    })
})