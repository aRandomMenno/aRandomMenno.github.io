function a(elementId) {
  for (let i = 1; i <= 6; i++) {
    const element = document.getElementById(i.toString());
    if (i === elementId) {
      element.hidden = false;
    } else {
      element.hidden = true;
    }
  }
}