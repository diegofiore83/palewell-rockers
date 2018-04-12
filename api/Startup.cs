using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PalewellRockers.Code;

namespace PalewellRockers
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<FootballDbContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("FootballDbModel")));
            services.AddMvc();
            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            // Shows UseCors with CorsPolicyBuilder.
            app.UseCors(builder => builder.WithOrigins("http://localhost:3000"));
            app.UseCors(builder => builder.WithOrigins("http://www.palewell-rockers.co.uk"));

            app.UseMvc();
        }
    }
}
