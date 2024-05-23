function buscarPeliculas() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
      var title = cards[i].getElementsByClassName('card-info')[0].getElementsByTagName('h3')[0].innerText.toLowerCase();
      if (title.includes(input)) {
        cards[i].style.display = '';
      } else {
        cards[i].style.display = 'none';
      }
    }
  }