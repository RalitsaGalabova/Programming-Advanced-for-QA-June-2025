using System;
using System.Text;
using System.Linq;
using System.Collections.Generic;

using NUnit.Framework;

namespace TestApp.Tests;

[TestFixture]
public class FruitsTests
{
    [Test]
    public void Test_GetFruitQuantity_FruitExists_ReturnsQuantity()
    {
        //Arange
        Dictionary<string, int> fruits = new Dictionary<string, int> {
            { "banana", 2},
            { "apple", 3}
        };
        string fruitName = "banana";
        int expected = 2;

        //Act
        int result = Fruits.GetFruitQuantity(fruits, fruitName);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GetFruitQuantity_FruitDoesNotExist_ReturnsZero()
    {
        //Arange
        Dictionary<string, int> fruits = new()
        {
            { "banana", 2},
            { "apple", 3}
        };
        string fruitName = "melon";
        int expected = 0;

        //Act
        int result = Fruits.GetFruitQuantity(fruits, fruitName);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GetFruitQuantity_EmptyDictionary_ReturnsZero()
    {
        //Arange
        Dictionary<string, int> fruits = new Dictionary<string, int>();
        string fruitName = "melon";
        int expected = 0;

        //Act
        int result = Fruits.GetFruitQuantity(fruits, fruitName);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GetFruitQuantity_NullDictionary_ReturnsZero()
    {
        //Arange
        Dictionary<string, int>? fruits = null;
        string fruitName = "melon";
        int expected = 0;

        //Act
        int result = Fruits.GetFruitQuantity(fruits, fruitName);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GetFruitQuantity_NullFruitName_ReturnsZero()
    {
        //Arange
        Dictionary<string, int> fruits = new Dictionary<string, int> {
            { "banana", 2},
            { "apple", 3}
        };
        string? fruitName = null;
        int expected = 0;

        //Act
        int result = Fruits.GetFruitQuantity(fruits, fruitName);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
