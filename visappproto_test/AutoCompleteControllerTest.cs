using Xunit;
using Moq;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Text.Json.Serialization;
using visappproto.Controllers;
using visappproto.Models;

namespace visappproto_test;

public class AutoCompleteControllerTest
{

    ///<summary>
    /// xUnitの動作確認及びMock使用(LoggerをMock化)の例
    /// 実行には、プロジェクトルートで、dotnet test を実行
    ///</summary>
    [Fact]
    public void EmployeeFirstname_Test()
    {
        // Mock オブジェクト
        var loggerMoc = new Mock<ILogger<AutoCompleteController>>().Object;

        var settings = new VisAppProtSettings();
        settings.ConnectionStrings = "user id=test;password=pass;data source=bombay.local:1521/orclpdb;pooling=true";
        
        var controller = new AutoCompleteController(loggerMoc, settings);
        foreach(var firsltNames in controller.EmployeeFirstname("a"))
        {
            System.Console.WriteLine(JsonSerializer.Serialize(firsltNames));
        }
    }

    [Fact]
    public void GetEmployeeJobIdList_Test()
    {
        // Mock オブジェクト
        var loggerMoc = new Mock<ILogger<AutoCompleteController>>().Object;

        var settings = new VisAppProtSettings();
        settings.ConnectionStrings = "user id=test;password=pass;data source=bombay.local:1521/orclpdb;pooling=true";
        
        var controller = new AutoCompleteController(loggerMoc, settings);
        foreach(var firsltNames in controller.EmployeeJobIdList())
        {
            System.Console.WriteLine(JsonSerializer.Serialize(firsltNames));
        }
    }
}