using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Xml.Linq;
using NUnit.Framework;
using TestApp.Product;

namespace TestApp.Tests;

[TestFixture]
public class ProductInventoryTests
{
    private ProductInventory _inventory = null!;
    
    [SetUp]
    public void SetUp()
    {
        this._inventory = new();
    }
    
    [Test]
    public void Test_AddProduct_ProductAddedToInventory()
    {
        //Arrange
        string name = "Bread";
        int quantity = 10;
        double price = 2.30;
        string expected = "Product Inventory:" + Environment.NewLine + "Bread - Price: $2.30 - Quantity: 10";

        //Act
        _inventory.AddProduct(name, price, quantity);

        //Assert
        Assert.That(_inventory.DisplayInventory(), Does.Contain("Bread - Price: $2.30 - Quantity: 10"));
        Assert.That(_inventory.DisplayInventory(), Is.EqualTo(expected));
    }

    [Test]
    public void Test_DisplayInventory_NoProducts_ReturnsEmptyString()
    {
        //Arange
        string expected = "Product Inventory:";

        //Act
        string result = _inventory.DisplayInventory();

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_DisplayInventory_WithProducts_ReturnsFormattedInventory()
    {
        //Arange
        _inventory.AddProduct("Bread", 2.30, 10);
        _inventory.AddProduct("Water", 1.40, 20);


        //Act;
        string result = _inventory.DisplayInventory();

        //Assert
        Assert.That(result, Does.Contain("Bread - Price: $2.30 - Quantity: 10"));
        Assert.That(result, Does.Contain("Water - Price: $1.40 - Quantity: 20"));
    }

    [Test]
    public void Test_CalculateTotalValue_NoProducts_ReturnsZero()
    {
        //Arange
        double expected = 0;

        //Act
        double result = _inventory.CalculateTotalValue();

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_CalculateTotalValue_WithProducts_ReturnsTotalValue()
    {
        //Arange
        string productName = "water";
        double productPrice = 2.50;
        int quantity = 2;

        double expected = 5.00;

        //Act
        _inventory.AddProduct(productName, productPrice, quantity);
        double result = _inventory.CalculateTotalValue();

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
