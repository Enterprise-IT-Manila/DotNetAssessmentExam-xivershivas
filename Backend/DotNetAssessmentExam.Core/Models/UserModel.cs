namespace DotNetAssessmentExam.Core.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string GivenName { get; set; }
        public string? MiddleName { get; set; }
        public string Surname { get; set; }
        public string? Email { get; set; }
        public string? Username { get; set; }
    }
}
