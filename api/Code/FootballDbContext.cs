using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;
using PalewellRockers.Code.Models.Queries;

namespace PalewellRockers.Code
{
    public class FootballDbContext : DbContext
    {
        public FootballDbContext(DbContextOptions<FootballDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Player>().HasKey(p => p.Shortname);
        }
       
        public DbSet<Player> Players { get; set; }
    }
}