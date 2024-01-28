//import classes from "./classes.json" assert { type: "json" };
//import majors from "./majors.json" assert { type: "json" };
//import {CourseMap} from './sorters.js';

 
let classes = {
  "MATH 200": {
    courseName: "Calculus with Analytic Geometry I",
    credits: 4.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "MATH 201": {
    courseName: "Calculus with Analytic Geometry II",
    credits: 4.0,
    prerequisites: ["MATH 200"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "MATH 301": {
    courseName: "Differential Equations",
    credits: 3.0,
    prerequisites: ["MATH 201"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "MATH 307": {
    courseName: "Multivariate Calculus",
    credits: 4.0,
    prerequisites: ["MATH 201"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 207": {
    courseName: "University Physics I",
    credits: 5.0,
    prerequisites: ["MATH 200"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "HONR 200": {
    courseName: "Rhetoric",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "HONR 250": {
    courseName: "Expository Writing",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "HONR 170": {
    courseName: "Humans of RVA and VCU",
    credits: 1.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "HONR 171": {
    courseName: "Investigative Inquiry in RVA",
    credits: 1.0,
    prerequisites: ["HONR 170"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "HONR 150": {
    courseName: "Flourishing",
    credits: 1.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "STAT 212": {
    courseName: "Concepts of Statistics",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "RELS 108": {
    courseName: "Human Spirituality",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "ECON 205": {
    courseName: "The Economics of Product Development and Markets",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "EGMN 111": {
    courseName: "Great Inventions: How They Work and Their Impact on Society",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "BIOL 151": {
    courseName: "Introduction to Biological Sciences I",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "BIOZ 151": {
    courseName: "Introduction to Biological Science Laboratory I",
    credits: 1.0,
    prerequisites: [],
    corequisites: ["BIOL 151"],
    minSemester: 0,
    passed: false
  },
  "BIOL 152": {
    courseName: "Introduction to Biological Sciences II",
    credits: 3.0,
    prerequisites: ["BIOL 151"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "BIOZ 152": {
    courseName: "Introduction to Biological Science Laboratory II",
    credits: 1.0,
    prerequisites: [],
    corequisites: ["BIOL 152"],
    minSemester: 0,
    passed: false
  },
  "CHEM 101": {
    courseName: "General Chemistry I",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "CHEZ 101": {
    courseName: "General Chemistry Laboratory I",
    credits: 1.0,
    prerequisites: [],
    corequisites: ["CHEM 101"],
    minSemester: 0,
    passed: false
  },
  "CHEM 102": {
    courseName: "General Chemistry II",
    credits: 3.0,
    prerequisites: ["CHEM 101"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "CHEZ 102": {
    courseName: "General Chemistry Laboratory II",
    credits: 1.0,
    prerequisites: [],
    corequisites: ["CHEM 102"],
    minSemester: 0,
    passed: false
  },
  "CMSC 255": {
    courseName: "Introduction to Programming",
    credits: 4.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "ARTS 100": {
    courseName: "School of Arts Credit",
    credits: 1.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 201": {
    courseName: "General Physics I",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "HIST 103": {
    courseName: "Survey of American History I",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "HIST 104": {
    courseName: "Survey of American History II",
    credits: 3.0,
    prerequisites: ["HIST 103"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "HONR XX1": {
    courseName: "Course of Intention",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 2,
    passed: false
  },
  "HONR XX2": {
    courseName: "Course of Intention",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 2,
    passed: false
  },
  "HONR XX3": {
    courseName: "Course of Intention",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 2,
    passed: false
  },
  "MGMT 310": {
    courseName: "Managing People in Organizations",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 208": {
    courseName: "University Physics II",
    credits: 5.0,
    prerequisites: ["PHYS 207"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 301": {
    courseName: "Classical Mechanics",
    credits: 3.0,
    prerequisites: ["PHYS 208", "MATH 301", "MATH 307"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 320": {
    courseName: "Modern Physics",
    credits: 3.0,
    prerequisites: ["PHYS 208", "MATH 301", "MATH 307"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 376": {
    courseName: "Electromagnetism I",
    credits: 3.0,
    prerequisites: ["MATH 301", "PHYS 301"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 380": {
    courseName: "Quantum Physics I",
    credits: 3.0,
    prerequisites: ["MATH 301", "PHYS 320", "PHYS 301"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYZ 320": {
    courseName: "Modern Physics Lab",
    credits: 1.0,
    prerequisites: [],
    corequisites: ["PHYS 320"],
    minSemester: 0,
    passed: false
  },
  "MATH 310": {
    courseName: "Linear Algebra",
    credits: 3.0,
    prerequisites: ["MATH 201"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "MATH 300": {
    courseName: "Intro to Mathematical Reasoning",
    credits: 3.0,
    prerequisites: ["MATH 201"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "MATH 407": {
    courseName: "Real Analysis",
    credits: 3.0,
    prerequisites: ["MATH 300"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "MATH 490": {
    courseName: "Mathematical Expositions",
    credits: 3.0,
    prerequisites: ["MATH 300"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "CMSC 245": {
    courseName: "Introduction to Programming Using C++",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "MATH 4X1": {
    courseName: "High Level MATH/STAT/OPER Course",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 4,
    passed: false
  },
  "MATH 4X2": {
    courseName: "High Level MATH/STAT/OPER Course",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 4,
    passed: false
  },
  "ENGR 395": {
    courseName: "Professional Development",
    credits: 1.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 340": {
    courseName: "Statistical Mechanics and Thermodynamics",
    credits: 3.0,
    prerequisites: ["MATH 301", "PHYS 301"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 450": {
    courseName: "Senior Physics Laboratory",
    credits: 3.0,
    prerequisites: ["PHYZ 320", "PHYS 320", "PHYS 301"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 490": {
    courseName: "Seminar in Conceptual Physics",
    credits: 1.0,
    prerequisites: ["PHYZ 320", "PHYS 380", "PHYS 376", "PHYS 340"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "HUMS 202": {
    courseName: "Choices in a Consumer Society",
    credits: 1.0,
    prerequisites: [],
    corequisites: ["UNIV 112", "UNIV 111"],
    minSemester: 0,
    passed: false
  },
  "PHYS 211": {
    courseName: "Physical Analysis",
    credits: 3.0,
    prerequisites: ["PHYS 208", "MATH 201"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 325": {
    courseName: "Visualization of Physics Using Mathematica",
    credits: 3.0,
    prerequisites: ["MATH 307", "PHYS 208"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "UNIV 111": {
    courseName: "Focused Inquiry I, 2",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "UNIV 112": {
    courseName: "Focused Inquiry II 1, 2",
    credits: 3.0,
    prerequisites: ["UNIV 111"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "UNIV 200": {
    courseName: "Advanced Focused Inquiry",
    credits: 3.0,
    prerequisites: ["UNIV 112"],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "CREA 201": {
    courseName: "The Creative Economy",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "ENGL 215": {
    courseName: "Reading Literature",
    credits: 3.0,
    prerequisites: [],
    corequisites: [],
    minSemester: 0,
    passed: false
  },
  "PHYS 302": {
    courseName: "Classical Mechanics II",
    credits: 3.0,
    prerequisites: ["PHYS 301"],
    corequisites: [],
    minSemester: 0,
    passed: false
  }
  
}




//Shows the Majors supported
majors ={
  Physics: {Courses: ["PHYS 208",	"PHYS 301",	"PHYS 320",	"PHYZ 320",	"PHYS 340",	"PHYS 376",	"PHYS 380", "PHYS 450",	"PHYS 490", "HUMS 202",	"MATH 200",	"MATH 201",	"MATH 301",	"MATH 307",	"PHYS 207",	"PHYS 211",	"PHYS 302",	"PHYS 325"]},
  Mathematics_Concentration_GeneralMathematicalSciences: {Courses: ["MATH 201", "MATH 307", "MATH 310", "MATH 300", "MATH 407", "MATH 490", "CMSC 255", "MATH 301", "HUMS 202", "MATH 200", "STAT 212", "PHYS 207", "PHYS 208"]},
  GenEd: {Courses: ["UNIV 111",	"UNIV 112", "UNIV 200",	"CREA 201",	"ECON 205",	"ENGL 215"]}
}


class CourseMap{
  
  constructor (potato){
    this.courseList = potato;
  }

  move(r, c, newr){
   if (this.courseList.length<=newr){
      for (let n = 0; n<=newr-this.courseList.length; n++){
        this.courseList.push([]);
      }
   }
  this.courseList[newr].push(this.courseList[r][c]);
  this.courseList[r].splice(c,1);
}

move2(r, c, newr){
  if (this.courseList.length<=newr){
     for (let n = 0; n<=newr-this.courseList.length; n++){
       this.courseList.push([]);
     }
  }
 this.courseList[newr].push(this.courseList[r][c]);
 this.courseList[r].splice(c,1);
}
  
 toString(){
  let results = "";
  for (let i = 0; i<this.courseList.length; i++){
    for (let j = 0; j<i; j++){
      results += toString(j) + "     ";
    }
    results += "\n";
  }
  return results;
}

//returns true if it has a prereq with or ahead of it, false otherwise
 withPrereq(pres, layer, coursecode){
  for (let pre = 0; pre<pres.length; pre++){
    for(let c = this.courseList.length-1; c>=layer; c--){
      //i is a layer of courses
      let i = this.courseList[c];
        for (let x=0; x<i.length; x++){
          if(i[x] == pres[pre]){
            return true;
          }
        }
    }
  }
  return false;
}

 
//Returns false if anything in layer was moved, true if nothing in layer was behind or with a prereq
 sortPrereqOneLayer(layer){
  let flag = true;
  //cyle through all courses in the given layer, starting from end
  for (let i = this.courseList[layer].length-1; i>=0; i--){
    //x = course
    let x = this.courseList[layer][i];
    //if course is with a prerequisite of it's or behind one, it is moved forwards one.
    if(this.withPrereq(classes[x].prerequisites, layer, x)){
      this.move(layer,i,layer+1);
      flag = false
    } 
  }
  return flag;
}

 sortAllByYearMin(){
  for (let count1 = 0; count1 < this.courseList; count1++){
    let layer = courseList[count1];
    for(let count2 = layer.length ;count2>=0;count2--){
      let col = layer[count2];
        if(classes[col].minSemester > count1){
          this.move(count1, count2, classes[col].minSemester);
        }
      
    }
  }
}

sortAllPrerequisites(){
  let flag = true;
  while (flag){
    //loop each layer starting from the end
    for (let count = this.courseList.length-1; count>=0; count--){
      //if the layer is not already perfect, then set flag false, repeating the loop
      if(!(this.sortPrereqOneLayer(count))){
        flag = false;
      }
    }
    //If no changes were made during the for-loop, exit the while loop as all prerequisites are sorted
    if (flag){
      break;
    }
    flag = true;
  }
}

 sortCoreqs(){
  for (let count1 = 0; count1<this.courseList.length; count1++){
    for (let count2 = 0; count2<this.courseList[count1].length; count2++){
      if(this.courseList[count1][count2] == "PHYS 320"){
        this.move (0, 4, count1);
      }
      }
    }
  }


sortAll(){
  this.sortAllByYearMin();
  this.sortAllPrerequisites();
  this.sortCoreqs();
  this.layerSortNumbers();
}


coreqIndex(layer, corequisite, defaul){
  for (let index = 0; index<layer.length; index++){
    course = this.courseList[layer][index];
    if (course == corequisite){
      return index;
    }
    return defaul;
  }
}


getTotalCreditHours(){
  let sum = 0;
  for (let x = 0; x<this.courseList.length; x++){
    let a = this.courselist[x];
    for (let y = 0; y<a.length; y++){
      let b = a[y];
      sum += classes[b].credits;
    }
  }
  return sum;
}

swapForward(layer, index){
  this.courseList[layer][index], this.courseList[layer][index+1] = this.courseList[layer][index+1]/this.courseList[layer][index];
}
  
layerSortNumbers(){
  let flag = true;
  for(let course1 = 0; course1<this.courseList.length; course1++){
    let layer = this.courseList[course1];
      while (flag){
          for(let count2 = 0; count2<layer.length; count2++){
            let course = layer[count2];
              if((!(count2 + 1 == layer.length) && course.courseType == this.courseList[course1][count2 + 1]) && (course > this.courseList[course1][count2 + 1])){
                  this.swapForward(course1, count2)
                  flag = false
              }
  }
          if (flag){
              break;
            }
  }
  }
          flag = true;
  }
  sumCreditYearsSem(sem){
    let sum = 0;
    for(let i = 0; i<this.courseList[sem].length; i++){
      sum = sum + classes[this.courseList[sem][i]].credits;
    }
    return sum;
  }

  getNumberPostreqs(courseCode){
    let counter = 0;
    for (let i = 0; i<this.courseList.length; i++){
      for (let j = 0; j<this.courseList[i].length; j++){
        for (let p = 0; p<classes[this.courseList[i][j]].prerequisites.length; p++){
          if (courseCode == classes[this.courseList[i][j]].prerequisites.length)
            counter = counter + 1;
        }
      }
    }
    return counter;
  }

  getLeastPostreqsSem(sem){
    let min = this.getNumberPostreqs(classes[this.courseList[sem][0]]);
    let minIndex = 0;
    for (let i = 1; i<this.courseList[sem].length; i++){
      if(min>this.getNumberPostreqs(classes[this.courseList[sem][0]])){
        min = this.getNumberPostreqs(classes[this.courseList[sem][0]]);
        minIndex = i
      }
    }
    return minIndex;
  }

  squash(maxCreditsSem){
    let flag = true;
    while(flag){
      for (let sem = 0; sem<this.courseList.length; sem++){
        if (this.sumCreditYearsSem(sem)>maxCreditsSem){
          this.move(sem, this.getLeastPostreqsSem(sem), sem+1)
          flag = false;
        }
      }
      if (flag){
        break;
      }
      flag = true;
    }
  }
}







//Main Shit
function getRequiredCourses(gened, math, physics){
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let output = [[]];
  //let final[[]];
  if (math){
    arr1 = (majors["Mathematics_Concentration_GeneralMathematicalSciences"].Courses);
    //output[0].push(majors["Mathematics_Concentration_GeneralMathematicalSciences"].Courses);
  }
  if (physics){
    arr2 = (majors["Physics"].Courses);
    //output[0].push(majors["Physics"].Courses);
  }
  if (gened){
    arr3 = (majors["GenEd"].Courses);
  }
  //output = arr1;
  output[0] = arr1.concat(arr2).concat(arr3);
  output[0] = [removeDuplicates(output[0])];
  return output[0];
}

function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!(unique.includes(element))) {
            unique.push(element);
        }
    });
    return unique;
}

function get3DArray(math, physics, squashed){
  let reqcourses = getRequiredCourses(true, math, physics);
  let myCourseMap = new CourseMap(reqcourses);
  myCourseMap.sortAll();
  if (squashed){
    myCourseMap.squash(12);
  }
  //Add SemesterName
  let output = [];
  for (let sem = 0; sem < myCourseMap.courseList.length; sem++){
    let temp = {semesterName: "Semester ".concat(sem+1), courses: []};
    output.push(temp);
    for (let courses = 0; courses<myCourseMap.courseList[sem].length; courses++){
      output[sem].courses.push({courseName: myCourseMap.courseList[sem][courses], preReqs: []});
      for (let prereq = 0; prereq<classes[myCourseMap.courseList[sem][courses]].prerequisites.length; prereq++){
        output[sem].courses[courses].preReqs.push(classes[myCourseMap.courseList[sem][courses]].prerequisites[prereq]);
      }
    }
  }

  return output;
}

let x = get3DArray(true, true, true);

console.log(x);
