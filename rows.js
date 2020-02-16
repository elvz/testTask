(function() {
  const board = document.getElementById('board');

  render();

  function render() {
    const views = new Array();
    for (let i = 0; i < 7; i++) {
      views[i] = `<div class="row"></div>`;
    }
    board.innerHTML = views.join('');
  }
})();
