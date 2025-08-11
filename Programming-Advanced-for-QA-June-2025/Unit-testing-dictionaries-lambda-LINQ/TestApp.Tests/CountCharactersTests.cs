using NUnit.Framework;

using System;
using System.Collections.Generic;

namespace TestApp.Tests;

public class CountCharactersTests
{
    [Test]
    public void Test_Count_WithEmptyList_ShouldReturnEmptyString()
    {
        // Arrange
        List<string> input = new();

        // Act
        string result = CountCharacters.Count(input);

        // Assert
        Assert.That(result, Is.Empty);
    }

    // TODO: finish test
    [Test]
    public void Test_Count_WithNoCharacters_ShouldReturnEmptyString()
    {
        //Arrange
        List<string> input = new List<string> { "", "", "" };

        //Act
        string result = CountCharacters.Count(input);

        //Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_Count_WithSingleCharacter_ShouldReturnCountString()
    {
        List<string> input = new List<string> { "a" };
        string expected = "a -> 1";

        //Act
        string result = CountCharacters.Count(input);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Count_WithMultipleCharacters_ShouldReturnCountString()
    {
        //Arrange
        List<string> input = new List<string> { "ab", "bc", "cd", "ad" };
        string expected = "a -> 2\r\nb -> 2\r\nc -> 2\r\nd -> 2";

        //Act
        string result = CountCharacters.Count(input);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Count_WithSpecialCharacters_ShouldReturnCountString()
    {
        //Arrange
        List<string> input = new List<string> { "@b", "bc", "c!", "@!" };
        string expected = "@ -> 2\r\nb -> 2\r\nc -> 2\r\n! -> 2";

        //Act
        string result = CountCharacters.Count(input);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
