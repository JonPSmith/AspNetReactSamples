using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactJsNet.MVC5.Startup))]
namespace ReactJsNet.MVC5
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
