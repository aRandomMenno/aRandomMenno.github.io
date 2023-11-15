function a(elementId) {
  for (let i = 1; i <= 7; i++) {
    const element = document.getElementById(i.toString());
    const button = document.querySelector(`button[onclick="a(${i})"]`);
    if (i === elementId) {
      element.hidden = false;
      button.classList.add('active');
    } else {
      element.hidden = true;
      button.classList.remove('active');
    }
  }
}


window.addEventListener('resize', function() {
  var height = window.innerHeight;
  var popup = document.getElementById('popup');
  if (height < 800 && !localStorage.getItem('hasPopupBeenShown')) {
    popup.style.display = 'flex';
    document.getElementById('close').addEventListener('click', function() {
      popup.style.display = 'none';
    });
    // Set the flag in localStorage
    localStorage.setItem('hasPopupBeenShown', 'true');
  }
});