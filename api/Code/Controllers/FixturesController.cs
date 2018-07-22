using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PalewellRockers.Code.Models.Queries;

namespace PalewellRockers.Code.Controllers
{
    [Route("api/[controller]")]
    public class FixturesController : Controller
    {
        private readonly FootballDbContext _context;

        public FixturesController(FootballDbContext context)
        {
            _context = context;
        }

        [HttpGet("", Name = "GetFixtures")]
        public IEnumerable<Fixture> GetFixtures()
        {
          return _context.Fixture.FromSql("EXEC getFixtures").ToList();
        }
    }
}