using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.VisualBasic;
using NUnit.Framework;
using TestApp.Todo;

namespace TestApp.Tests;

[TestFixture]
public class ToDoListTests
{
    private ToDoList _toDoList = null!;

    [SetUp]
    public void SetUp()
    {
        this._toDoList = new();
    }

    [Test]
    public void Test_AddTask_TaskAddedToToDoList()
    {
        //Arrange

        string title = "Task1";
        DateTime dateTime = new(1994, 08, 26);
        string expected = "To-Do List:"
            + Environment.NewLine
            + $"[ ] Task1 - Due: 08/26/1994";

        //Add
        _toDoList.AddTask(title, dateTime);
        string result = _toDoList.DisplayTasks();

        //Assert
        Assert.That(result, Is.EqualTo(expected));

    }

    [Test]
    public void Test_CompleteTask_TaskMarkedAsCompleted()
    {
        //Arrange

        string title = "Task2";
        DateTime dateTime = new(1994, 08, 26);
        string expected = "To-Do List:"
            + Environment.NewLine
            + $"[✓] Task2 - Due: 08/26/1994";

        //Add
        _toDoList.AddTask(title, dateTime);
        _toDoList.CompleteTask(title);
        string result = _toDoList.DisplayTasks();

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_CompleteTask_TaskNotFound_ThrowsArgumentException()
    {
        //Arrange

        string title = "New Task";

        //Act
        var ex = Assert.Throws<ArgumentException>(() =>
            _toDoList.CompleteTask(title));


        //Assert
        Assert.That(ex.Message, Is.EqualTo("Task with given title does not exist."));
        //Assert.That(() => _toDoList.CompleteTask("INVALID_TASK"), Throws.ArgumentException);

    }

    [Test]
    public void Test_DisplayTasks_NoTasks_ReturnsEmptyString()
    {
        //Arrange
        string expected = "To-Do List:";

        //Act
        string result = _toDoList.DisplayTasks();

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_DisplayTasks_WithTasks_ReturnsFormattedToDoList()
    {
        //Arrange
        _toDoList.AddTask("Task 1", new DateTime(1994, 08, 20));
        _toDoList.AddTask("Task 2", new DateTime(1994, 08, 26));
        string expected = "To-Do List:"
            + Environment.NewLine
            + $"[ ] Task 1 - Due: 08/20/1994"
            + Environment.NewLine
            + $"[ ] Task 2 - Due: 08/26/1994";

        //Act
        string result = _toDoList.DisplayTasks();

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
