using System;
using System.Linq;
using System.Text;
using NUnit.Framework;
using System.Threading.Tasks;
using System.Collections.Generic;

using NUnit.Framework;

using TestApp.Chat;
using System.Collections.Specialized;

namespace TestApp.Tests;

[TestFixture]
public class ChatRoomTests
{
    private ChatRoom _chatRoom = null!;
    
    [SetUp]
    public void Setup()
    {
        this._chatRoom = new();
    }
    
    [Test]
    public void Test_SendMessage_MessageSentToChatRoom()
    {
        //Arrange
        string sender = "Rally";
        string message = "Hello!";
        string expected = "Chat Room Messages:"
            + Environment.NewLine
            + $"Rally: Hello!";

        //Act
        _chatRoom.SendMessage(sender, message);
        string result = _chatRoom.DisplayChat();

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_DisplayChat_NoMessages_ReturnsEmptyString()
    {
        //Arrange
        string expected = "";

        //Act
        string result = _chatRoom.DisplayChat();

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_DisplayChat_WithMessages_ReturnsFormattedChat()
    {
        //Arrange
        string sender = "Rally";
        string message = "Hello!";
        string sender2 = "Nelly";
        string message2 = "Hi, how are you?";
        string expected = "Chat Room Messages:"
            + Environment.NewLine
            + $"Rally: Hello!"
            +Environment.NewLine
            + $"Nelly: Hi, how are you?";

        //Act
        _chatRoom.SendMessage(sender, message);
        _chatRoom.SendMessage(sender2, message2);
        string result = _chatRoom.DisplayChat();

        //Assert
        Assert.That(result, Is.EqualTo(expected));
    }
}
