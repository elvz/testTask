let plays = document.querySelectorAll('.cell');

let group = [];

for (let i = 0; i < plays.length; i++) {
  plays[i].addEventListener('click', e => {
    group.push(plays[i]);
    if (plays[i].className === plays[i + 1].className) {
      group.push(plays[i + 1]);
    }
    if (plays[i].className === plays[i - 1].className) {
      group.push(plays[i - 1]);
    }
    if (plays[i].className === plays[i + 6].className) {
      group.push(plays[i + 6]);
    }
    if (plays[i].className === plays[i - 6].className) {
      group.push(plays[i - 6]);
    }
    e.preventDefault();
    group.forEach(el => {
      el.innerHTML = '';
    });
    console.log(group);
  });
}
