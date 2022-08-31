using DotNetAssessmentExam.Application.Configurations;
using DotNetAssessmentExam.Application.QueryHandlers;
using DotNetAssessmentExam.Application.Validators;
using DotNetAssessmentExam.Core.Commands;
using DotNetAssessmentExam.Core.Queries;
using DotNetAssessmentExam.Infrastructure.Database;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace DotNetAssessmentExam.Application.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration)
        {
            var applicationsAssembly = typeof(GetRolesHandler).Assembly;
            var coreAssembly = typeof(GetRolesQuery).Assembly;
            var infrastructureAssembly = typeof(AppMasterDbContext).Assembly;

            services.Configure<ConnectionsConfig>(configuration.GetSection(nameof(ConnectionsConfig)));
            services.AddDbContext<AppMasterDbContext>((servicesProvider, options) =>
            {
                var connections = servicesProvider.GetRequiredService<IOptions<ConnectionsConfig>>();
                options.UseSqlite(connections?.Value?.MasterDbConnection ?? string.Empty, sqliteOptions=>
                {
                    sqliteOptions.MigrationsAssembly(infrastructureAssembly.FullName);
                });
            });

            services.AddDbContext<AppSlaveDbContext>((servicesProvider, options) =>
            {
                var connections = servicesProvider.GetRequiredService<IOptions<ConnectionsConfig>>();
                options.UseSqlite(connections?.Value?.SlaveDbConnection ?? string.Empty, sqliteOptions =>
                {
                    sqliteOptions.MigrationsAssembly(infrastructureAssembly.FullName);
                });
            });

            services.AddScoped<IValidator<RegisterUserCommand>, RegisterUserValidator>();
            services.AddMediatR(coreAssembly, applicationsAssembly);
            return services;
        }
    }
}
