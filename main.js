let plays = document.querySelectorAll('.cell');

let group = [];

for (let i = 0; i < plays.length; i++) {
  plays[i].addEventListener('click', e => {
    group.push(plays[i]);
    e.preventDefault();
    console.log(group);
  });
}