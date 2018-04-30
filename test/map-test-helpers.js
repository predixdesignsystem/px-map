/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
