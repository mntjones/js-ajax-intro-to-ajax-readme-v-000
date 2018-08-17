
function showRepositiories(event, data) {
  // set to XMLHttpRequest object that fired the event
  
  console.log(this.responseText);
}

function getRepositories() {
  const req = new XMLHttpRequest();
  
  req.open("GET", "https://api.github.com/users/octocat/repos");
  
  req.send();
}


