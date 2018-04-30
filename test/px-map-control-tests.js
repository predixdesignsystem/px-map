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

describe('PxMap.LocateControl class', function () {
  var locateInst;

  beforeEach(function() {
    locateInst = new PxMap.LocateControl();
  });

  it('constructor creates a new `L.Control` instance', function() {
    expect(locateInst).to.be.an.instanceof(L.Control);
  });

  it('sets a default moveMaxZoom of null if none is defined when created', function() {
    expect(locateInst.options).to.be.an('object');
    expect(locateInst.options).to.have.property('moveMaxZoom');
    expect(locateInst.options.moveMaxZoom).to.equal(null);
  });

  it('sets its moveMaxZoom property to a given value when created', function() {
    var moveMaxZoomLocate = new PxMap.LocateControl({moveMaxZoom: 10});
    expect(moveMaxZoomLocate.options.moveMaxZoom).to.equal(10);
  });

  it('changes its moveMaxZoom property to a given number using setMoveMaxZoom method', function() {
    locateInst.setMoveMaxZoom(5);
    expect(locateInst.options.moveMaxZoom).to.equal(5);
  });

  it('changes its moveMaxZoom property to a given stringified number using setMoveMaxZoom method', function() {
    locateInst.setMoveMaxZoom("6");
    expect(locateInst.options.moveMaxZoom).to.equal(6);
  });

  it('calls the L.Map locate() method with its configured moveMaxZoom', function() {
    var moveMaxZoomLocate = new PxMap.LocateControl({moveMaxZoom: 10});

    // Stub out methods
    var locateFn = sinon.stub();
    moveMaxZoomLocate._map = {
      locate: locateFn
    }
    var setLocatingStateFn = sinon.stub(moveMaxZoomLocate, '_setLocatingState');

    moveMaxZoomLocate.locate();

    expect(locateFn).to.have.been.calledOnce;
    expect(locateFn).to.have.been.calledWithMatch({maxZoom: 10});
    expect(setLocatingStateFn).to.have.been.calledOnce;

    // Restore stub to original method
    setLocatingStateFn.restore();
  });
});
