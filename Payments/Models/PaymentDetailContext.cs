using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Payments.Models
{
    public partial class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext()
        {
        }

        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options)
            : base(options)
        {
        }

        public virtual DbSet<PaymentDetails> PaymentDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=localhost;Initial Catalog=PaymentDetailDB;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PaymentDetails>(entity =>
            {
                entity.Property(e => e.PMId).ValueGeneratedOnAdd();

                entity.Property(e => e.CardNumber).IsUnicode(false);

                entity.Property(e => e.CVV).IsUnicode(false);

                entity.Property(e => e.ExpirationDate).IsUnicode(false);
            });
        }
    }
}
