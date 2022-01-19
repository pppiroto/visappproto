using System.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using visappproto.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// ADD From 設定をロードし、DIコンテナに格納
builder.Services.Configure<VisAppProtSettings>(
    builder.Configuration.GetSection(nameof(VisAppProtSettings)));
builder.Services.AddSingleton<IVisAppProtSettings>(sp 
    => sp.GetRequiredService<IOptions<VisAppProtSettings>>().Value);
// ADD To

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");;

app.Run();
