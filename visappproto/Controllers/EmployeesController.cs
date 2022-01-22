using System.Data;
using System.Runtime.Serialization;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using visappproto.Models;

namespace visappproto.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeesController : ControllerBase
{
    private readonly ILogger<EmployeesController> _logger;
    private readonly IVisAppProtSettings _settings;

    public EmployeesController(ILogger<EmployeesController> logger, IVisAppProtSettings settings)
    {
        _logger = logger;
        _settings = settings;
    }

    [HttpGet]
    public IEnumerable<Employelee> Get()
    {
        Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;

        var employees = new List<Employelee>();
        System.Console.WriteLine(_settings.ConnectionStrings);
        using(var conn = new OracleConnection(_settings.ConnectionStrings)) 
        {
            conn.Open();

            var sql = "select * from hr.employees order by EMPLOYEE_ID";
            employees.AddRange(conn.Query<Employelee>(sql));
        }
        return employees;
    }
}