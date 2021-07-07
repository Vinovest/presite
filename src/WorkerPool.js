
import { resolve } from 'path'
import { Piscina } from 'piscina'
class ArrayTaskQueue extends TaskQueue {
  constructor(tasks){
    super();
    this.tasks = new Set();
    this.complete = new Set();
  }

  get size () { return this.tasks.length; }

  shift () {
    return this.tasks.shift();
  }

  push (task) {
    this.tasks.add(task);
  }

  remove (task) {
    const index = this.tasks.indexOf(task);
    assert.notStrictEqual(index, -1);
    this.tasks.splice(index, 1);
  }
}

const pool = new Piscina({
  filename: resolve(__dirname, 'worker.js'),
  maxQueue: 'auto'
});


pool.on('drain', () => {

    console.log('resuming...', counter, pool.queueSize);
    stream.resume();

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