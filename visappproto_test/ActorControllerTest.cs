using Xunit;
using Moq;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Text.Json.Serialization;
using visappproto.Controllers;
using visappproto.Models;

namespace visappproto_test;

public class ActorControllerTest
{

    [Fact]
    public void Get_Test()
    {
        // Mock オブジェクト
        var loggerMoc = new Mock<ILogger<ActorController>>().Object;

        var settings = new VisAppProtSettings();
        settings.MySQLConnectionString = "Database=sakila; Data Source=bombay.local;User Id=test;Password=pass; pooling = false; convert zero datetime=True";
        
        var controller = new ActorController(loggerMoc, settings);
        foreach(var item in controller.Get())
        {
            System.Console.WriteLine(JsonSerializer.Serialize(item));
        }
    }
}