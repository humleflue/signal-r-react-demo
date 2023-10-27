using System.Reflection;
using Microsoft.AspNetCore.SignalR;
using SignalRSwaggerGen.Attributes;
using SignalRTestProj.Domain.Dtos;

namespace SignalRTestProj.Hubs;

[SignalRHub]
public class ChatHub : Hub
{
    
    public async Task SendMessage(MessageDto message)
    {
        await Clients.All.SendAsync(new ChatHubTypesDto().ReceiveMessage, message);
    }
}