using Microsoft.EntityFrameworkCore;

namespace DotNetAssessmentExam.Infrastructure.Database
{
    public class AppSlaveDbContext : AppMasterDbContext
    {
        public AppSlaveDbContext(DbContextOptions<AppSlaveDbContext> options) : base(options)
        {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }
    }
}
