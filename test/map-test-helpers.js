function afterNextRender(cb) {
  requestAnimationFrame(() => {
    setTimeout(() => {
      cb();
    });
  });
};

/**
 * Waits for a flush then a render to happen 1 or more times before calling
 * its callback function. Useful for waiting a bit in your test `beforeEach`
 * hook for your fixture to initialize and go through a few renders before
 * you test it.

 * @param  {Function} callback Function to call when the flush+render cycle(s) have completed
 * @param  {[type]}   waitFor  Number of flush+render cycle(s) to wait for, default is 1
 */
function flushAndRender(callback, waitFor) {
  waitFor = waitFor || 1;
  let renderCount = 0;

  const doFlushAndRender = () => {
    flush(() => {
      afterNextRender(() => {
        renderCount++;
        if (renderCount === waitFor) {
          callback();
        }
        else {
          doFlushAndRender();
        }
      });
    });
  };
  doFlushAndRender();
};
