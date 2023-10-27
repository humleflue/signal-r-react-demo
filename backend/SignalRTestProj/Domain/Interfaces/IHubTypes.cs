namespace SignalRTestProj.Domain.Interfaces;

public interface IHubTypes
{
    string HubName { get; }
    string SendMessage { get; }
    string ReceiveMessage { get; }
}