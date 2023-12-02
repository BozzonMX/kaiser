using Microsoft.AspNetCore.HttpOverrides;
using Kaiser.Middleware;

// BUILDER
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();

// APP
var app = builder.Build();
app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});
app.UseMiddleware<ExceptionMiddleware>();
app.UseRouting();
app.UseStaticFiles();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}"
);
app.MapFallbackToFile("index.html"); ;
app.Run();
