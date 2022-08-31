using DotNetAssessmentExam.Core.Commands;
using DotNetAssessmentExam.Core.Queries;
using DotNetAssessmentExam.Core.QueryResults;
using DotNetAssessmentExam.Infrastructure.Services;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace DotNetAssessmentExam.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public IMediator _mediator;

        public UsersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("SeedRandomUsers")]
        public async Task<IActionResult> GenerateRandomNames([FromQuery]int count)
        {
            var result = await RandomUserGeneratorService.GenerateRandomUsers(count);
            foreach (var item in result)
            {
                if (item.Credential == null)
                    continue;

                await RegisterUser(new RegisterUserCommand
                {
                    Username = item.Credential.Username,
                    Password = item.Credential.Password,
                    GivenName = item.GivenName,
                    MiddleName = item.MiddleName,
                    Surname = item.Surname,
                    Email = item.Email
                });
            }

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody]RegisterUserCommand request)
        {
            var result = await _mediator.Send(request);
            if (!result.Success)
                return BadRequest(result);

            return Ok(result);
        }

        [HttpGet]
        [Produces(typeof(GetUsersResult))]
        public async Task<IActionResult> GetUsers()
        {
            return Ok(await _mediator.Send(new GetUsersQuery()));
        }
    }
}
