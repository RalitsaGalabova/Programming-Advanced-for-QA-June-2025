using System;
using System.Linq;
using System.Text;
using NUnit.Framework;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace TestApp.Tests;

public class DigitAndSymbolCounterTests
{

    [Test]
    public void Test_EmptyStringInput_ReturnsEmptyDictionary()
    {
        //Arrange
        string input = "";

        //Act
        Dictionary<string, int> result = DigitAndSymbolCounter.CountDigitsAndSymbols(input);

        //Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_NoDigitsStringInput_ReturnsOnlyNonDigitsCount()
    {
        //Arrange
        string input = "Hello World";
        Dictionary<string, int> expected = new Dictionary<string, int>
        {
            { "non-digit symbol", 11 },
        };

        //Act
        Dictionary<string, int> result = DigitAndSymbolCounter.CountDigitsAndSymbols(input);

        //Assert
        CollectionAssert.AreEqual(expected, result);

    }

    [Test]
    public void Test_NoOddDigitsStringInput_ReturnsOnlyEvenDigitsAndNonDigitsCount()
    {
        //Arrange
        string input = "2468XYZ";
        Dictionary<string, int> expected = new Dictionary<string, int>
        {
            { "even digit", 4 },
            { "non-digit symbol", 3 }
        };

        //Act
        Dictionary<string, int> result = DigitAndSymbolCounter.CountDigitsAndSymbols(input);

        //Assert
        CollectionAssert.AreEqual(expected, result);
    }

    [Test]
    public void Test_NoEvenDigitsStringInput_ReturnsOnlyOddDigitsAndNonDigitsCount()
    {
        //Arrange
        string input = "QA is cool 579?";
        Dictionary<string, int> expected = new Dictionary<string, int>
        {
            { "odd digit", 3 },
            { "non-digit symbol", 12 }
        };

        //Act
        Dictionary<string, int> result = DigitAndSymbolCounter.CountDigitsAndSymbols(input);

        //Assert
        CollectionAssert.AreEqual(expected, result);
    }

    [Test]
    public void Test_SymbolsEvenAndOddDigitsStringInput_ReturnsAllTypeOfCounts()
    {
        //Arrange
        string input = "123abc!";
        Dictionary<string, int> expected = new Dictionary<string, int>
        {
            { "even digit", 1 },
            { "odd digit", 2 },
            { "non-digit symbol", 4 }
        };

        //Act
        Dictionary<string, int> result = DigitAndSymbolCounter.CountDigitsAndSymbols(input);

        //Assert
        CollectionAssert.AreEqual(expected, result);
    }
}