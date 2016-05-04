#region licence
// =====================================================
// AspNetReactSample solution - using React js with ASP.NET MVC
// Filename = CardData.cs
// Date Created = 2016/05/03
// 
// Under the MIT License (MIT)
// 
// Written by Jon Smith  = GitHub JonPSmith, www.thereformedprogrammer.net
// =====================================================
#endregion

using System;
using System.Collections.Generic;

namespace ReactWebPack.MVC5.Models
{
    
    public class CardData
    {
        public const string ToDoStatus = "todo";
        public const string InProgressStatus = "in-progress";
        public const string DoneStatus = "done";

        public const string DefaultColor = "#000000";

        // ReSharper disable InconsistentNaming
        public long id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string color { get; set; }
        public string status { get; set; }

        public ICollection<TaskData> tasks { get; set; }
        // ReSharper restore InconsistentNaming

        private CardData()
        {
            tasks = new List<TaskData>();
        }

        public static List<CardData> SeedData()
        {
            long i = 1;
            return new List<CardData>
            {
                new CardData
                {
                    id = i++,
                    title = "Read the article",
                    description = "The article can be found [here](#)",
                    status = DoneStatus,
                    color = DefaultColor,
                    tasks = new List<TaskData>()
                },
                new CardData
                {
                    id = i++,
                    title = "Download the example code",
                    description = "The gitHub code can be found at [AspNetReactSamples](https://github.com/JonPSmith/AspNetReactSamples)",
                    status = InProgressStatus,
                    color = DefaultColor,
                    tasks = new List<TaskData>
                    {
                        new TaskData
                        {
                            id = i++,
                            name = "Run the ReactWebPack.MVC5 project",
                            done = true
                        },
                        new TaskData
                        {
                            id = i++,
                            name = "Mark this as true to check it works",
                            done = false
                        },
                        new TaskData
                        {
                            id = i++,
                            name = "Maybe edit a card, or add a task.",
                            done = false
                        },
                        new TaskData
                        {
                            id = i++,
                            name = "Stop the MVC app and see how any further changes are reverted.",
                            done = false
                        },
                    }
                },
                new CardData
                {
                    id = i++,
                    title = "Install the NPM Task Runner.",
                    description = "NPM Task Runner can be found [here](https://visualstudiogallery.msdn.microsoft.com/8f2f2cbc-4da5-43ba-9de2-c9d08ade4941).",
                    status = ToDoStatus,
                    color = DefaultColor,
                    tasks = new List<TaskData>
                    {
                        new TaskData
                        {
                            id = i++,
                            name = "Look in Task Runner Explorer window for new commands",
                            done = false
                        }
                    }
                },
                new CardData
                {
                    id = i++,
                    title = "Play with the code",
                    description = "Get to know the code by editing something.",
                    status = ToDoStatus,
                    color = DefaultColor,
                    tasks = new List<TaskData>
                    {
                        new TaskData
                        {
                            id = i++,
                            name = "Edit one of the react files in /app and recompile with dev-build command",
                            done = false
                        },
                        new TaskData
                        {
                            id = i++,
                            name = "Start watch-dev and then edit a file and save. Did it recompile?",
                            done = false
                        },
                        new TaskData
                        {
                            id = i++,
                            name = "Have look round the application",
                            done = false
                        }
                    }
                }
            };
        }
    }
}