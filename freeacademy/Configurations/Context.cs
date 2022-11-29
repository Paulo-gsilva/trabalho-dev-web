using freeacademy.Model.Course;
using Microsoft.EntityFrameworkCore;

namespace freeacademy.Configurations
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Course> Course { get; set; }
    }
}
