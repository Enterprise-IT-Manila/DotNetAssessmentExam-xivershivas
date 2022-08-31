using DotNetAssessmentExam.Application.Configurations;
using DotNetAssessmentExam.Infrastructure.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace DotNetAssessmentExam.Api.Factories
{
    public class AppMasterDbContextFactory : IDesignTimeDbContextFactory<AppMasterDbContext>
    {
        public AppMasterDbContext CreateDbContext(string[] args)
        {
            var configurationBuilder = new ConfigurationBuilder();
            var configuration = configurationBuilder
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: false)
                .AddEnvironmentVariables()
                .Build();

            var connectionString = configuration.GetValue<string>($"{nameof(ConnectionsConfig)}:{nameof(ConnectionsConfig.MasterDbConnection)}");
            var optionsBuilder = new DbContextOptionsBuilder<AppMasterDbContext>();
            optionsBuilder.UseSqlite(connectionString, sqlliteOptions =>
            {
                sqlliteOptions.MigrationsAssembly(typeof(AppMasterDbContext).Assembly.FullName);
            });

            return new AppMasterDbContext(optionsBuilder.Options);
        }
    }
}
