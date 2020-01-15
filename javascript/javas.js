import MediaPlayer from `./MediaPlayer.js`;
import Autoplay from `./plugins/Autoplay.js`;
import pause from `./plugins/pause`;

const video = document.querySelector(`video`);
const button = document.querySelector(`button`);
const btnMute = document.querySelector(`#muteButton`);


const player = new MediaPlayer({el: video, plugins: [new Autoplay(), new pause()]});
button.onclick = () => player.toggleplay();

btnMute.onclick = () => player.togglemute();
