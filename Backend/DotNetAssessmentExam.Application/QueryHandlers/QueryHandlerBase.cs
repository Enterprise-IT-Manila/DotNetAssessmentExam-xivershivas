using DotNetAssessmentExam.Infrastructure.Database;

namespace DotNetAssessmentExam.Application.QueryHandlers
{
    public abstract class QueryHandlerBase
    {
        protected readonly AppSlaveDbContext _dbContext;

        public QueryHandlerBase(AppSlaveDbContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
