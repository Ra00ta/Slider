let indikiSlayd = 0;
const slaydlar = document.getElementsByClassName('slayd');

function slaydGöstər(n) {
  for (let i = 0; i < slaydlar.length; i++) {
    slaydlar[i].classList.remove('aktiv');
  }
  slaydlar[n].classList.add('aktiv');
}

function irəli() {
  indikiSlayd = (indikiSlayd + 1) % slaydlar.length;
  slaydGöstər(indikiSlayd);
}

function geri() {
  indikiSlayd = (indikiSlayd - 1 + slaydlar.length) % slaydlar.length;
  slaydGöstər(indikiSlayd);
}


setInterval(irəli, 3000);