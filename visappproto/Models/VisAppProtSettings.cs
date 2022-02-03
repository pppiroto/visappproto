namespace visappproto.Models {
    public interface IVisAppProtSettings {
        string ConnectionStrings { get; set; }
        string MySQLConnectionStrings { get; set; }
    }

    public class VisAppProtSettings : IVisAppProtSettings
    {
        public string ConnectionStrings { get; set; } = null!;
        public string MySQLConnectionStrings { get; set; } = null!;
    }
}