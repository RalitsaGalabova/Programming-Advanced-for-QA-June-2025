import {analyzeArray} from '../arrayAnalyzer.js'
import { expect } from 'chai'
import { describe } from 'mocha';

describe('Test arrayAnalalyzer function', () => {
    it('should return undefined if the input is not an array', () => {

        //Arrange

        let input = 'hello';

        //Act
        let result = analyzeArray(input);

        //Assert
        expect(result).is.undefined

    })
    it('should return undefined if the input array is empty', () => {

        //Arrange

        let input = [] ;

        //Act
        let result = analyzeArray(input);

        //Assert
        expect(result).is.undefined

    })
    it('should return undefined if the input is not integer array', () => {

        //Arrange

        let input = ["hello", "time"] ;

        //Act
        let result = analyzeArray(input);

        //Assert
        expect(result).is.undefined

    })
    it('should return correct min, max and length for positive numbers', () => {

        //Arrange
        let input= [5, 3, 9, 1];
        let expected = { min: 1, max: 9, length: 4 };

        //Act
        let result = analyzeArray(input);

        //Assert
        expect(result).to.deep.equal(expected);
    });
    it('should return correct min, max and length for negative numbers', () => {
        //Arrange
        let input= [-5, -3, -9, -1];
        let expected = { min: -9, max: -1, length: 4 };

        //Act
        let result = analyzeArray(input);

        //Assert
        expect(result).to.deep.equal(expected);
    });

    it('should return correct min, max and length for mixed numbers', () => {
        //Arrange
        let input= [-5, 3, 9, -1];
        let expected = { min: -5, max: 9, length: 4 };

        //Act
        let result = analyzeArray(input);

        //Assert
        expect(result).to.deep.equal(expected);
    });

    it('should work when all numbers are the same', () => {
        //Arrange
        let input= [1, 1, 1, 1];
        let expected = { min: 1, max: 1, length: 4 };

        //Act
        let result = analyzeArray(input);

        //Assert
        expect(result).to.deep.equal(expected);
    });
    it('should return correct min, max and length for array with zero', () => {
        //Arrange
        let input= [0, 0, 0, 0];
        let expected = { min: 0, max: 0, length: 4 };

        //Act
        let result = analyzeArray(input);

        //Assert
        expect(result).to.deep.equal(expected);
    });
    it('should return correct min, max and length for array with floating-poin numbers', () => {
        //Arrange
        let input= [2.5, 6.87, 10.20, 3.34];
        let expected = { min: 2.5, max: 10.20, length: 4 };

        //Act
        let result = analyzeArray(input);

        //Assert
        expect(result).to.deep.equal(expected);
    });
    it('should return correct min, max and length for single element array', () => {
        //Arrange
        let input= [5];
        let expected = { min: 5, max: 5, length: 1 };

        //Act
        let result = analyzeArray(input);

        //Assert
        expect(result).to.deep.equal(expected);
    });
    it('should return correct min, max and length for array with equals elements', () => {
        //Arrange
        let input= [5, 5, 5];
        let expected = { min: 5, max: 5, length: 3 };

        //Act
        let result = analyzeArray(input);

        //Assert
        expect(result).to.deep.equal(expected);
    });
})