using NUnit.Framework;

using System;

namespace TestApp.Tests;

public class CountRealNumbersTests
{
    // TODO: finish test
    [Test]
    public void Test_Count_WithEmptyArray_ShouldReturnEmptyString()
    {
        //Arrange
        int[] numbers = Array.Empty<int>();

        //Act
        string result = CountRealNumbers.Count(numbers);

        //Assert
        Assert.That(result, Is.Empty);
    }

    [Test]
    public void Test_Count_WithSingleNumber_ShouldReturnCountString()
    {
        //Arrange
        int[] numbers = new int[] { 10 };
        string expected = "10 -> 1";

        //Act
        string result = CountRealNumbers.Count(numbers);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Count_WithMultipleNumbers_ShouldReturnCountString()
    {
        //Arrange
        int[] numbers = new int[] { 3, 2, 1, 1, 2, 3 };
        string expected = "1 -> 2\r\n2 -> 2\r\n3 -> 2";

        //Act
        string result = CountRealNumbers.Count(numbers);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Count_WithNegativeNumbers_ShouldReturnCountString()
    {
        //Arrange
        int[] numbers = new int[] { -3, -2, -1, -1, -2, -3 };
        string expected = "-3 -> 2\r\n-2 -> 2\r\n-1 -> 2";

        //Act
        string result = CountRealNumbers.Count(numbers);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Count_WithZero_ShouldReturnCountString()
    {
        //?rrange
        int[] numbers = new int[] { 0, 0, 0, 0 };
        string expected = "0 -> 4";

        //Act
        string result = CountRealNumbers.Count(numbers);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
