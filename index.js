let data

let searchBar = document.getElementById("searchQueryInput")
let searchButton = document.getElementById("searchQuerySubmit")
let page1 = document.getElementById("page1")
let page2 = document.getElementsByClassName("page2")
let secureLock = document.getElementById("secureLock")
let websiteName = document.getElementById("di211")
let ratingDiscription = document.getElementById("di221")
let proDiscBlock = document.getElementById("dprodisc2")
let di22 = document.getElementById("di22")
let dprodisc21 = document.getElementById("dprodisc21")
let dFunFactText2 = document.getElementById("dFunFactText2")
let dfunFact2 = document.getElementById("dfunFact2")
let dSummary2 = document.getElementById("dSummary2")
let dSummary2Text = document.getElementById("dSummary2Text")
let githubLink = document.getElementById("githubLink")


fetch('https://raw.githubusercontent.com/GustyCube/SafeSearch/main/data.json')
  .then((response) => response.json())
  .then((json) => {
    data = json
  });

function searchSiteEnter(evt) {
  if (evt.key == "Enter") {
    searchSite()
  }
}

function searchSite() {
  
  var searchTerm = searchBar.value.toLowerCase();

  if (!data[searchTerm]) {
    alert("No info found. You can contribute on the GitHub, or submit an issue..")
    return
  }
  console.log(searchTerm)
  page1.style.display = "none"
  page2[0].style.display = "block"
  secureLock.style.display = "inline"
  websiteName.innerHTML = data[searchTerm].URL
  document.getElementById("irating2").src = data[searchTerm].ratingImage
  ratingDiscription.innerHTML = data[searchTerm].ratingDisc
  proDiscBlock.style.display = "inline-block"
  dprodisc21.innerHTML = data[searchTerm].providedDescription
  dFunFactText2.innerHTML = data[searchTerm].funFact
  dfunFact2.style.display = "inline-block"
  dSummary2.style.display = "inline-block"
  dSummary2Text.innerHTML = data[searchTerm].summary
  githubLink.style.display = "none"
}




searchBar.addEventListener("keypress", searchSiteEnter)
searchButton.addEventListener("click", searchSite)
