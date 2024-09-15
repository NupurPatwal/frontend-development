// let url = "https://catfact.ninja/fact";
// // let url = "https://icanhazdadjoke.com/";

// fetch(url) // fetch yani kuch leke aana toh kuch leke aaye.
//   .then((response) => {
//     // agr resp. sahi h toh print krwao
//     // console.log(response);
//     return response.json(); //data ko parse kr lo...
//   })
//   .then((data) => {
//     // agr wo cheezsuccessful ho gyi toh data ko print kro
//     console.log("data 1", data.fact);
//     return fetch(url);
//   })
//   .then((response) => {
//     // agr resp. sahi h toh print krwao
//     // console.log(response);
//     return response.json(); //data ko parse kr lo...
//   })
//   .then((data2) => {
//     console.log("data 2 = ", data2.fact);
//   })
//   .catch((err) => {
//     console.log("the ERROR is : ", err);
//   });

// console.log("I am a woke.");

// 2 Promises with async and await:-

// async function getFacts() {
//   try {
//     let resp = await fetch(url);
//     let data = await resp.json();
//     console.log(data.fact);
//     //   console.log(data);
//   } catch (error) {
//     console.log("error found: ", error);
//   }
// }

let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");
let para = document.querySelector(".result");

btn.addEventListener("click", async () => {
  let fact = await getFacts(url);
  console.log(fact);

  para.innerHTML = `The Random fact is :- ${fact}`;

  console.log("button was clicked.");
});

async function getFacts(url) {
  try {
    let res = await axios.get(url);
    // console.log(res.data.fact);
    return res.data.fact; // Return the fact to be used in the event listener
  } catch (error) {
    console.log(error);
    return "An error occurred while fetching the fact."; // Return a fallback message
  }
}
