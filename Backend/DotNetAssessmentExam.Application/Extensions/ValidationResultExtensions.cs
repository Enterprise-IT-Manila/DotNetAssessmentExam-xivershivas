using FluentValidation.Results;
using System.Text;

namespace DotNetAssessmentExam.Application.Extensions
{
    public static class ValidationResultExtensions
    {
        public static string GetErrorMessages(this ValidationResult validationResult)
        {
            var builder = new StringBuilder();
            validationResult.Errors.ForEach(e => builder.AppendLine($"{e.ErrorMessage}"));
            return builder.ToString();
        }
    }
}
