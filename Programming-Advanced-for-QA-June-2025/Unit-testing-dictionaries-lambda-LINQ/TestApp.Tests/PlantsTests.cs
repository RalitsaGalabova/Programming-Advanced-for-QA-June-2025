using NUnit.Framework;

using System;

namespace TestApp.Tests;

public class PlantsTests
{
    [Test]
    public void Test_GetFastestGrowing_WithEmptyArray_ShouldReturnEmptyString()
    {
        // Arrange
        string[] input = Array.Empty<string>();

        // Act
        string actual = Plants.GetFastestGrowing(input);

        // Assert
        Assert.That(actual, Is.Empty);
    }

    [Test]
    public void Test_GetFastestGrowing_WithSinglePlant_ShouldReturnPlant()
    {
        // Arrange
        string[] input = new string[]
        {
            "Rose"
        };
        string expected = "Plants with 4 letters:\r\nRose";

        // Act
        string actual = Plants.GetFastestGrowing(input);

        // Assert
        Assert.That(actual, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GetFastestGrowing_WithMultiplePlants_ShouldReturnGroupedPlants()
    {
        // Arrange
        string[] input = new string[]
        {
            "rose", "aloe", "pothos", "aloe vera", "lavender"
        };
        string expected = "Plants with 4 letters:\r\nrose\r\naloe\r\nPlants with 6 letters:" +
            "\r\npothos\r\nPlants with 8 letters:\r\nlavender\r\nPlants with 9 letters:\r\naloe vera";

        // Act
        string actual = Plants.GetFastestGrowing(input);

        // Assert
        Assert.That(actual, Is.EqualTo(expected));
    }

    [Test]
    public void Test_GetFastestGrowing_WithMixedCasePlants_ShouldBeCaseInsensitive()
    {
        // Arrange
        string[] input = new string[]
        {
            "Rose", "Aloe", "Pothos", "Aloe Vera", "Lavender"
        };
        string expected ="Plants with 4 letters:\r\nRose\r\nAloe\r\nPlants with 6 letters:\r\nPothos\r\n" +
            "Plants with 8 letters:\r\nLavender\r\nPlants with 9 letters:\r\nAloe Vera";

        // Act
        string actual = Plants.GetFastestGrowing(input);

        // Assert
        Assert.That(actual, Is.EqualTo(expected));
    }
}
