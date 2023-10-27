using Microsoft.OpenApi.Models;
using SignalRTestProj.Domain.Dtos;
using SignalRTestProj.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(b =>
    {
        b
            .WithOrigins("https://localhost:5173") // Add your frontend origin(s) here
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials(); // Allow credentials when needed
    });
});
builder.Services.AddControllers();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "My API", 
        Version = "v1"
    });
    c.AddSignalRSwaggerGen();
    c.AddServer(new OpenApiServer()
    {
        // TODO: Make this dynamic
        Url = "https://localhost:7264/"
    });
});


var app = builder.Build();

// Enable CORS for your hub
app.UseCors();

app.MapControllers();
app.MapGet("/", () => "Hello World!");
app.MapHub<ChatHub>("/" + new ChatHubTypesDto().HubName);

// Enable swagger
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("v1/swagger.json", "My API V1");
});

app.Run();