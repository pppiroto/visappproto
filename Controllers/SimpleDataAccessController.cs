using Microsoft.AspNetCore.Mvc;
using visappproto.Models;

namespace visappproto.Controllers;

[ApiController]
[Route("[controller]")]
public class SimpleDataAccessController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Scorching"
    };

    private readonly ILogger<SimpleDataAccessController> _logger;

    public SimpleDataAccessController(ILogger<SimpleDataAccessController> logger, IVisAppProtSettings settings)
    {
        _logger = logger;
        _logger.LogInformation($"DIによる設定取得確認:{settings.ConnectionStrings}");
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
