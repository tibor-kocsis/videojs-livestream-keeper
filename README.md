# videojs-livestream-keeper

Experimental video.js plugin handling chrome's and firefox's autoplay and 'video pause in background' features for live streams. This plugin used in a project to watch live streams from ip cameras (ip camera rtsp stream -> rtmp -> flv-websocket -> flv.js -> videojs-flvjs in browser)

* In every seconds the plugin gets the end of the seekable timerange and seeks before it
* If player is paused, the plugin calls play

# Usage

Install with npm:

```
npm i --save videojs-livestream-keeper
```

Insert into the html page, after videojs script

```
<script src="node_modules/videojs-livestream-keeper/dist/livestream-keeper.js"></script>
```

Activate the plugin:
```
var player = videojs('...', { ... }).liveStreamKeeper();
```
