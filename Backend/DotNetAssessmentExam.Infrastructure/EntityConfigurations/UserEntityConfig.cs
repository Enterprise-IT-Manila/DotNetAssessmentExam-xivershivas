using DotNetAssessmentExam.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DotNetAssessmentExam.Infrastructure.EntityConfigurations
{
    public class UserEntityConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).ValueGeneratedOnAdd();
            builder.Property(r => r.GivenName).IsRequired().HasMaxLength(250);
            builder.Property(r => r.MiddleName).HasMaxLength(250);
            builder.Property(r => r.Surname).IsRequired().HasMaxLength(250);
            builder.Property(r => r.Email).HasMaxLength(250);
            builder.Property(u => u.CreatedOnUtc).IsRequired();

            builder.HasOne(u => u.Credential);
        }
    }
}
