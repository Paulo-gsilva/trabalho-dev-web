using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using freeacademy.Models;

namespace freeacademy.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<userStudent>? userStudent { get; set; }
        public DbSet<userTeatcher>? userTeatcher { get; set; }
        public DbSet<Cursos>? Cursos { get; set; }
    }
}

