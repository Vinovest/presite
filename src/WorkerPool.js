
import { resolve } from 'path'
import { Piscina } from 'piscina'

const pool = new Piscina({
  filename: resolve(__dirname, 'worker.js'),
  maxQueue: 'auto'
});

const stream = getStreamSomehow();
stream.setEncoding('utf8');

pool.on('drain', () => {
  if (stream.isPaused()) {
    console.log('resuming...', counter, pool.queueSize);
    stream.resume();
  }
});

stream
  .on('data', (data) => {
    pool.run(data);
    if (pool.queueSize === pool.options.maxQueue) {
      console.log('pausing...', counter, pool.queueSize);
      stream.pause();
    }
  })
  .on('error', console.error)
  .on('end', () => {
    console.log('done');
  });