﻿// <auto-generated />
using System;
using DotNetAssessmentExam.Infrastructure.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DotNetAssessmentExam.Infrastructure.Migrations
{
    [DbContext(typeof(AppMasterDbContext))]
    partial class AppMasterDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.3");

            modelBuilder.Entity("DotNetAssessmentExam.Core.Entities.Role", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CreatedOnUtc")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(1000)
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Roles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreatedOnUtc = new DateTime(2022, 3, 10, 7, 52, 49, 76, DateTimeKind.Utc).AddTicks(5434),
                            Description = "Administrator role",
                            Title = "Admin"
                        },
                        new
                        {
                            Id = 2,
                            CreatedOnUtc = new DateTime(2022, 3, 10, 7, 52, 49, 76, DateTimeKind.Utc).AddTicks(5440),
                            Description = "Manager role",
                            Title = "Manager"
                        },
                        new
                        {
                            Id = 3,
                            CreatedOnUtc = new DateTime(2022, 3, 10, 7, 52, 49, 76, DateTimeKind.Utc).AddTicks(5442),
                            Description = "Senior Staff role",
                            Title = "Senior Staff"
                        },
                        new
                        {
                            Id = 4,
                            CreatedOnUtc = new DateTime(2022, 3, 10, 7, 52, 49, 76, DateTimeKind.Utc).AddTicks(5444),
                            Description = "Junior Staff role",
                            Title = "Junior Staff"
                        });
                });

            modelBuilder.Entity("DotNetAssessmentExam.Core.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CreatedOnUtc")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasMaxLength(250)
                        .HasColumnType("TEXT");

                    b.Property<string>("GivenName")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("TEXT");

                    b.Property<string>("MiddleName")
                        .HasMaxLength(250)
                        .HasColumnType("TEXT");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DotNetAssessmentExam.Core.Entities.UserCredential", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("TEXT");

                    b.HasKey("UserId");

                    b.ToTable("UserCredentials");
                });

            modelBuilder.Entity("DotNetAssessmentExam.Core.Entities.UserCredential", b =>
                {
                    b.HasOne("DotNetAssessmentExam.Core.Entities.User", "User")
                        .WithOne("Credential")
                        .HasForeignKey("DotNetAssessmentExam.Core.Entities.UserCredential", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("DotNetAssessmentExam.Core.Entities.User", b =>
                {
                    b.Navigation("Credential");
                });
#pragma warning restore 612, 618
        }
    }
}
