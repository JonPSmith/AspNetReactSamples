using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ReactWebPack.CoreRC2.Models;
using Microsoft.AspNetCore.Cors;

namespace ReactWebPack.CoreRC2.Controllers
{
    [Route("api/[controller]")]
    public class CardsController : Controller
    {
        private static readonly ConcurrentDictionary<long, CardData> DataDict =
            new ConcurrentDictionary<long, CardData>( CardData.SeedData().ToDictionary(x => x.id));

        [HttpGet]
        // GET: api/Cards
        public IEnumerable<CardData> Get()
        {
            return DataDict.Values;
        }

        [HttpGet("{id}")]
        // GET: api/Cards/5
        public IActionResult Get(long id)
        {
            CardData value = null;
            return DataDict.TryGetValue(id, out value) ? (IActionResult) Ok(value) : NotFound();

        }

        [HttpPost]
        // POST: api/Cards
        public IActionResult Post([FromBody]CardData value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (DataDict.TryAdd(value.id, value))
                return Ok(value);

            return BadRequest();
            
        }

        [HttpPut("{id}")]
        // PUT: api/Cards/5
        public IActionResult Put(long id, [FromBody]CardData value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!DataDict.ContainsKey(id))
                return NotFound();

            //KanBan React code has two calls to PUT cards/id:
            if (value.id == id)
                //1. Full update: We assume the call is a full update if id on value is filled in.
                DataDict[id] = value;
            else if (!string.IsNullOrEmpty(value.status))
            {
                //2. Update status only: If the id of the value is zero and the status is given then we only update the status
                DataDict[id].status = value.status;
            }

            return Ok(DataDict[id]);
        }

        [HttpDelete("{id}")]
        // DELETE: api/Cards/5
        public IActionResult Delete(long id)
        {
            CardData value = null;
            if (DataDict.TryRemove(id, out value))
                return Ok();

            return NotFound();
        }

        //------------------------------------------------------------------
        //Tasks

        // POST: api/cards/5/tasks
        [HttpPost("{cardId}/tasks")]
        public IActionResult AddTask(long cardId, [FromBody]TaskData taskData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            CardData value = null;
            if(!DataDict.TryGetValue(cardId, out value))
                return NotFound();

            value.tasks.Add(taskData);

            return Ok(taskData);
        }

        // PUT: api/cards/5/tasks
        [HttpPut("{cardId}/tasks/{taskId}")]
        public IActionResult UpdateTaskDone(long cardId, long taskId, [FromBody]TaskData taskData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            CardData value = null;
            if (!DataDict.TryGetValue(cardId, out value))
                return NotFound();

            var taskToUpdate = value.tasks.SingleOrDefault(x => x.id == taskId);
            if (taskToUpdate == null)
                return NotFound();

            taskToUpdate.done = taskData.done;

            return Ok(taskToUpdate);
        }

        // DELETE: api/cards/5/tasks
        [HttpDelete("{cardId}/tasks/{taskId}")]
        public IActionResult DeleteTask(long cardId, long taskId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            CardData value = null;
            if (!DataDict.TryGetValue(cardId, out value))
                return NotFound();

            var taskToDelete = value.tasks.SingleOrDefault(x => x.id == taskId);
            if (taskToDelete == null)
                return NotFound();

            value.tasks.Remove(taskToDelete);

            return Ok(value);
        }
    }
}
