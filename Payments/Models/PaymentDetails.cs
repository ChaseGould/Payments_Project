using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Payments.Models
{
    public partial class PaymentDetails
    {
        [Key]
        [Column("PMId")]
        public int Pmid { get; set; }
        [Required]
        [StringLength(100)]
        public string CardOwnerName { get; set; }
        [Required]
        [StringLength(16)]
        public string CardNumber { get; set; }
        [Required]
        [StringLength(5)]
        public string ExpirationDate { get; set; }
        [Required]
        [Column("CVV")]
        [StringLength(3)]
        public string Cvv { get; set; }
    }
}
