using System.Data;
using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using visappproto.Models;

namespace visappproto.Controllers;

[ApiController]
[Route("[controller]")]
public class SimpleDataAccessController : ControllerBase
{
    private readonly ILogger<SimpleDataAccessController> _logger;
    private readonly IVisAppProtSettings _settings;

    public SimpleDataAccessController(ILogger<SimpleDataAccessController> logger, IVisAppProtSettings settings)
    {
        _logger = logger;
        _settings = settings;
    }

    [HttpGet]
    public IEnumerable<dynamic> Get()
    {
        var employees = new List<dynamic>();
        using(var conn = new OracleConnection(_settings.ConnectionStrings)) 
        {
            conn.Open();

            var sql = "select * from hr.employees";
            var cmd = new OracleCommand(sql, conn);

            using(OracleDataReader reader = cmd.ExecuteReader())
            {
                while(reader.Read())
                {
                    var employee = new {
                        employeeId  =  reader.GetString("EMPLOYEE_ID"),
                        firstName   =  reader.GetString("FIRST_NAME"),
                        lastName    =  reader.GetString("LAST_NAME"),
                        email       =  reader.GetString("EMAIL"),
                        phoneNumber =  reader.GetString("PHONE_NUMBER"),
                        hireDate    =  reader.GetDateTime("HIRE_DATE"),
                        jobId       =  reader.GetString("JOB_ID"),
                        salaryd     =  reader.GetDecimal("SALARY"),                    
                    };
                    employees.Add(employee);
                }
            }
        }
        return employees;
    }
}
