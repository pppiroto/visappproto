using Xunit;
using Moq;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Text.Json.Serialization;
using visappproto.Controllers;
using visappproto.Models;

namespace visappproto_test;

public class EmployeesControllerTest
{

    ///<summary>
    /// xUnitの動作確認及びMock使用(LoggerをMock化)の例
    /// 実行には、プロジェクトルートで、dotnet test を実行
    ///</summary>
    [Fact]
    public void Get_All_UnitTestSample()
    {
        // Mock オブジェクト
        var loggerMoc = new Mock<ILogger<EmployeesController>>().Object;

        var settings = new VisAppProtSettings();
        settings.ConnectionStrings = "user id=test;password=pass;data source=bombay.local:1521/orclpdb;pooling=true";
        
        var controller = new EmployeesController(loggerMoc, settings);
        foreach(var employee in controller.Get())
        {
            System.Console.WriteLine(JsonSerializer.Serialize(employee));
        }
    }
}