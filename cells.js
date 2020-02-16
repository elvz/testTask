(function() {
  const rows = document.querySelectorAll('.row');

  function makeid(length) {
    let result = '';
    let characters = '♢♣♤♥';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      let randomSymbol = characters.charAt(Math.floor(Math.random() * charactersLength));
      result += `<div class="cell ${randomSymbol}">${randomSymbol}</div>`;
    }
    return result;
  }

  rows.forEach(row => {
    const views = new Array();
    for (let i = 0; i < 6; i++) {
      views[i] = `${makeid(1)}`;
    }
    row.innerHTML = views.join('');
  });
})();
