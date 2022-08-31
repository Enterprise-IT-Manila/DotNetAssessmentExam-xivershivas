namespace DotNetAssessmentExam.Core.Entities
{
    public class UserCredential
    {
        public int UserId { get; set; }
        public virtual User? User { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
