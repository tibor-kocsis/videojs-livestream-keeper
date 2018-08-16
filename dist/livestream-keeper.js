(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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

},{}]},{},[1]);
