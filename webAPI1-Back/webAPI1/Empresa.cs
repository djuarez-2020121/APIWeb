using System.ComponentModel.DataAnnotations;

namespace webAPI1
{
    public class Empresa
    {

        public int Id { get; set; }


        [StringLength(30)]
        public string EmpresaNombre { get; set; } = string.Empty;
    }
}
