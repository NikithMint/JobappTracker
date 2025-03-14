using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


[ApiController]
[Route("api/jobs")]
public class JobApplicationController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public JobApplicationController(ApplicationDbContext context)
    {
        _context = context;
    }
    

    // ✅ Get all job applications
    [HttpGet]
    public async Task<ActionResult<IEnumerable<JobApplication>>> GetJobs()
    {
        return await _context.JobApplications.ToListAsync();
    }

    // ✅ Get a single job by ID
    [HttpGet("{id}")]
    public async Task<ActionResult<JobApplication>> GetJob(int id)
    {
        var job = await _context.JobApplications.FindAsync(id);
        if (job == null)
        {
            return NotFound();
        }
        return job;
    }

    // ✅ Add a new job
    [HttpPost]
    public async Task<ActionResult<JobApplication>> AddJob(JobApplication job)
    {
        _context.JobApplications.Add(job);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetJob), new { id = job.Id }, job);
    }

    // ✅ Update job status
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateJob(int id, JobApplication job)
    {
        if (id != job.Id)
        {
            return BadRequest();
        }
        _context.Entry(job).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    // ✅ Delete job application
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteJob(int id)
    {
        var job = await _context.JobApplications.FindAsync(id);
        if (job == null)
        {
            return NotFound();
        }
        _context.JobApplications.Remove(job);
        await _context.SaveChangesAsync();
        return NoContent();
    }
    

    
    
}
