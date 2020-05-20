let player = document.querySelector('.player');
let vid = document.querySelector('.layar');
let load = document.querySelector('#load');
let loading = document.querySelector('.proses');
const btnplaylg = document.querySelector('.playPrimary');
const btnplaysm = document.querySelector('#play');
const spMM = document.querySelector('#mm');
let wkt = document.querySelector('.waktu');
let live = document.querySelector('.live');
let stream = document.querySelector('.stream');
let myModal = document.querySelector('#auth');

/* background image player */

if (!vid.getAttribute("data-video")) {
    vid.style.backgroundImage = `url('https://i.imgur.com/fj81bxN.jpeg')`;
} else {
    vid.style.backgroundImage = `url('https://via.placeholder.com/150')`;
}

/* play button */

btnplaylg.addEventListener('click', function () {
    btnplaylg.style.display = 'none';
    offer();
}, false);

btnplaysm.addEventListener('click', function () {
    btnplaylg.style.display = 'none';
    offer();
}, false);

function offer() {
    if (btnplaysm.className == `icon-play`) {
        btnplaysm.classList.remove(`icon-play`);
        btnplaysm.classList.add(`icon-pause`);
    } else if (btnplaysm.className == `icon-pause`) {
        btnplaysm.classList.remove(`icon-pause`);
        btnplaysm.classList.add(`icon-play`);
    }
    load.classList.add(`loading2play`);
    loading.classList.add(`loading`);
    setTimeout(function () {
        load.classList.remove(`loading2play`);
        loading.classList.remove(`loading`);
        if (load.dataset.act == `auth`) {
            load.classList.add(`loginrequire`);
        } else if (load.dataset.act == `direct`) {
            window.location.href = load.dataset.offer;
        } else if (load.dataset.act == `modal`) {
            $('#auth').modal('show');
        } else {
            window.location.href = load.dataset.offer;
        }

    }, 2000);
}

/* Waktu */

if (wkt.dataset.waktu == 1) {
    live.style.display = 'block';
    stream.style.display = 'none';
} else if (wkt.dataset.waktu == 0) {
    live.style.display = 'none';
    stream.style.display = 'block';
}

/* Maximize and Minimaze */
spMM.addEventListener('click', function () {
    if (spMM.className == `icon-s-max`) {
        spMM.classList.remove(`icon-s-max`);
        spMM.classList.add(`icon-s-min`);
        openFullscreen()
    } else if (spMM.className == `icon-s-min`) {
        spMM.classList.remove(`icon-s-min`);
        spMM.classList.add(`icon-s-max`);
        closeFullscreen()
    }
}, false);

function openFullscreen() {
    if (player.requestFullscreen) {
        player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
        /* Firefox */
        player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        player.webkitRequestFullscreen();
    } else if (player.msRequestFullscreen) {
        /* IE/Edge */
        player.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}