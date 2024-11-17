// SBA 308: JavaScript Fundamentals


// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];


  function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
    //If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error,
    if (AssignmentGroup.course_id != CourseInfo.id) {
        throw new Error ("Invalid, mismatching course id");
    } 

    const results = []; //empty array to store learners' data

    //Loop through LearnerSubmissions to get learner id and assignment id
    for (const submission of LearnerSubmissions) {
        const learnerId = submission.learner_id;
        const assignmentId = submission.assignment_id; 

    //Check to see if assignmentID matches assignment id from AssignmentGroup
    let assignment = null;
    for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
        if (AssignmentGroup.assignments[i].id === assignmentId) {
            assignment = AssignmentGroup.assignments[i];
            break; //If assignment found exit loop
        }
    }

    if (!assignment) continue; //Skip if AssignmentGroup is missing the assignment id



    //Collect due dates from AssignmentGroup
    let dueDate;
    try {
        dueDate = new Date(assignment.due_at);
        if (isNaN(dueDate)) throw new Error("Invalid date format");
      } catch (error) {
        console.error("Error with due date:", error);
        continue;
      }


    // If an assignment is not yet due, do not include it in the results or the average.
    if (new Date(dueDate) > new Date()) {
        continue; // Skip assignment if not yet due
    } else {
        // console.log("Assignment is due");
    }


    //Collect submission date from LearnerSubmissions
    let submissionDate;
    try {
        submissionDate = new Date(submission.submission.submitted_at);
        if (isNaN(submissionDate)) throw new Error("Invalid submission date format");
    } catch (error) {
        console.error("Error with submission date:", error);
        continue;
    }

    //Collect points possible from AssignmentGroup
    const pointsPossible = assignment.points_possible;    

    .         