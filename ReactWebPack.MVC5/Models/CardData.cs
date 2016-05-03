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

using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ReactWebPack.MVC5.Models
{
    
    public class CardData
    {
        public const string ToDoStatus = "todo";
        public const string InProgressStatus = "in-progress";
        public const string DoneStatus = "done";

        public const string DefaultColor = "#000000";

        // ReSharper disable InconsistentNaming
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string color { get; set; }
        public string status { get; set; }

        public ICollection<TaskData> tasks { get; set; }
        // ReSharper restore InconsistentNaming

        public static IEnumerable<CardData> SeedData()
        {
            return new List<CardData>
            {
                new CardData
                {
                    id = 1,
                    title = "Read the Book",
                    description = "I should read the **whole** book",
                    status = InProgressStatus,
                    color = DefaultColor,
                    tasks = new List<TaskData>()
                },
                new CardData
                {
                    id = 2,
                    title = "Write some code",
                    description = "Code along with the samples in the book",
                    status = ToDoStatus,
                    color = DefaultColor,
                    tasks = new List<TaskData>
                    {
                        new TaskData
                        {
                            id = 1,
                            name = "ContactList Example",
                            done = true
                        },
                        new TaskData
                        {
                            id = 2,
                            name = "Kanban Example",
                            done = false
                        },
                        new TaskData
                        {
                            id = 3,
                            name = "My own experiments",
                            done = false
                        }
                    }
                }
            };
        }
    }
}