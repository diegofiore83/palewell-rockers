using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PalewellRockers.Code.Models.Queries;

namespace PalewellRockers.Code.Controllers
{
    [Route("api/[controller]")]
    public class PlayerController : Controller
    {
        private readonly FootballDbContext _context;

        public PlayerController(FootballDbContext context)
        {
            _context = context;
        }

        [HttpGet("players", Name = "GetPlayers")]
        public IEnumerable<Player> GetPlayers()
        {
          return _context.Players.FromSql("EXEC getPlayers").ToList();
        }
    }
}