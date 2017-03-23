(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":22}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":23}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":24}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":25}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":26}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":27}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":28}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":29}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":30}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":31}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":32}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":33}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":34}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/weak-map"), __esModule: true };
},{"core-js/library/fn/weak-map":35}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],16:[function(require,module,exports){
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
},{"../core-js/object/define-property":6}],17:[function(require,module,exports){
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
},{"../core-js/object/get-own-property-descriptor":7,"../core-js/object/get-prototype-of":8}],18:[function(require,module,exports){
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
},{"../core-js/object/create":5,"../core-js/object/set-prototype-of":10,"../helpers/typeof":21}],19:[function(require,module,exports){
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
},{"../helpers/typeof":21}],20:[function(require,module,exports){
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
},{"../core-js/get-iterator":1,"../core-js/is-iterable":2}],21:[function(require,module,exports){
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
},{"../core-js/symbol":12,"../core-js/symbol/iterator":13}],22:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":111,"../modules/es6.string.iterator":123,"../modules/web.dom.iterable":129}],23:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":112,"../modules/es6.string.iterator":123,"../modules/web.dom.iterable":129}],24:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":51}],25:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":51,"../../modules/es6.object.assign":114}],26:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":51,"../../modules/es6.object.create":115}],27:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":51,"../../modules/es6.object.define-property":116}],28:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};
},{"../../modules/_core":51,"../../modules/es6.object.get-own-property-descriptor":117}],29:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":51,"../../modules/es6.object.get-prototype-of":118}],30:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":51,"../../modules/es6.object.keys":119}],31:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":51,"../../modules/es6.object.set-prototype-of":120}],32:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
module.exports = require('../modules/_core').Set;
},{"../modules/_core":51,"../modules/es6.object.to-string":121,"../modules/es6.set":122,"../modules/es6.string.iterator":123,"../modules/es7.set.to-json":126,"../modules/web.dom.iterable":129}],33:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":51,"../../modules/es6.object.to-string":121,"../../modules/es6.symbol":124,"../../modules/es7.symbol.async-iterator":127,"../../modules/es7.symbol.observable":128}],34:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":108,"../../modules/es6.string.iterator":123,"../../modules/web.dom.iterable":129}],35:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/web.dom.iterable');
require('../modules/es6.weak-map');
module.exports = require('../modules/_core').WeakMap;
},{"../modules/_core":51,"../modules/es6.object.to-string":121,"../modules/es6.weak-map":125,"../modules/web.dom.iterable":129}],36:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],37:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],38:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],39:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":69}],40:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":60}],41:[function(require,module,exports){
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
},{"./_to-index":100,"./_to-iobject":102,"./_to-length":103}],42:[function(require,module,exports){
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
},{"./_array-species-create":44,"./_ctx":52,"./_iobject":66,"./_to-length":103,"./_to-object":104}],43:[function(require,module,exports){
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
},{"./_is-array":68,"./_is-object":69,"./_wks":109}],44:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":43}],45:[function(require,module,exports){
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
},{"./_cof":46,"./_wks":109}],46:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],47:[function(require,module,exports){
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
},{"./_an-instance":38,"./_ctx":52,"./_defined":53,"./_descriptors":54,"./_for-of":60,"./_iter-define":72,"./_iter-step":73,"./_meta":77,"./_object-create":79,"./_object-dp":80,"./_redefine-all":92,"./_set-species":95}],48:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":40,"./_classof":45}],49:[function(require,module,exports){
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
},{"./_an-instance":38,"./_an-object":39,"./_array-methods":42,"./_for-of":60,"./_has":62,"./_is-object":69,"./_meta":77,"./_redefine-all":92}],50:[function(require,module,exports){
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
},{"./_an-instance":38,"./_array-methods":42,"./_descriptors":54,"./_export":58,"./_fails":59,"./_for-of":60,"./_global":61,"./_hide":63,"./_is-object":69,"./_meta":77,"./_object-dp":80,"./_redefine-all":92,"./_set-to-string-tag":96}],51:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],52:[function(require,module,exports){
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
},{"./_a-function":36}],53:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],54:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":59}],55:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":61,"./_is-object":69}],56:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],57:[function(require,module,exports){
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
},{"./_object-gops":85,"./_object-keys":88,"./_object-pie":89}],58:[function(require,module,exports){
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
},{"./_core":51,"./_ctx":52,"./_global":61,"./_hide":63}],59:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],60:[function(require,module,exports){
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
},{"./_an-object":39,"./_ctx":52,"./_is-array-iter":67,"./_iter-call":70,"./_to-length":103,"./core.get-iterator-method":110}],61:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],62:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],63:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":54,"./_object-dp":80,"./_property-desc":91}],64:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":61}],65:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":54,"./_dom-create":55,"./_fails":59}],66:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":46}],67:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":74,"./_wks":109}],68:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":46}],69:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],70:[function(require,module,exports){
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
},{"./_an-object":39}],71:[function(require,module,exports){
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
},{"./_hide":63,"./_object-create":79,"./_property-desc":91,"./_set-to-string-tag":96,"./_wks":109}],72:[function(require,module,exports){
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
},{"./_export":58,"./_has":62,"./_hide":63,"./_iter-create":71,"./_iterators":74,"./_library":76,"./_object-gpo":86,"./_redefine":93,"./_set-to-string-tag":96,"./_wks":109}],73:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],74:[function(require,module,exports){
module.exports = {};
},{}],75:[function(require,module,exports){
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
},{"./_object-keys":88,"./_to-iobject":102}],76:[function(require,module,exports){
module.exports = true;
},{}],77:[function(require,module,exports){
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
},{"./_fails":59,"./_has":62,"./_is-object":69,"./_object-dp":80,"./_uid":106}],78:[function(require,module,exports){
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
},{"./_fails":59,"./_iobject":66,"./_object-gops":85,"./_object-keys":88,"./_object-pie":89,"./_to-object":104}],79:[function(require,module,exports){
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

},{"./_an-object":39,"./_dom-create":55,"./_enum-bug-keys":56,"./_html":64,"./_object-dps":81,"./_shared-key":97}],80:[function(require,module,exports){
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
},{"./_an-object":39,"./_descriptors":54,"./_ie8-dom-define":65,"./_to-primitive":105}],81:[function(require,module,exports){
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
},{"./_an-object":39,"./_descriptors":54,"./_object-dp":80,"./_object-keys":88}],82:[function(require,module,exports){
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
},{"./_descriptors":54,"./_has":62,"./_ie8-dom-define":65,"./_object-pie":89,"./_property-desc":91,"./_to-iobject":102,"./_to-primitive":105}],83:[function(require,module,exports){
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

},{"./_object-gopn":84,"./_to-iobject":102}],84:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":56,"./_object-keys-internal":87}],85:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],86:[function(require,module,exports){
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
},{"./_has":62,"./_shared-key":97,"./_to-object":104}],87:[function(require,module,exports){
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
},{"./_array-includes":41,"./_has":62,"./_shared-key":97,"./_to-iobject":102}],88:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":56,"./_object-keys-internal":87}],89:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],90:[function(require,module,exports){
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
},{"./_core":51,"./_export":58,"./_fails":59}],91:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],92:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":63}],93:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":63}],94:[function(require,module,exports){
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
},{"./_an-object":39,"./_ctx":52,"./_is-object":69,"./_object-gopd":82}],95:[function(require,module,exports){
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
},{"./_core":51,"./_descriptors":54,"./_global":61,"./_object-dp":80,"./_wks":109}],96:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":62,"./_object-dp":80,"./_wks":109}],97:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":98,"./_uid":106}],98:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":61}],99:[function(require,module,exports){
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
},{"./_defined":53,"./_to-integer":101}],100:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":101}],101:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],102:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":53,"./_iobject":66}],103:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":101}],104:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":53}],105:[function(require,module,exports){
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
},{"./_is-object":69}],106:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],107:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":51,"./_global":61,"./_library":76,"./_object-dp":80,"./_wks-ext":108}],108:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":109}],109:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":61,"./_shared":98,"./_uid":106}],110:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":45,"./_core":51,"./_iterators":74,"./_wks":109}],111:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":39,"./_core":51,"./core.get-iterator-method":110}],112:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":45,"./_core":51,"./_iterators":74,"./_wks":109}],113:[function(require,module,exports){
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
},{"./_add-to-unscopables":37,"./_iter-define":72,"./_iter-step":73,"./_iterators":74,"./_to-iobject":102}],114:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":58,"./_object-assign":78}],115:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":58,"./_object-create":79}],116:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":54,"./_export":58,"./_object-dp":80}],117:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = require('./_to-iobject')
  , $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./_object-gopd":82,"./_object-sap":90,"./_to-iobject":102}],118:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":86,"./_object-sap":90,"./_to-object":104}],119:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":88,"./_object-sap":90,"./_to-object":104}],120:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":58,"./_set-proto":94}],121:[function(require,module,exports){

},{}],122:[function(require,module,exports){
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
},{"./_collection":50,"./_collection-strong":47}],123:[function(require,module,exports){
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
},{"./_iter-define":72,"./_string-at":99}],124:[function(require,module,exports){
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
},{"./_an-object":39,"./_descriptors":54,"./_enum-keys":57,"./_export":58,"./_fails":59,"./_global":61,"./_has":62,"./_hide":63,"./_is-array":68,"./_keyof":75,"./_library":76,"./_meta":77,"./_object-create":79,"./_object-dp":80,"./_object-gopd":82,"./_object-gopn":84,"./_object-gopn-ext":83,"./_object-gops":85,"./_object-keys":88,"./_object-pie":89,"./_property-desc":91,"./_redefine":93,"./_set-to-string-tag":96,"./_shared":98,"./_to-iobject":102,"./_to-primitive":105,"./_uid":106,"./_wks":109,"./_wks-define":107,"./_wks-ext":108}],125:[function(require,module,exports){
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
},{"./_array-methods":42,"./_collection":50,"./_collection-weak":49,"./_is-object":69,"./_meta":77,"./_object-assign":78,"./_redefine":93}],126:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Set', {toJSON: require('./_collection-to-json')('Set')});
},{"./_collection-to-json":48,"./_export":58}],127:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":107}],128:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":107}],129:[function(require,module,exports){
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
},{"./_global":61,"./_hide":63,"./_iterators":74,"./_wks":109,"./es6.array.iterator":113}],130:[function(require,module,exports){
'use strict';var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _get2=require('babel-runtime/helpers/get');var _get3=_interopRequireDefault(_get2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.ControlImpl={properties:{position:{type:String,value:'bottomright',observer:'shouldUpdateInst'}},addInst:function addInst(parent){this.elementInst.addTo(parent)},removeInst:function removeInst(parent){this.elementInst.remove()},getInstOptions:function getInstOptions(){return{position:this._getValidPosition()}},_getValidPosition:function _getValidPosition(){var positionIsValid=/^(topright|topleft|bottomright|bottomleft)$/.test(this.position);if(!positionIsValid){console.log('PX-MAP CONFIGURATION ERROR:\n          You entered an invalid `position` attribute \''+this.position+'\' for '+this.is+'.\n          Position must be a string with one of the following values:\n          - \'topright\'\n          - \'topleft\'\n          - \'bottomright\'\n          - \'bottomleft\'\n          Defaulting to \'bottomright\'.');return'bottomright'}return this.position}};PxMapBehavior.Control=[PxMapBehavior.Layer,PxMapBehavior.ControlImpl];PxMapBehavior.ZoomControlImpl={properties:{zoomInText:{type:String,value:'<i class="fa fa-plus"></i>'},zoomOutText:{type:String,value:'<i class="fa fa-minus"></i>'},language:{type:String,value:'en'},resources:{type:Object,value:function value(){return{'en':{'Zoom in':'Zoom in','Zoom out':'Zoom out'}}}}},createInst:function createInst(options){return new PxMap.ZoomControl(options)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.position!==nextOptions.position){this.elementInst.setPosition(nextOptions.position)}},getInstOptions:function getInstOptions(){var options=PxMapBehavior.ControlImpl.getInstOptions.call(this);options.position=this.position;options.zoomInText=this.zoomInText;options.zoomOutText=this.zoomOutText;if(typeof this.localize==='function'){options.zoomInTitle=this.localize('Zoom in');options.zoomOutTitle=this.localize('Zoom out')}return options}};PxMapBehavior.ZoomControl=[Polymer.AppLocalizeBehavior,PxMapBehavior.Control,PxMapBehavior.ZoomControlImpl];PxMapBehavior.ScaleControlImpl={properties:{imperialUnits:{type:Boolean,value:false,observer:'shouldUpdateInst'},metricUnits:{type:Boolean,value:false,observer:'shouldUpdateInst'},reverseColors:{type:Boolean,value:false,observer:'shouldUpdateInst'}},createInst:function createInst(options){return new PxMap.ScaleControl(options)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.position!==nextOptions.position){this.elementInst.setPosition(nextOptions.position)}if(lastOptions.reverseColors!==nextOptions.reverseColors){this.elementInst.setReverseColors(nextOptions.reverseColors)}if(lastOptions.metric!==nextOptions.metric){this.elementInst.showMetric(nextOptions.metric)}if(lastOptions.imperial!==nextOptions.imperial){this.elementInst.showImperial(nextOptions.imperial)}},getInstOptions:function getInstOptions(){var options=PxMapBehavior.ControlImpl.getInstOptions.call(this);options.imperial=this.imperialUnits;options.metric=this.metricUnits;options.reverseColors=this.reverseColors;return options}};PxMapBehavior.ScaleControl=[PxMapBehavior.Control,PxMapBehavior.ScaleControlImpl];PxMapBehavior.LocateControlImpl={properties:{locateText:{type:String,value:'<i class="fa fa-crosshairs"></i>',observer:'shouldUpdateInst'},locateTitle:{type:String,value:'Zoom to your location',observer:'shouldUpdateInst'},moveToLocation:{type:Boolean,value:false},moveMaxZoom:{type:Number},lastFoundLocation:{type:Object,value:function value(){return{}},notify:true}},addInst:function addInst(parent){PxMapBehavior.ControlImpl.addInst.call(this,parent);var foundFn=this._handleLocationFound.bind(this);var errorFn=this._handleLocationError.bind(this);var tapFn=this._handleLocationTap.bind(this);this.bindEvents({'locationfound':foundFn,'locationerror':errorFn,'controlclick':tapFn})},removeInst:function removeInst(parent){PxMapBehavior.ControlImpl.removeInst.call(this,parent)},createInst:function createInst(options){return new PxMap.LocateControl(options)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.position!==nextOptions.position){this.elementInst.setPosition(nextOptions.position)}},getInstOptions:function getInstOptions(){return{position:this.position,locateText:this.locateText,locateTitle:this.locateTitle,moveToLocation:this.moveToLocation,moveMaxZoom:this.moveMaxZoom}},_handleLocationFound:function _handleLocationFound(evt){if(!evt)return;var detail={lat:evt.latitude||null,lng:evt.longitude||null,timestamp:evt.timestamp||null,bounds:evt.bounds||null};detail.accuracy=evt.bounds.getCenter()&&evt.bounds.getNorthWest()?evt.bounds.getCenter().distanceTo(evt.bounds.getNorthEast()):null;this.fire('px-map-control-locate-success',detail);this.set('lastFoundLocation',detail);this.notifyPath('lastFoundLocation.*')},_handleLocationError:function _handleLocationError(evt){if(!evt)return;var detail={message:evt.message||null};this.fire('px-map-control-locate-error',detail)},_handleLocationTap:function _handleLocationTap(evt){if(!evt||evt.action!=='locate')return;this.fire('px-map-locate-button-tap')}};PxMapBehavior.LocateControl=[PxMapBehavior.Control,PxMapBehavior.LocateControlImpl];window.PxMap=window.PxMap||{};var ScaleControl=function(_L$Control$Scale){(0,_inherits3.default)(ScaleControl,_L$Control$Scale);function ScaleControl(){(0,_classCallCheck3.default)(this,ScaleControl);return(0,_possibleConstructorReturn3.default)(this,(ScaleControl.__proto__||(0,_getPrototypeOf2.default)(ScaleControl)).apply(this,arguments))}(0,_createClass3.default)(ScaleControl,[{key:'initialize',value:function initialize(options){(0,_get3.default)(ScaleControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ScaleControl.prototype),'initialize',this).call(this,options)}},{key:'onAdd',value:function onAdd(map){this.__scaleContainer=(0,_get3.default)(ScaleControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ScaleControl.prototype),'onAdd',this).call(this,map);if(this.options.reverseColors===true){L.DomUtil.addClass(this.__scaleContainer,'leaflet-control-scale--reverse')}return this.__scaleContainer}},{key:'onRemove',value:function onRemove(map){(0,_get3.default)(ScaleControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ScaleControl.prototype),'onRemove',this).call(this,map);this.__scaleContainer=null}},{key:'setReverseColors',value:function setReverseColors(shouldReverse){if(!this.__scaleContainer)return;if(shouldReverse&&!this.options.reverseColors){this.options.reverseColors=true;L.DomUtil.addClass(this.__scaleContainer,'leaflet-control-scale--reverse')}if(!shouldReverse&&this.options.reverseColors){this.options.reverseColors=false;L.DomUtil.removeClass(this.__scaleContainer,'leaflet-control-scale--reverse')}}},{key:'showImperial',value:function showImperial(shouldShowImperial){if(!this.__scaleContainer)return;if(shouldShowImperial&&!this.options.imperial&&!this._iScale){this._iScale=L.DomUtil.create('div','leaflet-control-scale-line',this.__scaleContainer);this.options.imperial=true}if(!shouldShowImperial&&this.options.imperial&&this._iScale){this.options.imperial=false;L.DomUtil.remove(this._iScale);this._iScale=null}this._update()}},{key:'showMetric',value:function showMetric(shouldShowMetric){if(!this.__scaleContainer)return;if(shouldShowMetric&&!this.options.metric&&!this._mScale){this._mScale=L.DomUtil.create('div','leaflet-control-scale-line',this.__scaleContainer);this.options.metric=true}if(!shouldShowMetric&&this.options.metric&&this._mScale){this.options.metric=false;L.DomUtil.remove(this._mScale);this._mScale=null}this._update()}}]);return ScaleControl}(L.Control.Scale);;PxMap.ScaleControl=ScaleControl;var ZoomControl=function(_L$Control$Zoom){(0,_inherits3.default)(ZoomControl,_L$Control$Zoom);function ZoomControl(){(0,_classCallCheck3.default)(this,ZoomControl);return(0,_possibleConstructorReturn3.default)(this,(ZoomControl.__proto__||(0,_getPrototypeOf2.default)(ZoomControl)).apply(this,arguments))}(0,_createClass3.default)(ZoomControl,[{key:'_zoomIn',value:function _zoomIn(e){(0,_get3.default)(ZoomControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ZoomControl.prototype),'_zoomIn',this).call(this,e);if(this._map&&this._map.fire){this._map.fire('controlclick',{src:this,action:'zoomin'})}}},{key:'_zoomOut',value:function _zoomOut(e){(0,_get3.default)(ZoomControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ZoomControl.prototype),'_zoomOut',this).call(this,e);if(this._map&&this._map.fire){this._map.fire('controlclick',{src:this,action:'zoomout'})}}},{key:'_fireZoomClickEvt',value:function _fireZoomClickEvt(evt){debugger}}]);return ZoomControl}(L.Control.Zoom);;PxMap.ZoomControl=ZoomControl;var LocateControl=function(_L$Control){(0,_inherits3.default)(LocateControl,_L$Control);function LocateControl(){(0,_classCallCheck3.default)(this,LocateControl);return(0,_possibleConstructorReturn3.default)(this,(LocateControl.__proto__||(0,_getPrototypeOf2.default)(LocateControl)).apply(this,arguments))}(0,_createClass3.default)(LocateControl,[{key:'initialize',value:function initialize(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var defaultOptions={position:'bottomright',className:'',locateText:'<i class="fa fa-crosshairs"></i>',locateTitle:'Zoom to your location',locateTimeout:10000,moveToLocation:true,moveMaxZoom:null};var composedOptions=(0,_assign2.default)(defaultOptions,options);L.Util.setOptions(this,composedOptions)}},{key:'onAdd',value:function onAdd(map){var locateName='leaflet-control-locate';this.__container=L.DomUtil.create('div',locateName+' leaflet-bar '+this.options.className);this.__locateButton=this._createButton(this.options.locateText,this.options.locateTitle,'leaflet-control-locate-button',this.__container);L.DomEvent.on(map,'locationfound',this._locationFound,this);L.DomEvent.on(map,'locationerror',this._locationError,this);L.DomEvent.disableClickPropagation(this.__locateButton);L.DomEvent.on(this.__locateButton,'click',L.DomEvent.stop);L.DomEvent.on(this.__locateButton,'click',this._locate,this);L.DomEvent.on(this.__locateButton,'click',this._refocusOnMap,this);return this.__container}},{key:'onRemove',value:function onRemove(map){L.DomEvent.off(map,'locationfound',this._locationFound,this);L.DomEvent.off(map,'locationerror',this._locationError,this);L.DomEvent.off(this.__locateButton,'click',L.DomEvent.stop);L.DomEvent.off(this.__locateButton,'click',this._locate,this);L.DomEvent.off(this.__locateButton,'click',this._refocusOnMap,this)}},{key:'on',value:function on(){var _map;if(!this._map){return undefined}return(_map=this._map).on.apply(_map,arguments)}},{key:'off',value:function off(){var _map2;if(!this._map){return undefined}return(_map2=this._map).off.apply(_map2,arguments)}},{key:'_locate',value:function _locate(evt){this._map.fire('controlclick',{src:this,action:'locate'});this.locate(evt)}},{key:'locate',value:function locate(){this.__locating=true;this._map.locate({setView:this.options.moveToLocation,maxZoom:this.options.moveMaxZoon,timeout:this.options.locateTimeout});this._setLocatingState()}},{key:'reset',value:function reset(){this._setReadyState()}},{key:'isDisabled',value:function isDisabled(){return this.__disabled||false}},{key:'_createButton',value:function _createButton(html,title,className,container,clickFn){var buttonEl=L.DomUtil.create('a',className,container);buttonEl.innerHTML=html;buttonEl.href='#';buttonEl.title=title;buttonEl.setAttribute('role','button');buttonEl.setAttribute('aria-label',title);return buttonEl}},{key:'_locationFound',value:function _locationFound(evt){if(this.__locating){this.__locating=false;this._setReadyState()}}},{key:'_locationError',value:function _locationError(evt){if(this.__locating){this.__locating=false;this._setReadyState()}}},{key:'_setLocatingState',value:function _setLocatingState(){if(!this.__locateButton||!this.__locating)return;L.DomUtil.addClass(this.__locateButton,'leaflet-control-locate-button--locating');this.__disabled=true;this._updateDisabled()}},{key:'_setReadyState',value:function _setReadyState(){if(!this.__locateButton||this.__locating)return;this.__locateButton.innerHTML=this.options.locateText;L.DomUtil.removeClass(this.__locateButton,'leaflet-control-locate-button--locating');L.DomUtil.removeClass(this.__locateButton,'leaflet-control-locate-button--error');this.__disabled=false;this._updateDisabled()}},{key:'_updateDisabled',value:function _updateDisabled(){if(!this.__locateButton)return;if(this.__disabled){L.DomUtil.addClass(this.__locateButton,'leaflet-control-locate-button--disabled')}if(!this.__disabled){L.DomUtil.removeClass(this.__locateButton,'leaflet-control-locate-button--disabled')}}}]);return LocateControl}(L.Control);;PxMap.LocateControl=LocateControl})();

},{"babel-runtime/core-js/object/assign":4,"babel-runtime/core-js/object/get-prototype-of":8,"babel-runtime/helpers/classCallCheck":15,"babel-runtime/helpers/createClass":16,"babel-runtime/helpers/get":17,"babel-runtime/helpers/inherits":18,"babel-runtime/helpers/possibleConstructorReturn":19}],131:[function(require,module,exports){
'use strict';var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _weakMap=require('babel-runtime/core-js/weak-map');var _weakMap2=_interopRequireDefault(_weakMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.ElementImpl={beforeRegister:function beforeRegister(){this.elementInst=null},shouldAddInst:function shouldAddInst(){if(!this.elementInst){var options=this.__initialOptions=this.getInstOptions();this.elementInst=this.createInst(options);this.fire('px-map-element-instance-created')}this.__instEvents=this.__instEvents||[];this.__instEventsElementsMap=this.__instEventsElementsMap||new _weakMap2.default},shouldRemoveInst:function shouldRemoveInst(){this.unbindAllEvents(this.__instEvents,this.__instEventsElementsMap);this.__instEvents=null;this.__instEventsElementsMap=null},shouldUpdateInst:function shouldUpdateInst(){if(!this.elementInst&&this.__elAttached&&this.canAddInst()){this.notifyInstReady(this.canAddInst())}if(!this.elementInst)return;var lastOptions=this.__lastOptions||this.__initialOptions;var nextOptions=this.getInstOptions();this.updateInst(lastOptions,nextOptions);this.__lastOptions=nextOptions},createInst:function createInst(){throw new Error('The `createInst` method must be implemented.')},updateInst:function updateInst(){throw new Error('The `updateInst` method must be implemented.')},getInstOptions:function getInstOptions(){throw new Error('The `getInstOptions` method must be implemented.')},addInst:function addInst(){throw new Error('The `bindInst` method must be implemented.')},removeInst:function removeInst(){throw new Error('The `unbindInst` method must be implemented.')},extendObj:function extendObj(obj){if(!obj||!(obj instanceof Object))throw new Error('The first parameter of `extendObj` must be an object to be mutated.');for(var _len=arguments.length,properties=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){properties[_key-1]=arguments[_key]}if(properties.length){_assign2.default.apply(Object,[obj].concat(properties))}return obj},addProperties:function addProperties(){this.properties=this.properties||{};for(var _len2=arguments.length,properties=Array(_len2),_key2=0;_key2<_len2;_key2++){properties[_key2]=arguments[_key2]}if(properties.length){this.extend.apply(this,[this.properties].concat(properties))}return this.properties},bindEvents:function bindEvents(evts,target){if((typeof evts==='undefined'?'undefined':(0,_typeof3.default)(evts))!=='object'||!(0,_keys2.default)(evts).length)return;var el=target||this.elementInst;if(!el||!el.on)return;var boundEvts=this.__instEvents;var boundEvtEls=this.__instEventsElementsMap;for(var evtName in evts){var evtReference={name:evtName,fn:evts[evtName]};el.on(evtReference.name,evtReference.fn);boundEvts.push(evtReference);boundEvtEls.set(evtReference,el)}},unbindAllEvents:function unbindAllEvents(boundEvts,boundEvtEls){if(!boundEvts||!boundEvts.length||!boundEvtEls)return;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(boundEvts),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var evt=_step.value;var el=boundEvtEls.get(evt);if(!el||!el.off)continue;var name=evt.name,fn=evt.fn;el.off(name,fn);boundEvtEls.delete(evt)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}},isShadyScoped:function isShadyScoped(){return!Polymer.Settings.useNativeShadow},getShadyScope:function getShadyScope(){return'style-scope px-map'}};PxMapBehavior.Element=[PxMapBehavior.ElementImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/assign":4,"babel-runtime/core-js/object/keys":9,"babel-runtime/core-js/weak-map":14,"babel-runtime/helpers/typeof":21}],132:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.LayerGroupImpl={properties:{name:{type:String,notify:true}},createInst:function createInst(){return L.layerGroup()},updateInst:function updateInst(){return undefined},getInstOptions:function getInstOptions(){return{}}};PxMapBehavior.LayerGroup=[PxMapBehavior.Layer,PxMapBehavior.ParentLayer,PxMapBehavior.LayerGroupImpl]})();

},{}],133:[function(require,module,exports){
'use strict';var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMap=window.PxMap||{};var StaticIcon=function(){function StaticIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,StaticIcon);this.icon=this.createIcon(settings);return this.icon}(0,_createClass3.default)(StaticIcon,[{key:'createIcon',value:function createIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _settings$type=settings.type,type=_settings$type===undefined?'info':_settings$type,_settings$badge=settings.badge,badge=_settings$badge===undefined?false:_settings$badge,styleScope=settings.styleScope;var className=this._generateStaticIconClasses(type,badge,styleScope);var html='\n        <i class="map-icon-static__body"></i>\n        <i class="map-icon-static__descender"></i>\n        <i class="map-icon-static__badge"></i>\n      ';var iconSize=L.point(50,50);var iconAnchor=L.point(9.8,40.3);var popupAnchor=L.point(1,-38);var options={className:className,html:html,iconSize:iconSize,iconAnchor:iconAnchor,popupAnchor:popupAnchor};return L.divIcon(options)}},{key:'_generateStaticIconClasses',value:function _generateStaticIconClasses(type,badge,styleScope){var classes=['map-icon','map-icon-static'];if(type&&type.length){classes.push('map-icon-static--'+type)}if(badge){classes.push('map-icon-static--with-badge')}if(styleScope){classes.push(styleScope)}return classes.join(' ')}}]);return StaticIcon}();;PxMap.StaticIcon=StaticIcon;var SymbolIcon=function(){function SymbolIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,SymbolIcon);this.icon=this.createIcon(settings);return this.icon}(0,_createClass3.default)(SymbolIcon,[{key:'createIcon',value:function createIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _settings$type2=settings.type,type=_settings$type2===undefined?'info':_settings$type2,_settings$badge2=settings.badge,badge=_settings$badge2===undefined?false:_settings$badge2,_settings$symbol=settings.symbol,symbol=_settings$symbol===undefined?'fa fa-bolt':_settings$symbol,styleScope=settings.styleScope;var className=this._generateSymbolIconClasses(type,badge,styleScope);var html='\n        <div class="map-icon-symbol__wrapper">\n          <i class="map-icon-symbol__body">\n            <div class="map-icon-symbol__symbol--container flex flex--middle flex--center">\n              <i class="map-icon-symbol__symbol '+symbol+'"></i>\n            </div>\n          </i>\n          <i class="map-icon-symbol__descender"></i>\n          <i class="map-icon-symbol__badge"></i>\n        </div>\n      ';var iconSize=L.point(55,66);var iconAnchor=L.point(19.8,65);var popupAnchor=L.point(1,-38);var options={className:className,html:html,iconSize:iconSize,iconAnchor:iconAnchor,popupAnchor:popupAnchor};return L.divIcon(options)}},{key:'_generateSymbolIconClasses',value:function _generateSymbolIconClasses(type,badge,styleScope){var classes=['map-icon','map-icon-symbol'];if(type&&type.length){classes.push('map-icon-symbol--'+type)}if(badge){classes.push('map-icon-symbol--with-badge')}if(styleScope){classes.push(styleScope)}return classes.join(' ')}}]);return SymbolIcon}();;PxMap.SymbolIcon=SymbolIcon;var ClusterIcon=function(){function ClusterIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,ClusterIcon);this.icon=this.createIcon(settings);return this.icon}(0,_createClass3.default)(ClusterIcon,[{key:'createIcon',value:function createIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var count=settings.count,countByType=settings.countByType,colorsByType=settings.colorsByType,_settings$containerSi=settings.containerSize,containerSize=_settings$containerSi===undefined?50:_settings$containerSi,_settings$pathSize=settings.pathSize,pathSize=_settings$pathSize===undefined?10:_settings$pathSize,_settings$borderSize=settings.borderSize,borderSize=_settings$borderSize===undefined?0:_settings$borderSize,_settings$className=settings.className,className=_settings$className===undefined?'':_settings$className,styleScope=settings.styleScope;var chartSize=containerSize-(borderSize>0?borderSize*2-0.5:0);var iconSize=L.point(containerSize,containerSize);var svg=this._generateClusterIconSVG(countByType,colorsByType,chartSize,pathSize);var classes='map-icon-cluster '+(className||'')+' '+(styleScope||'');var html='\n        <div class="map-icon-cluster__container" style="width: '+containerSize+'px; height: '+containerSize+'px">\n          <i class="map-icon-cluster__svg">'+svg+'</i>\n          <div class="map-icon-cluster__body">'+count+'</div>\n        </div>\n      ';var options={iconSize:iconSize,className:classes,html:html};return L.divIcon(options)}},{key:'_generateClusterIconSVG',value:function _generateClusterIconSVG(countByType,colorsByType,chartSize,pathSize){var typeKeys=(0,_keys2.default)(countByType);var typeObjs=typeKeys.map(function(type){return{type:type,count:countByType[type],color:colorsByType[type]}});typeObjs.sort(function(a,b){return a.count-b.count});var types=[];var colors=[];var i=void 0,len=void 0,type=void 0,total=void 0;for(i=0,len=typeKeys.length;i<len;i++){type=typeKeys[i];total=countByType[type];types.push(countByType[type]);colors.push(colorsByType[type])}return this.createPieChart(types,colors,chartSize,pathSize)}},{key:'createPieChart',value:function createPieChart(groupsArray,colorsArray,chartSize,pathSize){var pieGeneratorFn=Px.d3.pie();var arcData=pieGeneratorFn(groupsArray);var radius=chartSize/2;var innerRadius=radius-pathSize;var arcPathGeneratorFn=Px.d3.arc().outerRadius(radius).innerRadius(innerRadius);var pathListTmpl=function pathListTmpl(paths){return paths.map(pathTmpl).join('')};var pathTmpl=function pathTmpl(pathData,pathIndex){return'<path d="'+arcPathGeneratorFn(pathData)+'" fill="'+colorsArray[pathIndex]+'" opacity="1"></path>'};return'\n        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+chartSize+'" height="'+chartSize+'">\n            <g transform="translate('+radius+', '+radius+')">\n                '+pathListTmpl(arcData)+'\n            </g>\n        </svg>\n      '}}]);return ClusterIcon}();;PxMap.ClusterIcon=ClusterIcon})();

},{"babel-runtime/core-js/object/keys":9,"babel-runtime/helpers/classCallCheck":15,"babel-runtime/helpers/createClass":16}],134:[function(require,module,exports){
'use strict';var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _weakMap=require('babel-runtime/core-js/weak-map');var _weakMap2=_interopRequireDefault(_weakMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.LayerImpl={attached:function attached(){this.__elAttached=true;this.notifyInstReady(this.canAddInst())},detached:function detached(){this.__elAttached=false;this.shouldRemoveInst()},shouldAddInst:function shouldAddInst(parent){PxMapBehavior.ElementImpl.shouldAddInst.call(this,parent);if(this.elementInst&&parent){this.addInst(parent)};},shouldRemoveInst:function shouldRemoveInst(parent){PxMapBehavior.ElementImpl.shouldAddInst.call(this,parent);if(this.elementInst){this.removeInst(parent?parent:undefined)};},addInst:function addInst(parent){parent.addLayer(this.elementInst)},removeInst:function removeInst(parent){this.elementInst.remove()},canAddInst:function canAddInst(){return true},notifyInstReady:function notifyInstReady(){var isReady=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(!isReady)return false;this.fire('px-map-layer-ready-to-add');return true}};PxMapBehavior.Layer=[PxMapBehavior.Element,PxMapBehavior.LayerImpl];PxMapBehavior.ParentLayerImpl={listeners:{'px-map-element-instance-created':'_tryToAddAllChildren','px-map-layer-ready-to-add':'_tryToAddOneChild'},created:function created(){this._attachedChildren=this._attachedChildren||new _weakMap2.default},detached:function detached(){this._detachLayerChildren()},_tryToAddAllChildren:function _tryToAddAllChildren(evt){var localEvt=Polymer.dom(evt);if(!this.elementInst||localEvt.rootTarget!==this)return;this._attachLayerChildren()},_tryToAddOneChild:function _tryToAddOneChild(evt){var localEvt=Polymer.dom(evt);if(localEvt.rootTarget===this)return;evt.stopPropagation();if(!this.elementInst)return;this._attachLayerChild(localEvt.rootTarget)},_attachLayerChildren:function _attachLayerChildren(){var children=this.getEffectiveChildren();if(!children||!children.length)return;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(children),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var child=_step.value;this._attachLayerChild(child)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}},_attachLayerChild:function _attachLayerChild(childEl){var _this=this;if(this._attachedChildren.has(childEl)||!childEl.shouldAddInst||!childEl.canAddInst||!childEl.canAddInst())return;this._attachedChildren.set(childEl,true);this.async(function(){childEl.shouldAddInst(_this.elementInst)})},_detachLayerChildren:function _detachLayerChildren(){var children=this.getEffectiveChildren();if(!children||!children.length)return;var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=(0,_getIterator3.default)(children),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var child=_step2.value;this._detachLayerChild(child)}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}},_detachLayerChild:function _detachLayerChild(childEl){var _this2=this;if(!this._attachedChildren.has(childEl)||!childEl.shouldRemoveInst)return;this._attachedChildren.delete(childEl);this.async(function(){childEl.shouldRemoveInst(_this2.elementInst)})}};PxMapBehavior.ParentLayer=[PxMapBehavior.ParentLayerImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/weak-map":14}],135:[function(require,module,exports){
'use strict';var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _slicedToArray2=require('babel-runtime/helpers/slicedToArray');var _slicedToArray3=_interopRequireDefault(_slicedToArray2);var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _weakMap=require('babel-runtime/core-js/weak-map');var _weakMap2=_interopRequireDefault(_weakMap);var _set=require('babel-runtime/core-js/set');var _set2=_interopRequireDefault(_set);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.MarkerGroupImpl={properties:{name:{type:String,notify:true},data:{type:Object,observer:'shouldUpdateInst'},colorsByType:{type:Object,value:function value(){return{'unknown':this.getComputedStyleValue('--internal-px-map-icon-unknown-color'),'info':this.getComputedStyleValue('--internal-px-map-icon-info-color'),'warning':this.getComputedStyleValue('--internal-px-map-icon-warning-color'),'important':this.getComputedStyleValue('--internal-px-map-icon-important-color')}}},iconFns:{type:Object,value:function value(){return{cluster:undefined,marker:undefined}}},clusterConfig:{type:Object}},update:function update(){if(!this.elementInst)return;var _getInstOptions=this.getInstOptions(),data=_getInstOptions.data;this._syncDataWithMarkers(data.features,this.elementInst)},addInst:function addInst(parent){PxMapBehavior.LayerImpl.addInst.call(this,parent);var spiderifyFn=this._handleClusterSpiderify.bind(this);var unspiderifyFn=this._handleClusterUnspiderify.bind(this);this.bindEvents({'spiderfied':spiderifyFn,'unspiderfied':unspiderifyFn})},removeInst:function removeInst(parent){PxMapBehavior.LayerImpl.removeInst.call(this,parent)},createInst:function createInst(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var cluster=L.markerClusterGroup(options);if(options.data){this._syncDataWithMarkers(options.data.features,cluster)}return cluster},updateInst:function updateInst(lastOptions,nextOptions){if(nextOptions.data&&nextOptions.data.features&&nextOptions.data.features.length){this._syncDataWithMarkers(nextOptions.data.features,this.elementInst);this.fire('px-map-marker-group-add')}},getInstOptions:function getInstOptions(){var defaultOptions={showCoverageOnHover:true,maxClusterRadius:150,spiderifyOnMaxZoom:true,removeOutsideVisibleBounds:true,animate:true,polygonOptions:{stroke:true,color:this.getComputedStyleValue('--internal-px-map-marker-group-cluster-polygon-stroke-color'),fillColor:this.getComputedStyleValue('--internal-px-map-marker-group-cluster-polygon-fill-color'),fillOpacity:0.4}};var options=(0,_assign2.default)(defaultOptions,this.clusterConfig||{});options.data=this._getValidData();options.iconCreateFunction=this._createClusterIcon.bind(this);return options},_getValidData:function _getValidData(){if(!this.data){return undefined}var dataIsNotValid=(0,_typeof3.default)(this.data)!=='object'||this.data.type!=='FeatureCollection'||!Array.isArray(this.data.features)||!this.data.features.length||(0,_typeof3.default)(this.data.features[0])!=='object';if(dataIsNotValid){console.log('PX-MAP CONFIGURATION ERROR:\n          The `data` attribute for '+this.is+' is not valid GeoJSON. Valid GeoJSON\n          that follows the FeatureCollection standard is required to draw the\n          marker clusters. See the GeoJSON spec website (http://geojson.org/geojson-spec.html)\n          for more information on what is required.\n\n          The minimum requirements for '+this.is+' are:\n          - Must be a valid JavaScript object (or deserializable to an object)\n          - Must have key `type` with value \'FeatureCollection\'\n          - Must have key `features` with value of an array with length\n          - Each entry in `features` must be a valid object\n        ');return undefined}return this.data},_createClusterIcon:function _createClusterIcon(cluster){if(this.iconFns.cluster){return this.iconFns.cluster.call(this,cluster)}var markers=cluster.getAllChildMarkers();var count=markers.length;var types=this._indexClusterMarkersByType(markers);var colors=this.colorsByType;var containerSize=this._getClusterIconSize(count);var pathSize=this._getStyleValueAsNum('--internal-px-map-marker-group-cluster-path-size')||10;var borderSize=this._getStyleValueAsNum('--internal-px-map-marker-group-cluster-border-size')||0;var options={count:count,countByType:types,colorsByType:colors,containerSize:containerSize,pathSize:pathSize,borderSize:borderSize,styleScope:this.isShadyScoped()?this.getShadyScope():undefined};return new PxMap.ClusterIcon(options)},_getStyleValueAsNum:function _getStyleValueAsNum(styleValName){this.__styleVals=this.__styleVals||{};if(this.__styleVals[styleValName])return this.__styleVals[styleValName];var computedVal=this.getComputedStyleValue(styleValName);if(computedVal&&computedVal.indexOf('px')!==-1){var valWithoutSuffix=computedVal.replace('px','');var valAsNum=Math.floor(valWithoutSuffix);this.__styleVals[styleValName]=valAsNum;return valAsNum}else{return undefined}},_getClusterIconSize:function _getClusterIconSize(count){if(count<10){return 60}if(count>=10&&count<40){return 75}if(count>40){return 90}},_indexClusterMarkersByType:function _indexClusterMarkersByType(markers){return markers.reduce(function(types,marker){if(marker.featureProperties&&marker.featureProperties['marker-icon']&&marker.featureProperties['marker-icon']['icon-type']){types[marker.featureProperties['marker-icon']['icon-type']]=(types[marker.featureProperties['marker-icon']['icon-type']]||0)+1}return types},{})},_syncDataWithMarkers:function _syncDataWithMarkers(newFeatures,clusterInst){if(!newFeatures.length)return;var featuresSet=this._features=this._features||new _set2.default;var markersMap=this._markers=this._markers||new _weakMap2.default;var _diffNewFeatures=this._diffNewFeatures(newFeatures,featuresSet,markersMap),featuresToAdd=_diffNewFeatures.featuresToAdd,featuresToUpdate=_diffNewFeatures.featuresToUpdate,featuresToRemove=_diffNewFeatures.featuresToRemove,nextFeaturesSet=_diffNewFeatures.nextFeaturesSet,nextMarkersMap=_diffNewFeatures.nextMarkersMap;var feature=void 0,cachedMarker=void 0,markersToOperate=void 0;if(featuresToAdd.size){markersToOperate=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(featuresToAdd),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){feature=_step.value;cachedMarker=nextMarkersMap.get(feature);cachedMarker.marker=this._createMarker(feature);markersToOperate.push(cachedMarker.marker);nextMarkersMap.set(feature,cachedMarker)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}clusterInst.addLayers(markersToOperate);markersToOperate=null}if(featuresToUpdate.size){markersToOperate=[];var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=(0,_getIterator3.default)(featuresToUpdate),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){feature=_step2.value;cachedMarker=nextMarkersMap.get(feature);cachedMarker.marker=this._updateMarker(feature,cachedMarker.marker);markersToOperate.push(cachedMarker.marker);nextMarkersMap.set(feature,cachedMarker)}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}clusterInst.refreshClusters(markersToOperate);markersToOperate=null}if(featuresToRemove.size){markersToOperate=[];var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=(0,_getIterator3.default)(featuresToRemove),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){feature=_step3.value;cachedMarker=nextMarkersMap.get(feature);markersToOperate.push(cachedMarker.marker);nextMarkersMap.delete(feature)}}catch(err){_didIteratorError3=true;_iteratorError3=err}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return()}}finally{if(_didIteratorError3){throw _iteratorError3}}}clusterInst.removeLayers(markersToOperate);markersToOperate=null}this._features=nextFeaturesSet;this._markers=nextMarkersMap;featuresSet.clear();featuresToAdd.clear();featuresToUpdate.clear();featuresToRemove.clear()},_diffNewFeatures:function _diffNewFeatures(newFeatures,lastFeatureSet,markerMap){var nextFeaturesSet=new _set2.default;var featuresToAdd=new _set2.default;var featuresToUpdate=new _set2.default;var i=void 0,len=void 0,valid=void 0,known=void 0,cachedMarker=void 0,featureHash=void 0;for(i=0,len=newFeatures.length;i<len;i++){valid=newFeatures[i].id&&newFeatures[i].geometry&&newFeatures[i].geometry.type==='Point'&&newFeatures[i].geometry.coordinates instanceof Array&&newFeatures[i].geometry.coordinates.length===2;if(!valid)continue;known=lastFeatureSet.has(newFeatures[i]);if(!known){featuresToAdd.add(newFeatures[i]);lastFeatureSet.delete(newFeatures[i]);nextFeaturesSet.add(newFeatures[i]);cachedMarker={marker:null,hash:(0,_stringify2.default)(newFeatures[i])};markerMap.set(newFeatures[i],cachedMarker);continue}if(known){cachedMarker=markerMap.get(newFeatures[i]);featureHash=(0,_stringify2.default)(newFeatures[i]);if(cachedMarker.hash!==featureHash){featuresToUpdate.add(newFeatures[i]);cachedMarker.hash=featureHash;markerMap.set(newFeatures[i],cachedMarker)}lastFeatureSet.delete(newFeatures[i]);nextFeaturesSet.add(newFeatures[i])}}var featuresToRemove=lastFeatureSet.size?lastFeatureSet:new _set2.default;lastFeatureSet=null;return{featuresToAdd:featuresToAdd,featuresToUpdate:featuresToUpdate,featuresToRemove:featuresToRemove,nextFeaturesSet:nextFeaturesSet,nextMarkersMap:markerMap}},_createMarker:function _createMarker(feature){var _feature$geometry$coo=(0,_slicedToArray3.default)(feature.geometry.coordinates,2),lat=_feature$geometry$coo[0],lng=_feature$geometry$coo[1];var marker=L.marker([lng,lat]);var iconSettings=feature.properties['marker-icon']?this._extractMarkerIconSettings(feature.properties['marker-icon']):{};iconSettings.base=iconSettings.base||'static-icon';iconSettings.type=iconSettings.type||'info';var icon=this._createMarkerIcon(iconSettings);marker.setIcon(icon);marker.featureProperties=feature.properties;return marker},_updateMarker:function _updateMarker(feature,marker){var _marker$getLatLng=marker.getLatLng(),lat=_marker$getLatLng.lat,lng=_marker$getLatLng.lng;var _feature$geometry$coo2=(0,_slicedToArray3.default)(feature.geometry.coordinates,2),nextLng=_feature$geometry$coo2[0],nextLat=_feature$geometry$coo2[1];if(lat!==Number(nextLat)||lng!==Number(nextLng)){marker.setLatLng([nextLat,nextLng])}var iconSettings=feature.properties['marker-icon']?this._extractMarkerIconSettings(feature.properties['marker-icon']):{};iconSettings.base=iconSettings.base||'static-icon';iconSettings.type=iconSettings.type||'info';var icon=this._createMarkerIcon(iconSettings);marker.setIcon(icon);marker.featureProperties=feature.properties;return marker},_extractMarkerIconSettings:function _extractMarkerIconSettings(featSettings){var featSettingsKeys=(0,_keys2.default)(featSettings);if(!featSettingsKeys.length)return undefined;var iconSettings={};var i=void 0,len=void 0,featKeyCamelized=void 0;for(i=0,len=featSettingsKeys.length;i<len;i++){if(featSettingsKeys[i].substring(0,5)!=='icon-')continue;featKeyCamelized=featSettingsKeys[i].substring(5).replace(/(\-[a-z])/g,function(match){return match.charAt(1).toUpperCase()});iconSettings[featKeyCamelized]=featSettings[featSettingsKeys[i]]}return iconSettings},_createMarkerIcon:function _createMarkerIcon(options){if(this.iconFns.marker){return this.iconFns.marker.call(this,options)}options.styleScope=this.isShadyScoped()?this.getShadyScope():undefined;var klassName=this._strToKlassName(options.base);return new PxMap[klassName](options)},_strToKlassName:function _strToKlassName(str){return str.charAt(0).toUpperCase()+str.substring(1).replace(/(\-[a-z])/g,function(match){return match.charAt(1).toUpperCase()})},_handleClusterSpiderify:function _handleClusterSpiderify(evt){if(!evt||!evt.cluster||!evt.cluster._icon)return;evt.cluster._icon.style.visibility='hidden'},_handleClusterUnspiderify:function _handleClusterUnspiderify(evt){if(!evt||!evt.cluster||!evt.cluster._icon)return;evt.cluster._icon.style.visibility='visible'}};PxMapBehavior.MarkerGroup=[PxMapBehavior.Layer,PxMapBehavior.MarkerGroupImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/json/stringify":3,"babel-runtime/core-js/object/assign":4,"babel-runtime/core-js/object/keys":9,"babel-runtime/core-js/set":11,"babel-runtime/core-js/weak-map":14,"babel-runtime/helpers/slicedToArray":20,"babel-runtime/helpers/typeof":21}],136:[function(require,module,exports){
'use strict';var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.MarkerImpl={properties:{lat:{type:Number,notify:true,observer:'shouldUpdateInst'},lng:{type:Number,notify:true,observer:'shouldUpdateInst'},name:{type:String,notify:true,observer:'shouldUpdateInst'}},canAddInst:function canAddInst(){return typeof this.lat==='number'&&typeof this.lng==='number'},createInst:function createInst(options){this.marker=L.marker(options.geometry,options.config);this.marker.isMarker=true;return this.marker},updateInst:function updateInst(lastOptions,nextOptions){var geomWasDefined=(0,_typeof3.default)(lastOptions.geometry)==='object';var geomIsDefined=(0,_typeof3.default)(nextOptions.geometry)==='object';var geomIsDifferent=geomWasDefined&&geomIsDefined&&(lastOptions.geometry.lat!==nextOptions.geometry.lat||lastOptions.geometry.lng!==nextOptions.geometry.lng);if(geomWasDefined&&!geomIsDefined){this.elementInst.setOpacity(0)}if(!geomWasDefined&&geomIsDefined){this.elementInst.setOpacity(1)}if(geomIsDifferent||!geomWasDefined&&geomIsDefined){this.elementInst.setLatLng(nextOptions.geometry)}if(lastOptions.config.icon!==nextOptions.config.icon){this.elementInst.setIcon(nextOptions.config.icon)}},getInstOptions:function getInstOptions(){var geometry=this.getLatLng();var config={};config.title=this.name||'';config.icon=this.getMarkerIcon();return{geometry:geometry,config:config}},getLatLng:function getLatLng(){if(!this.lat||!this.lng)return undefined;return L.latLng(this.lat,this.lng)},getMarkerIcon:function getMarkerIcon(){throw new Error('The `getMarkerIcon` method must be implemented.')}};PxMapBehavior.Marker=[PxMapBehavior.Layer,PxMapBehavior.ParentLayer,PxMapBehavior.MarkerImpl];PxMapBehavior.SymbolMarkerImpl={properties:{type:{type:String,reflectToAttribute:true,value:'info',observer:'_updateMarkerIcon'},showBadge:{type:Boolean,value:true,observer:'_updateMarkerIcon'},symbolClass:{type:String,observer:'_updateMarkerIcon'}},getMarkerIcon:function getMarkerIcon(){if(!this.markerIcon){var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.SymbolIcon(options)}return this.markerIcon},_updateMarkerIcon:function _updateMarkerIcon(){if(!this.markerIcon)return;var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.SymbolIcon(options);this.shouldUpdateInst()},_getMarkerIconOptions:function _getMarkerIconOptions(){return{type:this.type,badge:this.showBadge,symbol:this.symbolClass,styleScope:this.isShadyScoped()?this.getShadyScope():undefined}}};PxMapBehavior.SymbolMarker=[PxMapBehavior.Marker,PxMapBehavior.SymbolMarkerImpl];PxMapBehavior.StaticMarkerImpl={properties:{type:{type:String,reflectToAttribute:true,value:'info',observer:'_updateMarkerIcon'},showBadge:{type:Boolean,value:true,observer:'_updateMarkerIcon'}},getMarkerIcon:function getMarkerIcon(){if(!this.markerIcon){var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.StaticIcon(options)}return this.markerIcon},_updateMarkerIcon:function _updateMarkerIcon(){if(!this.markerIcon)return;var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.StaticIcon(options);this.shouldUpdateInst()},_getMarkerIconOptions:function _getMarkerIconOptions(){return{type:this.type||'',badge:this.showBadge||false,styleScope:this.isShadyScoped()?this.getShadyScope():undefined}}};PxMapBehavior.StaticMarker=[PxMapBehavior.Marker,PxMapBehavior.StaticMarkerImpl];PxMapBehavior.LocateMarkerImpl={properties:{accuracy:{type:Number,observer:'shouldUpdateInst'}},createInst:function createInst(options){this.markerBaseIcon=L.circleMarker(options.geometry,options.baseConfig);this.markerAccuracyIcon=L.circle(options.geometry,options.accuracyRadius,options.accuracyConfig);this.markerGroup=L.featureGroup([this.markerAccuracyIcon,this.markerBaseIcon]);this.markerGroup.isMarker=true;this.markerGroup.getLatLng=this.getLatLng.bind(this);return this.markerGroup},updateInst:function updateInst(lastOptions,nextOptions){var geomWasDefined=(0,_typeof3.default)(lastOptions.geometry)==='object';var geomIsDefined=(0,_typeof3.default)(nextOptions.geometry)==='object';var geomIsDifferent=geomWasDefined&&geomIsDefined&&(lastOptions.geometry.lat!==nextOptions.geometry.lat||lastOptions.geometry.lng!==nextOptions.geometry.lng);if(geomWasDefined&&!geomIsDefined){this.markerBaseIcon.setStyle({opacity:0,fillOpacity:0});this.markerAccuracyIcon.setStyle({opacity:0,fillOpacity:0})}if(geomIsDifferent||!geomWasDefined&&geomIsDefined){this.markerBaseIcon.setLatLng(nextOptions.geometry);this.markerAccuracyIcon.setLatLng(nextOptions.geometry)}if(lastOptions&&!geomWasDefined&&geomIsDefined){this.markerBaseIcon.setStyle(nextOptions.baseConfig);this.markerAccuracyIcon.setStyle(nextOptions.accuracyConfig)}if(lastOptions.accuracyRadius!==nextOptions.accuracyRadius){this.markerAccuracyIcon.setRadius(nextOptions.accuracyRadius)}},getInstOptions:function getInstOptions(){var geometry=this.getLatLng();var baseConfig={};baseConfig.radius=7.5;baseConfig.stroke=true;baseConfig.color=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-border-color');baseConfig.weight=3;baseConfig.opacity=1;baseConfig.fill=true;baseConfig.fillColor=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-color');baseConfig.fillOpacity=1;baseConfig.className='map-marker-locate-base '+(this.isShadyScoped()?this.getShadyScope():'');var accuracyRadius=this.accuracy||0;var accuracyConfig={};accuracyConfig.stroke=false;accuracyConfig.opacity=0;accuracyConfig.fill=true;accuracyConfig.fillColor=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-accuracy-color');accuracyConfig.fillOpacity=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-accuracy-opacity');accuracyConfig.className='map-marker-locate-accuracy '+(this.isShadyScoped()?this.getShadyScope():'');return{geometry:geometry,baseConfig:baseConfig,accuracyRadius:accuracyRadius,accuracyConfig:accuracyConfig}}};PxMapBehavior.LocateMarker=[PxMapBehavior.Marker,PxMapBehavior.LocateMarkerImpl]})();

},{"babel-runtime/helpers/typeof":21}],137:[function(require,module,exports){
'use strict';var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.PopupImpl={properties:{active:{type:Boolean,value:false,readOnly:true},bindToControl:{type:String},closeOnControlInteract:{type:Boolean,value:false}},addInst:function addInst(parent){if(parent&&parent.getPopup()!==this.elementInst){parent.bindPopup(this.elementInst);var controlClickFn=this._handleControlClick.bind(this,parent);this.bindEvents({'controlclick':controlClickFn},parent._mapToAdd)}},removeInst:function removeInst(parent){if(parent&&parent.getPopup&&parent.getPopup()===this.elementInst){parent.unbindPopup(this.elementInst)}},_handleControlClick:function _handleControlClick(parent){if(this.closeOnControlInteract&&parent&&parent.closePopup){parent.closePopup()}}};PxMapBehavior.Popup=[PxMapBehavior.Layer,PxMapBehavior.PopupImpl];PxMapBehavior.InfoPopupImpl={properties:{title:{type:String,observer:'shouldUpdateInst'},description:{type:String,observer:'shouldUpdateInst'},imgSrc:{type:String,observer:'shouldUpdateInst'}},createInst:function createInst(options){return new PxMap.InfoPopup(options)},updateInst:function updateInst(lastOptions,nextOptions){var updates={};if(lastOptions.title!==nextOptions.title){updates.title=nextOptions.title}if(lastOptions.description!==nextOptions.description){updates.description=nextOptions.description}if(lastOptions.imgSrc!==nextOptions.imgSrc){updates.imgSrc=nextOptions.imgSrc}if((0,_keys2.default)(updates).length){this.elementInst.updateSettings(updates)}},getInstOptions:function getInstOptions(){return{title:this.title,description:this.description,imgSrc:this.imgSrc}}};PxMapBehavior.InfoPopup=[PxMapBehavior.Popup,PxMapBehavior.InfoPopupImpl];PxMapBehavior.DataPopupImpl={properties:{title:{type:String,observer:'shouldUpdateInst'},data:{type:Object,value:function value(){return{}},observer:'shouldUpdateInst'}},createInst:function createInst(options){return new PxMap.DataPopup(options)},updateInst:function updateInst(lastOptions,nextOptions){var updates={};if(lastOptions.title!==nextOptions.title){updates.title=nextOptions.title}if(lastOptions.data!==nextOptions.data){updates.data=nextOptions.data}if((0,_keys2.default)(updates).length){this.elementInst.updateSettings(updates)}},getInstOptions:function getInstOptions(){return{title:this.title,data:this._getValidData()}},_getValidData:function _getValidData(){if((0,_typeof3.default)(this.data)!=='object'){console.log('PX-MAP CONFIGURATION ERROR:\n          You entered an invalid `data` attribute for '+this.is+'. You must pass a valid object.\n          An attribute of type `'+(0,_typeof3.default)(this.data)+'` was passed.');return{}}return this.data}};PxMapBehavior.DataPopup=[PxMapBehavior.Popup,PxMapBehavior.DataPopupImpl];window.PxMap=window.PxMap||{};var InfoPopup=function(_L$Popup){(0,_inherits3.default)(InfoPopup,_L$Popup);function InfoPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _ret;var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};(0,_classCallCheck3.default)(this,InfoPopup);var _this=(0,_possibleConstructorReturn3.default)(this,(InfoPopup.__proto__||(0,_getPrototypeOf2.default)(InfoPopup)).call(this));_this._createPopup(settings,config);return _ret=_this,(0,_possibleConstructorReturn3.default)(_this,_ret)}(0,_createClass3.default)(InfoPopup,[{key:'_createPopup',value:function _createPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.settings=settings;var title=settings.title,description=settings.description,imgSrc=settings.imgSrc;var content=this._generatePopupContent(title,description,imgSrc);var defaultConfig={className:'map-popup-info'};var composedConfig={};(0,_assign2.default)(composedConfig,defaultConfig,config);this.initialize(composedConfig);this.setContent(content)}},{key:'_generatePopupContent',value:function _generatePopupContent(title,description,imgSrc){var _this2=this;var tmplFnIf=function tmplFnIf(fn){for(var _len=arguments.length,vals=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){vals[_key-1]=arguments[_key]}return vals.length&&vals[0]!==undefined?fn.call.apply(fn,[_this2].concat(vals)):''};var imgTmpl=function imgTmpl(imgSrc){return'\n        <div class="map-box-info__image">\n          <img src="'+imgSrc+'" />\n        </div>\n      '};var titleTmpl=function titleTmpl(title){return'\n        <p class="map-box-info__title">'+title+'</p>\n      '};var descriptionTmpl=function descriptionTmpl(description){return'\n        <p class="map-box-info__description">'+description+'</p>\n      '};return'\n        <section class="map-box-info">\n          '+tmplFnIf(imgTmpl,imgSrc)+'\n          <div class="map-box-info__content">\n            '+tmplFnIf(titleTmpl,title)+'\n            '+tmplFnIf(descriptionTmpl,description)+'\n          </div>\n        </section>\n      '}},{key:'updateSettings',value:function updateSettings(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_assign2.default)(this.settings,settings);var _settings=this.settings,title=_settings.title,description=_settings.description,imgSrc=_settings.imgSrc;var content=this._generatePopupContent(title,description,imgSrc);this.setContent(content);this.update()}}]);return InfoPopup}(L.Popup);;PxMap.InfoPopup=InfoPopup;var DataPopup=function(_L$Popup2){(0,_inherits3.default)(DataPopup,_L$Popup2);function DataPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _ret2;var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};(0,_classCallCheck3.default)(this,DataPopup);var _this3=(0,_possibleConstructorReturn3.default)(this,(DataPopup.__proto__||(0,_getPrototypeOf2.default)(DataPopup)).call(this));_this3._createPopup(settings,config);return _ret2=_this3,(0,_possibleConstructorReturn3.default)(_this3,_ret2)}(0,_createClass3.default)(DataPopup,[{key:'_createPopup',value:function _createPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.settings=settings;var _settings2=this.settings,title=_settings2.title,data=_settings2.data;var content=this._generatePopupContent(title,data);var defaultConfig={className:'map-popup-data',maxWidth:400,minWidth:300};var composedConfig={};(0,_assign2.default)(composedConfig,defaultConfig,config);this.initialize(composedConfig);this.setContent(content)}},{key:'_generatePopupContent',value:function _generatePopupContent(title,data){var _this4=this;var tmplFnIf=function tmplFnIf(fn){for(var _len2=arguments.length,vals=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){vals[_key2-1]=arguments[_key2]}return vals.length&&vals[0]!==undefined?fn.call.apply(fn,[_this4].concat(vals)):''};var titleTmpl=function titleTmpl(title){return'\n        <div class="map-data-box__header">\n          <h3 class="map-data-box__header__text">'+title+'</h3>\n        </div>\n      '};var dataTmpl=function dataTmpl(data){var dataList=(0,_keys2.default)(data).reduce(function(accum,key){return accum.concat([dataItemTmpl(key,data[key])])},[]).join('');return'\n          <div class="map-data-box__table">\n            '+dataList+'\n          </div>\n        '};var dataItemTmpl=function dataItemTmpl(label,value){return'\n        <div class="map-data-box__table__cell"><p>'+label+'</p></div>\n        <div class="map-data-box__table__cell"><p>'+value+'</p></div>\n      '};return'\n        <section class="map-box-data">\n          '+tmplFnIf(titleTmpl,title)+'\n          '+tmplFnIf(dataTmpl,data)+'\n        </section>\n      '}},{key:'updateSettings',value:function updateSettings(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_assign2.default)(this.settings,settings);var _settings3=this.settings,title=_settings3.title,data=_settings3.data;var content=this._generatePopupContent(title,data);this.setContent(content);this.update()}}]);return DataPopup}(L.Popup);;PxMap.DataPopup=DataPopup})();

},{"babel-runtime/core-js/object/assign":4,"babel-runtime/core-js/object/get-prototype-of":8,"babel-runtime/core-js/object/keys":9,"babel-runtime/helpers/classCallCheck":15,"babel-runtime/helpers/createClass":16,"babel-runtime/helpers/inherits":18,"babel-runtime/helpers/possibleConstructorReturn":19,"babel-runtime/helpers/typeof":21}],138:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.LeafletRootImpl={properties:{crs:{type:Object},lat:{type:Number,value:37.7672375,notify:true,observer:'shouldUpdateInst'},lng:{type:Number,value:-121.9584131,notify:true,observer:'shouldUpdateInst'},zoom:{type:Number,value:10,notify:true,observer:'shouldUpdateInst'},maxZoom:{type:Number,observer:'shouldUpdateInst'},minZoom:{type:Number,observer:'shouldUpdateInst'},maxBounds:{type:Array,observer:'shouldUpdateInst'},disableDragging:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableScrollZoom:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableTouchZoom:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableAttribution:{type:Boolean,value:false},fitToMarkers:{type:Boolean,value:false,observer:'_fitMapToMarkersIfConfigured'},flexToSize:{type:Boolean,reflectToAttribute:true,value:false}},attached:function attached(){this.shouldAddInst();this.addInst()},detached:function detached(){this.shouldRemoveInst();this.removeInst()},createInst:function createInst(options){var mapEl=Polymer.dom(this.root).querySelector('#map');return L.map(mapEl,options)},addInst:function addInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,true)}var mapMoveFn=this._handleMapMove.bind(this);this.bindEvents({'moveend':mapMoveFn});this.listen(this,'px-map-marker-add','_fitMapToMarkersIfConfigured');this.listen(this,'px-map-marker-group-add','_fitMapToMarkersIfConfigured')},removeInst:function removeInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,false)}this.unlisten(this,'px-map-marker-add','_fitMapToMarkersIfConfigured');this.listen(this,'px-map-marker-group-add','_fitMapToMarkersIfConfigured')},getInstOptions:function getInstOptions(){var options={};options.zoomControl=false;options.crs=this.crs||L.CRS.EPSG3857;options.center=[this.lat,this.lng];options.zoom=this.zoom;options.minZoom=this.minZoom||undefined;options.maxZoom=this.maxZoom||undefined;options.maxBounds=this.maxBounds||undefined;options.dragging=!this.disableDragging;options.scrollWheelZoom=!this.disableScrollZoom;options.touchZoom=!this.disableTouchZoom;options.attributionControl=!this.disableAttribution;return options},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.center[0]!==nextOptions.center[0]||lastOptions.center[1]!==nextOptions.center[1]||lastOptions.zoom!==nextOptions.zoom){this._updateMapView()}if(lastOptions.maxZoom!==nextOptions.maxZoom&&!isNaN(nextOptions.maxZoom)){this.setMaxZoom(nextOptions.maxZoom)}if(lastOptions.minZoom!==nextOptions.minZoom&&!isNaN(nextOptions.minZoom)){this.setMaxZoom(nextOptions.minZoom)}if(lastOptions.maxBounds!==nextOptions.maxBounds&&!isNaN(nextOptions.maxBounds)){this.setMaxZoom(nextOptions.maxBounds)}if(!lastOptions.dragging&&nextOptions.dragging){this.elementInst.dragging.enable()}if(lastOptions.dragging&&!nextOptions.dragging){this.elementInst.dragging.disable()}if(!lastOptions.scrollWheelZoom&&nextOptions.scrollWheelZoom){this.elementInst.scrollWheelZoom.enable()}if(lastOptions.scrollWheelZoom&&!nextOptions.scrollWheelZoom){this.elementInst.scrollWheelZoom.disable()}if(!lastOptions.touchZoom&&nextOptions.touchZoom){this.elementInst.touchZoom.enable()}if(lastOptions.touchZoom&&!nextOptions.touchZoom){this.elementInst.touchZoom.disable()}},fitMapToMarkers:function fitMapToMarkers(){if(this.elementInst){this.debounce('fit-map-to-markers',this._fitBounds,1)}},_fitMapToMarkersIfConfigured:function _fitMapToMarkersIfConfigured(){if(this.fitMapToMarkers){this.fitMapToMarkers()}},_fitBounds:function _fitBounds(isRetry){var bounds=this._getAllMarkerGeoms();var boundsAreNotValid=!bounds.isValid||!bounds.isValid();if(boundsAreNotValid&&!isRetry){return setTimeout(this._fitBounds.bind(this),0)}if(!boundsAreNotValid){this.elementInst.fitBounds(bounds)}},_getAllMarkerGeoms:function _getAllMarkerGeoms(){var bounds=new L.LatLngBounds;this.elementInst.eachLayer(function(layer){if(layer.isMarker&&layer.getLatLng){var markerGeom=layer.getLatLng();bounds.extend(markerGeom)}if(layer._markerCluster&&layer.getBounds){var clusterBounds=layer.getBounds();bounds.extend(clusterBounds)}});return bounds},_handleMapMove:function _handleMapMove(){this.debounce('handle-map-move',function(){var latLng=this.elementInst.getCenter();var zoom=this.elementInst.getZoom();var bounds=this.elementInst.getBounds();if(this.lat!==latLng.lat){this.set('lat',latLng.lat)}if(this.lng!==latLng.lng){this.set('lng',latLng.lng)}if(this.zoom!==zoom){this.set('zoom',zoom)}this.fire('px-map-moved',{lat:latLng.lat,lng:latLng.lng,zoom:zoom,bounds:bounds})})},_updateMapView:function _updateMapView(){if(!this.elementInst)return;this.debounce('update-map-view',function(){var _elementInst$getCente=this.elementInst.getCenter(),lat=_elementInst$getCente.lat,lng=_elementInst$getCente.lng;var zoom=this.elementInst.getZoom();if(this.lat!==lat||this.lng!==lng||this.zoom!==zoom){this.elementInst.setView([lat,lng],zoom)}})},getVisibleMarkers:function getVisibleMarkers(){var mapBounds=this.elementInst.getBounds();var markers=[];this.elementInst.eachLayer(function(layer){if(layer.isMarker&&layer.getLatLng){if(mapBounds.contains(layer.getLatLng())&&markers.indexOf(layer)===-1){markers.push(layer)}}if(layer._markerCluster){layer.eachLayer(function(marker){var parentCluster=layer.getVisibleParent(marker);if(parentCluster&&mapBounds.contains(parentCluster.getLatLng())&&marker&&markers.indexOf(marker)===-1){markers.push(marker)}})}});return markers}};PxMapBehavior.LeafletRoot=[PxMapBehavior.Element,PxMapBehavior.ParentLayer,PxMapBehavior.LeafletRootImpl]})();

},{}],139:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.TileLayerImpl={properties:{url:{type:String,observer:'shouldUpdateInst'}},canAddInst:function canAddInst(){return typeof this.url==='string'&&this.url.length},createInst:function createInst(options){return L.tileLayer(options.url)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.url!==nextOptions.url){this.elementInst.setUrl(nextOptions.url)}},getInstOptions:function getInstOptions(){return{url:this.url}}};PxMapBehavior.TileLayer=[PxMapBehavior.Layer,PxMapBehavior.TileLayerImpl]})();

},{}]},{},[131,134,130,132,133,135,136,137,138,139]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJweC1tYXAtYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiOjIyfV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCI6MjN9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIjoyNH1dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIjoyNX1dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIjoyNn1dLDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIjoyN31dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIjoyOH1dLDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiOjI5fV0sOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCI6MzB9XSwxMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCI6MzF9XSwxMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc2V0XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9zZXRcIjozMn1dLDEyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiOjMzfV0sMTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCI6MzR9XSwxNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vd2Vhay1tYXBcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL3dlYWstbWFwXCI6MzV9XSwxNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG59LHt9XSwxNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcbn0se1wiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCI6Nn1dLDE3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xufSx7XCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIjo3LFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiOjh9XSwxODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcbn0se1wiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCI6NSxcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIjoxMCxcIi4uL2hlbHBlcnMvdHlwZW9mXCI6MjF9XSwxOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xufSx7XCIuLi9oZWxwZXJzL3R5cGVvZlwiOjIxfV0sMjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG59LHtcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCI6MSxcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIjoyfV0sMjE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG59LHtcIi4uL2NvcmUtanMvc3ltYm9sXCI6MTIsXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiOjEzfV0sMjI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xufSx7XCIuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yXCI6MTExLFwiLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yXCI6MTIzLFwiLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCI6MTI5fV0sMjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7XG59LHtcIi4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZVwiOjExMixcIi4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiOjEyMyxcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjEyOX1dLDI0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjb3JlICA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKVxuICAsICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7c3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeX0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xufSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6NTF9XSwyNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xufSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6NTEsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduXCI6MTE0fV0sMjY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjo1MSxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGVcIjoxMTV9XSwyNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjo1MSxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHlcIjoxMTZ9XSwyODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjUxLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiOjExN31dLDI5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjo1MSxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mXCI6MTE4fV0sMzA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xufSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6NTEsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5c1wiOjExOX1dLDMxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjo1MSxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mXCI6MTIwfV0sMzI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnNldCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc2V0LnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlNldDtcbn0se1wiLi4vbW9kdWxlcy9fY29yZVwiOjUxLFwiLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiOjEyMSxcIi4uL21vZHVsZXMvZXM2LnNldFwiOjEyMixcIi4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiOjEyMyxcIi4uL21vZHVsZXMvZXM3LnNldC50by1qc29uXCI6MTI2LFwiLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCI6MTI5fV0sMzM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjo1MSxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmdcIjoxMjEsXCIuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2xcIjoxMjQsXCIuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3JcIjoxMjcsXCIuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZVwiOjEyOH1dLDM0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xufSx7XCIuLi8uLi9tb2R1bGVzL193a3MtZXh0XCI6MTA4LFwiLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yXCI6MTIzLFwiLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCI6MTI5fV0sMzU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi53ZWFrLW1hcCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuV2Vha01hcDtcbn0se1wiLi4vbW9kdWxlcy9fY29yZVwiOjUxLFwiLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiOjEyMSxcIi4uL21vZHVsZXMvZXM2LndlYWstbWFwXCI6MTI1LFwiLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCI6MTI5fV0sMzY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG59LHt9XSwzNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG59LHt9XSwzODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xufSx7fV0sMzk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG59LHtcIi4vX2lzLW9iamVjdFwiOjY5fV0sNDA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlciwgSVRFUkFUT1Ipe1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG59LHtcIi4vX2Zvci1vZlwiOjYwfV0sNDE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xufSx7XCIuL190by1pbmRleFwiOjEwMCxcIi4vX3RvLWlvYmplY3RcIjoxMDIsXCIuL190by1sZW5ndGhcIjoxMDN9XSw0MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBhc2MgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUsICRjcmVhdGUpe1xuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYXG4gICAgLCBjcmVhdGUgICAgICAgID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG59LHtcIi4vX2FycmF5LXNwZWNpZXMtY3JlYXRlXCI6NDQsXCIuL19jdHhcIjo1MixcIi4vX2lvYmplY3RcIjo2NixcIi4vX3RvLWxlbmd0aFwiOjEwMyxcIi4vX3RvLW9iamVjdFwiOjEwNH1dLDQzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG59LHtcIi4vX2lzLWFycmF5XCI6NjgsXCIuL19pcy1vYmplY3RcIjo2OSxcIi4vX3drc1wiOjEwOX1dLDQ0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xufSx7XCIuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yXCI6NDN9XSw0NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xufSx7XCIuL19jb2ZcIjo0NixcIi4vX3drc1wiOjEwOX1dLDQ2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG59LHt9XSw0NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgY3JlYXRlICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGFuSW5zdGFuY2UgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGRlZmluZWQgICAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgZm9yT2YgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBzZXRTcGVjaWVzICA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBmYXN0S2V5ICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5XG4gICwgU0laRSAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgJ2ZvckVhY2gnKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuICAgICAgLCBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZihlbnRyeSl7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG59LHtcIi4vX2FuLWluc3RhbmNlXCI6MzgsXCIuL19jdHhcIjo1MixcIi4vX2RlZmluZWRcIjo1MyxcIi4vX2Rlc2NyaXB0b3JzXCI6NTQsXCIuL19mb3Itb2ZcIjo2MCxcIi4vX2l0ZXItZGVmaW5lXCI6NzIsXCIuL19pdGVyLXN0ZXBcIjo3MyxcIi4vX21ldGFcIjo3NyxcIi4vX29iamVjdC1jcmVhdGVcIjo3OSxcIi4vX29iamVjdC1kcFwiOjgwLFwiLi9fcmVkZWZpbmUtYWxsXCI6OTIsXCIuL19zZXQtc3BlY2llc1wiOjk1fV0sNDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBmcm9tICAgID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTtcbn0se1wiLi9fYXJyYXktZnJvbS1pdGVyYWJsZVwiOjQwLFwiLi9fY2xhc3NvZlwiOjQ1fV0sNDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIHJlZGVmaW5lQWxsICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBnZXRXZWFrICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5nZXRXZWFrXG4gICwgYW5PYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbkluc3RhbmNlICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgY3JlYXRlQXJyYXlNZXRob2QgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJylcbiAgLCAkaGFzICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgYXJyYXlGaW5kICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg1KVxuICAsIGFycmF5RmluZEluZGV4ICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNilcbiAgLCBpZCAgICAgICAgICAgICAgICA9IDA7XG5cbi8vIGZhbGxiYWNrIGZvciB1bmNhdWdodCBmcm96ZW4ga2V5c1xudmFyIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbih0aGF0KXtcbiAgcmV0dXJuIHRoYXQuX2wgfHwgKHRoYXQuX2wgPSBuZXcgVW5jYXVnaHRGcm96ZW5TdG9yZSk7XG59O1xudmFyIFVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbigpe1xuICB0aGlzLmEgPSBbXTtcbn07XG52YXIgZmluZFVuY2F1Z2h0RnJvemVuID0gZnVuY3Rpb24oc3RvcmUsIGtleSl7XG4gIHJldHVybiBhcnJheUZpbmQoc3RvcmUuYSwgZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICB9KTtcbn07XG5VbmNhdWdodEZyb3plblN0b3JlLnByb3RvdHlwZSA9IHtcbiAgZ2V0OiBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmKGVudHJ5KXJldHVybiBlbnRyeVsxXTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiAhIWZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmKGVudHJ5KWVudHJ5WzFdID0gdmFsdWU7XG4gICAgZWxzZSB0aGlzLmEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9LFxuICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgaW5kZXggPSBhcnJheUZpbmRJbmRleCh0aGlzLmEsIGZ1bmN0aW9uKGl0KXtcbiAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICAgIH0pO1xuICAgIGlmKH5pbmRleCl0aGlzLmEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gISF+aW5kZXg7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll9pID0gaWQrKzsgICAgICAvLyBjb2xsZWN0aW9uIGlkXG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAvLyBsZWFrIHN0b3JlIGZvciB1bmNhdWdodCBmcm96ZW4gb2JqZWN0c1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMy4zLjIgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjQuMy4zIFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpWydkZWxldGUnXShrZXkpO1xuICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpICYmIGRlbGV0ZSBkYXRhW3RoaXMuX2ldO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjMuMy40IFdlYWtNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy40LjMuNCBXZWFrU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpLmhhcyhrZXkpO1xuICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBkYXRhID0gZ2V0V2Vhayhhbk9iamVjdChrZXkpLCB0cnVlKTtcbiAgICBpZihkYXRhID09PSB0cnVlKXVuY2F1Z2h0RnJvemVuU3RvcmUodGhhdCkuc2V0KGtleSwgdmFsdWUpO1xuICAgIGVsc2UgZGF0YVt0aGF0Ll9pXSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGF0O1xuICB9LFxuICB1ZnN0b3JlOiB1bmNhdWdodEZyb3plblN0b3JlXG59O1xufSx7XCIuL19hbi1pbnN0YW5jZVwiOjM4LFwiLi9fYW4tb2JqZWN0XCI6MzksXCIuL19hcnJheS1tZXRob2RzXCI6NDIsXCIuL19mb3Itb2ZcIjo2MCxcIi4vX2hhc1wiOjYyLFwiLi9faXMtb2JqZWN0XCI6NjksXCIuL19tZXRhXCI6NzcsXCIuL19yZWRlZmluZS1hbGxcIjo5Mn1dLDUwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIG1ldGEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGFuSW5zdGFuY2UgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBlYWNoICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgaWYoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlO1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgZWFjaCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OJy5zcGxpdCgnLCcpLGZ1bmN0aW9uKEtFWSl7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xufSx7XCIuL19hbi1pbnN0YW5jZVwiOjM4LFwiLi9fYXJyYXktbWV0aG9kc1wiOjQyLFwiLi9fZGVzY3JpcHRvcnNcIjo1NCxcIi4vX2V4cG9ydFwiOjU4LFwiLi9fZmFpbHNcIjo1OSxcIi4vX2Zvci1vZlwiOjYwLFwiLi9fZ2xvYmFsXCI6NjEsXCIuL19oaWRlXCI6NjMsXCIuL19pcy1vYmplY3RcIjo2OSxcIi4vX21ldGFcIjo3NyxcIi4vX29iamVjdC1kcFwiOjgwLFwiLi9fcmVkZWZpbmUtYWxsXCI6OTIsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjk2fV0sNTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxufSx7fV0sNTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbn0se1wiLi9fYS1mdW5jdGlvblwiOjM2fV0sNTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xufSx7fV0sNTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG59LHtcIi4vX2ZhaWxzXCI6NTl9XSw1NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG59LHtcIi4vX2dsb2JhbFwiOjYxLFwiLi9faXMtb2JqZWN0XCI6Njl9XSw1NjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbn0se31dLDU3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xufSx7XCIuL19vYmplY3QtZ29wc1wiOjg1LFwiLi9fb2JqZWN0LWtleXNcIjo4OCxcIi4vX29iamVjdC1waWVcIjo4OX1dLDU4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG59LHtcIi4vX2NvcmVcIjo1MSxcIi4vX2N0eFwiOjUyLFwiLi9fZ2xvYmFsXCI6NjEsXCIuL19oaWRlXCI6NjN9XSw1OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbn0se31dLDYwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xufSx7XCIuL19hbi1vYmplY3RcIjozOSxcIi4vX2N0eFwiOjUyLFwiLi9faXMtYXJyYXktaXRlclwiOjY3LFwiLi9faXRlci1jYWxsXCI6NzAsXCIuL190by1sZW5ndGhcIjoxMDMsXCIuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZFwiOjExMH1dLDYxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbn0se31dLDYyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xufSx7fV0sNjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xufSx7XCIuL19kZXNjcmlwdG9yc1wiOjU0LFwiLi9fb2JqZWN0LWRwXCI6ODAsXCIuL19wcm9wZXJ0eS1kZXNjXCI6OTF9XSw2NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn0se1wiLi9fZ2xvYmFsXCI6NjF9XSw2NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xufSx7XCIuL19kZXNjcmlwdG9yc1wiOjU0LFwiLi9fZG9tLWNyZWF0ZVwiOjU1LFwiLi9fZmFpbHNcIjo1OX1dLDY2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xufSx7XCIuL19jb2ZcIjo0Nn1dLDY3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG59LHtcIi4vX2l0ZXJhdG9yc1wiOjc0LFwiLi9fd2tzXCI6MTA5fV0sNjg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbn0se1wiLi9fY29mXCI6NDZ9XSw2OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG59LHt9XSw3MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbn0se1wiLi9fYW4tb2JqZWN0XCI6Mzl9XSw3MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbn0se1wiLi9faGlkZVwiOjYzLFwiLi9fb2JqZWN0LWNyZWF0ZVwiOjc5LFwiLi9fcHJvcGVydHktZGVzY1wiOjkxLFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIjo5NixcIi4vX3drc1wiOjEwOX1dLDcyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbn0se1wiLi9fZXhwb3J0XCI6NTgsXCIuL19oYXNcIjo2MixcIi4vX2hpZGVcIjo2MyxcIi4vX2l0ZXItY3JlYXRlXCI6NzEsXCIuL19pdGVyYXRvcnNcIjo3NCxcIi4vX2xpYnJhcnlcIjo3NixcIi4vX29iamVjdC1ncG9cIjo4NixcIi4vX3JlZGVmaW5lXCI6OTMsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjk2LFwiLi9fd2tzXCI6MTA5fV0sNzM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcbn0se31dLDc0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0ge307XG59LHt9XSw3NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG59LHtcIi4vX29iamVjdC1rZXlzXCI6ODgsXCIuL190by1pb2JqZWN0XCI6MTAyfV0sNzY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xufSx7fV0sNzc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG59LHtcIi4vX2ZhaWxzXCI6NTksXCIuL19oYXNcIjo2MixcIi4vX2lzLW9iamVjdFwiOjY5LFwiLi9fb2JqZWN0LWRwXCI6ODAsXCIuL191aWRcIjoxMDZ9XSw3ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xufSx7XCIuL19mYWlsc1wiOjU5LFwiLi9faW9iamVjdFwiOjY2LFwiLi9fb2JqZWN0LWdvcHNcIjo4NSxcIi4vX29iamVjdC1rZXlzXCI6ODgsXCIuL19vYmplY3QtcGllXCI6ODksXCIuL190by1vYmplY3RcIjoxMDR9XSw3OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cbn0se1wiLi9fYW4tb2JqZWN0XCI6MzksXCIuL19kb20tY3JlYXRlXCI6NTUsXCIuL19lbnVtLWJ1Zy1rZXlzXCI6NTYsXCIuL19odG1sXCI6NjQsXCIuL19vYmplY3QtZHBzXCI6ODEsXCIuL19zaGFyZWQta2V5XCI6OTd9XSw4MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xufSx7XCIuL19hbi1vYmplY3RcIjozOSxcIi4vX2Rlc2NyaXB0b3JzXCI6NTQsXCIuL19pZTgtZG9tLWRlZmluZVwiOjY1LFwiLi9fdG8tcHJpbWl0aXZlXCI6MTA1fV0sODE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbn0se1wiLi9fYW4tb2JqZWN0XCI6MzksXCIuL19kZXNjcmlwdG9yc1wiOjU0LFwiLi9fb2JqZWN0LWRwXCI6ODAsXCIuL19vYmplY3Qta2V5c1wiOjg4fV0sODI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xufSx7XCIuL19kZXNjcmlwdG9yc1wiOjU0LFwiLi9faGFzXCI6NjIsXCIuL19pZTgtZG9tLWRlZmluZVwiOjY1LFwiLi9fb2JqZWN0LXBpZVwiOjg5LFwiLi9fcHJvcGVydHktZGVzY1wiOjkxLFwiLi9fdG8taW9iamVjdFwiOjEwMixcIi4vX3RvLXByaW1pdGl2ZVwiOjEwNX1dLDgzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cbn0se1wiLi9fb2JqZWN0LWdvcG5cIjo4NCxcIi4vX3RvLWlvYmplY3RcIjoxMDJ9XSw4NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xufSx7XCIuL19lbnVtLWJ1Zy1rZXlzXCI6NTYsXCIuL19vYmplY3Qta2V5cy1pbnRlcm5hbFwiOjg3fV0sODU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbn0se31dLDg2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG59LHtcIi4vX2hhc1wiOjYyLFwiLi9fc2hhcmVkLWtleVwiOjk3LFwiLi9fdG8tb2JqZWN0XCI6MTA0fV0sODc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xufSx7XCIuL19hcnJheS1pbmNsdWRlc1wiOjQxLFwiLi9faGFzXCI6NjIsXCIuL19zaGFyZWQta2V5XCI6OTcsXCIuL190by1pb2JqZWN0XCI6MTAyfV0sODg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG59LHtcIi4vX2VudW0tYnVnLWtleXNcIjo1NixcIi4vX29iamVjdC1rZXlzLWludGVybmFsXCI6ODd9XSw4OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbn0se31dLDkwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG59LHtcIi4vX2NvcmVcIjo1MSxcIi4vX2V4cG9ydFwiOjU4LFwiLi9fZmFpbHNcIjo1OX1dLDkxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcbn0se31dLDkyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xufSx7XCIuL19oaWRlXCI6NjN9XSw5MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbn0se1wiLi9faGlkZVwiOjYzfV0sOTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xufSx7XCIuL19hbi1vYmplY3RcIjozOSxcIi4vX2N0eFwiOjUyLFwiLi9faXMtb2JqZWN0XCI6NjksXCIuL19vYmplY3QtZ29wZFwiOjgyfV0sOTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG59LHtcIi4vX2NvcmVcIjo1MSxcIi4vX2Rlc2NyaXB0b3JzXCI6NTQsXCIuL19nbG9iYWxcIjo2MSxcIi4vX29iamVjdC1kcFwiOjgwLFwiLi9fd2tzXCI6MTA5fV0sOTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xufSx7XCIuL19oYXNcIjo2MixcIi4vX29iamVjdC1kcFwiOjgwLFwiLi9fd2tzXCI6MTA5fV0sOTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG59LHtcIi4vX3NoYXJlZFwiOjk4LFwiLi9fdWlkXCI6MTA2fV0sOTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbn0se1wiLi9fZ2xvYmFsXCI6NjF9XSw5OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbn0se1wiLi9fZGVmaW5lZFwiOjUzLFwiLi9fdG8taW50ZWdlclwiOjEwMX1dLDEwMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xufSx7XCIuL190by1pbnRlZ2VyXCI6MTAxfV0sMTAxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbn0se31dLDEwMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xufSx7XCIuL19kZWZpbmVkXCI6NTMsXCIuL19pb2JqZWN0XCI6NjZ9XSwxMDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG59LHtcIi4vX3RvLWludGVnZXJcIjoxMDF9XSwxMDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xufSx7XCIuL19kZWZpbmVkXCI6NTN9XSwxMDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG59LHtcIi4vX2lzLW9iamVjdFwiOjY5fV0sMTA2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xufSx7fV0sMTA3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xufSx7XCIuL19jb3JlXCI6NTEsXCIuL19nbG9iYWxcIjo2MSxcIi4vX2xpYnJhcnlcIjo3NixcIi4vX29iamVjdC1kcFwiOjgwLFwiLi9fd2tzLWV4dFwiOjEwOH1dLDEwODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbn0se1wiLi9fd2tzXCI6MTA5fV0sMTA5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xufSx7XCIuL19nbG9iYWxcIjo2MSxcIi4vX3NoYXJlZFwiOjk4LFwiLi9fdWlkXCI6MTA2fV0sMTEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xufSx7XCIuL19jbGFzc29mXCI6NDUsXCIuL19jb3JlXCI6NTEsXCIuL19pdGVyYXRvcnNcIjo3NCxcIi4vX3drc1wiOjEwOX1dLDExMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG59LHtcIi4vX2FuLW9iamVjdFwiOjM5LFwiLi9fY29yZVwiOjUxLFwiLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2RcIjoxMTB9XSwxMTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xufSx7XCIuL19jbGFzc29mXCI6NDUsXCIuL19jb3JlXCI6NTEsXCIuL19pdGVyYXRvcnNcIjo3NCxcIi4vX3drc1wiOjEwOX1dLDExMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xufSx7XCIuL19hZGQtdG8tdW5zY29wYWJsZXNcIjozNyxcIi4vX2l0ZXItZGVmaW5lXCI6NzIsXCIuL19pdGVyLXN0ZXBcIjo3MyxcIi4vX2l0ZXJhdG9yc1wiOjc0LFwiLi9fdG8taW9iamVjdFwiOjEwMn1dLDExNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcbn0se1wiLi9fZXhwb3J0XCI6NTgsXCIuL19vYmplY3QtYXNzaWduXCI6Nzh9XSwxMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pO1xufSx7XCIuL19leHBvcnRcIjo1OCxcIi4vX29iamVjdC1jcmVhdGVcIjo3OX1dLDExNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTtcbn0se1wiLi9fZGVzY3JpcHRvcnNcIjo1NCxcIi4vX2V4cG9ydFwiOjU4LFwiLi9fb2JqZWN0LWRwXCI6ODB9XSwxMTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xufSx7XCIuL19vYmplY3QtZ29wZFwiOjgyLFwiLi9fb2JqZWN0LXNhcFwiOjkwLFwiLi9fdG8taW9iamVjdFwiOjEwMn1dLDExODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG59LHtcIi4vX29iamVjdC1ncG9cIjo4NixcIi4vX29iamVjdC1zYXBcIjo5MCxcIi4vX3RvLW9iamVjdFwiOjEwNH1dLDExOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbn0se1wiLi9fb2JqZWN0LWtleXNcIjo4OCxcIi4vX29iamVjdC1zYXBcIjo5MCxcIi4vX3RvLW9iamVjdFwiOjEwNH1dLDEyMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXR9KTtcbn0se1wiLi9fZXhwb3J0XCI6NTgsXCIuL19zZXQtcHJvdG9cIjo5NH1dLDEyMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cbn0se31dLDEyMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpO1xufSx7XCIuL19jb2xsZWN0aW9uXCI6NTAsXCIuL19jb2xsZWN0aW9uLXN0cm9uZ1wiOjQ3fV0sMTIzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG59LHtcIi4vX2l0ZXItZGVmaW5lXCI6NzIsXCIuL19zdHJpbmctYXRcIjo5OX1dLDEyNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbn0se1wiLi9fYW4tb2JqZWN0XCI6MzksXCIuL19kZXNjcmlwdG9yc1wiOjU0LFwiLi9fZW51bS1rZXlzXCI6NTcsXCIuL19leHBvcnRcIjo1OCxcIi4vX2ZhaWxzXCI6NTksXCIuL19nbG9iYWxcIjo2MSxcIi4vX2hhc1wiOjYyLFwiLi9faGlkZVwiOjYzLFwiLi9faXMtYXJyYXlcIjo2OCxcIi4vX2tleW9mXCI6NzUsXCIuL19saWJyYXJ5XCI6NzYsXCIuL19tZXRhXCI6NzcsXCIuL19vYmplY3QtY3JlYXRlXCI6NzksXCIuL19vYmplY3QtZHBcIjo4MCxcIi4vX29iamVjdC1nb3BkXCI6ODIsXCIuL19vYmplY3QtZ29wblwiOjg0LFwiLi9fb2JqZWN0LWdvcG4tZXh0XCI6ODMsXCIuL19vYmplY3QtZ29wc1wiOjg1LFwiLi9fb2JqZWN0LWtleXNcIjo4OCxcIi4vX29iamVjdC1waWVcIjo4OSxcIi4vX3Byb3BlcnR5LWRlc2NcIjo5MSxcIi4vX3JlZGVmaW5lXCI6OTMsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjk2LFwiLi9fc2hhcmVkXCI6OTgsXCIuL190by1pb2JqZWN0XCI6MTAyLFwiLi9fdG8tcHJpbWl0aXZlXCI6MTA1LFwiLi9fdWlkXCI6MTA2LFwiLi9fd2tzXCI6MTA5LFwiLi9fd2tzLWRlZmluZVwiOjEwNyxcIi4vX3drcy1leHRcIjoxMDh9XSwxMjU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGVhY2ggICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIHJlZGVmaW5lICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBtZXRhICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBhc3NpZ24gICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJylcbiAgLCB3ZWFrICAgICAgICAgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXdlYWsnKVxuICAsIGlzT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZ2V0V2VhayAgICAgID0gbWV0YS5nZXRXZWFrXG4gICwgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZVxuICAsIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSB3ZWFrLnVmc3RvcmVcbiAgLCB0bXAgICAgICAgICAgPSB7fVxuICAsIEludGVybmFsTWFwO1xuXG52YXIgd3JhcHBlciA9IGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrTWFwKCl7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gIH07XG59O1xuXG52YXIgbWV0aG9kcyA9IHtcbiAgLy8gMjMuMy4zLjMgV2Vha01hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICBpZihpc09iamVjdChrZXkpKXtcbiAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKS5nZXQoa2V5KTtcbiAgICAgIHJldHVybiBkYXRhID8gZGF0YVt0aGlzLl9pXSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG4gIC8vIDIzLjMuMy41IFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywga2V5LCB2YWx1ZSk7XG4gIH1cbn07XG5cbi8vIDIzLjMgV2Vha01hcCBPYmplY3RzXG52YXIgJFdlYWtNYXAgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnV2Vha01hcCcsIHdyYXBwZXIsIG1ldGhvZHMsIHdlYWssIHRydWUsIHRydWUpO1xuXG4vLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5pZihuZXcgJFdlYWtNYXAoKS5zZXQoKE9iamVjdC5mcmVlemUgfHwgT2JqZWN0KSh0bXApLCA3KS5nZXQodG1wKSAhPSA3KXtcbiAgSW50ZXJuYWxNYXAgPSB3ZWFrLmdldENvbnN0cnVjdG9yKHdyYXBwZXIpO1xuICBhc3NpZ24oSW50ZXJuYWxNYXAucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgZWFjaChbJ2RlbGV0ZScsICdoYXMnLCAnZ2V0JywgJ3NldCddLCBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBwcm90byAgPSAkV2Vha01hcC5wcm90b3R5cGVcbiAgICAgICwgbWV0aG9kID0gcHJvdG9ba2V5XTtcbiAgICByZWRlZmluZShwcm90bywga2V5LCBmdW5jdGlvbihhLCBiKXtcbiAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGludGVybmFsIHdlYWttYXAgc2hpbVxuICAgICAgaWYoaXNPYmplY3QoYSkgJiYgIWlzRXh0ZW5zaWJsZShhKSl7XG4gICAgICAgIGlmKCF0aGlzLl9mKXRoaXMuX2YgPSBuZXcgSW50ZXJuYWxNYXA7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9mW2tleV0oYSwgYik7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgLy8gc3RvcmUgYWxsIHRoZSByZXN0IG9uIG5hdGl2ZSB3ZWFrbWFwXG4gICAgICB9IHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICB9KTtcbiAgfSk7XG59XG59LHtcIi4vX2FycmF5LW1ldGhvZHNcIjo0MixcIi4vX2NvbGxlY3Rpb25cIjo1MCxcIi4vX2NvbGxlY3Rpb24td2Vha1wiOjQ5LFwiLi9faXMtb2JqZWN0XCI6NjksXCIuL19tZXRhXCI6NzcsXCIuL19vYmplY3QtYXNzaWduXCI6NzgsXCIuL19yZWRlZmluZVwiOjkzfV0sMTI2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1NldCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdTZXQnKX0pO1xufSx7XCIuL19jb2xsZWN0aW9uLXRvLWpzb25cIjo0OCxcIi4vX2V4cG9ydFwiOjU4fV0sMTI3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xufSx7XCIuL193a3MtZGVmaW5lXCI6MTA3fV0sMTI4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xufSx7XCIuL193a3MtZGVmaW5lXCI6MTA3fV0sMTI5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cbn0se1wiLi9fZ2xvYmFsXCI6NjEsXCIuL19oaWRlXCI6NjMsXCIuL19pdGVyYXRvcnNcIjo3NCxcIi4vX3drc1wiOjEwOSxcIi4vZXM2LmFycmF5Lml0ZXJhdG9yXCI6MTEzfV0sMTMwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX2Fzc2lnbj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbicpO3ZhciBfYXNzaWduMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO3ZhciBfZ2V0UHJvdG90eXBlT2Y9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7dmFyIF9nZXRQcm90b3R5cGVPZjI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO3ZhciBfY2xhc3NDYWxsQ2hlY2syPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO3ZhciBfY2xhc3NDYWxsQ2hlY2szPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7dmFyIF9jcmVhdGVDbGFzczI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7dmFyIF9jcmVhdGVDbGFzczM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTt2YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7dmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7dmFyIF9nZXQyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQnKTt2YXIgX2dldDM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Mik7dmFyIF9pbmhlcml0czI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7dmFyIF9pbmhlcml0czM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian19KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEJlaGF2aW9yPXdpbmRvdy5QeE1hcEJlaGF2aW9yfHx7fTtQeE1hcEJlaGF2aW9yLkNvbnRyb2xJbXBsPXtwcm9wZXJ0aWVzOntwb3NpdGlvbjp7dHlwZTpTdHJpbmcsdmFsdWU6J2JvdHRvbXJpZ2h0JyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXt0aGlzLmVsZW1lbnRJbnN0LmFkZFRvKHBhcmVudCl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdChwYXJlbnQpe3RoaXMuZWxlbWVudEluc3QucmVtb3ZlKCl9LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7cmV0dXJue3Bvc2l0aW9uOnRoaXMuX2dldFZhbGlkUG9zaXRpb24oKX19LF9nZXRWYWxpZFBvc2l0aW9uOmZ1bmN0aW9uIF9nZXRWYWxpZFBvc2l0aW9uKCl7dmFyIHBvc2l0aW9uSXNWYWxpZD0vXih0b3ByaWdodHx0b3BsZWZ0fGJvdHRvbXJpZ2h0fGJvdHRvbWxlZnQpJC8udGVzdCh0aGlzLnBvc2l0aW9uKTtpZighcG9zaXRpb25Jc1ZhbGlkKXtjb25zb2xlLmxvZygnUFgtTUFQIENPTkZJR1VSQVRJT04gRVJST1I6XFxuICAgICAgICAgIFlvdSBlbnRlcmVkIGFuIGludmFsaWQgYHBvc2l0aW9uYCBhdHRyaWJ1dGUgXFwnJyt0aGlzLnBvc2l0aW9uKydcXCcgZm9yICcrdGhpcy5pcysnLlxcbiAgICAgICAgICBQb3NpdGlvbiBtdXN0IGJlIGEgc3RyaW5nIHdpdGggb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxcbiAgICAgICAgICAtIFxcJ3RvcHJpZ2h0XFwnXFxuICAgICAgICAgIC0gXFwndG9wbGVmdFxcJ1xcbiAgICAgICAgICAtIFxcJ2JvdHRvbXJpZ2h0XFwnXFxuICAgICAgICAgIC0gXFwnYm90dG9tbGVmdFxcJ1xcbiAgICAgICAgICBEZWZhdWx0aW5nIHRvIFxcJ2JvdHRvbXJpZ2h0XFwnLicpO3JldHVybidib3R0b21yaWdodCd9cmV0dXJuIHRoaXMucG9zaXRpb259fTtQeE1hcEJlaGF2aW9yLkNvbnRyb2w9W1B4TWFwQmVoYXZpb3IuTGF5ZXIsUHhNYXBCZWhhdmlvci5Db250cm9sSW1wbF07UHhNYXBCZWhhdmlvci5ab29tQ29udHJvbEltcGw9e3Byb3BlcnRpZXM6e3pvb21JblRleHQ6e3R5cGU6U3RyaW5nLHZhbHVlOic8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+J30sem9vbU91dFRleHQ6e3R5cGU6U3RyaW5nLHZhbHVlOic8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPid9LGxhbmd1YWdlOnt0eXBlOlN0cmluZyx2YWx1ZTonZW4nfSxyZXNvdXJjZXM6e3R5cGU6T2JqZWN0LHZhbHVlOmZ1bmN0aW9uIHZhbHVlKCl7cmV0dXJueydlbic6eydab29tIGluJzonWm9vbSBpbicsJ1pvb20gb3V0JzonWm9vbSBvdXQnfX19fX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3JldHVybiBuZXcgUHhNYXAuWm9vbUNvbnRyb2wob3B0aW9ucyl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7aWYobGFzdE9wdGlvbnMucG9zaXRpb24hPT1uZXh0T3B0aW9ucy5wb3NpdGlvbil7dGhpcy5lbGVtZW50SW5zdC5zZXRQb3NpdGlvbihuZXh0T3B0aW9ucy5wb3NpdGlvbil9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3ZhciBvcHRpb25zPVB4TWFwQmVoYXZpb3IuQ29udHJvbEltcGwuZ2V0SW5zdE9wdGlvbnMuY2FsbCh0aGlzKTtvcHRpb25zLnBvc2l0aW9uPXRoaXMucG9zaXRpb247b3B0aW9ucy56b29tSW5UZXh0PXRoaXMuem9vbUluVGV4dDtvcHRpb25zLnpvb21PdXRUZXh0PXRoaXMuem9vbU91dFRleHQ7aWYodHlwZW9mIHRoaXMubG9jYWxpemU9PT0nZnVuY3Rpb24nKXtvcHRpb25zLnpvb21JblRpdGxlPXRoaXMubG9jYWxpemUoJ1pvb20gaW4nKTtvcHRpb25zLnpvb21PdXRUaXRsZT10aGlzLmxvY2FsaXplKCdab29tIG91dCcpfXJldHVybiBvcHRpb25zfX07UHhNYXBCZWhhdmlvci5ab29tQ29udHJvbD1bUG9seW1lci5BcHBMb2NhbGl6ZUJlaGF2aW9yLFB4TWFwQmVoYXZpb3IuQ29udHJvbCxQeE1hcEJlaGF2aW9yLlpvb21Db250cm9sSW1wbF07UHhNYXBCZWhhdmlvci5TY2FsZUNvbnRyb2xJbXBsPXtwcm9wZXJ0aWVzOntpbXBlcmlhbFVuaXRzOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxtZXRyaWNVbml0czp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30scmV2ZXJzZUNvbG9yczp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J319LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXtyZXR1cm4gbmV3IFB4TWFwLlNjYWxlQ29udHJvbChvcHRpb25zKX0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXtpZihsYXN0T3B0aW9ucy5wb3NpdGlvbiE9PW5leHRPcHRpb25zLnBvc2l0aW9uKXt0aGlzLmVsZW1lbnRJbnN0LnNldFBvc2l0aW9uKG5leHRPcHRpb25zLnBvc2l0aW9uKX1pZihsYXN0T3B0aW9ucy5yZXZlcnNlQ29sb3JzIT09bmV4dE9wdGlvbnMucmV2ZXJzZUNvbG9ycyl7dGhpcy5lbGVtZW50SW5zdC5zZXRSZXZlcnNlQ29sb3JzKG5leHRPcHRpb25zLnJldmVyc2VDb2xvcnMpfWlmKGxhc3RPcHRpb25zLm1ldHJpYyE9PW5leHRPcHRpb25zLm1ldHJpYyl7dGhpcy5lbGVtZW50SW5zdC5zaG93TWV0cmljKG5leHRPcHRpb25zLm1ldHJpYyl9aWYobGFzdE9wdGlvbnMuaW1wZXJpYWwhPT1uZXh0T3B0aW9ucy5pbXBlcmlhbCl7dGhpcy5lbGVtZW50SW5zdC5zaG93SW1wZXJpYWwobmV4dE9wdGlvbnMuaW1wZXJpYWwpfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt2YXIgb3B0aW9ucz1QeE1hcEJlaGF2aW9yLkNvbnRyb2xJbXBsLmdldEluc3RPcHRpb25zLmNhbGwodGhpcyk7b3B0aW9ucy5pbXBlcmlhbD10aGlzLmltcGVyaWFsVW5pdHM7b3B0aW9ucy5tZXRyaWM9dGhpcy5tZXRyaWNVbml0cztvcHRpb25zLnJldmVyc2VDb2xvcnM9dGhpcy5yZXZlcnNlQ29sb3JzO3JldHVybiBvcHRpb25zfX07UHhNYXBCZWhhdmlvci5TY2FsZUNvbnRyb2w9W1B4TWFwQmVoYXZpb3IuQ29udHJvbCxQeE1hcEJlaGF2aW9yLlNjYWxlQ29udHJvbEltcGxdO1B4TWFwQmVoYXZpb3IuTG9jYXRlQ29udHJvbEltcGw9e3Byb3BlcnRpZXM6e2xvY2F0ZVRleHQ6e3R5cGU6U3RyaW5nLHZhbHVlOic8aSBjbGFzcz1cImZhIGZhLWNyb3NzaGFpcnNcIj48L2k+JyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGxvY2F0ZVRpdGxlOnt0eXBlOlN0cmluZyx2YWx1ZTonWm9vbSB0byB5b3VyIGxvY2F0aW9uJyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LG1vdmVUb0xvY2F0aW9uOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2V9LG1vdmVNYXhab29tOnt0eXBlOk51bWJlcn0sbGFzdEZvdW5kTG9jYXRpb246e3R5cGU6T2JqZWN0LHZhbHVlOmZ1bmN0aW9uIHZhbHVlKCl7cmV0dXJue319LG5vdGlmeTp0cnVlfX0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7UHhNYXBCZWhhdmlvci5Db250cm9sSW1wbC5hZGRJbnN0LmNhbGwodGhpcyxwYXJlbnQpO3ZhciBmb3VuZEZuPXRoaXMuX2hhbmRsZUxvY2F0aW9uRm91bmQuYmluZCh0aGlzKTt2YXIgZXJyb3JGbj10aGlzLl9oYW5kbGVMb2NhdGlvbkVycm9yLmJpbmQodGhpcyk7dmFyIHRhcEZuPXRoaXMuX2hhbmRsZUxvY2F0aW9uVGFwLmJpbmQodGhpcyk7dGhpcy5iaW5kRXZlbnRzKHsnbG9jYXRpb25mb3VuZCc6Zm91bmRGbiwnbG9jYXRpb25lcnJvcic6ZXJyb3JGbiwnY29udHJvbGNsaWNrJzp0YXBGbn0pfSxyZW1vdmVJbnN0OmZ1bmN0aW9uIHJlbW92ZUluc3QocGFyZW50KXtQeE1hcEJlaGF2aW9yLkNvbnRyb2xJbXBsLnJlbW92ZUluc3QuY2FsbCh0aGlzLHBhcmVudCl9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXtyZXR1cm4gbmV3IFB4TWFwLkxvY2F0ZUNvbnRyb2wob3B0aW9ucyl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7aWYobGFzdE9wdGlvbnMucG9zaXRpb24hPT1uZXh0T3B0aW9ucy5wb3NpdGlvbil7dGhpcy5lbGVtZW50SW5zdC5zZXRQb3NpdGlvbihuZXh0T3B0aW9ucy5wb3NpdGlvbil9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybntwb3NpdGlvbjp0aGlzLnBvc2l0aW9uLGxvY2F0ZVRleHQ6dGhpcy5sb2NhdGVUZXh0LGxvY2F0ZVRpdGxlOnRoaXMubG9jYXRlVGl0bGUsbW92ZVRvTG9jYXRpb246dGhpcy5tb3ZlVG9Mb2NhdGlvbixtb3ZlTWF4Wm9vbTp0aGlzLm1vdmVNYXhab29tfX0sX2hhbmRsZUxvY2F0aW9uRm91bmQ6ZnVuY3Rpb24gX2hhbmRsZUxvY2F0aW9uRm91bmQoZXZ0KXtpZighZXZ0KXJldHVybjt2YXIgZGV0YWlsPXtsYXQ6ZXZ0LmxhdGl0dWRlfHxudWxsLGxuZzpldnQubG9uZ2l0dWRlfHxudWxsLHRpbWVzdGFtcDpldnQudGltZXN0YW1wfHxudWxsLGJvdW5kczpldnQuYm91bmRzfHxudWxsfTtkZXRhaWwuYWNjdXJhY3k9ZXZ0LmJvdW5kcy5nZXRDZW50ZXIoKSYmZXZ0LmJvdW5kcy5nZXROb3J0aFdlc3QoKT9ldnQuYm91bmRzLmdldENlbnRlcigpLmRpc3RhbmNlVG8oZXZ0LmJvdW5kcy5nZXROb3J0aEVhc3QoKSk6bnVsbDt0aGlzLmZpcmUoJ3B4LW1hcC1jb250cm9sLWxvY2F0ZS1zdWNjZXNzJyxkZXRhaWwpO3RoaXMuc2V0KCdsYXN0Rm91bmRMb2NhdGlvbicsZGV0YWlsKTt0aGlzLm5vdGlmeVBhdGgoJ2xhc3RGb3VuZExvY2F0aW9uLionKX0sX2hhbmRsZUxvY2F0aW9uRXJyb3I6ZnVuY3Rpb24gX2hhbmRsZUxvY2F0aW9uRXJyb3IoZXZ0KXtpZighZXZ0KXJldHVybjt2YXIgZGV0YWlsPXttZXNzYWdlOmV2dC5tZXNzYWdlfHxudWxsfTt0aGlzLmZpcmUoJ3B4LW1hcC1jb250cm9sLWxvY2F0ZS1lcnJvcicsZGV0YWlsKX0sX2hhbmRsZUxvY2F0aW9uVGFwOmZ1bmN0aW9uIF9oYW5kbGVMb2NhdGlvblRhcChldnQpe2lmKCFldnR8fGV2dC5hY3Rpb24hPT0nbG9jYXRlJylyZXR1cm47dGhpcy5maXJlKCdweC1tYXAtbG9jYXRlLWJ1dHRvbi10YXAnKX19O1B4TWFwQmVoYXZpb3IuTG9jYXRlQ29udHJvbD1bUHhNYXBCZWhhdmlvci5Db250cm9sLFB4TWFwQmVoYXZpb3IuTG9jYXRlQ29udHJvbEltcGxdO3dpbmRvdy5QeE1hcD13aW5kb3cuUHhNYXB8fHt9O3ZhciBTY2FsZUNvbnRyb2w9ZnVuY3Rpb24oX0wkQ29udHJvbCRTY2FsZSl7KDAsX2luaGVyaXRzMy5kZWZhdWx0KShTY2FsZUNvbnRyb2wsX0wkQ29udHJvbCRTY2FsZSk7ZnVuY3Rpb24gU2NhbGVDb250cm9sKCl7KDAsX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLFNjYWxlQ29udHJvbCk7cmV0dXJuKDAsX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsKFNjYWxlQ29udHJvbC5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoU2NhbGVDb250cm9sKSkuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0oMCxfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFNjYWxlQ29udHJvbCxbe2tleTonaW5pdGlhbGl6ZScsdmFsdWU6ZnVuY3Rpb24gaW5pdGlhbGl6ZShvcHRpb25zKXsoMCxfZ2V0My5kZWZhdWx0KShTY2FsZUNvbnRyb2wucHJvdG90eXBlLl9fcHJvdG9fX3x8KDAsX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShTY2FsZUNvbnRyb2wucHJvdG90eXBlKSwnaW5pdGlhbGl6ZScsdGhpcykuY2FsbCh0aGlzLG9wdGlvbnMpfX0se2tleTonb25BZGQnLHZhbHVlOmZ1bmN0aW9uIG9uQWRkKG1hcCl7dGhpcy5fX3NjYWxlQ29udGFpbmVyPSgwLF9nZXQzLmRlZmF1bHQpKFNjYWxlQ29udHJvbC5wcm90b3R5cGUuX19wcm90b19ffHwoMCxfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFNjYWxlQ29udHJvbC5wcm90b3R5cGUpLCdvbkFkZCcsdGhpcykuY2FsbCh0aGlzLG1hcCk7aWYodGhpcy5vcHRpb25zLnJldmVyc2VDb2xvcnM9PT10cnVlKXtMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fX3NjYWxlQ29udGFpbmVyLCdsZWFmbGV0LWNvbnRyb2wtc2NhbGUtLXJldmVyc2UnKX1yZXR1cm4gdGhpcy5fX3NjYWxlQ29udGFpbmVyfX0se2tleTonb25SZW1vdmUnLHZhbHVlOmZ1bmN0aW9uIG9uUmVtb3ZlKG1hcCl7KDAsX2dldDMuZGVmYXVsdCkoU2NhbGVDb250cm9sLnByb3RvdHlwZS5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoU2NhbGVDb250cm9sLnByb3RvdHlwZSksJ29uUmVtb3ZlJyx0aGlzKS5jYWxsKHRoaXMsbWFwKTt0aGlzLl9fc2NhbGVDb250YWluZXI9bnVsbH19LHtrZXk6J3NldFJldmVyc2VDb2xvcnMnLHZhbHVlOmZ1bmN0aW9uIHNldFJldmVyc2VDb2xvcnMoc2hvdWxkUmV2ZXJzZSl7aWYoIXRoaXMuX19zY2FsZUNvbnRhaW5lcilyZXR1cm47aWYoc2hvdWxkUmV2ZXJzZSYmIXRoaXMub3B0aW9ucy5yZXZlcnNlQ29sb3JzKXt0aGlzLm9wdGlvbnMucmV2ZXJzZUNvbG9ycz10cnVlO0wuRG9tVXRpbC5hZGRDbGFzcyh0aGlzLl9fc2NhbGVDb250YWluZXIsJ2xlYWZsZXQtY29udHJvbC1zY2FsZS0tcmV2ZXJzZScpfWlmKCFzaG91bGRSZXZlcnNlJiZ0aGlzLm9wdGlvbnMucmV2ZXJzZUNvbG9ycyl7dGhpcy5vcHRpb25zLnJldmVyc2VDb2xvcnM9ZmFsc2U7TC5Eb21VdGlsLnJlbW92ZUNsYXNzKHRoaXMuX19zY2FsZUNvbnRhaW5lciwnbGVhZmxldC1jb250cm9sLXNjYWxlLS1yZXZlcnNlJyl9fX0se2tleTonc2hvd0ltcGVyaWFsJyx2YWx1ZTpmdW5jdGlvbiBzaG93SW1wZXJpYWwoc2hvdWxkU2hvd0ltcGVyaWFsKXtpZighdGhpcy5fX3NjYWxlQ29udGFpbmVyKXJldHVybjtpZihzaG91bGRTaG93SW1wZXJpYWwmJiF0aGlzLm9wdGlvbnMuaW1wZXJpYWwmJiF0aGlzLl9pU2NhbGUpe3RoaXMuX2lTY2FsZT1MLkRvbVV0aWwuY3JlYXRlKCdkaXYnLCdsZWFmbGV0LWNvbnRyb2wtc2NhbGUtbGluZScsdGhpcy5fX3NjYWxlQ29udGFpbmVyKTt0aGlzLm9wdGlvbnMuaW1wZXJpYWw9dHJ1ZX1pZighc2hvdWxkU2hvd0ltcGVyaWFsJiZ0aGlzLm9wdGlvbnMuaW1wZXJpYWwmJnRoaXMuX2lTY2FsZSl7dGhpcy5vcHRpb25zLmltcGVyaWFsPWZhbHNlO0wuRG9tVXRpbC5yZW1vdmUodGhpcy5faVNjYWxlKTt0aGlzLl9pU2NhbGU9bnVsbH10aGlzLl91cGRhdGUoKX19LHtrZXk6J3Nob3dNZXRyaWMnLHZhbHVlOmZ1bmN0aW9uIHNob3dNZXRyaWMoc2hvdWxkU2hvd01ldHJpYyl7aWYoIXRoaXMuX19zY2FsZUNvbnRhaW5lcilyZXR1cm47aWYoc2hvdWxkU2hvd01ldHJpYyYmIXRoaXMub3B0aW9ucy5tZXRyaWMmJiF0aGlzLl9tU2NhbGUpe3RoaXMuX21TY2FsZT1MLkRvbVV0aWwuY3JlYXRlKCdkaXYnLCdsZWFmbGV0LWNvbnRyb2wtc2NhbGUtbGluZScsdGhpcy5fX3NjYWxlQ29udGFpbmVyKTt0aGlzLm9wdGlvbnMubWV0cmljPXRydWV9aWYoIXNob3VsZFNob3dNZXRyaWMmJnRoaXMub3B0aW9ucy5tZXRyaWMmJnRoaXMuX21TY2FsZSl7dGhpcy5vcHRpb25zLm1ldHJpYz1mYWxzZTtMLkRvbVV0aWwucmVtb3ZlKHRoaXMuX21TY2FsZSk7dGhpcy5fbVNjYWxlPW51bGx9dGhpcy5fdXBkYXRlKCl9fV0pO3JldHVybiBTY2FsZUNvbnRyb2x9KEwuQ29udHJvbC5TY2FsZSk7O1B4TWFwLlNjYWxlQ29udHJvbD1TY2FsZUNvbnRyb2w7dmFyIFpvb21Db250cm9sPWZ1bmN0aW9uKF9MJENvbnRyb2wkWm9vbSl7KDAsX2luaGVyaXRzMy5kZWZhdWx0KShab29tQ29udHJvbCxfTCRDb250cm9sJFpvb20pO2Z1bmN0aW9uIFpvb21Db250cm9sKCl7KDAsX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLFpvb21Db250cm9sKTtyZXR1cm4oMCxfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywoWm9vbUNvbnRyb2wuX19wcm90b19ffHwoMCxfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFpvb21Db250cm9sKSkuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0oMCxfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFpvb21Db250cm9sLFt7a2V5Oidfem9vbUluJyx2YWx1ZTpmdW5jdGlvbiBfem9vbUluKGUpeygwLF9nZXQzLmRlZmF1bHQpKFpvb21Db250cm9sLnByb3RvdHlwZS5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoWm9vbUNvbnRyb2wucHJvdG90eXBlKSwnX3pvb21JbicsdGhpcykuY2FsbCh0aGlzLGUpO2lmKHRoaXMuX21hcCYmdGhpcy5fbWFwLmZpcmUpe3RoaXMuX21hcC5maXJlKCdjb250cm9sY2xpY2snLHtzcmM6dGhpcyxhY3Rpb246J3pvb21pbid9KX19fSx7a2V5Oidfem9vbU91dCcsdmFsdWU6ZnVuY3Rpb24gX3pvb21PdXQoZSl7KDAsX2dldDMuZGVmYXVsdCkoWm9vbUNvbnRyb2wucHJvdG90eXBlLl9fcHJvdG9fX3x8KDAsX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShab29tQ29udHJvbC5wcm90b3R5cGUpLCdfem9vbU91dCcsdGhpcykuY2FsbCh0aGlzLGUpO2lmKHRoaXMuX21hcCYmdGhpcy5fbWFwLmZpcmUpe3RoaXMuX21hcC5maXJlKCdjb250cm9sY2xpY2snLHtzcmM6dGhpcyxhY3Rpb246J3pvb21vdXQnfSl9fX0se2tleTonX2ZpcmVab29tQ2xpY2tFdnQnLHZhbHVlOmZ1bmN0aW9uIF9maXJlWm9vbUNsaWNrRXZ0KGV2dCl7ZGVidWdnZXJ9fV0pO3JldHVybiBab29tQ29udHJvbH0oTC5Db250cm9sLlpvb20pOztQeE1hcC5ab29tQ29udHJvbD1ab29tQ29udHJvbDt2YXIgTG9jYXRlQ29udHJvbD1mdW5jdGlvbihfTCRDb250cm9sKXsoMCxfaW5oZXJpdHMzLmRlZmF1bHQpKExvY2F0ZUNvbnRyb2wsX0wkQ29udHJvbCk7ZnVuY3Rpb24gTG9jYXRlQ29udHJvbCgpeygwLF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcyxMb2NhdGVDb250cm9sKTtyZXR1cm4oMCxfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywoTG9jYXRlQ29udHJvbC5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoTG9jYXRlQ29udHJvbCkpLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9KDAsX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShMb2NhdGVDb250cm9sLFt7a2V5Oidpbml0aWFsaXplJyx2YWx1ZTpmdW5jdGlvbiBpbml0aWFsaXplKCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9O3ZhciBkZWZhdWx0T3B0aW9ucz17cG9zaXRpb246J2JvdHRvbXJpZ2h0JyxjbGFzc05hbWU6JycsbG9jYXRlVGV4dDonPGkgY2xhc3M9XCJmYSBmYS1jcm9zc2hhaXJzXCI+PC9pPicsbG9jYXRlVGl0bGU6J1pvb20gdG8geW91ciBsb2NhdGlvbicsbG9jYXRlVGltZW91dDoxMDAwMCxtb3ZlVG9Mb2NhdGlvbjp0cnVlLG1vdmVNYXhab29tOm51bGx9O3ZhciBjb21wb3NlZE9wdGlvbnM9KDAsX2Fzc2lnbjIuZGVmYXVsdCkoZGVmYXVsdE9wdGlvbnMsb3B0aW9ucyk7TC5VdGlsLnNldE9wdGlvbnModGhpcyxjb21wb3NlZE9wdGlvbnMpfX0se2tleTonb25BZGQnLHZhbHVlOmZ1bmN0aW9uIG9uQWRkKG1hcCl7dmFyIGxvY2F0ZU5hbWU9J2xlYWZsZXQtY29udHJvbC1sb2NhdGUnO3RoaXMuX19jb250YWluZXI9TC5Eb21VdGlsLmNyZWF0ZSgnZGl2Jyxsb2NhdGVOYW1lKycgbGVhZmxldC1iYXIgJyt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKTt0aGlzLl9fbG9jYXRlQnV0dG9uPXRoaXMuX2NyZWF0ZUJ1dHRvbih0aGlzLm9wdGlvbnMubG9jYXRlVGV4dCx0aGlzLm9wdGlvbnMubG9jYXRlVGl0bGUsJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uJyx0aGlzLl9fY29udGFpbmVyKTtMLkRvbUV2ZW50Lm9uKG1hcCwnbG9jYXRpb25mb3VuZCcsdGhpcy5fbG9jYXRpb25Gb3VuZCx0aGlzKTtMLkRvbUV2ZW50Lm9uKG1hcCwnbG9jYXRpb25lcnJvcicsdGhpcy5fbG9jYXRpb25FcnJvcix0aGlzKTtMLkRvbUV2ZW50LmRpc2FibGVDbGlja1Byb3BhZ2F0aW9uKHRoaXMuX19sb2NhdGVCdXR0b24pO0wuRG9tRXZlbnQub24odGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLEwuRG9tRXZlbnQuc3RvcCk7TC5Eb21FdmVudC5vbih0aGlzLl9fbG9jYXRlQnV0dG9uLCdjbGljaycsdGhpcy5fbG9jYXRlLHRoaXMpO0wuRG9tRXZlbnQub24odGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLHRoaXMuX3JlZm9jdXNPbk1hcCx0aGlzKTtyZXR1cm4gdGhpcy5fX2NvbnRhaW5lcn19LHtrZXk6J29uUmVtb3ZlJyx2YWx1ZTpmdW5jdGlvbiBvblJlbW92ZShtYXApe0wuRG9tRXZlbnQub2ZmKG1hcCwnbG9jYXRpb25mb3VuZCcsdGhpcy5fbG9jYXRpb25Gb3VuZCx0aGlzKTtMLkRvbUV2ZW50Lm9mZihtYXAsJ2xvY2F0aW9uZXJyb3InLHRoaXMuX2xvY2F0aW9uRXJyb3IsdGhpcyk7TC5Eb21FdmVudC5vZmYodGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLEwuRG9tRXZlbnQuc3RvcCk7TC5Eb21FdmVudC5vZmYodGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLHRoaXMuX2xvY2F0ZSx0aGlzKTtMLkRvbUV2ZW50Lm9mZih0aGlzLl9fbG9jYXRlQnV0dG9uLCdjbGljaycsdGhpcy5fcmVmb2N1c09uTWFwLHRoaXMpfX0se2tleTonb24nLHZhbHVlOmZ1bmN0aW9uIG9uKCl7dmFyIF9tYXA7aWYoIXRoaXMuX21hcCl7cmV0dXJuIHVuZGVmaW5lZH1yZXR1cm4oX21hcD10aGlzLl9tYXApLm9uLmFwcGx5KF9tYXAsYXJndW1lbnRzKX19LHtrZXk6J29mZicsdmFsdWU6ZnVuY3Rpb24gb2ZmKCl7dmFyIF9tYXAyO2lmKCF0aGlzLl9tYXApe3JldHVybiB1bmRlZmluZWR9cmV0dXJuKF9tYXAyPXRoaXMuX21hcCkub2ZmLmFwcGx5KF9tYXAyLGFyZ3VtZW50cyl9fSx7a2V5OidfbG9jYXRlJyx2YWx1ZTpmdW5jdGlvbiBfbG9jYXRlKGV2dCl7dGhpcy5fbWFwLmZpcmUoJ2NvbnRyb2xjbGljaycse3NyYzp0aGlzLGFjdGlvbjonbG9jYXRlJ30pO3RoaXMubG9jYXRlKGV2dCl9fSx7a2V5Oidsb2NhdGUnLHZhbHVlOmZ1bmN0aW9uIGxvY2F0ZSgpe3RoaXMuX19sb2NhdGluZz10cnVlO3RoaXMuX21hcC5sb2NhdGUoe3NldFZpZXc6dGhpcy5vcHRpb25zLm1vdmVUb0xvY2F0aW9uLG1heFpvb206dGhpcy5vcHRpb25zLm1vdmVNYXhab29uLHRpbWVvdXQ6dGhpcy5vcHRpb25zLmxvY2F0ZVRpbWVvdXR9KTt0aGlzLl9zZXRMb2NhdGluZ1N0YXRlKCl9fSx7a2V5OidyZXNldCcsdmFsdWU6ZnVuY3Rpb24gcmVzZXQoKXt0aGlzLl9zZXRSZWFkeVN0YXRlKCl9fSx7a2V5Oidpc0Rpc2FibGVkJyx2YWx1ZTpmdW5jdGlvbiBpc0Rpc2FibGVkKCl7cmV0dXJuIHRoaXMuX19kaXNhYmxlZHx8ZmFsc2V9fSx7a2V5OidfY3JlYXRlQnV0dG9uJyx2YWx1ZTpmdW5jdGlvbiBfY3JlYXRlQnV0dG9uKGh0bWwsdGl0bGUsY2xhc3NOYW1lLGNvbnRhaW5lcixjbGlja0ZuKXt2YXIgYnV0dG9uRWw9TC5Eb21VdGlsLmNyZWF0ZSgnYScsY2xhc3NOYW1lLGNvbnRhaW5lcik7YnV0dG9uRWwuaW5uZXJIVE1MPWh0bWw7YnV0dG9uRWwuaHJlZj0nIyc7YnV0dG9uRWwudGl0bGU9dGl0bGU7YnV0dG9uRWwuc2V0QXR0cmlidXRlKCdyb2xlJywnYnV0dG9uJyk7YnV0dG9uRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyx0aXRsZSk7cmV0dXJuIGJ1dHRvbkVsfX0se2tleTonX2xvY2F0aW9uRm91bmQnLHZhbHVlOmZ1bmN0aW9uIF9sb2NhdGlvbkZvdW5kKGV2dCl7aWYodGhpcy5fX2xvY2F0aW5nKXt0aGlzLl9fbG9jYXRpbmc9ZmFsc2U7dGhpcy5fc2V0UmVhZHlTdGF0ZSgpfX19LHtrZXk6J19sb2NhdGlvbkVycm9yJyx2YWx1ZTpmdW5jdGlvbiBfbG9jYXRpb25FcnJvcihldnQpe2lmKHRoaXMuX19sb2NhdGluZyl7dGhpcy5fX2xvY2F0aW5nPWZhbHNlO3RoaXMuX3NldFJlYWR5U3RhdGUoKX19fSx7a2V5Oidfc2V0TG9jYXRpbmdTdGF0ZScsdmFsdWU6ZnVuY3Rpb24gX3NldExvY2F0aW5nU3RhdGUoKXtpZighdGhpcy5fX2xvY2F0ZUJ1dHRvbnx8IXRoaXMuX19sb2NhdGluZylyZXR1cm47TC5Eb21VdGlsLmFkZENsYXNzKHRoaXMuX19sb2NhdGVCdXR0b24sJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uLS1sb2NhdGluZycpO3RoaXMuX19kaXNhYmxlZD10cnVlO3RoaXMuX3VwZGF0ZURpc2FibGVkKCl9fSx7a2V5Oidfc2V0UmVhZHlTdGF0ZScsdmFsdWU6ZnVuY3Rpb24gX3NldFJlYWR5U3RhdGUoKXtpZighdGhpcy5fX2xvY2F0ZUJ1dHRvbnx8dGhpcy5fX2xvY2F0aW5nKXJldHVybjt0aGlzLl9fbG9jYXRlQnV0dG9uLmlubmVySFRNTD10aGlzLm9wdGlvbnMubG9jYXRlVGV4dDtMLkRvbVV0aWwucmVtb3ZlQ2xhc3ModGhpcy5fX2xvY2F0ZUJ1dHRvbiwnbGVhZmxldC1jb250cm9sLWxvY2F0ZS1idXR0b24tLWxvY2F0aW5nJyk7TC5Eb21VdGlsLnJlbW92ZUNsYXNzKHRoaXMuX19sb2NhdGVCdXR0b24sJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uLS1lcnJvcicpO3RoaXMuX19kaXNhYmxlZD1mYWxzZTt0aGlzLl91cGRhdGVEaXNhYmxlZCgpfX0se2tleTonX3VwZGF0ZURpc2FibGVkJyx2YWx1ZTpmdW5jdGlvbiBfdXBkYXRlRGlzYWJsZWQoKXtpZighdGhpcy5fX2xvY2F0ZUJ1dHRvbilyZXR1cm47aWYodGhpcy5fX2Rpc2FibGVkKXtMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fX2xvY2F0ZUJ1dHRvbiwnbGVhZmxldC1jb250cm9sLWxvY2F0ZS1idXR0b24tLWRpc2FibGVkJyl9aWYoIXRoaXMuX19kaXNhYmxlZCl7TC5Eb21VdGlsLnJlbW92ZUNsYXNzKHRoaXMuX19sb2NhdGVCdXR0b24sJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uLS1kaXNhYmxlZCcpfX19XSk7cmV0dXJuIExvY2F0ZUNvbnRyb2x9KEwuQ29udHJvbCk7O1B4TWFwLkxvY2F0ZUNvbnRyb2w9TG9jYXRlQ29udHJvbH0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIjo0LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCI6OCxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiOjE1LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCI6MTYsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0XCI6MTcsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIjoxOCxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI6MTl9XSwxMzE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfZ2V0SXRlcmF0b3IyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3InKTt2YXIgX2dldEl0ZXJhdG9yMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO3ZhciBfa2V5cz1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO3ZhciBfdHlwZW9mMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7dmFyIF90eXBlb2YzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO3ZhciBfYXNzaWduPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7dmFyIF9hc3NpZ24yPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7dmFyIF93ZWFrTWFwPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcCcpO3ZhciBfd2Vha01hcDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vha01hcCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5FbGVtZW50SW1wbD17YmVmb3JlUmVnaXN0ZXI6ZnVuY3Rpb24gYmVmb3JlUmVnaXN0ZXIoKXt0aGlzLmVsZW1lbnRJbnN0PW51bGx9LHNob3VsZEFkZEluc3Q6ZnVuY3Rpb24gc2hvdWxkQWRkSW5zdCgpe2lmKCF0aGlzLmVsZW1lbnRJbnN0KXt2YXIgb3B0aW9ucz10aGlzLl9faW5pdGlhbE9wdGlvbnM9dGhpcy5nZXRJbnN0T3B0aW9ucygpO3RoaXMuZWxlbWVudEluc3Q9dGhpcy5jcmVhdGVJbnN0KG9wdGlvbnMpO3RoaXMuZmlyZSgncHgtbWFwLWVsZW1lbnQtaW5zdGFuY2UtY3JlYXRlZCcpfXRoaXMuX19pbnN0RXZlbnRzPXRoaXMuX19pbnN0RXZlbnRzfHxbXTt0aGlzLl9faW5zdEV2ZW50c0VsZW1lbnRzTWFwPXRoaXMuX19pbnN0RXZlbnRzRWxlbWVudHNNYXB8fG5ldyBfd2Vha01hcDIuZGVmYXVsdH0sc2hvdWxkUmVtb3ZlSW5zdDpmdW5jdGlvbiBzaG91bGRSZW1vdmVJbnN0KCl7dGhpcy51bmJpbmRBbGxFdmVudHModGhpcy5fX2luc3RFdmVudHMsdGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcCk7dGhpcy5fX2luc3RFdmVudHM9bnVsbDt0aGlzLl9faW5zdEV2ZW50c0VsZW1lbnRzTWFwPW51bGx9LHNob3VsZFVwZGF0ZUluc3Q6ZnVuY3Rpb24gc2hvdWxkVXBkYXRlSW5zdCgpe2lmKCF0aGlzLmVsZW1lbnRJbnN0JiZ0aGlzLl9fZWxBdHRhY2hlZCYmdGhpcy5jYW5BZGRJbnN0KCkpe3RoaXMubm90aWZ5SW5zdFJlYWR5KHRoaXMuY2FuQWRkSW5zdCgpKX1pZighdGhpcy5lbGVtZW50SW5zdClyZXR1cm47dmFyIGxhc3RPcHRpb25zPXRoaXMuX19sYXN0T3B0aW9uc3x8dGhpcy5fX2luaXRpYWxPcHRpb25zO3ZhciBuZXh0T3B0aW9ucz10aGlzLmdldEluc3RPcHRpb25zKCk7dGhpcy51cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKTt0aGlzLl9fbGFzdE9wdGlvbnM9bmV4dE9wdGlvbnN9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdCgpe3Rocm93IG5ldyBFcnJvcignVGhlIGBjcmVhdGVJbnN0YCBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZC4nKX0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KCl7dGhyb3cgbmV3IEVycm9yKCdUaGUgYHVwZGF0ZUluc3RgIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLicpfSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3Rocm93IG5ldyBFcnJvcignVGhlIGBnZXRJbnN0T3B0aW9uc2AgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuJyl9LGFkZEluc3Q6ZnVuY3Rpb24gYWRkSW5zdCgpe3Rocm93IG5ldyBFcnJvcignVGhlIGBiaW5kSW5zdGAgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuJyl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdCgpe3Rocm93IG5ldyBFcnJvcignVGhlIGB1bmJpbmRJbnN0YCBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZC4nKX0sZXh0ZW5kT2JqOmZ1bmN0aW9uIGV4dGVuZE9iaihvYmope2lmKCFvYmp8fCEob2JqIGluc3RhbmNlb2YgT2JqZWN0KSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSBmaXJzdCBwYXJhbWV0ZXIgb2YgYGV4dGVuZE9iamAgbXVzdCBiZSBhbiBvYmplY3QgdG8gYmUgbXV0YXRlZC4nKTtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxwcm9wZXJ0aWVzPUFycmF5KF9sZW4+MT9fbGVuLTE6MCksX2tleT0xO19rZXk8X2xlbjtfa2V5Kyspe3Byb3BlcnRpZXNbX2tleS0xXT1hcmd1bWVudHNbX2tleV19aWYocHJvcGVydGllcy5sZW5ndGgpe19hc3NpZ24yLmRlZmF1bHQuYXBwbHkoT2JqZWN0LFtvYmpdLmNvbmNhdChwcm9wZXJ0aWVzKSl9cmV0dXJuIG9ian0sYWRkUHJvcGVydGllczpmdW5jdGlvbiBhZGRQcm9wZXJ0aWVzKCl7dGhpcy5wcm9wZXJ0aWVzPXRoaXMucHJvcGVydGllc3x8e307Zm9yKHZhciBfbGVuMj1hcmd1bWVudHMubGVuZ3RoLHByb3BlcnRpZXM9QXJyYXkoX2xlbjIpLF9rZXkyPTA7X2tleTI8X2xlbjI7X2tleTIrKyl7cHJvcGVydGllc1tfa2V5Ml09YXJndW1lbnRzW19rZXkyXX1pZihwcm9wZXJ0aWVzLmxlbmd0aCl7dGhpcy5leHRlbmQuYXBwbHkodGhpcyxbdGhpcy5wcm9wZXJ0aWVzXS5jb25jYXQocHJvcGVydGllcykpfXJldHVybiB0aGlzLnByb3BlcnRpZXN9LGJpbmRFdmVudHM6ZnVuY3Rpb24gYmluZEV2ZW50cyhldnRzLHRhcmdldCl7aWYoKHR5cGVvZiBldnRzPT09J3VuZGVmaW5lZCc/J3VuZGVmaW5lZCc6KDAsX3R5cGVvZjMuZGVmYXVsdCkoZXZ0cykpIT09J29iamVjdCd8fCEoMCxfa2V5czIuZGVmYXVsdCkoZXZ0cykubGVuZ3RoKXJldHVybjt2YXIgZWw9dGFyZ2V0fHx0aGlzLmVsZW1lbnRJbnN0O2lmKCFlbHx8IWVsLm9uKXJldHVybjt2YXIgYm91bmRFdnRzPXRoaXMuX19pbnN0RXZlbnRzO3ZhciBib3VuZEV2dEVscz10aGlzLl9faW5zdEV2ZW50c0VsZW1lbnRzTWFwO2Zvcih2YXIgZXZ0TmFtZSBpbiBldnRzKXt2YXIgZXZ0UmVmZXJlbmNlPXtuYW1lOmV2dE5hbWUsZm46ZXZ0c1tldnROYW1lXX07ZWwub24oZXZ0UmVmZXJlbmNlLm5hbWUsZXZ0UmVmZXJlbmNlLmZuKTtib3VuZEV2dHMucHVzaChldnRSZWZlcmVuY2UpO2JvdW5kRXZ0RWxzLnNldChldnRSZWZlcmVuY2UsZWwpfX0sdW5iaW5kQWxsRXZlbnRzOmZ1bmN0aW9uIHVuYmluZEFsbEV2ZW50cyhib3VuZEV2dHMsYm91bmRFdnRFbHMpe2lmKCFib3VuZEV2dHN8fCFib3VuZEV2dHMubGVuZ3RofHwhYm91bmRFdnRFbHMpcmV0dXJuO3ZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPXRydWU7dmFyIF9kaWRJdGVyYXRvckVycm9yPWZhbHNlO3ZhciBfaXRlcmF0b3JFcnJvcj11bmRlZmluZWQ7dHJ5e2Zvcih2YXIgX2l0ZXJhdG9yPSgwLF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYm91bmRFdnRzKSxfc3RlcDshKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb249KF9zdGVwPV9pdGVyYXRvci5uZXh0KCkpLmRvbmUpO19pdGVyYXRvck5vcm1hbENvbXBsZXRpb249dHJ1ZSl7dmFyIGV2dD1fc3RlcC52YWx1ZTt2YXIgZWw9Ym91bmRFdnRFbHMuZ2V0KGV2dCk7aWYoIWVsfHwhZWwub2ZmKWNvbnRpbnVlO3ZhciBuYW1lPWV2dC5uYW1lLGZuPWV2dC5mbjtlbC5vZmYobmFtZSxmbik7Ym91bmRFdnRFbHMuZGVsZXRlKGV2dCl9fWNhdGNoKGVycil7X2RpZEl0ZXJhdG9yRXJyb3I9dHJ1ZTtfaXRlcmF0b3JFcnJvcj1lcnJ9ZmluYWxseXt0cnl7aWYoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24mJl9pdGVyYXRvci5yZXR1cm4pe19pdGVyYXRvci5yZXR1cm4oKX19ZmluYWxseXtpZihfZGlkSXRlcmF0b3JFcnJvcil7dGhyb3cgX2l0ZXJhdG9yRXJyb3J9fX19LGlzU2hhZHlTY29wZWQ6ZnVuY3Rpb24gaXNTaGFkeVNjb3BlZCgpe3JldHVybiFQb2x5bWVyLlNldHRpbmdzLnVzZU5hdGl2ZVNoYWRvd30sZ2V0U2hhZHlTY29wZTpmdW5jdGlvbiBnZXRTaGFkeVNjb3BlKCl7cmV0dXJuJ3N0eWxlLXNjb3BlIHB4LW1hcCd9fTtQeE1hcEJlaGF2aW9yLkVsZW1lbnQ9W1B4TWFwQmVoYXZpb3IuRWxlbWVudEltcGxdfSkoKTtcblxufSx7XCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCI6MSxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCI6NCxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjksXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvd2Vhay1tYXBcIjoxNCxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIjoyMX1dLDEzMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEJlaGF2aW9yPXdpbmRvdy5QeE1hcEJlaGF2aW9yfHx7fTtQeE1hcEJlaGF2aW9yLkxheWVyR3JvdXBJbXBsPXtwcm9wZXJ0aWVzOntuYW1lOnt0eXBlOlN0cmluZyxub3RpZnk6dHJ1ZX19LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdCgpe3JldHVybiBMLmxheWVyR3JvdXAoKX0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KCl7cmV0dXJuIHVuZGVmaW5lZH0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXtyZXR1cm57fX19O1B4TWFwQmVoYXZpb3IuTGF5ZXJHcm91cD1bUHhNYXBCZWhhdmlvci5MYXllcixQeE1hcEJlaGF2aW9yLlBhcmVudExheWVyLFB4TWFwQmVoYXZpb3IuTGF5ZXJHcm91cEltcGxdfSkoKTtcblxufSx7fV0sMTMzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX2tleXM9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7dmFyIF9rZXlzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTt2YXIgX2NsYXNzQ2FsbENoZWNrMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTt2YXIgX2NsYXNzQ2FsbENoZWNrMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO3ZhciBfY3JlYXRlQ2xhc3MyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO3ZhciBfY3JlYXRlQ2xhc3MzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXA9d2luZG93LlB4TWFwfHx7fTt2YXIgU3RhdGljSWNvbj1mdW5jdGlvbigpe2Z1bmN0aW9uIFN0YXRpY0ljb24oKXt2YXIgc2V0dGluZ3M9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9OygwLF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcyxTdGF0aWNJY29uKTt0aGlzLmljb249dGhpcy5jcmVhdGVJY29uKHNldHRpbmdzKTtyZXR1cm4gdGhpcy5pY29ufSgwLF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoU3RhdGljSWNvbixbe2tleTonY3JlYXRlSWNvbicsdmFsdWU6ZnVuY3Rpb24gY3JlYXRlSWNvbigpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307dmFyIF9zZXR0aW5ncyR0eXBlPXNldHRpbmdzLnR5cGUsdHlwZT1fc2V0dGluZ3MkdHlwZT09PXVuZGVmaW5lZD8naW5mbyc6X3NldHRpbmdzJHR5cGUsX3NldHRpbmdzJGJhZGdlPXNldHRpbmdzLmJhZGdlLGJhZGdlPV9zZXR0aW5ncyRiYWRnZT09PXVuZGVmaW5lZD9mYWxzZTpfc2V0dGluZ3MkYmFkZ2Usc3R5bGVTY29wZT1zZXR0aW5ncy5zdHlsZVNjb3BlO3ZhciBjbGFzc05hbWU9dGhpcy5fZ2VuZXJhdGVTdGF0aWNJY29uQ2xhc3Nlcyh0eXBlLGJhZGdlLHN0eWxlU2NvcGUpO3ZhciBodG1sPSdcXG4gICAgICAgIDxpIGNsYXNzPVwibWFwLWljb24tc3RhdGljX19ib2R5XCI+PC9pPlxcbiAgICAgICAgPGkgY2xhc3M9XCJtYXAtaWNvbi1zdGF0aWNfX2Rlc2NlbmRlclwiPjwvaT5cXG4gICAgICAgIDxpIGNsYXNzPVwibWFwLWljb24tc3RhdGljX19iYWRnZVwiPjwvaT5cXG4gICAgICAnO3ZhciBpY29uU2l6ZT1MLnBvaW50KDUwLDUwKTt2YXIgaWNvbkFuY2hvcj1MLnBvaW50KDkuOCw0MC4zKTt2YXIgcG9wdXBBbmNob3I9TC5wb2ludCgxLC0zOCk7dmFyIG9wdGlvbnM9e2NsYXNzTmFtZTpjbGFzc05hbWUsaHRtbDpodG1sLGljb25TaXplOmljb25TaXplLGljb25BbmNob3I6aWNvbkFuY2hvcixwb3B1cEFuY2hvcjpwb3B1cEFuY2hvcn07cmV0dXJuIEwuZGl2SWNvbihvcHRpb25zKX19LHtrZXk6J19nZW5lcmF0ZVN0YXRpY0ljb25DbGFzc2VzJyx2YWx1ZTpmdW5jdGlvbiBfZ2VuZXJhdGVTdGF0aWNJY29uQ2xhc3Nlcyh0eXBlLGJhZGdlLHN0eWxlU2NvcGUpe3ZhciBjbGFzc2VzPVsnbWFwLWljb24nLCdtYXAtaWNvbi1zdGF0aWMnXTtpZih0eXBlJiZ0eXBlLmxlbmd0aCl7Y2xhc3Nlcy5wdXNoKCdtYXAtaWNvbi1zdGF0aWMtLScrdHlwZSl9aWYoYmFkZ2Upe2NsYXNzZXMucHVzaCgnbWFwLWljb24tc3RhdGljLS13aXRoLWJhZGdlJyl9aWYoc3R5bGVTY29wZSl7Y2xhc3Nlcy5wdXNoKHN0eWxlU2NvcGUpfXJldHVybiBjbGFzc2VzLmpvaW4oJyAnKX19XSk7cmV0dXJuIFN0YXRpY0ljb259KCk7O1B4TWFwLlN0YXRpY0ljb249U3RhdGljSWNvbjt2YXIgU3ltYm9sSWNvbj1mdW5jdGlvbigpe2Z1bmN0aW9uIFN5bWJvbEljb24oKXt2YXIgc2V0dGluZ3M9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9OygwLF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcyxTeW1ib2xJY29uKTt0aGlzLmljb249dGhpcy5jcmVhdGVJY29uKHNldHRpbmdzKTtyZXR1cm4gdGhpcy5pY29ufSgwLF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoU3ltYm9sSWNvbixbe2tleTonY3JlYXRlSWNvbicsdmFsdWU6ZnVuY3Rpb24gY3JlYXRlSWNvbigpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307dmFyIF9zZXR0aW5ncyR0eXBlMj1zZXR0aW5ncy50eXBlLHR5cGU9X3NldHRpbmdzJHR5cGUyPT09dW5kZWZpbmVkPydpbmZvJzpfc2V0dGluZ3MkdHlwZTIsX3NldHRpbmdzJGJhZGdlMj1zZXR0aW5ncy5iYWRnZSxiYWRnZT1fc2V0dGluZ3MkYmFkZ2UyPT09dW5kZWZpbmVkP2ZhbHNlOl9zZXR0aW5ncyRiYWRnZTIsX3NldHRpbmdzJHN5bWJvbD1zZXR0aW5ncy5zeW1ib2wsc3ltYm9sPV9zZXR0aW5ncyRzeW1ib2w9PT11bmRlZmluZWQ/J2ZhIGZhLWJvbHQnOl9zZXR0aW5ncyRzeW1ib2wsc3R5bGVTY29wZT1zZXR0aW5ncy5zdHlsZVNjb3BlO3ZhciBjbGFzc05hbWU9dGhpcy5fZ2VuZXJhdGVTeW1ib2xJY29uQ2xhc3Nlcyh0eXBlLGJhZGdlLHN0eWxlU2NvcGUpO3ZhciBodG1sPSdcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtaWNvbi1zeW1ib2xfX3dyYXBwZXJcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XCJtYXAtaWNvbi1zeW1ib2xfX2JvZHlcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWljb24tc3ltYm9sX19zeW1ib2wtLWNvbnRhaW5lciBmbGV4IGZsZXgtLW1pZGRsZSBmbGV4LS1jZW50ZXJcIj5cXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibWFwLWljb24tc3ltYm9sX19zeW1ib2wgJytzeW1ib2wrJ1wiPjwvaT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9pPlxcbiAgICAgICAgICA8aSBjbGFzcz1cIm1hcC1pY29uLXN5bWJvbF9fZGVzY2VuZGVyXCI+PC9pPlxcbiAgICAgICAgICA8aSBjbGFzcz1cIm1hcC1pY29uLXN5bWJvbF9fYmFkZ2VcIj48L2k+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAnO3ZhciBpY29uU2l6ZT1MLnBvaW50KDU1LDY2KTt2YXIgaWNvbkFuY2hvcj1MLnBvaW50KDE5LjgsNjUpO3ZhciBwb3B1cEFuY2hvcj1MLnBvaW50KDEsLTM4KTt2YXIgb3B0aW9ucz17Y2xhc3NOYW1lOmNsYXNzTmFtZSxodG1sOmh0bWwsaWNvblNpemU6aWNvblNpemUsaWNvbkFuY2hvcjppY29uQW5jaG9yLHBvcHVwQW5jaG9yOnBvcHVwQW5jaG9yfTtyZXR1cm4gTC5kaXZJY29uKG9wdGlvbnMpfX0se2tleTonX2dlbmVyYXRlU3ltYm9sSWNvbkNsYXNzZXMnLHZhbHVlOmZ1bmN0aW9uIF9nZW5lcmF0ZVN5bWJvbEljb25DbGFzc2VzKHR5cGUsYmFkZ2Usc3R5bGVTY29wZSl7dmFyIGNsYXNzZXM9WydtYXAtaWNvbicsJ21hcC1pY29uLXN5bWJvbCddO2lmKHR5cGUmJnR5cGUubGVuZ3RoKXtjbGFzc2VzLnB1c2goJ21hcC1pY29uLXN5bWJvbC0tJyt0eXBlKX1pZihiYWRnZSl7Y2xhc3Nlcy5wdXNoKCdtYXAtaWNvbi1zeW1ib2wtLXdpdGgtYmFkZ2UnKX1pZihzdHlsZVNjb3BlKXtjbGFzc2VzLnB1c2goc3R5bGVTY29wZSl9cmV0dXJuIGNsYXNzZXMuam9pbignICcpfX1dKTtyZXR1cm4gU3ltYm9sSWNvbn0oKTs7UHhNYXAuU3ltYm9sSWNvbj1TeW1ib2xJY29uO3ZhciBDbHVzdGVySWNvbj1mdW5jdGlvbigpe2Z1bmN0aW9uIENsdXN0ZXJJY29uKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTsoMCxfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsQ2x1c3Rlckljb24pO3RoaXMuaWNvbj10aGlzLmNyZWF0ZUljb24oc2V0dGluZ3MpO3JldHVybiB0aGlzLmljb259KDAsX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShDbHVzdGVySWNvbixbe2tleTonY3JlYXRlSWNvbicsdmFsdWU6ZnVuY3Rpb24gY3JlYXRlSWNvbigpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307dmFyIGNvdW50PXNldHRpbmdzLmNvdW50LGNvdW50QnlUeXBlPXNldHRpbmdzLmNvdW50QnlUeXBlLGNvbG9yc0J5VHlwZT1zZXR0aW5ncy5jb2xvcnNCeVR5cGUsX3NldHRpbmdzJGNvbnRhaW5lclNpPXNldHRpbmdzLmNvbnRhaW5lclNpemUsY29udGFpbmVyU2l6ZT1fc2V0dGluZ3MkY29udGFpbmVyU2k9PT11bmRlZmluZWQ/NTA6X3NldHRpbmdzJGNvbnRhaW5lclNpLF9zZXR0aW5ncyRwYXRoU2l6ZT1zZXR0aW5ncy5wYXRoU2l6ZSxwYXRoU2l6ZT1fc2V0dGluZ3MkcGF0aFNpemU9PT11bmRlZmluZWQ/MTA6X3NldHRpbmdzJHBhdGhTaXplLF9zZXR0aW5ncyRib3JkZXJTaXplPXNldHRpbmdzLmJvcmRlclNpemUsYm9yZGVyU2l6ZT1fc2V0dGluZ3MkYm9yZGVyU2l6ZT09PXVuZGVmaW5lZD8wOl9zZXR0aW5ncyRib3JkZXJTaXplLF9zZXR0aW5ncyRjbGFzc05hbWU9c2V0dGluZ3MuY2xhc3NOYW1lLGNsYXNzTmFtZT1fc2V0dGluZ3MkY2xhc3NOYW1lPT09dW5kZWZpbmVkPycnOl9zZXR0aW5ncyRjbGFzc05hbWUsc3R5bGVTY29wZT1zZXR0aW5ncy5zdHlsZVNjb3BlO3ZhciBjaGFydFNpemU9Y29udGFpbmVyU2l6ZS0oYm9yZGVyU2l6ZT4wP2JvcmRlclNpemUqMi0wLjU6MCk7dmFyIGljb25TaXplPUwucG9pbnQoY29udGFpbmVyU2l6ZSxjb250YWluZXJTaXplKTt2YXIgc3ZnPXRoaXMuX2dlbmVyYXRlQ2x1c3Rlckljb25TVkcoY291bnRCeVR5cGUsY29sb3JzQnlUeXBlLGNoYXJ0U2l6ZSxwYXRoU2l6ZSk7dmFyIGNsYXNzZXM9J21hcC1pY29uLWNsdXN0ZXIgJysoY2xhc3NOYW1lfHwnJykrJyAnKyhzdHlsZVNjb3BlfHwnJyk7dmFyIGh0bWw9J1xcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1pY29uLWNsdXN0ZXJfX2NvbnRhaW5lclwiIHN0eWxlPVwid2lkdGg6ICcrY29udGFpbmVyU2l6ZSsncHg7IGhlaWdodDogJytjb250YWluZXJTaXplKydweFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cIm1hcC1pY29uLWNsdXN0ZXJfX3N2Z1wiPicrc3ZnKyc8L2k+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtaWNvbi1jbHVzdGVyX19ib2R5XCI+Jytjb3VudCsnPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAnO3ZhciBvcHRpb25zPXtpY29uU2l6ZTppY29uU2l6ZSxjbGFzc05hbWU6Y2xhc3NlcyxodG1sOmh0bWx9O3JldHVybiBMLmRpdkljb24ob3B0aW9ucyl9fSx7a2V5OidfZ2VuZXJhdGVDbHVzdGVySWNvblNWRycsdmFsdWU6ZnVuY3Rpb24gX2dlbmVyYXRlQ2x1c3Rlckljb25TVkcoY291bnRCeVR5cGUsY29sb3JzQnlUeXBlLGNoYXJ0U2l6ZSxwYXRoU2l6ZSl7dmFyIHR5cGVLZXlzPSgwLF9rZXlzMi5kZWZhdWx0KShjb3VudEJ5VHlwZSk7dmFyIHR5cGVPYmpzPXR5cGVLZXlzLm1hcChmdW5jdGlvbih0eXBlKXtyZXR1cm57dHlwZTp0eXBlLGNvdW50OmNvdW50QnlUeXBlW3R5cGVdLGNvbG9yOmNvbG9yc0J5VHlwZVt0eXBlXX19KTt0eXBlT2Jqcy5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuY291bnQtYi5jb3VudH0pO3ZhciB0eXBlcz1bXTt2YXIgY29sb3JzPVtdO3ZhciBpPXZvaWQgMCxsZW49dm9pZCAwLHR5cGU9dm9pZCAwLHRvdGFsPXZvaWQgMDtmb3IoaT0wLGxlbj10eXBlS2V5cy5sZW5ndGg7aTxsZW47aSsrKXt0eXBlPXR5cGVLZXlzW2ldO3RvdGFsPWNvdW50QnlUeXBlW3R5cGVdO3R5cGVzLnB1c2goY291bnRCeVR5cGVbdHlwZV0pO2NvbG9ycy5wdXNoKGNvbG9yc0J5VHlwZVt0eXBlXSl9cmV0dXJuIHRoaXMuY3JlYXRlUGllQ2hhcnQodHlwZXMsY29sb3JzLGNoYXJ0U2l6ZSxwYXRoU2l6ZSl9fSx7a2V5OidjcmVhdGVQaWVDaGFydCcsdmFsdWU6ZnVuY3Rpb24gY3JlYXRlUGllQ2hhcnQoZ3JvdXBzQXJyYXksY29sb3JzQXJyYXksY2hhcnRTaXplLHBhdGhTaXplKXt2YXIgcGllR2VuZXJhdG9yRm49UHguZDMucGllKCk7dmFyIGFyY0RhdGE9cGllR2VuZXJhdG9yRm4oZ3JvdXBzQXJyYXkpO3ZhciByYWRpdXM9Y2hhcnRTaXplLzI7dmFyIGlubmVyUmFkaXVzPXJhZGl1cy1wYXRoU2l6ZTt2YXIgYXJjUGF0aEdlbmVyYXRvckZuPVB4LmQzLmFyYygpLm91dGVyUmFkaXVzKHJhZGl1cykuaW5uZXJSYWRpdXMoaW5uZXJSYWRpdXMpO3ZhciBwYXRoTGlzdFRtcGw9ZnVuY3Rpb24gcGF0aExpc3RUbXBsKHBhdGhzKXtyZXR1cm4gcGF0aHMubWFwKHBhdGhUbXBsKS5qb2luKCcnKX07dmFyIHBhdGhUbXBsPWZ1bmN0aW9uIHBhdGhUbXBsKHBhdGhEYXRhLHBhdGhJbmRleCl7cmV0dXJuJzxwYXRoIGQ9XCInK2FyY1BhdGhHZW5lcmF0b3JGbihwYXRoRGF0YSkrJ1wiIGZpbGw9XCInK2NvbG9yc0FycmF5W3BhdGhJbmRleF0rJ1wiIG9wYWNpdHk9XCIxXCI+PC9wYXRoPid9O3JldHVybidcXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiB3aWR0aD1cIicrY2hhcnRTaXplKydcIiBoZWlnaHQ9XCInK2NoYXJ0U2l6ZSsnXCI+XFxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCcrcmFkaXVzKycsICcrcmFkaXVzKycpXCI+XFxuICAgICAgICAgICAgICAgICcrcGF0aExpc3RUbXBsKGFyY0RhdGEpKydcXG4gICAgICAgICAgICA8L2c+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgICAnfX1dKTtyZXR1cm4gQ2x1c3Rlckljb259KCk7O1B4TWFwLkNsdXN0ZXJJY29uPUNsdXN0ZXJJY29ufSkoKTtcblxufSx7XCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjo5LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCI6MTUsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIjoxNn1dLDEzNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7dmFyIF9nZXRJdGVyYXRvcjI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvcicpO3ZhciBfZ2V0SXRlcmF0b3IzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7dmFyIF93ZWFrTWFwPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcCcpO3ZhciBfd2Vha01hcDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vha01hcCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5MYXllckltcGw9e2F0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5fX2VsQXR0YWNoZWQ9dHJ1ZTt0aGlzLm5vdGlmeUluc3RSZWFkeSh0aGlzLmNhbkFkZEluc3QoKSl9LGRldGFjaGVkOmZ1bmN0aW9uIGRldGFjaGVkKCl7dGhpcy5fX2VsQXR0YWNoZWQ9ZmFsc2U7dGhpcy5zaG91bGRSZW1vdmVJbnN0KCl9LHNob3VsZEFkZEluc3Q6ZnVuY3Rpb24gc2hvdWxkQWRkSW5zdChwYXJlbnQpe1B4TWFwQmVoYXZpb3IuRWxlbWVudEltcGwuc2hvdWxkQWRkSW5zdC5jYWxsKHRoaXMscGFyZW50KTtpZih0aGlzLmVsZW1lbnRJbnN0JiZwYXJlbnQpe3RoaXMuYWRkSW5zdChwYXJlbnQpfTt9LHNob3VsZFJlbW92ZUluc3Q6ZnVuY3Rpb24gc2hvdWxkUmVtb3ZlSW5zdChwYXJlbnQpe1B4TWFwQmVoYXZpb3IuRWxlbWVudEltcGwuc2hvdWxkQWRkSW5zdC5jYWxsKHRoaXMscGFyZW50KTtpZih0aGlzLmVsZW1lbnRJbnN0KXt0aGlzLnJlbW92ZUluc3QocGFyZW50P3BhcmVudDp1bmRlZmluZWQpfTt9LGFkZEluc3Q6ZnVuY3Rpb24gYWRkSW5zdChwYXJlbnQpe3BhcmVudC5hZGRMYXllcih0aGlzLmVsZW1lbnRJbnN0KX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KHBhcmVudCl7dGhpcy5lbGVtZW50SW5zdC5yZW1vdmUoKX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRydWV9LG5vdGlmeUluc3RSZWFkeTpmdW5jdGlvbiBub3RpZnlJbnN0UmVhZHkoKXt2YXIgaXNSZWFkeT1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06dHJ1ZTtpZighaXNSZWFkeSlyZXR1cm4gZmFsc2U7dGhpcy5maXJlKCdweC1tYXAtbGF5ZXItcmVhZHktdG8tYWRkJyk7cmV0dXJuIHRydWV9fTtQeE1hcEJlaGF2aW9yLkxheWVyPVtQeE1hcEJlaGF2aW9yLkVsZW1lbnQsUHhNYXBCZWhhdmlvci5MYXllckltcGxdO1B4TWFwQmVoYXZpb3IuUGFyZW50TGF5ZXJJbXBsPXtsaXN0ZW5lcnM6eydweC1tYXAtZWxlbWVudC1pbnN0YW5jZS1jcmVhdGVkJzonX3RyeVRvQWRkQWxsQ2hpbGRyZW4nLCdweC1tYXAtbGF5ZXItcmVhZHktdG8tYWRkJzonX3RyeVRvQWRkT25lQ2hpbGQnfSxjcmVhdGVkOmZ1bmN0aW9uIGNyZWF0ZWQoKXt0aGlzLl9hdHRhY2hlZENoaWxkcmVuPXRoaXMuX2F0dGFjaGVkQ2hpbGRyZW58fG5ldyBfd2Vha01hcDIuZGVmYXVsdH0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLl9kZXRhY2hMYXllckNoaWxkcmVuKCl9LF90cnlUb0FkZEFsbENoaWxkcmVuOmZ1bmN0aW9uIF90cnlUb0FkZEFsbENoaWxkcmVuKGV2dCl7dmFyIGxvY2FsRXZ0PVBvbHltZXIuZG9tKGV2dCk7aWYoIXRoaXMuZWxlbWVudEluc3R8fGxvY2FsRXZ0LnJvb3RUYXJnZXQhPT10aGlzKXJldHVybjt0aGlzLl9hdHRhY2hMYXllckNoaWxkcmVuKCl9LF90cnlUb0FkZE9uZUNoaWxkOmZ1bmN0aW9uIF90cnlUb0FkZE9uZUNoaWxkKGV2dCl7dmFyIGxvY2FsRXZ0PVBvbHltZXIuZG9tKGV2dCk7aWYobG9jYWxFdnQucm9vdFRhcmdldD09PXRoaXMpcmV0dXJuO2V2dC5zdG9wUHJvcGFnYXRpb24oKTtpZighdGhpcy5lbGVtZW50SW5zdClyZXR1cm47dGhpcy5fYXR0YWNoTGF5ZXJDaGlsZChsb2NhbEV2dC5yb290VGFyZ2V0KX0sX2F0dGFjaExheWVyQ2hpbGRyZW46ZnVuY3Rpb24gX2F0dGFjaExheWVyQ2hpbGRyZW4oKXt2YXIgY2hpbGRyZW49dGhpcy5nZXRFZmZlY3RpdmVDaGlsZHJlbigpO2lmKCFjaGlsZHJlbnx8IWNoaWxkcmVuLmxlbmd0aClyZXR1cm47dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb249dHJ1ZTt2YXIgX2RpZEl0ZXJhdG9yRXJyb3I9ZmFsc2U7dmFyIF9pdGVyYXRvckVycm9yPXVuZGVmaW5lZDt0cnl7Zm9yKHZhciBfaXRlcmF0b3I9KDAsX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShjaGlsZHJlbiksX3N0ZXA7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPShfc3RlcD1faXRlcmF0b3IubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPXRydWUpe3ZhciBjaGlsZD1fc3RlcC52YWx1ZTt0aGlzLl9hdHRhY2hMYXllckNoaWxkKGNoaWxkKX19Y2F0Y2goZXJyKXtfZGlkSXRlcmF0b3JFcnJvcj10cnVlO19pdGVyYXRvckVycm9yPWVycn1maW5hbGx5e3RyeXtpZighX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiYmX2l0ZXJhdG9yLnJldHVybil7X2l0ZXJhdG9yLnJldHVybigpfX1maW5hbGx5e2lmKF9kaWRJdGVyYXRvckVycm9yKXt0aHJvdyBfaXRlcmF0b3JFcnJvcn19fX0sX2F0dGFjaExheWVyQ2hpbGQ6ZnVuY3Rpb24gX2F0dGFjaExheWVyQ2hpbGQoY2hpbGRFbCl7dmFyIF90aGlzPXRoaXM7aWYodGhpcy5fYXR0YWNoZWRDaGlsZHJlbi5oYXMoY2hpbGRFbCl8fCFjaGlsZEVsLnNob3VsZEFkZEluc3R8fCFjaGlsZEVsLmNhbkFkZEluc3R8fCFjaGlsZEVsLmNhbkFkZEluc3QoKSlyZXR1cm47dGhpcy5fYXR0YWNoZWRDaGlsZHJlbi5zZXQoY2hpbGRFbCx0cnVlKTt0aGlzLmFzeW5jKGZ1bmN0aW9uKCl7Y2hpbGRFbC5zaG91bGRBZGRJbnN0KF90aGlzLmVsZW1lbnRJbnN0KX0pfSxfZGV0YWNoTGF5ZXJDaGlsZHJlbjpmdW5jdGlvbiBfZGV0YWNoTGF5ZXJDaGlsZHJlbigpe3ZhciBjaGlsZHJlbj10aGlzLmdldEVmZmVjdGl2ZUNoaWxkcmVuKCk7aWYoIWNoaWxkcmVufHwhY2hpbGRyZW4ubGVuZ3RoKXJldHVybjt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjI9dHJ1ZTt2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyPWZhbHNlO3ZhciBfaXRlcmF0b3JFcnJvcjI9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcjI9KDAsX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShjaGlsZHJlbiksX3N0ZXAyOyEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjI9KF9zdGVwMj1faXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7X2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjI9dHJ1ZSl7dmFyIGNoaWxkPV9zdGVwMi52YWx1ZTt0aGlzLl9kZXRhY2hMYXllckNoaWxkKGNoaWxkKX19Y2F0Y2goZXJyKXtfZGlkSXRlcmF0b3JFcnJvcjI9dHJ1ZTtfaXRlcmF0b3JFcnJvcjI9ZXJyfWZpbmFsbHl7dHJ5e2lmKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiYmX2l0ZXJhdG9yMi5yZXR1cm4pe19pdGVyYXRvcjIucmV0dXJuKCl9fWZpbmFsbHl7aWYoX2RpZEl0ZXJhdG9yRXJyb3IyKXt0aHJvdyBfaXRlcmF0b3JFcnJvcjJ9fX19LF9kZXRhY2hMYXllckNoaWxkOmZ1bmN0aW9uIF9kZXRhY2hMYXllckNoaWxkKGNoaWxkRWwpe3ZhciBfdGhpczI9dGhpcztpZighdGhpcy5fYXR0YWNoZWRDaGlsZHJlbi5oYXMoY2hpbGRFbCl8fCFjaGlsZEVsLnNob3VsZFJlbW92ZUluc3QpcmV0dXJuO3RoaXMuX2F0dGFjaGVkQ2hpbGRyZW4uZGVsZXRlKGNoaWxkRWwpO3RoaXMuYXN5bmMoZnVuY3Rpb24oKXtjaGlsZEVsLnNob3VsZFJlbW92ZUluc3QoX3RoaXMyLmVsZW1lbnRJbnN0KX0pfX07UHhNYXBCZWhhdmlvci5QYXJlbnRMYXllcj1bUHhNYXBCZWhhdmlvci5QYXJlbnRMYXllckltcGxdfSkoKTtcblxufSx7XCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCI6MSxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcFwiOjE0fV0sMTM1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX2tleXM9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7dmFyIF9rZXlzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTt2YXIgX3NsaWNlZFRvQXJyYXkyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5Jyk7dmFyIF9zbGljZWRUb0FycmF5Mz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zbGljZWRUb0FycmF5Mik7dmFyIF9zdHJpbmdpZnk9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5Jyk7dmFyIF9zdHJpbmdpZnkyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmeSk7dmFyIF9nZXRJdGVyYXRvcjI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvcicpO3ZhciBfZ2V0SXRlcmF0b3IzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7dmFyIF93ZWFrTWFwPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcCcpO3ZhciBfd2Vha01hcDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vha01hcCk7dmFyIF9zZXQ9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL3NldCcpO3ZhciBfc2V0Mj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXQpO3ZhciBfdHlwZW9mMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7dmFyIF90eXBlb2YzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO3ZhciBfYXNzaWduPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7dmFyIF9hc3NpZ24yPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5NYXJrZXJHcm91cEltcGw9e3Byb3BlcnRpZXM6e25hbWU6e3R5cGU6U3RyaW5nLG5vdGlmeTp0cnVlfSxkYXRhOnt0eXBlOk9iamVjdCxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGNvbG9yc0J5VHlwZTp7dHlwZTpPYmplY3QsdmFsdWU6ZnVuY3Rpb24gdmFsdWUoKXtyZXR1cm57J3Vua25vd24nOnRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWludGVybmFsLXB4LW1hcC1pY29uLXVua25vd24tY29sb3InKSwnaW5mbyc6dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLWljb24taW5mby1jb2xvcicpLCd3YXJuaW5nJzp0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1pbnRlcm5hbC1weC1tYXAtaWNvbi13YXJuaW5nLWNvbG9yJyksJ2ltcG9ydGFudCc6dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLWljb24taW1wb3J0YW50LWNvbG9yJyl9fX0saWNvbkZuczp7dHlwZTpPYmplY3QsdmFsdWU6ZnVuY3Rpb24gdmFsdWUoKXtyZXR1cm57Y2x1c3Rlcjp1bmRlZmluZWQsbWFya2VyOnVuZGVmaW5lZH19fSxjbHVzdGVyQ29uZmlnOnt0eXBlOk9iamVjdH19LHVwZGF0ZTpmdW5jdGlvbiB1cGRhdGUoKXtpZighdGhpcy5lbGVtZW50SW5zdClyZXR1cm47dmFyIF9nZXRJbnN0T3B0aW9ucz10aGlzLmdldEluc3RPcHRpb25zKCksZGF0YT1fZ2V0SW5zdE9wdGlvbnMuZGF0YTt0aGlzLl9zeW5jRGF0YVdpdGhNYXJrZXJzKGRhdGEuZmVhdHVyZXMsdGhpcy5lbGVtZW50SW5zdCl9LGFkZEluc3Q6ZnVuY3Rpb24gYWRkSW5zdChwYXJlbnQpe1B4TWFwQmVoYXZpb3IuTGF5ZXJJbXBsLmFkZEluc3QuY2FsbCh0aGlzLHBhcmVudCk7dmFyIHNwaWRlcmlmeUZuPXRoaXMuX2hhbmRsZUNsdXN0ZXJTcGlkZXJpZnkuYmluZCh0aGlzKTt2YXIgdW5zcGlkZXJpZnlGbj10aGlzLl9oYW5kbGVDbHVzdGVyVW5zcGlkZXJpZnkuYmluZCh0aGlzKTt0aGlzLmJpbmRFdmVudHMoeydzcGlkZXJmaWVkJzpzcGlkZXJpZnlGbiwndW5zcGlkZXJmaWVkJzp1bnNwaWRlcmlmeUZufSl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdChwYXJlbnQpe1B4TWFwQmVoYXZpb3IuTGF5ZXJJbXBsLnJlbW92ZUluc3QuY2FsbCh0aGlzLHBhcmVudCl9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdCgpe3ZhciBvcHRpb25zPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTt2YXIgY2x1c3Rlcj1MLm1hcmtlckNsdXN0ZXJHcm91cChvcHRpb25zKTtpZihvcHRpb25zLmRhdGEpe3RoaXMuX3N5bmNEYXRhV2l0aE1hcmtlcnMob3B0aW9ucy5kYXRhLmZlYXR1cmVzLGNsdXN0ZXIpfXJldHVybiBjbHVzdGVyfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe2lmKG5leHRPcHRpb25zLmRhdGEmJm5leHRPcHRpb25zLmRhdGEuZmVhdHVyZXMmJm5leHRPcHRpb25zLmRhdGEuZmVhdHVyZXMubGVuZ3RoKXt0aGlzLl9zeW5jRGF0YVdpdGhNYXJrZXJzKG5leHRPcHRpb25zLmRhdGEuZmVhdHVyZXMsdGhpcy5lbGVtZW50SW5zdCk7dGhpcy5maXJlKCdweC1tYXAtbWFya2VyLWdyb3VwLWFkZCcpfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt2YXIgZGVmYXVsdE9wdGlvbnM9e3Nob3dDb3ZlcmFnZU9uSG92ZXI6dHJ1ZSxtYXhDbHVzdGVyUmFkaXVzOjE1MCxzcGlkZXJpZnlPbk1heFpvb206dHJ1ZSxyZW1vdmVPdXRzaWRlVmlzaWJsZUJvdW5kczp0cnVlLGFuaW1hdGU6dHJ1ZSxwb2x5Z29uT3B0aW9uczp7c3Ryb2tlOnRydWUsY29sb3I6dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLW1hcmtlci1ncm91cC1jbHVzdGVyLXBvbHlnb24tc3Ryb2tlLWNvbG9yJyksZmlsbENvbG9yOnRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWludGVybmFsLXB4LW1hcC1tYXJrZXItZ3JvdXAtY2x1c3Rlci1wb2x5Z29uLWZpbGwtY29sb3InKSxmaWxsT3BhY2l0eTowLjR9fTt2YXIgb3B0aW9ucz0oMCxfYXNzaWduMi5kZWZhdWx0KShkZWZhdWx0T3B0aW9ucyx0aGlzLmNsdXN0ZXJDb25maWd8fHt9KTtvcHRpb25zLmRhdGE9dGhpcy5fZ2V0VmFsaWREYXRhKCk7b3B0aW9ucy5pY29uQ3JlYXRlRnVuY3Rpb249dGhpcy5fY3JlYXRlQ2x1c3Rlckljb24uYmluZCh0aGlzKTtyZXR1cm4gb3B0aW9uc30sX2dldFZhbGlkRGF0YTpmdW5jdGlvbiBfZ2V0VmFsaWREYXRhKCl7aWYoIXRoaXMuZGF0YSl7cmV0dXJuIHVuZGVmaW5lZH12YXIgZGF0YUlzTm90VmFsaWQ9KDAsX3R5cGVvZjMuZGVmYXVsdCkodGhpcy5kYXRhKSE9PSdvYmplY3QnfHx0aGlzLmRhdGEudHlwZSE9PSdGZWF0dXJlQ29sbGVjdGlvbid8fCFBcnJheS5pc0FycmF5KHRoaXMuZGF0YS5mZWF0dXJlcyl8fCF0aGlzLmRhdGEuZmVhdHVyZXMubGVuZ3RofHwoMCxfdHlwZW9mMy5kZWZhdWx0KSh0aGlzLmRhdGEuZmVhdHVyZXNbMF0pIT09J29iamVjdCc7aWYoZGF0YUlzTm90VmFsaWQpe2NvbnNvbGUubG9nKCdQWC1NQVAgQ09ORklHVVJBVElPTiBFUlJPUjpcXG4gICAgICAgICAgVGhlIGBkYXRhYCBhdHRyaWJ1dGUgZm9yICcrdGhpcy5pcysnIGlzIG5vdCB2YWxpZCBHZW9KU09OLiBWYWxpZCBHZW9KU09OXFxuICAgICAgICAgIHRoYXQgZm9sbG93cyB0aGUgRmVhdHVyZUNvbGxlY3Rpb24gc3RhbmRhcmQgaXMgcmVxdWlyZWQgdG8gZHJhdyB0aGVcXG4gICAgICAgICAgbWFya2VyIGNsdXN0ZXJzLiBTZWUgdGhlIEdlb0pTT04gc3BlYyB3ZWJzaXRlIChodHRwOi8vZ2VvanNvbi5vcmcvZ2VvanNvbi1zcGVjLmh0bWwpXFxuICAgICAgICAgIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHdoYXQgaXMgcmVxdWlyZWQuXFxuXFxuICAgICAgICAgIFRoZSBtaW5pbXVtIHJlcXVpcmVtZW50cyBmb3IgJyt0aGlzLmlzKycgYXJlOlxcbiAgICAgICAgICAtIE11c3QgYmUgYSB2YWxpZCBKYXZhU2NyaXB0IG9iamVjdCAob3IgZGVzZXJpYWxpemFibGUgdG8gYW4gb2JqZWN0KVxcbiAgICAgICAgICAtIE11c3QgaGF2ZSBrZXkgYHR5cGVgIHdpdGggdmFsdWUgXFwnRmVhdHVyZUNvbGxlY3Rpb25cXCdcXG4gICAgICAgICAgLSBNdXN0IGhhdmUga2V5IGBmZWF0dXJlc2Agd2l0aCB2YWx1ZSBvZiBhbiBhcnJheSB3aXRoIGxlbmd0aFxcbiAgICAgICAgICAtIEVhY2ggZW50cnkgaW4gYGZlYXR1cmVzYCBtdXN0IGJlIGEgdmFsaWQgb2JqZWN0XFxuICAgICAgICAnKTtyZXR1cm4gdW5kZWZpbmVkfXJldHVybiB0aGlzLmRhdGF9LF9jcmVhdGVDbHVzdGVySWNvbjpmdW5jdGlvbiBfY3JlYXRlQ2x1c3Rlckljb24oY2x1c3Rlcil7aWYodGhpcy5pY29uRm5zLmNsdXN0ZXIpe3JldHVybiB0aGlzLmljb25GbnMuY2x1c3Rlci5jYWxsKHRoaXMsY2x1c3Rlcil9dmFyIG1hcmtlcnM9Y2x1c3Rlci5nZXRBbGxDaGlsZE1hcmtlcnMoKTt2YXIgY291bnQ9bWFya2Vycy5sZW5ndGg7dmFyIHR5cGVzPXRoaXMuX2luZGV4Q2x1c3Rlck1hcmtlcnNCeVR5cGUobWFya2Vycyk7dmFyIGNvbG9ycz10aGlzLmNvbG9yc0J5VHlwZTt2YXIgY29udGFpbmVyU2l6ZT10aGlzLl9nZXRDbHVzdGVySWNvblNpemUoY291bnQpO3ZhciBwYXRoU2l6ZT10aGlzLl9nZXRTdHlsZVZhbHVlQXNOdW0oJy0taW50ZXJuYWwtcHgtbWFwLW1hcmtlci1ncm91cC1jbHVzdGVyLXBhdGgtc2l6ZScpfHwxMDt2YXIgYm9yZGVyU2l6ZT10aGlzLl9nZXRTdHlsZVZhbHVlQXNOdW0oJy0taW50ZXJuYWwtcHgtbWFwLW1hcmtlci1ncm91cC1jbHVzdGVyLWJvcmRlci1zaXplJyl8fDA7dmFyIG9wdGlvbnM9e2NvdW50OmNvdW50LGNvdW50QnlUeXBlOnR5cGVzLGNvbG9yc0J5VHlwZTpjb2xvcnMsY29udGFpbmVyU2l6ZTpjb250YWluZXJTaXplLHBhdGhTaXplOnBhdGhTaXplLGJvcmRlclNpemU6Ym9yZGVyU2l6ZSxzdHlsZVNjb3BlOnRoaXMuaXNTaGFkeVNjb3BlZCgpP3RoaXMuZ2V0U2hhZHlTY29wZSgpOnVuZGVmaW5lZH07cmV0dXJuIG5ldyBQeE1hcC5DbHVzdGVySWNvbihvcHRpb25zKX0sX2dldFN0eWxlVmFsdWVBc051bTpmdW5jdGlvbiBfZ2V0U3R5bGVWYWx1ZUFzTnVtKHN0eWxlVmFsTmFtZSl7dGhpcy5fX3N0eWxlVmFscz10aGlzLl9fc3R5bGVWYWxzfHx7fTtpZih0aGlzLl9fc3R5bGVWYWxzW3N0eWxlVmFsTmFtZV0pcmV0dXJuIHRoaXMuX19zdHlsZVZhbHNbc3R5bGVWYWxOYW1lXTt2YXIgY29tcHV0ZWRWYWw9dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoc3R5bGVWYWxOYW1lKTtpZihjb21wdXRlZFZhbCYmY29tcHV0ZWRWYWwuaW5kZXhPZigncHgnKSE9PS0xKXt2YXIgdmFsV2l0aG91dFN1ZmZpeD1jb21wdXRlZFZhbC5yZXBsYWNlKCdweCcsJycpO3ZhciB2YWxBc051bT1NYXRoLmZsb29yKHZhbFdpdGhvdXRTdWZmaXgpO3RoaXMuX19zdHlsZVZhbHNbc3R5bGVWYWxOYW1lXT12YWxBc051bTtyZXR1cm4gdmFsQXNOdW19ZWxzZXtyZXR1cm4gdW5kZWZpbmVkfX0sX2dldENsdXN0ZXJJY29uU2l6ZTpmdW5jdGlvbiBfZ2V0Q2x1c3Rlckljb25TaXplKGNvdW50KXtpZihjb3VudDwxMCl7cmV0dXJuIDYwfWlmKGNvdW50Pj0xMCYmY291bnQ8NDApe3JldHVybiA3NX1pZihjb3VudD40MCl7cmV0dXJuIDkwfX0sX2luZGV4Q2x1c3Rlck1hcmtlcnNCeVR5cGU6ZnVuY3Rpb24gX2luZGV4Q2x1c3Rlck1hcmtlcnNCeVR5cGUobWFya2Vycyl7cmV0dXJuIG1hcmtlcnMucmVkdWNlKGZ1bmN0aW9uKHR5cGVzLG1hcmtlcil7aWYobWFya2VyLmZlYXR1cmVQcm9wZXJ0aWVzJiZtYXJrZXIuZmVhdHVyZVByb3BlcnRpZXNbJ21hcmtlci1pY29uJ10mJm1hcmtlci5mZWF0dXJlUHJvcGVydGllc1snbWFya2VyLWljb24nXVsnaWNvbi10eXBlJ10pe3R5cGVzW21hcmtlci5mZWF0dXJlUHJvcGVydGllc1snbWFya2VyLWljb24nXVsnaWNvbi10eXBlJ11dPSh0eXBlc1ttYXJrZXIuZmVhdHVyZVByb3BlcnRpZXNbJ21hcmtlci1pY29uJ11bJ2ljb24tdHlwZSddXXx8MCkrMX1yZXR1cm4gdHlwZXN9LHt9KX0sX3N5bmNEYXRhV2l0aE1hcmtlcnM6ZnVuY3Rpb24gX3N5bmNEYXRhV2l0aE1hcmtlcnMobmV3RmVhdHVyZXMsY2x1c3Rlckluc3Qpe2lmKCFuZXdGZWF0dXJlcy5sZW5ndGgpcmV0dXJuO3ZhciBmZWF0dXJlc1NldD10aGlzLl9mZWF0dXJlcz10aGlzLl9mZWF0dXJlc3x8bmV3IF9zZXQyLmRlZmF1bHQ7dmFyIG1hcmtlcnNNYXA9dGhpcy5fbWFya2Vycz10aGlzLl9tYXJrZXJzfHxuZXcgX3dlYWtNYXAyLmRlZmF1bHQ7dmFyIF9kaWZmTmV3RmVhdHVyZXM9dGhpcy5fZGlmZk5ld0ZlYXR1cmVzKG5ld0ZlYXR1cmVzLGZlYXR1cmVzU2V0LG1hcmtlcnNNYXApLGZlYXR1cmVzVG9BZGQ9X2RpZmZOZXdGZWF0dXJlcy5mZWF0dXJlc1RvQWRkLGZlYXR1cmVzVG9VcGRhdGU9X2RpZmZOZXdGZWF0dXJlcy5mZWF0dXJlc1RvVXBkYXRlLGZlYXR1cmVzVG9SZW1vdmU9X2RpZmZOZXdGZWF0dXJlcy5mZWF0dXJlc1RvUmVtb3ZlLG5leHRGZWF0dXJlc1NldD1fZGlmZk5ld0ZlYXR1cmVzLm5leHRGZWF0dXJlc1NldCxuZXh0TWFya2Vyc01hcD1fZGlmZk5ld0ZlYXR1cmVzLm5leHRNYXJrZXJzTWFwO3ZhciBmZWF0dXJlPXZvaWQgMCxjYWNoZWRNYXJrZXI9dm9pZCAwLG1hcmtlcnNUb09wZXJhdGU9dm9pZCAwO2lmKGZlYXR1cmVzVG9BZGQuc2l6ZSl7bWFya2Vyc1RvT3BlcmF0ZT1bXTt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcj1mYWxzZTt2YXIgX2l0ZXJhdG9yRXJyb3I9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcj0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGZlYXR1cmVzVG9BZGQpLF9zdGVwOyEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj0oX3N0ZXA9X2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7X2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj10cnVlKXtmZWF0dXJlPV9zdGVwLnZhbHVlO2NhY2hlZE1hcmtlcj1uZXh0TWFya2Vyc01hcC5nZXQoZmVhdHVyZSk7Y2FjaGVkTWFya2VyLm1hcmtlcj10aGlzLl9jcmVhdGVNYXJrZXIoZmVhdHVyZSk7bWFya2Vyc1RvT3BlcmF0ZS5wdXNoKGNhY2hlZE1hcmtlci5tYXJrZXIpO25leHRNYXJrZXJzTWFwLnNldChmZWF0dXJlLGNhY2hlZE1hcmtlcil9fWNhdGNoKGVycil7X2RpZEl0ZXJhdG9yRXJyb3I9dHJ1ZTtfaXRlcmF0b3JFcnJvcj1lcnJ9ZmluYWxseXt0cnl7aWYoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24mJl9pdGVyYXRvci5yZXR1cm4pe19pdGVyYXRvci5yZXR1cm4oKX19ZmluYWxseXtpZihfZGlkSXRlcmF0b3JFcnJvcil7dGhyb3cgX2l0ZXJhdG9yRXJyb3J9fX1jbHVzdGVySW5zdC5hZGRMYXllcnMobWFya2Vyc1RvT3BlcmF0ZSk7bWFya2Vyc1RvT3BlcmF0ZT1udWxsfWlmKGZlYXR1cmVzVG9VcGRhdGUuc2l6ZSl7bWFya2Vyc1RvT3BlcmF0ZT1bXTt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjI9dHJ1ZTt2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyPWZhbHNlO3ZhciBfaXRlcmF0b3JFcnJvcjI9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcjI9KDAsX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShmZWF0dXJlc1RvVXBkYXRlKSxfc3RlcDI7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMj0oX3N0ZXAyPV9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMj10cnVlKXtmZWF0dXJlPV9zdGVwMi52YWx1ZTtjYWNoZWRNYXJrZXI9bmV4dE1hcmtlcnNNYXAuZ2V0KGZlYXR1cmUpO2NhY2hlZE1hcmtlci5tYXJrZXI9dGhpcy5fdXBkYXRlTWFya2VyKGZlYXR1cmUsY2FjaGVkTWFya2VyLm1hcmtlcik7bWFya2Vyc1RvT3BlcmF0ZS5wdXNoKGNhY2hlZE1hcmtlci5tYXJrZXIpO25leHRNYXJrZXJzTWFwLnNldChmZWF0dXJlLGNhY2hlZE1hcmtlcil9fWNhdGNoKGVycil7X2RpZEl0ZXJhdG9yRXJyb3IyPXRydWU7X2l0ZXJhdG9yRXJyb3IyPWVycn1maW5hbGx5e3RyeXtpZighX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjImJl9pdGVyYXRvcjIucmV0dXJuKXtfaXRlcmF0b3IyLnJldHVybigpfX1maW5hbGx5e2lmKF9kaWRJdGVyYXRvckVycm9yMil7dGhyb3cgX2l0ZXJhdG9yRXJyb3IyfX19Y2x1c3Rlckluc3QucmVmcmVzaENsdXN0ZXJzKG1hcmtlcnNUb09wZXJhdGUpO21hcmtlcnNUb09wZXJhdGU9bnVsbH1pZihmZWF0dXJlc1RvUmVtb3ZlLnNpemUpe21hcmtlcnNUb09wZXJhdGU9W107dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zPXRydWU7dmFyIF9kaWRJdGVyYXRvckVycm9yMz1mYWxzZTt2YXIgX2l0ZXJhdG9yRXJyb3IzPXVuZGVmaW5lZDt0cnl7Zm9yKHZhciBfaXRlcmF0b3IzPSgwLF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoZmVhdHVyZXNUb1JlbW92ZSksX3N0ZXAzOyEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjM9KF9zdGVwMz1faXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7X2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjM9dHJ1ZSl7ZmVhdHVyZT1fc3RlcDMudmFsdWU7Y2FjaGVkTWFya2VyPW5leHRNYXJrZXJzTWFwLmdldChmZWF0dXJlKTttYXJrZXJzVG9PcGVyYXRlLnB1c2goY2FjaGVkTWFya2VyLm1hcmtlcik7bmV4dE1hcmtlcnNNYXAuZGVsZXRlKGZlYXR1cmUpfX1jYXRjaChlcnIpe19kaWRJdGVyYXRvckVycm9yMz10cnVlO19pdGVyYXRvckVycm9yMz1lcnJ9ZmluYWxseXt0cnl7aWYoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zJiZfaXRlcmF0b3IzLnJldHVybil7X2l0ZXJhdG9yMy5yZXR1cm4oKX19ZmluYWxseXtpZihfZGlkSXRlcmF0b3JFcnJvcjMpe3Rocm93IF9pdGVyYXRvckVycm9yM319fWNsdXN0ZXJJbnN0LnJlbW92ZUxheWVycyhtYXJrZXJzVG9PcGVyYXRlKTttYXJrZXJzVG9PcGVyYXRlPW51bGx9dGhpcy5fZmVhdHVyZXM9bmV4dEZlYXR1cmVzU2V0O3RoaXMuX21hcmtlcnM9bmV4dE1hcmtlcnNNYXA7ZmVhdHVyZXNTZXQuY2xlYXIoKTtmZWF0dXJlc1RvQWRkLmNsZWFyKCk7ZmVhdHVyZXNUb1VwZGF0ZS5jbGVhcigpO2ZlYXR1cmVzVG9SZW1vdmUuY2xlYXIoKX0sX2RpZmZOZXdGZWF0dXJlczpmdW5jdGlvbiBfZGlmZk5ld0ZlYXR1cmVzKG5ld0ZlYXR1cmVzLGxhc3RGZWF0dXJlU2V0LG1hcmtlck1hcCl7dmFyIG5leHRGZWF0dXJlc1NldD1uZXcgX3NldDIuZGVmYXVsdDt2YXIgZmVhdHVyZXNUb0FkZD1uZXcgX3NldDIuZGVmYXVsdDt2YXIgZmVhdHVyZXNUb1VwZGF0ZT1uZXcgX3NldDIuZGVmYXVsdDt2YXIgaT12b2lkIDAsbGVuPXZvaWQgMCx2YWxpZD12b2lkIDAsa25vd249dm9pZCAwLGNhY2hlZE1hcmtlcj12b2lkIDAsZmVhdHVyZUhhc2g9dm9pZCAwO2ZvcihpPTAsbGVuPW5ld0ZlYXR1cmVzLmxlbmd0aDtpPGxlbjtpKyspe3ZhbGlkPW5ld0ZlYXR1cmVzW2ldLmlkJiZuZXdGZWF0dXJlc1tpXS5nZW9tZXRyeSYmbmV3RmVhdHVyZXNbaV0uZ2VvbWV0cnkudHlwZT09PSdQb2ludCcmJm5ld0ZlYXR1cmVzW2ldLmdlb21ldHJ5LmNvb3JkaW5hdGVzIGluc3RhbmNlb2YgQXJyYXkmJm5ld0ZlYXR1cmVzW2ldLmdlb21ldHJ5LmNvb3JkaW5hdGVzLmxlbmd0aD09PTI7aWYoIXZhbGlkKWNvbnRpbnVlO2tub3duPWxhc3RGZWF0dXJlU2V0LmhhcyhuZXdGZWF0dXJlc1tpXSk7aWYoIWtub3duKXtmZWF0dXJlc1RvQWRkLmFkZChuZXdGZWF0dXJlc1tpXSk7bGFzdEZlYXR1cmVTZXQuZGVsZXRlKG5ld0ZlYXR1cmVzW2ldKTtuZXh0RmVhdHVyZXNTZXQuYWRkKG5ld0ZlYXR1cmVzW2ldKTtjYWNoZWRNYXJrZXI9e21hcmtlcjpudWxsLGhhc2g6KDAsX3N0cmluZ2lmeTIuZGVmYXVsdCkobmV3RmVhdHVyZXNbaV0pfTttYXJrZXJNYXAuc2V0KG5ld0ZlYXR1cmVzW2ldLGNhY2hlZE1hcmtlcik7Y29udGludWV9aWYoa25vd24pe2NhY2hlZE1hcmtlcj1tYXJrZXJNYXAuZ2V0KG5ld0ZlYXR1cmVzW2ldKTtmZWF0dXJlSGFzaD0oMCxfc3RyaW5naWZ5Mi5kZWZhdWx0KShuZXdGZWF0dXJlc1tpXSk7aWYoY2FjaGVkTWFya2VyLmhhc2ghPT1mZWF0dXJlSGFzaCl7ZmVhdHVyZXNUb1VwZGF0ZS5hZGQobmV3RmVhdHVyZXNbaV0pO2NhY2hlZE1hcmtlci5oYXNoPWZlYXR1cmVIYXNoO21hcmtlck1hcC5zZXQobmV3RmVhdHVyZXNbaV0sY2FjaGVkTWFya2VyKX1sYXN0RmVhdHVyZVNldC5kZWxldGUobmV3RmVhdHVyZXNbaV0pO25leHRGZWF0dXJlc1NldC5hZGQobmV3RmVhdHVyZXNbaV0pfX12YXIgZmVhdHVyZXNUb1JlbW92ZT1sYXN0RmVhdHVyZVNldC5zaXplP2xhc3RGZWF0dXJlU2V0Om5ldyBfc2V0Mi5kZWZhdWx0O2xhc3RGZWF0dXJlU2V0PW51bGw7cmV0dXJue2ZlYXR1cmVzVG9BZGQ6ZmVhdHVyZXNUb0FkZCxmZWF0dXJlc1RvVXBkYXRlOmZlYXR1cmVzVG9VcGRhdGUsZmVhdHVyZXNUb1JlbW92ZTpmZWF0dXJlc1RvUmVtb3ZlLG5leHRGZWF0dXJlc1NldDpuZXh0RmVhdHVyZXNTZXQsbmV4dE1hcmtlcnNNYXA6bWFya2VyTWFwfX0sX2NyZWF0ZU1hcmtlcjpmdW5jdGlvbiBfY3JlYXRlTWFya2VyKGZlYXR1cmUpe3ZhciBfZmVhdHVyZSRnZW9tZXRyeSRjb289KDAsX3NsaWNlZFRvQXJyYXkzLmRlZmF1bHQpKGZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXMsMiksbGF0PV9mZWF0dXJlJGdlb21ldHJ5JGNvb1swXSxsbmc9X2ZlYXR1cmUkZ2VvbWV0cnkkY29vWzFdO3ZhciBtYXJrZXI9TC5tYXJrZXIoW2xuZyxsYXRdKTt2YXIgaWNvblNldHRpbmdzPWZlYXR1cmUucHJvcGVydGllc1snbWFya2VyLWljb24nXT90aGlzLl9leHRyYWN0TWFya2VySWNvblNldHRpbmdzKGZlYXR1cmUucHJvcGVydGllc1snbWFya2VyLWljb24nXSk6e307aWNvblNldHRpbmdzLmJhc2U9aWNvblNldHRpbmdzLmJhc2V8fCdzdGF0aWMtaWNvbic7aWNvblNldHRpbmdzLnR5cGU9aWNvblNldHRpbmdzLnR5cGV8fCdpbmZvJzt2YXIgaWNvbj10aGlzLl9jcmVhdGVNYXJrZXJJY29uKGljb25TZXR0aW5ncyk7bWFya2VyLnNldEljb24oaWNvbik7bWFya2VyLmZlYXR1cmVQcm9wZXJ0aWVzPWZlYXR1cmUucHJvcGVydGllcztyZXR1cm4gbWFya2VyfSxfdXBkYXRlTWFya2VyOmZ1bmN0aW9uIF91cGRhdGVNYXJrZXIoZmVhdHVyZSxtYXJrZXIpe3ZhciBfbWFya2VyJGdldExhdExuZz1tYXJrZXIuZ2V0TGF0TG5nKCksbGF0PV9tYXJrZXIkZ2V0TGF0TG5nLmxhdCxsbmc9X21hcmtlciRnZXRMYXRMbmcubG5nO3ZhciBfZmVhdHVyZSRnZW9tZXRyeSRjb28yPSgwLF9zbGljZWRUb0FycmF5My5kZWZhdWx0KShmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzLDIpLG5leHRMbmc9X2ZlYXR1cmUkZ2VvbWV0cnkkY29vMlswXSxuZXh0TGF0PV9mZWF0dXJlJGdlb21ldHJ5JGNvbzJbMV07aWYobGF0IT09TnVtYmVyKG5leHRMYXQpfHxsbmchPT1OdW1iZXIobmV4dExuZykpe21hcmtlci5zZXRMYXRMbmcoW25leHRMYXQsbmV4dExuZ10pfXZhciBpY29uU2V0dGluZ3M9ZmVhdHVyZS5wcm9wZXJ0aWVzWydtYXJrZXItaWNvbiddP3RoaXMuX2V4dHJhY3RNYXJrZXJJY29uU2V0dGluZ3MoZmVhdHVyZS5wcm9wZXJ0aWVzWydtYXJrZXItaWNvbiddKTp7fTtpY29uU2V0dGluZ3MuYmFzZT1pY29uU2V0dGluZ3MuYmFzZXx8J3N0YXRpYy1pY29uJztpY29uU2V0dGluZ3MudHlwZT1pY29uU2V0dGluZ3MudHlwZXx8J2luZm8nO3ZhciBpY29uPXRoaXMuX2NyZWF0ZU1hcmtlckljb24oaWNvblNldHRpbmdzKTttYXJrZXIuc2V0SWNvbihpY29uKTttYXJrZXIuZmVhdHVyZVByb3BlcnRpZXM9ZmVhdHVyZS5wcm9wZXJ0aWVzO3JldHVybiBtYXJrZXJ9LF9leHRyYWN0TWFya2VySWNvblNldHRpbmdzOmZ1bmN0aW9uIF9leHRyYWN0TWFya2VySWNvblNldHRpbmdzKGZlYXRTZXR0aW5ncyl7dmFyIGZlYXRTZXR0aW5nc0tleXM9KDAsX2tleXMyLmRlZmF1bHQpKGZlYXRTZXR0aW5ncyk7aWYoIWZlYXRTZXR0aW5nc0tleXMubGVuZ3RoKXJldHVybiB1bmRlZmluZWQ7dmFyIGljb25TZXR0aW5ncz17fTt2YXIgaT12b2lkIDAsbGVuPXZvaWQgMCxmZWF0S2V5Q2FtZWxpemVkPXZvaWQgMDtmb3IoaT0wLGxlbj1mZWF0U2V0dGluZ3NLZXlzLmxlbmd0aDtpPGxlbjtpKyspe2lmKGZlYXRTZXR0aW5nc0tleXNbaV0uc3Vic3RyaW5nKDAsNSkhPT0naWNvbi0nKWNvbnRpbnVlO2ZlYXRLZXlDYW1lbGl6ZWQ9ZmVhdFNldHRpbmdzS2V5c1tpXS5zdWJzdHJpbmcoNSkucmVwbGFjZSgvKFxcLVthLXpdKS9nLGZ1bmN0aW9uKG1hdGNoKXtyZXR1cm4gbWF0Y2guY2hhckF0KDEpLnRvVXBwZXJDYXNlKCl9KTtpY29uU2V0dGluZ3NbZmVhdEtleUNhbWVsaXplZF09ZmVhdFNldHRpbmdzW2ZlYXRTZXR0aW5nc0tleXNbaV1dfXJldHVybiBpY29uU2V0dGluZ3N9LF9jcmVhdGVNYXJrZXJJY29uOmZ1bmN0aW9uIF9jcmVhdGVNYXJrZXJJY29uKG9wdGlvbnMpe2lmKHRoaXMuaWNvbkZucy5tYXJrZXIpe3JldHVybiB0aGlzLmljb25GbnMubWFya2VyLmNhbGwodGhpcyxvcHRpb25zKX1vcHRpb25zLnN0eWxlU2NvcGU9dGhpcy5pc1NoYWR5U2NvcGVkKCk/dGhpcy5nZXRTaGFkeVNjb3BlKCk6dW5kZWZpbmVkO3ZhciBrbGFzc05hbWU9dGhpcy5fc3RyVG9LbGFzc05hbWUob3B0aW9ucy5iYXNlKTtyZXR1cm4gbmV3IFB4TWFwW2tsYXNzTmFtZV0ob3B0aW9ucyl9LF9zdHJUb0tsYXNzTmFtZTpmdW5jdGlvbiBfc3RyVG9LbGFzc05hbWUoc3RyKXtyZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3N0ci5zdWJzdHJpbmcoMSkucmVwbGFjZSgvKFxcLVthLXpdKS9nLGZ1bmN0aW9uKG1hdGNoKXtyZXR1cm4gbWF0Y2guY2hhckF0KDEpLnRvVXBwZXJDYXNlKCl9KX0sX2hhbmRsZUNsdXN0ZXJTcGlkZXJpZnk6ZnVuY3Rpb24gX2hhbmRsZUNsdXN0ZXJTcGlkZXJpZnkoZXZ0KXtpZighZXZ0fHwhZXZ0LmNsdXN0ZXJ8fCFldnQuY2x1c3Rlci5faWNvbilyZXR1cm47ZXZ0LmNsdXN0ZXIuX2ljb24uc3R5bGUudmlzaWJpbGl0eT0naGlkZGVuJ30sX2hhbmRsZUNsdXN0ZXJVbnNwaWRlcmlmeTpmdW5jdGlvbiBfaGFuZGxlQ2x1c3RlclVuc3BpZGVyaWZ5KGV2dCl7aWYoIWV2dHx8IWV2dC5jbHVzdGVyfHwhZXZ0LmNsdXN0ZXIuX2ljb24pcmV0dXJuO2V2dC5jbHVzdGVyLl9pY29uLnN0eWxlLnZpc2liaWxpdHk9J3Zpc2libGUnfX07UHhNYXBCZWhhdmlvci5NYXJrZXJHcm91cD1bUHhNYXBCZWhhdmlvci5MYXllcixQeE1hcEJlaGF2aW9yLk1hcmtlckdyb3VwSW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIjoxLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCI6MyxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCI6NCxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjksXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc2V0XCI6MTEsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvd2Vhay1tYXBcIjoxNCxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI6MjAsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI6MjF9XSwxMzY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfdHlwZW9mMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7dmFyIF90eXBlb2YzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfX0oZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7d2luZG93LlB4TWFwQmVoYXZpb3I9d2luZG93LlB4TWFwQmVoYXZpb3J8fHt9O1B4TWFwQmVoYXZpb3IuTWFya2VySW1wbD17cHJvcGVydGllczp7bGF0Ont0eXBlOk51bWJlcixub3RpZnk6dHJ1ZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGxuZzp7dHlwZTpOdW1iZXIsbm90aWZ5OnRydWUsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxuYW1lOnt0eXBlOlN0cmluZyxub3RpZnk6dHJ1ZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9fSxjYW5BZGRJbnN0OmZ1bmN0aW9uIGNhbkFkZEluc3QoKXtyZXR1cm4gdHlwZW9mIHRoaXMubGF0PT09J251bWJlcicmJnR5cGVvZiB0aGlzLmxuZz09PSdudW1iZXInfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7dGhpcy5tYXJrZXI9TC5tYXJrZXIob3B0aW9ucy5nZW9tZXRyeSxvcHRpb25zLmNvbmZpZyk7dGhpcy5tYXJrZXIuaXNNYXJrZXI9dHJ1ZTtyZXR1cm4gdGhpcy5tYXJrZXJ9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7dmFyIGdlb21XYXNEZWZpbmVkPSgwLF90eXBlb2YzLmRlZmF1bHQpKGxhc3RPcHRpb25zLmdlb21ldHJ5KT09PSdvYmplY3QnO3ZhciBnZW9tSXNEZWZpbmVkPSgwLF90eXBlb2YzLmRlZmF1bHQpKG5leHRPcHRpb25zLmdlb21ldHJ5KT09PSdvYmplY3QnO3ZhciBnZW9tSXNEaWZmZXJlbnQ9Z2VvbVdhc0RlZmluZWQmJmdlb21Jc0RlZmluZWQmJihsYXN0T3B0aW9ucy5nZW9tZXRyeS5sYXQhPT1uZXh0T3B0aW9ucy5nZW9tZXRyeS5sYXR8fGxhc3RPcHRpb25zLmdlb21ldHJ5LmxuZyE9PW5leHRPcHRpb25zLmdlb21ldHJ5LmxuZyk7aWYoZ2VvbVdhc0RlZmluZWQmJiFnZW9tSXNEZWZpbmVkKXt0aGlzLmVsZW1lbnRJbnN0LnNldE9wYWNpdHkoMCl9aWYoIWdlb21XYXNEZWZpbmVkJiZnZW9tSXNEZWZpbmVkKXt0aGlzLmVsZW1lbnRJbnN0LnNldE9wYWNpdHkoMSl9aWYoZ2VvbUlzRGlmZmVyZW50fHwhZ2VvbVdhc0RlZmluZWQmJmdlb21Jc0RlZmluZWQpe3RoaXMuZWxlbWVudEluc3Quc2V0TGF0TG5nKG5leHRPcHRpb25zLmdlb21ldHJ5KX1pZihsYXN0T3B0aW9ucy5jb25maWcuaWNvbiE9PW5leHRPcHRpb25zLmNvbmZpZy5pY29uKXt0aGlzLmVsZW1lbnRJbnN0LnNldEljb24obmV4dE9wdGlvbnMuY29uZmlnLmljb24pfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt2YXIgZ2VvbWV0cnk9dGhpcy5nZXRMYXRMbmcoKTt2YXIgY29uZmlnPXt9O2NvbmZpZy50aXRsZT10aGlzLm5hbWV8fCcnO2NvbmZpZy5pY29uPXRoaXMuZ2V0TWFya2VySWNvbigpO3JldHVybntnZW9tZXRyeTpnZW9tZXRyeSxjb25maWc6Y29uZmlnfX0sZ2V0TGF0TG5nOmZ1bmN0aW9uIGdldExhdExuZygpe2lmKCF0aGlzLmxhdHx8IXRoaXMubG5nKXJldHVybiB1bmRlZmluZWQ7cmV0dXJuIEwubGF0TG5nKHRoaXMubGF0LHRoaXMubG5nKX0sZ2V0TWFya2VySWNvbjpmdW5jdGlvbiBnZXRNYXJrZXJJY29uKCl7dGhyb3cgbmV3IEVycm9yKCdUaGUgYGdldE1hcmtlckljb25gIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLicpfX07UHhNYXBCZWhhdmlvci5NYXJrZXI9W1B4TWFwQmVoYXZpb3IuTGF5ZXIsUHhNYXBCZWhhdmlvci5QYXJlbnRMYXllcixQeE1hcEJlaGF2aW9yLk1hcmtlckltcGxdO1B4TWFwQmVoYXZpb3IuU3ltYm9sTWFya2VySW1wbD17cHJvcGVydGllczp7dHlwZTp7dHlwZTpTdHJpbmcscmVmbGVjdFRvQXR0cmlidXRlOnRydWUsdmFsdWU6J2luZm8nLG9ic2VydmVyOidfdXBkYXRlTWFya2VySWNvbid9LHNob3dCYWRnZTp7dHlwZTpCb29sZWFuLHZhbHVlOnRydWUsb2JzZXJ2ZXI6J191cGRhdGVNYXJrZXJJY29uJ30sc3ltYm9sQ2xhc3M6e3R5cGU6U3RyaW5nLG9ic2VydmVyOidfdXBkYXRlTWFya2VySWNvbid9fSxnZXRNYXJrZXJJY29uOmZ1bmN0aW9uIGdldE1hcmtlckljb24oKXtpZighdGhpcy5tYXJrZXJJY29uKXt2YXIgb3B0aW9ucz10aGlzLl9nZXRNYXJrZXJJY29uT3B0aW9ucygpO3RoaXMubWFya2VySWNvbj1uZXcgUHhNYXAuU3ltYm9sSWNvbihvcHRpb25zKX1yZXR1cm4gdGhpcy5tYXJrZXJJY29ufSxfdXBkYXRlTWFya2VySWNvbjpmdW5jdGlvbiBfdXBkYXRlTWFya2VySWNvbigpe2lmKCF0aGlzLm1hcmtlckljb24pcmV0dXJuO3ZhciBvcHRpb25zPXRoaXMuX2dldE1hcmtlckljb25PcHRpb25zKCk7dGhpcy5tYXJrZXJJY29uPW5ldyBQeE1hcC5TeW1ib2xJY29uKG9wdGlvbnMpO3RoaXMuc2hvdWxkVXBkYXRlSW5zdCgpfSxfZ2V0TWFya2VySWNvbk9wdGlvbnM6ZnVuY3Rpb24gX2dldE1hcmtlckljb25PcHRpb25zKCl7cmV0dXJue3R5cGU6dGhpcy50eXBlLGJhZGdlOnRoaXMuc2hvd0JhZGdlLHN5bWJvbDp0aGlzLnN5bWJvbENsYXNzLHN0eWxlU2NvcGU6dGhpcy5pc1NoYWR5U2NvcGVkKCk/dGhpcy5nZXRTaGFkeVNjb3BlKCk6dW5kZWZpbmVkfX19O1B4TWFwQmVoYXZpb3IuU3ltYm9sTWFya2VyPVtQeE1hcEJlaGF2aW9yLk1hcmtlcixQeE1hcEJlaGF2aW9yLlN5bWJvbE1hcmtlckltcGxdO1B4TWFwQmVoYXZpb3IuU3RhdGljTWFya2VySW1wbD17cHJvcGVydGllczp7dHlwZTp7dHlwZTpTdHJpbmcscmVmbGVjdFRvQXR0cmlidXRlOnRydWUsdmFsdWU6J2luZm8nLG9ic2VydmVyOidfdXBkYXRlTWFya2VySWNvbid9LHNob3dCYWRnZTp7dHlwZTpCb29sZWFuLHZhbHVlOnRydWUsb2JzZXJ2ZXI6J191cGRhdGVNYXJrZXJJY29uJ319LGdldE1hcmtlckljb246ZnVuY3Rpb24gZ2V0TWFya2VySWNvbigpe2lmKCF0aGlzLm1hcmtlckljb24pe3ZhciBvcHRpb25zPXRoaXMuX2dldE1hcmtlckljb25PcHRpb25zKCk7dGhpcy5tYXJrZXJJY29uPW5ldyBQeE1hcC5TdGF0aWNJY29uKG9wdGlvbnMpfXJldHVybiB0aGlzLm1hcmtlckljb259LF91cGRhdGVNYXJrZXJJY29uOmZ1bmN0aW9uIF91cGRhdGVNYXJrZXJJY29uKCl7aWYoIXRoaXMubWFya2VySWNvbilyZXR1cm47dmFyIG9wdGlvbnM9dGhpcy5fZ2V0TWFya2VySWNvbk9wdGlvbnMoKTt0aGlzLm1hcmtlckljb249bmV3IFB4TWFwLlN0YXRpY0ljb24ob3B0aW9ucyk7dGhpcy5zaG91bGRVcGRhdGVJbnN0KCl9LF9nZXRNYXJrZXJJY29uT3B0aW9uczpmdW5jdGlvbiBfZ2V0TWFya2VySWNvbk9wdGlvbnMoKXtyZXR1cm57dHlwZTp0aGlzLnR5cGV8fCcnLGJhZGdlOnRoaXMuc2hvd0JhZGdlfHxmYWxzZSxzdHlsZVNjb3BlOnRoaXMuaXNTaGFkeVNjb3BlZCgpP3RoaXMuZ2V0U2hhZHlTY29wZSgpOnVuZGVmaW5lZH19fTtQeE1hcEJlaGF2aW9yLlN0YXRpY01hcmtlcj1bUHhNYXBCZWhhdmlvci5NYXJrZXIsUHhNYXBCZWhhdmlvci5TdGF0aWNNYXJrZXJJbXBsXTtQeE1hcEJlaGF2aW9yLkxvY2F0ZU1hcmtlckltcGw9e3Byb3BlcnRpZXM6e2FjY3VyYWN5Ont0eXBlOk51bWJlcixvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9fSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7dGhpcy5tYXJrZXJCYXNlSWNvbj1MLmNpcmNsZU1hcmtlcihvcHRpb25zLmdlb21ldHJ5LG9wdGlvbnMuYmFzZUNvbmZpZyk7dGhpcy5tYXJrZXJBY2N1cmFjeUljb249TC5jaXJjbGUob3B0aW9ucy5nZW9tZXRyeSxvcHRpb25zLmFjY3VyYWN5UmFkaXVzLG9wdGlvbnMuYWNjdXJhY3lDb25maWcpO3RoaXMubWFya2VyR3JvdXA9TC5mZWF0dXJlR3JvdXAoW3RoaXMubWFya2VyQWNjdXJhY3lJY29uLHRoaXMubWFya2VyQmFzZUljb25dKTt0aGlzLm1hcmtlckdyb3VwLmlzTWFya2VyPXRydWU7dGhpcy5tYXJrZXJHcm91cC5nZXRMYXRMbmc9dGhpcy5nZXRMYXRMbmcuYmluZCh0aGlzKTtyZXR1cm4gdGhpcy5tYXJrZXJHcm91cH0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXt2YXIgZ2VvbVdhc0RlZmluZWQ9KDAsX3R5cGVvZjMuZGVmYXVsdCkobGFzdE9wdGlvbnMuZ2VvbWV0cnkpPT09J29iamVjdCc7dmFyIGdlb21Jc0RlZmluZWQ9KDAsX3R5cGVvZjMuZGVmYXVsdCkobmV4dE9wdGlvbnMuZ2VvbWV0cnkpPT09J29iamVjdCc7dmFyIGdlb21Jc0RpZmZlcmVudD1nZW9tV2FzRGVmaW5lZCYmZ2VvbUlzRGVmaW5lZCYmKGxhc3RPcHRpb25zLmdlb21ldHJ5LmxhdCE9PW5leHRPcHRpb25zLmdlb21ldHJ5LmxhdHx8bGFzdE9wdGlvbnMuZ2VvbWV0cnkubG5nIT09bmV4dE9wdGlvbnMuZ2VvbWV0cnkubG5nKTtpZihnZW9tV2FzRGVmaW5lZCYmIWdlb21Jc0RlZmluZWQpe3RoaXMubWFya2VyQmFzZUljb24uc2V0U3R5bGUoe29wYWNpdHk6MCxmaWxsT3BhY2l0eTowfSk7dGhpcy5tYXJrZXJBY2N1cmFjeUljb24uc2V0U3R5bGUoe29wYWNpdHk6MCxmaWxsT3BhY2l0eTowfSl9aWYoZ2VvbUlzRGlmZmVyZW50fHwhZ2VvbVdhc0RlZmluZWQmJmdlb21Jc0RlZmluZWQpe3RoaXMubWFya2VyQmFzZUljb24uc2V0TGF0TG5nKG5leHRPcHRpb25zLmdlb21ldHJ5KTt0aGlzLm1hcmtlckFjY3VyYWN5SWNvbi5zZXRMYXRMbmcobmV4dE9wdGlvbnMuZ2VvbWV0cnkpfWlmKGxhc3RPcHRpb25zJiYhZ2VvbVdhc0RlZmluZWQmJmdlb21Jc0RlZmluZWQpe3RoaXMubWFya2VyQmFzZUljb24uc2V0U3R5bGUobmV4dE9wdGlvbnMuYmFzZUNvbmZpZyk7dGhpcy5tYXJrZXJBY2N1cmFjeUljb24uc2V0U3R5bGUobmV4dE9wdGlvbnMuYWNjdXJhY3lDb25maWcpfWlmKGxhc3RPcHRpb25zLmFjY3VyYWN5UmFkaXVzIT09bmV4dE9wdGlvbnMuYWNjdXJhY3lSYWRpdXMpe3RoaXMubWFya2VyQWNjdXJhY3lJY29uLnNldFJhZGl1cyhuZXh0T3B0aW9ucy5hY2N1cmFjeVJhZGl1cyl9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3ZhciBnZW9tZXRyeT10aGlzLmdldExhdExuZygpO3ZhciBiYXNlQ29uZmlnPXt9O2Jhc2VDb25maWcucmFkaXVzPTcuNTtiYXNlQ29uZmlnLnN0cm9rZT10cnVlO2Jhc2VDb25maWcuY29sb3I9dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLW1hcmtlci1sb2NhdGUtaWNvbi1ib3JkZXItY29sb3InKTtiYXNlQ29uZmlnLndlaWdodD0zO2Jhc2VDb25maWcub3BhY2l0eT0xO2Jhc2VDb25maWcuZmlsbD10cnVlO2Jhc2VDb25maWcuZmlsbENvbG9yPXRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWludGVybmFsLXB4LW1hcC1tYXJrZXItbG9jYXRlLWljb24tY29sb3InKTtiYXNlQ29uZmlnLmZpbGxPcGFjaXR5PTE7YmFzZUNvbmZpZy5jbGFzc05hbWU9J21hcC1tYXJrZXItbG9jYXRlLWJhc2UgJysodGhpcy5pc1NoYWR5U2NvcGVkKCk/dGhpcy5nZXRTaGFkeVNjb3BlKCk6JycpO3ZhciBhY2N1cmFjeVJhZGl1cz10aGlzLmFjY3VyYWN5fHwwO3ZhciBhY2N1cmFjeUNvbmZpZz17fTthY2N1cmFjeUNvbmZpZy5zdHJva2U9ZmFsc2U7YWNjdXJhY3lDb25maWcub3BhY2l0eT0wO2FjY3VyYWN5Q29uZmlnLmZpbGw9dHJ1ZTthY2N1cmFjeUNvbmZpZy5maWxsQ29sb3I9dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLW1hcmtlci1sb2NhdGUtaWNvbi1hY2N1cmFjeS1jb2xvcicpO2FjY3VyYWN5Q29uZmlnLmZpbGxPcGFjaXR5PXRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWludGVybmFsLXB4LW1hcC1tYXJrZXItbG9jYXRlLWljb24tYWNjdXJhY3ktb3BhY2l0eScpO2FjY3VyYWN5Q29uZmlnLmNsYXNzTmFtZT0nbWFwLW1hcmtlci1sb2NhdGUtYWNjdXJhY3kgJysodGhpcy5pc1NoYWR5U2NvcGVkKCk/dGhpcy5nZXRTaGFkeVNjb3BlKCk6JycpO3JldHVybntnZW9tZXRyeTpnZW9tZXRyeSxiYXNlQ29uZmlnOmJhc2VDb25maWcsYWNjdXJhY3lSYWRpdXM6YWNjdXJhY3lSYWRpdXMsYWNjdXJhY3lDb25maWc6YWNjdXJhY3lDb25maWd9fX07UHhNYXBCZWhhdmlvci5Mb2NhdGVNYXJrZXI9W1B4TWFwQmVoYXZpb3IuTWFya2VyLFB4TWFwQmVoYXZpb3IuTG9jYXRlTWFya2VySW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIjoyMX1dLDEzNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7dmFyIF9hc3NpZ249cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24nKTt2YXIgX2Fzc2lnbjI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTt2YXIgX2dldFByb3RvdHlwZU9mPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO3ZhciBfZ2V0UHJvdG90eXBlT2YyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTt2YXIgX2NsYXNzQ2FsbENoZWNrMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTt2YXIgX2NsYXNzQ2FsbENoZWNrMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO3ZhciBfY3JlYXRlQ2xhc3MyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO3ZhciBfY3JlYXRlQ2xhc3MzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7dmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO3ZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO3ZhciBfaW5oZXJpdHMyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO3ZhciBfaW5oZXJpdHMzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7dmFyIF90eXBlb2YyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnKTt2YXIgX3R5cGVvZjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7dmFyIF9rZXlzPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO3ZhciBfa2V5czI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5Qb3B1cEltcGw9e3Byb3BlcnRpZXM6e2FjdGl2ZTp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlLHJlYWRPbmx5OnRydWV9LGJpbmRUb0NvbnRyb2w6e3R5cGU6U3RyaW5nfSxjbG9zZU9uQ29udHJvbEludGVyYWN0Ont0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2V9fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXtpZihwYXJlbnQmJnBhcmVudC5nZXRQb3B1cCgpIT09dGhpcy5lbGVtZW50SW5zdCl7cGFyZW50LmJpbmRQb3B1cCh0aGlzLmVsZW1lbnRJbnN0KTt2YXIgY29udHJvbENsaWNrRm49dGhpcy5faGFuZGxlQ29udHJvbENsaWNrLmJpbmQodGhpcyxwYXJlbnQpO3RoaXMuYmluZEV2ZW50cyh7J2NvbnRyb2xjbGljayc6Y29udHJvbENsaWNrRm59LHBhcmVudC5fbWFwVG9BZGQpfX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KHBhcmVudCl7aWYocGFyZW50JiZwYXJlbnQuZ2V0UG9wdXAmJnBhcmVudC5nZXRQb3B1cCgpPT09dGhpcy5lbGVtZW50SW5zdCl7cGFyZW50LnVuYmluZFBvcHVwKHRoaXMuZWxlbWVudEluc3QpfX0sX2hhbmRsZUNvbnRyb2xDbGljazpmdW5jdGlvbiBfaGFuZGxlQ29udHJvbENsaWNrKHBhcmVudCl7aWYodGhpcy5jbG9zZU9uQ29udHJvbEludGVyYWN0JiZwYXJlbnQmJnBhcmVudC5jbG9zZVBvcHVwKXtwYXJlbnQuY2xvc2VQb3B1cCgpfX19O1B4TWFwQmVoYXZpb3IuUG9wdXA9W1B4TWFwQmVoYXZpb3IuTGF5ZXIsUHhNYXBCZWhhdmlvci5Qb3B1cEltcGxdO1B4TWFwQmVoYXZpb3IuSW5mb1BvcHVwSW1wbD17cHJvcGVydGllczp7dGl0bGU6e3R5cGU6U3RyaW5nLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sZGVzY3JpcHRpb246e3R5cGU6U3RyaW5nLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30saW1nU3JjOnt0eXBlOlN0cmluZyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9fSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7cmV0dXJuIG5ldyBQeE1hcC5JbmZvUG9wdXAob3B0aW9ucyl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7dmFyIHVwZGF0ZXM9e307aWYobGFzdE9wdGlvbnMudGl0bGUhPT1uZXh0T3B0aW9ucy50aXRsZSl7dXBkYXRlcy50aXRsZT1uZXh0T3B0aW9ucy50aXRsZX1pZihsYXN0T3B0aW9ucy5kZXNjcmlwdGlvbiE9PW5leHRPcHRpb25zLmRlc2NyaXB0aW9uKXt1cGRhdGVzLmRlc2NyaXB0aW9uPW5leHRPcHRpb25zLmRlc2NyaXB0aW9ufWlmKGxhc3RPcHRpb25zLmltZ1NyYyE9PW5leHRPcHRpb25zLmltZ1NyYyl7dXBkYXRlcy5pbWdTcmM9bmV4dE9wdGlvbnMuaW1nU3JjfWlmKCgwLF9rZXlzMi5kZWZhdWx0KSh1cGRhdGVzKS5sZW5ndGgpe3RoaXMuZWxlbWVudEluc3QudXBkYXRlU2V0dGluZ3ModXBkYXRlcyl9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybnt0aXRsZTp0aGlzLnRpdGxlLGRlc2NyaXB0aW9uOnRoaXMuZGVzY3JpcHRpb24saW1nU3JjOnRoaXMuaW1nU3JjfX19O1B4TWFwQmVoYXZpb3IuSW5mb1BvcHVwPVtQeE1hcEJlaGF2aW9yLlBvcHVwLFB4TWFwQmVoYXZpb3IuSW5mb1BvcHVwSW1wbF07UHhNYXBCZWhhdmlvci5EYXRhUG9wdXBJbXBsPXtwcm9wZXJ0aWVzOnt0aXRsZTp7dHlwZTpTdHJpbmcsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxkYXRhOnt0eXBlOk9iamVjdCx2YWx1ZTpmdW5jdGlvbiB2YWx1ZSgpe3JldHVybnt9fSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9fSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7cmV0dXJuIG5ldyBQeE1hcC5EYXRhUG9wdXAob3B0aW9ucyl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7dmFyIHVwZGF0ZXM9e307aWYobGFzdE9wdGlvbnMudGl0bGUhPT1uZXh0T3B0aW9ucy50aXRsZSl7dXBkYXRlcy50aXRsZT1uZXh0T3B0aW9ucy50aXRsZX1pZihsYXN0T3B0aW9ucy5kYXRhIT09bmV4dE9wdGlvbnMuZGF0YSl7dXBkYXRlcy5kYXRhPW5leHRPcHRpb25zLmRhdGF9aWYoKDAsX2tleXMyLmRlZmF1bHQpKHVwZGF0ZXMpLmxlbmd0aCl7dGhpcy5lbGVtZW50SW5zdC51cGRhdGVTZXR0aW5ncyh1cGRhdGVzKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7cmV0dXJue3RpdGxlOnRoaXMudGl0bGUsZGF0YTp0aGlzLl9nZXRWYWxpZERhdGEoKX19LF9nZXRWYWxpZERhdGE6ZnVuY3Rpb24gX2dldFZhbGlkRGF0YSgpe2lmKCgwLF90eXBlb2YzLmRlZmF1bHQpKHRoaXMuZGF0YSkhPT0nb2JqZWN0Jyl7Y29uc29sZS5sb2coJ1BYLU1BUCBDT05GSUdVUkFUSU9OIEVSUk9SOlxcbiAgICAgICAgICBZb3UgZW50ZXJlZCBhbiBpbnZhbGlkIGBkYXRhYCBhdHRyaWJ1dGUgZm9yICcrdGhpcy5pcysnLiBZb3UgbXVzdCBwYXNzIGEgdmFsaWQgb2JqZWN0LlxcbiAgICAgICAgICBBbiBhdHRyaWJ1dGUgb2YgdHlwZSBgJysoMCxfdHlwZW9mMy5kZWZhdWx0KSh0aGlzLmRhdGEpKydgIHdhcyBwYXNzZWQuJyk7cmV0dXJue319cmV0dXJuIHRoaXMuZGF0YX19O1B4TWFwQmVoYXZpb3IuRGF0YVBvcHVwPVtQeE1hcEJlaGF2aW9yLlBvcHVwLFB4TWFwQmVoYXZpb3IuRGF0YVBvcHVwSW1wbF07d2luZG93LlB4TWFwPXdpbmRvdy5QeE1hcHx8e307dmFyIEluZm9Qb3B1cD1mdW5jdGlvbihfTCRQb3B1cCl7KDAsX2luaGVyaXRzMy5kZWZhdWx0KShJbmZvUG9wdXAsX0wkUG9wdXApO2Z1bmN0aW9uIEluZm9Qb3B1cCgpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307dmFyIF9yZXQ7dmFyIGNvbmZpZz1hcmd1bWVudHMubGVuZ3RoPjEmJmFyZ3VtZW50c1sxXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMV06e307KDAsX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLEluZm9Qb3B1cCk7dmFyIF90aGlzPSgwLF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLChJbmZvUG9wdXAuX19wcm90b19ffHwoMCxfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEluZm9Qb3B1cCkpLmNhbGwodGhpcykpO190aGlzLl9jcmVhdGVQb3B1cChzZXR0aW5ncyxjb25maWcpO3JldHVybiBfcmV0PV90aGlzLCgwLF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcyxfcmV0KX0oMCxfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEluZm9Qb3B1cCxbe2tleTonX2NyZWF0ZVBvcHVwJyx2YWx1ZTpmdW5jdGlvbiBfY3JlYXRlUG9wdXAoKXt2YXIgc2V0dGluZ3M9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9O3ZhciBjb25maWc9YXJndW1lbnRzLmxlbmd0aD4xJiZhcmd1bWVudHNbMV0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzFdOnt9O3RoaXMuc2V0dGluZ3M9c2V0dGluZ3M7dmFyIHRpdGxlPXNldHRpbmdzLnRpdGxlLGRlc2NyaXB0aW9uPXNldHRpbmdzLmRlc2NyaXB0aW9uLGltZ1NyYz1zZXR0aW5ncy5pbWdTcmM7dmFyIGNvbnRlbnQ9dGhpcy5fZ2VuZXJhdGVQb3B1cENvbnRlbnQodGl0bGUsZGVzY3JpcHRpb24saW1nU3JjKTt2YXIgZGVmYXVsdENvbmZpZz17Y2xhc3NOYW1lOidtYXAtcG9wdXAtaW5mbyd9O3ZhciBjb21wb3NlZENvbmZpZz17fTsoMCxfYXNzaWduMi5kZWZhdWx0KShjb21wb3NlZENvbmZpZyxkZWZhdWx0Q29uZmlnLGNvbmZpZyk7dGhpcy5pbml0aWFsaXplKGNvbXBvc2VkQ29uZmlnKTt0aGlzLnNldENvbnRlbnQoY29udGVudCl9fSx7a2V5OidfZ2VuZXJhdGVQb3B1cENvbnRlbnQnLHZhbHVlOmZ1bmN0aW9uIF9nZW5lcmF0ZVBvcHVwQ29udGVudCh0aXRsZSxkZXNjcmlwdGlvbixpbWdTcmMpe3ZhciBfdGhpczI9dGhpczt2YXIgdG1wbEZuSWY9ZnVuY3Rpb24gdG1wbEZuSWYoZm4pe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLHZhbHM9QXJyYXkoX2xlbj4xP19sZW4tMTowKSxfa2V5PTE7X2tleTxfbGVuO19rZXkrKyl7dmFsc1tfa2V5LTFdPWFyZ3VtZW50c1tfa2V5XX1yZXR1cm4gdmFscy5sZW5ndGgmJnZhbHNbMF0hPT11bmRlZmluZWQ/Zm4uY2FsbC5hcHBseShmbixbX3RoaXMyXS5jb25jYXQodmFscykpOicnfTt2YXIgaW1nVG1wbD1mdW5jdGlvbiBpbWdUbXBsKGltZ1NyYyl7cmV0dXJuJ1xcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1ib3gtaW5mb19faW1hZ2VcIj5cXG4gICAgICAgICAgPGltZyBzcmM9XCInK2ltZ1NyYysnXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICd9O3ZhciB0aXRsZVRtcGw9ZnVuY3Rpb24gdGl0bGVUbXBsKHRpdGxlKXtyZXR1cm4nXFxuICAgICAgICA8cCBjbGFzcz1cIm1hcC1ib3gtaW5mb19fdGl0bGVcIj4nK3RpdGxlKyc8L3A+XFxuICAgICAgJ307dmFyIGRlc2NyaXB0aW9uVG1wbD1mdW5jdGlvbiBkZXNjcmlwdGlvblRtcGwoZGVzY3JpcHRpb24pe3JldHVybidcXG4gICAgICAgIDxwIGNsYXNzPVwibWFwLWJveC1pbmZvX19kZXNjcmlwdGlvblwiPicrZGVzY3JpcHRpb24rJzwvcD5cXG4gICAgICAnfTtyZXR1cm4nXFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1hcC1ib3gtaW5mb1wiPlxcbiAgICAgICAgICAnK3RtcGxGbklmKGltZ1RtcGwsaW1nU3JjKSsnXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtYm94LWluZm9fX2NvbnRlbnRcIj5cXG4gICAgICAgICAgICAnK3RtcGxGbklmKHRpdGxlVG1wbCx0aXRsZSkrJ1xcbiAgICAgICAgICAgICcrdG1wbEZuSWYoZGVzY3JpcHRpb25UbXBsLGRlc2NyaXB0aW9uKSsnXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9zZWN0aW9uPlxcbiAgICAgICd9fSx7a2V5Oid1cGRhdGVTZXR0aW5ncycsdmFsdWU6ZnVuY3Rpb24gdXBkYXRlU2V0dGluZ3MoKXt2YXIgc2V0dGluZ3M9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9OygwLF9hc3NpZ24yLmRlZmF1bHQpKHRoaXMuc2V0dGluZ3Msc2V0dGluZ3MpO3ZhciBfc2V0dGluZ3M9dGhpcy5zZXR0aW5ncyx0aXRsZT1fc2V0dGluZ3MudGl0bGUsZGVzY3JpcHRpb249X3NldHRpbmdzLmRlc2NyaXB0aW9uLGltZ1NyYz1fc2V0dGluZ3MuaW1nU3JjO3ZhciBjb250ZW50PXRoaXMuX2dlbmVyYXRlUG9wdXBDb250ZW50KHRpdGxlLGRlc2NyaXB0aW9uLGltZ1NyYyk7dGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO3RoaXMudXBkYXRlKCl9fV0pO3JldHVybiBJbmZvUG9wdXB9KEwuUG9wdXApOztQeE1hcC5JbmZvUG9wdXA9SW5mb1BvcHVwO3ZhciBEYXRhUG9wdXA9ZnVuY3Rpb24oX0wkUG9wdXAyKXsoMCxfaW5oZXJpdHMzLmRlZmF1bHQpKERhdGFQb3B1cCxfTCRQb3B1cDIpO2Z1bmN0aW9uIERhdGFQb3B1cCgpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307dmFyIF9yZXQyO3ZhciBjb25maWc9YXJndW1lbnRzLmxlbmd0aD4xJiZhcmd1bWVudHNbMV0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzFdOnt9OygwLF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcyxEYXRhUG9wdXApO3ZhciBfdGhpczM9KDAsX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsKERhdGFQb3B1cC5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRGF0YVBvcHVwKSkuY2FsbCh0aGlzKSk7X3RoaXMzLl9jcmVhdGVQb3B1cChzZXR0aW5ncyxjb25maWcpO3JldHVybiBfcmV0Mj1fdGhpczMsKDAsX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzMyxfcmV0Mil9KDAsX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShEYXRhUG9wdXAsW3trZXk6J19jcmVhdGVQb3B1cCcsdmFsdWU6ZnVuY3Rpb24gX2NyZWF0ZVBvcHVwKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTt2YXIgY29uZmlnPWFyZ3VtZW50cy5sZW5ndGg+MSYmYXJndW1lbnRzWzFdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1sxXTp7fTt0aGlzLnNldHRpbmdzPXNldHRpbmdzO3ZhciBfc2V0dGluZ3MyPXRoaXMuc2V0dGluZ3MsdGl0bGU9X3NldHRpbmdzMi50aXRsZSxkYXRhPV9zZXR0aW5nczIuZGF0YTt2YXIgY29udGVudD10aGlzLl9nZW5lcmF0ZVBvcHVwQ29udGVudCh0aXRsZSxkYXRhKTt2YXIgZGVmYXVsdENvbmZpZz17Y2xhc3NOYW1lOidtYXAtcG9wdXAtZGF0YScsbWF4V2lkdGg6NDAwLG1pbldpZHRoOjMwMH07dmFyIGNvbXBvc2VkQ29uZmlnPXt9OygwLF9hc3NpZ24yLmRlZmF1bHQpKGNvbXBvc2VkQ29uZmlnLGRlZmF1bHRDb25maWcsY29uZmlnKTt0aGlzLmluaXRpYWxpemUoY29tcG9zZWRDb25maWcpO3RoaXMuc2V0Q29udGVudChjb250ZW50KX19LHtrZXk6J19nZW5lcmF0ZVBvcHVwQ29udGVudCcsdmFsdWU6ZnVuY3Rpb24gX2dlbmVyYXRlUG9wdXBDb250ZW50KHRpdGxlLGRhdGEpe3ZhciBfdGhpczQ9dGhpczt2YXIgdG1wbEZuSWY9ZnVuY3Rpb24gdG1wbEZuSWYoZm4pe2Zvcih2YXIgX2xlbjI9YXJndW1lbnRzLmxlbmd0aCx2YWxzPUFycmF5KF9sZW4yPjE/X2xlbjItMTowKSxfa2V5Mj0xO19rZXkyPF9sZW4yO19rZXkyKyspe3ZhbHNbX2tleTItMV09YXJndW1lbnRzW19rZXkyXX1yZXR1cm4gdmFscy5sZW5ndGgmJnZhbHNbMF0hPT11bmRlZmluZWQ/Zm4uY2FsbC5hcHBseShmbixbX3RoaXM0XS5jb25jYXQodmFscykpOicnfTt2YXIgdGl0bGVUbXBsPWZ1bmN0aW9uIHRpdGxlVG1wbCh0aXRsZSl7cmV0dXJuJ1xcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1kYXRhLWJveF9faGVhZGVyXCI+XFxuICAgICAgICAgIDxoMyBjbGFzcz1cIm1hcC1kYXRhLWJveF9faGVhZGVyX190ZXh0XCI+Jyt0aXRsZSsnPC9oMz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICd9O3ZhciBkYXRhVG1wbD1mdW5jdGlvbiBkYXRhVG1wbChkYXRhKXt2YXIgZGF0YUxpc3Q9KDAsX2tleXMyLmRlZmF1bHQpKGRhdGEpLnJlZHVjZShmdW5jdGlvbihhY2N1bSxrZXkpe3JldHVybiBhY2N1bS5jb25jYXQoW2RhdGFJdGVtVG1wbChrZXksZGF0YVtrZXldKV0pfSxbXSkuam9pbignJyk7cmV0dXJuJ1xcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWRhdGEtYm94X190YWJsZVwiPlxcbiAgICAgICAgICAgICcrZGF0YUxpc3QrJ1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICd9O3ZhciBkYXRhSXRlbVRtcGw9ZnVuY3Rpb24gZGF0YUl0ZW1UbXBsKGxhYmVsLHZhbHVlKXtyZXR1cm4nXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWRhdGEtYm94X190YWJsZV9fY2VsbFwiPjxwPicrbGFiZWwrJzwvcD48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtZGF0YS1ib3hfX3RhYmxlX19jZWxsXCI+PHA+Jyt2YWx1ZSsnPC9wPjwvZGl2PlxcbiAgICAgICd9O3JldHVybidcXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFwLWJveC1kYXRhXCI+XFxuICAgICAgICAgICcrdG1wbEZuSWYodGl0bGVUbXBsLHRpdGxlKSsnXFxuICAgICAgICAgICcrdG1wbEZuSWYoZGF0YVRtcGwsZGF0YSkrJ1xcbiAgICAgICAgPC9zZWN0aW9uPlxcbiAgICAgICd9fSx7a2V5Oid1cGRhdGVTZXR0aW5ncycsdmFsdWU6ZnVuY3Rpb24gdXBkYXRlU2V0dGluZ3MoKXt2YXIgc2V0dGluZ3M9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9OygwLF9hc3NpZ24yLmRlZmF1bHQpKHRoaXMuc2V0dGluZ3Msc2V0dGluZ3MpO3ZhciBfc2V0dGluZ3MzPXRoaXMuc2V0dGluZ3MsdGl0bGU9X3NldHRpbmdzMy50aXRsZSxkYXRhPV9zZXR0aW5nczMuZGF0YTt2YXIgY29udGVudD10aGlzLl9nZW5lcmF0ZVBvcHVwQ29udGVudCh0aXRsZSxkYXRhKTt0aGlzLnNldENvbnRlbnQoY29udGVudCk7dGhpcy51cGRhdGUoKX19XSk7cmV0dXJuIERhdGFQb3B1cH0oTC5Qb3B1cCk7O1B4TWFwLkRhdGFQb3B1cD1EYXRhUG9wdXB9KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCI6NCxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiOjgsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjo5LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCI6MTUsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIjoxNixcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiOjE4LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjoxOSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIjoyMX1dLDEzODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEJlaGF2aW9yPXdpbmRvdy5QeE1hcEJlaGF2aW9yfHx7fTtQeE1hcEJlaGF2aW9yLkxlYWZsZXRSb290SW1wbD17cHJvcGVydGllczp7Y3JzOnt0eXBlOk9iamVjdH0sbGF0Ont0eXBlOk51bWJlcix2YWx1ZTozNy43NjcyMzc1LG5vdGlmeTp0cnVlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbG5nOnt0eXBlOk51bWJlcix2YWx1ZTotMTIxLjk1ODQxMzEsbm90aWZ5OnRydWUsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSx6b29tOnt0eXBlOk51bWJlcix2YWx1ZToxMCxub3RpZnk6dHJ1ZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LG1heFpvb206e3R5cGU6TnVtYmVyLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbWluWm9vbTp7dHlwZTpOdW1iZXIsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxtYXhCb3VuZHM6e3R5cGU6QXJyYXksb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxkaXNhYmxlRHJhZ2dpbmc6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGRpc2FibGVTY3JvbGxab29tOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxkaXNhYmxlVG91Y2hab29tOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxkaXNhYmxlQXR0cmlidXRpb246e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZX0sZml0VG9NYXJrZXJzOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J19maXRNYXBUb01hcmtlcnNJZkNvbmZpZ3VyZWQnfSxmbGV4VG9TaXplOnt0eXBlOkJvb2xlYW4scmVmbGVjdFRvQXR0cmlidXRlOnRydWUsdmFsdWU6ZmFsc2V9fSxhdHRhY2hlZDpmdW5jdGlvbiBhdHRhY2hlZCgpe3RoaXMuc2hvdWxkQWRkSW5zdCgpO3RoaXMuYWRkSW5zdCgpfSxkZXRhY2hlZDpmdW5jdGlvbiBkZXRhY2hlZCgpe3RoaXMuc2hvdWxkUmVtb3ZlSW5zdCgpO3RoaXMucmVtb3ZlSW5zdCgpfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7dmFyIG1hcEVsPVBvbHltZXIuZG9tKHRoaXMucm9vdCkucXVlcnlTZWxlY3RvcignI21hcCcpO3JldHVybiBMLm1hcChtYXBFbCxvcHRpb25zKX0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KCl7aWYodGhpcy5pc1NoYWR5U2NvcGVkKCkpe3RoaXMuc2NvcGVTdWJ0cmVlKHRoaXMuJC5tYXAsdHJ1ZSl9dmFyIG1hcE1vdmVGbj10aGlzLl9oYW5kbGVNYXBNb3ZlLmJpbmQodGhpcyk7dGhpcy5iaW5kRXZlbnRzKHsnbW92ZWVuZCc6bWFwTW92ZUZufSk7dGhpcy5saXN0ZW4odGhpcywncHgtbWFwLW1hcmtlci1hZGQnLCdfZml0TWFwVG9NYXJrZXJzSWZDb25maWd1cmVkJyk7dGhpcy5saXN0ZW4odGhpcywncHgtbWFwLW1hcmtlci1ncm91cC1hZGQnLCdfZml0TWFwVG9NYXJrZXJzSWZDb25maWd1cmVkJyl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdCgpe2lmKHRoaXMuaXNTaGFkeVNjb3BlZCgpKXt0aGlzLnNjb3BlU3VidHJlZSh0aGlzLiQubWFwLGZhbHNlKX10aGlzLnVubGlzdGVuKHRoaXMsJ3B4LW1hcC1tYXJrZXItYWRkJywnX2ZpdE1hcFRvTWFya2Vyc0lmQ29uZmlndXJlZCcpO3RoaXMubGlzdGVuKHRoaXMsJ3B4LW1hcC1tYXJrZXItZ3JvdXAtYWRkJywnX2ZpdE1hcFRvTWFya2Vyc0lmQ29uZmlndXJlZCcpfSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3ZhciBvcHRpb25zPXt9O29wdGlvbnMuem9vbUNvbnRyb2w9ZmFsc2U7b3B0aW9ucy5jcnM9dGhpcy5jcnN8fEwuQ1JTLkVQU0czODU3O29wdGlvbnMuY2VudGVyPVt0aGlzLmxhdCx0aGlzLmxuZ107b3B0aW9ucy56b29tPXRoaXMuem9vbTtvcHRpb25zLm1pblpvb209dGhpcy5taW5ab29tfHx1bmRlZmluZWQ7b3B0aW9ucy5tYXhab29tPXRoaXMubWF4Wm9vbXx8dW5kZWZpbmVkO29wdGlvbnMubWF4Qm91bmRzPXRoaXMubWF4Qm91bmRzfHx1bmRlZmluZWQ7b3B0aW9ucy5kcmFnZ2luZz0hdGhpcy5kaXNhYmxlRHJhZ2dpbmc7b3B0aW9ucy5zY3JvbGxXaGVlbFpvb209IXRoaXMuZGlzYWJsZVNjcm9sbFpvb207b3B0aW9ucy50b3VjaFpvb209IXRoaXMuZGlzYWJsZVRvdWNoWm9vbTtvcHRpb25zLmF0dHJpYnV0aW9uQ29udHJvbD0hdGhpcy5kaXNhYmxlQXR0cmlidXRpb247cmV0dXJuIG9wdGlvbnN9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7aWYobGFzdE9wdGlvbnMuY2VudGVyWzBdIT09bmV4dE9wdGlvbnMuY2VudGVyWzBdfHxsYXN0T3B0aW9ucy5jZW50ZXJbMV0hPT1uZXh0T3B0aW9ucy5jZW50ZXJbMV18fGxhc3RPcHRpb25zLnpvb20hPT1uZXh0T3B0aW9ucy56b29tKXt0aGlzLl91cGRhdGVNYXBWaWV3KCl9aWYobGFzdE9wdGlvbnMubWF4Wm9vbSE9PW5leHRPcHRpb25zLm1heFpvb20mJiFpc05hTihuZXh0T3B0aW9ucy5tYXhab29tKSl7dGhpcy5zZXRNYXhab29tKG5leHRPcHRpb25zLm1heFpvb20pfWlmKGxhc3RPcHRpb25zLm1pblpvb20hPT1uZXh0T3B0aW9ucy5taW5ab29tJiYhaXNOYU4obmV4dE9wdGlvbnMubWluWm9vbSkpe3RoaXMuc2V0TWF4Wm9vbShuZXh0T3B0aW9ucy5taW5ab29tKX1pZihsYXN0T3B0aW9ucy5tYXhCb3VuZHMhPT1uZXh0T3B0aW9ucy5tYXhCb3VuZHMmJiFpc05hTihuZXh0T3B0aW9ucy5tYXhCb3VuZHMpKXt0aGlzLnNldE1heFpvb20obmV4dE9wdGlvbnMubWF4Qm91bmRzKX1pZighbGFzdE9wdGlvbnMuZHJhZ2dpbmcmJm5leHRPcHRpb25zLmRyYWdnaW5nKXt0aGlzLmVsZW1lbnRJbnN0LmRyYWdnaW5nLmVuYWJsZSgpfWlmKGxhc3RPcHRpb25zLmRyYWdnaW5nJiYhbmV4dE9wdGlvbnMuZHJhZ2dpbmcpe3RoaXMuZWxlbWVudEluc3QuZHJhZ2dpbmcuZGlzYWJsZSgpfWlmKCFsYXN0T3B0aW9ucy5zY3JvbGxXaGVlbFpvb20mJm5leHRPcHRpb25zLnNjcm9sbFdoZWVsWm9vbSl7dGhpcy5lbGVtZW50SW5zdC5zY3JvbGxXaGVlbFpvb20uZW5hYmxlKCl9aWYobGFzdE9wdGlvbnMuc2Nyb2xsV2hlZWxab29tJiYhbmV4dE9wdGlvbnMuc2Nyb2xsV2hlZWxab29tKXt0aGlzLmVsZW1lbnRJbnN0LnNjcm9sbFdoZWVsWm9vbS5kaXNhYmxlKCl9aWYoIWxhc3RPcHRpb25zLnRvdWNoWm9vbSYmbmV4dE9wdGlvbnMudG91Y2hab29tKXt0aGlzLmVsZW1lbnRJbnN0LnRvdWNoWm9vbS5lbmFibGUoKX1pZihsYXN0T3B0aW9ucy50b3VjaFpvb20mJiFuZXh0T3B0aW9ucy50b3VjaFpvb20pe3RoaXMuZWxlbWVudEluc3QudG91Y2hab29tLmRpc2FibGUoKX19LGZpdE1hcFRvTWFya2VyczpmdW5jdGlvbiBmaXRNYXBUb01hcmtlcnMoKXtpZih0aGlzLmVsZW1lbnRJbnN0KXt0aGlzLmRlYm91bmNlKCdmaXQtbWFwLXRvLW1hcmtlcnMnLHRoaXMuX2ZpdEJvdW5kcywxKX19LF9maXRNYXBUb01hcmtlcnNJZkNvbmZpZ3VyZWQ6ZnVuY3Rpb24gX2ZpdE1hcFRvTWFya2Vyc0lmQ29uZmlndXJlZCgpe2lmKHRoaXMuZml0TWFwVG9NYXJrZXJzKXt0aGlzLmZpdE1hcFRvTWFya2VycygpfX0sX2ZpdEJvdW5kczpmdW5jdGlvbiBfZml0Qm91bmRzKGlzUmV0cnkpe3ZhciBib3VuZHM9dGhpcy5fZ2V0QWxsTWFya2VyR2VvbXMoKTt2YXIgYm91bmRzQXJlTm90VmFsaWQ9IWJvdW5kcy5pc1ZhbGlkfHwhYm91bmRzLmlzVmFsaWQoKTtpZihib3VuZHNBcmVOb3RWYWxpZCYmIWlzUmV0cnkpe3JldHVybiBzZXRUaW1lb3V0KHRoaXMuX2ZpdEJvdW5kcy5iaW5kKHRoaXMpLDApfWlmKCFib3VuZHNBcmVOb3RWYWxpZCl7dGhpcy5lbGVtZW50SW5zdC5maXRCb3VuZHMoYm91bmRzKX19LF9nZXRBbGxNYXJrZXJHZW9tczpmdW5jdGlvbiBfZ2V0QWxsTWFya2VyR2VvbXMoKXt2YXIgYm91bmRzPW5ldyBMLkxhdExuZ0JvdW5kczt0aGlzLmVsZW1lbnRJbnN0LmVhY2hMYXllcihmdW5jdGlvbihsYXllcil7aWYobGF5ZXIuaXNNYXJrZXImJmxheWVyLmdldExhdExuZyl7dmFyIG1hcmtlckdlb209bGF5ZXIuZ2V0TGF0TG5nKCk7Ym91bmRzLmV4dGVuZChtYXJrZXJHZW9tKX1pZihsYXllci5fbWFya2VyQ2x1c3RlciYmbGF5ZXIuZ2V0Qm91bmRzKXt2YXIgY2x1c3RlckJvdW5kcz1sYXllci5nZXRCb3VuZHMoKTtib3VuZHMuZXh0ZW5kKGNsdXN0ZXJCb3VuZHMpfX0pO3JldHVybiBib3VuZHN9LF9oYW5kbGVNYXBNb3ZlOmZ1bmN0aW9uIF9oYW5kbGVNYXBNb3ZlKCl7dGhpcy5kZWJvdW5jZSgnaGFuZGxlLW1hcC1tb3ZlJyxmdW5jdGlvbigpe3ZhciBsYXRMbmc9dGhpcy5lbGVtZW50SW5zdC5nZXRDZW50ZXIoKTt2YXIgem9vbT10aGlzLmVsZW1lbnRJbnN0LmdldFpvb20oKTt2YXIgYm91bmRzPXRoaXMuZWxlbWVudEluc3QuZ2V0Qm91bmRzKCk7aWYodGhpcy5sYXQhPT1sYXRMbmcubGF0KXt0aGlzLnNldCgnbGF0JyxsYXRMbmcubGF0KX1pZih0aGlzLmxuZyE9PWxhdExuZy5sbmcpe3RoaXMuc2V0KCdsbmcnLGxhdExuZy5sbmcpfWlmKHRoaXMuem9vbSE9PXpvb20pe3RoaXMuc2V0KCd6b29tJyx6b29tKX10aGlzLmZpcmUoJ3B4LW1hcC1tb3ZlZCcse2xhdDpsYXRMbmcubGF0LGxuZzpsYXRMbmcubG5nLHpvb206em9vbSxib3VuZHM6Ym91bmRzfSl9KX0sX3VwZGF0ZU1hcFZpZXc6ZnVuY3Rpb24gX3VwZGF0ZU1hcFZpZXcoKXtpZighdGhpcy5lbGVtZW50SW5zdClyZXR1cm47dGhpcy5kZWJvdW5jZSgndXBkYXRlLW1hcC12aWV3JyxmdW5jdGlvbigpe3ZhciBfZWxlbWVudEluc3QkZ2V0Q2VudGU9dGhpcy5lbGVtZW50SW5zdC5nZXRDZW50ZXIoKSxsYXQ9X2VsZW1lbnRJbnN0JGdldENlbnRlLmxhdCxsbmc9X2VsZW1lbnRJbnN0JGdldENlbnRlLmxuZzt2YXIgem9vbT10aGlzLmVsZW1lbnRJbnN0LmdldFpvb20oKTtpZih0aGlzLmxhdCE9PWxhdHx8dGhpcy5sbmchPT1sbmd8fHRoaXMuem9vbSE9PXpvb20pe3RoaXMuZWxlbWVudEluc3Quc2V0VmlldyhbbGF0LGxuZ10sem9vbSl9fSl9LGdldFZpc2libGVNYXJrZXJzOmZ1bmN0aW9uIGdldFZpc2libGVNYXJrZXJzKCl7dmFyIG1hcEJvdW5kcz10aGlzLmVsZW1lbnRJbnN0LmdldEJvdW5kcygpO3ZhciBtYXJrZXJzPVtdO3RoaXMuZWxlbWVudEluc3QuZWFjaExheWVyKGZ1bmN0aW9uKGxheWVyKXtpZihsYXllci5pc01hcmtlciYmbGF5ZXIuZ2V0TGF0TG5nKXtpZihtYXBCb3VuZHMuY29udGFpbnMobGF5ZXIuZ2V0TGF0TG5nKCkpJiZtYXJrZXJzLmluZGV4T2YobGF5ZXIpPT09LTEpe21hcmtlcnMucHVzaChsYXllcil9fWlmKGxheWVyLl9tYXJrZXJDbHVzdGVyKXtsYXllci5lYWNoTGF5ZXIoZnVuY3Rpb24obWFya2VyKXt2YXIgcGFyZW50Q2x1c3Rlcj1sYXllci5nZXRWaXNpYmxlUGFyZW50KG1hcmtlcik7aWYocGFyZW50Q2x1c3RlciYmbWFwQm91bmRzLmNvbnRhaW5zKHBhcmVudENsdXN0ZXIuZ2V0TGF0TG5nKCkpJiZtYXJrZXImJm1hcmtlcnMuaW5kZXhPZihtYXJrZXIpPT09LTEpe21hcmtlcnMucHVzaChtYXJrZXIpfX0pfX0pO3JldHVybiBtYXJrZXJzfX07UHhNYXBCZWhhdmlvci5MZWFmbGV0Um9vdD1bUHhNYXBCZWhhdmlvci5FbGVtZW50LFB4TWFwQmVoYXZpb3IuUGFyZW50TGF5ZXIsUHhNYXBCZWhhdmlvci5MZWFmbGV0Um9vdEltcGxdfSkoKTtcblxufSx7fV0sMTM5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JzsoZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7d2luZG93LlB4TWFwQmVoYXZpb3I9d2luZG93LlB4TWFwQmVoYXZpb3J8fHt9O1B4TWFwQmVoYXZpb3IuVGlsZUxheWVySW1wbD17cHJvcGVydGllczp7dXJsOnt0eXBlOlN0cmluZyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9fSxjYW5BZGRJbnN0OmZ1bmN0aW9uIGNhbkFkZEluc3QoKXtyZXR1cm4gdHlwZW9mIHRoaXMudXJsPT09J3N0cmluZycmJnRoaXMudXJsLmxlbmd0aH0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3JldHVybiBMLnRpbGVMYXllcihvcHRpb25zLnVybCl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7aWYobGFzdE9wdGlvbnMudXJsIT09bmV4dE9wdGlvbnMudXJsKXt0aGlzLmVsZW1lbnRJbnN0LnNldFVybChuZXh0T3B0aW9ucy51cmwpfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXtyZXR1cm57dXJsOnRoaXMudXJsfX19O1B4TWFwQmVoYXZpb3IuVGlsZUxheWVyPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuVGlsZUxheWVySW1wbF19KSgpO1xuXG59LHt9XX0se30sWzEzMSwxMzQsMTMwLDEzMiwxMzMsMTM1LDEzNiwxMzcsMTM4LDEzOV0pO1xuIl0sImZpbGUiOiJweC1tYXAtYnVuZGxlLmpzIn0=
