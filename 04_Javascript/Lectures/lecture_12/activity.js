let url = "http://universities.hipolabs.com/search?name=";
let button = document.querySelector("button");

button.addEventListener("click", async (params) => {
  let country = document.querySelector("input").value;
  console.log(country);
  let collArr = await getColleges(country);
  show(collArr);

  // jaise hi button ko click kiya wse hi get colleges ko call lagayege.
  //   get colleges saare k saare colleges k data return krege.
  //   getColleges(country);
});
function show(collArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (const col of collArr) {
    console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

let country = "nepal";
async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Return name and state of the college.
