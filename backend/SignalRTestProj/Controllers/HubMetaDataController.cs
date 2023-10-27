using Microsoft.AspNetCore.Mvc;
using SignalRTestProj.Domain.Dtos;

namespace SignalRTestProj.Controllers;

[Route("[controller]")]
[ApiController]
public class HubMetaDataController : ControllerBase
{
    [HttpGet]
    [Route("ChatHub")]
    public ActionResult<ChatHubTypesDto> GetChatHubTypes()
    {
        return new ChatHubTypesDto();
    }
}