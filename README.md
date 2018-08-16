# videojs-livestream-keeper

Experimental video.js plugin handling chrome's and firefox's autoplay and 'video pause in background' features for live streams.

* In every seconds the plugin gets the end of the seekable timerange and seeks before it
* If player is paused, the plugin calls play

