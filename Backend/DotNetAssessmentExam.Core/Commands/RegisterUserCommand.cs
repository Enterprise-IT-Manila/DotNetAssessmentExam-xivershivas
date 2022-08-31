using DotNetAssessmentExam.Core.Models;
using MediatR;

namespace DotNetAssessmentExam.Core.Commands
{
    public class RegisterUserCommand : IRequest<ResponseModel<int>>
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string GivenName { get; set; }
        public string? MiddleName { get; set; }
        public string Surname { get; set; }
        public string? Email { get; set; }
    }
}
