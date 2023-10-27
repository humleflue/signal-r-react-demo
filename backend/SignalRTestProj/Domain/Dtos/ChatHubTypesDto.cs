using System.ComponentModel.DataAnnotations;
using SignalRTestProj.Domain.Interfaces;
using SignalRTestProj.Hubs;

namespace SignalRTestProj.Domain.Dtos;

public class ChatHubTypesDto : IHubTypes
{
    [Required]
    public string HubName { get; } = "chatHub";
    
    [Required]
    public string SendMessage { get; } = nameof(ChatHub.SendMessage);
    
    [Required]
    public string ReceiveMessage  { get; } = "ReceiveMessage";
}