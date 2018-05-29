function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n){
  //get all ul elements with class "ranked-list"
  var ranks = document.getElementsByClassName('ranked-list')
  
  //iterate over all ul elements to change their html
  for (var i=0; i<ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
  
}

function deepestChild(){
  var parent = document.querySelector('#grand-node')
  
  //implement a depth first search (Assumption: no child has more than 1 child)
  while (parent.children.length > 0) {
    //continue looping while parent has a child
    
    //search for children in the first child of parent
    parent = parent.children[0]
  }
  
  return parent
}