namespace visappproto.Models {
    public interface IVisAppProtSettings {
        string ConnectionStrings { get; set; }
    }

    public class VisAppProtSettings : IVisAppProtSettings
    {
        public string ConnectionStrings { get; set; } = null!;
    }
}