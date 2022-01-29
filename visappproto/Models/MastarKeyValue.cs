using System.Runtime.Serialization;

namespace visappproto.Models;

public class MasterKeyValue
{
    [DataMember(Name = "MASTER_KEY")]
    public string? masterKey{ get; set; }

    [DataMember(Name = "MASTER_VALUE")]
    public string? masterValue{ get; set; }   
}

