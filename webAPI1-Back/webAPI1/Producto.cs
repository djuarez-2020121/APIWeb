using System.ComponentModel.DataAnnotations;

namespace webAPI1
{
    public class Producto
    {
        public int Id { get; set; }


        [StringLength(30)]
        public string ProductoNombre { get; set; } = string.Empty;



    }
}
