
// function discord() {
//   var discordContainer = document.querySelector('.container');
//   if (discordContainer.hasAttribute('hidden')) {
//     discordContainer.removeAttribute('hidden');
//     discordContainer.style.display = 'block'; // Explicitly set display to block
//   } else {
//     discordContainer.setAttribute('hidden', '');
//     discordContainer.style.display = 'none'; // Explicitly set display to none
//   }
// }

function discord() {
  var discordContainer = document.querySelector('.container');
  if (discordContainer.classList.contains('fade-in')) {
    discordContainer.classList.remove('fade-in');
    discordContainer.classList.add('fade-out');
  } else {
    discordContainer.classList.remove('fade-out');
    discordContainer.classList.add('fade-in');
  }
}