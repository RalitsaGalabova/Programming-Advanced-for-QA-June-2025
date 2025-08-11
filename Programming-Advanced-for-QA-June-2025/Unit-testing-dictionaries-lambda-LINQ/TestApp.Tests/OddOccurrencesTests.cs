using NUnit.Framework;

using System;

namespace TestApp.Tests;

public class OddOccurrencesTests
{
    [Test]
    public void Test_FindOdd_WithEmptyArray_ShouldReturnEmptyString()
    {
        //Arrange
        string[] input = Array.Empty<string>();

        //Act
        string result = OddOccurrences.FindOdd(input);

        //Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_FindOdd_WithNoOddOccurrences_ShouldReturnEmptyString()
    {
        //Arrange
        string[] input = new string[] { "hello", "hello", "softuni", "softuni" };

        //Act
        string result = OddOccurrences.FindOdd(input);

        //Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_FindOdd_WithSingleOddOccurrence_ShouldReturnTheOddWord()
    {
        //Arrange
        string[] input = new string[] { "Hello", "Hello", "Hello" };
        string expected = "hello";

        //Act
        string result = OddOccurrences.FindOdd(input);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindOdd_WithMultipleOddOccurrences_ShouldReturnAllOddWords()
    {
        //Arrange
        string[] input = new string[] { "Hello", "Hello", "Hello", "Rally", "rally", "Ivan" };
        string expected = "hello ivan";

        //Act
        string result = OddOccurrences.FindOdd(input);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_FindOdd_WithMixedCaseWords_ShouldBeCaseInsensitive()
    {
        //Arrange
        string[] input = new string[] { "HeLLo", "HELLO", "hello", "Petar", "petar", "IVAN" };
        string expected = "hello ivan";

        //Act
        string result = OddOccurrences.FindOdd(input);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
