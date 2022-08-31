using DotNetAssessmentExam.Core.Models;
using DotNetAssessmentExam.Core.Queries;
using DotNetAssessmentExam.Core.QueryResults;
using DotNetAssessmentExam.Infrastructure.Database;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace DotNetAssessmentExam.Application.QueryHandlers
{
    public class GetRolesHandler : QueryHandlerBase, IRequestHandler<GetRolesQuery, GetRolesResult>
    {
        public GetRolesHandler(AppSlaveDbContext dbContext) : base(dbContext) { }

        public async Task<GetRolesResult> Handle(GetRolesQuery request, CancellationToken cancellationToken)
        {
            var result = new GetRolesResult
            {
                Roles = await _dbContext.Roles
                    .Select(r => new RoleModel
                    {
                        Id = r.Id,
                        Title = r.Title,
                        Description = r.Description
                    })
                    .ToListAsync()
            };

            return result;
        }
    }
}
