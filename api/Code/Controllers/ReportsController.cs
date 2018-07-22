using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PalewellRockers.Code.Models.Queries;

namespace PalewellRockers.Code.Controllers
{
    [Route("api/[controller]")]
    public class ReportsController : Controller
    {
        private readonly FootballDbContext _context;

        public ReportsController(FootballDbContext context)
        {
            _context = context;
        }

        [HttpGet("", Name = "GetReports")]
        public IEnumerable<News> GetReports()
        {
          return _context.News.FromSql("EXEC getNewsList @isMatchReport = 1").ToList();
        }
    }
}