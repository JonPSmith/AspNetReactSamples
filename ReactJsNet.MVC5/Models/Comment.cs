#region licence
// =====================================================
// AspNetReactSample solution - using React js with ASP.NET MVC
// Filename: Comment.cs
// Date Created: 2016/05/05
// 
// Under the MIT License (MIT)
// 
// Written by Jon Smith : GitHub JonPSmith, www.thereformedprogrammer.net
// =====================================================
#endregion

using System.Collections.Generic;

namespace ReactJsNet.MVC5.Models
{
    public class Comment
    {
        // ReSharper disable InconsistentNaming
        public long id { get; set; }
        public string author { get; set; }
        public string text { get; set; }
        // ReSharper enable InconsistentNaming

        public static IEnumerable<Comment> SeedData()
        {
            long i = 0;
            return new List<Comment>
            {
                new Comment
                {
                    id = i++,
                    author = "Jon Smith",
                    text = "Glad to see you got the application going!"
                },
                new Comment
                {
                    id = i++,
                    author = "Jon Smith",
                    text = "See [reactjs.net](http://reactjs.net/) for more about using this approach to developing **ReactJS** applications."
                },
                new Comment
                {
                    id = i++,
                    author = "Jon Smith",
                    text = "More on the example code I used can be found in the [React Tutorial](http://facebook.github.io/react/docs/tutorial.html).  \n" +
                    "*Note: try stopping the MVC application and notice that any new comment is removed once the POST times out.*"
                }
            };
        }
    }
}