using System.ComponentModel.DataAnnotations.Schema;

namespace freeacademy.Model.Course
{
    [Table("Course")]
    public class Course
    {
        [Column("CourseId")]
        public int courseId { get; set; }

        [Column("CourseName")]
        public string courseName { get; set; }

        [Column("CourseTeacher")]
        public string courseTeacher { get; set; }
    }
}
