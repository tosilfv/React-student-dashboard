// Generate Course Data
function createData(
  id,
  courseCode,
  courseName,
  courseCredits,
  courseRegistering,
  courseSchedule
) {
  return {
    id,
    courseCode,
    courseName,
    courseCredits,
    courseRegistering,
    courseSchedule,
  };
}

export const rows = [
  createData(
    0,
    "Course Code1",
    "Course Name1",
    "Course Credits1",
    "Course Registering1",
    "Course Schedule1"
  ),
  createData(
    1,
    "Course Code2",
    "Course Name2",
    "Course Credits2",
    "Course Registering2",
    "Course Schedule2"
  ),
  createData(
    2,
    "Course Code3",
    "Course Name3",
    "Course Credits3",
    "Course Registering3",
    "Course Schedule3"
  ),
  createData(
    3,
    "Course Code4",
    "Course Name4",
    "Course Credits4",
    "Course Registering4",
    "Course Schedule4"
  ),
  createData(
    4,
    "Course Code5",
    "Course Name5",
    "Course Credits5",
    "Course Registering5",
    "Course Schedule5"
  ),
];
