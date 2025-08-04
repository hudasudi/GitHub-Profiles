
const users = document.querySelector(".user");
const bio = document.querySelector(".bio");
const account = document.querySelector(".account");
const img =document.querySelector("img");
const repos = document.querySelector(".repositry");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const repositry = document.querySelector(".repos");


// github users api
const apiUrl = 'https://api.github.com/users/';

async function getUsers(user){
  // fetch github users api
  const response = await fetch(apiUrl + user); 
  // object in a json format
  let data = await response.json();

  if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".card").style.display = "none";
  }else{
     // update the html with the actual details
  users.innerHTML = data.name || "No name available";
  bio.innerHTML = data.bio || "No bio available";
  repos.innerHTML = data.public_repos;
  followers.innerHTML = data.followers;
  following.innerHTML = data.following;
  img.src = data.avatar_url;

  }
 }
 // get the user repos
 async function getRepos(users){
   const response = await fetch(`https://api.github.com/users/${users}/repos`); 
  let repos = await response.json();

  repositry.innerHTML="";

  repos.slice(0,10).forEach(repo => {
   const div = document.createElement("div");
   div.classList.add("repo")
   div.innerHTML = repo.name;
   repositry.appendChild(div); 
  });
 }

const form = document.querySelector("form")
const input = document.querySelector('input');

// press enter key in the input label
form.addEventListener("submit", function(e){
  e.preventDefault(); // preventing refreshing?
  const username = input.value.trim();
  if(username){
   
  getUsers(username);
  getRepos(username);
     document.querySelector(".error").style.display = "none";
     document.querySelector(".card").style.display = "block";
  }
  input.value = "";
});