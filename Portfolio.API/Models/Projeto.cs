using System;

namespace Portfolio.API.Models
{
    public class Projeto{
        public int Id { get; set; }
        public string Titulo { get; set; } = string.Empty;

        //Descrições para cada idioma
        public string DescricaoPT { get; set; } = string.Empty;
        public string DescricaoEN { get; set; } = string.Empty;
        public string DescricaoES { get; set; } = string.Empty;

        public string UrlImagem { get; set; } = string.Empty;
        public string UrlGithub { get; set; } = string.Empty;
        public string UrlDeploy { get; set; } = string.Empty;

        public string Tecnologias { get; set; } = string.Empty;
    }
}
