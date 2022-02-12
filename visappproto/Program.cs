using System.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Serilog;
using visappproto.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

#region TODO DIコンテナに格納 
// 設定のロードとDI格納
builder.Services.Configure<VisAppProtSettings>(
    builder.Configuration.GetSection(nameof(VisAppProtSettings)));
builder.Services.AddSingleton<IVisAppProtSettings>(sp 
    => sp.GetRequiredService<IOptions<VisAppProtSettings>>().Value);
#endregion

#region TODO Logger
var logger = new LoggerConfiguration()
  .ReadFrom.Configuration(builder.Configuration)
  .Enrich.FromLogContext()
  .CreateLogger();
// builder.Logging.ClearProviders();
builder.Logging.AddSerilog(logger);
#endregion

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
