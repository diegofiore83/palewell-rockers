using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PalewellRockers.Code.Models.Queries
{
  public class Fixture
  {
    public int Id { get; set; }
    public string Result { get; set; }
    public string Opponent { get; set; }
    public DateTime Date { get; set; }
    public string Location { get; set; }
    public Boolean HomeMatch { get; set; }
    public string ResultType { get; set; }
  }
}