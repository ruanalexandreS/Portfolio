using Microsoft.EntityFrameworkCore;
using Portfolio.API.Data;
using Portfolio.API.Models;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAngular");


// Teste: Pegar projetos
app.MapGet("/projetos", async (AppDbContext db) =>
{
    return await db.Projetos.ToListAsync();
})
.WithName("GetProjetos");

// Teste: Criar projeto
app.MapPost("/projetos", async (Projeto projeto, AppDbContext db) =>
{
    db.Projetos.Add(projeto);
    await db.SaveChangesAsync();
    return Results.Created($"/projetos/{projeto.Id}", projeto);
})
.WithName("CriarProjeto");

app.Run();