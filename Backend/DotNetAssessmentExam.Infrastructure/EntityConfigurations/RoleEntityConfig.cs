using DotNetAssessmentExam.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DotNetAssessmentExam.Infrastructure.EntityConfigurations
{
    public class RoleEntityConfig : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).ValueGeneratedNever();
            builder.Property(r => r.Title).IsRequired().HasMaxLength(250);
            builder.Property(r => r.Description).HasMaxLength(1000);
            builder.Property(r => r.CreatedOnUtc).IsRequired();

            builder.HasData(
                new Role
                {
                    Id = Core.Enum.Role.Admin,
                    Title = "Admin",
                    Description = "Administrator role",
                    CreatedOnUtc = DateTime.UtcNow
                },
                new Role
                {
                    Id = Core.Enum.Role.Manager,
                    Title = "Manager",
                    Description = "Manager role",
                    CreatedOnUtc = DateTime.UtcNow
                },
                new Role
                {
                    Id = Core.Enum.Role.SeniorStaff,
                    Title = "Senior Staff",
                    Description = "Senior Staff role",
                    CreatedOnUtc = DateTime.UtcNow
                },
                new Role
                {
                    Id = Core.Enum.Role.JuniorStaff,
                    Title = "Junior Staff",
                    Description = "Junior Staff role",
                    CreatedOnUtc = DateTime.UtcNow
                });
        }
    }
}
