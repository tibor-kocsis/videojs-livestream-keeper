
const watchAndSeek = (player, options) => {

    const delayLimit = options && options.delayLimit ? options.delayLimit : 1;
    const seekBefore = options && options.seekBefore ? options.seekBefore : 0.5;

    if (player.paused()) {
        player.play();
    }
    if (!player.paused() && player.seekable() && player.seekable().length > 0) {
        var seekable = player.seekable().end(0);
        if (seekable - player.currentTime() > delayLimit) {
            console.log("seek to: " + (seekable - seekBefore) + " from: curr=" + player.currentTime() + " seekable.end=" + seekable);
            player.currentTime(seekable - seekBefore);
        }
    }
    setTimeout(watchAndSeek, 1000, player, options);
}

/**
 * The videojs plugin
 */
const liveStreamKeeper = function(options) {
    const player = this;
    player.ready(() => {
        watchAndSeek(player, options);
    });
}
videojs.registerPlugin('liveStreamKeeper', liveStreamKeeper);
