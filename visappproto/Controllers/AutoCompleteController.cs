using System.Data;
using System.Runtime.Serialization;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using visappproto.Models;

namespace visappproto.Controllers;

[ApiController]
[Route("[controller]")]
public class AutoCompleteController : ControllerBase
{
    private readonly ILogger<AutoCompleteController> _logger;
    private readonly IVisAppProtSettings _settings;

    public AutoCompleteController(ILogger<AutoCompleteController> logger, IVisAppProtSettings settings)
    {
        _logger = logger;
        _settings = settings;
    }

    [HttpGet]
    // public IEnumerable<MasterKeyValue> EmployeeFirstName(string keyword)
    public IEnumerable<MasterKeyValue> Get()
    {
        string keyword = "A";
        Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;

        var employeeFirstNames = new List<MasterKeyValue>();
        System.Console.WriteLine(_settings.ConnectionStrings);
        using(var conn = new OracleConnection(_settings.ConnectionStrings)) 
        {
            conn.Open();

            var firstname = $"%{keyword.ToUpper()}%";

            var sql = 
            @$"select EMPLOYEE_ID as MASTER_KEY, FIRST_NAME as MASTER_VALUE from hr.employees 
                where upper(FIRST_NAME) like '{firstname}' order by FIRST_NAME";

            _logger.LogInformation(sql);

            employeeFirstNames.AddRange(
                conn.Query<MasterKeyValue>(sql));
        }
        return employeeFirstNames;
    }

}