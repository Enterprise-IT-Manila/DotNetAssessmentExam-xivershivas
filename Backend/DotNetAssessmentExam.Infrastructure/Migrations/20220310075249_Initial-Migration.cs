using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DotNetAssessmentExam.Infrastructure.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false),
                    Title = table.Column<string>(type: "TEXT", maxLength: 250, nullable: false),
                    Description = table.Column<string>(type: "TEXT", maxLength: 1000, nullable: false),
                    CreatedOnUtc = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    GivenName = table.Column<string>(type: "TEXT", maxLength: 250, nullable: false),
                    MiddleName = table.Column<string>(type: "TEXT", maxLength: 250, nullable: true),
                    Surname = table.Column<string>(type: "TEXT", maxLength: 250, nullable: false),
                    Email = table.Column<string>(type: "TEXT", maxLength: 250, nullable: true),
                    CreatedOnUtc = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserCredentials",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    Username = table.Column<string>(type: "TEXT", maxLength: 250, nullable: false),
                    Password = table.Column<string>(type: "TEXT", maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserCredentials", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_UserCredentials_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "CreatedOnUtc", "Description", "Title" },
                values: new object[] { 1, new DateTime(2022, 3, 10, 7, 52, 49, 76, DateTimeKind.Utc).AddTicks(5434), "Administrator role", "Admin" });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "CreatedOnUtc", "Description", "Title" },
                values: new object[] { 2, new DateTime(2022, 3, 10, 7, 52, 49, 76, DateTimeKind.Utc).AddTicks(5440), "Manager role", "Manager" });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "CreatedOnUtc", "Description", "Title" },
                values: new object[] { 3, new DateTime(2022, 3, 10, 7, 52, 49, 76, DateTimeKind.Utc).AddTicks(5442), "Senior Staff role", "Senior Staff" });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "CreatedOnUtc", "Description", "Title" },
                values: new object[] { 4, new DateTime(2022, 3, 10, 7, 52, 49, 76, DateTimeKind.Utc).AddTicks(5444), "Junior Staff role", "Junior Staff" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "UserCredentials");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
