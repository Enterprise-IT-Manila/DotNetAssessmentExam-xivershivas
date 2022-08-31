# DotNetAssessmentExam
**Background:**
We are building a user management module for administrators. This is expected to grow to millions.
For your assessment, we'd like you to work on the requirements below within the provided time.

**Pre-requisites:**
- IDE which supports .NET 6  (i.e., Visual Studio 2022 Community/Professional/Enterprise Edition)
- GitHub account
- NodeJS

**Functional Requirements:**
- Add the feature to include roles assigned to users in the user list (a user can have multiple roles assigned)
- Add the ability to update user
- Add delete user functionality (preferably soft delete)

**Non-functional requirements:**
- Strictly using the following technologies / patterns:
  - .NET 6
  - EntityFramework code-first
  - React (We believe that as long as you understand typescript and component based programming, you'll be able to understand the code)
  - openapi-generator-cli (for API calls)
  - CQRS pattern
- Prevent duplicate entries of user
- Secure the password stored on database side
- Feel free to add EF migrations but maintain the initial setup intact
		
**Nice to have:**
- Build server-side pagination functionality
- Implement login capability
- Addition of a secured page (only logged in users can access)

**Setup Instructions:**
- Since you are seeing this, the assumption is you've managed to access the repository
- Create a "development" branch and start working from there
- You may use any sqllite viewer to access the database if you have the need to see the schema / data
- You may use any editor for the frontend. You can even rewrite the frontend using different component-based framework / library such as Angular, VueJS, Svelte, etc.
- The rest, we trust that you're familiar enough to figure out

**Backend Instructions:**
- Solution is working as you download it
- For adding migration:
  - Choose the DotNetAssessmentExam.Infrastructure project
  - Run the command: Add-Migration {MigrationName} -Context AppMasterDbContext
- For updating the database:
  - Choose the DotNetAssessmentExam.Infrastructure project
  - Run the command: Update-Database -Context AppMasterDbContext

**Frontend Instructions**
- Run this command for updating the services (endpoint varies on your local setup of the backend): npx openapi-generator-cli generate -i http://localhost:5009/swagger/v1/swagger.json -g typescript-axios -o src/api

**PS:** _Our deadline varies depending on the project needs so please commit whatever you've done regardless if you've completed the requirements or not_
