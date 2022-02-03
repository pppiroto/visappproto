using System.Data;
using System.Runtime.Serialization;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using visappproto.Models;

namespace visappproto.Controllers;

[ApiController]
[Route("[controller]")]
public class ActorController : ControllerBase
{
    private readonly ILogger<ActorController> _logger;
    private readonly IVisAppProtSettings _settings;

    public ActorController(ILogger<ActorController> logger, IVisAppProtSettings settings)
    {
        _logger = logger;
        _settings = settings;
        Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;
    }

    [HttpGet]
    public IEnumerable<dynamic> Get()
    {
        var result = new List<dynamic>();
        var employeeJobIdList = new List<MasterKeyValue>();

        using(var conn = new MySqlConnection(_settings.MySQLConnectionStrings)) 
        {
            conn.Open();
            var sql = @$"select * from sakila.actor";
            _logger.LogInformation(sql);
            
            // 型を指定しなければ dynamic 型
            result.AddRange(conn.Query(sql));
        }
        return result;
    }
}