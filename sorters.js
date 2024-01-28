import classes from "./classes.json" assert { type: "json" };
//self.withPrereq(classes[x].prerequisites, layer)
class CourseMap{
  
  constructor (potato){
    this.courseList = potato;
  }

  move(r, c, newr){
   if (self.courseList.length()<=newr){
     self.courseList.append([]);
   }
  self.coursList[newr].append(self.courseList[r][c]);
  self.courseList[r].pop(c);
}
  
 toString(){
  let results = "";
  for (let i = 0; i<self.courseList.length; i++){
    for (let j = 0; j<i; j++){
      results += toString(j) + "     ";
    }
    results += "\n";
  }
  return results;
}


 wthPrereq(pres, layer){
  for (let pre = 0; pre<pres.length(); pre++){
    for (let i = self.courseList.length()-1; i>=0; i--){
      if(i<layer){
        return false;
      }
      for (let x =0 ; x<i; x++){
        if (x == pre){
          return true;
        }
      }
  }
}
}
  
 sortPrereqOneLayer(layer){
  let flag = true;
  for (let i = self.courselist.length()-1; i>=0; i--){
    let x = self.courselist[x];
    if(self.withPrereq(classes[x].prerequisites, layer)){
      self.move(layer,c,layer+1);
      flag = false
    }
  }
  return flag;
}

 sortAllByYearMin(){
  for (let count1 = 0; count1 < self.courseList; count1++){
    let layer = courseList[count1];
    for(let count2 = layer.length ;count2>=0;count2--){
      let col = layer[count2];
        if(classes[col].minSemester> count1){
          self.move(count1, count2, classes[col].minSemester);
        }
      
    }
  }
}
sortAllPrerequisites(){
  let flag = true;
  while (flag){
    for (let count = self.courseList.length()-1; count>=0; count--){
      if(!(self.sortPrereqOneLayer(courseList[count]))){
        flag = false;
      }
    }
    if (flag){
      break
    }
    flag = true;
  }
}

 sortCoreqs(){
  for (let count1 = 0; count1<courseList.length(); count1++){
    let layer = courseList[count1];
    for(let count2 = layer.length()-1; count2>=0; count2--){
      if(self.hasCoreqinHigherLayer(classes[col].corequisites,count1) != false){
        self.move(count1, count2, self.hasCoreqinHigherLayer(classes[col].corequisites, count1));
      }
    }
  }
}

hasCoreqinHigherLayer(cos, layer){
  for(let co = 0; co<cos.length(); co++){
    for (let count = this.courseList.length()-1; count>=0; count--){
      let i = self.courseList[count];
      if(count<= layer){
        return false;
      }
      for(let x = 0;x<i;x++){
        if (x == co){
          return count;
        }
      }
    }
    return false;
  }
}

sortAll(){
  self.sortAllbyYearMin();
  self.sortAllPrerequisites();
  self.sortCoreqs();
  self.layerSortNumbers();
}

coreqIndex(self, layer, corequisite, defaul){
  for (index in list(self.courseList[layer])){
    course = self.courseList[layer][index];
    if (course == corequisite){
      return index;
    }
    return defaul;
  }
}

getTotalCreditHours(self){
  let sum = 0;
  for (let x = 0; x<self.courseList.length(); x++){
    let a = self.courselist[x];
    for (let y = 0; y<a.length(); y++){
      let b = a[y];
      sum += classes[b].credits;
    }
  }
  return sum;
}

swapForward(self, layer, index){
  self.courseList[layer][index], self.courseList[layer][index+1] = self.courseList[layer][index+1]/self.courseList[layer][index];
}
  
layerSortNumbers(self){
  flag = true;
  for(let course1 = 0; course1<courseList.length(); course1++){
    layer = self.courseList[count1];
      while (flag){
          for(let count2 = 0; count2<layer.length(); count2++){
            course = layer[count2];
              if((!(count2 + 1 == layer.length()) && course.courseType == self.courseList[count1][count2 + 1]) && (course > self.courseList[count1][count2 + 1])){
                  self.swapForward(count1, count2)
                  flag = False
              }
  }
          if (flag){
              break;
            }
  }
  }
          flag = True;
  }
  
}

