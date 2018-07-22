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
            builder.Entity<News>().HasKey(p => p.Id);
            builder.Entity<Fixture>().HasKey(p => p.Id);
        }
       
        public DbSet<Player> Players { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Fixture> Fixture { get; set; }
    }
}