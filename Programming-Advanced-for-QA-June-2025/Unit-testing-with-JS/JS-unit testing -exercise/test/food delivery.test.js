import {foodDelivery} from '..//food delivery.js'
import { expect } from 'chai'
import { describe } from 'mocha';

describe('Food Delivery Service', function() {
  describe('getCategory()', function() {
    it('should return correct description for Vegan category', function() {
      // Arrange
      let category = "Vegan";
      let expected = "Dishes that contain no animal products.";
      
      // Act
      let result = foodDelivery.getCategory(category);
      
      // Assert
      expect(result).to.equal(expected);
    });
    it('should return correct description for Vegetarian category', function() {
      // Arrange
      let category = "Vegetarian";
      let expected = "Dishes that contain no meat or fish.";
      
      // Act
      let result = foodDelivery.getCategory(category);
      
      // Assert
      expect(result).to.equal(expected);
    });
    it('should return correct description for Gluten-free category', function() {
      // Arrange
      let category = "Gluten-Free";
      let expected = "Dishes that contain no gluten.";
      
      // Act
      let result = foodDelivery.getCategory(category);
      
      // Assert
      expect(result).to.equal(expected);
    });

    it('should throw error for invalid category', function() {
      // Arrange
      let category = "Invalid";
      
      // Act 
      let result = () => foodDelivery.getCategory(category);

      //Assert
      expect(result).to.throw("Invalid Category!")
    });
  });
  it('should return correct description for all category', function() {
      // Arrange
      let category = "All";
      let expected = "All available dishes.";
      
      // Act
      let result = foodDelivery.getCategory(category);
      
      // Assert
      expect(result).to.equal(expected);
    });

  describe('Test if addMenuItem() method works as expected', function() {
    it('should return correct count of affordable items', function() {
      // Arrange
      let menuItems = [
        { name: "Salad", price: 8 },
        { name: "Soup", price: 4 }
      ];
      let maxPrice = 5;
      let expected = "There are 1 available menu items matching your criteria!";
      
      // Act
      let result = foodDelivery.addMenuItem(menuItems, maxPrice);
      
      // Assert
      expect(result).to.equal(expected);
    });
    it('should throw error when maxPrice is less than 5', function() {
      // Arrange
      let menuItems = [{ name: "Bread", price: 3 }];
      let maxPrice = 4;
      
      // Act
      let result = () => foodDelivery.addMenuItem(menuItems,maxPrice )

      //Assert
      expect(result).to.throw('Invalid Information!');
    });
    it('should throw error when maxPrice is not a number', function() {
      // Arrange
      let menuItems = [{ name: "Bread", price: 3 }];
      let maxPrice = "3";
      
      // Act
      let result = () => foodDelivery.addMenuItem(menuItems,maxPrice )

      //Assert
      expect(result).to.throw('Invalid Information!');
    });
    it('should throw error when menuItem length is less than 1', function() {
      // Arrange
      let menuItems = [{ }];
      let maxPrice = "3";
      
      // Act
      let result = () => foodDelivery.addMenuItem(menuItems,maxPrice )

      //Assert
      expect(result).to.throw('Invalid Information!');
    });
    it('should throw error when menuItem is not an object', function() {
      // Arrange
      let menuItems = ['menu'];
      let maxPrice = "3";
      
      // Act
      let result = () => foodDelivery.addMenuItem(menuItems,maxPrice )

      //Assert
      expect(result).to.throw('Invalid Information!');
    });
  });

  describe('calculateOrderCost()', function() {
    it('should calculate correct total without discount for standart shipping', function() {
      // Arrange
      let shipping = ["standard"];
      let addons = ["sauce"];
      let discount = false;
      let expected = "You spend $4.00 for shipping and addons!";
      
      // Act
      let result = foodDelivery.calculateOrderCost(shipping, addons, discount);
      
      // Assert
      expect(result).to.equal(expected);
    });
    it('should calculate correct total without discount for express shipping', function() {
      // Arrange
      let shipping = ["express"];
      let addons = ["sauce"];
      let discount = false;
      let expected = "You spend $6.00 for shipping and addons!";
      
      // Act
      let result = foodDelivery.calculateOrderCost(shipping, addons, discount);
      
      // Assert
      expect(result).to.equal(expected);
    });
    it('should calculate correct total without discount for sauce', function() {
      // Arrange
      let shipping = ["express"];
      let addons = ["sauce"];
      let discount = false;
      let expected = "You spend $6.00 for shipping and addons!";
      
      // Act
      let result = foodDelivery.calculateOrderCost(shipping, addons, discount);
      
      // Assert
      expect(result).to.equal(expected);
    });
    it('should calculate correct total without discount for beverage', function() {
      // Arrange
      let shipping = ["express"];
      let addons = ["beverage"];
      let discount = false;
      let expected = "You spend $8.50 for shipping and addons!";
      
      // Act
      let result = foodDelivery.calculateOrderCost(shipping, addons, discount);
      
      // Assert
      expect(result).to.equal(expected);
    });
    it('should apply 15% discount when enabled', function() {
      // Arrange
      let shipping = ["express"];
      let addons = ["beverage"];
      let discount = true;
      let expected = "You spend $7.22 for shipping and addons with a 15% discount!";
      
      // Act
      let result = foodDelivery.calculateOrderCost(shipping, addons, discount);
      
      // Assert
      expect(result).to.equal(expected);
    });

    it('should throw error when shipping is not an array', function() {
      // Arrange
      let shipping = "standard";
      let addons = ["sauce"];
      let discount = false;
      
      // Act
      let result = () => foodDelivery.calculateOrderCost(shipping, addons, discount);

      //Assert
      expect(result).to.throw('Invalid Information!')
    });
    it('should throw error when addons is not an array', function() {
      // Arrange
      let shipping = ["standard"];
      let addons = "sauce";
      let discount = false;
      
      // Act
      let result = () => foodDelivery.calculateOrderCost(shipping, addons, discount);

      //Assert
      expect(result).to.throw('Invalid Information!')
    });
    it('should throw error when discount is not boolean', function() {
      // Arrange
      let shipping = ["standard"];
      let addons = ["sauce"];
      let discount = "false";
      
      // Act
      let result = () => foodDelivery.calculateOrderCost(shipping, addons, discount);

      //Assert
      expect(result).to.throw('Invalid Information!')
    });
  });
});