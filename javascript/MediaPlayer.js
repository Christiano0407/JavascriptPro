function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
};

MediaPlayer.prototype.play = function () {
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.toggleplay = function(){
    if(this.media.paused){
        this.media.play();
    }else{
        this.media.pause();
    }
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.unmuted = false;
}

MediaPlayer.prototype.togglemute = function() {
    if(this.media.muted) {
        this.mute();
    }else {
        this.unmute();
    }
}



export default MediaPlayer