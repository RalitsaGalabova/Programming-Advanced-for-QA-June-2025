import {artGallery} from '../artGallery.js'
import { expect } from 'chai'
import { describe } from 'mocha';


describe('artGallery', () => {

    describe('Test if addArtwork method works as expected', () => {
        it('should add artwork successfully with valid data', () => {

            //Arrange
            let title = "Sun";
            let dimensions = "50 x 50";
            let artist = "Picasso";
            let expected = "Artwork added successfully: 'Sun' by Picasso with dimensions 50 x 50."

            //Act
            let result = artGallery.addArtwork(title, dimensions, artist);

            //Asert
            expect(result).to.equal(expected);
        });

        it('should return error message if title is not a string', () => {
            //Arrange
            let title = 555;
            let dimensions = "50 x 50";
            let artist = "Picasso";

            //Act
            let result = () => artGallery.addArtwork(title, dimensions, artist);

            //Assert
            expect(result).to.throw('Invalid Information!');
        });

        it('should throw error if artist is not a string', () => {
            //Arrange
            let title = "СуSun";
            let dimensions = "50 x 50";

            //Act
            let result = () => artGallery.addArtwork(title, dimensions);

            //Assert
            expect(result).to.throw('Invalid Information!');
        });

        it('should throw error if dimensions format is invalid', () => {
            //Arrange
            let title = "Sun";
            let dimensions = "50 - 50";
            let artist = "Picasso";

            //Act
            let result = () => artGallery.addArtwork(title, dimensions, artist);

            //Assert
            expect(result).to.throw('Invalid Dimensions!');
        });

        it('should throw error if artist is not allowed', () => {
            //Arrange
            let title = "Sun";
            let dimensions = "50 x 50";
            let artist = "Mone";

            //Act
            let result = () => artGallery.addArtwork(title, dimensions, artist);

            //Assert
            expect(result).to.throw('This artist is not allowed in the gallery!');
        });
    });

    describe('Test if calculateCosts method works as expected', () => {
        it('should return correct price without sponsor', () => {

            //Arrange
            let exhibitionCosts = 1000;
            let insuranceCosts = 500;
            let sponsor = false;

            let expected = "Exhibition and insurance costs are 1500$.";

            //Act

            let result = artGallery.calculateCosts(exhibitionCosts, insuranceCosts, sponsor);
            
            //Assert
            expect(result).is.equal(expected);
        });

        it('should return correct discounted price with sponsor', () => {
    
            //Arrange
            let exhibitionCosts = 1000;
            let insuranceCosts = 500;
            let sponsor = true;

            let expected = "Exhibition and insurance costs are 1350$, reduced by 10% with the help of a donation from your sponsor.";

            //Act

            let result = artGallery.calculateCosts(exhibitionCosts, insuranceCosts, sponsor);
            
            //Assert
            expect(result).is.equal(expected);
        });

        it('should throw error if exhibitionCosts is not a number', () => {
            //Arrange
            let exhibitionCosts = "h";
            let insuranceCosts = 500;
            let sponsor = false;

            //Act

            let result = () => artGallery.calculateCosts(exhibitionCosts, insuranceCosts, sponsor);
            
            //Assert
            expect(result).to.throw("Invalid Information!")
        });

        it('should throw error if insuranceCosts is not a number', () => {
            //Arrange
            let exhibitionCosts = 100;
            let insuranceCosts = "h";
            let sponsor = false;

            //Act

            let result = () => artGallery.calculateCosts(exhibitionCosts, insuranceCosts, sponsor);
            
            //Assert
            expect(result).to.throw("Invalid Information!")
        });

        it('should throw error if sponsor is not boolean', () => {
            //Arrange
            let exhibitionCosts = 100;
            let insuranceCosts = 500;
            let sponsor = "h";

            //Act

            let result = () => artGallery.calculateCosts(exhibitionCosts, insuranceCosts, sponsor);
            
            //Assert
            expect(result).to.throw("Invalid Information!")
        });

        it('should throw error if exhibitionCosts is negative', () => {
            //Arrange
            let exhibitionCosts = -100;
            let insuranceCosts = 500;
            let sponsor = "h";

            //Act

            let result = () => artGallery.calculateCosts(exhibitionCosts, insuranceCosts, sponsor);
            
            //Assert
            expect(result).to.throw("Invalid Information!")
        });
        it('should throw error if insuranceCosts is negative', () => {
            //Arrange
            let exhibitionCosts = 100;
            let insuranceCosts = -500;
            let sponsor = "h";

            //Act

            let result = () => artGallery.calculateCosts(exhibitionCosts, insuranceCosts, sponsor);
            
            //Assert
            expect(result).to.throw("Invalid Information!")
        });
    });

    describe('Test if organizeExhibits method works as expected', () => {
        it('should organize exhibits correctly with enough artworks', () => {

            //Arrange
            let artworksCount = 50;
            let displaySpacesCount = 5;

            let expected = "You have 5 display spaces with 10 artworks in each space."

            //Act

            let result = artGallery.organizeExhibits(artworksCount, displaySpacesCount)

            //Assert
            expect(result).to.equal(expected);
        });

        it('should suggest adding more artworks if less than 5 per space', () => {
            //Arrange
            let artworksCount = 10;
            let displaySpacesCount = 3;

            let expected = "There are only 3 artworks in each display space, you can add more artworks."

            //Act

            let result = artGallery.organizeExhibits(artworksCount, displaySpacesCount)

            //Assert
            expect(result).to.equal(expected);
        });

        it('should throw error if artworksCount is not a number', () => {
           //Arrange
            let artworksCount = "j";
            let displaySpacesCount = 3;

            //Act

            let result = () => artGallery.organizeExhibits(artworksCount, displaySpacesCount)

            //Assert
            expect(result).to.throw('Invalid Information!');
        });

        it('should throw error if displaySpacesCount is not a number', () => {
            //Arrange
            let artworksCount = 10;
            let displaySpacesCount = "j";

            //Act

            let result = () => artGallery.organizeExhibits(artworksCount, displaySpacesCount)

            //Assert
            expect(result).to.throw('Invalid Information!');
        });

        it('should throw error if artworksCount <= 0', () => {
            //Arrange
            let artworksCount = -10;
            let displaySpacesCount = 50;

            //Act

            let result = () => artGallery.organizeExhibits(artworksCount, displaySpacesCount)

            //Assert
            expect(result).to.throw('Invalid Information!');
        });

        it('should throw error if displaySpacesCount <= 0', () => {
            //Arrange
            let artworksCount = 10;
            let displaySpacesCount = 0;

            //Act

            let result = () => artGallery.organizeExhibits(artworksCount, displaySpacesCount)

            //Assert
            expect(result).to.throw('Invalid Information!');
        });
    });

});