const hamburger = document.querySelector('#icon-mobile');
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');

hamburger.addEventListener('click', function(event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

main.addEventListener('click', function(event) {
  drawer.classList.remove('open');
  event.stopPropagation();
});

router.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'information.html'));
});

module.exports = router;
