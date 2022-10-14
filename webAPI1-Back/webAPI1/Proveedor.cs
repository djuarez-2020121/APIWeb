using System.ComponentModel.DataAnnotations;

namespace webAPI1
{
    public class Proveedor
    {

        public int Id { get; set; }

        [StringLength(30)]
        public string NombreProveedor { get; set; } = string.Empty;

        [StringLength(30)]
        public string DirreccionProveedor { get; set; } = string.Empty;

        //Llave foranea
        public int ProductoId { get; set; }
        public Producto? Producto { get; set; }
    }
}
