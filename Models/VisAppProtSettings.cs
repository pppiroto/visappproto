namespace visappproto.Models {
    public interface IVisAppProtSettings {
        string ConnectionStrings { get; set; }
    }

    public class VisAppProtSettings : IVisAppProtSettings
    {
        private string? connectionStrings;
        public string ConnectionStrings { get => connectionStrings ?? ""; set => connectionStrings = value; }
    }
}