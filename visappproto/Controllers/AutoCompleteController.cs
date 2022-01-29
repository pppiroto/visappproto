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
        Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;
    }

    [HttpGet("EmployeeJobIdList")]
    // public IEnumerable<MasterKeyValue> EmployeeFirstName(string keyword)
    public IEnumerable<MasterKeyValue> EmployeeJobIdList()
    {
        var employeeJobIdList = new List<MasterKeyValue>();
        using(var conn = new OracleConnection(_settings.ConnectionStrings)) 
        {
            conn.Open();
            var sql = 
            @$"select JOB_ID as MASTER_KEY, JOB_ID as MASTER_VALUE from hr.employees 
                group by JOB_ID order by JOB_ID";

            _logger.LogInformation(sql);

            employeeJobIdList.AddRange(
                conn.Query<MasterKeyValue>(sql));
        }
        return employeeJobIdList;
    }

    [HttpGet("EmployeeFirstname")]
    // public IEnumerable<MasterKeyValue> EmployeeFirstName(string keyword)
    public IEnumerable<MasterKeyValue> EmployeeFirstname(string id)
    {
        var employeeFirstNames = new List<MasterKeyValue>();
        using(var conn = new OracleConnection(_settings.ConnectionStrings)) 
        {
            conn.Open();
            var firstname = $"%{id.ToUpper()}%";

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