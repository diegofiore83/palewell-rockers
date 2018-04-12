using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PalewellRockers.Code.Models.Queries;

namespace PalewellRockers.Code.Controllers
{
    [Route("api/[controller]")]
    public class PlayersController : Controller
    {
        private readonly FootballDbContext _context;

        public PlayersController(FootballDbContext context)
        {
            _context = context;
        }

        [HttpGet("", Name = "GetPlayers")]
        public IEnumerable<Player> GetPlayers()
        {
          return _context.Players.FromSql("EXEC getPlayers").ToList();
        }
    }
}