using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using ReactWebPack.MVC5.Models;

namespace ReactWebPack.MVC5.Controllers
{
    [RoutePrefix("api/cards")]
    public class CardsController : ApiController
    {
        private static readonly ConcurrentDictionary<long, CardData> DataDict =
            new ConcurrentDictionary<long, CardData>( CardData.SeedData().ToDictionary(x => x.id));

        // GET: api/Cards
        public IEnumerable<CardData> Get()
        {
            return DataDict.Values;
        }

        // GET: api/Cards/5
        public IHttpActionResult Get(long id)
        {
            CardData value = null;
            return DataDict.TryGetValue(id, out value) ? (IHttpActionResult) Ok(value) : NotFound();

        }

        // POST: api/Cards
        public IHttpActionResult Post([FromBody]CardData value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (DataDict.TryAdd(value.id, value))
                return Ok(value);

            return Conflict();
            
        }

        // PUT: api/Cards/5
        public IHttpActionResult Put(long id, [FromBody]CardData value)
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
            else if (!string.IsNullOrEmpty(value.status) )
            {
                //2. Update status only: If the id of the value is zero and the status is given then we only update the status
                DataDict[id].status = value.status;
            }

            return Ok(DataDict[id]);
        }

        // DELETE: api/Cards/5
        public IHttpActionResult Delete(long id)
        {
            CardData value = null;
            if (DataDict.TryRemove(id, out value))
                return Ok();

            return NotFound();
        }

        //------------------------------------------------------------------
        //Tasks

        // POST: api/cards/5/tasks
        [Route("{cardId}/tasks")]
        [HttpPost]
        public IHttpActionResult AddTask(long cardId, [FromBody]TaskData taskData)
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
        [Route("{cardId}/tasks/{taskId}")]
        [HttpPut]
        public IHttpActionResult UpdateTaskDone(long cardId, long taskId, [FromBody]TaskData taskData)
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
        [Route("{cardId}/tasks/{taskId}")]
        [HttpDelete]
        public IHttpActionResult DeleteTask(long cardId, long taskId)
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
