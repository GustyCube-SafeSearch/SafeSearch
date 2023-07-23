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


fetch('./data.json')
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
  if (!data[searchBar.value]) {
    alert("No info found. This website was created as an example, so there aren't many options yet! Try picking from the dropdown.")
    return
  }
  console.log(searchBar.value)
  page1.style.display = "none"
  page2[0].style.display = "block"
  secureLock.style.display = "inline"
  websiteName.innerHTML = data[searchBar.value].URL
  document.getElementById("irating2").src = data[searchBar.value].ratingImage
  ratingDiscription.innerHTML = data[searchBar.value].ratingDisc
  proDiscBlock.style.display = "inline-block"
  dprodisc21.innerHTML = data[searchBar.value].providedDescription
  dFunFactText2.innerHTML = data[searchBar.value].funFact
  dfunFact2.style.display = "inline-block"
  dSummary2.style.display = "inline-block"
  dSummary2Text.innerHTML = data[searchBar.value].summary
}




searchBar.addEventListener("keypress", searchSiteEnter)
searchButton.addEventListener("click", searchSite)