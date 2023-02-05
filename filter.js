

//filter() is used to get all the students whose grades are greater than or equal to 90.
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
 console.log(studentGrades); // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 },
  // { name: 'Katie', grade: 90 } ]


  const letters=new Set(["a","b"]);

  letters.forEach(items=>
    console.log("Hello "+items)
    )

    console.log(letters.size);
    

    const letters1=new Set(["a1","b1"]);

  letters1.forEach((items,i,letter)=>
    letter[i]="hello "+items
    )

    console.log(letters1);