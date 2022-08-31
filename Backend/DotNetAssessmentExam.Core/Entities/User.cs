namespace DotNetAssessmentExam.Core.Entities
{
    public class User : EntityBase
    {
        public int Id { get; set; }
        public string GivenName { get; set; } = string.Empty;
        public string? MiddleName { get; set; }
        public string Surname { get; set; } = string.Empty;
        public string? Email { get; set; }
        public virtual UserCredential? Credential { get; set; }
    }
}
