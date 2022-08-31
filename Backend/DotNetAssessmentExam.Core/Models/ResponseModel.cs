namespace DotNetAssessmentExam.Core.Models
{
    public class ResponseModel
    {
        private Exception _exception;

        public string? Message { get; set; }
        public bool Success { get; set; }

        public Exception GetException() => _exception;

        public void SetException(Exception exception)
        {
            _exception = exception;
        }
    }

    public class ResponseModel<T> : ResponseModel
    {
        public T? Data { get; set; }
    }
}
