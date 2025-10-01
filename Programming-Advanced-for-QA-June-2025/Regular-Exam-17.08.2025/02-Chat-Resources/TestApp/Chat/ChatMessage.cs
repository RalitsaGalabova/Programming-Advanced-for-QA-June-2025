using System;

namespace TestApp.Chat;

public class ChatMessage
{
    public ChatMessage(string sender, string message)
    {
        this.Sender = sender;
        this.Message = message;
    }


    public string Message { get; set; }

    public string Sender { get; set; }
}
