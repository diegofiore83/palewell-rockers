using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PalewellRockers.Code.Models.Queries;

namespace PalewellRockers.Code.Controllers
{
    [Route("api/[controller]")]
    public class NewsController : Controller
    {
        private readonly FootballDbContext _context;

        public NewsController(FootballDbContext context)
        {
            _context = context;
        }

        [HttpGet("", Name = "GetNews")]
        public IEnumerable<News> GetNews()
        {
          return _context.News.FromSql("EXEC getNews").ToList();
        }
    }
}