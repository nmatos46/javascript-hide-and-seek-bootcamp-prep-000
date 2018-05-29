function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n){
  //get all li elements in an element with class "ranked-list"
  var ranks = document.getElementsByClassName('ranked-list').querySelectorAll('li')
  
  //iterate over all li elements to change them
  for (var i=0; i<ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
  
  
}