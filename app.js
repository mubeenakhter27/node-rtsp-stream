Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://streamer1.streamhost.org:1935/salive/GMIalfah',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-s': '550x330',
    '-r': 30 // options with required values specify the value after the key
  }
})