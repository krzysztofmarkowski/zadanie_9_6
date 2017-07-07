var add = document.getElementById('addElement');
var list = document.getElementById('list');
add.addEventListener('click', function(e) {
  var element = document.createElement('li');
  var howMuchElements = document.getElementsByTagName('li').length;
  element.innerHTML = 'item ' + howMuchElements;
  list.appendChild(element);
});