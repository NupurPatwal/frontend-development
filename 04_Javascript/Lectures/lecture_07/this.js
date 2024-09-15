const student = {
  name: "nupur",
  age: 23,
  position: "learning",
  maths: 85,
  english: 90,
  phy: 98,

  getAvg() {
    let avg = (this.maths + this.english + this.phy) / 3;
    console.log(this);

    // console.log(avg);
    console.log(`${this.name}`);
    return avg;
  },
};

function getAverg() {
  console.log(this);
}
//  to print objects: we do-->
// console.log(student.name);
// console.log(student["name"]);
// console.log(student["age"]);
console.log(student.getAvg());
