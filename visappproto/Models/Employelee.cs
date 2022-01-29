using System.Runtime.Serialization;

namespace visappproto.Models;

public class Employelee
{

    [DataMember(Name = "EMPLOYEE_ID")]
    public string? employeeId{ get; set; }

    [DataMember(Name = "FIRST_NAME")]
    public string? firstName{ get; set; }   
    
    [DataMember(Name = "LAST_NAME")]
    public string? lastName{ get; set; }   
    
    [DataMember(Name = "EMAIL")]
    public string? email{ get; set; }       
    
    [DataMember(Name = "PHONE_NUMBER")]
    public string? phoneNumber{ get; set; } 
    
    [DataMember(Name = "HIRE_DATE")]
    public DateTime hireDate{ get; set; }   
    
    [DataMember(Name = "JOB_ID")]
    public string? jobId{ get; set; }       
    
    [DataMember(Name = "SALARY")]
    public double salary { get; set; }       
}