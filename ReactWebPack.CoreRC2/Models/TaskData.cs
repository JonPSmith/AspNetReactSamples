#region licence
// =====================================================
// AspNetReactSample solution - using React js with ASP.NET MVC
// Filename: TaskData.cs
// Date Created: 2016/05/03
// 
// Under the MIT License (MIT)
// 
// Written by Jon Smith : GitHub JonPSmith, www.thereformedprogrammer.net
// =====================================================
#endregion
namespace ReactWebPack.CoreRC2.Models
{
    public class TaskData
    {
        // ReSharper disable InconsistentNaming
        public long id { get; set; }
        public string name { get; set; }
        public bool done { get; set; }
        // ReSharper restore InconsistentNaming
    }
}