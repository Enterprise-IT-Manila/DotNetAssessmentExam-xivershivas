namespace DotNetAssessmentExam.Core.Entities
{
    public abstract class EntityBase : IEntity
    {
        public DateTime CreatedOnUtc { get; set; } = DateTime.UtcNow;
    }
}
