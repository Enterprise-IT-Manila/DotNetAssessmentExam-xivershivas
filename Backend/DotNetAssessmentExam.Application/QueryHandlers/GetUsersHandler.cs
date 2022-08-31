using DotNetAssessmentExam.Core.Models;
using DotNetAssessmentExam.Core.Queries;
using DotNetAssessmentExam.Core.QueryResults;
using DotNetAssessmentExam.Infrastructure.Database;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace DotNetAssessmentExam.Application.QueryHandlers
{
    public class GetUsersHandler : QueryHandlerBase, IRequestHandler<GetUsersQuery, GetUsersResult>
    {
        public GetUsersHandler(AppSlaveDbContext dbContext) : base(dbContext) { }

        public async Task<GetUsersResult> Handle(GetUsersQuery request, CancellationToken cancellationToken)
        {
            var result = new GetUsersResult
            {
                Users = await _dbContext.Users
                    .Include(u => u.Credential)
                    .OrderByDescending(u => u.CreatedOnUtc)
                    .Select(u => new UserModel
                    {
                        Id = u.Id,
                        GivenName = u.GivenName,
                        MiddleName = u.MiddleName,
                        Surname = u.Surname,
                        Email = u.Email,
                        Username = u.Credential != null ? u.Credential.Username : default
                    })
                    .ToListAsync(cancellationToken)
            };

            return result;
        }
    }
}
