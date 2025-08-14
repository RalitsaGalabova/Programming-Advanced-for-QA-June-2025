using System;
using System.Text;
using System.Linq;
using System.Collections.Generic;

using NUnit.Framework;

namespace TestApp.Tests;

[TestFixture]
public class DictionaryIntersectionTests
{
    [Test]
    public void Test_Intersect_TwoEmptyDictionaries_ReturnsEmptyDictionary()
    {
        //Arange
        Dictionary<string, int> firstList = new Dictionary<string, int>();
        Dictionary<string, int> secondList = new Dictionary<string, int>();

        //Act
        Dictionary<string, int> result = DictionaryIntersection.Intersect(firstList, secondList);

        //Assert
        Assert.IsEmpty(result);
    }

    [Test]
    public void Test_Intersect_OneEmptyDictionaryAndOneNonEmptyDictionary_ReturnsEmptyDictionary()
    {
        //Arange
        Dictionary<string, int> firstList = new Dictionary<string, int>();
        Dictionary<string, int> secondList = new() {
            { "Banana", 2},
            { "Apple", 5}

        };
        //Act
        Dictionary<string, int> result = DictionaryIntersection.Intersect(firstList, secondList);

        //Assert
        Assert.IsEmpty(result);
    }

    [Test]
    public void Test_Intersect_TwoNonEmptyDictionariesWithNoCommonKeys_ReturnsEmptyDictionary()
    {
        //Arange
        Dictionary<string, int> firstList = new() {
            { "Melon", 2},
            { "Lemon", 5}

        };
        Dictionary<string, int> secondList = new() {
            { "Banana", 2},
            { "Apple", 5}

        };
        //Act
        Dictionary<string, int> result = DictionaryIntersection.Intersect(firstList, secondList);

        //Assert
        Assert.IsEmpty(result);
    }

    [Test]
    public void Test_Intersect_TwoNonEmptyDictionariesWithCommonKeysAndValues_ReturnsIntersectionDictionary()
    {
        //Arange
        Dictionary<string, int> firstList = new() {
            { "Melon", 2},
            { "Lemon", 5}

        };
        Dictionary<string, int> secondList = new() {
            { "Melon", 2},
            { "Lemon", 5}

        };
        Dictionary<string, int> expected = new() {
            { "Melon", 2},
            { "Lemon", 5}

        };

        //Act
        Dictionary<string, int> result = DictionaryIntersection.Intersect(firstList, secondList);

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_Intersect_TwoNonEmptyDictionariesWithCommonKeysAndDifferentValues_ReturnsEmptyDictionary()
    {
        //Arange
        Dictionary<string, int> firstList = new() {
            { "Melon", 2},
            { "Lemon", 5}

        };
        Dictionary<string, int> secondList = new() {
            { "Melon", 1},
            { "Lemon", 3}

        };

        //Act
        Dictionary<string, int> result = DictionaryIntersection.Intersect(firstList, secondList);

        //Assert
        Assert.IsEmpty(result);
    }
}
