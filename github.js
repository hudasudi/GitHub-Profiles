
// fetch('https://api.github.com/users/hudasudi')
// .then(res => res.json())
// .then(data => console.log(data))

const users = document.querySelector(".user");
const bio = document.querySelector(".bio");
const account = document.querySelector(".account");
const img =document.querySelector("img");
const repos = document.querySelector(".repositry");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const repo = document.querySelector(".repo");

// github users api
const apiUrl = 'https://api.github.com/users/';

async function getUsers(user){
  // fetch github users api
  const response = await fetch(apiUrl + user); 
  // object in a json format
  let data = await response.json();
  console.log(data); // will remove this later
  
  // update the html with the actual details
  users.innerHTML = data.name;
  bio.innerHTML = data.bio;
  repos.innerHTML = data.public_repos;
  followers.innerHTML = data.followers;
  following.innerHTML = data.following;
  img.src = data.avatar_url;


 }

const form = document.querySelector("form")
const input = document.querySelector('input');

// press enter key in the input label
form.addEventListener("submit", function(e){
  e.preventDefault(); // preventing refreshing?
  const username = input.value.trim();
  if(username){
  getUsers(username);
  document.querySelector(".card").style.display = "block";
  }
});