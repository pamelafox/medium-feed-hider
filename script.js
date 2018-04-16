
var removeElements = function(elems) {
  for (var i = 0; i < elems.length; i++) {
    elems[i].parentNode.removeChild(elems[i]);
  }
}
  
var makeLinkButton = function(text, link) {
  var button = document.createElement('a');
  button.className = "button button--small button--withChrome";
  button.appendChild(document.createTextNode(text));
  button.setAttribute('href', link);
  return button;
};

// Shows options on front page of Medium.com
var addOptions = function() {
  if (window.location.pathname !== "/") {
    removeElements(document.querySelectorAll(".medium-feed-hider-welcome"));
    return;
  } else if (document.querySelector(".medium-feed-hider-welcome")) {
    return;
  } 
  var usersName = document.querySelector('.avatar img').getAttribute('alt');
  var para = document.createElement('div');
  para.className = "medium-feed-hider-welcome";
  para.innerHTML = "Welcome, " + usersName || 'friend';
  para.innerHTML += "<br>What would you like to do today?";
  para.appendChild(document.createElement('br'));
  para.appendChild(makeLinkButton('Write something new', 'https://medium.com/new-story'));
  para.appendChild(document.createElement('br'));
  para.appendChild(makeLinkButton('Work on a draft', 'https://medium.com/me/stories/drafts'));
  document.body.appendChild(para);
};

window.onload = addOptions;
// Medium.com uses JS to change URLs, so we also need to poll to figure out whether to show/hide welcome bit
window.setInterval(addOptions, 1000);

