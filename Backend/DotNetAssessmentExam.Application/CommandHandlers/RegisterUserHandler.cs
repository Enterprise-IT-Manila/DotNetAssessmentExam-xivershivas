using DotNetAssessmentExam.Application.Extensions;
using DotNetAssessmentExam.Core.Commands;
using DotNetAssessmentExam.Core.Entities;
using DotNetAssessmentExam.Core.Models;
using DotNetAssessmentExam.Infrastructure.Database;
using FluentValidation;
using MediatR;

namespace DotNetAssessmentExam.Application.CommandHandlers
{
    public class RegisterUserHandler : IRequestHandler<RegisterUserCommand, ResponseModel<int>>
    {
        private readonly AppMasterDbContext _dbContext;
        private readonly IValidator<RegisterUserCommand> _validator;

        public RegisterUserHandler(AppMasterDbContext dbContext,
            IValidator<RegisterUserCommand> validator)
        {
            _dbContext = dbContext;
            _validator = validator;
        }

        public async Task<ResponseModel<int>> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
        {
            var response = new ResponseModel<int>();
            try
            {
                var validationResult = await _validator.ValidateAsync(request, cancellationToken);
                if (!validationResult.IsValid)
                {
                    response.Message = validationResult.GetErrorMessages();
                    return response;
                }

                var user = new User
                {
                    GivenName = request.GivenName,
                    MiddleName = request.MiddleName,
                    Surname = request.Surname,
                    Email = request.Email,
                    Credential = new UserCredential
                    {
                        Username = request.Username,
                        Password = request.Password
                    },
                    CreatedOnUtc = DateTime.UtcNow
                };

                _dbContext.Users.Add(user);
                await _dbContext.SaveChangesAsync(cancellationToken);

                response.Success = true;
                response.Data = user.Id;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.SetException(ex);
            }

            return response;
        }
    }
}
