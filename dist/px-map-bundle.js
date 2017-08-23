(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":23}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":24}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":25}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":26}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":27}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":28}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":29}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":30}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":31}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":32}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":33}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":34}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":35}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":36}],15:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/weak-map"), __esModule: true };
},{"core-js/library/fn/weak-map":37}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":7}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _getPrototypeOf = require("../core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
},{"../core-js/object/get-own-property-descriptor":8,"../core-js/object/get-prototype-of":9}],19:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":6,"../core-js/object/set-prototype-of":11,"../helpers/typeof":22}],20:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":22}],21:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":1,"../core-js/is-iterable":2}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":13,"../core-js/symbol/iterator":14}],23:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":113,"../modules/es6.string.iterator":126,"../modules/web.dom.iterable":133}],24:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":114,"../modules/es6.string.iterator":126,"../modules/web.dom.iterable":133}],25:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":53}],26:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":53,"../modules/es6.map":116,"../modules/es6.object.to-string":124,"../modules/es6.string.iterator":126,"../modules/es7.map.to-json":129,"../modules/web.dom.iterable":133}],27:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":53,"../../modules/es6.object.assign":117}],28:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":53,"../../modules/es6.object.create":118}],29:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":53,"../../modules/es6.object.define-property":119}],30:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};
},{"../../modules/_core":53,"../../modules/es6.object.get-own-property-descriptor":120}],31:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":53,"../../modules/es6.object.get-prototype-of":121}],32:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":53,"../../modules/es6.object.keys":122}],33:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":53,"../../modules/es6.object.set-prototype-of":123}],34:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
module.exports = require('../modules/_core').Set;
},{"../modules/_core":53,"../modules/es6.object.to-string":124,"../modules/es6.set":125,"../modules/es6.string.iterator":126,"../modules/es7.set.to-json":130,"../modules/web.dom.iterable":133}],35:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":53,"../../modules/es6.object.to-string":124,"../../modules/es6.symbol":127,"../../modules/es7.symbol.async-iterator":131,"../../modules/es7.symbol.observable":132}],36:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":110,"../../modules/es6.string.iterator":126,"../../modules/web.dom.iterable":133}],37:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/web.dom.iterable');
require('../modules/es6.weak-map');
module.exports = require('../modules/_core').WeakMap;
},{"../modules/_core":53,"../modules/es6.object.to-string":124,"../modules/es6.weak-map":128,"../modules/web.dom.iterable":133}],38:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],39:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],40:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],41:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":71}],42:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":62}],43:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":102,"./_to-iobject":104,"./_to-length":105}],44:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = require('./_ctx')
  , IObject  = require('./_iobject')
  , toObject = require('./_to-object')
  , toLength = require('./_to-length')
  , asc      = require('./_array-species-create');
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./_array-species-create":46,"./_ctx":54,"./_iobject":68,"./_to-length":105,"./_to-object":106}],45:[function(require,module,exports){
var isObject = require('./_is-object')
  , isArray  = require('./_is-array')
  , SPECIES  = require('./_wks')('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
},{"./_is-array":70,"./_is-object":71,"./_wks":111}],46:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":45}],47:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":48,"./_wks":111}],48:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],49:[function(require,module,exports){
'use strict';
var dP          = require('./_object-dp').f
  , create      = require('./_object-create')
  , redefineAll = require('./_redefine-all')
  , ctx         = require('./_ctx')
  , anInstance  = require('./_an-instance')
  , defined     = require('./_defined')
  , forOf       = require('./_for-of')
  , $iterDefine = require('./_iter-define')
  , step        = require('./_iter-step')
  , setSpecies  = require('./_set-species')
  , DESCRIPTORS = require('./_descriptors')
  , fastKey     = require('./_meta').fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_an-instance":40,"./_ctx":54,"./_defined":55,"./_descriptors":56,"./_for-of":62,"./_iter-define":74,"./_iter-step":75,"./_meta":79,"./_object-create":81,"./_object-dp":82,"./_redefine-all":94,"./_set-species":97}],50:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":42,"./_classof":47}],51:[function(require,module,exports){
'use strict';
var redefineAll       = require('./_redefine-all')
  , getWeak           = require('./_meta').getWeak
  , anObject          = require('./_an-object')
  , isObject          = require('./_is-object')
  , anInstance        = require('./_an-instance')
  , forOf             = require('./_for-of')
  , createArrayMethod = require('./_array-methods')
  , $has              = require('./_has')
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};
},{"./_an-instance":40,"./_an-object":41,"./_array-methods":44,"./_for-of":62,"./_has":64,"./_is-object":71,"./_meta":79,"./_redefine-all":94}],52:[function(require,module,exports){
'use strict';
var global         = require('./_global')
  , $export        = require('./_export')
  , meta           = require('./_meta')
  , fails          = require('./_fails')
  , hide           = require('./_hide')
  , redefineAll    = require('./_redefine-all')
  , forOf          = require('./_for-of')
  , anInstance     = require('./_an-instance')
  , isObject       = require('./_is-object')
  , setToStringTag = require('./_set-to-string-tag')
  , dP             = require('./_object-dp').f
  , each           = require('./_array-methods')(0)
  , DESCRIPTORS    = require('./_descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":40,"./_array-methods":44,"./_descriptors":56,"./_export":60,"./_fails":61,"./_for-of":62,"./_global":63,"./_hide":65,"./_is-object":71,"./_meta":79,"./_object-dp":82,"./_redefine-all":94,"./_set-to-string-tag":98}],53:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],54:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":38}],55:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],56:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":61}],57:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":63,"./_is-object":71}],58:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],59:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":87,"./_object-keys":90,"./_object-pie":91}],60:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":53,"./_ctx":54,"./_global":63,"./_hide":65}],61:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],62:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":41,"./_ctx":54,"./_is-array-iter":69,"./_iter-call":72,"./_to-length":105,"./core.get-iterator-method":112}],63:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],64:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],65:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":56,"./_object-dp":82,"./_property-desc":93}],66:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":63}],67:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":56,"./_dom-create":57,"./_fails":61}],68:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":48}],69:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":76,"./_wks":111}],70:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":48}],71:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],72:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":41}],73:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":65,"./_object-create":81,"./_property-desc":93,"./_set-to-string-tag":98,"./_wks":111}],74:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":60,"./_has":64,"./_hide":65,"./_iter-create":73,"./_iterators":76,"./_library":78,"./_object-gpo":88,"./_redefine":95,"./_set-to-string-tag":98,"./_wks":111}],75:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],76:[function(require,module,exports){
module.exports = {};
},{}],77:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":90,"./_to-iobject":104}],78:[function(require,module,exports){
module.exports = true;
},{}],79:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":61,"./_has":64,"./_is-object":71,"./_object-dp":82,"./_uid":108}],80:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":61,"./_iobject":68,"./_object-gops":87,"./_object-keys":90,"./_object-pie":91,"./_to-object":106}],81:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":41,"./_dom-create":57,"./_enum-bug-keys":58,"./_html":66,"./_object-dps":83,"./_shared-key":99}],82:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":41,"./_descriptors":56,"./_ie8-dom-define":67,"./_to-primitive":107}],83:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":41,"./_descriptors":56,"./_object-dp":82,"./_object-keys":90}],84:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":56,"./_has":64,"./_ie8-dom-define":67,"./_object-pie":91,"./_property-desc":93,"./_to-iobject":104,"./_to-primitive":107}],85:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":86,"./_to-iobject":104}],86:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":58,"./_object-keys-internal":89}],87:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],88:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":64,"./_shared-key":99,"./_to-object":106}],89:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":43,"./_has":64,"./_shared-key":99,"./_to-iobject":104}],90:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":58,"./_object-keys-internal":89}],91:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],92:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":53,"./_export":60,"./_fails":61}],93:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],94:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":65}],95:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":65}],96:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":41,"./_ctx":54,"./_is-object":71,"./_object-gopd":84}],97:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":53,"./_descriptors":56,"./_global":63,"./_object-dp":82,"./_wks":111}],98:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":64,"./_object-dp":82,"./_wks":111}],99:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":100,"./_uid":108}],100:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":63}],101:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":55,"./_to-integer":103}],102:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":103}],103:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],104:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":55,"./_iobject":68}],105:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":103}],106:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":55}],107:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":71}],108:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],109:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":53,"./_global":63,"./_library":78,"./_object-dp":82,"./_wks-ext":110}],110:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":111}],111:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":63,"./_shared":100,"./_uid":108}],112:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":47,"./_core":53,"./_iterators":76,"./_wks":111}],113:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":41,"./_core":53,"./core.get-iterator-method":112}],114:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":47,"./_core":53,"./_iterators":76,"./_wks":111}],115:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":39,"./_iter-define":74,"./_iter-step":75,"./_iterators":76,"./_to-iobject":104}],116:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.1 Map Objects
module.exports = require('./_collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./_collection":52,"./_collection-strong":49}],117:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":60,"./_object-assign":80}],118:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":60,"./_object-create":81}],119:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":56,"./_export":60,"./_object-dp":82}],120:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = require('./_to-iobject')
  , $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./_object-gopd":84,"./_object-sap":92,"./_to-iobject":104}],121:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":88,"./_object-sap":92,"./_to-object":106}],122:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":90,"./_object-sap":92,"./_to-object":106}],123:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":60,"./_set-proto":96}],124:[function(require,module,exports){

},{}],125:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.2 Set Objects
module.exports = require('./_collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./_collection":52,"./_collection-strong":49}],126:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":74,"./_string-at":101}],127:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":41,"./_descriptors":56,"./_enum-keys":59,"./_export":60,"./_fails":61,"./_global":63,"./_has":64,"./_hide":65,"./_is-array":70,"./_keyof":77,"./_library":78,"./_meta":79,"./_object-create":81,"./_object-dp":82,"./_object-gopd":84,"./_object-gopn":86,"./_object-gopn-ext":85,"./_object-gops":87,"./_object-keys":90,"./_object-pie":91,"./_property-desc":93,"./_redefine":95,"./_set-to-string-tag":98,"./_shared":100,"./_to-iobject":104,"./_to-primitive":107,"./_uid":108,"./_wks":111,"./_wks-define":109,"./_wks-ext":110}],128:[function(require,module,exports){
'use strict';
var each         = require('./_array-methods')(0)
  , redefine     = require('./_redefine')
  , meta         = require('./_meta')
  , assign       = require('./_object-assign')
  , weak         = require('./_collection-weak')
  , isObject     = require('./_is-object')
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
},{"./_array-methods":44,"./_collection":52,"./_collection-weak":51,"./_is-object":71,"./_meta":79,"./_object-assign":80,"./_redefine":95}],129:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":50,"./_export":60}],130:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Set', {toJSON: require('./_collection-to-json')('Set')});
},{"./_collection-to-json":50,"./_export":60}],131:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":109}],132:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":109}],133:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":63,"./_hide":65,"./_iterators":76,"./_wks":111,"./es6.array.iterator":115}],134:[function(require,module,exports){
'use strict';var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _get2=require('babel-runtime/helpers/get');var _get3=_interopRequireDefault(_get2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.ControlImpl={properties:{position:{type:String,value:'bottomright',observer:'shouldUpdateInst'}},addInst:function addInst(parent){this.elementInst.addTo(parent)},removeInst:function removeInst(parent){this.elementInst.remove()},getInstOptions:function getInstOptions(){return{position:this._getValidPosition()}},_getValidPosition:function _getValidPosition(){var positionIsValid=/^(topright|topleft|bottomright|bottomleft)$/.test(this.position);if(!positionIsValid){console.log('PX-MAP CONFIGURATION ERROR:\n          You entered an invalid `position` attribute \''+this.position+'\' for '+this.is+'.\n          Position must be a string with one of the following values:\n          - \'topright\'\n          - \'topleft\'\n          - \'bottomright\'\n          - \'bottomleft\'\n          Defaulting to \'bottomright\'.');return'bottomright'}return this.position}};PxMapBehavior.Control=[PxMapBehavior.Layer,PxMapBehavior.ControlImpl];PxMapBehavior.ZoomControlImpl={properties:{language:{type:String,value:'en'},resources:{type:Object,value:function value(){return{'en':{'Zoom in':'Zoom in','Zoom out':'Zoom out'}}}}},createInst:function createInst(options){return new PxMap.ZoomControl(options)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.position!==nextOptions.position){this.elementInst.setPosition(nextOptions.position)}},getInstOptions:function getInstOptions(){var options=PxMapBehavior.ControlImpl.getInstOptions.call(this);options.position=this.position;options.zoomInText='<px-icon icon="px-utl:add"></px-icon>';options.zoomOutText='<px-icon icon="px-utl:remove"></px-icon>';if(typeof this.localize==='function'){options.zoomInTitle=this.localize('Zoom in');options.zoomOutTitle=this.localize('Zoom out')}return options}};PxMapBehavior.ZoomControl=[Polymer.AppLocalizeBehavior,PxMapBehavior.Control,PxMapBehavior.ZoomControlImpl];PxMapBehavior.ScaleControlImpl={properties:{imperialUnits:{type:Boolean,value:false,observer:'shouldUpdateInst'},metricUnits:{type:Boolean,value:false,observer:'shouldUpdateInst'},reverseColors:{type:Boolean,value:false,observer:'shouldUpdateInst'}},createInst:function createInst(options){return new PxMap.ScaleControl(options)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.position!==nextOptions.position){this.elementInst.setPosition(nextOptions.position)}if(lastOptions.reverseColors!==nextOptions.reverseColors){this.elementInst.setReverseColors(nextOptions.reverseColors)}if(lastOptions.metric!==nextOptions.metric){this.elementInst.showMetric(nextOptions.metric)}if(lastOptions.imperial!==nextOptions.imperial){this.elementInst.showImperial(nextOptions.imperial)}},getInstOptions:function getInstOptions(){var options=PxMapBehavior.ControlImpl.getInstOptions.call(this);options.imperial=this.imperialUnits;options.metric=this.metricUnits;options.reverseColors=this.reverseColors;return options}};PxMapBehavior.ScaleControl=[PxMapBehavior.Control,PxMapBehavior.ScaleControlImpl];PxMapBehavior.LocateControlImpl={properties:{locateTitle:{type:String,value:'Zoom to your location',observer:'shouldUpdateInst'},moveToLocation:{type:Boolean,value:false},moveMaxZoom:{type:Number,observer:'shouldUpdateInst'},lastFoundLocation:{type:Object,value:function value(){return{}},notify:true}},addInst:function addInst(parent){PxMapBehavior.ControlImpl.addInst.call(this,parent);var foundFn=this._handleLocationFound.bind(this);var errorFn=this._handleLocationError.bind(this);var tapFn=this._handleLocationTap.bind(this);this.bindEvents({'locationfound':foundFn,'locationerror':errorFn,'controlclick':tapFn})},removeInst:function removeInst(parent){PxMapBehavior.ControlImpl.removeInst.call(this,parent)},createInst:function createInst(options){return new PxMap.LocateControl(options)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.position!==nextOptions.position){this.elementInst.setPosition(nextOptions.position)}if(lastOptions.moveMaxZoom!==nextOptions.moveMaxZoom){this.elementInst.setMoveMaxZoom(nextOptions.moveMaxZoom)}},getInstOptions:function getInstOptions(){return{position:this.position,locateIcon:'<px-icon icon="px-vis:crosshair"></px-icon>',locateTitle:this.locateTitle,moveToLocation:this.moveToLocation,moveMaxZoom:this.moveMaxZoom}},_handleLocationFound:function _handleLocationFound(evt){if(!evt)return;var detail={lat:evt.latitude||null,lng:evt.longitude||null,timestamp:evt.timestamp||null,bounds:evt.bounds||null};detail.accuracy=evt.bounds.getCenter()&&evt.bounds.getNorthWest()?evt.bounds.getCenter().distanceTo(evt.bounds.getNorthEast()):null;this.fire('px-map-control-locate-succeeded',detail);this.set('lastFoundLocation',detail);this.notifyPath('lastFoundLocation.*')},_handleLocationError:function _handleLocationError(evt){if(!evt)return;var detail={message:evt.message||null};this.fire('px-map-control-locate-failed',detail)},_handleLocationTap:function _handleLocationTap(evt){if(!evt||evt.action!=='locate')return;this.fire('px-map-locate-button-tapped')}};PxMapBehavior.LocateControl=[PxMapBehavior.Control,PxMapBehavior.LocateControlImpl];window.PxMap=window.PxMap||{};var ScaleControl=function(_L$Control$Scale){(0,_inherits3.default)(ScaleControl,_L$Control$Scale);function ScaleControl(){(0,_classCallCheck3.default)(this,ScaleControl);return(0,_possibleConstructorReturn3.default)(this,(ScaleControl.__proto__||(0,_getPrototypeOf2.default)(ScaleControl)).apply(this,arguments))}(0,_createClass3.default)(ScaleControl,[{key:'initialize',value:function initialize(options){(0,_get3.default)(ScaleControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ScaleControl.prototype),'initialize',this).call(this,options)}},{key:'onAdd',value:function onAdd(map){this.__scaleContainer=(0,_get3.default)(ScaleControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ScaleControl.prototype),'onAdd',this).call(this,map);if(this.options.reverseColors===true){L.DomUtil.addClass(this.__scaleContainer,'leaflet-control-scale--reverse')}return this.__scaleContainer}},{key:'onRemove',value:function onRemove(map){(0,_get3.default)(ScaleControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ScaleControl.prototype),'onRemove',this).call(this,map);this.__scaleContainer=null}},{key:'setReverseColors',value:function setReverseColors(shouldReverse){if(!this.__scaleContainer)return;if(shouldReverse&&!this.options.reverseColors){this.options.reverseColors=true;L.DomUtil.addClass(this.__scaleContainer,'leaflet-control-scale--reverse')}if(!shouldReverse&&this.options.reverseColors){this.options.reverseColors=false;L.DomUtil.removeClass(this.__scaleContainer,'leaflet-control-scale--reverse')}}},{key:'showImperial',value:function showImperial(shouldShowImperial){if(!this.__scaleContainer)return;if(shouldShowImperial&&!this.options.imperial&&!this._iScale){this._iScale=L.DomUtil.create('div','leaflet-control-scale-line',this.__scaleContainer);this.options.imperial=true}if(!shouldShowImperial&&this.options.imperial&&this._iScale){this.options.imperial=false;L.DomUtil.remove(this._iScale);this._iScale=null}this._update()}},{key:'showMetric',value:function showMetric(shouldShowMetric){if(!this.__scaleContainer)return;if(shouldShowMetric&&!this.options.metric&&!this._mScale){this._mScale=L.DomUtil.create('div','leaflet-control-scale-line',this.__scaleContainer);this.options.metric=true}if(!shouldShowMetric&&this.options.metric&&this._mScale){this.options.metric=false;L.DomUtil.remove(this._mScale);this._mScale=null}this._update()}}]);return ScaleControl}(L.Control.Scale);;PxMap.ScaleControl=ScaleControl;var ZoomControl=function(_L$Control$Zoom){(0,_inherits3.default)(ZoomControl,_L$Control$Zoom);function ZoomControl(){(0,_classCallCheck3.default)(this,ZoomControl);return(0,_possibleConstructorReturn3.default)(this,(ZoomControl.__proto__||(0,_getPrototypeOf2.default)(ZoomControl)).apply(this,arguments))}(0,_createClass3.default)(ZoomControl,[{key:'_zoomIn',value:function _zoomIn(e){(0,_get3.default)(ZoomControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ZoomControl.prototype),'_zoomIn',this).call(this,e);if(this._map&&this._map.fire){this._map.fire('controlclick',{src:this,action:'zoomin'})}}},{key:'_zoomOut',value:function _zoomOut(e){(0,_get3.default)(ZoomControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ZoomControl.prototype),'_zoomOut',this).call(this,e);if(this._map&&this._map.fire){this._map.fire('controlclick',{src:this,action:'zoomout'})}}},{key:'_fireZoomClickEvt',value:function _fireZoomClickEvt(evt){}}]);return ZoomControl}(L.Control.Zoom);;PxMap.ZoomControl=ZoomControl;var LocateControl=function(_L$Control){(0,_inherits3.default)(LocateControl,_L$Control);function LocateControl(){(0,_classCallCheck3.default)(this,LocateControl);return(0,_possibleConstructorReturn3.default)(this,(LocateControl.__proto__||(0,_getPrototypeOf2.default)(LocateControl)).apply(this,arguments))}(0,_createClass3.default)(LocateControl,[{key:'initialize',value:function initialize(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var defaultOptions={position:'bottomright',className:'',locateIcon:'<px-icon icon="px-utl:location"></px-icon>',locateTitle:'Zoom to your location',locateTimeout:10000,moveToLocation:true,moveMaxZoom:null};var composedOptions=(0,_assign2.default)(defaultOptions,options);L.Util.setOptions(this,composedOptions)}},{key:'onAdd',value:function onAdd(map){var locateName='leaflet-control-locate';this.__container=L.DomUtil.create('div',locateName+' leaflet-bar '+this.options.className);this.__locateButton=this._createButton(this.options.locateIcon,this.options.locateTitle,'leaflet-control-locate-button',this.__container);L.DomEvent.on(map,'locationfound',this._locationFound,this);L.DomEvent.on(map,'locationerror',this._locationError,this);L.DomEvent.disableClickPropagation(this.__locateButton);L.DomEvent.on(this.__locateButton,'click',L.DomEvent.stop);L.DomEvent.on(this.__locateButton,'click',this._locate,this);L.DomEvent.on(this.__locateButton,'click',this._refocusOnMap,this);return this.__container}},{key:'onRemove',value:function onRemove(map){L.DomEvent.off(map,'locationfound',this._locationFound,this);L.DomEvent.off(map,'locationerror',this._locationError,this);L.DomEvent.off(this.__locateButton,'click',L.DomEvent.stop);L.DomEvent.off(this.__locateButton,'click',this._locate,this);L.DomEvent.off(this.__locateButton,'click',this._refocusOnMap,this)}},{key:'setMoveMaxZoom',value:function setMoveMaxZoom(zoom){if(typeof zoom==='string'&&zoom.length&&!isNaN(zoom)){zoom=parseInt(zoom)}if(typeof zoom==='number'&&this.options.moveMaxZoom!==zoom){this.options.moveMaxZoom=zoom}}},{key:'on',value:function on(){var _map;if(!this._map){return undefined}return(_map=this._map).on.apply(_map,arguments)}},{key:'off',value:function off(){var _map2;if(!this._map){return undefined}return(_map2=this._map).off.apply(_map2,arguments)}},{key:'_locate',value:function _locate(evt){this._map.fire('controlclick',{src:this,action:'locate'});this.locate(evt)}},{key:'locate',value:function locate(){this.__locating=true;this._map.locate({setView:this.options.moveToLocation,maxZoom:this.options.moveMaxZoom,timeout:this.options.locateTimeout});this._setLocatingState()}},{key:'reset',value:function reset(){this._setReadyState()}},{key:'isDisabled',value:function isDisabled(){return this.__disabled||false}},{key:'_createButton',value:function _createButton(html,title,className,container,clickFn){var buttonEl=L.DomUtil.create('a',className,container);buttonEl.innerHTML=html;buttonEl.href='#';buttonEl.title=title;buttonEl.setAttribute('role','button');buttonEl.setAttribute('aria-label',title);return buttonEl}},{key:'_locationFound',value:function _locationFound(evt){if(this.__locating){this.__locating=false;this._setReadyState()}}},{key:'_locationError',value:function _locationError(evt){if(this.__locating){this.__locating=false;this._setReadyState()}}},{key:'_setLocatingState',value:function _setLocatingState(){if(!this.__locateButton||!this.__locating)return;L.DomUtil.addClass(this.__locateButton,'leaflet-control-locate-button--locating');this.__disabled=true;this._updateDisabled()}},{key:'_setReadyState',value:function _setReadyState(){if(!this.__locateButton||this.__locating)return;this.__locateButton.innerHTML=this.options.locateIcon;L.DomUtil.removeClass(this.__locateButton,'leaflet-control-locate-button--locating');L.DomUtil.removeClass(this.__locateButton,'leaflet-control-locate-button--error');this.__disabled=false;this._updateDisabled()}},{key:'_updateDisabled',value:function _updateDisabled(){if(!this.__locateButton)return;if(this.__disabled){L.DomUtil.addClass(this.__locateButton,'leaflet-control-locate-button--disabled')}if(!this.__disabled){L.DomUtil.removeClass(this.__locateButton,'leaflet-control-locate-button--disabled')}}}]);return LocateControl}(L.Control);;PxMap.LocateControl=LocateControl})();

},{"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/get":18,"babel-runtime/helpers/inherits":19,"babel-runtime/helpers/possibleConstructorReturn":20}],135:[function(require,module,exports){
'use strict';var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _weakMap=require('babel-runtime/core-js/weak-map');var _weakMap2=_interopRequireDefault(_weakMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.ElementImpl={beforeRegister:function beforeRegister(){this.elementInst=null},attached:function attached(){this.__elAttached=true},detached:function detached(){this.__elAttached=false},notifyInstReady:function notifyInstReady(){var isReady=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(!isReady)return false;this.fire('px-map-element-ready-to-add');return true},shouldAddInst:function shouldAddInst(){if(!this.elementInst){var options=this.__initialOptions=this.getInstOptions();this.elementInst=this.createInst(options);this.fire('px-map-element-instance-created')}this.__instEvents=this.__instEvents||[];this.__instEventsElementsMap=this.__instEventsElementsMap||new _weakMap2.default},shouldRemoveInst:function shouldRemoveInst(){this.unbindAllEvents(this.__instEvents,this.__instEventsElementsMap);this.__instEvents=null;this.__instEventsElementsMap=null},shouldUpdateInst:function shouldUpdateInst(){if(!this.elementInst&&this.__elAttached&&this.canAddInst()){this.notifyInstReady(this.canAddInst())}if(!this.elementInst)return;var lastOptions=this.__lastOptions||this.__initialOptions;var nextOptions=this.getInstOptions();this.updateInst(lastOptions,nextOptions);this.__lastOptions=nextOptions},createInst:function createInst(){throw new Error('The `createInst` method must be implemented.')},updateInst:function updateInst(){throw new Error('The `updateInst` method must be implemented.')},getInstOptions:function getInstOptions(){throw new Error('The `getInstOptions` method must be implemented.')},addInst:function addInst(){throw new Error('The `bindInst` method must be implemented.')},removeInst:function removeInst(){throw new Error('The `unbindInst` method must be implemented.')},extendObj:function extendObj(obj){if(!obj||!(obj instanceof Object))throw new Error('The first parameter of `extendObj` must be an object to be mutated.');for(var _len=arguments.length,properties=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){properties[_key-1]=arguments[_key]}if(properties.length){_assign2.default.apply(Object,[obj].concat(properties))}return obj},addProperties:function addProperties(){this.properties=this.properties||{};for(var _len2=arguments.length,properties=Array(_len2),_key2=0;_key2<_len2;_key2++){properties[_key2]=arguments[_key2]}if(properties.length){this.extend.apply(this,[this.properties].concat(properties))}return this.properties},bindEvents:function bindEvents(evts,target){if((typeof evts==='undefined'?'undefined':(0,_typeof3.default)(evts))!=='object'||!(0,_keys2.default)(evts).length)return;var el=target||this.elementInst;if(!el||!el.on)return;var boundEvts=this.__instEvents;var boundEvtEls=this.__instEventsElementsMap;for(var evtName in evts){var evtReference={name:evtName,fn:evts[evtName]};el.on(evtReference.name,evtReference.fn);boundEvts.push(evtReference);boundEvtEls.set(evtReference,el)}},unbindAllEvents:function unbindAllEvents(boundEvts,boundEvtEls){if(!boundEvts||!boundEvts.length||!boundEvtEls)return;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(boundEvts),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var evt=_step.value;var el=boundEvtEls.get(evt);if(!el||!el.off)continue;var name=evt.name,fn=evt.fn;el.off(name,fn);boundEvtEls.delete(evt)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}},isShadyScoped:function isShadyScoped(){return!Polymer.Settings.useNativeShadow},getShadyScope:function getShadyScope(){return'style-scope px-map'}};PxMapBehavior.Element=[PxMapBehavior.ElementImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":10,"babel-runtime/core-js/weak-map":15,"babel-runtime/helpers/typeof":22}],136:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.LayerGroupImpl={properties:{name:{type:String,notify:true}},createInst:function createInst(){return L.layerGroup()},updateInst:function updateInst(){return undefined},getInstOptions:function getInstOptions(){return{}}};PxMapBehavior.LayerGroup=[PxMapBehavior.Layer,PxMapBehavior.ParentLayer,PxMapBehavior.LayerGroupImpl]})();

},{}],137:[function(require,module,exports){
'use strict';var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMap=window.PxMap||{};var StaticIcon=function(){function StaticIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,StaticIcon);this.icon=this.createIcon(settings);return this.icon}(0,_createClass3.default)(StaticIcon,[{key:'createIcon',value:function createIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _settings$type=settings.type,type=_settings$type===undefined?'info':_settings$type,styleScope=settings.styleScope;var className=this._generateStaticIconClasses(type,styleScope);var html='\n        <div class="map-icon-static__wrapper">\n          <i class="map-icon-static__body"></i>\n          <i class="map-icon-static__descender"></i>\n          <i class="map-icon-static__badge"></i>\n        </div>\n      ';var iconSize=L.point(23,31);var iconAnchor=L.point(7.6,31);var popupAnchor=L.point(1,-31);var options={className:className,html:html,iconSize:iconSize,iconAnchor:iconAnchor,popupAnchor:popupAnchor};return L.divIcon(options)}},{key:'_generateStaticIconClasses',value:function _generateStaticIconClasses(type,styleScope){var classes=['map-icon','map-icon-static','map-icon-static--with-badge'];if(type&&type.length){classes.push('map-icon-static--'+type)}if(styleScope){classes.push(styleScope)}return classes.join(' ')}}]);return StaticIcon}();;PxMap.StaticIcon=StaticIcon;var SymbolIcon=function(){function SymbolIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,SymbolIcon);this.icon=this.createIcon(settings);return this.icon}(0,_createClass3.default)(SymbolIcon,[{key:'createIcon',value:function createIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _settings$type2=settings.type,type=_settings$type2===undefined?'info':_settings$type2,_settings$icon=settings.icon,icon=_settings$icon===undefined?'px-nav:favorite':_settings$icon,styleScope=settings.styleScope,_settings$stroke=settings.stroke,stroke=_settings$stroke===undefined?'currentColor':_settings$stroke,_settings$fill=settings.fill,fill=_settings$fill===undefined?'none':_settings$fill,_settings$strokeWidth=settings.strokeWidth,strokeWidth=_settings$strokeWidth===undefined?'2px':_settings$strokeWidth;var className=this._generateSymbolIconClasses(type,styleScope);var html='\n      <div class="map-icon-symbol__wrapper">\n        <i class="map-icon-symbol__body">\n          <div class="map-icon-symbol__symbol--container flex flex--middle flex--center">\n            <px-icon icon="'+icon+'" style="stroke:'+stroke+'; fill:'+fill+'; width:100%; height:100%; stroke-width:'+strokeWidth+'"></px-icon>\n          </div>\n        </i>\n        <i class="map-icon-symbol__descender"></i>\n        <i class="map-icon-symbol__badge"></i>\n      </div>\n      ';var iconSize=L.point(40,56);var iconAnchor=L.point(19.6,57);var popupAnchor=L.point(1,-58);var options={className:className,html:html,iconSize:iconSize,iconAnchor:iconAnchor,popupAnchor:popupAnchor};return L.divIcon(options)}},{key:'_generateSymbolIconClasses',value:function _generateSymbolIconClasses(type,styleScope){var classes=['map-icon','map-icon-symbol','map-icon-symbol--with-badge'];if(type&&type.length){classes.push('map-icon-symbol--'+type)}if(styleScope){classes.push(styleScope)}return classes.join(' ')}}]);return SymbolIcon}();;PxMap.SymbolIcon=SymbolIcon;var ClusterIcon=function(){function ClusterIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,ClusterIcon);this.icon=this.createIcon(settings);return this.icon}(0,_createClass3.default)(ClusterIcon,[{key:'createIcon',value:function createIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var count=settings.count,countByType=settings.countByType,colorsByType=settings.colorsByType,_settings$containerSi=settings.containerSize,containerSize=_settings$containerSi===undefined?50:_settings$containerSi,_settings$pathSize=settings.pathSize,pathSize=_settings$pathSize===undefined?10:_settings$pathSize,_settings$borderSize=settings.borderSize,borderSize=_settings$borderSize===undefined?0:_settings$borderSize,_settings$className=settings.className,className=_settings$className===undefined?'':_settings$className,styleScope=settings.styleScope;var chartSize=containerSize-(borderSize>0?borderSize*2-0.5:0);var iconSize=L.point(containerSize,containerSize);var svg=this._generateClusterIconSVG(countByType,colorsByType,chartSize,pathSize);var classes='map-icon-cluster '+(className||'')+' '+(styleScope||'');var html='\n        <div class="map-icon-cluster__container" style="width: '+containerSize+'px; height: '+containerSize+'px">\n          <i class="map-icon-cluster__svg">'+svg+'</i>\n          <div class="map-icon-cluster__body">'+count+'</div>\n        </div>\n      ';var options={iconSize:iconSize,className:classes,html:html};return L.divIcon(options)}},{key:'_generateClusterIconSVG',value:function _generateClusterIconSVG(countByType,colorsByType,chartSize,pathSize){var typeKeys=(0,_keys2.default)(countByType);var typeObjs=typeKeys.map(function(type){return{type:type,count:countByType[type],color:colorsByType[type]}});typeObjs.sort(function(a,b){return a.count-b.count});var types=[];var colors=[];var i=void 0,len=void 0,type=void 0,total=void 0;for(i=0,len=typeKeys.length;i<len;i++){type=typeKeys[i];total=countByType[type];types.push(countByType[type]);colors.push(colorsByType[type])}return this.createPieChart(types,colors,chartSize,pathSize)}},{key:'createPieChart',value:function createPieChart(groupsArray,colorsArray,chartSize,pathSize){var pieGeneratorFn=Px.d3.pie();var arcData=pieGeneratorFn(groupsArray);var radius=chartSize/2;var innerRadius=radius-pathSize;var arcPathGeneratorFn=Px.d3.arc().outerRadius(radius).innerRadius(innerRadius);var pathListTmpl=function pathListTmpl(paths){return paths.map(pathTmpl).join('')};var pathTmpl=function pathTmpl(pathData,pathIndex){return'<path d="'+arcPathGeneratorFn(pathData)+'" fill="'+colorsArray[pathIndex]+'" opacity="1"></path>'};return'\n        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+chartSize+'" height="'+chartSize+'">\n            <g transform="translate('+radius+', '+radius+')">\n                '+pathListTmpl(arcData)+'\n            </g>\n        </svg>\n      '}}]);return ClusterIcon}();;PxMap.ClusterIcon=ClusterIcon})();

},{"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17}],138:[function(require,module,exports){
'use strict';var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.GeoJSONLayerImpl={properties:{data:{type:Object,observer:'shouldUpdateInst'},featureStyle:{type:Object,observer:'shouldUpdateInst'},showFeatureProperties:{type:Boolean,value:false,observer:'shouldUpdateInst'}},update:function update(){if(!this.elementInst)return;this.shouldUpdateInst()},canAddInst:function canAddInst(){return this.data&&(0,_typeof3.default)(this.data)==='object'&&(0,_keys2.default)(this.data).length},addInst:function addInst(parent){var _this=this;var addedFn=this._handleFeatureAdded.bind(this);var removedFn=this._handleFeatureRemoved.bind(this);this.bindEvents({'layeradd':addedFn,'layerremove':removedFn});if(this.elementInst.getLayers().length!==0){this.elementInst.eachLayer(function(layer){_this.elementInst.fire('layeradd',{layer:layer})})}PxMapBehavior.LayerImpl.addInst.call(this,parent)},createInst:function createInst(options){var _this2=this;var styleAttributeProperties=this.getInstOptions().featureStyle;var geojsonLayer=L.geoJson(options.data,{pointToLayer:function pointToLayer(feature,latlng){var featureProperties=feature.properties.style||{};var attributeProperties=options.featureStyle;var style=_this2._getStyle(feature,featureProperties,attributeProperties);return new L.CircleMarker(latlng,style)},onEachFeature:function onEachFeature(feature,layer){if(!_this2.showFeatureProperties)return;_this2._bindPopup(feature,layer)},style:function style(feature){var featureProperties=feature.properties.style||{};return _this2._getStyle(featureProperties,styleAttributeProperties)}});return geojsonLayer},_getStyle:function _getStyle(featureProperties,attributeProperties){return{radius:featureProperties.radius||attributeProperties.radius||5,color:featureProperties.color||attributeProperties.color||'#3E87E8',fillColor:featureProperties.fillColor||attributeProperties.fillColor||'#88BDE6',weight:featureProperties.weight||attributeProperties.weight||2,opacity:featureProperties.opacity||attributeProperties.opacity||1,fillOpacity:featureProperties.fillOpacity||attributeProperties.fillOpacity||0.4}},_bindFeaturePopups:function _bindFeaturePopups(){var _this3=this;if(!this.elementInst)return;this.elementInst.eachLayer(function(layer){return _this3._bindPopup(layer.feature,layer)})},_bindPopup:function _bindPopup(feature,layer){var popupDataKeys=(0,_keys2.default)(feature.properties).filter(function(key){return feature.properties.hasOwnProperty(key)&&feature.properties[key]!=='unset'&&key!=='style'});if(!popupDataKeys.length)return;var popupData=popupDataKeys.reduce(function(accum,key){accum[key]=feature.properties[key];return accum},{});var popup=new PxMap.DataPopup({title:'Feature Properties',data:popupData,autoPanPadding:[1,1]});layer.bindPopup(popup)},_unbindFeaturePopups:function _unbindFeaturePopups(){var _this4=this;if(!this.elementInst)return;this.elementInst.eachLayer(function(layer){return _this4._unbindPopup(layer)})},_unbindPopup:function _unbindPopup(layer){if(typeof layer.getPopup()!=='undefined'){layer.unbindPopup()}},updateInst:function updateInst(lastOptions,nextOptions){var _this5=this;if(!(0,_keys2.default)(nextOptions.data).length){this.elementInst.clearLayers()}else if((0,_keys2.default)(nextOptions.data).length&&(lastOptions.dataHash!==nextOptions.dataHash||lastOptions.featureStyleHash!==nextOptions.featureStyleHash)){(function(){var styleAttributeProperties=_this5.getInstOptions().featureStyle;_this5.elementInst.clearLayers();_this5.elementInst.options.style=function(feature){var featureProperties=feature.properties.style||{};return _this5._getStyle(featureProperties,styleAttributeProperties)};_this5.elementInst.addData(nextOptions.data);if(nextOptions.showFeatureProperties){_this5._bindFeaturePopups()}})()}else if(lastOptions.showFeatureProperties!==nextOptions.showFeatureProperties){if(nextOptions.showFeatureProperties)this._bindFeaturePopups();if(!nextOptions.showFeatureProperties)this._unbindFeaturePopups()}},getInstOptions:function getInstOptions(){return{data:this.data||{},dataHash:(0,_stringify2.default)(this.data||{}),featureStyle:this.featureStyle||{},featureStyleHash:(0,_stringify2.default)(this.featureStyle||{}),showFeatureProperties:this.showFeatureProperties}},_handleFeatureAdded:function _handleFeatureAdded(evt){if(!evt||!evt.layer)return;evt.layer.on('click',this._handleFeatureTapped.bind(this));evt.layer.on('popupopen',this._handleFeaturePopupOpened.bind(this));evt.layer.on('popupclose',this._handleFeaturePopupClosed.bind(this));var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-layer-geojson-feature-added',detail)},_handleFeatureRemoved:function _handleFeatureRemoved(evt){if(!evt||!evt.layer)return;evt.layer.off();var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-layer-geojson-feature-removed',detail)},_handleFeatureTapped:function _handleFeatureTapped(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-tapped',detail)},_handleFeaturePopupOpened:function _handleFeaturePopupOpened(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-popup-opened',detail)},_handleFeaturePopupClosed:function _handleFeaturePopupClosed(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-popup-closed',detail)}};PxMapBehavior.GeoJSONLayer=[PxMapBehavior.Layer,PxMapBehavior.GeoJSONLayerImpl]})();

},{"babel-runtime/core-js/json/stringify":3,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/typeof":22}],139:[function(require,module,exports){
'use strict';var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _weakMap=require('babel-runtime/core-js/weak-map');var _weakMap2=_interopRequireDefault(_weakMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.LayerImpl={attached:function attached(){this.notifyInstReady(this.canAddInst())},detached:function detached(){this.shouldRemoveInst()},shouldAddInst:function shouldAddInst(parent){PxMapBehavior.ElementImpl.shouldAddInst.call(this,parent);if(this.elementInst&&parent){this.addInst(parent)};},shouldRemoveInst:function shouldRemoveInst(parent){PxMapBehavior.ElementImpl.shouldRemoveInst.call(this,parent);if(this.elementInst){this.removeInst(parent?parent:undefined)};},addInst:function addInst(parent){parent.addLayer(this.elementInst)},removeInst:function removeInst(parent){this.elementInst.remove()},canAddInst:function canAddInst(){return true}};PxMapBehavior.Layer=[PxMapBehavior.Element,PxMapBehavior.LayerImpl];PxMapBehavior.ParentLayerImpl={listeners:{'px-map-element-instance-created':'_tryToAddAllChildren','px-map-element-ready-to-add':'_tryToAddOneChild'},created:function created(){this._attachedChildren=this._attachedChildren||new _weakMap2.default},detached:function detached(){this._detachLayerChildren()},_tryToAddAllChildren:function _tryToAddAllChildren(evt){var localEvt=Polymer.dom(evt);if(!this.elementInst||localEvt.rootTarget!==this)return;this._attachLayerChildren()},_tryToAddOneChild:function _tryToAddOneChild(evt){var localEvt=Polymer.dom(evt);if(localEvt.rootTarget===this)return;evt.stopPropagation();if(!this.elementInst)return;this._attachLayerChild(localEvt.rootTarget)},_attachLayerChildren:function _attachLayerChildren(){var children=this.getEffectiveChildren();if(!children||!children.length)return;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(children),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var child=_step.value;this._attachLayerChild(child)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}},_attachLayerChild:function _attachLayerChild(childEl){var _this=this;if(this._attachedChildren.has(childEl)||!childEl.shouldAddInst||!childEl.canAddInst||!childEl.canAddInst())return;this._attachedChildren.set(childEl,true);this.async(function(){childEl.shouldAddInst(_this.elementInst)})},_detachLayerChildren:function _detachLayerChildren(){var children=this.getEffectiveChildren();if(!children||!children.length)return;var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=(0,_getIterator3.default)(children),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var child=_step2.value;this._detachLayerChild(child)}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}},_detachLayerChild:function _detachLayerChild(childEl){var _this2=this;if(!this._attachedChildren.has(childEl)||!childEl.shouldRemoveInst)return;this._attachedChildren.delete(childEl);this.async(function(){childEl.shouldRemoveInst(_this2.elementInst)})}};PxMapBehavior.ParentLayer=[PxMapBehavior.ParentLayerImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/weak-map":15}],140:[function(require,module,exports){
'use strict';var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _slicedToArray2=require('babel-runtime/helpers/slicedToArray');var _slicedToArray3=_interopRequireDefault(_slicedToArray2);var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _weakMap=require('babel-runtime/core-js/weak-map');var _weakMap2=_interopRequireDefault(_weakMap);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _set=require('babel-runtime/core-js/set');var _set2=_interopRequireDefault(_set);var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.MarkerGroupImpl={properties:{name:{type:String,notify:true},data:{type:Object,observer:'shouldUpdateInst'},colorsByType:{type:Object,value:function value(){return{'unknown':this.getComputedStyleValue('--internal-px-map-icon-unknown-color'),'info':this.getComputedStyleValue('--internal-px-map-icon-info-color'),'warning':this.getComputedStyleValue('--internal-px-map-icon-warning-color'),'important':this.getComputedStyleValue('--internal-px-map-icon-important-color')}}},iconFns:{type:Object,value:function value(){return{cluster:undefined,marker:undefined}}},clusterConfig:{type:Object}},update:function update(){if(!this.elementInst)return;var _getInstOptions=this.getInstOptions(),data=_getInstOptions.data;var features=this._syncDataWithMarkers(data.features,this.elementInst);this._notifyNewFeatures(features)},addInst:function addInst(parent){var spiderifyFn=this._handleClusterSpiderify.bind(this);var unspiderifyFn=this._handleClusterUnspiderify.bind(this);var markerTapFn=this._handleSingleMarkerTap.bind(this);var markerDoubleClickFn=this._handleSingleMarkerDoubleClick.bind(this);var clusterTapFn=this._handleClusterTap.bind(this);this.bindEvents({'spiderfied':spiderifyFn,'unspiderfied':unspiderifyFn,'click':markerTapFn,'dblclick':markerDoubleClickFn,'clusterclick':clusterTapFn});PxMapBehavior.LayerImpl.addInst.call(this,parent);this.async(function(){this.fire('px-map-marker-group-added')})},removeInst:function removeInst(parent){PxMapBehavior.LayerImpl.removeInst.call(this,parent)},createInst:function createInst(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var cluster=L.markerClusterGroup(options);if(options.data){var features=this._syncDataWithMarkers(options.data.features,cluster);this._notifyNewFeatures(features)}return cluster},updateInst:function updateInst(lastOptions,nextOptions){if(nextOptions.data){var features=this._syncDataWithMarkers(nextOptions.data.features,this.elementInst);this._notifyNewFeatures(features)}},getInstOptions:function getInstOptions(){var defaultOptions={showCoverageOnHover:true,maxClusterRadius:150,spiderifyOnMaxZoom:true,removeOutsideVisibleBounds:true,animate:true,polygonOptions:{stroke:true,color:this.getComputedStyleValue('--internal-px-map-marker-group-cluster-polygon-stroke-color'),fillColor:this.getComputedStyleValue('--internal-px-map-marker-group-cluster-polygon-fill-color'),fillOpacity:0.4}};var options=(0,_assign2.default)(defaultOptions,this.clusterConfig||{});options.data=this._getValidData();options.iconCreateFunction=this._createClusterIcon.bind(this);return options},_notifyNewFeatures:function _notifyNewFeatures(featureSet){if(!featureSet||!(featureSet instanceof _set2.default)||!featureSet.size)return;this.async(function _notifyNewFeaturesDebounce(){var bounds=L.latLngBounds();var feature=void 0;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(featureSet),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){feature=_step.value;bounds.extend([feature.geometry.coordinates[1],feature.geometry.coordinates[0]])}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}this.fire('px-map-marker-group-features-changed',{bounds:bounds})},1)},_getValidData:function _getValidData(){if(!this.data){return undefined}var dataIsNotValid=(0,_typeof3.default)(this.data)!=='object'||this.data.type!=='FeatureCollection'||!Array.isArray(this.data.features)||!this.data.features.length||(0,_typeof3.default)(this.data.features[0])!=='object';if(dataIsNotValid){console.log('PX-MAP CONFIGURATION ERROR:\n          The `data` attribute for '+this.is+' is not valid GeoJSON. Valid GeoJSON\n          that follows the FeatureCollection standard is required to draw the\n          marker clusters. See the GeoJSON spec website (http://geojson.org/geojson-spec.html)\n          for more information on what is required.\n\n          The minimum requirements for '+this.is+' are:\n          - Must be a valid JavaScript object (or deserializable to an object)\n          - Must have key `type` with value \'FeatureCollection\'\n          - Must have key `features` with value of an array with length\n          - Each entry in `features` must be a valid object\n        ');return undefined}return this.data},_createClusterIcon:function _createClusterIcon(cluster){if(this.iconFns.cluster){return this.iconFns.cluster.call(this,cluster)}var markers=cluster.getAllChildMarkers();var count=markers.length;var types=this._indexClusterMarkersByType(markers);var colors=this.colorsByType;var containerSize=this._getClusterIconSize(count);var pathSize=this._getStyleValueAsNum('--internal-px-map-marker-group-cluster-path-size')||10;var borderSize=this._getStyleValueAsNum('--internal-px-map-marker-group-cluster-border-size')||0;var options={count:count,countByType:types,colorsByType:colors,containerSize:containerSize,pathSize:pathSize,borderSize:borderSize,styleScope:this.isShadyScoped()?this.getShadyScope():undefined};return new PxMap.ClusterIcon(options)},_getStyleValueAsNum:function _getStyleValueAsNum(styleValName){this.__styleVals=this.__styleVals||{};if(this.__styleVals[styleValName])return this.__styleVals[styleValName];var computedVal=this.getComputedStyleValue(styleValName);if(computedVal&&computedVal.indexOf('px')!==-1){var valWithoutSuffix=computedVal.replace('px','');var valAsNum=Math.floor(valWithoutSuffix);this.__styleVals[styleValName]=valAsNum;return valAsNum}else{return undefined}},_getClusterIconSize:function _getClusterIconSize(count){if(count<10){return 60}if(count>=10&&count<40){return 75}if(count>40){return 90}},_indexClusterMarkersByType:function _indexClusterMarkersByType(markers){return markers.reduce(function(types,marker){if(marker.featureProperties&&marker.featureProperties['marker-icon']&&marker.featureProperties['marker-icon']['icon-type']){types[marker.featureProperties['marker-icon']['icon-type']]=(types[marker.featureProperties['marker-icon']['icon-type']]||0)+1}return types},{})},_syncDataWithMarkers:function _syncDataWithMarkers(newFeatures,clusterInst){if(!newFeatures.length)return;var featuresSet=this._features=this._features||new _set2.default;var markersMap=this._markers=this._markers||new _weakMap2.default;var _diffNewFeatures=this._diffNewFeatures(newFeatures,featuresSet,markersMap),featuresToAdd=_diffNewFeatures.featuresToAdd,featuresToUpdate=_diffNewFeatures.featuresToUpdate,featuresToRemove=_diffNewFeatures.featuresToRemove,nextFeaturesSet=_diffNewFeatures.nextFeaturesSet,nextMarkersMap=_diffNewFeatures.nextMarkersMap;var feature=void 0,cachedMarker=void 0,markersToOperate=void 0;if(featuresToAdd.size){markersToOperate=[];var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=(0,_getIterator3.default)(featuresToAdd),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){feature=_step2.value;cachedMarker=nextMarkersMap.get(feature);cachedMarker.marker=this._createMarker(feature);markersToOperate.push(cachedMarker.marker);nextMarkersMap.set(feature,cachedMarker)}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}clusterInst.addLayers(markersToOperate);markersToOperate=null}if(featuresToUpdate.size){markersToOperate=[];var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=(0,_getIterator3.default)(featuresToUpdate),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){feature=_step3.value;cachedMarker=nextMarkersMap.get(feature);cachedMarker.marker=this._updateMarker(feature,cachedMarker.marker);markersToOperate.push(cachedMarker.marker);nextMarkersMap.set(feature,cachedMarker)}}catch(err){_didIteratorError3=true;_iteratorError3=err}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return()}}finally{if(_didIteratorError3){throw _iteratorError3}}}clusterInst.refreshClusters(markersToOperate);markersToOperate=null}if(featuresToRemove.size){markersToOperate=[];var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=(0,_getIterator3.default)(featuresToRemove),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){feature=_step4.value;cachedMarker=nextMarkersMap.get(feature);markersToOperate.push(cachedMarker.marker);nextMarkersMap.delete(feature)}}catch(err){_didIteratorError4=true;_iteratorError4=err}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return()}}finally{if(_didIteratorError4){throw _iteratorError4}}}clusterInst.removeLayers(markersToOperate);markersToOperate=null}this._features=nextFeaturesSet;this._markers=nextMarkersMap;featuresSet.clear();featuresToAdd.clear();featuresToUpdate.clear();featuresToRemove.clear();return this._features},_diffNewFeatures:function _diffNewFeatures(newFeatures,lastFeatureSet,markerMap){var nextFeaturesSet=new _set2.default;var featuresToAdd=new _set2.default;var featuresToUpdate=new _set2.default;var i=void 0,len=void 0,valid=void 0,known=void 0,cachedMarker=void 0,featureHash=void 0;for(i=0,len=newFeatures.length;i<len;i++){valid=newFeatures[i].id&&newFeatures[i].geometry&&newFeatures[i].geometry.type==='Point'&&newFeatures[i].geometry.coordinates instanceof Array&&newFeatures[i].geometry.coordinates.length===2;if(!valid)continue;known=lastFeatureSet.has(newFeatures[i]);if(!known){featuresToAdd.add(newFeatures[i]);lastFeatureSet.delete(newFeatures[i]);nextFeaturesSet.add(newFeatures[i]);cachedMarker={marker:null,hash:(0,_stringify2.default)(newFeatures[i])};markerMap.set(newFeatures[i],cachedMarker);continue}if(known){cachedMarker=markerMap.get(newFeatures[i]);featureHash=(0,_stringify2.default)(newFeatures[i]);if(cachedMarker.hash!==featureHash){featuresToUpdate.add(newFeatures[i]);cachedMarker.hash=featureHash;markerMap.set(newFeatures[i],cachedMarker)}lastFeatureSet.delete(newFeatures[i]);nextFeaturesSet.add(newFeatures[i])}}var featuresToRemove=lastFeatureSet.size?lastFeatureSet:new _set2.default;lastFeatureSet=null;return{featuresToAdd:featuresToAdd,featuresToUpdate:featuresToUpdate,featuresToRemove:featuresToRemove,nextFeaturesSet:nextFeaturesSet,nextMarkersMap:markerMap}},_createMarker:function _createMarker(feature){var _feature$geometry$coo=(0,_slicedToArray3.default)(feature.geometry.coordinates,2),lat=_feature$geometry$coo[0],lng=_feature$geometry$coo[1];var marker=L.marker([lng,lat]);var iconSettings=feature.properties['marker-icon']?this._extractMarkerIconSettings(feature.properties['marker-icon']):{};iconSettings.base=iconSettings.base||'static-icon';iconSettings.type=iconSettings.type||'info';var icon=this._createMarkerIcon(iconSettings);marker.setIcon(icon);marker.featureProperties=feature.properties;return marker},_updateMarker:function _updateMarker(feature,marker){var _marker$getLatLng=marker.getLatLng(),lat=_marker$getLatLng.lat,lng=_marker$getLatLng.lng;var _feature$geometry$coo2=(0,_slicedToArray3.default)(feature.geometry.coordinates,2),nextLng=_feature$geometry$coo2[0],nextLat=_feature$geometry$coo2[1];if(lat!==Number(nextLat)||lng!==Number(nextLng)){marker.setLatLng([nextLat,nextLng])}var iconSettings=feature.properties['marker-icon']?this._extractMarkerIconSettings(feature.properties['marker-icon']):{};iconSettings.base=iconSettings.base||'static-icon';iconSettings.type=iconSettings.type||'info';var icon=this._createMarkerIcon(iconSettings);marker.setIcon(icon);marker.featureProperties=feature.properties;return marker},_extractMarkerIconSettings:function _extractMarkerIconSettings(featSettings){var featSettingsKeys=(0,_keys2.default)(featSettings);if(!featSettingsKeys.length)return undefined;var iconSettings={};var i=void 0,len=void 0,featKeyCamelized=void 0;for(i=0,len=featSettingsKeys.length;i<len;i++){if(featSettingsKeys[i].substring(0,5)!=='icon-')continue;featKeyCamelized=featSettingsKeys[i].substring(5).replace(/(\-[a-z])/g,function(match){return match.charAt(1).toUpperCase()});iconSettings[featKeyCamelized]=featSettings[featSettingsKeys[i]]}return iconSettings},_createMarkerIcon:function _createMarkerIcon(options){if(this.iconFns.marker){return this.iconFns.marker.call(this,options)}options.styleScope=this.isShadyScoped()?this.getShadyScope():undefined;var klassName=this._strToKlassName(options.base);return new PxMap[klassName](options)},_strToKlassName:function _strToKlassName(str){return str.charAt(0).toUpperCase()+str.substring(1).replace(/(\-[a-z])/g,function(match){return match.charAt(1).toUpperCase()})},_handleClusterSpiderify:function _handleClusterSpiderify(evt){if(!evt||!evt.cluster||!evt.cluster._icon)return;evt.cluster._icon.style.visibility='hidden'},_handleClusterUnspiderify:function _handleClusterUnspiderify(evt){if(!evt||!evt.cluster||!evt.cluster._icon)return;evt.cluster._icon.style.visibility='visible'},_handleSingleMarkerTap:function _handleSingleMarkerTap(evt){if(evt.layer&&evt.layer.getLatLng()instanceof L.LatLng){var latLng=L.latLng(evt.layer.getLatLng());var lat=latLng.lat,lng=latLng.lng;var detail={latLng:latLng,lat:lat,lng:lng,feature:evt.layer.featureProperties?evt.layer.featureProperties:undefined};this.fire('px-map-marker-group-marker-tapped',detail)}if(evt.layer&&evt.layer.featureProperties&&evt.layer.featureProperties.hasOwnProperty('marker-popup')){this._bindAndOpenPopup(evt.layer)}},_handleSingleMarkerDoubleClick:function _handleSingleMarkerDoubleClick(evt){var latLng=L.latLng(evt.layer.getLatLng());var lat=latLng.lat,lng=latLng.lng;var detail={latLng:latLng,lat:lat,lng:lng,feature:evt.layer.featureProperties?evt.layer.featureProperties:undefined};this.fire('px-map-marker-group-marker-double-clicked',detail)},_handleClusterTap:function _handleClusterTap(evt){var latLngBounds=evt.layer.getBounds();var markers=evt.layer.getAllChildMarkers();var features=[];for(var i=0;i<markers.length;i++){features.push(markers[i].featureProperties)}var detail={bounds:latLngBounds,features:features};this.fire('px-map-marker-group-cluster-tapped',detail)},_bindAndOpenPopup:function _bindAndOpenPopup(marker){if(!marker||!marker.bindPopup||!marker.openPopup)return;var popupSettings=this._featSettingsToProps(marker.featureProperties['marker-popup'],'popup');if(!popupSettings||!(0,_keys2.default)(popupSettings).length)return;var klassName=popupSettings._Base&&PxMap.hasOwnProperty(popupSettings._Base)?popupSettings._Base:'InfoPopup';var popup=new PxMap[klassName](popupSettings);marker.bindPopup(popup).openPopup();marker.__boundCloseFn=this._unbindAndClosePopup.bind(this,marker);marker.on('popupclose',marker.__boundCloseFn)},_unbindAndClosePopup:function _unbindAndClosePopup(marker){if(!marker||!marker.getPopup||!marker.getPopup())return;marker.off('popupclose',marker.__boundCloseFn);marker.__boundCloseFn=null;marker.closePopup().unbindPopup()},_featSettingsToProps:function _featSettingsToProps(settings,prefix){var keys=(0,_keys2.default)(settings);if(!keys.length)return undefined;var settingsAsProps={};var i=0,len=keys.length,newKey=void 0;for(;i<len;i++){if(prefix&&keys[i].substr(0,prefix.length)!==prefix){continue}if(/^[A-Za-z]+\-base$/.test(keys[i])){settingsAsProps['_Base']=this._strToKlassName(settings[keys[i]]);continue}newKey=keys[i].replace(/^[A-Za-z]+\-(.*)$/,'$1');settingsAsProps[newKey]=settings[keys[i]]}return settingsAsProps}};PxMapBehavior.MarkerGroup=[PxMapBehavior.Layer,PxMapBehavior.MarkerGroupImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/json/stringify":3,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":10,"babel-runtime/core-js/set":12,"babel-runtime/core-js/weak-map":15,"babel-runtime/helpers/slicedToArray":21,"babel-runtime/helpers/typeof":22}],141:[function(require,module,exports){
'use strict';var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};window.PxMap=window.PxMap||{};PxMapBehavior.MarkerImpl={properties:{lat:{type:Number,notify:true,observer:'shouldUpdateInst'},lng:{type:Number,notify:true,observer:'shouldUpdateInst'},name:{type:String,notify:true,observer:'shouldUpdateInst'}},canAddInst:function canAddInst(){return this.latLngIsValid(this.lat,this.lng,true)},_canBeNum:function _canBeNum(val){return!isNaN(val)&&val!==''},latLngIsValid:function latLngIsValid(lat,lng,hideError){var isValid=typeof lat!=='undefined'&&this._canBeNum(lat)&&typeof lng!=='undefined'&&this._canBeNum(lng);if(isValid)return true;if(!hideError){console.log('PX-MAP CONFIGURATION ERROR:\n        You entered an invalid `lat` or `lng` attribute for '+this.is+'. You must pass a valid number.')}return false},addInst:function addInst(parent){var addedFn=this._handleMarkerAdded.bind(this);var removedFn=this._handleMarkerRemoved.bind(this);var tapFn=this._handleMarkerTapped.bind(this);this.bindEvents({'add':addedFn,'remove':removedFn,'click':tapFn},this.marker);PxMapBehavior.LayerImpl.addInst.call(this,parent)},removeInst:function removeInst(parent){this._handleMarkerRemoved();PxMapBehavior.LayerImpl.removeInst.call(this,parent)},createInst:function createInst(options){this.marker=L.marker(options.geometry,options.config);this.marker.isMarker=true;return this.marker},updateInst:function updateInst(lastOptions,nextOptions){var geomWasDefined=(0,_typeof3.default)(lastOptions.geometry)==='object';var geomIsDefined=(0,_typeof3.default)(nextOptions.geometry)==='object';var geomIsDifferent=geomWasDefined&&geomIsDefined&&(lastOptions.geometry.lat!==nextOptions.geometry.lat||lastOptions.geometry.lng!==nextOptions.geometry.lng);if(geomWasDefined&&!geomIsDefined){this.elementInst.setOpacity(0)}if(!geomWasDefined&&geomIsDefined){this.elementInst.setLatLng(nextOptions.geometry);this.elementInst.setOpacity(1)}if(geomIsDifferent){this.elementInst.setLatLng(nextOptions.geometry)}if(lastOptions.config.icon!==nextOptions.config.icon){this.elementInst.setIcon(nextOptions.config.icon)}},getInstOptions:function getInstOptions(){var geometry=this.getLatLng();var config={};config.title=this.name||'';config.icon=this.getMarkerIcon();return{geometry:geometry,config:config}},getLatLng:function getLatLng(){if(this.latLngIsValid(this.lat,this.lng)){return L.latLng(this.lat,this.lng)}},getMarkerIcon:function getMarkerIcon(){throw new Error('The `getMarkerIcon` method must be implemented.')},_handleMarkerAdded:function _handleMarkerAdded(){var latLng=this.getLatLng();var detail={};if(latLng){detail.latLng=latLng;detail.lat=latLng.lat;detail.lng=latLng.lng}this.fire('px-map-marker-added',detail)},_handleMarkerRemoved:function _handleMarkerRemoved(){var latLng=this.getLatLng();var detail={};if(latLng){detail.latLng=latLng;detail.lat=latLng.lat;detail.lng=latLng.lng}this.fire('px-map-marker-removed',detail)},_handleMarkerTapped:function _handleMarkerTapped(){var latLng=this.getLatLng();var detail={};if(latLng){detail.latLng=latLng;detail.lat=latLng.lat;detail.lng=latLng.lng}this.fire('px-map-marker-tapped',detail)}};PxMapBehavior.Marker=[PxMapBehavior.Layer,PxMapBehavior.ParentLayer,PxMapBehavior.MarkerImpl];PxMapBehavior.SymbolMarkerImpl={properties:{type:{type:String,reflectToAttribute:true,value:'info',observer:'_updateMarkerIcon'},icon:{type:String,observer:'_updateMarkerIcon'}},getMarkerIcon:function getMarkerIcon(){if(!this.markerIcon){var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.SymbolIcon(options)}return this.markerIcon},_updateMarkerIcon:function _updateMarkerIcon(){if(!this.markerIcon)return;var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.SymbolIcon(options);this.shouldUpdateInst()},_getMarkerIconOptions:function _getMarkerIconOptions(){return{type:this.type,symbol:this.symbolClass,icon:this.icon,styleScope:this.isShadyScoped()?this.getShadyScope():undefined,stroke:this.getComputedStyleValue('--iron-icon-stroke-color'),strokeWidth:this.getComputedStyleValue('--iron-icon-stroke-width'),fill:this.getComputedStyleValue('--iron-icon-fill-color')}}};PxMapBehavior.SymbolMarker=[PxMapBehavior.Marker,PxMapBehavior.SymbolMarkerImpl];PxMapBehavior.StaticMarkerImpl={properties:{type:{type:String,reflectToAttribute:true,value:'info',observer:'_updateMarkerIcon'}},getMarkerIcon:function getMarkerIcon(){if(!this.markerIcon){var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.StaticIcon(options)}return this.markerIcon},_updateMarkerIcon:function _updateMarkerIcon(){if(!this.markerIcon)return;var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.StaticIcon(options);this.shouldUpdateInst()},_getMarkerIconOptions:function _getMarkerIconOptions(){return{type:this.type||'',styleScope:this.isShadyScoped()?this.getShadyScope():undefined}}};PxMapBehavior.StaticMarker=[PxMapBehavior.Marker,PxMapBehavior.StaticMarkerImpl];PxMapBehavior.LocateMarkerImpl={properties:{accuracy:{type:Number,observer:'shouldUpdateInst'}},createInst:function createInst(options){this.markerBaseIcon=new CircleMarkerWithTitle(options.geometry,options.baseConfig);this.markerAccuracyIcon=L.circle(options.geometry,options.accuracyRadius,options.accuracyConfig);this.markerGroup=L.featureGroup([this.markerAccuracyIcon,this.markerBaseIcon]);this.markerGroup.isMarker=true;this.markerGroup.getLatLng=this.getLatLng.bind(this);return this.markerGroup},updateInst:function updateInst(lastOptions,nextOptions){var geomWasDefined=(0,_typeof3.default)(lastOptions.geometry)==='object';var geomIsDefined=(0,_typeof3.default)(nextOptions.geometry)==='object';var geomIsDifferent=geomWasDefined&&geomIsDefined&&(lastOptions.geometry.lat!==nextOptions.geometry.lat||lastOptions.geometry.lng!==nextOptions.geometry.lng);if(geomWasDefined&&!geomIsDefined){this.markerBaseIcon.setStyle({opacity:0,fillOpacity:0});this.markerAccuracyIcon.setStyle({opacity:0,fillOpacity:0})}if(!geomWasDefined&&geomIsDefined){this.markerBaseIcon.setLatLng(nextOptions.geometry);this.markerAccuracyIcon.setLatLng(nextOptions.geometry);this.markerBaseIcon.setStyle(nextOptions.baseConfig);this.markerAccuracyIcon.setStyle(nextOptions.accuracyConfig)}if(geomIsDifferent){this.markerBaseIcon.setLatLng(nextOptions.geometry);this.markerAccuracyIcon.setLatLng(nextOptions.geometry)}if(lastOptions.accuracyRadius!==nextOptions.accuracyRadius){this.markerAccuracyIcon.setRadius(nextOptions.accuracyRadius)}if(lastOptions.baseConfig.title!==nextOptions.baseConfig.title){this.markerBaseIcon.setTitle(nextOptions.baseConfig.title)}},getInstOptions:function getInstOptions(){var geometry=this.getLatLng();var baseConfig={};baseConfig.radius=7.5;baseConfig.stroke=true;baseConfig.color=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-border-color');baseConfig.weight=3;baseConfig.opacity=1;baseConfig.fill=true;baseConfig.fillColor=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-color');baseConfig.fillOpacity=1;baseConfig.className='map-marker-locate-base '+(this.isShadyScoped()?this.getShadyScope():'');baseConfig.title=this.name||'';var accuracyRadius=this.accuracy||0;var accuracyConfig={};accuracyConfig.stroke=false;accuracyConfig.opacity=0;accuracyConfig.fill=true;accuracyConfig.fillColor=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-accuracy-color');accuracyConfig.fillOpacity=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-accuracy-opacity');accuracyConfig.className='map-marker-locate-accuracy '+(this.isShadyScoped()?this.getShadyScope():'');return{geometry:geometry,baseConfig:baseConfig,accuracyRadius:accuracyRadius,accuracyConfig:accuracyConfig}}};PxMapBehavior.LocateMarker=[PxMapBehavior.Marker,PxMapBehavior.LocateMarkerImpl];var CircleMarkerWithTitle=L.CircleMarker.extend({options:{title:''},setTitle:function setTitle(title){this.options.title=title||'';if(this._path&&this.options.title===''){this._path.innerHTML=''}if(this._path&&this.options.title!==''){this._path.innerHTML='<title>'+this.options.title+'</title>'}},onAdd:function onAdd(){L.CircleMarker.prototype.onAdd.call(this);if(this.options.title!==''){this._path.innerHTML='<title>'+this.options.title+'</title>'}}});PxMap.CircleMarkerWithTitle=CircleMarkerWithTitle})();

},{"babel-runtime/helpers/typeof":22}],142:[function(require,module,exports){
'use strict';var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.PopupImpl={properties:{closeOnControlInteract:{type:Boolean,value:false}},addInst:function addInst(parent){if(parent&&parent.getPopup&&parent.getPopup()!==this.elementInst){parent.bindPopup(this.elementInst);var controlClickFn=this._handleControlClick.bind(this,parent);this.bindEvents({'controlclick':controlClickFn},parent._mapToAdd)}},removeInst:function removeInst(parent){if(parent&&parent.getPopup&&parent.getPopup()===this.elementInst){parent.unbindPopup(this.elementInst)}},_handleControlClick:function _handleControlClick(parent){if(this.closeOnControlInteract&&parent&&parent.closePopup){parent.closePopup()}}};PxMapBehavior.Popup=[PxMapBehavior.Layer,PxMapBehavior.PopupImpl];PxMapBehavior.InfoPopupImpl={properties:{title:{type:String,observer:'shouldUpdateInst'},description:{type:String,observer:'shouldUpdateInst'},imgSrc:{type:String,observer:'shouldUpdateInst'}},createInst:function createInst(options){return new PxMap.InfoPopup(options)},updateInst:function updateInst(lastOptions,nextOptions){var updates={};if(lastOptions.title!==nextOptions.title){updates.title=nextOptions.title}if(lastOptions.description!==nextOptions.description){updates.description=nextOptions.description}if(lastOptions.imgSrc!==nextOptions.imgSrc){updates.imgSrc=nextOptions.imgSrc}if((0,_keys2.default)(updates).length){this.elementInst.updateSettings(updates)}},getInstOptions:function getInstOptions(){return{title:this.title,description:this.description,imgSrc:this.imgSrc,styleScope:this.isShadyScoped()?this.getShadyScope():undefined}}};PxMapBehavior.InfoPopup=[PxMapBehavior.Popup,PxMapBehavior.InfoPopupImpl];PxMapBehavior.DataPopupImpl={properties:{title:{type:String,observer:'shouldUpdateInst'},data:{type:Object,value:function value(){return{}},observer:'shouldUpdateInst'}},canAddInst:function canAddInst(){return this.data&&(0,_typeof3.default)(this.data)==='object'&&(0,_keys2.default)(this.data).length},createInst:function createInst(options){return new PxMap.DataPopup(options)},updateInst:function updateInst(lastOptions,nextOptions){var updates={};if(lastOptions.title!==nextOptions.title){updates.title=nextOptions.title}if(lastOptions.dataHash!==nextOptions.dataHash){updates.data=nextOptions.data}if((0,_keys2.default)(updates).length){this.elementInst.updateSettings(updates)}},getInstOptions:function getInstOptions(){var data=this._getValidData();return{title:this.title,data:data,dataHash:(0,_stringify2.default)(data),styleScope:this.isShadyScoped()?this.getShadyScope():undefined}},_getValidData:function _getValidData(){if((0,_typeof3.default)(this.data)!=='object'){console.log('PX-MAP CONFIGURATION ERROR:\n          You entered an invalid `data` attribute for '+this.is+'. You must pass a valid object.\n          An attribute of type `'+(0,_typeof3.default)(this.data)+'` was passed.');return{}}return this.data}};PxMapBehavior.DataPopup=[PxMapBehavior.Popup,PxMapBehavior.DataPopupImpl];window.PxMap=window.PxMap||{};var InfoPopup=function(_L$Popup){(0,_inherits3.default)(InfoPopup,_L$Popup);function InfoPopup(){var _ret;var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,InfoPopup);var _this=(0,_possibleConstructorReturn3.default)(this,(InfoPopup.__proto__||(0,_getPrototypeOf2.default)(InfoPopup)).call(this));_this._createPopup(settings);return _ret=_this,(0,_possibleConstructorReturn3.default)(_this,_ret)}(0,_createClass3.default)(InfoPopup,[{key:'onAdd',value:function onAdd(map){if(map.__addShadyScope){var srcPane=this.getPane();var srcFn=srcPane.appendChild;srcPane.appendChild=function(el){map.__addShadyScope(el,false);Polymer.dom(srcPane).appendChild(el)}}L.Popup.prototype.onAdd.call(this,map);if(map.__addShadyScope){srcPane.appendChild=srcFn}}},{key:'_updateContent',value:function _updateContent(){if(this._map&&this._map.__addShadyScope&&this._content.length){var srcNode=this._contentNode;var fakeNode={innerHTML:null};this._contentNode=fakeNode}L.DivOverlay.prototype._updateContent.call(this);if(this._map&&this._map.__addShadyScope&&this._content.length){if(typeof fakeNode.innerHTML==='string'){Polymer.dom(srcNode).innerHTML=fakeNode.innerHTML}this._contentNode=srcNode}}},{key:'_createPopup',value:function _createPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.settings=settings;var title=settings.title,description=settings.description,imgSrc=settings.imgSrc,styleScope=settings.styleScope;var content=this._generatePopupContent(title,description,imgSrc);var className='map-popup-info '+(styleScope||'');var maxWidth=400;var minWidth=300;this.initialize({className:className,maxWidth:maxWidth,minWidth:minWidth});this.setContent(content)}},{key:'_generatePopupContent',value:function _generatePopupContent(title,description,imgSrc){var _this2=this;var tmplFnIf=function tmplFnIf(fn){for(var _len=arguments.length,vals=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){vals[_key-1]=arguments[_key]}return vals.length&&vals[0]!==undefined?fn.call.apply(fn,[_this2].concat(vals)):''};var imgTmpl=function imgTmpl(imgSrc){return'\n        <div class="map-box-info__image">\n          <img src="'+imgSrc+'" />\n        </div>\n      '};var titleTmpl=function titleTmpl(title){return'\n        <p class="map-box-info__title">'+title+'</p>\n      '};var descriptionTmpl=function descriptionTmpl(description){return'\n        <p class="map-box-info__description">'+description+'</p>\n      '};return'\n        <section class="map-box-info">\n          '+tmplFnIf(imgTmpl,imgSrc)+'\n          <div class="map-box-info__content">\n            '+tmplFnIf(titleTmpl,title)+'\n            '+tmplFnIf(descriptionTmpl,description)+'\n          </div>\n        </section>\n      '}},{key:'updateSettings',value:function updateSettings(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_assign2.default)(this.settings,settings);var _settings=this.settings,title=_settings.title,description=_settings.description,imgSrc=_settings.imgSrc,styleScope=_settings.styleScope;var content=this._generatePopupContent(title,description,imgSrc);this.setContent(content);this.update()}}]);return InfoPopup}(L.Popup);;PxMap.InfoPopup=InfoPopup;var DataPopup=function(_L$Popup2){(0,_inherits3.default)(DataPopup,_L$Popup2);function DataPopup(){var _ret2;var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,DataPopup);var _this3=(0,_possibleConstructorReturn3.default)(this,(DataPopup.__proto__||(0,_getPrototypeOf2.default)(DataPopup)).call(this));_this3._createPopup(settings);return _ret2=_this3,(0,_possibleConstructorReturn3.default)(_this3,_ret2)}(0,_createClass3.default)(DataPopup,[{key:'onAdd',value:function onAdd(map){if((0,_typeof3.default)(this.settings.data)!=='object'||(0,_keys2.default)(this.settings.data).length===0){return}if(map.__addShadyScope){var srcPane=this.getPane();var srcFn=srcPane.appendChild;srcPane.appendChild=function(el){map.__addShadyScope(el,false);Polymer.dom(srcPane).appendChild(el)}}L.Popup.prototype.onAdd.call(this,map);if(map.__addShadyScope){srcPane.appendChild=srcFn}}},{key:'_updateContent',value:function _updateContent(){if(this._map&&this._map.__addShadyScope&&this._content.length){var srcNode=this._contentNode;var fakeNode={innerHTML:null};this._contentNode=fakeNode}L.DivOverlay.prototype._updateContent.call(this);if(this._map&&this._map.__addShadyScope&&this._content.length){if(typeof fakeNode.innerHTML==='string'){Polymer.dom(srcNode).innerHTML=fakeNode.innerHTML}this._contentNode=srcNode}}},{key:'_createPopup',value:function _createPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.settings=settings;var title=settings.title,data=settings.data,styleScope=settings.styleScope;var content=this._generatePopupContent(title,data);var className='map-popup-data '+(styleScope||'');var maxWidth=400;var minWidth=300;this.initialize({className:className,maxWidth:maxWidth,minWidth:minWidth});this.setContent(content)}},{key:'_generatePopupContent',value:function _generatePopupContent(title,data){var _this4=this;var tmplFnIf=function tmplFnIf(fn){for(var _len2=arguments.length,vals=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){vals[_key2-1]=arguments[_key2]}return vals.length&&vals[0]!==undefined?fn.call.apply(fn,[_this4].concat(vals)):''};var titleTmpl=function titleTmpl(title){return'\n        <div class="map-data-box__header">\n          <h3 class="map-data-box__header__text">'+title+'</h3>\n        </div>\n      '};var dataTmpl=function dataTmpl(data){var dataList=(0,_keys2.default)(data).reduce(function(accum,key){return accum.concat([dataItemTmpl(key,data[key])])},[]).join('');return'\n          <div class="map-data-box__table">\n            '+dataList+'\n          </div>\n        '};var dataItemTmpl=function dataItemTmpl(label,value){return'\n        <div class="map-data-box__table__cell"><p>'+label+'</p></div>\n        <div class="map-data-box__table__cell"><p>'+value+'</p></div>\n      '};return'\n        <section class="map-box-data">\n          '+tmplFnIf(titleTmpl,title)+'\n          '+tmplFnIf(dataTmpl,data)+'\n        </section>\n      '}},{key:'updateSettings',value:function updateSettings(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_assign2.default)(this.settings,settings);var _settings2=this.settings,title=_settings2.title,data=_settings2.data;var content=this._generatePopupContent(title,data);if(this.isOpen()&&(0,_keys2.default)(data).length===0){this._close()}this.setContent(content);this.update()}}]);return DataPopup}(L.Popup);;PxMap.DataPopup=DataPopup})();

},{"babel-runtime/core-js/json/stringify":3,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/inherits":19,"babel-runtime/helpers/possibleConstructorReturn":20,"babel-runtime/helpers/typeof":22}],143:[function(require,module,exports){
'use strict';var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _map=require('babel-runtime/core-js/map');var _map2=_interopRequireDefault(_map);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.TrackMarkersImpl={properties:{fitToMarkers:{type:Boolean,value:false,observer:'_fitMapToMarkersIfSet'},fitToMarkersPadding:{type:Number,value:0.15},fitToMarkersZoom:{type:String,value:'max'}},addInst:function addInst(parent){this.listen(this,'px-map-marker-added','_handleMarkerAdded');this.listen(this,'px-map-marker-group-features-changed','_handleMarkerGroupUpdated');this._knownMarkers=this._knownMarkers||new _map2.default;PxMapBehavior.LeafletRootImpl.addInst.call(this)},removeInst:function removeInst(parent){this.unlisten(this,'px-map-marker-added','_handleMarkerAdded');this.unlisten(this,'px-map-marker-group-features-changed','_handleMarkerGroupUpdated');if(this._knownMarkers&&this._knownMarkers instanceof _map2.default){this._knownMarkers.clear()}this._knownMarkers=null;PxMapBehavior.LeafletRootImpl.removeInst.call(this)},_handleMarkerAdded:function _handleMarkerAdded(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);if(localEvt.rootTarget&&localEvt.rootTarget.elementInst&&localEvt.event.detail.latLng){this._knownMarkers.set(localEvt.rootTarget.elementInst,localEvt.event.detail.latLng);this.listen(localEvt.rootTarget,'px-map-marker-removed','_handleMarkerRemoved');this._fitMapToMarkersIfSet()}},_handleMarkerRemoved:function _handleMarkerRemoved(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);var knownMarker=this._knownMarkers.has(localEvt.rootTarget.elementInst||null);if(knownMarker){this.unlisten(localEvt.rootTarget,'px-map-marker-removed','_handleMarkerRemoved');this._knownMarkers.delete(localEvt.rootTarget.elementInst)}},_handleMarkerGroupUpdated:function _handleMarkerGroupUpdated(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);var knownMarker=this._knownMarkers.has(localEvt.rootTarget.elementInst||null);if(localEvt.rootTarget&&localEvt.rootTarget.elementInst){if(!knownMarker){this.listen(localEvt.rootTarget,'px-map-marker-group-removed','_handleMarkerGroupRemoved')}this._knownMarkers.set(localEvt.rootTarget.elementInst,localEvt.event.detail.bounds);this._fitMapToMarkersIfSet()}},_handleMarkerGroupRemoved:function _handleMarkerGroupRemoved(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);var knownMarker=this._knownMarkers.has(localEvt.rootTarget.elementInst||null);if(knownMarker){this.unlisten(localEvt.rootTarget,'px-map-marker-group-removed','_handleMarkerGroupRemoved');this._knownMarkers.delete(localEvt.rootTarget.elementInst)}},_fitMapToMarkers:function _fitMapToMarkers(){this.debounce('fit-map-to-bounds',function(){if(!this._knownMarkers||!this._knownMarkers.size)return;var bounds=this._markersToBoundsWithPadding(this._knownMarkers,this.fitToMarkersPadding);if(bounds&&bounds.isValid()){var latLng=bounds.getCenter();var zoom=this._getZoomLevelForFit(bounds,this.fitToMarkersZoom,this.elementInst);this.elementInst.setView(latLng,zoom)}},10)},_markersToBoundsWithPadding:function _markersToBoundsWithPadding(markersMap,padding){if(!markersMap||!markersMap.size)return;var bounds=L.latLngBounds();var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(markersMap.values()),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var value=_step.value;if(value instanceof L.LatLng||value instanceof L.LatLngBounds){bounds.extend(value)}}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}if(bounds.isValid()&&typeof padding==='number'){bounds=bounds.pad(padding)}return bounds},_getZoomLevelForFit:function _getZoomLevelForFit(bounds,fitSetting,map){if(fitSetting==='min'){var zoom=map.getMinZoom()||0;return zoom}if(fitSetting==='max'){var _zoom=map.getBoundsZoom(bounds,true)-1;return _zoom}},_fitMapToMarkersIfSet:function _fitMapToMarkersIfSet(){if(!this.elementInst||!this.fitToMarkers)return;this._fitMapToMarkers()},fitMapToMarkers:function fitMapToMarkers(){if(!this.elementInst||!this._knownMarkers||!this._knownMarkers.size){return false}this._fitMapToMarkers();return true}};PxMapBehavior.LeafletRootImpl={properties:{crs:{type:Object},lat:{type:Number,value:37.7672375,notify:true,observer:'shouldUpdateInst'},lng:{type:Number,value:-121.9584131,notify:true,observer:'shouldUpdateInst'},zoom:{type:Number,value:10,notify:true,observer:'shouldUpdateInst'},maxZoom:{type:Number,observer:'shouldUpdateInst'},minZoom:{type:Number,observer:'shouldUpdateInst'},maxBounds:{type:Array,observer:'shouldUpdateInst'},disableDragging:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableScrollZoom:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableTouchZoom:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableAttribution:{type:Boolean,value:false},attributionPrefix:{type:String,value:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>',observer:'shouldUpdateInst'},flexToSize:{type:Boolean,reflectToAttribute:true,value:false}},attached:function attached(){this.listen(this,'px-map-element-ready-to-add','shouldAddInst');if(this.canAddInst()){this.fire('px-map-element-ready-to-add')}},detached:function detached(){this.unlisten(this,'px-map-element-ready-to-add','shouldAddInst');this.shouldRemoveInst();this.removeInst()},shouldAddInst:function shouldAddInst(evt){if(Polymer.dom(evt).rootTarget!==this)return;PxMapBehavior.ElementImpl.shouldAddInst.call(this);this.addInst()},canAddInst:function canAddInst(){if(typeof this.zoom!=='undefined'&&this._canBeNum(this.zoom)){return this.latLngIsValid(this.lat,this.lng,true)}},createInst:function createInst(options){var mapEl=Polymer.dom(this.root).querySelector('#map');var mapInst=L.map(mapEl,options);mapInst.attributionControl.setPrefix(options.attributionPrefix);if(this.isShadyScoped()){mapInst.__addShadyScope=this.scopeSubtree.bind(this)}return mapInst},addInst:function addInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,true)}var mapMoveFn=this._handleMapMove.bind(this);var zoomStartFn=this._handleZoomStart.bind(this);var zoomEndFn=this._handleZoomEnd.bind(this);this.bindEvents({'moveend':mapMoveFn,'zoomstart':zoomStartFn,'zoomend':zoomEndFn})},removeInst:function removeInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,false)}},getInstOptions:function getInstOptions(){var options={};options.zoomControl=false;options.crs=this.crs||L.CRS.EPSG3857;options.center=[this.lat,this.lng];options.zoom=this.zoom;options.minZoom=this.minZoom||0;options.maxZoom=this.maxZoom||18;options.maxBounds=this.maxBounds||undefined;options.dragging=!this.disableDragging;options.scrollWheelZoom=!this.disableScrollZoom;options.touchZoom=!this.disableTouchZoom;options.attributionControl=!this.disableAttribution;options.attributionPrefix=this.attributionPrefix;return options},updateInst:function updateInst(lastOptions,nextOptions){if(this.latLngIsValid(nextOptions.center[0],nextOptions.center[1])&&(lastOptions.center[0]!==nextOptions.center[0]||lastOptions.center[1]!==nextOptions.center[1]||lastOptions.zoom!==nextOptions.zoom)){this._updateMapView()}if(lastOptions.maxZoom!==nextOptions.maxZoom&&!isNaN(nextOptions.maxZoom)){this.setMaxZoom(nextOptions.maxZoom)}if(lastOptions.minZoom!==nextOptions.minZoom&&!isNaN(nextOptions.minZoom)){this.setMinZoom(nextOptions.minZoom)}if(lastOptions.maxBounds!==nextOptions.maxBounds&&!isNaN(nextOptions.maxBounds)){this.setMaxBounds(nextOptions.maxBounds)}if(!lastOptions.dragging&&nextOptions.dragging){this.elementInst.dragging.enable()}if(lastOptions.dragging&&!nextOptions.dragging){this.elementInst.dragging.disable()}if(!lastOptions.scrollWheelZoom&&nextOptions.scrollWheelZoom){this.elementInst.scrollWheelZoom.enable()}if(lastOptions.scrollWheelZoom&&!nextOptions.scrollWheelZoom){this.elementInst.scrollWheelZoom.disable()}if(!lastOptions.touchZoom&&nextOptions.touchZoom){this.elementInst.touchZoom.enable()}if(lastOptions.touchZoom&&!nextOptions.touchZoom){this.elementInst.touchZoom.disable()}if(lastOptions.attributionPrefix!==nextOptions.attributionPrefix){this.elementInst.attributionControl.setPrefix(nextOptions.attributionPrefix)}},invalidateSize:function invalidateSize(){if(!this.elementInst)return;this.elementInst.invalidateSize()},_updateMapView:function _updateMapView(){if(!this.elementInst)return;this.debounce('update-map-view',function(){var _elementInst$getCente=this.elementInst.getCenter(),lat=_elementInst$getCente.lat,lng=_elementInst$getCente.lng;var zoom=this.elementInst.getZoom();if(this.lat!==lat||this.lng!==lng||this.zoom!==zoom){this.elementInst.setView([this.lat,this.lng],this.zoom)}})},_canBeNum:function _canBeNum(val){return!isNaN(val)&&val!==''},latLngIsValid:function latLngIsValid(lat,lng,hideError){var isValid=typeof lat!=='undefined'&&this._canBeNum(lat)&&typeof lng!=='undefined'&&this._canBeNum(lng);if(isValid)return true;if(!hideError){console.log('PX-MAP CONFIGURATION ERROR:\n          You entered an invalid `lat` or `lng` attribute for '+this.is+'. You must pass a valid number.')}return false},_handleMapMove:function _handleMapMove(){if(this.__isZooming){this.__onZoomEnd=this._handleMapMove.bind(this);return}this.debounce('handle-map-move',function(){var latLng=this.elementInst.getCenter();var zoom=this.elementInst.getZoom();var bounds=this.elementInst.getBounds();if(this.lat!==latLng.lat||this.lng!==latLng.lng){this.set('lat',latLng.lat);this.set('lng',latLng.lng)}if(this.zoom!==zoom){this.set('zoom',zoom)}this.fire('px-map-moved',{lat:latLng.lat,lng:latLng.lng,zoom:zoom,bounds:bounds})})},_handleZoomStart:function _handleZoomStart(){this.__isZooming=true},_handleZoomEnd:function _handleZoomEnd(){this.__isZooming=false;if(typeof this.__onZoomEnd==='function'){this.__onZoomEnd();this.__onZoomEnd=null}},getVisibleMarkers:function getVisibleMarkers(){var mapBounds=this.elementInst.getBounds();var markers=[];this.elementInst.eachLayer(function(layer){if(layer.isMarker&&layer.getLatLng){if(mapBounds.contains(layer.getLatLng())&&markers.indexOf(layer)===-1){markers.push(layer)}}if(layer._markerCluster){layer.eachLayer(function(marker){var parentCluster=layer.getVisibleParent(marker);if(parentCluster&&mapBounds.contains(parentCluster.getLatLng())&&marker&&markers.indexOf(marker)===-1){markers.push(marker)}})}});return markers}};PxMapBehavior.LeafletRoot=[PxMapBehavior.Element,PxMapBehavior.ParentLayer,PxMapBehavior.LeafletRootImpl,PxMapBehavior.TrackMarkersImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/map":4}],144:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.TileLayerImpl={properties:{url:{type:String,observer:'shouldUpdateInst'},decodeUrl:{type:Boolean,value:false,observer:'shouldUpdateInst'}},canAddInst:function canAddInst(){return typeof this.url==='string'&&this.url.length},createInst:function createInst(options){return L.tileLayer(options.url)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.url!==nextOptions.url){this.elementInst.setUrl(nextOptions.url)}},getInstOptions:function getInstOptions(){return{url:this.decodeUrl?decodeURI(this.url):this.url}}};PxMapBehavior.TileLayer=[PxMapBehavior.Layer,PxMapBehavior.TileLayerImpl]})();

},{}]},{},[135,139,134,136,137,138,140,141,142,143,144]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJweC1tYXAtYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiOjIzfV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCI6MjR9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIjoyNX1dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCI6MjZ9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCI6Mjd9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCI6Mjh9XSw3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCI6Mjl9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCI6MzB9XSw5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIjozMX1dLDEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIjozMn1dLDExOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIjozM31dLDEyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zZXRcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL3NldFwiOjM0fV0sMTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCI6MzV9XSwxNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIjozNn1dLDE1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi93ZWFrLW1hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vd2Vhay1tYXBcIjozN31dLDE2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcbn0se31dLDE3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xufSx7XCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIjo3fV0sMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG59LHtcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiOjgsXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCI6OX1dLDE5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xufSx7XCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIjo2LFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiOjExLFwiLi4vaGVscGVycy90eXBlb2ZcIjoyMn1dLDIwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG59LHtcIi4uL2hlbHBlcnMvdHlwZW9mXCI6MjJ9XSwyMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTtcbn0se1wiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIjoxLFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiOjJ9XSwyMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcbn0se1wiLi4vY29yZS1qcy9zeW1ib2xcIjoxMyxcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCI6MTR9XSwyMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG59LHtcIi4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3JcIjoxMTMsXCIuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjoxMjYsXCIuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIjoxMzN9XSwyNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTtcbn0se1wiLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlXCI6MTE0LFwiLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yXCI6MTI2LFwiLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCI6MTMzfV0sMjU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjo1M31dLDI2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7XG59LHtcIi4uL21vZHVsZXMvX2NvcmVcIjo1MyxcIi4uL21vZHVsZXMvZXM2Lm1hcFwiOjExNixcIi4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmdcIjoxMjQsXCIuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjoxMjYsXCIuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvblwiOjEyOSxcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjEzM31dLDI3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjo1MyxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ25cIjoxMTd9XSwyODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjUzLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZVwiOjExOH1dLDI5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjUzLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eVwiOjExOX1dLDMwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xufSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6NTMsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCI6MTIwfV0sMzE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjUzLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2ZcIjoxMjF9XSwzMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjo1MyxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzXCI6MTIyfV0sMzM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjUzLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2ZcIjoxMjN9XSwzNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuU2V0O1xufSx7XCIuLi9tb2R1bGVzL19jb3JlXCI6NTMsXCIuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nXCI6MTI0LFwiLi4vbW9kdWxlcy9lczYuc2V0XCI6MTI1LFwiLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yXCI6MTI2LFwiLi4vbW9kdWxlcy9lczcuc2V0LnRvLWpzb25cIjoxMzAsXCIuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIjoxMzN9XSwzNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjUzLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiOjEyNCxcIi4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbFwiOjEyNyxcIi4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvclwiOjEzMSxcIi4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlXCI6MTMyfV0sMzY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG59LHtcIi4uLy4uL21vZHVsZXMvX3drcy1leHRcIjoxMTAsXCIuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjoxMjYsXCIuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIjoxMzN9XSwzNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LndlYWstbWFwJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5XZWFrTWFwO1xufSx7XCIuLi9tb2R1bGVzL19jb3JlXCI6NTMsXCIuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nXCI6MTI0LFwiLi4vbW9kdWxlcy9lczYud2Vhay1tYXBcIjoxMjgsXCIuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIjoxMzN9XSwzODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbn0se31dLDM5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcbn0se31dLDQwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG59LHt9XSw0MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbn0se1wiLi9faXMtb2JqZWN0XCI6NzF9XSw0MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbn0se1wiLi9fZm9yLW9mXCI6NjJ9XSw0MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG59LHtcIi4vX3RvLWluZGV4XCI6MTAyLFwiLi9fdG8taW9iamVjdFwiOjEwNCxcIi4vX3RvLWxlbmd0aFwiOjEwNX1dLDQ0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGFzYyAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcbiAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcbn0se1wiLi9fYXJyYXktc3BlY2llcy1jcmVhdGVcIjo0NixcIi4vX2N0eFwiOjU0LFwiLi9faW9iamVjdFwiOjY4LFwiLi9fdG8tbGVuZ3RoXCI6MTA1LFwiLi9fdG8tb2JqZWN0XCI6MTA2fV0sNDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBpc0FycmF5ICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBTUEVDSUVTICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwpe1xuICB2YXIgQztcbiAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuICAgIGlmKGlzT2JqZWN0KEMpKXtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbn0se1wiLi9faXMtYXJyYXlcIjo3MCxcIi4vX2lzLW9iamVjdFwiOjcxLFwiLi9fd2tzXCI6MTExfV0sNDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG59LHtcIi4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3JcIjo0NX1dLDQ3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG59LHtcIi4vX2NvZlwiOjQ4LFwiLi9fd2tzXCI6MTExfV0sNDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbn0se31dLDQ5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbn0se1wiLi9fYW4taW5zdGFuY2VcIjo0MCxcIi4vX2N0eFwiOjU0LFwiLi9fZGVmaW5lZFwiOjU1LFwiLi9fZGVzY3JpcHRvcnNcIjo1NixcIi4vX2Zvci1vZlwiOjYyLFwiLi9faXRlci1kZWZpbmVcIjo3NCxcIi4vX2l0ZXItc3RlcFwiOjc1LFwiLi9fbWV0YVwiOjc5LFwiLi9fb2JqZWN0LWNyZWF0ZVwiOjgxLFwiLi9fb2JqZWN0LWRwXCI6ODIsXCIuL19yZWRlZmluZS1hbGxcIjo5NCxcIi4vX3NldC1zcGVjaWVzXCI6OTd9XSw1MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIGZyb20gICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59O1xufSx7XCIuL19hcnJheS1mcm9tLWl0ZXJhYmxlXCI6NDIsXCIuL19jbGFzc29mXCI6NDd9XSw1MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgcmVkZWZpbmVBbGwgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGdldFdlYWsgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmdldFdlYWtcbiAgLCBhbk9iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuSW5zdGFuY2UgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBjcmVhdGVBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKVxuICAsICRoYXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBhcnJheUZpbmQgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpXG4gICwgYXJyYXlGaW5kSW5kZXggICAgPSBjcmVhdGVBcnJheU1ldGhvZCg2KVxuICAsIGlkICAgICAgICAgICAgICAgID0gMDtcblxuLy8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG52YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKHRoYXQpe1xuICByZXR1cm4gdGhhdC5fbCB8fCAodGhhdC5fbCA9IG5ldyBVbmNhdWdodEZyb3plblN0b3JlKTtcbn07XG52YXIgVW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYSA9IFtdO1xufTtcbnZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbihzdG9yZSwga2V5KXtcbiAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gIH0pO1xufTtcblVuY2F1Z2h0RnJvemVuU3RvcmUucHJvdG90eXBlID0ge1xuICBnZXQ6IGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpcmV0dXJuIGVudHJ5WzFdO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuICEhZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpZW50cnlbMV0gPSB2YWx1ZTtcbiAgICBlbHNlIHRoaXMuYS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0sXG4gICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBpbmRleCA9IGFycmF5RmluZEluZGV4KHRoaXMuYSwgZnVuY3Rpb24oaXQpe1xuICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gICAgfSk7XG4gICAgaWYofmluZGV4KXRoaXMuYS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiAhIX5pbmRleDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBpZCsrOyAgICAgIC8vIGNvbGxlY3Rpb24gaWRcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxlYWsgc3RvcmUgZm9yIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RzXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcylbJ2RlbGV0ZSddKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSkgJiYgZGVsZXRlIGRhdGFbdGhpcy5faV07XG4gICAgICB9LFxuICAgICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcykuaGFzKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGRhdGEgPSBnZXRXZWFrKGFuT2JqZWN0KGtleSksIHRydWUpO1xuICAgIGlmKGRhdGEgPT09IHRydWUpdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgZWxzZSBkYXRhW3RoYXQuX2ldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIHVmc3RvcmU6IHVuY2F1Z2h0RnJvemVuU3RvcmVcbn07XG59LHtcIi4vX2FuLWluc3RhbmNlXCI6NDAsXCIuL19hbi1vYmplY3RcIjo0MSxcIi4vX2FycmF5LW1ldGhvZHNcIjo0NCxcIi4vX2Zvci1vZlwiOjYyLFwiLi9faGFzXCI6NjQsXCIuL19pcy1vYmplY3RcIjo3MSxcIi4vX21ldGFcIjo3OSxcIi4vX3JlZGVmaW5lLWFsbFwiOjk0fV0sNTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgbWV0YSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgYW5JbnN0YW5jZSAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGRQICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGVhY2ggICAgICAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBpZighREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUsICdfYycpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2U7XG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICBlYWNoKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcyx0b0pTT04nLnNwbGl0KCcsJyksZnVuY3Rpb24oS0VZKXtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZihLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSloaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSlyZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCdzaXplJyBpbiBwcm90bylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG59LHtcIi4vX2FuLWluc3RhbmNlXCI6NDAsXCIuL19hcnJheS1tZXRob2RzXCI6NDQsXCIuL19kZXNjcmlwdG9yc1wiOjU2LFwiLi9fZXhwb3J0XCI6NjAsXCIuL19mYWlsc1wiOjYxLFwiLi9fZm9yLW9mXCI6NjIsXCIuL19nbG9iYWxcIjo2MyxcIi4vX2hpZGVcIjo2NSxcIi4vX2lzLW9iamVjdFwiOjcxLFwiLi9fbWV0YVwiOjc5LFwiLi9fb2JqZWN0LWRwXCI6ODIsXCIuL19yZWRlZmluZS1hbGxcIjo5NCxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6OTh9XSw1MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG59LHt9XSw1NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xufSx7XCIuL19hLWZ1bmN0aW9uXCI6Mzh9XSw1NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG59LHt9XSw1NjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcbn0se1wiLi9fZmFpbHNcIjo2MX1dLDU3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbn0se1wiLi9fZ2xvYmFsXCI6NjMsXCIuL19pcy1vYmplY3RcIjo3MX1dLDU4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xufSx7fV0sNTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG59LHtcIi4vX29iamVjdC1nb3BzXCI6ODcsXCIuL19vYmplY3Qta2V5c1wiOjkwLFwiLi9fb2JqZWN0LXBpZVwiOjkxfV0sNjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbn0se1wiLi9fY29yZVwiOjUzLFwiLi9fY3R4XCI6NTQsXCIuL19nbG9iYWxcIjo2MyxcIi4vX2hpZGVcIjo2NX1dLDYxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xufSx7fV0sNjI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG59LHtcIi4vX2FuLW9iamVjdFwiOjQxLFwiLi9fY3R4XCI6NTQsXCIuL19pcy1hcnJheS1pdGVyXCI6NjksXCIuL19pdGVyLWNhbGxcIjo3MixcIi4vX3RvLWxlbmd0aFwiOjEwNSxcIi4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kXCI6MTEyfV0sNjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxufSx7fV0sNjQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG59LHt9XSw2NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG59LHtcIi4vX2Rlc2NyaXB0b3JzXCI6NTYsXCIuL19vYmplY3QtZHBcIjo4MixcIi4vX3Byb3BlcnR5LWRlc2NcIjo5M31dLDY2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufSx7XCIuL19nbG9iYWxcIjo2M31dLDY3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG59LHtcIi4vX2Rlc2NyaXB0b3JzXCI6NTYsXCIuL19kb20tY3JlYXRlXCI6NTcsXCIuL19mYWlsc1wiOjYxfV0sNjg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG59LHtcIi4vX2NvZlwiOjQ4fV0sNjk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbn0se1wiLi9faXRlcmF0b3JzXCI6NzYsXCIuL193a3NcIjoxMTF9XSw3MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xufSx7XCIuL19jb2ZcIjo0OH1dLDcxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbn0se31dLDcyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xufSx7XCIuL19hbi1vYmplY3RcIjo0MX1dLDczOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xufSx7XCIuL19oaWRlXCI6NjUsXCIuL19vYmplY3QtY3JlYXRlXCI6ODEsXCIuL19wcm9wZXJ0eS1kZXNjXCI6OTMsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjk4LFwiLi9fd2tzXCI6MTExfV0sNzQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xufSx7XCIuL19leHBvcnRcIjo2MCxcIi4vX2hhc1wiOjY0LFwiLi9faGlkZVwiOjY1LFwiLi9faXRlci1jcmVhdGVcIjo3MyxcIi4vX2l0ZXJhdG9yc1wiOjc2LFwiLi9fbGlicmFyeVwiOjc4LFwiLi9fb2JqZWN0LWdwb1wiOjg4LFwiLi9fcmVkZWZpbmVcIjo5NSxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6OTgsXCIuL193a3NcIjoxMTF9XSw3NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xufSx7fV0sNzY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbn0se31dLDc3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcbn0se1wiLi9fb2JqZWN0LWtleXNcIjo5MCxcIi4vX3RvLWlvYmplY3RcIjoxMDR9XSw3ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHRydWU7XG59LHt9XSw3OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbn0se1wiLi9fZmFpbHNcIjo2MSxcIi4vX2hhc1wiOjY0LFwiLi9faXMtb2JqZWN0XCI6NzEsXCIuL19vYmplY3QtZHBcIjo4MixcIi4vX3VpZFwiOjEwOH1dLDgwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG59LHtcIi4vX2ZhaWxzXCI6NjEsXCIuL19pb2JqZWN0XCI6NjgsXCIuL19vYmplY3QtZ29wc1wiOjg3LFwiLi9fb2JqZWN0LWtleXNcIjo5MCxcIi4vX29iamVjdC1waWVcIjo5MSxcIi4vX3RvLW9iamVjdFwiOjEwNn1dLDgxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxufSx7XCIuL19hbi1vYmplY3RcIjo0MSxcIi4vX2RvbS1jcmVhdGVcIjo1NyxcIi4vX2VudW0tYnVnLWtleXNcIjo1OCxcIi4vX2h0bWxcIjo2NixcIi4vX29iamVjdC1kcHNcIjo4MyxcIi4vX3NoYXJlZC1rZXlcIjo5OX1dLDgyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG59LHtcIi4vX2FuLW9iamVjdFwiOjQxLFwiLi9fZGVzY3JpcHRvcnNcIjo1NixcIi4vX2llOC1kb20tZGVmaW5lXCI6NjcsXCIuL190by1wcmltaXRpdmVcIjoxMDd9XSw4MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xufSx7XCIuL19hbi1vYmplY3RcIjo0MSxcIi4vX2Rlc2NyaXB0b3JzXCI6NTYsXCIuL19vYmplY3QtZHBcIjo4MixcIi4vX29iamVjdC1rZXlzXCI6OTB9XSw4NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG59LHtcIi4vX2Rlc2NyaXB0b3JzXCI6NTYsXCIuL19oYXNcIjo2NCxcIi4vX2llOC1kb20tZGVmaW5lXCI6NjcsXCIuL19vYmplY3QtcGllXCI6OTEsXCIuL19wcm9wZXJ0eS1kZXNjXCI6OTMsXCIuL190by1pb2JqZWN0XCI6MTA0LFwiLi9fdG8tcHJpbWl0aXZlXCI6MTA3fV0sODU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxufSx7XCIuL19vYmplY3QtZ29wblwiOjg2LFwiLi9fdG8taW9iamVjdFwiOjEwNH1dLDg2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG59LHtcIi4vX2VudW0tYnVnLWtleXNcIjo1OCxcIi4vX29iamVjdC1rZXlzLWludGVybmFsXCI6ODl9XSw4NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xufSx7fV0sODg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbn0se1wiLi9faGFzXCI6NjQsXCIuL19zaGFyZWQta2V5XCI6OTksXCIuL190by1vYmplY3RcIjoxMDZ9XSw4OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG59LHtcIi4vX2FycmF5LWluY2x1ZGVzXCI6NDMsXCIuL19oYXNcIjo2NCxcIi4vX3NoYXJlZC1rZXlcIjo5OSxcIi4vX3RvLWlvYmplY3RcIjoxMDR9XSw5MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbn0se1wiLi9fZW51bS1idWcta2V5c1wiOjU4LFwiLi9fb2JqZWN0LWtleXMtaW50ZXJuYWxcIjo4OX1dLDkxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xufSx7fV0sOTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbn0se1wiLi9fY29yZVwiOjUzLFwiLi9fZXhwb3J0XCI6NjAsXCIuL19mYWlsc1wiOjYxfV0sOTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xufSx7fV0sOTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG59LHtcIi4vX2hpZGVcIjo2NX1dLDk1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xufSx7XCIuL19oaWRlXCI6NjV9XSw5NjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG59LHtcIi4vX2FuLW9iamVjdFwiOjQxLFwiLi9fY3R4XCI6NTQsXCIuL19pcy1vYmplY3RcIjo3MSxcIi4vX29iamVjdC1nb3BkXCI6ODR9XSw5NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbn0se1wiLi9fY29yZVwiOjUzLFwiLi9fZGVzY3JpcHRvcnNcIjo1NixcIi4vX2dsb2JhbFwiOjYzLFwiLi9fb2JqZWN0LWRwXCI6ODIsXCIuL193a3NcIjoxMTF9XSw5ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG59LHtcIi4vX2hhc1wiOjY0LFwiLi9fb2JqZWN0LWRwXCI6ODIsXCIuL193a3NcIjoxMTF9XSw5OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbn0se1wiLi9fc2hhcmVkXCI6MTAwLFwiLi9fdWlkXCI6MTA4fV0sMTAwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG59LHtcIi4vX2dsb2JhbFwiOjYzfV0sMTAxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xufSx7XCIuL19kZWZpbmVkXCI6NTUsXCIuL190by1pbnRlZ2VyXCI6MTAzfV0sMTAyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG59LHtcIi4vX3RvLWludGVnZXJcIjoxMDN9XSwxMDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xufSx7fV0sMTA0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG59LHtcIi4vX2RlZmluZWRcIjo1NSxcIi4vX2lvYmplY3RcIjo2OH1dLDEwNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbn0se1wiLi9fdG8taW50ZWdlclwiOjEwM31dLDEwNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG59LHtcIi4vX2RlZmluZWRcIjo1NX1dLDEwNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbn0se1wiLi9faXMtb2JqZWN0XCI6NzF9XSwxMDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG59LHt9XSwxMDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG59LHtcIi4vX2NvcmVcIjo1MyxcIi4vX2dsb2JhbFwiOjYzLFwiLi9fbGlicmFyeVwiOjc4LFwiLi9fb2JqZWN0LWRwXCI6ODIsXCIuL193a3MtZXh0XCI6MTEwfV0sMTEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xufSx7XCIuL193a3NcIjoxMTF9XSwxMTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG59LHtcIi4vX2dsb2JhbFwiOjYzLFwiLi9fc2hhcmVkXCI6MTAwLFwiLi9fdWlkXCI6MTA4fV0sMTEyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xufSx7XCIuL19jbGFzc29mXCI6NDcsXCIuL19jb3JlXCI6NTMsXCIuL19pdGVyYXRvcnNcIjo3NixcIi4vX3drc1wiOjExMX1dLDExMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG59LHtcIi4vX2FuLW9iamVjdFwiOjQxLFwiLi9fY29yZVwiOjUzLFwiLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2RcIjoxMTJ9XSwxMTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xufSx7XCIuL19jbGFzc29mXCI6NDcsXCIuL19jb3JlXCI6NTMsXCIuL19pdGVyYXRvcnNcIjo3NixcIi4vX3drc1wiOjExMX1dLDExNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xufSx7XCIuL19hZGQtdG8tdW5zY29wYWJsZXNcIjozOSxcIi4vX2l0ZXItZGVmaW5lXCI6NzQsXCIuL19pdGVyLXN0ZXBcIjo3NSxcIi4vX2l0ZXJhdG9yc1wiOjc2LFwiLi9fdG8taW9iamVjdFwiOjEwNH1dLDExNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xufSx7XCIuL19jb2xsZWN0aW9uXCI6NTIsXCIuL19jb2xsZWN0aW9uLXN0cm9uZ1wiOjQ5fV0sMTE3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xufSx7XCIuL19leHBvcnRcIjo2MCxcIi4vX29iamVjdC1hc3NpZ25cIjo4MH1dLDExODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7XG59LHtcIi4vX2V4cG9ydFwiOjYwLFwiLi9fb2JqZWN0LWNyZWF0ZVwiOjgxfV0sMTE5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xufSx7XCIuL19kZXNjcmlwdG9yc1wiOjU2LFwiLi9fZXhwb3J0XCI6NjAsXCIuL19vYmplY3QtZHBcIjo4Mn1dLDEyMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG59LHtcIi4vX29iamVjdC1nb3BkXCI6ODQsXCIuL19vYmplY3Qtc2FwXCI6OTIsXCIuL190by1pb2JqZWN0XCI6MTA0fV0sMTIxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbn0se1wiLi9fb2JqZWN0LWdwb1wiOjg4LFwiLi9fb2JqZWN0LXNhcFwiOjkyLFwiLi9fdG8tb2JqZWN0XCI6MTA2fV0sMTIyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAka2V5cyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xufSx7XCIuL19vYmplY3Qta2V5c1wiOjkwLFwiLi9fb2JqZWN0LXNhcFwiOjkyLFwiLi9fdG8tb2JqZWN0XCI6MTA2fV0sMTIzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pO1xufSx7XCIuL19leHBvcnRcIjo2MCxcIi4vX3NldC1wcm90b1wiOjk2fV0sMTI0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxufSx7fV0sMTI1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4yIFNldCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG59LHtcIi4vX2NvbGxlY3Rpb25cIjo1MixcIi4vX2NvbGxlY3Rpb24tc3Ryb25nXCI6NDl9XSwxMjY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcbn0se1wiLi9faXRlci1kZWZpbmVcIjo3NCxcIi4vX3N0cmluZy1hdFwiOjEwMX1dLDEyNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbn0se1wiLi9fYW4tb2JqZWN0XCI6NDEsXCIuL19kZXNjcmlwdG9yc1wiOjU2LFwiLi9fZW51bS1rZXlzXCI6NTksXCIuL19leHBvcnRcIjo2MCxcIi4vX2ZhaWxzXCI6NjEsXCIuL19nbG9iYWxcIjo2MyxcIi4vX2hhc1wiOjY0LFwiLi9faGlkZVwiOjY1LFwiLi9faXMtYXJyYXlcIjo3MCxcIi4vX2tleW9mXCI6NzcsXCIuL19saWJyYXJ5XCI6NzgsXCIuL19tZXRhXCI6NzksXCIuL19vYmplY3QtY3JlYXRlXCI6ODEsXCIuL19vYmplY3QtZHBcIjo4MixcIi4vX29iamVjdC1nb3BkXCI6ODQsXCIuL19vYmplY3QtZ29wblwiOjg2LFwiLi9fb2JqZWN0LWdvcG4tZXh0XCI6ODUsXCIuL19vYmplY3QtZ29wc1wiOjg3LFwiLi9fb2JqZWN0LWtleXNcIjo5MCxcIi4vX29iamVjdC1waWVcIjo5MSxcIi4vX3Byb3BlcnR5LWRlc2NcIjo5MyxcIi4vX3JlZGVmaW5lXCI6OTUsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjk4LFwiLi9fc2hhcmVkXCI6MTAwLFwiLi9fdG8taW9iamVjdFwiOjEwNCxcIi4vX3RvLXByaW1pdGl2ZVwiOjEwNyxcIi4vX3VpZFwiOjEwOCxcIi4vX3drc1wiOjExMSxcIi4vX3drcy1kZWZpbmVcIjoxMDksXCIuL193a3MtZXh0XCI6MTEwfV0sMTI4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBlYWNoICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMClcbiAgLCByZWRlZmluZSAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgbWV0YSAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgYXNzaWduICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpXG4gICwgd2VhayAgICAgICAgID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi13ZWFrJylcbiAgLCBpc09iamVjdCAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGdldFdlYWsgICAgICA9IG1ldGEuZ2V0V2Vha1xuICAsIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGVcbiAgLCB1bmNhdWdodEZyb3plblN0b3JlID0gd2Vhay51ZnN0b3JlXG4gICwgdG1wICAgICAgICAgID0ge31cbiAgLCBJbnRlcm5hbE1hcDtcblxudmFyIHdyYXBwZXIgPSBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gV2Vha01hcCgpe1xuICAgIHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICB9O1xufTtcblxudmFyIG1ldGhvZHMgPSB7XG4gIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgaWYoaXNPYmplY3Qoa2V5KSl7XG4gICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcykuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gZGF0YSA/IGRhdGFbdGhpcy5faV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxuICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIGtleSwgdmFsdWUpO1xuICB9XG59O1xuXG4vLyAyMy4zIFdlYWtNYXAgT2JqZWN0c1xudmFyICRXZWFrTWFwID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ1dlYWtNYXAnLCB3cmFwcGVyLCBtZXRob2RzLCB3ZWFrLCB0cnVlLCB0cnVlKTtcblxuLy8gSUUxMSBXZWFrTWFwIGZyb3plbiBrZXlzIGZpeFxuaWYobmV3ICRXZWFrTWFwKCkuc2V0KChPYmplY3QuZnJlZXplIHx8IE9iamVjdCkodG1wKSwgNykuZ2V0KHRtcCkgIT0gNyl7XG4gIEludGVybmFsTWFwID0gd2Vhay5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyKTtcbiAgYXNzaWduKEludGVybmFsTWFwLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gIG1ldGEuTkVFRCA9IHRydWU7XG4gIGVhY2goWydkZWxldGUnLCAnaGFzJywgJ2dldCcsICdzZXQnXSwgZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgcHJvdG8gID0gJFdlYWtNYXAucHJvdG90eXBlXG4gICAgICAsIG1ldGhvZCA9IHByb3RvW2tleV07XG4gICAgcmVkZWZpbmUocHJvdG8sIGtleSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAvLyBzdG9yZSBmcm96ZW4gb2JqZWN0cyBvbiBpbnRlcm5hbCB3ZWFrbWFwIHNoaW1cbiAgICAgIGlmKGlzT2JqZWN0KGEpICYmICFpc0V4dGVuc2libGUoYSkpe1xuICAgICAgICBpZighdGhpcy5fZil0aGlzLl9mID0gbmV3IEludGVybmFsTWFwO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fZltrZXldKGEsIGIpO1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzZXQnID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxuICAgICAgfSByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgYSwgYik7XG4gICAgfSk7XG4gIH0pO1xufVxufSx7XCIuL19hcnJheS1tZXRob2RzXCI6NDQsXCIuL19jb2xsZWN0aW9uXCI6NTIsXCIuL19jb2xsZWN0aW9uLXdlYWtcIjo1MSxcIi4vX2lzLW9iamVjdFwiOjcxLFwiLi9fbWV0YVwiOjc5LFwiLi9fb2JqZWN0LWFzc2lnblwiOjgwLFwiLi9fcmVkZWZpbmVcIjo5NX1dLDEyOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7dG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJyl9KTtcbn0se1wiLi9fY29sbGVjdGlvbi10by1qc29uXCI6NTAsXCIuL19leHBvcnRcIjo2MH1dLDEzMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdTZXQnLCB7dG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnU2V0Jyl9KTtcbn0se1wiLi9fY29sbGVjdGlvbi10by1qc29uXCI6NTAsXCIuL19leHBvcnRcIjo2MH1dLDEzMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbn0se1wiLi9fd2tzLWRlZmluZVwiOjEwOX1dLDEzMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcbn0se1wiLi9fd2tzLWRlZmluZVwiOjEwOX1dLDEzMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG59LHtcIi4vX2dsb2JhbFwiOjYzLFwiLi9faGlkZVwiOjY1LFwiLi9faXRlcmF0b3JzXCI6NzYsXCIuL193a3NcIjoxMTEsXCIuL2VzNi5hcnJheS5pdGVyYXRvclwiOjExNX1dLDEzNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7dmFyIF9hc3NpZ249cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24nKTt2YXIgX2Fzc2lnbjI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTt2YXIgX2dldFByb3RvdHlwZU9mPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO3ZhciBfZ2V0UHJvdG90eXBlT2YyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTt2YXIgX2NsYXNzQ2FsbENoZWNrMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTt2YXIgX2NsYXNzQ2FsbENoZWNrMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO3ZhciBfY3JlYXRlQ2xhc3MyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO3ZhciBfY3JlYXRlQ2xhc3MzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7dmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO3ZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO3ZhciBfZ2V0Mj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0Jyk7dmFyIF9nZXQzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldDIpO3ZhciBfaW5oZXJpdHMyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO3ZhciBfaW5oZXJpdHMzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5Db250cm9sSW1wbD17cHJvcGVydGllczp7cG9zaXRpb246e3R5cGU6U3RyaW5nLHZhbHVlOidib3R0b21yaWdodCcsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7dGhpcy5lbGVtZW50SW5zdC5hZGRUbyhwYXJlbnQpfSxyZW1vdmVJbnN0OmZ1bmN0aW9uIHJlbW92ZUluc3QocGFyZW50KXt0aGlzLmVsZW1lbnRJbnN0LnJlbW92ZSgpfSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybntwb3NpdGlvbjp0aGlzLl9nZXRWYWxpZFBvc2l0aW9uKCl9fSxfZ2V0VmFsaWRQb3NpdGlvbjpmdW5jdGlvbiBfZ2V0VmFsaWRQb3NpdGlvbigpe3ZhciBwb3NpdGlvbklzVmFsaWQ9L14odG9wcmlnaHR8dG9wbGVmdHxib3R0b21yaWdodHxib3R0b21sZWZ0KSQvLnRlc3QodGhpcy5wb3NpdGlvbik7aWYoIXBvc2l0aW9uSXNWYWxpZCl7Y29uc29sZS5sb2coJ1BYLU1BUCBDT05GSUdVUkFUSU9OIEVSUk9SOlxcbiAgICAgICAgICBZb3UgZW50ZXJlZCBhbiBpbnZhbGlkIGBwb3NpdGlvbmAgYXR0cmlidXRlIFxcJycrdGhpcy5wb3NpdGlvbisnXFwnIGZvciAnK3RoaXMuaXMrJy5cXG4gICAgICAgICAgUG9zaXRpb24gbXVzdCBiZSBhIHN0cmluZyB3aXRoIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcXG4gICAgICAgICAgLSBcXCd0b3ByaWdodFxcJ1xcbiAgICAgICAgICAtIFxcJ3RvcGxlZnRcXCdcXG4gICAgICAgICAgLSBcXCdib3R0b21yaWdodFxcJ1xcbiAgICAgICAgICAtIFxcJ2JvdHRvbWxlZnRcXCdcXG4gICAgICAgICAgRGVmYXVsdGluZyB0byBcXCdib3R0b21yaWdodFxcJy4nKTtyZXR1cm4nYm90dG9tcmlnaHQnfXJldHVybiB0aGlzLnBvc2l0aW9ufX07UHhNYXBCZWhhdmlvci5Db250cm9sPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuQ29udHJvbEltcGxdO1B4TWFwQmVoYXZpb3IuWm9vbUNvbnRyb2xJbXBsPXtwcm9wZXJ0aWVzOntsYW5ndWFnZTp7dHlwZTpTdHJpbmcsdmFsdWU6J2VuJ30scmVzb3VyY2VzOnt0eXBlOk9iamVjdCx2YWx1ZTpmdW5jdGlvbiB2YWx1ZSgpe3JldHVybnsnZW4nOnsnWm9vbSBpbic6J1pvb20gaW4nLCdab29tIG91dCc6J1pvb20gb3V0J319fX19LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXtyZXR1cm4gbmV3IFB4TWFwLlpvb21Db250cm9sKG9wdGlvbnMpfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe2lmKGxhc3RPcHRpb25zLnBvc2l0aW9uIT09bmV4dE9wdGlvbnMucG9zaXRpb24pe3RoaXMuZWxlbWVudEluc3Quc2V0UG9zaXRpb24obmV4dE9wdGlvbnMucG9zaXRpb24pfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt2YXIgb3B0aW9ucz1QeE1hcEJlaGF2aW9yLkNvbnRyb2xJbXBsLmdldEluc3RPcHRpb25zLmNhbGwodGhpcyk7b3B0aW9ucy5wb3NpdGlvbj10aGlzLnBvc2l0aW9uO29wdGlvbnMuem9vbUluVGV4dD0nPHB4LWljb24gaWNvbj1cInB4LXV0bDphZGRcIj48L3B4LWljb24+JztvcHRpb25zLnpvb21PdXRUZXh0PSc8cHgtaWNvbiBpY29uPVwicHgtdXRsOnJlbW92ZVwiPjwvcHgtaWNvbj4nO2lmKHR5cGVvZiB0aGlzLmxvY2FsaXplPT09J2Z1bmN0aW9uJyl7b3B0aW9ucy56b29tSW5UaXRsZT10aGlzLmxvY2FsaXplKCdab29tIGluJyk7b3B0aW9ucy56b29tT3V0VGl0bGU9dGhpcy5sb2NhbGl6ZSgnWm9vbSBvdXQnKX1yZXR1cm4gb3B0aW9uc319O1B4TWFwQmVoYXZpb3IuWm9vbUNvbnRyb2w9W1BvbHltZXIuQXBwTG9jYWxpemVCZWhhdmlvcixQeE1hcEJlaGF2aW9yLkNvbnRyb2wsUHhNYXBCZWhhdmlvci5ab29tQ29udHJvbEltcGxdO1B4TWFwQmVoYXZpb3IuU2NhbGVDb250cm9sSW1wbD17cHJvcGVydGllczp7aW1wZXJpYWxVbml0czp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbWV0cmljVW5pdHM6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LHJldmVyc2VDb2xvcnM6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9fSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7cmV0dXJuIG5ldyBQeE1hcC5TY2FsZUNvbnRyb2wob3B0aW9ucyl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7aWYobGFzdE9wdGlvbnMucG9zaXRpb24hPT1uZXh0T3B0aW9ucy5wb3NpdGlvbil7dGhpcy5lbGVtZW50SW5zdC5zZXRQb3NpdGlvbihuZXh0T3B0aW9ucy5wb3NpdGlvbil9aWYobGFzdE9wdGlvbnMucmV2ZXJzZUNvbG9ycyE9PW5leHRPcHRpb25zLnJldmVyc2VDb2xvcnMpe3RoaXMuZWxlbWVudEluc3Quc2V0UmV2ZXJzZUNvbG9ycyhuZXh0T3B0aW9ucy5yZXZlcnNlQ29sb3JzKX1pZihsYXN0T3B0aW9ucy5tZXRyaWMhPT1uZXh0T3B0aW9ucy5tZXRyaWMpe3RoaXMuZWxlbWVudEluc3Quc2hvd01ldHJpYyhuZXh0T3B0aW9ucy5tZXRyaWMpfWlmKGxhc3RPcHRpb25zLmltcGVyaWFsIT09bmV4dE9wdGlvbnMuaW1wZXJpYWwpe3RoaXMuZWxlbWVudEluc3Quc2hvd0ltcGVyaWFsKG5leHRPcHRpb25zLmltcGVyaWFsKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7dmFyIG9wdGlvbnM9UHhNYXBCZWhhdmlvci5Db250cm9sSW1wbC5nZXRJbnN0T3B0aW9ucy5jYWxsKHRoaXMpO29wdGlvbnMuaW1wZXJpYWw9dGhpcy5pbXBlcmlhbFVuaXRzO29wdGlvbnMubWV0cmljPXRoaXMubWV0cmljVW5pdHM7b3B0aW9ucy5yZXZlcnNlQ29sb3JzPXRoaXMucmV2ZXJzZUNvbG9ycztyZXR1cm4gb3B0aW9uc319O1B4TWFwQmVoYXZpb3IuU2NhbGVDb250cm9sPVtQeE1hcEJlaGF2aW9yLkNvbnRyb2wsUHhNYXBCZWhhdmlvci5TY2FsZUNvbnRyb2xJbXBsXTtQeE1hcEJlaGF2aW9yLkxvY2F0ZUNvbnRyb2xJbXBsPXtwcm9wZXJ0aWVzOntsb2NhdGVUaXRsZTp7dHlwZTpTdHJpbmcsdmFsdWU6J1pvb20gdG8geW91ciBsb2NhdGlvbicsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxtb3ZlVG9Mb2NhdGlvbjp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlfSxtb3ZlTWF4Wm9vbTp7dHlwZTpOdW1iZXIsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxsYXN0Rm91bmRMb2NhdGlvbjp7dHlwZTpPYmplY3QsdmFsdWU6ZnVuY3Rpb24gdmFsdWUoKXtyZXR1cm57fX0sbm90aWZ5OnRydWV9fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXtQeE1hcEJlaGF2aW9yLkNvbnRyb2xJbXBsLmFkZEluc3QuY2FsbCh0aGlzLHBhcmVudCk7dmFyIGZvdW5kRm49dGhpcy5faGFuZGxlTG9jYXRpb25Gb3VuZC5iaW5kKHRoaXMpO3ZhciBlcnJvckZuPXRoaXMuX2hhbmRsZUxvY2F0aW9uRXJyb3IuYmluZCh0aGlzKTt2YXIgdGFwRm49dGhpcy5faGFuZGxlTG9jYXRpb25UYXAuYmluZCh0aGlzKTt0aGlzLmJpbmRFdmVudHMoeydsb2NhdGlvbmZvdW5kJzpmb3VuZEZuLCdsb2NhdGlvbmVycm9yJzplcnJvckZuLCdjb250cm9sY2xpY2snOnRhcEZufSl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdChwYXJlbnQpe1B4TWFwQmVoYXZpb3IuQ29udHJvbEltcGwucmVtb3ZlSW5zdC5jYWxsKHRoaXMscGFyZW50KX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3JldHVybiBuZXcgUHhNYXAuTG9jYXRlQ29udHJvbChvcHRpb25zKX0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXtpZihsYXN0T3B0aW9ucy5wb3NpdGlvbiE9PW5leHRPcHRpb25zLnBvc2l0aW9uKXt0aGlzLmVsZW1lbnRJbnN0LnNldFBvc2l0aW9uKG5leHRPcHRpb25zLnBvc2l0aW9uKX1pZihsYXN0T3B0aW9ucy5tb3ZlTWF4Wm9vbSE9PW5leHRPcHRpb25zLm1vdmVNYXhab29tKXt0aGlzLmVsZW1lbnRJbnN0LnNldE1vdmVNYXhab29tKG5leHRPcHRpb25zLm1vdmVNYXhab29tKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7cmV0dXJue3Bvc2l0aW9uOnRoaXMucG9zaXRpb24sbG9jYXRlSWNvbjonPHB4LWljb24gaWNvbj1cInB4LXZpczpjcm9zc2hhaXJcIj48L3B4LWljb24+Jyxsb2NhdGVUaXRsZTp0aGlzLmxvY2F0ZVRpdGxlLG1vdmVUb0xvY2F0aW9uOnRoaXMubW92ZVRvTG9jYXRpb24sbW92ZU1heFpvb206dGhpcy5tb3ZlTWF4Wm9vbX19LF9oYW5kbGVMb2NhdGlvbkZvdW5kOmZ1bmN0aW9uIF9oYW5kbGVMb2NhdGlvbkZvdW5kKGV2dCl7aWYoIWV2dClyZXR1cm47dmFyIGRldGFpbD17bGF0OmV2dC5sYXRpdHVkZXx8bnVsbCxsbmc6ZXZ0LmxvbmdpdHVkZXx8bnVsbCx0aW1lc3RhbXA6ZXZ0LnRpbWVzdGFtcHx8bnVsbCxib3VuZHM6ZXZ0LmJvdW5kc3x8bnVsbH07ZGV0YWlsLmFjY3VyYWN5PWV2dC5ib3VuZHMuZ2V0Q2VudGVyKCkmJmV2dC5ib3VuZHMuZ2V0Tm9ydGhXZXN0KCk/ZXZ0LmJvdW5kcy5nZXRDZW50ZXIoKS5kaXN0YW5jZVRvKGV2dC5ib3VuZHMuZ2V0Tm9ydGhFYXN0KCkpOm51bGw7dGhpcy5maXJlKCdweC1tYXAtY29udHJvbC1sb2NhdGUtc3VjY2VlZGVkJyxkZXRhaWwpO3RoaXMuc2V0KCdsYXN0Rm91bmRMb2NhdGlvbicsZGV0YWlsKTt0aGlzLm5vdGlmeVBhdGgoJ2xhc3RGb3VuZExvY2F0aW9uLionKX0sX2hhbmRsZUxvY2F0aW9uRXJyb3I6ZnVuY3Rpb24gX2hhbmRsZUxvY2F0aW9uRXJyb3IoZXZ0KXtpZighZXZ0KXJldHVybjt2YXIgZGV0YWlsPXttZXNzYWdlOmV2dC5tZXNzYWdlfHxudWxsfTt0aGlzLmZpcmUoJ3B4LW1hcC1jb250cm9sLWxvY2F0ZS1mYWlsZWQnLGRldGFpbCl9LF9oYW5kbGVMb2NhdGlvblRhcDpmdW5jdGlvbiBfaGFuZGxlTG9jYXRpb25UYXAoZXZ0KXtpZighZXZ0fHxldnQuYWN0aW9uIT09J2xvY2F0ZScpcmV0dXJuO3RoaXMuZmlyZSgncHgtbWFwLWxvY2F0ZS1idXR0b24tdGFwcGVkJyl9fTtQeE1hcEJlaGF2aW9yLkxvY2F0ZUNvbnRyb2w9W1B4TWFwQmVoYXZpb3IuQ29udHJvbCxQeE1hcEJlaGF2aW9yLkxvY2F0ZUNvbnRyb2xJbXBsXTt3aW5kb3cuUHhNYXA9d2luZG93LlB4TWFwfHx7fTt2YXIgU2NhbGVDb250cm9sPWZ1bmN0aW9uKF9MJENvbnRyb2wkU2NhbGUpeygwLF9pbmhlcml0czMuZGVmYXVsdCkoU2NhbGVDb250cm9sLF9MJENvbnRyb2wkU2NhbGUpO2Z1bmN0aW9uIFNjYWxlQ29udHJvbCgpeygwLF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcyxTY2FsZUNvbnRyb2wpO3JldHVybigwLF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLChTY2FsZUNvbnRyb2wuX19wcm90b19ffHwoMCxfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFNjYWxlQ29udHJvbCkpLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9KDAsX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShTY2FsZUNvbnRyb2wsW3trZXk6J2luaXRpYWxpemUnLHZhbHVlOmZ1bmN0aW9uIGluaXRpYWxpemUob3B0aW9ucyl7KDAsX2dldDMuZGVmYXVsdCkoU2NhbGVDb250cm9sLnByb3RvdHlwZS5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoU2NhbGVDb250cm9sLnByb3RvdHlwZSksJ2luaXRpYWxpemUnLHRoaXMpLmNhbGwodGhpcyxvcHRpb25zKX19LHtrZXk6J29uQWRkJyx2YWx1ZTpmdW5jdGlvbiBvbkFkZChtYXApe3RoaXMuX19zY2FsZUNvbnRhaW5lcj0oMCxfZ2V0My5kZWZhdWx0KShTY2FsZUNvbnRyb2wucHJvdG90eXBlLl9fcHJvdG9fX3x8KDAsX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShTY2FsZUNvbnRyb2wucHJvdG90eXBlKSwnb25BZGQnLHRoaXMpLmNhbGwodGhpcyxtYXApO2lmKHRoaXMub3B0aW9ucy5yZXZlcnNlQ29sb3JzPT09dHJ1ZSl7TC5Eb21VdGlsLmFkZENsYXNzKHRoaXMuX19zY2FsZUNvbnRhaW5lciwnbGVhZmxldC1jb250cm9sLXNjYWxlLS1yZXZlcnNlJyl9cmV0dXJuIHRoaXMuX19zY2FsZUNvbnRhaW5lcn19LHtrZXk6J29uUmVtb3ZlJyx2YWx1ZTpmdW5jdGlvbiBvblJlbW92ZShtYXApeygwLF9nZXQzLmRlZmF1bHQpKFNjYWxlQ29udHJvbC5wcm90b3R5cGUuX19wcm90b19ffHwoMCxfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFNjYWxlQ29udHJvbC5wcm90b3R5cGUpLCdvblJlbW92ZScsdGhpcykuY2FsbCh0aGlzLG1hcCk7dGhpcy5fX3NjYWxlQ29udGFpbmVyPW51bGx9fSx7a2V5OidzZXRSZXZlcnNlQ29sb3JzJyx2YWx1ZTpmdW5jdGlvbiBzZXRSZXZlcnNlQ29sb3JzKHNob3VsZFJldmVyc2Upe2lmKCF0aGlzLl9fc2NhbGVDb250YWluZXIpcmV0dXJuO2lmKHNob3VsZFJldmVyc2UmJiF0aGlzLm9wdGlvbnMucmV2ZXJzZUNvbG9ycyl7dGhpcy5vcHRpb25zLnJldmVyc2VDb2xvcnM9dHJ1ZTtMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fX3NjYWxlQ29udGFpbmVyLCdsZWFmbGV0LWNvbnRyb2wtc2NhbGUtLXJldmVyc2UnKX1pZighc2hvdWxkUmV2ZXJzZSYmdGhpcy5vcHRpb25zLnJldmVyc2VDb2xvcnMpe3RoaXMub3B0aW9ucy5yZXZlcnNlQ29sb3JzPWZhbHNlO0wuRG9tVXRpbC5yZW1vdmVDbGFzcyh0aGlzLl9fc2NhbGVDb250YWluZXIsJ2xlYWZsZXQtY29udHJvbC1zY2FsZS0tcmV2ZXJzZScpfX19LHtrZXk6J3Nob3dJbXBlcmlhbCcsdmFsdWU6ZnVuY3Rpb24gc2hvd0ltcGVyaWFsKHNob3VsZFNob3dJbXBlcmlhbCl7aWYoIXRoaXMuX19zY2FsZUNvbnRhaW5lcilyZXR1cm47aWYoc2hvdWxkU2hvd0ltcGVyaWFsJiYhdGhpcy5vcHRpb25zLmltcGVyaWFsJiYhdGhpcy5faVNjYWxlKXt0aGlzLl9pU2NhbGU9TC5Eb21VdGlsLmNyZWF0ZSgnZGl2JywnbGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmUnLHRoaXMuX19zY2FsZUNvbnRhaW5lcik7dGhpcy5vcHRpb25zLmltcGVyaWFsPXRydWV9aWYoIXNob3VsZFNob3dJbXBlcmlhbCYmdGhpcy5vcHRpb25zLmltcGVyaWFsJiZ0aGlzLl9pU2NhbGUpe3RoaXMub3B0aW9ucy5pbXBlcmlhbD1mYWxzZTtMLkRvbVV0aWwucmVtb3ZlKHRoaXMuX2lTY2FsZSk7dGhpcy5faVNjYWxlPW51bGx9dGhpcy5fdXBkYXRlKCl9fSx7a2V5OidzaG93TWV0cmljJyx2YWx1ZTpmdW5jdGlvbiBzaG93TWV0cmljKHNob3VsZFNob3dNZXRyaWMpe2lmKCF0aGlzLl9fc2NhbGVDb250YWluZXIpcmV0dXJuO2lmKHNob3VsZFNob3dNZXRyaWMmJiF0aGlzLm9wdGlvbnMubWV0cmljJiYhdGhpcy5fbVNjYWxlKXt0aGlzLl9tU2NhbGU9TC5Eb21VdGlsLmNyZWF0ZSgnZGl2JywnbGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmUnLHRoaXMuX19zY2FsZUNvbnRhaW5lcik7dGhpcy5vcHRpb25zLm1ldHJpYz10cnVlfWlmKCFzaG91bGRTaG93TWV0cmljJiZ0aGlzLm9wdGlvbnMubWV0cmljJiZ0aGlzLl9tU2NhbGUpe3RoaXMub3B0aW9ucy5tZXRyaWM9ZmFsc2U7TC5Eb21VdGlsLnJlbW92ZSh0aGlzLl9tU2NhbGUpO3RoaXMuX21TY2FsZT1udWxsfXRoaXMuX3VwZGF0ZSgpfX1dKTtyZXR1cm4gU2NhbGVDb250cm9sfShMLkNvbnRyb2wuU2NhbGUpOztQeE1hcC5TY2FsZUNvbnRyb2w9U2NhbGVDb250cm9sO3ZhciBab29tQ29udHJvbD1mdW5jdGlvbihfTCRDb250cm9sJFpvb20peygwLF9pbmhlcml0czMuZGVmYXVsdCkoWm9vbUNvbnRyb2wsX0wkQ29udHJvbCRab29tKTtmdW5jdGlvbiBab29tQ29udHJvbCgpeygwLF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcyxab29tQ29udHJvbCk7cmV0dXJuKDAsX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsKFpvb21Db250cm9sLl9fcHJvdG9fX3x8KDAsX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShab29tQ29udHJvbCkpLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9KDAsX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShab29tQ29udHJvbCxbe2tleTonX3pvb21JbicsdmFsdWU6ZnVuY3Rpb24gX3pvb21JbihlKXsoMCxfZ2V0My5kZWZhdWx0KShab29tQ29udHJvbC5wcm90b3R5cGUuX19wcm90b19ffHwoMCxfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFpvb21Db250cm9sLnByb3RvdHlwZSksJ196b29tSW4nLHRoaXMpLmNhbGwodGhpcyxlKTtpZih0aGlzLl9tYXAmJnRoaXMuX21hcC5maXJlKXt0aGlzLl9tYXAuZmlyZSgnY29udHJvbGNsaWNrJyx7c3JjOnRoaXMsYWN0aW9uOid6b29taW4nfSl9fX0se2tleTonX3pvb21PdXQnLHZhbHVlOmZ1bmN0aW9uIF96b29tT3V0KGUpeygwLF9nZXQzLmRlZmF1bHQpKFpvb21Db250cm9sLnByb3RvdHlwZS5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoWm9vbUNvbnRyb2wucHJvdG90eXBlKSwnX3pvb21PdXQnLHRoaXMpLmNhbGwodGhpcyxlKTtpZih0aGlzLl9tYXAmJnRoaXMuX21hcC5maXJlKXt0aGlzLl9tYXAuZmlyZSgnY29udHJvbGNsaWNrJyx7c3JjOnRoaXMsYWN0aW9uOid6b29tb3V0J30pfX19LHtrZXk6J19maXJlWm9vbUNsaWNrRXZ0Jyx2YWx1ZTpmdW5jdGlvbiBfZmlyZVpvb21DbGlja0V2dChldnQpe319XSk7cmV0dXJuIFpvb21Db250cm9sfShMLkNvbnRyb2wuWm9vbSk7O1B4TWFwLlpvb21Db250cm9sPVpvb21Db250cm9sO3ZhciBMb2NhdGVDb250cm9sPWZ1bmN0aW9uKF9MJENvbnRyb2wpeygwLF9pbmhlcml0czMuZGVmYXVsdCkoTG9jYXRlQ29udHJvbCxfTCRDb250cm9sKTtmdW5jdGlvbiBMb2NhdGVDb250cm9sKCl7KDAsX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLExvY2F0ZUNvbnRyb2wpO3JldHVybigwLF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLChMb2NhdGVDb250cm9sLl9fcHJvdG9fX3x8KDAsX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShMb2NhdGVDb250cm9sKSkuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0oMCxfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKExvY2F0ZUNvbnRyb2wsW3trZXk6J2luaXRpYWxpemUnLHZhbHVlOmZ1bmN0aW9uIGluaXRpYWxpemUoKXt2YXIgb3B0aW9ucz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307dmFyIGRlZmF1bHRPcHRpb25zPXtwb3NpdGlvbjonYm90dG9tcmlnaHQnLGNsYXNzTmFtZTonJyxsb2NhdGVJY29uOic8cHgtaWNvbiBpY29uPVwicHgtdXRsOmxvY2F0aW9uXCI+PC9weC1pY29uPicsbG9jYXRlVGl0bGU6J1pvb20gdG8geW91ciBsb2NhdGlvbicsbG9jYXRlVGltZW91dDoxMDAwMCxtb3ZlVG9Mb2NhdGlvbjp0cnVlLG1vdmVNYXhab29tOm51bGx9O3ZhciBjb21wb3NlZE9wdGlvbnM9KDAsX2Fzc2lnbjIuZGVmYXVsdCkoZGVmYXVsdE9wdGlvbnMsb3B0aW9ucyk7TC5VdGlsLnNldE9wdGlvbnModGhpcyxjb21wb3NlZE9wdGlvbnMpfX0se2tleTonb25BZGQnLHZhbHVlOmZ1bmN0aW9uIG9uQWRkKG1hcCl7dmFyIGxvY2F0ZU5hbWU9J2xlYWZsZXQtY29udHJvbC1sb2NhdGUnO3RoaXMuX19jb250YWluZXI9TC5Eb21VdGlsLmNyZWF0ZSgnZGl2Jyxsb2NhdGVOYW1lKycgbGVhZmxldC1iYXIgJyt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKTt0aGlzLl9fbG9jYXRlQnV0dG9uPXRoaXMuX2NyZWF0ZUJ1dHRvbih0aGlzLm9wdGlvbnMubG9jYXRlSWNvbix0aGlzLm9wdGlvbnMubG9jYXRlVGl0bGUsJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uJyx0aGlzLl9fY29udGFpbmVyKTtMLkRvbUV2ZW50Lm9uKG1hcCwnbG9jYXRpb25mb3VuZCcsdGhpcy5fbG9jYXRpb25Gb3VuZCx0aGlzKTtMLkRvbUV2ZW50Lm9uKG1hcCwnbG9jYXRpb25lcnJvcicsdGhpcy5fbG9jYXRpb25FcnJvcix0aGlzKTtMLkRvbUV2ZW50LmRpc2FibGVDbGlja1Byb3BhZ2F0aW9uKHRoaXMuX19sb2NhdGVCdXR0b24pO0wuRG9tRXZlbnQub24odGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLEwuRG9tRXZlbnQuc3RvcCk7TC5Eb21FdmVudC5vbih0aGlzLl9fbG9jYXRlQnV0dG9uLCdjbGljaycsdGhpcy5fbG9jYXRlLHRoaXMpO0wuRG9tRXZlbnQub24odGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLHRoaXMuX3JlZm9jdXNPbk1hcCx0aGlzKTtyZXR1cm4gdGhpcy5fX2NvbnRhaW5lcn19LHtrZXk6J29uUmVtb3ZlJyx2YWx1ZTpmdW5jdGlvbiBvblJlbW92ZShtYXApe0wuRG9tRXZlbnQub2ZmKG1hcCwnbG9jYXRpb25mb3VuZCcsdGhpcy5fbG9jYXRpb25Gb3VuZCx0aGlzKTtMLkRvbUV2ZW50Lm9mZihtYXAsJ2xvY2F0aW9uZXJyb3InLHRoaXMuX2xvY2F0aW9uRXJyb3IsdGhpcyk7TC5Eb21FdmVudC5vZmYodGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLEwuRG9tRXZlbnQuc3RvcCk7TC5Eb21FdmVudC5vZmYodGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLHRoaXMuX2xvY2F0ZSx0aGlzKTtMLkRvbUV2ZW50Lm9mZih0aGlzLl9fbG9jYXRlQnV0dG9uLCdjbGljaycsdGhpcy5fcmVmb2N1c09uTWFwLHRoaXMpfX0se2tleTonc2V0TW92ZU1heFpvb20nLHZhbHVlOmZ1bmN0aW9uIHNldE1vdmVNYXhab29tKHpvb20pe2lmKHR5cGVvZiB6b29tPT09J3N0cmluZycmJnpvb20ubGVuZ3RoJiYhaXNOYU4oem9vbSkpe3pvb209cGFyc2VJbnQoem9vbSl9aWYodHlwZW9mIHpvb209PT0nbnVtYmVyJyYmdGhpcy5vcHRpb25zLm1vdmVNYXhab29tIT09em9vbSl7dGhpcy5vcHRpb25zLm1vdmVNYXhab29tPXpvb219fX0se2tleTonb24nLHZhbHVlOmZ1bmN0aW9uIG9uKCl7dmFyIF9tYXA7aWYoIXRoaXMuX21hcCl7cmV0dXJuIHVuZGVmaW5lZH1yZXR1cm4oX21hcD10aGlzLl9tYXApLm9uLmFwcGx5KF9tYXAsYXJndW1lbnRzKX19LHtrZXk6J29mZicsdmFsdWU6ZnVuY3Rpb24gb2ZmKCl7dmFyIF9tYXAyO2lmKCF0aGlzLl9tYXApe3JldHVybiB1bmRlZmluZWR9cmV0dXJuKF9tYXAyPXRoaXMuX21hcCkub2ZmLmFwcGx5KF9tYXAyLGFyZ3VtZW50cyl9fSx7a2V5OidfbG9jYXRlJyx2YWx1ZTpmdW5jdGlvbiBfbG9jYXRlKGV2dCl7dGhpcy5fbWFwLmZpcmUoJ2NvbnRyb2xjbGljaycse3NyYzp0aGlzLGFjdGlvbjonbG9jYXRlJ30pO3RoaXMubG9jYXRlKGV2dCl9fSx7a2V5Oidsb2NhdGUnLHZhbHVlOmZ1bmN0aW9uIGxvY2F0ZSgpe3RoaXMuX19sb2NhdGluZz10cnVlO3RoaXMuX21hcC5sb2NhdGUoe3NldFZpZXc6dGhpcy5vcHRpb25zLm1vdmVUb0xvY2F0aW9uLG1heFpvb206dGhpcy5vcHRpb25zLm1vdmVNYXhab29tLHRpbWVvdXQ6dGhpcy5vcHRpb25zLmxvY2F0ZVRpbWVvdXR9KTt0aGlzLl9zZXRMb2NhdGluZ1N0YXRlKCl9fSx7a2V5OidyZXNldCcsdmFsdWU6ZnVuY3Rpb24gcmVzZXQoKXt0aGlzLl9zZXRSZWFkeVN0YXRlKCl9fSx7a2V5Oidpc0Rpc2FibGVkJyx2YWx1ZTpmdW5jdGlvbiBpc0Rpc2FibGVkKCl7cmV0dXJuIHRoaXMuX19kaXNhYmxlZHx8ZmFsc2V9fSx7a2V5OidfY3JlYXRlQnV0dG9uJyx2YWx1ZTpmdW5jdGlvbiBfY3JlYXRlQnV0dG9uKGh0bWwsdGl0bGUsY2xhc3NOYW1lLGNvbnRhaW5lcixjbGlja0ZuKXt2YXIgYnV0dG9uRWw9TC5Eb21VdGlsLmNyZWF0ZSgnYScsY2xhc3NOYW1lLGNvbnRhaW5lcik7YnV0dG9uRWwuaW5uZXJIVE1MPWh0bWw7YnV0dG9uRWwuaHJlZj0nIyc7YnV0dG9uRWwudGl0bGU9dGl0bGU7YnV0dG9uRWwuc2V0QXR0cmlidXRlKCdyb2xlJywnYnV0dG9uJyk7YnV0dG9uRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyx0aXRsZSk7cmV0dXJuIGJ1dHRvbkVsfX0se2tleTonX2xvY2F0aW9uRm91bmQnLHZhbHVlOmZ1bmN0aW9uIF9sb2NhdGlvbkZvdW5kKGV2dCl7aWYodGhpcy5fX2xvY2F0aW5nKXt0aGlzLl9fbG9jYXRpbmc9ZmFsc2U7dGhpcy5fc2V0UmVhZHlTdGF0ZSgpfX19LHtrZXk6J19sb2NhdGlvbkVycm9yJyx2YWx1ZTpmdW5jdGlvbiBfbG9jYXRpb25FcnJvcihldnQpe2lmKHRoaXMuX19sb2NhdGluZyl7dGhpcy5fX2xvY2F0aW5nPWZhbHNlO3RoaXMuX3NldFJlYWR5U3RhdGUoKX19fSx7a2V5Oidfc2V0TG9jYXRpbmdTdGF0ZScsdmFsdWU6ZnVuY3Rpb24gX3NldExvY2F0aW5nU3RhdGUoKXtpZighdGhpcy5fX2xvY2F0ZUJ1dHRvbnx8IXRoaXMuX19sb2NhdGluZylyZXR1cm47TC5Eb21VdGlsLmFkZENsYXNzKHRoaXMuX19sb2NhdGVCdXR0b24sJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uLS1sb2NhdGluZycpO3RoaXMuX19kaXNhYmxlZD10cnVlO3RoaXMuX3VwZGF0ZURpc2FibGVkKCl9fSx7a2V5Oidfc2V0UmVhZHlTdGF0ZScsdmFsdWU6ZnVuY3Rpb24gX3NldFJlYWR5U3RhdGUoKXtpZighdGhpcy5fX2xvY2F0ZUJ1dHRvbnx8dGhpcy5fX2xvY2F0aW5nKXJldHVybjt0aGlzLl9fbG9jYXRlQnV0dG9uLmlubmVySFRNTD10aGlzLm9wdGlvbnMubG9jYXRlSWNvbjtMLkRvbVV0aWwucmVtb3ZlQ2xhc3ModGhpcy5fX2xvY2F0ZUJ1dHRvbiwnbGVhZmxldC1jb250cm9sLWxvY2F0ZS1idXR0b24tLWxvY2F0aW5nJyk7TC5Eb21VdGlsLnJlbW92ZUNsYXNzKHRoaXMuX19sb2NhdGVCdXR0b24sJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uLS1lcnJvcicpO3RoaXMuX19kaXNhYmxlZD1mYWxzZTt0aGlzLl91cGRhdGVEaXNhYmxlZCgpfX0se2tleTonX3VwZGF0ZURpc2FibGVkJyx2YWx1ZTpmdW5jdGlvbiBfdXBkYXRlRGlzYWJsZWQoKXtpZighdGhpcy5fX2xvY2F0ZUJ1dHRvbilyZXR1cm47aWYodGhpcy5fX2Rpc2FibGVkKXtMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fX2xvY2F0ZUJ1dHRvbiwnbGVhZmxldC1jb250cm9sLWxvY2F0ZS1idXR0b24tLWRpc2FibGVkJyl9aWYoIXRoaXMuX19kaXNhYmxlZCl7TC5Eb21VdGlsLnJlbW92ZUNsYXNzKHRoaXMuX19sb2NhdGVCdXR0b24sJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uLS1kaXNhYmxlZCcpfX19XSk7cmV0dXJuIExvY2F0ZUNvbnRyb2x9KEwuQ29udHJvbCk7O1B4TWFwLkxvY2F0ZUNvbnRyb2w9TG9jYXRlQ29udHJvbH0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIjo1LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCI6OSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiOjE2LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCI6MTcsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0XCI6MTgsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIjoxOSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI6MjB9XSwxMzU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfZ2V0SXRlcmF0b3IyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3InKTt2YXIgX2dldEl0ZXJhdG9yMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO3ZhciBfa2V5cz1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO3ZhciBfdHlwZW9mMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7dmFyIF90eXBlb2YzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO3ZhciBfYXNzaWduPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7dmFyIF9hc3NpZ24yPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7dmFyIF93ZWFrTWFwPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcCcpO3ZhciBfd2Vha01hcDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vha01hcCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5FbGVtZW50SW1wbD17YmVmb3JlUmVnaXN0ZXI6ZnVuY3Rpb24gYmVmb3JlUmVnaXN0ZXIoKXt0aGlzLmVsZW1lbnRJbnN0PW51bGx9LGF0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5fX2VsQXR0YWNoZWQ9dHJ1ZX0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLl9fZWxBdHRhY2hlZD1mYWxzZX0sbm90aWZ5SW5zdFJlYWR5OmZ1bmN0aW9uIG5vdGlmeUluc3RSZWFkeSgpe3ZhciBpc1JlYWR5PWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp0cnVlO2lmKCFpc1JlYWR5KXJldHVybiBmYWxzZTt0aGlzLmZpcmUoJ3B4LW1hcC1lbGVtZW50LXJlYWR5LXRvLWFkZCcpO3JldHVybiB0cnVlfSxzaG91bGRBZGRJbnN0OmZ1bmN0aW9uIHNob3VsZEFkZEluc3QoKXtpZighdGhpcy5lbGVtZW50SW5zdCl7dmFyIG9wdGlvbnM9dGhpcy5fX2luaXRpYWxPcHRpb25zPXRoaXMuZ2V0SW5zdE9wdGlvbnMoKTt0aGlzLmVsZW1lbnRJbnN0PXRoaXMuY3JlYXRlSW5zdChvcHRpb25zKTt0aGlzLmZpcmUoJ3B4LW1hcC1lbGVtZW50LWluc3RhbmNlLWNyZWF0ZWQnKX10aGlzLl9faW5zdEV2ZW50cz10aGlzLl9faW5zdEV2ZW50c3x8W107dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcD10aGlzLl9faW5zdEV2ZW50c0VsZW1lbnRzTWFwfHxuZXcgX3dlYWtNYXAyLmRlZmF1bHR9LHNob3VsZFJlbW92ZUluc3Q6ZnVuY3Rpb24gc2hvdWxkUmVtb3ZlSW5zdCgpe3RoaXMudW5iaW5kQWxsRXZlbnRzKHRoaXMuX19pbnN0RXZlbnRzLHRoaXMuX19pbnN0RXZlbnRzRWxlbWVudHNNYXApO3RoaXMuX19pbnN0RXZlbnRzPW51bGw7dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcD1udWxsfSxzaG91bGRVcGRhdGVJbnN0OmZ1bmN0aW9uIHNob3VsZFVwZGF0ZUluc3QoKXtpZighdGhpcy5lbGVtZW50SW5zdCYmdGhpcy5fX2VsQXR0YWNoZWQmJnRoaXMuY2FuQWRkSW5zdCgpKXt0aGlzLm5vdGlmeUluc3RSZWFkeSh0aGlzLmNhbkFkZEluc3QoKSl9aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3ZhciBsYXN0T3B0aW9ucz10aGlzLl9fbGFzdE9wdGlvbnN8fHRoaXMuX19pbml0aWFsT3B0aW9uczt2YXIgbmV4dE9wdGlvbnM9dGhpcy5nZXRJbnN0T3B0aW9ucygpO3RoaXMudXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyk7dGhpcy5fX2xhc3RPcHRpb25zPW5leHRPcHRpb25zfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgY3JlYXRlSW5zdGAgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuJyl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdCgpe3Rocm93IG5ldyBFcnJvcignVGhlIGB1cGRhdGVJbnN0YCBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZC4nKX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgZ2V0SW5zdE9wdGlvbnNgIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLicpfSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgYmluZEluc3RgIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLicpfSxyZW1vdmVJbnN0OmZ1bmN0aW9uIHJlbW92ZUluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgdW5iaW5kSW5zdGAgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuJyl9LGV4dGVuZE9iajpmdW5jdGlvbiBleHRlbmRPYmoob2JqKXtpZighb2JqfHwhKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IEVycm9yKCdUaGUgZmlyc3QgcGFyYW1ldGVyIG9mIGBleHRlbmRPYmpgIG11c3QgYmUgYW4gb2JqZWN0IHRvIGJlIG11dGF0ZWQuJyk7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgscHJvcGVydGllcz1BcnJheShfbGVuPjE/X2xlbi0xOjApLF9rZXk9MTtfa2V5PF9sZW47X2tleSsrKXtwcm9wZXJ0aWVzW19rZXktMV09YXJndW1lbnRzW19rZXldfWlmKHByb3BlcnRpZXMubGVuZ3RoKXtfYXNzaWduMi5kZWZhdWx0LmFwcGx5KE9iamVjdCxbb2JqXS5jb25jYXQocHJvcGVydGllcykpfXJldHVybiBvYmp9LGFkZFByb3BlcnRpZXM6ZnVuY3Rpb24gYWRkUHJvcGVydGllcygpe3RoaXMucHJvcGVydGllcz10aGlzLnByb3BlcnRpZXN8fHt9O2Zvcih2YXIgX2xlbjI9YXJndW1lbnRzLmxlbmd0aCxwcm9wZXJ0aWVzPUFycmF5KF9sZW4yKSxfa2V5Mj0wO19rZXkyPF9sZW4yO19rZXkyKyspe3Byb3BlcnRpZXNbX2tleTJdPWFyZ3VtZW50c1tfa2V5Ml19aWYocHJvcGVydGllcy5sZW5ndGgpe3RoaXMuZXh0ZW5kLmFwcGx5KHRoaXMsW3RoaXMucHJvcGVydGllc10uY29uY2F0KHByb3BlcnRpZXMpKX1yZXR1cm4gdGhpcy5wcm9wZXJ0aWVzfSxiaW5kRXZlbnRzOmZ1bmN0aW9uIGJpbmRFdmVudHMoZXZ0cyx0YXJnZXQpe2lmKCh0eXBlb2YgZXZ0cz09PSd1bmRlZmluZWQnPyd1bmRlZmluZWQnOigwLF90eXBlb2YzLmRlZmF1bHQpKGV2dHMpKSE9PSdvYmplY3QnfHwhKDAsX2tleXMyLmRlZmF1bHQpKGV2dHMpLmxlbmd0aClyZXR1cm47dmFyIGVsPXRhcmdldHx8dGhpcy5lbGVtZW50SW5zdDtpZighZWx8fCFlbC5vbilyZXR1cm47dmFyIGJvdW5kRXZ0cz10aGlzLl9faW5zdEV2ZW50czt2YXIgYm91bmRFdnRFbHM9dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcDtmb3IodmFyIGV2dE5hbWUgaW4gZXZ0cyl7dmFyIGV2dFJlZmVyZW5jZT17bmFtZTpldnROYW1lLGZuOmV2dHNbZXZ0TmFtZV19O2VsLm9uKGV2dFJlZmVyZW5jZS5uYW1lLGV2dFJlZmVyZW5jZS5mbik7Ym91bmRFdnRzLnB1c2goZXZ0UmVmZXJlbmNlKTtib3VuZEV2dEVscy5zZXQoZXZ0UmVmZXJlbmNlLGVsKX19LHVuYmluZEFsbEV2ZW50czpmdW5jdGlvbiB1bmJpbmRBbGxFdmVudHMoYm91bmRFdnRzLGJvdW5kRXZ0RWxzKXtpZighYm91bmRFdnRzfHwhYm91bmRFdnRzLmxlbmd0aHx8IWJvdW5kRXZ0RWxzKXJldHVybjt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcj1mYWxzZTt2YXIgX2l0ZXJhdG9yRXJyb3I9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcj0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGJvdW5kRXZ0cyksX3N0ZXA7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPShfc3RlcD1faXRlcmF0b3IubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPXRydWUpe3ZhciBldnQ9X3N0ZXAudmFsdWU7dmFyIGVsPWJvdW5kRXZ0RWxzLmdldChldnQpO2lmKCFlbHx8IWVsLm9mZiljb250aW51ZTt2YXIgbmFtZT1ldnQubmFtZSxmbj1ldnQuZm47ZWwub2ZmKG5hbWUsZm4pO2JvdW5kRXZ0RWxzLmRlbGV0ZShldnQpfX1jYXRjaChlcnIpe19kaWRJdGVyYXRvckVycm9yPXRydWU7X2l0ZXJhdG9yRXJyb3I9ZXJyfWZpbmFsbHl7dHJ5e2lmKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uJiZfaXRlcmF0b3IucmV0dXJuKXtfaXRlcmF0b3IucmV0dXJuKCl9fWZpbmFsbHl7aWYoX2RpZEl0ZXJhdG9yRXJyb3Ipe3Rocm93IF9pdGVyYXRvckVycm9yfX19fSxpc1NoYWR5U2NvcGVkOmZ1bmN0aW9uIGlzU2hhZHlTY29wZWQoKXtyZXR1cm4hUG9seW1lci5TZXR0aW5ncy51c2VOYXRpdmVTaGFkb3d9LGdldFNoYWR5U2NvcGU6ZnVuY3Rpb24gZ2V0U2hhZHlTY29wZSgpe3JldHVybidzdHlsZS1zY29wZSBweC1tYXAnfX07UHhNYXBCZWhhdmlvci5FbGVtZW50PVtQeE1hcEJlaGF2aW9yLkVsZW1lbnRJbXBsXX0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiOjEsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiOjUsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjoxMCxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcFwiOjE1LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiOjIyfV0sMTM2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JzsoZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7d2luZG93LlB4TWFwQmVoYXZpb3I9d2luZG93LlB4TWFwQmVoYXZpb3J8fHt9O1B4TWFwQmVoYXZpb3IuTGF5ZXJHcm91cEltcGw9e3Byb3BlcnRpZXM6e25hbWU6e3R5cGU6U3RyaW5nLG5vdGlmeTp0cnVlfX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KCl7cmV0dXJuIEwubGF5ZXJHcm91cCgpfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QoKXtyZXR1cm4gdW5kZWZpbmVkfSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybnt9fX07UHhNYXBCZWhhdmlvci5MYXllckdyb3VwPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuUGFyZW50TGF5ZXIsUHhNYXBCZWhhdmlvci5MYXllckdyb3VwSW1wbF19KSgpO1xuXG59LHt9XSwxMzc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfa2V5cz1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO3ZhciBfY2xhc3NDYWxsQ2hlY2syPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO3ZhciBfY2xhc3NDYWxsQ2hlY2szPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7dmFyIF9jcmVhdGVDbGFzczI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7dmFyIF9jcmVhdGVDbGFzczM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian19KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcD13aW5kb3cuUHhNYXB8fHt9O3ZhciBTdGF0aWNJY29uPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gU3RhdGljSWNvbigpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307KDAsX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLFN0YXRpY0ljb24pO3RoaXMuaWNvbj10aGlzLmNyZWF0ZUljb24oc2V0dGluZ3MpO3JldHVybiB0aGlzLmljb259KDAsX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShTdGF0aWNJY29uLFt7a2V5OidjcmVhdGVJY29uJyx2YWx1ZTpmdW5jdGlvbiBjcmVhdGVJY29uKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTt2YXIgX3NldHRpbmdzJHR5cGU9c2V0dGluZ3MudHlwZSx0eXBlPV9zZXR0aW5ncyR0eXBlPT09dW5kZWZpbmVkPydpbmZvJzpfc2V0dGluZ3MkdHlwZSxzdHlsZVNjb3BlPXNldHRpbmdzLnN0eWxlU2NvcGU7dmFyIGNsYXNzTmFtZT10aGlzLl9nZW5lcmF0ZVN0YXRpY0ljb25DbGFzc2VzKHR5cGUsc3R5bGVTY29wZSk7dmFyIGh0bWw9J1xcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1pY29uLXN0YXRpY19fd3JhcHBlclwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cIm1hcC1pY29uLXN0YXRpY19fYm9keVwiPjwvaT5cXG4gICAgICAgICAgPGkgY2xhc3M9XCJtYXAtaWNvbi1zdGF0aWNfX2Rlc2NlbmRlclwiPjwvaT5cXG4gICAgICAgICAgPGkgY2xhc3M9XCJtYXAtaWNvbi1zdGF0aWNfX2JhZGdlXCI+PC9pPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgJzt2YXIgaWNvblNpemU9TC5wb2ludCgyMywzMSk7dmFyIGljb25BbmNob3I9TC5wb2ludCg3LjYsMzEpO3ZhciBwb3B1cEFuY2hvcj1MLnBvaW50KDEsLTMxKTt2YXIgb3B0aW9ucz17Y2xhc3NOYW1lOmNsYXNzTmFtZSxodG1sOmh0bWwsaWNvblNpemU6aWNvblNpemUsaWNvbkFuY2hvcjppY29uQW5jaG9yLHBvcHVwQW5jaG9yOnBvcHVwQW5jaG9yfTtyZXR1cm4gTC5kaXZJY29uKG9wdGlvbnMpfX0se2tleTonX2dlbmVyYXRlU3RhdGljSWNvbkNsYXNzZXMnLHZhbHVlOmZ1bmN0aW9uIF9nZW5lcmF0ZVN0YXRpY0ljb25DbGFzc2VzKHR5cGUsc3R5bGVTY29wZSl7dmFyIGNsYXNzZXM9WydtYXAtaWNvbicsJ21hcC1pY29uLXN0YXRpYycsJ21hcC1pY29uLXN0YXRpYy0td2l0aC1iYWRnZSddO2lmKHR5cGUmJnR5cGUubGVuZ3RoKXtjbGFzc2VzLnB1c2goJ21hcC1pY29uLXN0YXRpYy0tJyt0eXBlKX1pZihzdHlsZVNjb3BlKXtjbGFzc2VzLnB1c2goc3R5bGVTY29wZSl9cmV0dXJuIGNsYXNzZXMuam9pbignICcpfX1dKTtyZXR1cm4gU3RhdGljSWNvbn0oKTs7UHhNYXAuU3RhdGljSWNvbj1TdGF0aWNJY29uO3ZhciBTeW1ib2xJY29uPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gU3ltYm9sSWNvbigpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307KDAsX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLFN5bWJvbEljb24pO3RoaXMuaWNvbj10aGlzLmNyZWF0ZUljb24oc2V0dGluZ3MpO3JldHVybiB0aGlzLmljb259KDAsX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShTeW1ib2xJY29uLFt7a2V5OidjcmVhdGVJY29uJyx2YWx1ZTpmdW5jdGlvbiBjcmVhdGVJY29uKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTt2YXIgX3NldHRpbmdzJHR5cGUyPXNldHRpbmdzLnR5cGUsdHlwZT1fc2V0dGluZ3MkdHlwZTI9PT11bmRlZmluZWQ/J2luZm8nOl9zZXR0aW5ncyR0eXBlMixfc2V0dGluZ3MkaWNvbj1zZXR0aW5ncy5pY29uLGljb249X3NldHRpbmdzJGljb249PT11bmRlZmluZWQ/J3B4LW5hdjpmYXZvcml0ZSc6X3NldHRpbmdzJGljb24sc3R5bGVTY29wZT1zZXR0aW5ncy5zdHlsZVNjb3BlLF9zZXR0aW5ncyRzdHJva2U9c2V0dGluZ3Muc3Ryb2tlLHN0cm9rZT1fc2V0dGluZ3Mkc3Ryb2tlPT09dW5kZWZpbmVkPydjdXJyZW50Q29sb3InOl9zZXR0aW5ncyRzdHJva2UsX3NldHRpbmdzJGZpbGw9c2V0dGluZ3MuZmlsbCxmaWxsPV9zZXR0aW5ncyRmaWxsPT09dW5kZWZpbmVkPydub25lJzpfc2V0dGluZ3MkZmlsbCxfc2V0dGluZ3Mkc3Ryb2tlV2lkdGg9c2V0dGluZ3Muc3Ryb2tlV2lkdGgsc3Ryb2tlV2lkdGg9X3NldHRpbmdzJHN0cm9rZVdpZHRoPT09dW5kZWZpbmVkPycycHgnOl9zZXR0aW5ncyRzdHJva2VXaWR0aDt2YXIgY2xhc3NOYW1lPXRoaXMuX2dlbmVyYXRlU3ltYm9sSWNvbkNsYXNzZXModHlwZSxzdHlsZVNjb3BlKTt2YXIgaHRtbD0nXFxuICAgICAgPGRpdiBjbGFzcz1cIm1hcC1pY29uLXN5bWJvbF9fd3JhcHBlclwiPlxcbiAgICAgICAgPGkgY2xhc3M9XCJtYXAtaWNvbi1zeW1ib2xfX2JvZHlcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1pY29uLXN5bWJvbF9fc3ltYm9sLS1jb250YWluZXIgZmxleCBmbGV4LS1taWRkbGUgZmxleC0tY2VudGVyXCI+XFxuICAgICAgICAgICAgPHB4LWljb24gaWNvbj1cIicraWNvbisnXCIgc3R5bGU9XCJzdHJva2U6JytzdHJva2UrJzsgZmlsbDonK2ZpbGwrJzsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IHN0cm9rZS13aWR0aDonK3N0cm9rZVdpZHRoKydcIj48L3B4LWljb24+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9pPlxcbiAgICAgICAgPGkgY2xhc3M9XCJtYXAtaWNvbi1zeW1ib2xfX2Rlc2NlbmRlclwiPjwvaT5cXG4gICAgICAgIDxpIGNsYXNzPVwibWFwLWljb24tc3ltYm9sX19iYWRnZVwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICAnO3ZhciBpY29uU2l6ZT1MLnBvaW50KDQwLDU2KTt2YXIgaWNvbkFuY2hvcj1MLnBvaW50KDE5LjYsNTcpO3ZhciBwb3B1cEFuY2hvcj1MLnBvaW50KDEsLTU4KTt2YXIgb3B0aW9ucz17Y2xhc3NOYW1lOmNsYXNzTmFtZSxodG1sOmh0bWwsaWNvblNpemU6aWNvblNpemUsaWNvbkFuY2hvcjppY29uQW5jaG9yLHBvcHVwQW5jaG9yOnBvcHVwQW5jaG9yfTtyZXR1cm4gTC5kaXZJY29uKG9wdGlvbnMpfX0se2tleTonX2dlbmVyYXRlU3ltYm9sSWNvbkNsYXNzZXMnLHZhbHVlOmZ1bmN0aW9uIF9nZW5lcmF0ZVN5bWJvbEljb25DbGFzc2VzKHR5cGUsc3R5bGVTY29wZSl7dmFyIGNsYXNzZXM9WydtYXAtaWNvbicsJ21hcC1pY29uLXN5bWJvbCcsJ21hcC1pY29uLXN5bWJvbC0td2l0aC1iYWRnZSddO2lmKHR5cGUmJnR5cGUubGVuZ3RoKXtjbGFzc2VzLnB1c2goJ21hcC1pY29uLXN5bWJvbC0tJyt0eXBlKX1pZihzdHlsZVNjb3BlKXtjbGFzc2VzLnB1c2goc3R5bGVTY29wZSl9cmV0dXJuIGNsYXNzZXMuam9pbignICcpfX1dKTtyZXR1cm4gU3ltYm9sSWNvbn0oKTs7UHhNYXAuU3ltYm9sSWNvbj1TeW1ib2xJY29uO3ZhciBDbHVzdGVySWNvbj1mdW5jdGlvbigpe2Z1bmN0aW9uIENsdXN0ZXJJY29uKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTsoMCxfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsQ2x1c3Rlckljb24pO3RoaXMuaWNvbj10aGlzLmNyZWF0ZUljb24oc2V0dGluZ3MpO3JldHVybiB0aGlzLmljb259KDAsX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShDbHVzdGVySWNvbixbe2tleTonY3JlYXRlSWNvbicsdmFsdWU6ZnVuY3Rpb24gY3JlYXRlSWNvbigpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307dmFyIGNvdW50PXNldHRpbmdzLmNvdW50LGNvdW50QnlUeXBlPXNldHRpbmdzLmNvdW50QnlUeXBlLGNvbG9yc0J5VHlwZT1zZXR0aW5ncy5jb2xvcnNCeVR5cGUsX3NldHRpbmdzJGNvbnRhaW5lclNpPXNldHRpbmdzLmNvbnRhaW5lclNpemUsY29udGFpbmVyU2l6ZT1fc2V0dGluZ3MkY29udGFpbmVyU2k9PT11bmRlZmluZWQ/NTA6X3NldHRpbmdzJGNvbnRhaW5lclNpLF9zZXR0aW5ncyRwYXRoU2l6ZT1zZXR0aW5ncy5wYXRoU2l6ZSxwYXRoU2l6ZT1fc2V0dGluZ3MkcGF0aFNpemU9PT11bmRlZmluZWQ/MTA6X3NldHRpbmdzJHBhdGhTaXplLF9zZXR0aW5ncyRib3JkZXJTaXplPXNldHRpbmdzLmJvcmRlclNpemUsYm9yZGVyU2l6ZT1fc2V0dGluZ3MkYm9yZGVyU2l6ZT09PXVuZGVmaW5lZD8wOl9zZXR0aW5ncyRib3JkZXJTaXplLF9zZXR0aW5ncyRjbGFzc05hbWU9c2V0dGluZ3MuY2xhc3NOYW1lLGNsYXNzTmFtZT1fc2V0dGluZ3MkY2xhc3NOYW1lPT09dW5kZWZpbmVkPycnOl9zZXR0aW5ncyRjbGFzc05hbWUsc3R5bGVTY29wZT1zZXR0aW5ncy5zdHlsZVNjb3BlO3ZhciBjaGFydFNpemU9Y29udGFpbmVyU2l6ZS0oYm9yZGVyU2l6ZT4wP2JvcmRlclNpemUqMi0wLjU6MCk7dmFyIGljb25TaXplPUwucG9pbnQoY29udGFpbmVyU2l6ZSxjb250YWluZXJTaXplKTt2YXIgc3ZnPXRoaXMuX2dlbmVyYXRlQ2x1c3Rlckljb25TVkcoY291bnRCeVR5cGUsY29sb3JzQnlUeXBlLGNoYXJ0U2l6ZSxwYXRoU2l6ZSk7dmFyIGNsYXNzZXM9J21hcC1pY29uLWNsdXN0ZXIgJysoY2xhc3NOYW1lfHwnJykrJyAnKyhzdHlsZVNjb3BlfHwnJyk7dmFyIGh0bWw9J1xcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1pY29uLWNsdXN0ZXJfX2NvbnRhaW5lclwiIHN0eWxlPVwid2lkdGg6ICcrY29udGFpbmVyU2l6ZSsncHg7IGhlaWdodDogJytjb250YWluZXJTaXplKydweFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cIm1hcC1pY29uLWNsdXN0ZXJfX3N2Z1wiPicrc3ZnKyc8L2k+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtaWNvbi1jbHVzdGVyX19ib2R5XCI+Jytjb3VudCsnPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAnO3ZhciBvcHRpb25zPXtpY29uU2l6ZTppY29uU2l6ZSxjbGFzc05hbWU6Y2xhc3NlcyxodG1sOmh0bWx9O3JldHVybiBMLmRpdkljb24ob3B0aW9ucyl9fSx7a2V5OidfZ2VuZXJhdGVDbHVzdGVySWNvblNWRycsdmFsdWU6ZnVuY3Rpb24gX2dlbmVyYXRlQ2x1c3Rlckljb25TVkcoY291bnRCeVR5cGUsY29sb3JzQnlUeXBlLGNoYXJ0U2l6ZSxwYXRoU2l6ZSl7dmFyIHR5cGVLZXlzPSgwLF9rZXlzMi5kZWZhdWx0KShjb3VudEJ5VHlwZSk7dmFyIHR5cGVPYmpzPXR5cGVLZXlzLm1hcChmdW5jdGlvbih0eXBlKXtyZXR1cm57dHlwZTp0eXBlLGNvdW50OmNvdW50QnlUeXBlW3R5cGVdLGNvbG9yOmNvbG9yc0J5VHlwZVt0eXBlXX19KTt0eXBlT2Jqcy5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuY291bnQtYi5jb3VudH0pO3ZhciB0eXBlcz1bXTt2YXIgY29sb3JzPVtdO3ZhciBpPXZvaWQgMCxsZW49dm9pZCAwLHR5cGU9dm9pZCAwLHRvdGFsPXZvaWQgMDtmb3IoaT0wLGxlbj10eXBlS2V5cy5sZW5ndGg7aTxsZW47aSsrKXt0eXBlPXR5cGVLZXlzW2ldO3RvdGFsPWNvdW50QnlUeXBlW3R5cGVdO3R5cGVzLnB1c2goY291bnRCeVR5cGVbdHlwZV0pO2NvbG9ycy5wdXNoKGNvbG9yc0J5VHlwZVt0eXBlXSl9cmV0dXJuIHRoaXMuY3JlYXRlUGllQ2hhcnQodHlwZXMsY29sb3JzLGNoYXJ0U2l6ZSxwYXRoU2l6ZSl9fSx7a2V5OidjcmVhdGVQaWVDaGFydCcsdmFsdWU6ZnVuY3Rpb24gY3JlYXRlUGllQ2hhcnQoZ3JvdXBzQXJyYXksY29sb3JzQXJyYXksY2hhcnRTaXplLHBhdGhTaXplKXt2YXIgcGllR2VuZXJhdG9yRm49UHguZDMucGllKCk7dmFyIGFyY0RhdGE9cGllR2VuZXJhdG9yRm4oZ3JvdXBzQXJyYXkpO3ZhciByYWRpdXM9Y2hhcnRTaXplLzI7dmFyIGlubmVyUmFkaXVzPXJhZGl1cy1wYXRoU2l6ZTt2YXIgYXJjUGF0aEdlbmVyYXRvckZuPVB4LmQzLmFyYygpLm91dGVyUmFkaXVzKHJhZGl1cykuaW5uZXJSYWRpdXMoaW5uZXJSYWRpdXMpO3ZhciBwYXRoTGlzdFRtcGw9ZnVuY3Rpb24gcGF0aExpc3RUbXBsKHBhdGhzKXtyZXR1cm4gcGF0aHMubWFwKHBhdGhUbXBsKS5qb2luKCcnKX07dmFyIHBhdGhUbXBsPWZ1bmN0aW9uIHBhdGhUbXBsKHBhdGhEYXRhLHBhdGhJbmRleCl7cmV0dXJuJzxwYXRoIGQ9XCInK2FyY1BhdGhHZW5lcmF0b3JGbihwYXRoRGF0YSkrJ1wiIGZpbGw9XCInK2NvbG9yc0FycmF5W3BhdGhJbmRleF0rJ1wiIG9wYWNpdHk9XCIxXCI+PC9wYXRoPid9O3JldHVybidcXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiB3aWR0aD1cIicrY2hhcnRTaXplKydcIiBoZWlnaHQ9XCInK2NoYXJ0U2l6ZSsnXCI+XFxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCcrcmFkaXVzKycsICcrcmFkaXVzKycpXCI+XFxuICAgICAgICAgICAgICAgICcrcGF0aExpc3RUbXBsKGFyY0RhdGEpKydcXG4gICAgICAgICAgICA8L2c+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgICAnfX1dKTtyZXR1cm4gQ2x1c3Rlckljb259KCk7O1B4TWFwLkNsdXN0ZXJJY29uPUNsdXN0ZXJJY29ufSkoKTtcblxufSx7XCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjoxMCxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiOjE2LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCI6MTd9XSwxMzg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfc3RyaW5naWZ5PXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeScpO3ZhciBfc3RyaW5naWZ5Mj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdpZnkpO3ZhciBfa2V5cz1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO3ZhciBfdHlwZW9mMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7dmFyIF90eXBlb2YzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfX0oZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7d2luZG93LlB4TWFwQmVoYXZpb3I9d2luZG93LlB4TWFwQmVoYXZpb3J8fHt9O1B4TWFwQmVoYXZpb3IuR2VvSlNPTkxheWVySW1wbD17cHJvcGVydGllczp7ZGF0YTp7dHlwZTpPYmplY3Qsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxmZWF0dXJlU3R5bGU6e3R5cGU6T2JqZWN0LG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sdXBkYXRlOmZ1bmN0aW9uIHVwZGF0ZSgpe2lmKCF0aGlzLmVsZW1lbnRJbnN0KXJldHVybjt0aGlzLnNob3VsZFVwZGF0ZUluc3QoKX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRoaXMuZGF0YSYmKDAsX3R5cGVvZjMuZGVmYXVsdCkodGhpcy5kYXRhKT09PSdvYmplY3QnJiYoMCxfa2V5czIuZGVmYXVsdCkodGhpcy5kYXRhKS5sZW5ndGh9LGFkZEluc3Q6ZnVuY3Rpb24gYWRkSW5zdChwYXJlbnQpe3ZhciBfdGhpcz10aGlzO3ZhciBhZGRlZEZuPXRoaXMuX2hhbmRsZUZlYXR1cmVBZGRlZC5iaW5kKHRoaXMpO3ZhciByZW1vdmVkRm49dGhpcy5faGFuZGxlRmVhdHVyZVJlbW92ZWQuYmluZCh0aGlzKTt0aGlzLmJpbmRFdmVudHMoeydsYXllcmFkZCc6YWRkZWRGbiwnbGF5ZXJyZW1vdmUnOnJlbW92ZWRGbn0pO2lmKHRoaXMuZWxlbWVudEluc3QuZ2V0TGF5ZXJzKCkubGVuZ3RoIT09MCl7dGhpcy5lbGVtZW50SW5zdC5lYWNoTGF5ZXIoZnVuY3Rpb24obGF5ZXIpe190aGlzLmVsZW1lbnRJbnN0LmZpcmUoJ2xheWVyYWRkJyx7bGF5ZXI6bGF5ZXJ9KX0pfVB4TWFwQmVoYXZpb3IuTGF5ZXJJbXBsLmFkZEluc3QuY2FsbCh0aGlzLHBhcmVudCl9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXt2YXIgX3RoaXMyPXRoaXM7dmFyIHN0eWxlQXR0cmlidXRlUHJvcGVydGllcz10aGlzLmdldEluc3RPcHRpb25zKCkuZmVhdHVyZVN0eWxlO3ZhciBnZW9qc29uTGF5ZXI9TC5nZW9Kc29uKG9wdGlvbnMuZGF0YSx7cG9pbnRUb0xheWVyOmZ1bmN0aW9uIHBvaW50VG9MYXllcihmZWF0dXJlLGxhdGxuZyl7dmFyIGZlYXR1cmVQcm9wZXJ0aWVzPWZlYXR1cmUucHJvcGVydGllcy5zdHlsZXx8e307dmFyIGF0dHJpYnV0ZVByb3BlcnRpZXM9b3B0aW9ucy5mZWF0dXJlU3R5bGU7dmFyIHN0eWxlPV90aGlzMi5fZ2V0U3R5bGUoZmVhdHVyZSxmZWF0dXJlUHJvcGVydGllcyxhdHRyaWJ1dGVQcm9wZXJ0aWVzKTtyZXR1cm4gbmV3IEwuQ2lyY2xlTWFya2VyKGxhdGxuZyxzdHlsZSl9LG9uRWFjaEZlYXR1cmU6ZnVuY3Rpb24gb25FYWNoRmVhdHVyZShmZWF0dXJlLGxheWVyKXtpZighX3RoaXMyLnNob3dGZWF0dXJlUHJvcGVydGllcylyZXR1cm47X3RoaXMyLl9iaW5kUG9wdXAoZmVhdHVyZSxsYXllcil9LHN0eWxlOmZ1bmN0aW9uIHN0eWxlKGZlYXR1cmUpe3ZhciBmZWF0dXJlUHJvcGVydGllcz1mZWF0dXJlLnByb3BlcnRpZXMuc3R5bGV8fHt9O3JldHVybiBfdGhpczIuX2dldFN0eWxlKGZlYXR1cmVQcm9wZXJ0aWVzLHN0eWxlQXR0cmlidXRlUHJvcGVydGllcyl9fSk7cmV0dXJuIGdlb2pzb25MYXllcn0sX2dldFN0eWxlOmZ1bmN0aW9uIF9nZXRTdHlsZShmZWF0dXJlUHJvcGVydGllcyxhdHRyaWJ1dGVQcm9wZXJ0aWVzKXtyZXR1cm57cmFkaXVzOmZlYXR1cmVQcm9wZXJ0aWVzLnJhZGl1c3x8YXR0cmlidXRlUHJvcGVydGllcy5yYWRpdXN8fDUsY29sb3I6ZmVhdHVyZVByb3BlcnRpZXMuY29sb3J8fGF0dHJpYnV0ZVByb3BlcnRpZXMuY29sb3J8fCcjM0U4N0U4JyxmaWxsQ29sb3I6ZmVhdHVyZVByb3BlcnRpZXMuZmlsbENvbG9yfHxhdHRyaWJ1dGVQcm9wZXJ0aWVzLmZpbGxDb2xvcnx8JyM4OEJERTYnLHdlaWdodDpmZWF0dXJlUHJvcGVydGllcy53ZWlnaHR8fGF0dHJpYnV0ZVByb3BlcnRpZXMud2VpZ2h0fHwyLG9wYWNpdHk6ZmVhdHVyZVByb3BlcnRpZXMub3BhY2l0eXx8YXR0cmlidXRlUHJvcGVydGllcy5vcGFjaXR5fHwxLGZpbGxPcGFjaXR5OmZlYXR1cmVQcm9wZXJ0aWVzLmZpbGxPcGFjaXR5fHxhdHRyaWJ1dGVQcm9wZXJ0aWVzLmZpbGxPcGFjaXR5fHwwLjR9fSxfYmluZEZlYXR1cmVQb3B1cHM6ZnVuY3Rpb24gX2JpbmRGZWF0dXJlUG9wdXBzKCl7dmFyIF90aGlzMz10aGlzO2lmKCF0aGlzLmVsZW1lbnRJbnN0KXJldHVybjt0aGlzLmVsZW1lbnRJbnN0LmVhY2hMYXllcihmdW5jdGlvbihsYXllcil7cmV0dXJuIF90aGlzMy5fYmluZFBvcHVwKGxheWVyLmZlYXR1cmUsbGF5ZXIpfSl9LF9iaW5kUG9wdXA6ZnVuY3Rpb24gX2JpbmRQb3B1cChmZWF0dXJlLGxheWVyKXt2YXIgcG9wdXBEYXRhS2V5cz0oMCxfa2V5czIuZGVmYXVsdCkoZmVhdHVyZS5wcm9wZXJ0aWVzKS5maWx0ZXIoZnVuY3Rpb24oa2V5KXtyZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkmJmZlYXR1cmUucHJvcGVydGllc1trZXldIT09J3Vuc2V0JyYma2V5IT09J3N0eWxlJ30pO2lmKCFwb3B1cERhdGFLZXlzLmxlbmd0aClyZXR1cm47dmFyIHBvcHVwRGF0YT1wb3B1cERhdGFLZXlzLnJlZHVjZShmdW5jdGlvbihhY2N1bSxrZXkpe2FjY3VtW2tleV09ZmVhdHVyZS5wcm9wZXJ0aWVzW2tleV07cmV0dXJuIGFjY3VtfSx7fSk7dmFyIHBvcHVwPW5ldyBQeE1hcC5EYXRhUG9wdXAoe3RpdGxlOidGZWF0dXJlIFByb3BlcnRpZXMnLGRhdGE6cG9wdXBEYXRhLGF1dG9QYW5QYWRkaW5nOlsxLDFdfSk7bGF5ZXIuYmluZFBvcHVwKHBvcHVwKX0sX3VuYmluZEZlYXR1cmVQb3B1cHM6ZnVuY3Rpb24gX3VuYmluZEZlYXR1cmVQb3B1cHMoKXt2YXIgX3RoaXM0PXRoaXM7aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3RoaXMuZWxlbWVudEluc3QuZWFjaExheWVyKGZ1bmN0aW9uKGxheWVyKXtyZXR1cm4gX3RoaXM0Ll91bmJpbmRQb3B1cChsYXllcil9KX0sX3VuYmluZFBvcHVwOmZ1bmN0aW9uIF91bmJpbmRQb3B1cChsYXllcil7aWYodHlwZW9mIGxheWVyLmdldFBvcHVwKCkhPT0ndW5kZWZpbmVkJyl7bGF5ZXIudW5iaW5kUG9wdXAoKX19LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7dmFyIF90aGlzNT10aGlzO2lmKCEoMCxfa2V5czIuZGVmYXVsdCkobmV4dE9wdGlvbnMuZGF0YSkubGVuZ3RoKXt0aGlzLmVsZW1lbnRJbnN0LmNsZWFyTGF5ZXJzKCl9ZWxzZSBpZigoMCxfa2V5czIuZGVmYXVsdCkobmV4dE9wdGlvbnMuZGF0YSkubGVuZ3RoJiYobGFzdE9wdGlvbnMuZGF0YUhhc2ghPT1uZXh0T3B0aW9ucy5kYXRhSGFzaHx8bGFzdE9wdGlvbnMuZmVhdHVyZVN0eWxlSGFzaCE9PW5leHRPcHRpb25zLmZlYXR1cmVTdHlsZUhhc2gpKXsoZnVuY3Rpb24oKXt2YXIgc3R5bGVBdHRyaWJ1dGVQcm9wZXJ0aWVzPV90aGlzNS5nZXRJbnN0T3B0aW9ucygpLmZlYXR1cmVTdHlsZTtfdGhpczUuZWxlbWVudEluc3QuY2xlYXJMYXllcnMoKTtfdGhpczUuZWxlbWVudEluc3Qub3B0aW9ucy5zdHlsZT1mdW5jdGlvbihmZWF0dXJlKXt2YXIgZmVhdHVyZVByb3BlcnRpZXM9ZmVhdHVyZS5wcm9wZXJ0aWVzLnN0eWxlfHx7fTtyZXR1cm4gX3RoaXM1Ll9nZXRTdHlsZShmZWF0dXJlUHJvcGVydGllcyxzdHlsZUF0dHJpYnV0ZVByb3BlcnRpZXMpfTtfdGhpczUuZWxlbWVudEluc3QuYWRkRGF0YShuZXh0T3B0aW9ucy5kYXRhKTtpZihuZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpe190aGlzNS5fYmluZEZlYXR1cmVQb3B1cHMoKX19KSgpfWVsc2UgaWYobGFzdE9wdGlvbnMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzIT09bmV4dE9wdGlvbnMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzKXtpZihuZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpdGhpcy5fYmluZEZlYXR1cmVQb3B1cHMoKTtpZighbmV4dE9wdGlvbnMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzKXRoaXMuX3VuYmluZEZlYXR1cmVQb3B1cHMoKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7cmV0dXJue2RhdGE6dGhpcy5kYXRhfHx7fSxkYXRhSGFzaDooMCxfc3RyaW5naWZ5Mi5kZWZhdWx0KSh0aGlzLmRhdGF8fHt9KSxmZWF0dXJlU3R5bGU6dGhpcy5mZWF0dXJlU3R5bGV8fHt9LGZlYXR1cmVTdHlsZUhhc2g6KDAsX3N0cmluZ2lmeTIuZGVmYXVsdCkodGhpcy5mZWF0dXJlU3R5bGV8fHt9KSxzaG93RmVhdHVyZVByb3BlcnRpZXM6dGhpcy5zaG93RmVhdHVyZVByb3BlcnRpZXN9fSxfaGFuZGxlRmVhdHVyZUFkZGVkOmZ1bmN0aW9uIF9oYW5kbGVGZWF0dXJlQWRkZWQoZXZ0KXtpZighZXZ0fHwhZXZ0LmxheWVyKXJldHVybjtldnQubGF5ZXIub24oJ2NsaWNrJyx0aGlzLl9oYW5kbGVGZWF0dXJlVGFwcGVkLmJpbmQodGhpcykpO2V2dC5sYXllci5vbigncG9wdXBvcGVuJyx0aGlzLl9oYW5kbGVGZWF0dXJlUG9wdXBPcGVuZWQuYmluZCh0aGlzKSk7ZXZ0LmxheWVyLm9uKCdwb3B1cGNsb3NlJyx0aGlzLl9oYW5kbGVGZWF0dXJlUG9wdXBDbG9zZWQuYmluZCh0aGlzKSk7dmFyIGRldGFpbD17fTtpZihldnQubGF5ZXImJmV2dC5sYXllci5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQubGF5ZXIuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1sYXllci1nZW9qc29uLWZlYXR1cmUtYWRkZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlUmVtb3ZlZDpmdW5jdGlvbiBfaGFuZGxlRmVhdHVyZVJlbW92ZWQoZXZ0KXtpZighZXZ0fHwhZXZ0LmxheWVyKXJldHVybjtldnQubGF5ZXIub2ZmKCk7dmFyIGRldGFpbD17fTtpZihldnQubGF5ZXImJmV2dC5sYXllci5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQubGF5ZXIuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1sYXllci1nZW9qc29uLWZlYXR1cmUtcmVtb3ZlZCcsZGV0YWlsKX0sX2hhbmRsZUZlYXR1cmVUYXBwZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVUYXBwZWQoZXZ0KXt2YXIgZGV0YWlsPXt9O2lmKGV2dC50YXJnZXQmJmV2dC50YXJnZXQuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LnRhcmdldC5mZWF0dXJlfXRoaXMuZmlyZSgncHgtbWFwLWxheWVyLWdlb2pzb24tZmVhdHVyZS10YXBwZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlUG9wdXBPcGVuZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVQb3B1cE9wZW5lZChldnQpe3ZhciBkZXRhaWw9e307aWYoZXZ0LnRhcmdldCYmZXZ0LnRhcmdldC5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQudGFyZ2V0LmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLXBvcHVwLW9wZW5lZCcsZGV0YWlsKX0sX2hhbmRsZUZlYXR1cmVQb3B1cENsb3NlZDpmdW5jdGlvbiBfaGFuZGxlRmVhdHVyZVBvcHVwQ2xvc2VkKGV2dCl7dmFyIGRldGFpbD17fTtpZihldnQudGFyZ2V0JiZldnQudGFyZ2V0LmZlYXR1cmUpe2RldGFpbC5mZWF0dXJlPWV2dC50YXJnZXQuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1sYXllci1nZW9qc29uLWZlYXR1cmUtcG9wdXAtY2xvc2VkJyxkZXRhaWwpfX07UHhNYXBCZWhhdmlvci5HZW9KU09OTGF5ZXI9W1B4TWFwQmVoYXZpb3IuTGF5ZXIsUHhNYXBCZWhhdmlvci5HZW9KU09OTGF5ZXJJbXBsXX0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCI6MyxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjEwLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiOjIyfV0sMTM5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX2dldEl0ZXJhdG9yMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7dmFyIF9nZXRJdGVyYXRvcjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTt2YXIgX3dlYWtNYXA9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL3dlYWstbWFwJyk7dmFyIF93ZWFrTWFwMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93ZWFrTWFwKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian19KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEJlaGF2aW9yPXdpbmRvdy5QeE1hcEJlaGF2aW9yfHx7fTtQeE1hcEJlaGF2aW9yLkxheWVySW1wbD17YXR0YWNoZWQ6ZnVuY3Rpb24gYXR0YWNoZWQoKXt0aGlzLm5vdGlmeUluc3RSZWFkeSh0aGlzLmNhbkFkZEluc3QoKSl9LGRldGFjaGVkOmZ1bmN0aW9uIGRldGFjaGVkKCl7dGhpcy5zaG91bGRSZW1vdmVJbnN0KCl9LHNob3VsZEFkZEluc3Q6ZnVuY3Rpb24gc2hvdWxkQWRkSW5zdChwYXJlbnQpe1B4TWFwQmVoYXZpb3IuRWxlbWVudEltcGwuc2hvdWxkQWRkSW5zdC5jYWxsKHRoaXMscGFyZW50KTtpZih0aGlzLmVsZW1lbnRJbnN0JiZwYXJlbnQpe3RoaXMuYWRkSW5zdChwYXJlbnQpfTt9LHNob3VsZFJlbW92ZUluc3Q6ZnVuY3Rpb24gc2hvdWxkUmVtb3ZlSW5zdChwYXJlbnQpe1B4TWFwQmVoYXZpb3IuRWxlbWVudEltcGwuc2hvdWxkUmVtb3ZlSW5zdC5jYWxsKHRoaXMscGFyZW50KTtpZih0aGlzLmVsZW1lbnRJbnN0KXt0aGlzLnJlbW92ZUluc3QocGFyZW50P3BhcmVudDp1bmRlZmluZWQpfTt9LGFkZEluc3Q6ZnVuY3Rpb24gYWRkSW5zdChwYXJlbnQpe3BhcmVudC5hZGRMYXllcih0aGlzLmVsZW1lbnRJbnN0KX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KHBhcmVudCl7dGhpcy5lbGVtZW50SW5zdC5yZW1vdmUoKX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRydWV9fTtQeE1hcEJlaGF2aW9yLkxheWVyPVtQeE1hcEJlaGF2aW9yLkVsZW1lbnQsUHhNYXBCZWhhdmlvci5MYXllckltcGxdO1B4TWFwQmVoYXZpb3IuUGFyZW50TGF5ZXJJbXBsPXtsaXN0ZW5lcnM6eydweC1tYXAtZWxlbWVudC1pbnN0YW5jZS1jcmVhdGVkJzonX3RyeVRvQWRkQWxsQ2hpbGRyZW4nLCdweC1tYXAtZWxlbWVudC1yZWFkeS10by1hZGQnOidfdHJ5VG9BZGRPbmVDaGlsZCd9LGNyZWF0ZWQ6ZnVuY3Rpb24gY3JlYXRlZCgpe3RoaXMuX2F0dGFjaGVkQ2hpbGRyZW49dGhpcy5fYXR0YWNoZWRDaGlsZHJlbnx8bmV3IF93ZWFrTWFwMi5kZWZhdWx0fSxkZXRhY2hlZDpmdW5jdGlvbiBkZXRhY2hlZCgpe3RoaXMuX2RldGFjaExheWVyQ2hpbGRyZW4oKX0sX3RyeVRvQWRkQWxsQ2hpbGRyZW46ZnVuY3Rpb24gX3RyeVRvQWRkQWxsQ2hpbGRyZW4oZXZ0KXt2YXIgbG9jYWxFdnQ9UG9seW1lci5kb20oZXZ0KTtpZighdGhpcy5lbGVtZW50SW5zdHx8bG9jYWxFdnQucm9vdFRhcmdldCE9PXRoaXMpcmV0dXJuO3RoaXMuX2F0dGFjaExheWVyQ2hpbGRyZW4oKX0sX3RyeVRvQWRkT25lQ2hpbGQ6ZnVuY3Rpb24gX3RyeVRvQWRkT25lQ2hpbGQoZXZ0KXt2YXIgbG9jYWxFdnQ9UG9seW1lci5kb20oZXZ0KTtpZihsb2NhbEV2dC5yb290VGFyZ2V0PT09dGhpcylyZXR1cm47ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO2lmKCF0aGlzLmVsZW1lbnRJbnN0KXJldHVybjt0aGlzLl9hdHRhY2hMYXllckNoaWxkKGxvY2FsRXZ0LnJvb3RUYXJnZXQpfSxfYXR0YWNoTGF5ZXJDaGlsZHJlbjpmdW5jdGlvbiBfYXR0YWNoTGF5ZXJDaGlsZHJlbigpe3ZhciBjaGlsZHJlbj10aGlzLmdldEVmZmVjdGl2ZUNoaWxkcmVuKCk7aWYoIWNoaWxkcmVufHwhY2hpbGRyZW4ubGVuZ3RoKXJldHVybjt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcj1mYWxzZTt2YXIgX2l0ZXJhdG9yRXJyb3I9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcj0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGNoaWxkcmVuKSxfc3RlcDshKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb249KF9zdGVwPV9pdGVyYXRvci5uZXh0KCkpLmRvbmUpO19pdGVyYXRvck5vcm1hbENvbXBsZXRpb249dHJ1ZSl7dmFyIGNoaWxkPV9zdGVwLnZhbHVlO3RoaXMuX2F0dGFjaExheWVyQ2hpbGQoY2hpbGQpfX1jYXRjaChlcnIpe19kaWRJdGVyYXRvckVycm9yPXRydWU7X2l0ZXJhdG9yRXJyb3I9ZXJyfWZpbmFsbHl7dHJ5e2lmKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uJiZfaXRlcmF0b3IucmV0dXJuKXtfaXRlcmF0b3IucmV0dXJuKCl9fWZpbmFsbHl7aWYoX2RpZEl0ZXJhdG9yRXJyb3Ipe3Rocm93IF9pdGVyYXRvckVycm9yfX19fSxfYXR0YWNoTGF5ZXJDaGlsZDpmdW5jdGlvbiBfYXR0YWNoTGF5ZXJDaGlsZChjaGlsZEVsKXt2YXIgX3RoaXM9dGhpcztpZih0aGlzLl9hdHRhY2hlZENoaWxkcmVuLmhhcyhjaGlsZEVsKXx8IWNoaWxkRWwuc2hvdWxkQWRkSW5zdHx8IWNoaWxkRWwuY2FuQWRkSW5zdHx8IWNoaWxkRWwuY2FuQWRkSW5zdCgpKXJldHVybjt0aGlzLl9hdHRhY2hlZENoaWxkcmVuLnNldChjaGlsZEVsLHRydWUpO3RoaXMuYXN5bmMoZnVuY3Rpb24oKXtjaGlsZEVsLnNob3VsZEFkZEluc3QoX3RoaXMuZWxlbWVudEluc3QpfSl9LF9kZXRhY2hMYXllckNoaWxkcmVuOmZ1bmN0aW9uIF9kZXRhY2hMYXllckNoaWxkcmVuKCl7dmFyIGNoaWxkcmVuPXRoaXMuZ2V0RWZmZWN0aXZlQ2hpbGRyZW4oKTtpZighY2hpbGRyZW58fCFjaGlsZHJlbi5sZW5ndGgpcmV0dXJuO3ZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMj10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcjI9ZmFsc2U7dmFyIF9pdGVyYXRvckVycm9yMj11bmRlZmluZWQ7dHJ5e2Zvcih2YXIgX2l0ZXJhdG9yMj0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGNoaWxkcmVuKSxfc3RlcDI7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMj0oX3N0ZXAyPV9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMj10cnVlKXt2YXIgY2hpbGQ9X3N0ZXAyLnZhbHVlO3RoaXMuX2RldGFjaExheWVyQ2hpbGQoY2hpbGQpfX1jYXRjaChlcnIpe19kaWRJdGVyYXRvckVycm9yMj10cnVlO19pdGVyYXRvckVycm9yMj1lcnJ9ZmluYWxseXt0cnl7aWYoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yJiZfaXRlcmF0b3IyLnJldHVybil7X2l0ZXJhdG9yMi5yZXR1cm4oKX19ZmluYWxseXtpZihfZGlkSXRlcmF0b3JFcnJvcjIpe3Rocm93IF9pdGVyYXRvckVycm9yMn19fX0sX2RldGFjaExheWVyQ2hpbGQ6ZnVuY3Rpb24gX2RldGFjaExheWVyQ2hpbGQoY2hpbGRFbCl7dmFyIF90aGlzMj10aGlzO2lmKCF0aGlzLl9hdHRhY2hlZENoaWxkcmVuLmhhcyhjaGlsZEVsKXx8IWNoaWxkRWwuc2hvdWxkUmVtb3ZlSW5zdClyZXR1cm47dGhpcy5fYXR0YWNoZWRDaGlsZHJlbi5kZWxldGUoY2hpbGRFbCk7dGhpcy5hc3luYyhmdW5jdGlvbigpe2NoaWxkRWwuc2hvdWxkUmVtb3ZlSW5zdChfdGhpczIuZWxlbWVudEluc3QpfSl9fTtQeE1hcEJlaGF2aW9yLlBhcmVudExheWVyPVtQeE1hcEJlaGF2aW9yLlBhcmVudExheWVySW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIjoxLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3dlYWstbWFwXCI6MTV9XSwxNDA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfa2V5cz1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO3ZhciBfc2xpY2VkVG9BcnJheTI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXknKTt2YXIgX3NsaWNlZFRvQXJyYXkzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NsaWNlZFRvQXJyYXkyKTt2YXIgX3N0cmluZ2lmeT1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnknKTt2YXIgX3N0cmluZ2lmeTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZ5KTt2YXIgX3dlYWtNYXA9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL3dlYWstbWFwJyk7dmFyIF93ZWFrTWFwMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93ZWFrTWFwKTt2YXIgX3R5cGVvZjI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZicpO3ZhciBfdHlwZW9mMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTt2YXIgX2dldEl0ZXJhdG9yMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7dmFyIF9nZXRJdGVyYXRvcjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTt2YXIgX3NldD1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvc2V0Jyk7dmFyIF9zZXQyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldCk7dmFyIF9hc3NpZ249cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24nKTt2YXIgX2Fzc2lnbjI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian19KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEJlaGF2aW9yPXdpbmRvdy5QeE1hcEJlaGF2aW9yfHx7fTtQeE1hcEJlaGF2aW9yLk1hcmtlckdyb3VwSW1wbD17cHJvcGVydGllczp7bmFtZTp7dHlwZTpTdHJpbmcsbm90aWZ5OnRydWV9LGRhdGE6e3R5cGU6T2JqZWN0LG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sY29sb3JzQnlUeXBlOnt0eXBlOk9iamVjdCx2YWx1ZTpmdW5jdGlvbiB2YWx1ZSgpe3JldHVybnsndW5rbm93bic6dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLWljb24tdW5rbm93bi1jb2xvcicpLCdpbmZvJzp0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1pbnRlcm5hbC1weC1tYXAtaWNvbi1pbmZvLWNvbG9yJyksJ3dhcm5pbmcnOnRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWludGVybmFsLXB4LW1hcC1pY29uLXdhcm5pbmctY29sb3InKSwnaW1wb3J0YW50Jzp0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1pbnRlcm5hbC1weC1tYXAtaWNvbi1pbXBvcnRhbnQtY29sb3InKX19fSxpY29uRm5zOnt0eXBlOk9iamVjdCx2YWx1ZTpmdW5jdGlvbiB2YWx1ZSgpe3JldHVybntjbHVzdGVyOnVuZGVmaW5lZCxtYXJrZXI6dW5kZWZpbmVkfX19LGNsdXN0ZXJDb25maWc6e3R5cGU6T2JqZWN0fX0sdXBkYXRlOmZ1bmN0aW9uIHVwZGF0ZSgpe2lmKCF0aGlzLmVsZW1lbnRJbnN0KXJldHVybjt2YXIgX2dldEluc3RPcHRpb25zPXRoaXMuZ2V0SW5zdE9wdGlvbnMoKSxkYXRhPV9nZXRJbnN0T3B0aW9ucy5kYXRhO3ZhciBmZWF0dXJlcz10aGlzLl9zeW5jRGF0YVdpdGhNYXJrZXJzKGRhdGEuZmVhdHVyZXMsdGhpcy5lbGVtZW50SW5zdCk7dGhpcy5fbm90aWZ5TmV3RmVhdHVyZXMoZmVhdHVyZXMpfSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXt2YXIgc3BpZGVyaWZ5Rm49dGhpcy5faGFuZGxlQ2x1c3RlclNwaWRlcmlmeS5iaW5kKHRoaXMpO3ZhciB1bnNwaWRlcmlmeUZuPXRoaXMuX2hhbmRsZUNsdXN0ZXJVbnNwaWRlcmlmeS5iaW5kKHRoaXMpO3ZhciBtYXJrZXJUYXBGbj10aGlzLl9oYW5kbGVTaW5nbGVNYXJrZXJUYXAuYmluZCh0aGlzKTt2YXIgbWFya2VyRG91YmxlQ2xpY2tGbj10aGlzLl9oYW5kbGVTaW5nbGVNYXJrZXJEb3VibGVDbGljay5iaW5kKHRoaXMpO3ZhciBjbHVzdGVyVGFwRm49dGhpcy5faGFuZGxlQ2x1c3RlclRhcC5iaW5kKHRoaXMpO3RoaXMuYmluZEV2ZW50cyh7J3NwaWRlcmZpZWQnOnNwaWRlcmlmeUZuLCd1bnNwaWRlcmZpZWQnOnVuc3BpZGVyaWZ5Rm4sJ2NsaWNrJzptYXJrZXJUYXBGbiwnZGJsY2xpY2snOm1hcmtlckRvdWJsZUNsaWNrRm4sJ2NsdXN0ZXJjbGljayc6Y2x1c3RlclRhcEZufSk7UHhNYXBCZWhhdmlvci5MYXllckltcGwuYWRkSW5zdC5jYWxsKHRoaXMscGFyZW50KTt0aGlzLmFzeW5jKGZ1bmN0aW9uKCl7dGhpcy5maXJlKCdweC1tYXAtbWFya2VyLWdyb3VwLWFkZGVkJyl9KX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KHBhcmVudCl7UHhNYXBCZWhhdmlvci5MYXllckltcGwucmVtb3ZlSW5zdC5jYWxsKHRoaXMscGFyZW50KX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9O3ZhciBjbHVzdGVyPUwubWFya2VyQ2x1c3Rlckdyb3VwKG9wdGlvbnMpO2lmKG9wdGlvbnMuZGF0YSl7dmFyIGZlYXR1cmVzPXRoaXMuX3N5bmNEYXRhV2l0aE1hcmtlcnMob3B0aW9ucy5kYXRhLmZlYXR1cmVzLGNsdXN0ZXIpO3RoaXMuX25vdGlmeU5ld0ZlYXR1cmVzKGZlYXR1cmVzKX1yZXR1cm4gY2x1c3Rlcn0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXtpZihuZXh0T3B0aW9ucy5kYXRhKXt2YXIgZmVhdHVyZXM9dGhpcy5fc3luY0RhdGFXaXRoTWFya2VycyhuZXh0T3B0aW9ucy5kYXRhLmZlYXR1cmVzLHRoaXMuZWxlbWVudEluc3QpO3RoaXMuX25vdGlmeU5ld0ZlYXR1cmVzKGZlYXR1cmVzKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7dmFyIGRlZmF1bHRPcHRpb25zPXtzaG93Q292ZXJhZ2VPbkhvdmVyOnRydWUsbWF4Q2x1c3RlclJhZGl1czoxNTAsc3BpZGVyaWZ5T25NYXhab29tOnRydWUscmVtb3ZlT3V0c2lkZVZpc2libGVCb3VuZHM6dHJ1ZSxhbmltYXRlOnRydWUscG9seWdvbk9wdGlvbnM6e3N0cm9rZTp0cnVlLGNvbG9yOnRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWludGVybmFsLXB4LW1hcC1tYXJrZXItZ3JvdXAtY2x1c3Rlci1wb2x5Z29uLXN0cm9rZS1jb2xvcicpLGZpbGxDb2xvcjp0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1pbnRlcm5hbC1weC1tYXAtbWFya2VyLWdyb3VwLWNsdXN0ZXItcG9seWdvbi1maWxsLWNvbG9yJyksZmlsbE9wYWNpdHk6MC40fX07dmFyIG9wdGlvbnM9KDAsX2Fzc2lnbjIuZGVmYXVsdCkoZGVmYXVsdE9wdGlvbnMsdGhpcy5jbHVzdGVyQ29uZmlnfHx7fSk7b3B0aW9ucy5kYXRhPXRoaXMuX2dldFZhbGlkRGF0YSgpO29wdGlvbnMuaWNvbkNyZWF0ZUZ1bmN0aW9uPXRoaXMuX2NyZWF0ZUNsdXN0ZXJJY29uLmJpbmQodGhpcyk7cmV0dXJuIG9wdGlvbnN9LF9ub3RpZnlOZXdGZWF0dXJlczpmdW5jdGlvbiBfbm90aWZ5TmV3RmVhdHVyZXMoZmVhdHVyZVNldCl7aWYoIWZlYXR1cmVTZXR8fCEoZmVhdHVyZVNldCBpbnN0YW5jZW9mIF9zZXQyLmRlZmF1bHQpfHwhZmVhdHVyZVNldC5zaXplKXJldHVybjt0aGlzLmFzeW5jKGZ1bmN0aW9uIF9ub3RpZnlOZXdGZWF0dXJlc0RlYm91bmNlKCl7dmFyIGJvdW5kcz1MLmxhdExuZ0JvdW5kcygpO3ZhciBmZWF0dXJlPXZvaWQgMDt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcj1mYWxzZTt2YXIgX2l0ZXJhdG9yRXJyb3I9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcj0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGZlYXR1cmVTZXQpLF9zdGVwOyEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj0oX3N0ZXA9X2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7X2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj10cnVlKXtmZWF0dXJlPV9zdGVwLnZhbHVlO2JvdW5kcy5leHRlbmQoW2ZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMV0sZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlc1swXV0pfX1jYXRjaChlcnIpe19kaWRJdGVyYXRvckVycm9yPXRydWU7X2l0ZXJhdG9yRXJyb3I9ZXJyfWZpbmFsbHl7dHJ5e2lmKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uJiZfaXRlcmF0b3IucmV0dXJuKXtfaXRlcmF0b3IucmV0dXJuKCl9fWZpbmFsbHl7aWYoX2RpZEl0ZXJhdG9yRXJyb3Ipe3Rocm93IF9pdGVyYXRvckVycm9yfX19dGhpcy5maXJlKCdweC1tYXAtbWFya2VyLWdyb3VwLWZlYXR1cmVzLWNoYW5nZWQnLHtib3VuZHM6Ym91bmRzfSl9LDEpfSxfZ2V0VmFsaWREYXRhOmZ1bmN0aW9uIF9nZXRWYWxpZERhdGEoKXtpZighdGhpcy5kYXRhKXtyZXR1cm4gdW5kZWZpbmVkfXZhciBkYXRhSXNOb3RWYWxpZD0oMCxfdHlwZW9mMy5kZWZhdWx0KSh0aGlzLmRhdGEpIT09J29iamVjdCd8fHRoaXMuZGF0YS50eXBlIT09J0ZlYXR1cmVDb2xsZWN0aW9uJ3x8IUFycmF5LmlzQXJyYXkodGhpcy5kYXRhLmZlYXR1cmVzKXx8IXRoaXMuZGF0YS5mZWF0dXJlcy5sZW5ndGh8fCgwLF90eXBlb2YzLmRlZmF1bHQpKHRoaXMuZGF0YS5mZWF0dXJlc1swXSkhPT0nb2JqZWN0JztpZihkYXRhSXNOb3RWYWxpZCl7Y29uc29sZS5sb2coJ1BYLU1BUCBDT05GSUdVUkFUSU9OIEVSUk9SOlxcbiAgICAgICAgICBUaGUgYGRhdGFgIGF0dHJpYnV0ZSBmb3IgJyt0aGlzLmlzKycgaXMgbm90IHZhbGlkIEdlb0pTT04uIFZhbGlkIEdlb0pTT05cXG4gICAgICAgICAgdGhhdCBmb2xsb3dzIHRoZSBGZWF0dXJlQ29sbGVjdGlvbiBzdGFuZGFyZCBpcyByZXF1aXJlZCB0byBkcmF3IHRoZVxcbiAgICAgICAgICBtYXJrZXIgY2x1c3RlcnMuIFNlZSB0aGUgR2VvSlNPTiBzcGVjIHdlYnNpdGUgKGh0dHA6Ly9nZW9qc29uLm9yZy9nZW9qc29uLXNwZWMuaHRtbClcXG4gICAgICAgICAgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gd2hhdCBpcyByZXF1aXJlZC5cXG5cXG4gICAgICAgICAgVGhlIG1pbmltdW0gcmVxdWlyZW1lbnRzIGZvciAnK3RoaXMuaXMrJyBhcmU6XFxuICAgICAgICAgIC0gTXVzdCBiZSBhIHZhbGlkIEphdmFTY3JpcHQgb2JqZWN0IChvciBkZXNlcmlhbGl6YWJsZSB0byBhbiBvYmplY3QpXFxuICAgICAgICAgIC0gTXVzdCBoYXZlIGtleSBgdHlwZWAgd2l0aCB2YWx1ZSBcXCdGZWF0dXJlQ29sbGVjdGlvblxcJ1xcbiAgICAgICAgICAtIE11c3QgaGF2ZSBrZXkgYGZlYXR1cmVzYCB3aXRoIHZhbHVlIG9mIGFuIGFycmF5IHdpdGggbGVuZ3RoXFxuICAgICAgICAgIC0gRWFjaCBlbnRyeSBpbiBgZmVhdHVyZXNgIG11c3QgYmUgYSB2YWxpZCBvYmplY3RcXG4gICAgICAgICcpO3JldHVybiB1bmRlZmluZWR9cmV0dXJuIHRoaXMuZGF0YX0sX2NyZWF0ZUNsdXN0ZXJJY29uOmZ1bmN0aW9uIF9jcmVhdGVDbHVzdGVySWNvbihjbHVzdGVyKXtpZih0aGlzLmljb25GbnMuY2x1c3Rlcil7cmV0dXJuIHRoaXMuaWNvbkZucy5jbHVzdGVyLmNhbGwodGhpcyxjbHVzdGVyKX12YXIgbWFya2Vycz1jbHVzdGVyLmdldEFsbENoaWxkTWFya2VycygpO3ZhciBjb3VudD1tYXJrZXJzLmxlbmd0aDt2YXIgdHlwZXM9dGhpcy5faW5kZXhDbHVzdGVyTWFya2Vyc0J5VHlwZShtYXJrZXJzKTt2YXIgY29sb3JzPXRoaXMuY29sb3JzQnlUeXBlO3ZhciBjb250YWluZXJTaXplPXRoaXMuX2dldENsdXN0ZXJJY29uU2l6ZShjb3VudCk7dmFyIHBhdGhTaXplPXRoaXMuX2dldFN0eWxlVmFsdWVBc051bSgnLS1pbnRlcm5hbC1weC1tYXAtbWFya2VyLWdyb3VwLWNsdXN0ZXItcGF0aC1zaXplJyl8fDEwO3ZhciBib3JkZXJTaXplPXRoaXMuX2dldFN0eWxlVmFsdWVBc051bSgnLS1pbnRlcm5hbC1weC1tYXAtbWFya2VyLWdyb3VwLWNsdXN0ZXItYm9yZGVyLXNpemUnKXx8MDt2YXIgb3B0aW9ucz17Y291bnQ6Y291bnQsY291bnRCeVR5cGU6dHlwZXMsY29sb3JzQnlUeXBlOmNvbG9ycyxjb250YWluZXJTaXplOmNvbnRhaW5lclNpemUscGF0aFNpemU6cGF0aFNpemUsYm9yZGVyU2l6ZTpib3JkZXJTaXplLHN0eWxlU2NvcGU6dGhpcy5pc1NoYWR5U2NvcGVkKCk/dGhpcy5nZXRTaGFkeVNjb3BlKCk6dW5kZWZpbmVkfTtyZXR1cm4gbmV3IFB4TWFwLkNsdXN0ZXJJY29uKG9wdGlvbnMpfSxfZ2V0U3R5bGVWYWx1ZUFzTnVtOmZ1bmN0aW9uIF9nZXRTdHlsZVZhbHVlQXNOdW0oc3R5bGVWYWxOYW1lKXt0aGlzLl9fc3R5bGVWYWxzPXRoaXMuX19zdHlsZVZhbHN8fHt9O2lmKHRoaXMuX19zdHlsZVZhbHNbc3R5bGVWYWxOYW1lXSlyZXR1cm4gdGhpcy5fX3N0eWxlVmFsc1tzdHlsZVZhbE5hbWVdO3ZhciBjb21wdXRlZFZhbD10aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZShzdHlsZVZhbE5hbWUpO2lmKGNvbXB1dGVkVmFsJiZjb21wdXRlZFZhbC5pbmRleE9mKCdweCcpIT09LTEpe3ZhciB2YWxXaXRob3V0U3VmZml4PWNvbXB1dGVkVmFsLnJlcGxhY2UoJ3B4JywnJyk7dmFyIHZhbEFzTnVtPU1hdGguZmxvb3IodmFsV2l0aG91dFN1ZmZpeCk7dGhpcy5fX3N0eWxlVmFsc1tzdHlsZVZhbE5hbWVdPXZhbEFzTnVtO3JldHVybiB2YWxBc051bX1lbHNle3JldHVybiB1bmRlZmluZWR9fSxfZ2V0Q2x1c3Rlckljb25TaXplOmZ1bmN0aW9uIF9nZXRDbHVzdGVySWNvblNpemUoY291bnQpe2lmKGNvdW50PDEwKXtyZXR1cm4gNjB9aWYoY291bnQ+PTEwJiZjb3VudDw0MCl7cmV0dXJuIDc1fWlmKGNvdW50PjQwKXtyZXR1cm4gOTB9fSxfaW5kZXhDbHVzdGVyTWFya2Vyc0J5VHlwZTpmdW5jdGlvbiBfaW5kZXhDbHVzdGVyTWFya2Vyc0J5VHlwZShtYXJrZXJzKXtyZXR1cm4gbWFya2Vycy5yZWR1Y2UoZnVuY3Rpb24odHlwZXMsbWFya2VyKXtpZihtYXJrZXIuZmVhdHVyZVByb3BlcnRpZXMmJm1hcmtlci5mZWF0dXJlUHJvcGVydGllc1snbWFya2VyLWljb24nXSYmbWFya2VyLmZlYXR1cmVQcm9wZXJ0aWVzWydtYXJrZXItaWNvbiddWydpY29uLXR5cGUnXSl7dHlwZXNbbWFya2VyLmZlYXR1cmVQcm9wZXJ0aWVzWydtYXJrZXItaWNvbiddWydpY29uLXR5cGUnXV09KHR5cGVzW21hcmtlci5mZWF0dXJlUHJvcGVydGllc1snbWFya2VyLWljb24nXVsnaWNvbi10eXBlJ11dfHwwKSsxfXJldHVybiB0eXBlc30se30pfSxfc3luY0RhdGFXaXRoTWFya2VyczpmdW5jdGlvbiBfc3luY0RhdGFXaXRoTWFya2VycyhuZXdGZWF0dXJlcyxjbHVzdGVySW5zdCl7aWYoIW5ld0ZlYXR1cmVzLmxlbmd0aClyZXR1cm47dmFyIGZlYXR1cmVzU2V0PXRoaXMuX2ZlYXR1cmVzPXRoaXMuX2ZlYXR1cmVzfHxuZXcgX3NldDIuZGVmYXVsdDt2YXIgbWFya2Vyc01hcD10aGlzLl9tYXJrZXJzPXRoaXMuX21hcmtlcnN8fG5ldyBfd2Vha01hcDIuZGVmYXVsdDt2YXIgX2RpZmZOZXdGZWF0dXJlcz10aGlzLl9kaWZmTmV3RmVhdHVyZXMobmV3RmVhdHVyZXMsZmVhdHVyZXNTZXQsbWFya2Vyc01hcCksZmVhdHVyZXNUb0FkZD1fZGlmZk5ld0ZlYXR1cmVzLmZlYXR1cmVzVG9BZGQsZmVhdHVyZXNUb1VwZGF0ZT1fZGlmZk5ld0ZlYXR1cmVzLmZlYXR1cmVzVG9VcGRhdGUsZmVhdHVyZXNUb1JlbW92ZT1fZGlmZk5ld0ZlYXR1cmVzLmZlYXR1cmVzVG9SZW1vdmUsbmV4dEZlYXR1cmVzU2V0PV9kaWZmTmV3RmVhdHVyZXMubmV4dEZlYXR1cmVzU2V0LG5leHRNYXJrZXJzTWFwPV9kaWZmTmV3RmVhdHVyZXMubmV4dE1hcmtlcnNNYXA7dmFyIGZlYXR1cmU9dm9pZCAwLGNhY2hlZE1hcmtlcj12b2lkIDAsbWFya2Vyc1RvT3BlcmF0ZT12b2lkIDA7aWYoZmVhdHVyZXNUb0FkZC5zaXplKXttYXJrZXJzVG9PcGVyYXRlPVtdO3ZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMj10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcjI9ZmFsc2U7dmFyIF9pdGVyYXRvckVycm9yMj11bmRlZmluZWQ7dHJ5e2Zvcih2YXIgX2l0ZXJhdG9yMj0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGZlYXR1cmVzVG9BZGQpLF9zdGVwMjshKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yPShfc3RlcDI9X2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpO19pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yPXRydWUpe2ZlYXR1cmU9X3N0ZXAyLnZhbHVlO2NhY2hlZE1hcmtlcj1uZXh0TWFya2Vyc01hcC5nZXQoZmVhdHVyZSk7Y2FjaGVkTWFya2VyLm1hcmtlcj10aGlzLl9jcmVhdGVNYXJrZXIoZmVhdHVyZSk7bWFya2Vyc1RvT3BlcmF0ZS5wdXNoKGNhY2hlZE1hcmtlci5tYXJrZXIpO25leHRNYXJrZXJzTWFwLnNldChmZWF0dXJlLGNhY2hlZE1hcmtlcil9fWNhdGNoKGVycil7X2RpZEl0ZXJhdG9yRXJyb3IyPXRydWU7X2l0ZXJhdG9yRXJyb3IyPWVycn1maW5hbGx5e3RyeXtpZighX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjImJl9pdGVyYXRvcjIucmV0dXJuKXtfaXRlcmF0b3IyLnJldHVybigpfX1maW5hbGx5e2lmKF9kaWRJdGVyYXRvckVycm9yMil7dGhyb3cgX2l0ZXJhdG9yRXJyb3IyfX19Y2x1c3Rlckluc3QuYWRkTGF5ZXJzKG1hcmtlcnNUb09wZXJhdGUpO21hcmtlcnNUb09wZXJhdGU9bnVsbH1pZihmZWF0dXJlc1RvVXBkYXRlLnNpemUpe21hcmtlcnNUb09wZXJhdGU9W107dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zPXRydWU7dmFyIF9kaWRJdGVyYXRvckVycm9yMz1mYWxzZTt2YXIgX2l0ZXJhdG9yRXJyb3IzPXVuZGVmaW5lZDt0cnl7Zm9yKHZhciBfaXRlcmF0b3IzPSgwLF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoZmVhdHVyZXNUb1VwZGF0ZSksX3N0ZXAzOyEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjM9KF9zdGVwMz1faXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7X2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjM9dHJ1ZSl7ZmVhdHVyZT1fc3RlcDMudmFsdWU7Y2FjaGVkTWFya2VyPW5leHRNYXJrZXJzTWFwLmdldChmZWF0dXJlKTtjYWNoZWRNYXJrZXIubWFya2VyPXRoaXMuX3VwZGF0ZU1hcmtlcihmZWF0dXJlLGNhY2hlZE1hcmtlci5tYXJrZXIpO21hcmtlcnNUb09wZXJhdGUucHVzaChjYWNoZWRNYXJrZXIubWFya2VyKTtuZXh0TWFya2Vyc01hcC5zZXQoZmVhdHVyZSxjYWNoZWRNYXJrZXIpfX1jYXRjaChlcnIpe19kaWRJdGVyYXRvckVycm9yMz10cnVlO19pdGVyYXRvckVycm9yMz1lcnJ9ZmluYWxseXt0cnl7aWYoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zJiZfaXRlcmF0b3IzLnJldHVybil7X2l0ZXJhdG9yMy5yZXR1cm4oKX19ZmluYWxseXtpZihfZGlkSXRlcmF0b3JFcnJvcjMpe3Rocm93IF9pdGVyYXRvckVycm9yM319fWNsdXN0ZXJJbnN0LnJlZnJlc2hDbHVzdGVycyhtYXJrZXJzVG9PcGVyYXRlKTttYXJrZXJzVG9PcGVyYXRlPW51bGx9aWYoZmVhdHVyZXNUb1JlbW92ZS5zaXplKXttYXJrZXJzVG9PcGVyYXRlPVtdO3ZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uND10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcjQ9ZmFsc2U7dmFyIF9pdGVyYXRvckVycm9yND11bmRlZmluZWQ7dHJ5e2Zvcih2YXIgX2l0ZXJhdG9yND0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGZlYXR1cmVzVG9SZW1vdmUpLF9zdGVwNDshKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240PShfc3RlcDQ9X2l0ZXJhdG9yNC5uZXh0KCkpLmRvbmUpO19pdGVyYXRvck5vcm1hbENvbXBsZXRpb240PXRydWUpe2ZlYXR1cmU9X3N0ZXA0LnZhbHVlO2NhY2hlZE1hcmtlcj1uZXh0TWFya2Vyc01hcC5nZXQoZmVhdHVyZSk7bWFya2Vyc1RvT3BlcmF0ZS5wdXNoKGNhY2hlZE1hcmtlci5tYXJrZXIpO25leHRNYXJrZXJzTWFwLmRlbGV0ZShmZWF0dXJlKX19Y2F0Y2goZXJyKXtfZGlkSXRlcmF0b3JFcnJvcjQ9dHJ1ZTtfaXRlcmF0b3JFcnJvcjQ9ZXJyfWZpbmFsbHl7dHJ5e2lmKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCYmX2l0ZXJhdG9yNC5yZXR1cm4pe19pdGVyYXRvcjQucmV0dXJuKCl9fWZpbmFsbHl7aWYoX2RpZEl0ZXJhdG9yRXJyb3I0KXt0aHJvdyBfaXRlcmF0b3JFcnJvcjR9fX1jbHVzdGVySW5zdC5yZW1vdmVMYXllcnMobWFya2Vyc1RvT3BlcmF0ZSk7bWFya2Vyc1RvT3BlcmF0ZT1udWxsfXRoaXMuX2ZlYXR1cmVzPW5leHRGZWF0dXJlc1NldDt0aGlzLl9tYXJrZXJzPW5leHRNYXJrZXJzTWFwO2ZlYXR1cmVzU2V0LmNsZWFyKCk7ZmVhdHVyZXNUb0FkZC5jbGVhcigpO2ZlYXR1cmVzVG9VcGRhdGUuY2xlYXIoKTtmZWF0dXJlc1RvUmVtb3ZlLmNsZWFyKCk7cmV0dXJuIHRoaXMuX2ZlYXR1cmVzfSxfZGlmZk5ld0ZlYXR1cmVzOmZ1bmN0aW9uIF9kaWZmTmV3RmVhdHVyZXMobmV3RmVhdHVyZXMsbGFzdEZlYXR1cmVTZXQsbWFya2VyTWFwKXt2YXIgbmV4dEZlYXR1cmVzU2V0PW5ldyBfc2V0Mi5kZWZhdWx0O3ZhciBmZWF0dXJlc1RvQWRkPW5ldyBfc2V0Mi5kZWZhdWx0O3ZhciBmZWF0dXJlc1RvVXBkYXRlPW5ldyBfc2V0Mi5kZWZhdWx0O3ZhciBpPXZvaWQgMCxsZW49dm9pZCAwLHZhbGlkPXZvaWQgMCxrbm93bj12b2lkIDAsY2FjaGVkTWFya2VyPXZvaWQgMCxmZWF0dXJlSGFzaD12b2lkIDA7Zm9yKGk9MCxsZW49bmV3RmVhdHVyZXMubGVuZ3RoO2k8bGVuO2krKyl7dmFsaWQ9bmV3RmVhdHVyZXNbaV0uaWQmJm5ld0ZlYXR1cmVzW2ldLmdlb21ldHJ5JiZuZXdGZWF0dXJlc1tpXS5nZW9tZXRyeS50eXBlPT09J1BvaW50JyYmbmV3RmVhdHVyZXNbaV0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMgaW5zdGFuY2VvZiBBcnJheSYmbmV3RmVhdHVyZXNbaV0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMubGVuZ3RoPT09MjtpZighdmFsaWQpY29udGludWU7a25vd249bGFzdEZlYXR1cmVTZXQuaGFzKG5ld0ZlYXR1cmVzW2ldKTtpZigha25vd24pe2ZlYXR1cmVzVG9BZGQuYWRkKG5ld0ZlYXR1cmVzW2ldKTtsYXN0RmVhdHVyZVNldC5kZWxldGUobmV3RmVhdHVyZXNbaV0pO25leHRGZWF0dXJlc1NldC5hZGQobmV3RmVhdHVyZXNbaV0pO2NhY2hlZE1hcmtlcj17bWFya2VyOm51bGwsaGFzaDooMCxfc3RyaW5naWZ5Mi5kZWZhdWx0KShuZXdGZWF0dXJlc1tpXSl9O21hcmtlck1hcC5zZXQobmV3RmVhdHVyZXNbaV0sY2FjaGVkTWFya2VyKTtjb250aW51ZX1pZihrbm93bil7Y2FjaGVkTWFya2VyPW1hcmtlck1hcC5nZXQobmV3RmVhdHVyZXNbaV0pO2ZlYXR1cmVIYXNoPSgwLF9zdHJpbmdpZnkyLmRlZmF1bHQpKG5ld0ZlYXR1cmVzW2ldKTtpZihjYWNoZWRNYXJrZXIuaGFzaCE9PWZlYXR1cmVIYXNoKXtmZWF0dXJlc1RvVXBkYXRlLmFkZChuZXdGZWF0dXJlc1tpXSk7Y2FjaGVkTWFya2VyLmhhc2g9ZmVhdHVyZUhhc2g7bWFya2VyTWFwLnNldChuZXdGZWF0dXJlc1tpXSxjYWNoZWRNYXJrZXIpfWxhc3RGZWF0dXJlU2V0LmRlbGV0ZShuZXdGZWF0dXJlc1tpXSk7bmV4dEZlYXR1cmVzU2V0LmFkZChuZXdGZWF0dXJlc1tpXSl9fXZhciBmZWF0dXJlc1RvUmVtb3ZlPWxhc3RGZWF0dXJlU2V0LnNpemU/bGFzdEZlYXR1cmVTZXQ6bmV3IF9zZXQyLmRlZmF1bHQ7bGFzdEZlYXR1cmVTZXQ9bnVsbDtyZXR1cm57ZmVhdHVyZXNUb0FkZDpmZWF0dXJlc1RvQWRkLGZlYXR1cmVzVG9VcGRhdGU6ZmVhdHVyZXNUb1VwZGF0ZSxmZWF0dXJlc1RvUmVtb3ZlOmZlYXR1cmVzVG9SZW1vdmUsbmV4dEZlYXR1cmVzU2V0Om5leHRGZWF0dXJlc1NldCxuZXh0TWFya2Vyc01hcDptYXJrZXJNYXB9fSxfY3JlYXRlTWFya2VyOmZ1bmN0aW9uIF9jcmVhdGVNYXJrZXIoZmVhdHVyZSl7dmFyIF9mZWF0dXJlJGdlb21ldHJ5JGNvbz0oMCxfc2xpY2VkVG9BcnJheTMuZGVmYXVsdCkoZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlcywyKSxsYXQ9X2ZlYXR1cmUkZ2VvbWV0cnkkY29vWzBdLGxuZz1fZmVhdHVyZSRnZW9tZXRyeSRjb29bMV07dmFyIG1hcmtlcj1MLm1hcmtlcihbbG5nLGxhdF0pO3ZhciBpY29uU2V0dGluZ3M9ZmVhdHVyZS5wcm9wZXJ0aWVzWydtYXJrZXItaWNvbiddP3RoaXMuX2V4dHJhY3RNYXJrZXJJY29uU2V0dGluZ3MoZmVhdHVyZS5wcm9wZXJ0aWVzWydtYXJrZXItaWNvbiddKTp7fTtpY29uU2V0dGluZ3MuYmFzZT1pY29uU2V0dGluZ3MuYmFzZXx8J3N0YXRpYy1pY29uJztpY29uU2V0dGluZ3MudHlwZT1pY29uU2V0dGluZ3MudHlwZXx8J2luZm8nO3ZhciBpY29uPXRoaXMuX2NyZWF0ZU1hcmtlckljb24oaWNvblNldHRpbmdzKTttYXJrZXIuc2V0SWNvbihpY29uKTttYXJrZXIuZmVhdHVyZVByb3BlcnRpZXM9ZmVhdHVyZS5wcm9wZXJ0aWVzO3JldHVybiBtYXJrZXJ9LF91cGRhdGVNYXJrZXI6ZnVuY3Rpb24gX3VwZGF0ZU1hcmtlcihmZWF0dXJlLG1hcmtlcil7dmFyIF9tYXJrZXIkZ2V0TGF0TG5nPW1hcmtlci5nZXRMYXRMbmcoKSxsYXQ9X21hcmtlciRnZXRMYXRMbmcubGF0LGxuZz1fbWFya2VyJGdldExhdExuZy5sbmc7dmFyIF9mZWF0dXJlJGdlb21ldHJ5JGNvbzI9KDAsX3NsaWNlZFRvQXJyYXkzLmRlZmF1bHQpKGZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXMsMiksbmV4dExuZz1fZmVhdHVyZSRnZW9tZXRyeSRjb28yWzBdLG5leHRMYXQ9X2ZlYXR1cmUkZ2VvbWV0cnkkY29vMlsxXTtpZihsYXQhPT1OdW1iZXIobmV4dExhdCl8fGxuZyE9PU51bWJlcihuZXh0TG5nKSl7bWFya2VyLnNldExhdExuZyhbbmV4dExhdCxuZXh0TG5nXSl9dmFyIGljb25TZXR0aW5ncz1mZWF0dXJlLnByb3BlcnRpZXNbJ21hcmtlci1pY29uJ10/dGhpcy5fZXh0cmFjdE1hcmtlckljb25TZXR0aW5ncyhmZWF0dXJlLnByb3BlcnRpZXNbJ21hcmtlci1pY29uJ10pOnt9O2ljb25TZXR0aW5ncy5iYXNlPWljb25TZXR0aW5ncy5iYXNlfHwnc3RhdGljLWljb24nO2ljb25TZXR0aW5ncy50eXBlPWljb25TZXR0aW5ncy50eXBlfHwnaW5mbyc7dmFyIGljb249dGhpcy5fY3JlYXRlTWFya2VySWNvbihpY29uU2V0dGluZ3MpO21hcmtlci5zZXRJY29uKGljb24pO21hcmtlci5mZWF0dXJlUHJvcGVydGllcz1mZWF0dXJlLnByb3BlcnRpZXM7cmV0dXJuIG1hcmtlcn0sX2V4dHJhY3RNYXJrZXJJY29uU2V0dGluZ3M6ZnVuY3Rpb24gX2V4dHJhY3RNYXJrZXJJY29uU2V0dGluZ3MoZmVhdFNldHRpbmdzKXt2YXIgZmVhdFNldHRpbmdzS2V5cz0oMCxfa2V5czIuZGVmYXVsdCkoZmVhdFNldHRpbmdzKTtpZighZmVhdFNldHRpbmdzS2V5cy5sZW5ndGgpcmV0dXJuIHVuZGVmaW5lZDt2YXIgaWNvblNldHRpbmdzPXt9O3ZhciBpPXZvaWQgMCxsZW49dm9pZCAwLGZlYXRLZXlDYW1lbGl6ZWQ9dm9pZCAwO2ZvcihpPTAsbGVuPWZlYXRTZXR0aW5nc0tleXMubGVuZ3RoO2k8bGVuO2krKyl7aWYoZmVhdFNldHRpbmdzS2V5c1tpXS5zdWJzdHJpbmcoMCw1KSE9PSdpY29uLScpY29udGludWU7ZmVhdEtleUNhbWVsaXplZD1mZWF0U2V0dGluZ3NLZXlzW2ldLnN1YnN0cmluZyg1KS5yZXBsYWNlKC8oXFwtW2Etel0pL2csZnVuY3Rpb24obWF0Y2gpe3JldHVybiBtYXRjaC5jaGFyQXQoMSkudG9VcHBlckNhc2UoKX0pO2ljb25TZXR0aW5nc1tmZWF0S2V5Q2FtZWxpemVkXT1mZWF0U2V0dGluZ3NbZmVhdFNldHRpbmdzS2V5c1tpXV19cmV0dXJuIGljb25TZXR0aW5nc30sX2NyZWF0ZU1hcmtlckljb246ZnVuY3Rpb24gX2NyZWF0ZU1hcmtlckljb24ob3B0aW9ucyl7aWYodGhpcy5pY29uRm5zLm1hcmtlcil7cmV0dXJuIHRoaXMuaWNvbkZucy5tYXJrZXIuY2FsbCh0aGlzLG9wdGlvbnMpfW9wdGlvbnMuc3R5bGVTY29wZT10aGlzLmlzU2hhZHlTY29wZWQoKT90aGlzLmdldFNoYWR5U2NvcGUoKTp1bmRlZmluZWQ7dmFyIGtsYXNzTmFtZT10aGlzLl9zdHJUb0tsYXNzTmFtZShvcHRpb25zLmJhc2UpO3JldHVybiBuZXcgUHhNYXBba2xhc3NOYW1lXShvcHRpb25zKX0sX3N0clRvS2xhc3NOYW1lOmZ1bmN0aW9uIF9zdHJUb0tsYXNzTmFtZShzdHIpe3JldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrc3RyLnN1YnN0cmluZygxKS5yZXBsYWNlKC8oXFwtW2Etel0pL2csZnVuY3Rpb24obWF0Y2gpe3JldHVybiBtYXRjaC5jaGFyQXQoMSkudG9VcHBlckNhc2UoKX0pfSxfaGFuZGxlQ2x1c3RlclNwaWRlcmlmeTpmdW5jdGlvbiBfaGFuZGxlQ2x1c3RlclNwaWRlcmlmeShldnQpe2lmKCFldnR8fCFldnQuY2x1c3Rlcnx8IWV2dC5jbHVzdGVyLl9pY29uKXJldHVybjtldnQuY2x1c3Rlci5faWNvbi5zdHlsZS52aXNpYmlsaXR5PSdoaWRkZW4nfSxfaGFuZGxlQ2x1c3RlclVuc3BpZGVyaWZ5OmZ1bmN0aW9uIF9oYW5kbGVDbHVzdGVyVW5zcGlkZXJpZnkoZXZ0KXtpZighZXZ0fHwhZXZ0LmNsdXN0ZXJ8fCFldnQuY2x1c3Rlci5faWNvbilyZXR1cm47ZXZ0LmNsdXN0ZXIuX2ljb24uc3R5bGUudmlzaWJpbGl0eT0ndmlzaWJsZSd9LF9oYW5kbGVTaW5nbGVNYXJrZXJUYXA6ZnVuY3Rpb24gX2hhbmRsZVNpbmdsZU1hcmtlclRhcChldnQpe2lmKGV2dC5sYXllciYmZXZ0LmxheWVyLmdldExhdExuZygpaW5zdGFuY2VvZiBMLkxhdExuZyl7dmFyIGxhdExuZz1MLmxhdExuZyhldnQubGF5ZXIuZ2V0TGF0TG5nKCkpO3ZhciBsYXQ9bGF0TG5nLmxhdCxsbmc9bGF0TG5nLmxuZzt2YXIgZGV0YWlsPXtsYXRMbmc6bGF0TG5nLGxhdDpsYXQsbG5nOmxuZyxmZWF0dXJlOmV2dC5sYXllci5mZWF0dXJlUHJvcGVydGllcz9ldnQubGF5ZXIuZmVhdHVyZVByb3BlcnRpZXM6dW5kZWZpbmVkfTt0aGlzLmZpcmUoJ3B4LW1hcC1tYXJrZXItZ3JvdXAtbWFya2VyLXRhcHBlZCcsZGV0YWlsKX1pZihldnQubGF5ZXImJmV2dC5sYXllci5mZWF0dXJlUHJvcGVydGllcyYmZXZ0LmxheWVyLmZlYXR1cmVQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCdtYXJrZXItcG9wdXAnKSl7dGhpcy5fYmluZEFuZE9wZW5Qb3B1cChldnQubGF5ZXIpfX0sX2hhbmRsZVNpbmdsZU1hcmtlckRvdWJsZUNsaWNrOmZ1bmN0aW9uIF9oYW5kbGVTaW5nbGVNYXJrZXJEb3VibGVDbGljayhldnQpe3ZhciBsYXRMbmc9TC5sYXRMbmcoZXZ0LmxheWVyLmdldExhdExuZygpKTt2YXIgbGF0PWxhdExuZy5sYXQsbG5nPWxhdExuZy5sbmc7dmFyIGRldGFpbD17bGF0TG5nOmxhdExuZyxsYXQ6bGF0LGxuZzpsbmcsZmVhdHVyZTpldnQubGF5ZXIuZmVhdHVyZVByb3BlcnRpZXM/ZXZ0LmxheWVyLmZlYXR1cmVQcm9wZXJ0aWVzOnVuZGVmaW5lZH07dGhpcy5maXJlKCdweC1tYXAtbWFya2VyLWdyb3VwLW1hcmtlci1kb3VibGUtY2xpY2tlZCcsZGV0YWlsKX0sX2hhbmRsZUNsdXN0ZXJUYXA6ZnVuY3Rpb24gX2hhbmRsZUNsdXN0ZXJUYXAoZXZ0KXt2YXIgbGF0TG5nQm91bmRzPWV2dC5sYXllci5nZXRCb3VuZHMoKTt2YXIgbWFya2Vycz1ldnQubGF5ZXIuZ2V0QWxsQ2hpbGRNYXJrZXJzKCk7dmFyIGZlYXR1cmVzPVtdO2Zvcih2YXIgaT0wO2k8bWFya2Vycy5sZW5ndGg7aSsrKXtmZWF0dXJlcy5wdXNoKG1hcmtlcnNbaV0uZmVhdHVyZVByb3BlcnRpZXMpfXZhciBkZXRhaWw9e2JvdW5kczpsYXRMbmdCb3VuZHMsZmVhdHVyZXM6ZmVhdHVyZXN9O3RoaXMuZmlyZSgncHgtbWFwLW1hcmtlci1ncm91cC1jbHVzdGVyLXRhcHBlZCcsZGV0YWlsKX0sX2JpbmRBbmRPcGVuUG9wdXA6ZnVuY3Rpb24gX2JpbmRBbmRPcGVuUG9wdXAobWFya2VyKXtpZighbWFya2VyfHwhbWFya2VyLmJpbmRQb3B1cHx8IW1hcmtlci5vcGVuUG9wdXApcmV0dXJuO3ZhciBwb3B1cFNldHRpbmdzPXRoaXMuX2ZlYXRTZXR0aW5nc1RvUHJvcHMobWFya2VyLmZlYXR1cmVQcm9wZXJ0aWVzWydtYXJrZXItcG9wdXAnXSwncG9wdXAnKTtpZighcG9wdXBTZXR0aW5nc3x8ISgwLF9rZXlzMi5kZWZhdWx0KShwb3B1cFNldHRpbmdzKS5sZW5ndGgpcmV0dXJuO3ZhciBrbGFzc05hbWU9cG9wdXBTZXR0aW5ncy5fQmFzZSYmUHhNYXAuaGFzT3duUHJvcGVydHkocG9wdXBTZXR0aW5ncy5fQmFzZSk/cG9wdXBTZXR0aW5ncy5fQmFzZTonSW5mb1BvcHVwJzt2YXIgcG9wdXA9bmV3IFB4TWFwW2tsYXNzTmFtZV0ocG9wdXBTZXR0aW5ncyk7bWFya2VyLmJpbmRQb3B1cChwb3B1cCkub3BlblBvcHVwKCk7bWFya2VyLl9fYm91bmRDbG9zZUZuPXRoaXMuX3VuYmluZEFuZENsb3NlUG9wdXAuYmluZCh0aGlzLG1hcmtlcik7bWFya2VyLm9uKCdwb3B1cGNsb3NlJyxtYXJrZXIuX19ib3VuZENsb3NlRm4pfSxfdW5iaW5kQW5kQ2xvc2VQb3B1cDpmdW5jdGlvbiBfdW5iaW5kQW5kQ2xvc2VQb3B1cChtYXJrZXIpe2lmKCFtYXJrZXJ8fCFtYXJrZXIuZ2V0UG9wdXB8fCFtYXJrZXIuZ2V0UG9wdXAoKSlyZXR1cm47bWFya2VyLm9mZigncG9wdXBjbG9zZScsbWFya2VyLl9fYm91bmRDbG9zZUZuKTttYXJrZXIuX19ib3VuZENsb3NlRm49bnVsbDttYXJrZXIuY2xvc2VQb3B1cCgpLnVuYmluZFBvcHVwKCl9LF9mZWF0U2V0dGluZ3NUb1Byb3BzOmZ1bmN0aW9uIF9mZWF0U2V0dGluZ3NUb1Byb3BzKHNldHRpbmdzLHByZWZpeCl7dmFyIGtleXM9KDAsX2tleXMyLmRlZmF1bHQpKHNldHRpbmdzKTtpZigha2V5cy5sZW5ndGgpcmV0dXJuIHVuZGVmaW5lZDt2YXIgc2V0dGluZ3NBc1Byb3BzPXt9O3ZhciBpPTAsbGVuPWtleXMubGVuZ3RoLG5ld0tleT12b2lkIDA7Zm9yKDtpPGxlbjtpKyspe2lmKHByZWZpeCYma2V5c1tpXS5zdWJzdHIoMCxwcmVmaXgubGVuZ3RoKSE9PXByZWZpeCl7Y29udGludWV9aWYoL15bQS1aYS16XStcXC1iYXNlJC8udGVzdChrZXlzW2ldKSl7c2V0dGluZ3NBc1Byb3BzWydfQmFzZSddPXRoaXMuX3N0clRvS2xhc3NOYW1lKHNldHRpbmdzW2tleXNbaV1dKTtjb250aW51ZX1uZXdLZXk9a2V5c1tpXS5yZXBsYWNlKC9eW0EtWmEtel0rXFwtKC4qKSQvLCckMScpO3NldHRpbmdzQXNQcm9wc1tuZXdLZXldPXNldHRpbmdzW2tleXNbaV1dfXJldHVybiBzZXR0aW5nc0FzUHJvcHN9fTtQeE1hcEJlaGF2aW9yLk1hcmtlckdyb3VwPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuTWFya2VyR3JvdXBJbXBsXX0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiOjEsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIjozLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIjo1LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCI6MTAsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc2V0XCI6MTIsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvd2Vhay1tYXBcIjoxNSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI6MjEsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI6MjJ9XSwxNDE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfdHlwZW9mMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7dmFyIF90eXBlb2YzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfX0oZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7d2luZG93LlB4TWFwQmVoYXZpb3I9d2luZG93LlB4TWFwQmVoYXZpb3J8fHt9O3dpbmRvdy5QeE1hcD13aW5kb3cuUHhNYXB8fHt9O1B4TWFwQmVoYXZpb3IuTWFya2VySW1wbD17cHJvcGVydGllczp7bGF0Ont0eXBlOk51bWJlcixub3RpZnk6dHJ1ZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGxuZzp7dHlwZTpOdW1iZXIsbm90aWZ5OnRydWUsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxuYW1lOnt0eXBlOlN0cmluZyxub3RpZnk6dHJ1ZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9fSxjYW5BZGRJbnN0OmZ1bmN0aW9uIGNhbkFkZEluc3QoKXtyZXR1cm4gdGhpcy5sYXRMbmdJc1ZhbGlkKHRoaXMubGF0LHRoaXMubG5nLHRydWUpfSxfY2FuQmVOdW06ZnVuY3Rpb24gX2NhbkJlTnVtKHZhbCl7cmV0dXJuIWlzTmFOKHZhbCkmJnZhbCE9PScnfSxsYXRMbmdJc1ZhbGlkOmZ1bmN0aW9uIGxhdExuZ0lzVmFsaWQobGF0LGxuZyxoaWRlRXJyb3Ipe3ZhciBpc1ZhbGlkPXR5cGVvZiBsYXQhPT0ndW5kZWZpbmVkJyYmdGhpcy5fY2FuQmVOdW0obGF0KSYmdHlwZW9mIGxuZyE9PSd1bmRlZmluZWQnJiZ0aGlzLl9jYW5CZU51bShsbmcpO2lmKGlzVmFsaWQpcmV0dXJuIHRydWU7aWYoIWhpZGVFcnJvcil7Y29uc29sZS5sb2coJ1BYLU1BUCBDT05GSUdVUkFUSU9OIEVSUk9SOlxcbiAgICAgICAgWW91IGVudGVyZWQgYW4gaW52YWxpZCBgbGF0YCBvciBgbG5nYCBhdHRyaWJ1dGUgZm9yICcrdGhpcy5pcysnLiBZb3UgbXVzdCBwYXNzIGEgdmFsaWQgbnVtYmVyLicpfXJldHVybiBmYWxzZX0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7dmFyIGFkZGVkRm49dGhpcy5faGFuZGxlTWFya2VyQWRkZWQuYmluZCh0aGlzKTt2YXIgcmVtb3ZlZEZuPXRoaXMuX2hhbmRsZU1hcmtlclJlbW92ZWQuYmluZCh0aGlzKTt2YXIgdGFwRm49dGhpcy5faGFuZGxlTWFya2VyVGFwcGVkLmJpbmQodGhpcyk7dGhpcy5iaW5kRXZlbnRzKHsnYWRkJzphZGRlZEZuLCdyZW1vdmUnOnJlbW92ZWRGbiwnY2xpY2snOnRhcEZufSx0aGlzLm1hcmtlcik7UHhNYXBCZWhhdmlvci5MYXllckltcGwuYWRkSW5zdC5jYWxsKHRoaXMscGFyZW50KX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KHBhcmVudCl7dGhpcy5faGFuZGxlTWFya2VyUmVtb3ZlZCgpO1B4TWFwQmVoYXZpb3IuTGF5ZXJJbXBsLnJlbW92ZUluc3QuY2FsbCh0aGlzLHBhcmVudCl9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXt0aGlzLm1hcmtlcj1MLm1hcmtlcihvcHRpb25zLmdlb21ldHJ5LG9wdGlvbnMuY29uZmlnKTt0aGlzLm1hcmtlci5pc01hcmtlcj10cnVlO3JldHVybiB0aGlzLm1hcmtlcn0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXt2YXIgZ2VvbVdhc0RlZmluZWQ9KDAsX3R5cGVvZjMuZGVmYXVsdCkobGFzdE9wdGlvbnMuZ2VvbWV0cnkpPT09J29iamVjdCc7dmFyIGdlb21Jc0RlZmluZWQ9KDAsX3R5cGVvZjMuZGVmYXVsdCkobmV4dE9wdGlvbnMuZ2VvbWV0cnkpPT09J29iamVjdCc7dmFyIGdlb21Jc0RpZmZlcmVudD1nZW9tV2FzRGVmaW5lZCYmZ2VvbUlzRGVmaW5lZCYmKGxhc3RPcHRpb25zLmdlb21ldHJ5LmxhdCE9PW5leHRPcHRpb25zLmdlb21ldHJ5LmxhdHx8bGFzdE9wdGlvbnMuZ2VvbWV0cnkubG5nIT09bmV4dE9wdGlvbnMuZ2VvbWV0cnkubG5nKTtpZihnZW9tV2FzRGVmaW5lZCYmIWdlb21Jc0RlZmluZWQpe3RoaXMuZWxlbWVudEluc3Quc2V0T3BhY2l0eSgwKX1pZighZ2VvbVdhc0RlZmluZWQmJmdlb21Jc0RlZmluZWQpe3RoaXMuZWxlbWVudEluc3Quc2V0TGF0TG5nKG5leHRPcHRpb25zLmdlb21ldHJ5KTt0aGlzLmVsZW1lbnRJbnN0LnNldE9wYWNpdHkoMSl9aWYoZ2VvbUlzRGlmZmVyZW50KXt0aGlzLmVsZW1lbnRJbnN0LnNldExhdExuZyhuZXh0T3B0aW9ucy5nZW9tZXRyeSl9aWYobGFzdE9wdGlvbnMuY29uZmlnLmljb24hPT1uZXh0T3B0aW9ucy5jb25maWcuaWNvbil7dGhpcy5lbGVtZW50SW5zdC5zZXRJY29uKG5leHRPcHRpb25zLmNvbmZpZy5pY29uKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7dmFyIGdlb21ldHJ5PXRoaXMuZ2V0TGF0TG5nKCk7dmFyIGNvbmZpZz17fTtjb25maWcudGl0bGU9dGhpcy5uYW1lfHwnJztjb25maWcuaWNvbj10aGlzLmdldE1hcmtlckljb24oKTtyZXR1cm57Z2VvbWV0cnk6Z2VvbWV0cnksY29uZmlnOmNvbmZpZ319LGdldExhdExuZzpmdW5jdGlvbiBnZXRMYXRMbmcoKXtpZih0aGlzLmxhdExuZ0lzVmFsaWQodGhpcy5sYXQsdGhpcy5sbmcpKXtyZXR1cm4gTC5sYXRMbmcodGhpcy5sYXQsdGhpcy5sbmcpfX0sZ2V0TWFya2VySWNvbjpmdW5jdGlvbiBnZXRNYXJrZXJJY29uKCl7dGhyb3cgbmV3IEVycm9yKCdUaGUgYGdldE1hcmtlckljb25gIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLicpfSxfaGFuZGxlTWFya2VyQWRkZWQ6ZnVuY3Rpb24gX2hhbmRsZU1hcmtlckFkZGVkKCl7dmFyIGxhdExuZz10aGlzLmdldExhdExuZygpO3ZhciBkZXRhaWw9e307aWYobGF0TG5nKXtkZXRhaWwubGF0TG5nPWxhdExuZztkZXRhaWwubGF0PWxhdExuZy5sYXQ7ZGV0YWlsLmxuZz1sYXRMbmcubG5nfXRoaXMuZmlyZSgncHgtbWFwLW1hcmtlci1hZGRlZCcsZGV0YWlsKX0sX2hhbmRsZU1hcmtlclJlbW92ZWQ6ZnVuY3Rpb24gX2hhbmRsZU1hcmtlclJlbW92ZWQoKXt2YXIgbGF0TG5nPXRoaXMuZ2V0TGF0TG5nKCk7dmFyIGRldGFpbD17fTtpZihsYXRMbmcpe2RldGFpbC5sYXRMbmc9bGF0TG5nO2RldGFpbC5sYXQ9bGF0TG5nLmxhdDtkZXRhaWwubG5nPWxhdExuZy5sbmd9dGhpcy5maXJlKCdweC1tYXAtbWFya2VyLXJlbW92ZWQnLGRldGFpbCl9LF9oYW5kbGVNYXJrZXJUYXBwZWQ6ZnVuY3Rpb24gX2hhbmRsZU1hcmtlclRhcHBlZCgpe3ZhciBsYXRMbmc9dGhpcy5nZXRMYXRMbmcoKTt2YXIgZGV0YWlsPXt9O2lmKGxhdExuZyl7ZGV0YWlsLmxhdExuZz1sYXRMbmc7ZGV0YWlsLmxhdD1sYXRMbmcubGF0O2RldGFpbC5sbmc9bGF0TG5nLmxuZ310aGlzLmZpcmUoJ3B4LW1hcC1tYXJrZXItdGFwcGVkJyxkZXRhaWwpfX07UHhNYXBCZWhhdmlvci5NYXJrZXI9W1B4TWFwQmVoYXZpb3IuTGF5ZXIsUHhNYXBCZWhhdmlvci5QYXJlbnRMYXllcixQeE1hcEJlaGF2aW9yLk1hcmtlckltcGxdO1B4TWFwQmVoYXZpb3IuU3ltYm9sTWFya2VySW1wbD17cHJvcGVydGllczp7dHlwZTp7dHlwZTpTdHJpbmcscmVmbGVjdFRvQXR0cmlidXRlOnRydWUsdmFsdWU6J2luZm8nLG9ic2VydmVyOidfdXBkYXRlTWFya2VySWNvbid9LGljb246e3R5cGU6U3RyaW5nLG9ic2VydmVyOidfdXBkYXRlTWFya2VySWNvbid9fSxnZXRNYXJrZXJJY29uOmZ1bmN0aW9uIGdldE1hcmtlckljb24oKXtpZighdGhpcy5tYXJrZXJJY29uKXt2YXIgb3B0aW9ucz10aGlzLl9nZXRNYXJrZXJJY29uT3B0aW9ucygpO3RoaXMubWFya2VySWNvbj1uZXcgUHhNYXAuU3ltYm9sSWNvbihvcHRpb25zKX1yZXR1cm4gdGhpcy5tYXJrZXJJY29ufSxfdXBkYXRlTWFya2VySWNvbjpmdW5jdGlvbiBfdXBkYXRlTWFya2VySWNvbigpe2lmKCF0aGlzLm1hcmtlckljb24pcmV0dXJuO3ZhciBvcHRpb25zPXRoaXMuX2dldE1hcmtlckljb25PcHRpb25zKCk7dGhpcy5tYXJrZXJJY29uPW5ldyBQeE1hcC5TeW1ib2xJY29uKG9wdGlvbnMpO3RoaXMuc2hvdWxkVXBkYXRlSW5zdCgpfSxfZ2V0TWFya2VySWNvbk9wdGlvbnM6ZnVuY3Rpb24gX2dldE1hcmtlckljb25PcHRpb25zKCl7cmV0dXJue3R5cGU6dGhpcy50eXBlLHN5bWJvbDp0aGlzLnN5bWJvbENsYXNzLGljb246dGhpcy5pY29uLHN0eWxlU2NvcGU6dGhpcy5pc1NoYWR5U2NvcGVkKCk/dGhpcy5nZXRTaGFkeVNjb3BlKCk6dW5kZWZpbmVkLHN0cm9rZTp0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1pcm9uLWljb24tc3Ryb2tlLWNvbG9yJyksc3Ryb2tlV2lkdGg6dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taXJvbi1pY29uLXN0cm9rZS13aWR0aCcpLGZpbGw6dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taXJvbi1pY29uLWZpbGwtY29sb3InKX19fTtQeE1hcEJlaGF2aW9yLlN5bWJvbE1hcmtlcj1bUHhNYXBCZWhhdmlvci5NYXJrZXIsUHhNYXBCZWhhdmlvci5TeW1ib2xNYXJrZXJJbXBsXTtQeE1hcEJlaGF2aW9yLlN0YXRpY01hcmtlckltcGw9e3Byb3BlcnRpZXM6e3R5cGU6e3R5cGU6U3RyaW5nLHJlZmxlY3RUb0F0dHJpYnV0ZTp0cnVlLHZhbHVlOidpbmZvJyxvYnNlcnZlcjonX3VwZGF0ZU1hcmtlckljb24nfX0sZ2V0TWFya2VySWNvbjpmdW5jdGlvbiBnZXRNYXJrZXJJY29uKCl7aWYoIXRoaXMubWFya2VySWNvbil7dmFyIG9wdGlvbnM9dGhpcy5fZ2V0TWFya2VySWNvbk9wdGlvbnMoKTt0aGlzLm1hcmtlckljb249bmV3IFB4TWFwLlN0YXRpY0ljb24ob3B0aW9ucyl9cmV0dXJuIHRoaXMubWFya2VySWNvbn0sX3VwZGF0ZU1hcmtlckljb246ZnVuY3Rpb24gX3VwZGF0ZU1hcmtlckljb24oKXtpZighdGhpcy5tYXJrZXJJY29uKXJldHVybjt2YXIgb3B0aW9ucz10aGlzLl9nZXRNYXJrZXJJY29uT3B0aW9ucygpO3RoaXMubWFya2VySWNvbj1uZXcgUHhNYXAuU3RhdGljSWNvbihvcHRpb25zKTt0aGlzLnNob3VsZFVwZGF0ZUluc3QoKX0sX2dldE1hcmtlckljb25PcHRpb25zOmZ1bmN0aW9uIF9nZXRNYXJrZXJJY29uT3B0aW9ucygpe3JldHVybnt0eXBlOnRoaXMudHlwZXx8Jycsc3R5bGVTY29wZTp0aGlzLmlzU2hhZHlTY29wZWQoKT90aGlzLmdldFNoYWR5U2NvcGUoKTp1bmRlZmluZWR9fX07UHhNYXBCZWhhdmlvci5TdGF0aWNNYXJrZXI9W1B4TWFwQmVoYXZpb3IuTWFya2VyLFB4TWFwQmVoYXZpb3IuU3RhdGljTWFya2VySW1wbF07UHhNYXBCZWhhdmlvci5Mb2NhdGVNYXJrZXJJbXBsPXtwcm9wZXJ0aWVzOnthY2N1cmFjeTp7dHlwZTpOdW1iZXIsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3RoaXMubWFya2VyQmFzZUljb249bmV3IENpcmNsZU1hcmtlcldpdGhUaXRsZShvcHRpb25zLmdlb21ldHJ5LG9wdGlvbnMuYmFzZUNvbmZpZyk7dGhpcy5tYXJrZXJBY2N1cmFjeUljb249TC5jaXJjbGUob3B0aW9ucy5nZW9tZXRyeSxvcHRpb25zLmFjY3VyYWN5UmFkaXVzLG9wdGlvbnMuYWNjdXJhY3lDb25maWcpO3RoaXMubWFya2VyR3JvdXA9TC5mZWF0dXJlR3JvdXAoW3RoaXMubWFya2VyQWNjdXJhY3lJY29uLHRoaXMubWFya2VyQmFzZUljb25dKTt0aGlzLm1hcmtlckdyb3VwLmlzTWFya2VyPXRydWU7dGhpcy5tYXJrZXJHcm91cC5nZXRMYXRMbmc9dGhpcy5nZXRMYXRMbmcuYmluZCh0aGlzKTtyZXR1cm4gdGhpcy5tYXJrZXJHcm91cH0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXt2YXIgZ2VvbVdhc0RlZmluZWQ9KDAsX3R5cGVvZjMuZGVmYXVsdCkobGFzdE9wdGlvbnMuZ2VvbWV0cnkpPT09J29iamVjdCc7dmFyIGdlb21Jc0RlZmluZWQ9KDAsX3R5cGVvZjMuZGVmYXVsdCkobmV4dE9wdGlvbnMuZ2VvbWV0cnkpPT09J29iamVjdCc7dmFyIGdlb21Jc0RpZmZlcmVudD1nZW9tV2FzRGVmaW5lZCYmZ2VvbUlzRGVmaW5lZCYmKGxhc3RPcHRpb25zLmdlb21ldHJ5LmxhdCE9PW5leHRPcHRpb25zLmdlb21ldHJ5LmxhdHx8bGFzdE9wdGlvbnMuZ2VvbWV0cnkubG5nIT09bmV4dE9wdGlvbnMuZ2VvbWV0cnkubG5nKTtpZihnZW9tV2FzRGVmaW5lZCYmIWdlb21Jc0RlZmluZWQpe3RoaXMubWFya2VyQmFzZUljb24uc2V0U3R5bGUoe29wYWNpdHk6MCxmaWxsT3BhY2l0eTowfSk7dGhpcy5tYXJrZXJBY2N1cmFjeUljb24uc2V0U3R5bGUoe29wYWNpdHk6MCxmaWxsT3BhY2l0eTowfSl9aWYoIWdlb21XYXNEZWZpbmVkJiZnZW9tSXNEZWZpbmVkKXt0aGlzLm1hcmtlckJhc2VJY29uLnNldExhdExuZyhuZXh0T3B0aW9ucy5nZW9tZXRyeSk7dGhpcy5tYXJrZXJBY2N1cmFjeUljb24uc2V0TGF0TG5nKG5leHRPcHRpb25zLmdlb21ldHJ5KTt0aGlzLm1hcmtlckJhc2VJY29uLnNldFN0eWxlKG5leHRPcHRpb25zLmJhc2VDb25maWcpO3RoaXMubWFya2VyQWNjdXJhY3lJY29uLnNldFN0eWxlKG5leHRPcHRpb25zLmFjY3VyYWN5Q29uZmlnKX1pZihnZW9tSXNEaWZmZXJlbnQpe3RoaXMubWFya2VyQmFzZUljb24uc2V0TGF0TG5nKG5leHRPcHRpb25zLmdlb21ldHJ5KTt0aGlzLm1hcmtlckFjY3VyYWN5SWNvbi5zZXRMYXRMbmcobmV4dE9wdGlvbnMuZ2VvbWV0cnkpfWlmKGxhc3RPcHRpb25zLmFjY3VyYWN5UmFkaXVzIT09bmV4dE9wdGlvbnMuYWNjdXJhY3lSYWRpdXMpe3RoaXMubWFya2VyQWNjdXJhY3lJY29uLnNldFJhZGl1cyhuZXh0T3B0aW9ucy5hY2N1cmFjeVJhZGl1cyl9aWYobGFzdE9wdGlvbnMuYmFzZUNvbmZpZy50aXRsZSE9PW5leHRPcHRpb25zLmJhc2VDb25maWcudGl0bGUpe3RoaXMubWFya2VyQmFzZUljb24uc2V0VGl0bGUobmV4dE9wdGlvbnMuYmFzZUNvbmZpZy50aXRsZSl9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3ZhciBnZW9tZXRyeT10aGlzLmdldExhdExuZygpO3ZhciBiYXNlQ29uZmlnPXt9O2Jhc2VDb25maWcucmFkaXVzPTcuNTtiYXNlQ29uZmlnLnN0cm9rZT10cnVlO2Jhc2VDb25maWcuY29sb3I9dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLW1hcmtlci1sb2NhdGUtaWNvbi1ib3JkZXItY29sb3InKTtiYXNlQ29uZmlnLndlaWdodD0zO2Jhc2VDb25maWcub3BhY2l0eT0xO2Jhc2VDb25maWcuZmlsbD10cnVlO2Jhc2VDb25maWcuZmlsbENvbG9yPXRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWludGVybmFsLXB4LW1hcC1tYXJrZXItbG9jYXRlLWljb24tY29sb3InKTtiYXNlQ29uZmlnLmZpbGxPcGFjaXR5PTE7YmFzZUNvbmZpZy5jbGFzc05hbWU9J21hcC1tYXJrZXItbG9jYXRlLWJhc2UgJysodGhpcy5pc1NoYWR5U2NvcGVkKCk/dGhpcy5nZXRTaGFkeVNjb3BlKCk6JycpO2Jhc2VDb25maWcudGl0bGU9dGhpcy5uYW1lfHwnJzt2YXIgYWNjdXJhY3lSYWRpdXM9dGhpcy5hY2N1cmFjeXx8MDt2YXIgYWNjdXJhY3lDb25maWc9e307YWNjdXJhY3lDb25maWcuc3Ryb2tlPWZhbHNlO2FjY3VyYWN5Q29uZmlnLm9wYWNpdHk9MDthY2N1cmFjeUNvbmZpZy5maWxsPXRydWU7YWNjdXJhY3lDb25maWcuZmlsbENvbG9yPXRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWludGVybmFsLXB4LW1hcC1tYXJrZXItbG9jYXRlLWljb24tYWNjdXJhY3ktY29sb3InKTthY2N1cmFjeUNvbmZpZy5maWxsT3BhY2l0eT10aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1pbnRlcm5hbC1weC1tYXAtbWFya2VyLWxvY2F0ZS1pY29uLWFjY3VyYWN5LW9wYWNpdHknKTthY2N1cmFjeUNvbmZpZy5jbGFzc05hbWU9J21hcC1tYXJrZXItbG9jYXRlLWFjY3VyYWN5ICcrKHRoaXMuaXNTaGFkeVNjb3BlZCgpP3RoaXMuZ2V0U2hhZHlTY29wZSgpOicnKTtyZXR1cm57Z2VvbWV0cnk6Z2VvbWV0cnksYmFzZUNvbmZpZzpiYXNlQ29uZmlnLGFjY3VyYWN5UmFkaXVzOmFjY3VyYWN5UmFkaXVzLGFjY3VyYWN5Q29uZmlnOmFjY3VyYWN5Q29uZmlnfX19O1B4TWFwQmVoYXZpb3IuTG9jYXRlTWFya2VyPVtQeE1hcEJlaGF2aW9yLk1hcmtlcixQeE1hcEJlaGF2aW9yLkxvY2F0ZU1hcmtlckltcGxdO3ZhciBDaXJjbGVNYXJrZXJXaXRoVGl0bGU9TC5DaXJjbGVNYXJrZXIuZXh0ZW5kKHtvcHRpb25zOnt0aXRsZTonJ30sc2V0VGl0bGU6ZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpe3RoaXMub3B0aW9ucy50aXRsZT10aXRsZXx8Jyc7aWYodGhpcy5fcGF0aCYmdGhpcy5vcHRpb25zLnRpdGxlPT09Jycpe3RoaXMuX3BhdGguaW5uZXJIVE1MPScnfWlmKHRoaXMuX3BhdGgmJnRoaXMub3B0aW9ucy50aXRsZSE9PScnKXt0aGlzLl9wYXRoLmlubmVySFRNTD0nPHRpdGxlPicrdGhpcy5vcHRpb25zLnRpdGxlKyc8L3RpdGxlPid9fSxvbkFkZDpmdW5jdGlvbiBvbkFkZCgpe0wuQ2lyY2xlTWFya2VyLnByb3RvdHlwZS5vbkFkZC5jYWxsKHRoaXMpO2lmKHRoaXMub3B0aW9ucy50aXRsZSE9PScnKXt0aGlzLl9wYXRoLmlubmVySFRNTD0nPHRpdGxlPicrdGhpcy5vcHRpb25zLnRpdGxlKyc8L3RpdGxlPid9fX0pO1B4TWFwLkNpcmNsZU1hcmtlcldpdGhUaXRsZT1DaXJjbGVNYXJrZXJXaXRoVGl0bGV9KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIjoyMn1dLDE0MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7dmFyIF9hc3NpZ249cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24nKTt2YXIgX2Fzc2lnbjI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTt2YXIgX2dldFByb3RvdHlwZU9mPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO3ZhciBfZ2V0UHJvdG90eXBlT2YyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTt2YXIgX2NsYXNzQ2FsbENoZWNrMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTt2YXIgX2NsYXNzQ2FsbENoZWNrMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO3ZhciBfY3JlYXRlQ2xhc3MyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO3ZhciBfY3JlYXRlQ2xhc3MzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7dmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO3ZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO3ZhciBfaW5oZXJpdHMyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO3ZhciBfaW5oZXJpdHMzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7dmFyIF9zdHJpbmdpZnk9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5Jyk7dmFyIF9zdHJpbmdpZnkyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmeSk7dmFyIF90eXBlb2YyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnKTt2YXIgX3R5cGVvZjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7dmFyIF9rZXlzPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO3ZhciBfa2V5czI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5Qb3B1cEltcGw9e3Byb3BlcnRpZXM6e2Nsb3NlT25Db250cm9sSW50ZXJhY3Q6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZX19LGFkZEluc3Q6ZnVuY3Rpb24gYWRkSW5zdChwYXJlbnQpe2lmKHBhcmVudCYmcGFyZW50LmdldFBvcHVwJiZwYXJlbnQuZ2V0UG9wdXAoKSE9PXRoaXMuZWxlbWVudEluc3Qpe3BhcmVudC5iaW5kUG9wdXAodGhpcy5lbGVtZW50SW5zdCk7dmFyIGNvbnRyb2xDbGlja0ZuPXRoaXMuX2hhbmRsZUNvbnRyb2xDbGljay5iaW5kKHRoaXMscGFyZW50KTt0aGlzLmJpbmRFdmVudHMoeydjb250cm9sY2xpY2snOmNvbnRyb2xDbGlja0ZufSxwYXJlbnQuX21hcFRvQWRkKX19LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdChwYXJlbnQpe2lmKHBhcmVudCYmcGFyZW50LmdldFBvcHVwJiZwYXJlbnQuZ2V0UG9wdXAoKT09PXRoaXMuZWxlbWVudEluc3Qpe3BhcmVudC51bmJpbmRQb3B1cCh0aGlzLmVsZW1lbnRJbnN0KX19LF9oYW5kbGVDb250cm9sQ2xpY2s6ZnVuY3Rpb24gX2hhbmRsZUNvbnRyb2xDbGljayhwYXJlbnQpe2lmKHRoaXMuY2xvc2VPbkNvbnRyb2xJbnRlcmFjdCYmcGFyZW50JiZwYXJlbnQuY2xvc2VQb3B1cCl7cGFyZW50LmNsb3NlUG9wdXAoKX19fTtQeE1hcEJlaGF2aW9yLlBvcHVwPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuUG9wdXBJbXBsXTtQeE1hcEJlaGF2aW9yLkluZm9Qb3B1cEltcGw9e3Byb3BlcnRpZXM6e3RpdGxlOnt0eXBlOlN0cmluZyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGRlc2NyaXB0aW9uOnt0eXBlOlN0cmluZyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGltZ1NyYzp7dHlwZTpTdHJpbmcsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3JldHVybiBuZXcgUHhNYXAuSW5mb1BvcHVwKG9wdGlvbnMpfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe3ZhciB1cGRhdGVzPXt9O2lmKGxhc3RPcHRpb25zLnRpdGxlIT09bmV4dE9wdGlvbnMudGl0bGUpe3VwZGF0ZXMudGl0bGU9bmV4dE9wdGlvbnMudGl0bGV9aWYobGFzdE9wdGlvbnMuZGVzY3JpcHRpb24hPT1uZXh0T3B0aW9ucy5kZXNjcmlwdGlvbil7dXBkYXRlcy5kZXNjcmlwdGlvbj1uZXh0T3B0aW9ucy5kZXNjcmlwdGlvbn1pZihsYXN0T3B0aW9ucy5pbWdTcmMhPT1uZXh0T3B0aW9ucy5pbWdTcmMpe3VwZGF0ZXMuaW1nU3JjPW5leHRPcHRpb25zLmltZ1NyY31pZigoMCxfa2V5czIuZGVmYXVsdCkodXBkYXRlcykubGVuZ3RoKXt0aGlzLmVsZW1lbnRJbnN0LnVwZGF0ZVNldHRpbmdzKHVwZGF0ZXMpfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXtyZXR1cm57dGl0bGU6dGhpcy50aXRsZSxkZXNjcmlwdGlvbjp0aGlzLmRlc2NyaXB0aW9uLGltZ1NyYzp0aGlzLmltZ1NyYyxzdHlsZVNjb3BlOnRoaXMuaXNTaGFkeVNjb3BlZCgpP3RoaXMuZ2V0U2hhZHlTY29wZSgpOnVuZGVmaW5lZH19fTtQeE1hcEJlaGF2aW9yLkluZm9Qb3B1cD1bUHhNYXBCZWhhdmlvci5Qb3B1cCxQeE1hcEJlaGF2aW9yLkluZm9Qb3B1cEltcGxdO1B4TWFwQmVoYXZpb3IuRGF0YVBvcHVwSW1wbD17cHJvcGVydGllczp7dGl0bGU6e3R5cGU6U3RyaW5nLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sZGF0YTp7dHlwZTpPYmplY3QsdmFsdWU6ZnVuY3Rpb24gdmFsdWUoKXtyZXR1cm57fX0sb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRoaXMuZGF0YSYmKDAsX3R5cGVvZjMuZGVmYXVsdCkodGhpcy5kYXRhKT09PSdvYmplY3QnJiYoMCxfa2V5czIuZGVmYXVsdCkodGhpcy5kYXRhKS5sZW5ndGh9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXtyZXR1cm4gbmV3IFB4TWFwLkRhdGFQb3B1cChvcHRpb25zKX0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXt2YXIgdXBkYXRlcz17fTtpZihsYXN0T3B0aW9ucy50aXRsZSE9PW5leHRPcHRpb25zLnRpdGxlKXt1cGRhdGVzLnRpdGxlPW5leHRPcHRpb25zLnRpdGxlfWlmKGxhc3RPcHRpb25zLmRhdGFIYXNoIT09bmV4dE9wdGlvbnMuZGF0YUhhc2gpe3VwZGF0ZXMuZGF0YT1uZXh0T3B0aW9ucy5kYXRhfWlmKCgwLF9rZXlzMi5kZWZhdWx0KSh1cGRhdGVzKS5sZW5ndGgpe3RoaXMuZWxlbWVudEluc3QudXBkYXRlU2V0dGluZ3ModXBkYXRlcyl9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3ZhciBkYXRhPXRoaXMuX2dldFZhbGlkRGF0YSgpO3JldHVybnt0aXRsZTp0aGlzLnRpdGxlLGRhdGE6ZGF0YSxkYXRhSGFzaDooMCxfc3RyaW5naWZ5Mi5kZWZhdWx0KShkYXRhKSxzdHlsZVNjb3BlOnRoaXMuaXNTaGFkeVNjb3BlZCgpP3RoaXMuZ2V0U2hhZHlTY29wZSgpOnVuZGVmaW5lZH19LF9nZXRWYWxpZERhdGE6ZnVuY3Rpb24gX2dldFZhbGlkRGF0YSgpe2lmKCgwLF90eXBlb2YzLmRlZmF1bHQpKHRoaXMuZGF0YSkhPT0nb2JqZWN0Jyl7Y29uc29sZS5sb2coJ1BYLU1BUCBDT05GSUdVUkFUSU9OIEVSUk9SOlxcbiAgICAgICAgICBZb3UgZW50ZXJlZCBhbiBpbnZhbGlkIGBkYXRhYCBhdHRyaWJ1dGUgZm9yICcrdGhpcy5pcysnLiBZb3UgbXVzdCBwYXNzIGEgdmFsaWQgb2JqZWN0LlxcbiAgICAgICAgICBBbiBhdHRyaWJ1dGUgb2YgdHlwZSBgJysoMCxfdHlwZW9mMy5kZWZhdWx0KSh0aGlzLmRhdGEpKydgIHdhcyBwYXNzZWQuJyk7cmV0dXJue319cmV0dXJuIHRoaXMuZGF0YX19O1B4TWFwQmVoYXZpb3IuRGF0YVBvcHVwPVtQeE1hcEJlaGF2aW9yLlBvcHVwLFB4TWFwQmVoYXZpb3IuRGF0YVBvcHVwSW1wbF07d2luZG93LlB4TWFwPXdpbmRvdy5QeE1hcHx8e307dmFyIEluZm9Qb3B1cD1mdW5jdGlvbihfTCRQb3B1cCl7KDAsX2luaGVyaXRzMy5kZWZhdWx0KShJbmZvUG9wdXAsX0wkUG9wdXApO2Z1bmN0aW9uIEluZm9Qb3B1cCgpe3ZhciBfcmV0O3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307KDAsX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLEluZm9Qb3B1cCk7dmFyIF90aGlzPSgwLF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLChJbmZvUG9wdXAuX19wcm90b19ffHwoMCxfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEluZm9Qb3B1cCkpLmNhbGwodGhpcykpO190aGlzLl9jcmVhdGVQb3B1cChzZXR0aW5ncyk7cmV0dXJuIF9yZXQ9X3RoaXMsKDAsX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLF9yZXQpfSgwLF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoSW5mb1BvcHVwLFt7a2V5OidvbkFkZCcsdmFsdWU6ZnVuY3Rpb24gb25BZGQobWFwKXtpZihtYXAuX19hZGRTaGFkeVNjb3BlKXt2YXIgc3JjUGFuZT10aGlzLmdldFBhbmUoKTt2YXIgc3JjRm49c3JjUGFuZS5hcHBlbmRDaGlsZDtzcmNQYW5lLmFwcGVuZENoaWxkPWZ1bmN0aW9uKGVsKXttYXAuX19hZGRTaGFkeVNjb3BlKGVsLGZhbHNlKTtQb2x5bWVyLmRvbShzcmNQYW5lKS5hcHBlbmRDaGlsZChlbCl9fUwuUG9wdXAucHJvdG90eXBlLm9uQWRkLmNhbGwodGhpcyxtYXApO2lmKG1hcC5fX2FkZFNoYWR5U2NvcGUpe3NyY1BhbmUuYXBwZW5kQ2hpbGQ9c3JjRm59fX0se2tleTonX3VwZGF0ZUNvbnRlbnQnLHZhbHVlOmZ1bmN0aW9uIF91cGRhdGVDb250ZW50KCl7aWYodGhpcy5fbWFwJiZ0aGlzLl9tYXAuX19hZGRTaGFkeVNjb3BlJiZ0aGlzLl9jb250ZW50Lmxlbmd0aCl7dmFyIHNyY05vZGU9dGhpcy5fY29udGVudE5vZGU7dmFyIGZha2VOb2RlPXtpbm5lckhUTUw6bnVsbH07dGhpcy5fY29udGVudE5vZGU9ZmFrZU5vZGV9TC5EaXZPdmVybGF5LnByb3RvdHlwZS5fdXBkYXRlQ29udGVudC5jYWxsKHRoaXMpO2lmKHRoaXMuX21hcCYmdGhpcy5fbWFwLl9fYWRkU2hhZHlTY29wZSYmdGhpcy5fY29udGVudC5sZW5ndGgpe2lmKHR5cGVvZiBmYWtlTm9kZS5pbm5lckhUTUw9PT0nc3RyaW5nJyl7UG9seW1lci5kb20oc3JjTm9kZSkuaW5uZXJIVE1MPWZha2VOb2RlLmlubmVySFRNTH10aGlzLl9jb250ZW50Tm9kZT1zcmNOb2RlfX19LHtrZXk6J19jcmVhdGVQb3B1cCcsdmFsdWU6ZnVuY3Rpb24gX2NyZWF0ZVBvcHVwKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTt0aGlzLnNldHRpbmdzPXNldHRpbmdzO3ZhciB0aXRsZT1zZXR0aW5ncy50aXRsZSxkZXNjcmlwdGlvbj1zZXR0aW5ncy5kZXNjcmlwdGlvbixpbWdTcmM9c2V0dGluZ3MuaW1nU3JjLHN0eWxlU2NvcGU9c2V0dGluZ3Muc3R5bGVTY29wZTt2YXIgY29udGVudD10aGlzLl9nZW5lcmF0ZVBvcHVwQ29udGVudCh0aXRsZSxkZXNjcmlwdGlvbixpbWdTcmMpO3ZhciBjbGFzc05hbWU9J21hcC1wb3B1cC1pbmZvICcrKHN0eWxlU2NvcGV8fCcnKTt2YXIgbWF4V2lkdGg9NDAwO3ZhciBtaW5XaWR0aD0zMDA7dGhpcy5pbml0aWFsaXplKHtjbGFzc05hbWU6Y2xhc3NOYW1lLG1heFdpZHRoOm1heFdpZHRoLG1pbldpZHRoOm1pbldpZHRofSk7dGhpcy5zZXRDb250ZW50KGNvbnRlbnQpfX0se2tleTonX2dlbmVyYXRlUG9wdXBDb250ZW50Jyx2YWx1ZTpmdW5jdGlvbiBfZ2VuZXJhdGVQb3B1cENvbnRlbnQodGl0bGUsZGVzY3JpcHRpb24saW1nU3JjKXt2YXIgX3RoaXMyPXRoaXM7dmFyIHRtcGxGbklmPWZ1bmN0aW9uIHRtcGxGbklmKGZuKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCx2YWxzPUFycmF5KF9sZW4+MT9fbGVuLTE6MCksX2tleT0xO19rZXk8X2xlbjtfa2V5Kyspe3ZhbHNbX2tleS0xXT1hcmd1bWVudHNbX2tleV19cmV0dXJuIHZhbHMubGVuZ3RoJiZ2YWxzWzBdIT09dW5kZWZpbmVkP2ZuLmNhbGwuYXBwbHkoZm4sW190aGlzMl0uY29uY2F0KHZhbHMpKTonJ307dmFyIGltZ1RtcGw9ZnVuY3Rpb24gaW1nVG1wbChpbWdTcmMpe3JldHVybidcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtYm94LWluZm9fX2ltYWdlXCI+XFxuICAgICAgICAgIDxpbWcgc3JjPVwiJytpbWdTcmMrJ1wiIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAnfTt2YXIgdGl0bGVUbXBsPWZ1bmN0aW9uIHRpdGxlVG1wbCh0aXRsZSl7cmV0dXJuJ1xcbiAgICAgICAgPHAgY2xhc3M9XCJtYXAtYm94LWluZm9fX3RpdGxlXCI+Jyt0aXRsZSsnPC9wPlxcbiAgICAgICd9O3ZhciBkZXNjcmlwdGlvblRtcGw9ZnVuY3Rpb24gZGVzY3JpcHRpb25UbXBsKGRlc2NyaXB0aW9uKXtyZXR1cm4nXFxuICAgICAgICA8cCBjbGFzcz1cIm1hcC1ib3gtaW5mb19fZGVzY3JpcHRpb25cIj4nK2Rlc2NyaXB0aW9uKyc8L3A+XFxuICAgICAgJ307cmV0dXJuJ1xcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtYXAtYm94LWluZm9cIj5cXG4gICAgICAgICAgJyt0bXBsRm5JZihpbWdUbXBsLGltZ1NyYykrJ1xcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWJveC1pbmZvX19jb250ZW50XCI+XFxuICAgICAgICAgICAgJyt0bXBsRm5JZih0aXRsZVRtcGwsdGl0bGUpKydcXG4gICAgICAgICAgICAnK3RtcGxGbklmKGRlc2NyaXB0aW9uVG1wbCxkZXNjcmlwdGlvbikrJ1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgICAnfX0se2tleTondXBkYXRlU2V0dGluZ3MnLHZhbHVlOmZ1bmN0aW9uIHVwZGF0ZVNldHRpbmdzKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTsoMCxfYXNzaWduMi5kZWZhdWx0KSh0aGlzLnNldHRpbmdzLHNldHRpbmdzKTt2YXIgX3NldHRpbmdzPXRoaXMuc2V0dGluZ3MsdGl0bGU9X3NldHRpbmdzLnRpdGxlLGRlc2NyaXB0aW9uPV9zZXR0aW5ncy5kZXNjcmlwdGlvbixpbWdTcmM9X3NldHRpbmdzLmltZ1NyYyxzdHlsZVNjb3BlPV9zZXR0aW5ncy5zdHlsZVNjb3BlO3ZhciBjb250ZW50PXRoaXMuX2dlbmVyYXRlUG9wdXBDb250ZW50KHRpdGxlLGRlc2NyaXB0aW9uLGltZ1NyYyk7dGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO3RoaXMudXBkYXRlKCl9fV0pO3JldHVybiBJbmZvUG9wdXB9KEwuUG9wdXApOztQeE1hcC5JbmZvUG9wdXA9SW5mb1BvcHVwO3ZhciBEYXRhUG9wdXA9ZnVuY3Rpb24oX0wkUG9wdXAyKXsoMCxfaW5oZXJpdHMzLmRlZmF1bHQpKERhdGFQb3B1cCxfTCRQb3B1cDIpO2Z1bmN0aW9uIERhdGFQb3B1cCgpe3ZhciBfcmV0Mjt2YXIgc2V0dGluZ3M9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9OygwLF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcyxEYXRhUG9wdXApO3ZhciBfdGhpczM9KDAsX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsKERhdGFQb3B1cC5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRGF0YVBvcHVwKSkuY2FsbCh0aGlzKSk7X3RoaXMzLl9jcmVhdGVQb3B1cChzZXR0aW5ncyk7cmV0dXJuIF9yZXQyPV90aGlzMywoMCxfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMzLF9yZXQyKX0oMCxfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKERhdGFQb3B1cCxbe2tleTonb25BZGQnLHZhbHVlOmZ1bmN0aW9uIG9uQWRkKG1hcCl7aWYoKDAsX3R5cGVvZjMuZGVmYXVsdCkodGhpcy5zZXR0aW5ncy5kYXRhKSE9PSdvYmplY3QnfHwoMCxfa2V5czIuZGVmYXVsdCkodGhpcy5zZXR0aW5ncy5kYXRhKS5sZW5ndGg9PT0wKXtyZXR1cm59aWYobWFwLl9fYWRkU2hhZHlTY29wZSl7dmFyIHNyY1BhbmU9dGhpcy5nZXRQYW5lKCk7dmFyIHNyY0ZuPXNyY1BhbmUuYXBwZW5kQ2hpbGQ7c3JjUGFuZS5hcHBlbmRDaGlsZD1mdW5jdGlvbihlbCl7bWFwLl9fYWRkU2hhZHlTY29wZShlbCxmYWxzZSk7UG9seW1lci5kb20oc3JjUGFuZSkuYXBwZW5kQ2hpbGQoZWwpfX1MLlBvcHVwLnByb3RvdHlwZS5vbkFkZC5jYWxsKHRoaXMsbWFwKTtpZihtYXAuX19hZGRTaGFkeVNjb3BlKXtzcmNQYW5lLmFwcGVuZENoaWxkPXNyY0ZufX19LHtrZXk6J191cGRhdGVDb250ZW50Jyx2YWx1ZTpmdW5jdGlvbiBfdXBkYXRlQ29udGVudCgpe2lmKHRoaXMuX21hcCYmdGhpcy5fbWFwLl9fYWRkU2hhZHlTY29wZSYmdGhpcy5fY29udGVudC5sZW5ndGgpe3ZhciBzcmNOb2RlPXRoaXMuX2NvbnRlbnROb2RlO3ZhciBmYWtlTm9kZT17aW5uZXJIVE1MOm51bGx9O3RoaXMuX2NvbnRlbnROb2RlPWZha2VOb2RlfUwuRGl2T3ZlcmxheS5wcm90b3R5cGUuX3VwZGF0ZUNvbnRlbnQuY2FsbCh0aGlzKTtpZih0aGlzLl9tYXAmJnRoaXMuX21hcC5fX2FkZFNoYWR5U2NvcGUmJnRoaXMuX2NvbnRlbnQubGVuZ3RoKXtpZih0eXBlb2YgZmFrZU5vZGUuaW5uZXJIVE1MPT09J3N0cmluZycpe1BvbHltZXIuZG9tKHNyY05vZGUpLmlubmVySFRNTD1mYWtlTm9kZS5pbm5lckhUTUx9dGhpcy5fY29udGVudE5vZGU9c3JjTm9kZX19fSx7a2V5OidfY3JlYXRlUG9wdXAnLHZhbHVlOmZ1bmN0aW9uIF9jcmVhdGVQb3B1cCgpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307dmFyIGNvbmZpZz1hcmd1bWVudHMubGVuZ3RoPjEmJmFyZ3VtZW50c1sxXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMV06e307dGhpcy5zZXR0aW5ncz1zZXR0aW5nczt2YXIgdGl0bGU9c2V0dGluZ3MudGl0bGUsZGF0YT1zZXR0aW5ncy5kYXRhLHN0eWxlU2NvcGU9c2V0dGluZ3Muc3R5bGVTY29wZTt2YXIgY29udGVudD10aGlzLl9nZW5lcmF0ZVBvcHVwQ29udGVudCh0aXRsZSxkYXRhKTt2YXIgY2xhc3NOYW1lPSdtYXAtcG9wdXAtZGF0YSAnKyhzdHlsZVNjb3BlfHwnJyk7dmFyIG1heFdpZHRoPTQwMDt2YXIgbWluV2lkdGg9MzAwO3RoaXMuaW5pdGlhbGl6ZSh7Y2xhc3NOYW1lOmNsYXNzTmFtZSxtYXhXaWR0aDptYXhXaWR0aCxtaW5XaWR0aDptaW5XaWR0aH0pO3RoaXMuc2V0Q29udGVudChjb250ZW50KX19LHtrZXk6J19nZW5lcmF0ZVBvcHVwQ29udGVudCcsdmFsdWU6ZnVuY3Rpb24gX2dlbmVyYXRlUG9wdXBDb250ZW50KHRpdGxlLGRhdGEpe3ZhciBfdGhpczQ9dGhpczt2YXIgdG1wbEZuSWY9ZnVuY3Rpb24gdG1wbEZuSWYoZm4pe2Zvcih2YXIgX2xlbjI9YXJndW1lbnRzLmxlbmd0aCx2YWxzPUFycmF5KF9sZW4yPjE/X2xlbjItMTowKSxfa2V5Mj0xO19rZXkyPF9sZW4yO19rZXkyKyspe3ZhbHNbX2tleTItMV09YXJndW1lbnRzW19rZXkyXX1yZXR1cm4gdmFscy5sZW5ndGgmJnZhbHNbMF0hPT11bmRlZmluZWQ/Zm4uY2FsbC5hcHBseShmbixbX3RoaXM0XS5jb25jYXQodmFscykpOicnfTt2YXIgdGl0bGVUbXBsPWZ1bmN0aW9uIHRpdGxlVG1wbCh0aXRsZSl7cmV0dXJuJ1xcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1kYXRhLWJveF9faGVhZGVyXCI+XFxuICAgICAgICAgIDxoMyBjbGFzcz1cIm1hcC1kYXRhLWJveF9faGVhZGVyX190ZXh0XCI+Jyt0aXRsZSsnPC9oMz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICd9O3ZhciBkYXRhVG1wbD1mdW5jdGlvbiBkYXRhVG1wbChkYXRhKXt2YXIgZGF0YUxpc3Q9KDAsX2tleXMyLmRlZmF1bHQpKGRhdGEpLnJlZHVjZShmdW5jdGlvbihhY2N1bSxrZXkpe3JldHVybiBhY2N1bS5jb25jYXQoW2RhdGFJdGVtVG1wbChrZXksZGF0YVtrZXldKV0pfSxbXSkuam9pbignJyk7cmV0dXJuJ1xcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWRhdGEtYm94X190YWJsZVwiPlxcbiAgICAgICAgICAgICcrZGF0YUxpc3QrJ1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICd9O3ZhciBkYXRhSXRlbVRtcGw9ZnVuY3Rpb24gZGF0YUl0ZW1UbXBsKGxhYmVsLHZhbHVlKXtyZXR1cm4nXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWRhdGEtYm94X190YWJsZV9fY2VsbFwiPjxwPicrbGFiZWwrJzwvcD48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtZGF0YS1ib3hfX3RhYmxlX19jZWxsXCI+PHA+Jyt2YWx1ZSsnPC9wPjwvZGl2PlxcbiAgICAgICd9O3JldHVybidcXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFwLWJveC1kYXRhXCI+XFxuICAgICAgICAgICcrdG1wbEZuSWYodGl0bGVUbXBsLHRpdGxlKSsnXFxuICAgICAgICAgICcrdG1wbEZuSWYoZGF0YVRtcGwsZGF0YSkrJ1xcbiAgICAgICAgPC9zZWN0aW9uPlxcbiAgICAgICd9fSx7a2V5Oid1cGRhdGVTZXR0aW5ncycsdmFsdWU6ZnVuY3Rpb24gdXBkYXRlU2V0dGluZ3MoKXt2YXIgc2V0dGluZ3M9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9OygwLF9hc3NpZ24yLmRlZmF1bHQpKHRoaXMuc2V0dGluZ3Msc2V0dGluZ3MpO3ZhciBfc2V0dGluZ3MyPXRoaXMuc2V0dGluZ3MsdGl0bGU9X3NldHRpbmdzMi50aXRsZSxkYXRhPV9zZXR0aW5nczIuZGF0YTt2YXIgY29udGVudD10aGlzLl9nZW5lcmF0ZVBvcHVwQ29udGVudCh0aXRsZSxkYXRhKTtpZih0aGlzLmlzT3BlbigpJiYoMCxfa2V5czIuZGVmYXVsdCkoZGF0YSkubGVuZ3RoPT09MCl7dGhpcy5fY2xvc2UoKX10aGlzLnNldENvbnRlbnQoY29udGVudCk7dGhpcy51cGRhdGUoKX19XSk7cmV0dXJuIERhdGFQb3B1cH0oTC5Qb3B1cCk7O1B4TWFwLkRhdGFQb3B1cD1EYXRhUG9wdXB9KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiOjMsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiOjUsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIjo5LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCI6MTAsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIjoxNixcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiOjE3LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCI6MTksXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiOjIwLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiOjIyfV0sMTQzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX2dldEl0ZXJhdG9yMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7dmFyIF9nZXRJdGVyYXRvcjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTt2YXIgX21hcD1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwJyk7dmFyIF9tYXAyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5UcmFja01hcmtlcnNJbXBsPXtwcm9wZXJ0aWVzOntmaXRUb01hcmtlcnM6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonX2ZpdE1hcFRvTWFya2Vyc0lmU2V0J30sZml0VG9NYXJrZXJzUGFkZGluZzp7dHlwZTpOdW1iZXIsdmFsdWU6MC4xNX0sZml0VG9NYXJrZXJzWm9vbTp7dHlwZTpTdHJpbmcsdmFsdWU6J21heCd9fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXt0aGlzLmxpc3Rlbih0aGlzLCdweC1tYXAtbWFya2VyLWFkZGVkJywnX2hhbmRsZU1hcmtlckFkZGVkJyk7dGhpcy5saXN0ZW4odGhpcywncHgtbWFwLW1hcmtlci1ncm91cC1mZWF0dXJlcy1jaGFuZ2VkJywnX2hhbmRsZU1hcmtlckdyb3VwVXBkYXRlZCcpO3RoaXMuX2tub3duTWFya2Vycz10aGlzLl9rbm93bk1hcmtlcnN8fG5ldyBfbWFwMi5kZWZhdWx0O1B4TWFwQmVoYXZpb3IuTGVhZmxldFJvb3RJbXBsLmFkZEluc3QuY2FsbCh0aGlzKX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KHBhcmVudCl7dGhpcy51bmxpc3Rlbih0aGlzLCdweC1tYXAtbWFya2VyLWFkZGVkJywnX2hhbmRsZU1hcmtlckFkZGVkJyk7dGhpcy51bmxpc3Rlbih0aGlzLCdweC1tYXAtbWFya2VyLWdyb3VwLWZlYXR1cmVzLWNoYW5nZWQnLCdfaGFuZGxlTWFya2VyR3JvdXBVcGRhdGVkJyk7aWYodGhpcy5fa25vd25NYXJrZXJzJiZ0aGlzLl9rbm93bk1hcmtlcnMgaW5zdGFuY2VvZiBfbWFwMi5kZWZhdWx0KXt0aGlzLl9rbm93bk1hcmtlcnMuY2xlYXIoKX10aGlzLl9rbm93bk1hcmtlcnM9bnVsbDtQeE1hcEJlaGF2aW9yLkxlYWZsZXRSb290SW1wbC5yZW1vdmVJbnN0LmNhbGwodGhpcyl9LF9oYW5kbGVNYXJrZXJBZGRlZDpmdW5jdGlvbiBfaGFuZGxlTWFya2VyQWRkZWQoZXZ0KXtpZighdGhpcy5fa25vd25NYXJrZXJzKXJldHVybjt2YXIgbG9jYWxFdnQ9UG9seW1lci5kb20oZXZ0KTtpZihsb2NhbEV2dC5yb290VGFyZ2V0JiZsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0JiZsb2NhbEV2dC5ldmVudC5kZXRhaWwubGF0TG5nKXt0aGlzLl9rbm93bk1hcmtlcnMuc2V0KGxvY2FsRXZ0LnJvb3RUYXJnZXQuZWxlbWVudEluc3QsbG9jYWxFdnQuZXZlbnQuZGV0YWlsLmxhdExuZyk7dGhpcy5saXN0ZW4obG9jYWxFdnQucm9vdFRhcmdldCwncHgtbWFwLW1hcmtlci1yZW1vdmVkJywnX2hhbmRsZU1hcmtlclJlbW92ZWQnKTt0aGlzLl9maXRNYXBUb01hcmtlcnNJZlNldCgpfX0sX2hhbmRsZU1hcmtlclJlbW92ZWQ6ZnVuY3Rpb24gX2hhbmRsZU1hcmtlclJlbW92ZWQoZXZ0KXtpZighdGhpcy5fa25vd25NYXJrZXJzKXJldHVybjt2YXIgbG9jYWxFdnQ9UG9seW1lci5kb20oZXZ0KTt2YXIga25vd25NYXJrZXI9dGhpcy5fa25vd25NYXJrZXJzLmhhcyhsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0fHxudWxsKTtpZihrbm93bk1hcmtlcil7dGhpcy51bmxpc3Rlbihsb2NhbEV2dC5yb290VGFyZ2V0LCdweC1tYXAtbWFya2VyLXJlbW92ZWQnLCdfaGFuZGxlTWFya2VyUmVtb3ZlZCcpO3RoaXMuX2tub3duTWFya2Vycy5kZWxldGUobG9jYWxFdnQucm9vdFRhcmdldC5lbGVtZW50SW5zdCl9fSxfaGFuZGxlTWFya2VyR3JvdXBVcGRhdGVkOmZ1bmN0aW9uIF9oYW5kbGVNYXJrZXJHcm91cFVwZGF0ZWQoZXZ0KXtpZighdGhpcy5fa25vd25NYXJrZXJzKXJldHVybjt2YXIgbG9jYWxFdnQ9UG9seW1lci5kb20oZXZ0KTt2YXIga25vd25NYXJrZXI9dGhpcy5fa25vd25NYXJrZXJzLmhhcyhsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0fHxudWxsKTtpZihsb2NhbEV2dC5yb290VGFyZ2V0JiZsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0KXtpZigha25vd25NYXJrZXIpe3RoaXMubGlzdGVuKGxvY2FsRXZ0LnJvb3RUYXJnZXQsJ3B4LW1hcC1tYXJrZXItZ3JvdXAtcmVtb3ZlZCcsJ19oYW5kbGVNYXJrZXJHcm91cFJlbW92ZWQnKX10aGlzLl9rbm93bk1hcmtlcnMuc2V0KGxvY2FsRXZ0LnJvb3RUYXJnZXQuZWxlbWVudEluc3QsbG9jYWxFdnQuZXZlbnQuZGV0YWlsLmJvdW5kcyk7dGhpcy5fZml0TWFwVG9NYXJrZXJzSWZTZXQoKX19LF9oYW5kbGVNYXJrZXJHcm91cFJlbW92ZWQ6ZnVuY3Rpb24gX2hhbmRsZU1hcmtlckdyb3VwUmVtb3ZlZChldnQpe2lmKCF0aGlzLl9rbm93bk1hcmtlcnMpcmV0dXJuO3ZhciBsb2NhbEV2dD1Qb2x5bWVyLmRvbShldnQpO3ZhciBrbm93bk1hcmtlcj10aGlzLl9rbm93bk1hcmtlcnMuaGFzKGxvY2FsRXZ0LnJvb3RUYXJnZXQuZWxlbWVudEluc3R8fG51bGwpO2lmKGtub3duTWFya2VyKXt0aGlzLnVubGlzdGVuKGxvY2FsRXZ0LnJvb3RUYXJnZXQsJ3B4LW1hcC1tYXJrZXItZ3JvdXAtcmVtb3ZlZCcsJ19oYW5kbGVNYXJrZXJHcm91cFJlbW92ZWQnKTt0aGlzLl9rbm93bk1hcmtlcnMuZGVsZXRlKGxvY2FsRXZ0LnJvb3RUYXJnZXQuZWxlbWVudEluc3QpfX0sX2ZpdE1hcFRvTWFya2VyczpmdW5jdGlvbiBfZml0TWFwVG9NYXJrZXJzKCl7dGhpcy5kZWJvdW5jZSgnZml0LW1hcC10by1ib3VuZHMnLGZ1bmN0aW9uKCl7aWYoIXRoaXMuX2tub3duTWFya2Vyc3x8IXRoaXMuX2tub3duTWFya2Vycy5zaXplKXJldHVybjt2YXIgYm91bmRzPXRoaXMuX21hcmtlcnNUb0JvdW5kc1dpdGhQYWRkaW5nKHRoaXMuX2tub3duTWFya2Vycyx0aGlzLmZpdFRvTWFya2Vyc1BhZGRpbmcpO2lmKGJvdW5kcyYmYm91bmRzLmlzVmFsaWQoKSl7dmFyIGxhdExuZz1ib3VuZHMuZ2V0Q2VudGVyKCk7dmFyIHpvb209dGhpcy5fZ2V0Wm9vbUxldmVsRm9yRml0KGJvdW5kcyx0aGlzLmZpdFRvTWFya2Vyc1pvb20sdGhpcy5lbGVtZW50SW5zdCk7dGhpcy5lbGVtZW50SW5zdC5zZXRWaWV3KGxhdExuZyx6b29tKX19LDEwKX0sX21hcmtlcnNUb0JvdW5kc1dpdGhQYWRkaW5nOmZ1bmN0aW9uIF9tYXJrZXJzVG9Cb3VuZHNXaXRoUGFkZGluZyhtYXJrZXJzTWFwLHBhZGRpbmcpe2lmKCFtYXJrZXJzTWFwfHwhbWFya2Vyc01hcC5zaXplKXJldHVybjt2YXIgYm91bmRzPUwubGF0TG5nQm91bmRzKCk7dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb249dHJ1ZTt2YXIgX2RpZEl0ZXJhdG9yRXJyb3I9ZmFsc2U7dmFyIF9pdGVyYXRvckVycm9yPXVuZGVmaW5lZDt0cnl7Zm9yKHZhciBfaXRlcmF0b3I9KDAsX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShtYXJrZXJzTWFwLnZhbHVlcygpKSxfc3RlcDshKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb249KF9zdGVwPV9pdGVyYXRvci5uZXh0KCkpLmRvbmUpO19pdGVyYXRvck5vcm1hbENvbXBsZXRpb249dHJ1ZSl7dmFyIHZhbHVlPV9zdGVwLnZhbHVlO2lmKHZhbHVlIGluc3RhbmNlb2YgTC5MYXRMbmd8fHZhbHVlIGluc3RhbmNlb2YgTC5MYXRMbmdCb3VuZHMpe2JvdW5kcy5leHRlbmQodmFsdWUpfX19Y2F0Y2goZXJyKXtfZGlkSXRlcmF0b3JFcnJvcj10cnVlO19pdGVyYXRvckVycm9yPWVycn1maW5hbGx5e3RyeXtpZighX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiYmX2l0ZXJhdG9yLnJldHVybil7X2l0ZXJhdG9yLnJldHVybigpfX1maW5hbGx5e2lmKF9kaWRJdGVyYXRvckVycm9yKXt0aHJvdyBfaXRlcmF0b3JFcnJvcn19fWlmKGJvdW5kcy5pc1ZhbGlkKCkmJnR5cGVvZiBwYWRkaW5nPT09J251bWJlcicpe2JvdW5kcz1ib3VuZHMucGFkKHBhZGRpbmcpfXJldHVybiBib3VuZHN9LF9nZXRab29tTGV2ZWxGb3JGaXQ6ZnVuY3Rpb24gX2dldFpvb21MZXZlbEZvckZpdChib3VuZHMsZml0U2V0dGluZyxtYXApe2lmKGZpdFNldHRpbmc9PT0nbWluJyl7dmFyIHpvb209bWFwLmdldE1pblpvb20oKXx8MDtyZXR1cm4gem9vbX1pZihmaXRTZXR0aW5nPT09J21heCcpe3ZhciBfem9vbT1tYXAuZ2V0Qm91bmRzWm9vbShib3VuZHMsdHJ1ZSktMTtyZXR1cm4gX3pvb219fSxfZml0TWFwVG9NYXJrZXJzSWZTZXQ6ZnVuY3Rpb24gX2ZpdE1hcFRvTWFya2Vyc0lmU2V0KCl7aWYoIXRoaXMuZWxlbWVudEluc3R8fCF0aGlzLmZpdFRvTWFya2VycylyZXR1cm47dGhpcy5fZml0TWFwVG9NYXJrZXJzKCl9LGZpdE1hcFRvTWFya2VyczpmdW5jdGlvbiBmaXRNYXBUb01hcmtlcnMoKXtpZighdGhpcy5lbGVtZW50SW5zdHx8IXRoaXMuX2tub3duTWFya2Vyc3x8IXRoaXMuX2tub3duTWFya2Vycy5zaXplKXtyZXR1cm4gZmFsc2V9dGhpcy5fZml0TWFwVG9NYXJrZXJzKCk7cmV0dXJuIHRydWV9fTtQeE1hcEJlaGF2aW9yLkxlYWZsZXRSb290SW1wbD17cHJvcGVydGllczp7Y3JzOnt0eXBlOk9iamVjdH0sbGF0Ont0eXBlOk51bWJlcix2YWx1ZTozNy43NjcyMzc1LG5vdGlmeTp0cnVlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbG5nOnt0eXBlOk51bWJlcix2YWx1ZTotMTIxLjk1ODQxMzEsbm90aWZ5OnRydWUsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSx6b29tOnt0eXBlOk51bWJlcix2YWx1ZToxMCxub3RpZnk6dHJ1ZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LG1heFpvb206e3R5cGU6TnVtYmVyLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbWluWm9vbTp7dHlwZTpOdW1iZXIsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxtYXhCb3VuZHM6e3R5cGU6QXJyYXksb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxkaXNhYmxlRHJhZ2dpbmc6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGRpc2FibGVTY3JvbGxab29tOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxkaXNhYmxlVG91Y2hab29tOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxkaXNhYmxlQXR0cmlidXRpb246e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZX0sYXR0cmlidXRpb25QcmVmaXg6e3R5cGU6U3RyaW5nLHZhbHVlOic8YSBocmVmPVwiaHR0cDovL2xlYWZsZXRqcy5jb21cIiB0aXRsZT1cIkEgSlMgbGlicmFyeSBmb3IgaW50ZXJhY3RpdmUgbWFwc1wiPkxlYWZsZXQ8L2E+JyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGZsZXhUb1NpemU6e3R5cGU6Qm9vbGVhbixyZWZsZWN0VG9BdHRyaWJ1dGU6dHJ1ZSx2YWx1ZTpmYWxzZX19LGF0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5saXN0ZW4odGhpcywncHgtbWFwLWVsZW1lbnQtcmVhZHktdG8tYWRkJywnc2hvdWxkQWRkSW5zdCcpO2lmKHRoaXMuY2FuQWRkSW5zdCgpKXt0aGlzLmZpcmUoJ3B4LW1hcC1lbGVtZW50LXJlYWR5LXRvLWFkZCcpfX0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLnVubGlzdGVuKHRoaXMsJ3B4LW1hcC1lbGVtZW50LXJlYWR5LXRvLWFkZCcsJ3Nob3VsZEFkZEluc3QnKTt0aGlzLnNob3VsZFJlbW92ZUluc3QoKTt0aGlzLnJlbW92ZUluc3QoKX0sc2hvdWxkQWRkSW5zdDpmdW5jdGlvbiBzaG91bGRBZGRJbnN0KGV2dCl7aWYoUG9seW1lci5kb20oZXZ0KS5yb290VGFyZ2V0IT09dGhpcylyZXR1cm47UHhNYXBCZWhhdmlvci5FbGVtZW50SW1wbC5zaG91bGRBZGRJbnN0LmNhbGwodGhpcyk7dGhpcy5hZGRJbnN0KCl9LGNhbkFkZEluc3Q6ZnVuY3Rpb24gY2FuQWRkSW5zdCgpe2lmKHR5cGVvZiB0aGlzLnpvb20hPT0ndW5kZWZpbmVkJyYmdGhpcy5fY2FuQmVOdW0odGhpcy56b29tKSl7cmV0dXJuIHRoaXMubGF0TG5nSXNWYWxpZCh0aGlzLmxhdCx0aGlzLmxuZyx0cnVlKX19LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXt2YXIgbWFwRWw9UG9seW1lci5kb20odGhpcy5yb290KS5xdWVyeVNlbGVjdG9yKCcjbWFwJyk7dmFyIG1hcEluc3Q9TC5tYXAobWFwRWwsb3B0aW9ucyk7bWFwSW5zdC5hdHRyaWJ1dGlvbkNvbnRyb2wuc2V0UHJlZml4KG9wdGlvbnMuYXR0cmlidXRpb25QcmVmaXgpO2lmKHRoaXMuaXNTaGFkeVNjb3BlZCgpKXttYXBJbnN0Ll9fYWRkU2hhZHlTY29wZT10aGlzLnNjb3BlU3VidHJlZS5iaW5kKHRoaXMpfXJldHVybiBtYXBJbnN0fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QoKXtpZih0aGlzLmlzU2hhZHlTY29wZWQoKSl7dGhpcy5zY29wZVN1YnRyZWUodGhpcy4kLm1hcCx0cnVlKX12YXIgbWFwTW92ZUZuPXRoaXMuX2hhbmRsZU1hcE1vdmUuYmluZCh0aGlzKTt2YXIgem9vbVN0YXJ0Rm49dGhpcy5faGFuZGxlWm9vbVN0YXJ0LmJpbmQodGhpcyk7dmFyIHpvb21FbmRGbj10aGlzLl9oYW5kbGVab29tRW5kLmJpbmQodGhpcyk7dGhpcy5iaW5kRXZlbnRzKHsnbW92ZWVuZCc6bWFwTW92ZUZuLCd6b29tc3RhcnQnOnpvb21TdGFydEZuLCd6b29tZW5kJzp6b29tRW5kRm59KX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KCl7aWYodGhpcy5pc1NoYWR5U2NvcGVkKCkpe3RoaXMuc2NvcGVTdWJ0cmVlKHRoaXMuJC5tYXAsZmFsc2UpfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt2YXIgb3B0aW9ucz17fTtvcHRpb25zLnpvb21Db250cm9sPWZhbHNlO29wdGlvbnMuY3JzPXRoaXMuY3JzfHxMLkNSUy5FUFNHMzg1NztvcHRpb25zLmNlbnRlcj1bdGhpcy5sYXQsdGhpcy5sbmddO29wdGlvbnMuem9vbT10aGlzLnpvb207b3B0aW9ucy5taW5ab29tPXRoaXMubWluWm9vbXx8MDtvcHRpb25zLm1heFpvb209dGhpcy5tYXhab29tfHwxODtvcHRpb25zLm1heEJvdW5kcz10aGlzLm1heEJvdW5kc3x8dW5kZWZpbmVkO29wdGlvbnMuZHJhZ2dpbmc9IXRoaXMuZGlzYWJsZURyYWdnaW5nO29wdGlvbnMuc2Nyb2xsV2hlZWxab29tPSF0aGlzLmRpc2FibGVTY3JvbGxab29tO29wdGlvbnMudG91Y2hab29tPSF0aGlzLmRpc2FibGVUb3VjaFpvb207b3B0aW9ucy5hdHRyaWJ1dGlvbkNvbnRyb2w9IXRoaXMuZGlzYWJsZUF0dHJpYnV0aW9uO29wdGlvbnMuYXR0cmlidXRpb25QcmVmaXg9dGhpcy5hdHRyaWJ1dGlvblByZWZpeDtyZXR1cm4gb3B0aW9uc30sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXtpZih0aGlzLmxhdExuZ0lzVmFsaWQobmV4dE9wdGlvbnMuY2VudGVyWzBdLG5leHRPcHRpb25zLmNlbnRlclsxXSkmJihsYXN0T3B0aW9ucy5jZW50ZXJbMF0hPT1uZXh0T3B0aW9ucy5jZW50ZXJbMF18fGxhc3RPcHRpb25zLmNlbnRlclsxXSE9PW5leHRPcHRpb25zLmNlbnRlclsxXXx8bGFzdE9wdGlvbnMuem9vbSE9PW5leHRPcHRpb25zLnpvb20pKXt0aGlzLl91cGRhdGVNYXBWaWV3KCl9aWYobGFzdE9wdGlvbnMubWF4Wm9vbSE9PW5leHRPcHRpb25zLm1heFpvb20mJiFpc05hTihuZXh0T3B0aW9ucy5tYXhab29tKSl7dGhpcy5zZXRNYXhab29tKG5leHRPcHRpb25zLm1heFpvb20pfWlmKGxhc3RPcHRpb25zLm1pblpvb20hPT1uZXh0T3B0aW9ucy5taW5ab29tJiYhaXNOYU4obmV4dE9wdGlvbnMubWluWm9vbSkpe3RoaXMuc2V0TWluWm9vbShuZXh0T3B0aW9ucy5taW5ab29tKX1pZihsYXN0T3B0aW9ucy5tYXhCb3VuZHMhPT1uZXh0T3B0aW9ucy5tYXhCb3VuZHMmJiFpc05hTihuZXh0T3B0aW9ucy5tYXhCb3VuZHMpKXt0aGlzLnNldE1heEJvdW5kcyhuZXh0T3B0aW9ucy5tYXhCb3VuZHMpfWlmKCFsYXN0T3B0aW9ucy5kcmFnZ2luZyYmbmV4dE9wdGlvbnMuZHJhZ2dpbmcpe3RoaXMuZWxlbWVudEluc3QuZHJhZ2dpbmcuZW5hYmxlKCl9aWYobGFzdE9wdGlvbnMuZHJhZ2dpbmcmJiFuZXh0T3B0aW9ucy5kcmFnZ2luZyl7dGhpcy5lbGVtZW50SW5zdC5kcmFnZ2luZy5kaXNhYmxlKCl9aWYoIWxhc3RPcHRpb25zLnNjcm9sbFdoZWVsWm9vbSYmbmV4dE9wdGlvbnMuc2Nyb2xsV2hlZWxab29tKXt0aGlzLmVsZW1lbnRJbnN0LnNjcm9sbFdoZWVsWm9vbS5lbmFibGUoKX1pZihsYXN0T3B0aW9ucy5zY3JvbGxXaGVlbFpvb20mJiFuZXh0T3B0aW9ucy5zY3JvbGxXaGVlbFpvb20pe3RoaXMuZWxlbWVudEluc3Quc2Nyb2xsV2hlZWxab29tLmRpc2FibGUoKX1pZighbGFzdE9wdGlvbnMudG91Y2hab29tJiZuZXh0T3B0aW9ucy50b3VjaFpvb20pe3RoaXMuZWxlbWVudEluc3QudG91Y2hab29tLmVuYWJsZSgpfWlmKGxhc3RPcHRpb25zLnRvdWNoWm9vbSYmIW5leHRPcHRpb25zLnRvdWNoWm9vbSl7dGhpcy5lbGVtZW50SW5zdC50b3VjaFpvb20uZGlzYWJsZSgpfWlmKGxhc3RPcHRpb25zLmF0dHJpYnV0aW9uUHJlZml4IT09bmV4dE9wdGlvbnMuYXR0cmlidXRpb25QcmVmaXgpe3RoaXMuZWxlbWVudEluc3QuYXR0cmlidXRpb25Db250cm9sLnNldFByZWZpeChuZXh0T3B0aW9ucy5hdHRyaWJ1dGlvblByZWZpeCl9fSxpbnZhbGlkYXRlU2l6ZTpmdW5jdGlvbiBpbnZhbGlkYXRlU2l6ZSgpe2lmKCF0aGlzLmVsZW1lbnRJbnN0KXJldHVybjt0aGlzLmVsZW1lbnRJbnN0LmludmFsaWRhdGVTaXplKCl9LF91cGRhdGVNYXBWaWV3OmZ1bmN0aW9uIF91cGRhdGVNYXBWaWV3KCl7aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3RoaXMuZGVib3VuY2UoJ3VwZGF0ZS1tYXAtdmlldycsZnVuY3Rpb24oKXt2YXIgX2VsZW1lbnRJbnN0JGdldENlbnRlPXRoaXMuZWxlbWVudEluc3QuZ2V0Q2VudGVyKCksbGF0PV9lbGVtZW50SW5zdCRnZXRDZW50ZS5sYXQsbG5nPV9lbGVtZW50SW5zdCRnZXRDZW50ZS5sbmc7dmFyIHpvb209dGhpcy5lbGVtZW50SW5zdC5nZXRab29tKCk7aWYodGhpcy5sYXQhPT1sYXR8fHRoaXMubG5nIT09bG5nfHx0aGlzLnpvb20hPT16b29tKXt0aGlzLmVsZW1lbnRJbnN0LnNldFZpZXcoW3RoaXMubGF0LHRoaXMubG5nXSx0aGlzLnpvb20pfX0pfSxfY2FuQmVOdW06ZnVuY3Rpb24gX2NhbkJlTnVtKHZhbCl7cmV0dXJuIWlzTmFOKHZhbCkmJnZhbCE9PScnfSxsYXRMbmdJc1ZhbGlkOmZ1bmN0aW9uIGxhdExuZ0lzVmFsaWQobGF0LGxuZyxoaWRlRXJyb3Ipe3ZhciBpc1ZhbGlkPXR5cGVvZiBsYXQhPT0ndW5kZWZpbmVkJyYmdGhpcy5fY2FuQmVOdW0obGF0KSYmdHlwZW9mIGxuZyE9PSd1bmRlZmluZWQnJiZ0aGlzLl9jYW5CZU51bShsbmcpO2lmKGlzVmFsaWQpcmV0dXJuIHRydWU7aWYoIWhpZGVFcnJvcil7Y29uc29sZS5sb2coJ1BYLU1BUCBDT05GSUdVUkFUSU9OIEVSUk9SOlxcbiAgICAgICAgICBZb3UgZW50ZXJlZCBhbiBpbnZhbGlkIGBsYXRgIG9yIGBsbmdgIGF0dHJpYnV0ZSBmb3IgJyt0aGlzLmlzKycuIFlvdSBtdXN0IHBhc3MgYSB2YWxpZCBudW1iZXIuJyl9cmV0dXJuIGZhbHNlfSxfaGFuZGxlTWFwTW92ZTpmdW5jdGlvbiBfaGFuZGxlTWFwTW92ZSgpe2lmKHRoaXMuX19pc1pvb21pbmcpe3RoaXMuX19vblpvb21FbmQ9dGhpcy5faGFuZGxlTWFwTW92ZS5iaW5kKHRoaXMpO3JldHVybn10aGlzLmRlYm91bmNlKCdoYW5kbGUtbWFwLW1vdmUnLGZ1bmN0aW9uKCl7dmFyIGxhdExuZz10aGlzLmVsZW1lbnRJbnN0LmdldENlbnRlcigpO3ZhciB6b29tPXRoaXMuZWxlbWVudEluc3QuZ2V0Wm9vbSgpO3ZhciBib3VuZHM9dGhpcy5lbGVtZW50SW5zdC5nZXRCb3VuZHMoKTtpZih0aGlzLmxhdCE9PWxhdExuZy5sYXR8fHRoaXMubG5nIT09bGF0TG5nLmxuZyl7dGhpcy5zZXQoJ2xhdCcsbGF0TG5nLmxhdCk7dGhpcy5zZXQoJ2xuZycsbGF0TG5nLmxuZyl9aWYodGhpcy56b29tIT09em9vbSl7dGhpcy5zZXQoJ3pvb20nLHpvb20pfXRoaXMuZmlyZSgncHgtbWFwLW1vdmVkJyx7bGF0OmxhdExuZy5sYXQsbG5nOmxhdExuZy5sbmcsem9vbTp6b29tLGJvdW5kczpib3VuZHN9KX0pfSxfaGFuZGxlWm9vbVN0YXJ0OmZ1bmN0aW9uIF9oYW5kbGVab29tU3RhcnQoKXt0aGlzLl9faXNab29taW5nPXRydWV9LF9oYW5kbGVab29tRW5kOmZ1bmN0aW9uIF9oYW5kbGVab29tRW5kKCl7dGhpcy5fX2lzWm9vbWluZz1mYWxzZTtpZih0eXBlb2YgdGhpcy5fX29uWm9vbUVuZD09PSdmdW5jdGlvbicpe3RoaXMuX19vblpvb21FbmQoKTt0aGlzLl9fb25ab29tRW5kPW51bGx9fSxnZXRWaXNpYmxlTWFya2VyczpmdW5jdGlvbiBnZXRWaXNpYmxlTWFya2Vycygpe3ZhciBtYXBCb3VuZHM9dGhpcy5lbGVtZW50SW5zdC5nZXRCb3VuZHMoKTt2YXIgbWFya2Vycz1bXTt0aGlzLmVsZW1lbnRJbnN0LmVhY2hMYXllcihmdW5jdGlvbihsYXllcil7aWYobGF5ZXIuaXNNYXJrZXImJmxheWVyLmdldExhdExuZyl7aWYobWFwQm91bmRzLmNvbnRhaW5zKGxheWVyLmdldExhdExuZygpKSYmbWFya2Vycy5pbmRleE9mKGxheWVyKT09PS0xKXttYXJrZXJzLnB1c2gobGF5ZXIpfX1pZihsYXllci5fbWFya2VyQ2x1c3Rlcil7bGF5ZXIuZWFjaExheWVyKGZ1bmN0aW9uKG1hcmtlcil7dmFyIHBhcmVudENsdXN0ZXI9bGF5ZXIuZ2V0VmlzaWJsZVBhcmVudChtYXJrZXIpO2lmKHBhcmVudENsdXN0ZXImJm1hcEJvdW5kcy5jb250YWlucyhwYXJlbnRDbHVzdGVyLmdldExhdExuZygpKSYmbWFya2VyJiZtYXJrZXJzLmluZGV4T2YobWFya2VyKT09PS0xKXttYXJrZXJzLnB1c2gobWFya2VyKX19KX19KTtyZXR1cm4gbWFya2Vyc319O1B4TWFwQmVoYXZpb3IuTGVhZmxldFJvb3Q9W1B4TWFwQmVoYXZpb3IuRWxlbWVudCxQeE1hcEJlaGF2aW9yLlBhcmVudExheWVyLFB4TWFwQmVoYXZpb3IuTGVhZmxldFJvb3RJbXBsLFB4TWFwQmVoYXZpb3IuVHJhY2tNYXJrZXJzSW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIjoxLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcFwiOjR9XSwxNDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnOyhmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5UaWxlTGF5ZXJJbXBsPXtwcm9wZXJ0aWVzOnt1cmw6e3R5cGU6U3RyaW5nLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sZGVjb2RlVXJsOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHR5cGVvZiB0aGlzLnVybD09PSdzdHJpbmcnJiZ0aGlzLnVybC5sZW5ndGh9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXtyZXR1cm4gTC50aWxlTGF5ZXIob3B0aW9ucy51cmwpfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe2lmKGxhc3RPcHRpb25zLnVybCE9PW5leHRPcHRpb25zLnVybCl7dGhpcy5lbGVtZW50SW5zdC5zZXRVcmwobmV4dE9wdGlvbnMudXJsKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7cmV0dXJue3VybDp0aGlzLmRlY29kZVVybD9kZWNvZGVVUkkodGhpcy51cmwpOnRoaXMudXJsfX19O1B4TWFwQmVoYXZpb3IuVGlsZUxheWVyPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuVGlsZUxheWVySW1wbF19KSgpO1xuXG59LHt9XX0se30sWzEzNSwxMzksMTM0LDEzNiwxMzcsMTM4LDE0MCwxNDEsMTQyLDE0MywxNDRdKTtcbiJdLCJmaWxlIjoicHgtbWFwLWJ1bmRsZS5qcyJ9
