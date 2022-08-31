using DotNetAssessmentExam.Core.Commands;
using FluentValidation;

namespace DotNetAssessmentExam.Application.Validators
{
    public class RegisterUserValidator : AbstractValidator<RegisterUserCommand>
    {
        public RegisterUserValidator()
        {
            SetupRules();
        }

        private void SetupRules()
        {
            RuleFor(r => r.Username).NotEmpty().WithMessage("Username is required")
                .MaximumLength(250).WithMessage("Username can only have up to 250 characters")
                .MinimumLength(5).WithMessage("Username must be at least 5 characters");

            RuleFor(r => r.Password).NotEmpty().WithMessage("Password is required")
                .MaximumLength(250).WithMessage("Password can only have up to 250 characters");

            RuleFor(r => r.GivenName).NotEmpty().WithMessage("Given name is required")
                .MaximumLength(250).WithMessage("Given name can only have up to 250 characters")
                .MinimumLength(2).WithMessage("Given name must be at least 2 characters");

            RuleFor(r => r.Surname).NotEmpty().WithMessage("Surname is required")
                .MaximumLength(250).WithMessage("Surname can only have up to 250 characters")
                .MinimumLength(2).WithMessage("Surname must be at least 2 characters");

            RuleFor(r => r.MiddleName).MaximumLength(250).WithMessage("Middle name can only have up to 250 characters");
            RuleFor(r => r.Email).MaximumLength(250).WithMessage("Email can only have up to 250 characters");
        }
    }
}
