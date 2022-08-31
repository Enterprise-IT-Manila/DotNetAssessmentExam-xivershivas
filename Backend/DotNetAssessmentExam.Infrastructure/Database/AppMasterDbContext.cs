using DotNetAssessmentExam.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace DotNetAssessmentExam.Infrastructure.Database
{
    public class AppMasterDbContext : DbContext
    {
        public AppMasterDbContext(DbContextOptions<AppMasterDbContext> options) : base(options) { }
        protected AppMasterDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserCredential> UserCredentials { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(GetType().Assembly);
            base.OnModelCreating(modelBuilder);
        }
    }
}
