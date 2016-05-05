using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using ReactJsNet.MVC5.Models;

namespace ReactJsNet.MVC5.Controllers
{
    [RoutePrefix("api/comments")]
    public class CommentsController : ApiController
    {
        private static readonly ConcurrentDictionary<long, Comment> DataDict =
    new ConcurrentDictionary<long, Comment>(Comment.SeedData().ToDictionary(x => x.id));

        // GET: api/Comments
        public IEnumerable<Comment> Get()
        {
            return DataDict.Values;
        }

        // GET: api/Comments/5
        public IHttpActionResult Get(long id)
        {
            Comment value = null;
            return DataDict.TryGetValue(id, out value) ? (IHttpActionResult)Ok(value) : NotFound();
        }

        // POST: api/Comments
        public IHttpActionResult Post([FromBody]Comment value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (DataDict.TryAdd(value.id, value))
                return Ok(value);

            return Conflict();
        }

        //// PUT: api/Comments/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/Comments/5
        //public void Delete(int id)
        //{
        //}
    }
}
