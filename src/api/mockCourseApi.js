import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript",
    isDelete: false
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices",
    isDelete: false
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture",
    isDelete: false
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career",
    isDelete: false
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5",
    isDelete: false
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    debugger;
    return Object.assign([], courses.filter(course => course.isDelete == false));

  }

  static saveCourse(course) {
    console.log('enter save course');
    debugger;
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    // const minCourseTitleLength = 1;
    // if (course.title.length < minCourseTitleLength) {
    //   throw new Error(`Title must be at least ${minCourseTitleLength} characters.`);
    // }
    if (course.id) {
      const existingCourseIndex = courses.findIndex(a => a.id == course.id);
      courses.splice(existingCourseIndex, 1, course);
     
    } else {
      course.id = generateId(course);
      course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
      courses.push(course);
      
    }
    return course;

  }

  static deleteCourse(course) {
    debugger;
    const indexOfCourseToDelete = courses.findIndex(crs => {
      course.id == crs.id;
    });
    courses.splice(indexOfCourseToDelete, 1);
  }
    
}

export default CourseApi;
