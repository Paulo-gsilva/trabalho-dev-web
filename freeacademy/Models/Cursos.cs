using System;
namespace freeacademy.Models
{
    public class Cursos
    {
        public int CursoID { get; set; }
        public string NAME { get; set; }
        public int TeatcherID { get; set; }
        public int RATE { get; set; }
        public string DESCRIPTION { get; set; }
        public string CURSOIMG { get; set; }
    }
}

