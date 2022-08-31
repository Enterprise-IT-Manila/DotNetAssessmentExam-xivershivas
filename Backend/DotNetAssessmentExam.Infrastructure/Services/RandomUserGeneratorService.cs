using DotNetAssessmentExam.Core.Entities;
using Newtonsoft.Json;

namespace DotNetAssessmentExam.Infrastructure.Services
{
    public static class RandomUserGeneratorService
    {
        private const string RandomGeneratorEndpoint = "https://randomuser.me/api/?inc=name,login,email&results={0}";

        private static readonly HttpClient _httpClient = new();

        public static async Task<IReadOnlyCollection<User>> GenerateRandomUsers(int count = 10)
        {
            if (count > 1000)
                throw new InvalidOperationException("Please limit to 500 generations at a time");

            var users = new List<User>();
            var endpoint = string.Format(RandomGeneratorEndpoint, count);
            var result = await _httpClient.GetStringAsync(endpoint);

            if (string.IsNullOrWhiteSpace(result))
                return users;

            dynamic? randomUsers = JsonConvert.DeserializeObject(result);
            if (randomUsers == null)
                return users;
            
            foreach (var randomUser in randomUsers.results)
            {
                users.Add(new User
                {
                    GivenName = randomUser.name.first,
                    Surname = randomUser.name.last,
                    Email = randomUser.email,
                    Credential = randomUser.login != null ? new UserCredential
                    {
                        Username = randomUser.login.username,
                        Password = randomUser.login.password

                    } : default,
                });
            }

            return users;
        }
    }
}
