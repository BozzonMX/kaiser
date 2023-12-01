using Newtonsoft.Json;

namespace Kaiser.Middlewares
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _Next;

        public ExceptionMiddleware(RequestDelegate Next)
        {
            _Next = Next;
        }
        public async Task Invoke(HttpContext Context)
        {
            try
            {
                await _Next(Context);
            }
            catch (APIException ex)
            {
                Context.Response.ContentType = "application/json";
                Context.Response.StatusCode = 500;
                await Context.Response.WriteAsync(JsonConvert.SerializeObject(new { ex.Message }));
            }
            catch (Exception ex)
            {
                Context.Response.ContentType = "application/json";
                Context.Response.StatusCode = 500;
                await Context.Response.WriteAsync(JsonConvert.SerializeObject(new { Message = $"Error inesperado en el sistema. ${ex}" }));
            }
        }
    }
}
