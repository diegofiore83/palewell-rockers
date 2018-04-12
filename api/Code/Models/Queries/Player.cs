using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PalewellRockers.Code.Models.Queries
{
  public class Player
  {
    public string Fullname { get; set; }
    public string Shortname { get; set; }
    public string Position { get; set; }
    public string Nationality { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string FavouriteTeam { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public string Description { get; set; }
  }
}