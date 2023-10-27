using System.ComponentModel.DataAnnotations;

namespace SignalRTestProj.Domain.Dtos;

public class MessageDto
{
    [Required]
    public string User { get; set; }
    [Required]
    public string Message { get; set; }
}