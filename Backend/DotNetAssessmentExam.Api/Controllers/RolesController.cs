using DotNetAssessmentExam.Core.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace DotNetAssessmentExam.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public RolesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetRoles()
        {
            return Ok(await _mediator.Send(new GetRolesQuery()));
        }
    }
}
