var btn = document.getElementById('modalBtn');
var modal = document.querySelector('.wrapperEl');
var span = document.querySelector('.closeBtn');

btn.addEventListener('click', function(e){
  e.preventDefault();
  
  modal.style.display = "block";
 
});

span.addEventListener('click', function(e){
  e.preventDefault();
  
  modal.style.display = "none";
})