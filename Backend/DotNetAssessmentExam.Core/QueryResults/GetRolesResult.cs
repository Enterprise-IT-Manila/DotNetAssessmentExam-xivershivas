using DotNetAssessmentExam.Core.Models;

namespace DotNetAssessmentExam.Core.QueryResults
{
    public class GetRolesResult 
    {
        public IReadOnlyCollection<RoleModel>? Roles { get; set; }
    }
}
