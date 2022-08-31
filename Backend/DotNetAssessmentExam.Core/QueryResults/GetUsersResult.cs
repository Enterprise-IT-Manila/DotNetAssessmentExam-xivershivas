using DotNetAssessmentExam.Core.Models;

namespace DotNetAssessmentExam.Core.QueryResults
{
    public class GetUsersResult
    {
        public IReadOnlyCollection<UserModel> Users { get; set; }
    }
}
