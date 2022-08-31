using DotNetAssessmentExam.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DotNetAssessmentExam.Infrastructure.EntityConfigurations
{
    public class UserCredentialConfig : IEntityTypeConfiguration<UserCredential>
    {
        public void Configure(EntityTypeBuilder<UserCredential> builder)
        {
            builder.HasKey(uc => uc.UserId);
            builder.Property(uc => uc.UserId).IsRequired();
            builder.Property(uc => uc.Username).IsRequired().HasMaxLength(250);
            builder.Property(uc => uc.Password).IsRequired().HasMaxLength(250);
            
            builder.HasOne(uc => uc.User);
        }
    }
}
