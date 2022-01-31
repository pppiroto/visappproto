namespace visappproto.Models {
    public interface IVisAppProtSettings {
        string ConnectionStrings { get; set; }
        string MySQLConnectionString { get; set; }
    }

    public class VisAppProtSettings : IVisAppProtSettings
    {
        public string ConnectionStrings { get; set; } = null!;
        public string MySQLConnectionString { get; set; } = null!;
    }
}