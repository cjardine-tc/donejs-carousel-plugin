/*[global-shim-start]*/
(function(exports, global, doEval) {
	// jshint ignore:line
	var origDefine = global.define;

	var get = function(name) {
		var parts = name.split("."),
			cur = global,
			i;
		for (i = 0; i < parts.length; i++) {
			if (!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var set = function(name, val) {
		var parts = name.split("."),
			cur = global,
			i,
			part,
			next;
		for (i = 0; i < parts.length - 1; i++) {
			part = parts[i];
			next = cur[part];
			if (!next) {
				next = cur[part] = {};
			}
			cur = next;
		}
		part = parts[parts.length - 1];
		cur[part] = val;
	};
	var useDefault = function(mod) {
		if (!mod || !mod.__esModule) return false;
		var esProps = { __esModule: true, default: true };
		for (var p in mod) {
			if (!esProps[p]) return false;
		}
		return true;
	};

	var hasCjsDependencies = function(deps) {
		return (
			deps[0] === "require" && deps[1] === "exports" && deps[2] === "module"
		);
	};

	var modules =
		(global.define && global.define.modules) ||
		(global._define && global._define.modules) ||
		{};
	var ourDefine = (global.define = function(moduleName, deps, callback) {
		var module;
		if (typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for (i = 0; i < deps.length; i++) {
			args.push(
				exports[deps[i]]
					? get(exports[deps[i]])
					: modules[deps[i]] || get(deps[i])
			);
		}
		// CJS has no dependencies but 3 callback arguments
		if (hasCjsDependencies(deps) || (!deps.length && callback.length)) {
			module = { exports: {} };
			args[0] = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args[1] = module.exports;
			args[2] = module;
		} else if (!args[0] && deps[0] === "exports") {
			// Babel uses the exports and module object.
			module = { exports: {} };
			args[0] = module.exports;
			if (deps[1] === "module") {
				args[1] = module;
			}
		} else if (!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		result = module && module.exports ? module.exports : result;
		modules[moduleName] = result;

		// Set global exports
		var globalExport = exports[moduleName];
		if (globalExport && !get(globalExport)) {
			if (useDefault(result)) {
				result = result["default"];
			}
			set(globalExport, result);
		}
	});
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function() {
		// shim for @@global-helpers
		var noop = function() {};
		return {
			get: function() {
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load) {
				doEval(__load.source, global);
			}
		};
	});
})(
	{},
	typeof self == "object" && self.Object == Object
		? self
		: typeof process === "object" &&
		  Object.prototype.toString.call(process) === "[object process]"
			? global
			: window,
	function(__$source__, __$global__) {
		// jshint ignore:line
		eval("(function() { " + __$source__ + " \n }).call(__$global__);");
	}
);

/*@tucows/donejs-carousel-plugin@0.1.0#donejs-carousel-plugin.stache!steal-stache@3.1.3#steal-stache*/
define('@tucows/donejs-carousel-plugin/donejs-carousel-plugin.stache', [
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.2.9#can-view-import',
    'can-stache-bindings@3.11.12#can-stache-bindings'
], function (module, stache, mustacheCore) {
    var renderer = stache('donejs-carousel-plugin.stache', [
        {
            'tokenType': 'special',
            'args': [
                '! partial components start ',
                1
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n',
                1
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '<navDotsSVG',
                2
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n    ',
                2
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'version',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '1.1',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'version',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'id',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'Layer_1',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'id',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xmlns',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'http://www.w3.org/2000/svg',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xmlns',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xmlns:xlink',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'http://www.w3.org/1999/xlink',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xmlns:xlink',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'x',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0px',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'x',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'y',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0px',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'y',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'viewBox',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0 0 18 18',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'viewBox',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'enable-background',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'new 0 0 18 18',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'enable-background',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xml:space',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'preserve',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xml:space',
                3
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                4
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                4
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'circle',
                true,
                5
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'cx',
                5
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '9',
                5
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'cx',
                5
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'cy',
                5
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '9',
                5
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'cy',
                5
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'r',
                5
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '8',
                5
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'r',
                5
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'circle',
                true,
                5
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                5
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                6
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                6
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/navDotsSVG',
                7
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n',
                7
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! partial components end ',
                8
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n\n',
                8
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./isDesktopBrowser',
                10
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n    ',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! Note: We prevent default on the dragstart event (and use mouse events instead) to prevent the creation of the \'ghost image\' on drag',
                11
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n    ',
                11
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! Note: The event handlers are on div.carousel because attaching them to div.slideTrack is unreliable (result of .slideTrack being translated)',
                12
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n    ',
                12
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'carousel \n        ',
                14
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.extraClass',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n            ',
                14
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.extraClass',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n        ',
                14
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n        ',
                14
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n            breakOnDesktop\n        ',
                14
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:dragstart',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './preventDefault(%event)',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:dragstart',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mousedown',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'start\')',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mousedown',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mouseup',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mouseup',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mouseleave',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mouseleave',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mousemove',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'move\')',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mousemove',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchstart',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'start\')',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchstart',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchend',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchend',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchcancel',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchcancel',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchmove',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'move\')',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchmove',
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:keydown',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'keyboard\', %event)',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:keydown',
                14
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                23
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n        ',
                23
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                25
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                25
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'slideTrack',
                25
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                25
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                25
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                25
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                26
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
                26
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                26
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                27
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n        ',
                27
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                29
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                29
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navArrows\n            ',
                29
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#unless ./carouselOptions.navArrows',
                29
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n                displayNone\n            ',
                29
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/unless',
                29
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                29
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                32
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n            ',
                32
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                34
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                34
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'leftArrow arrow',
                34
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                34
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                34
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'left\', %event)',
                34
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                34
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                34
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                34
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                35
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xmlns',
                35
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'http://www.w3.org/2000/svg',
                35
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xmlns',
                35
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'viewBox',
                35
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0 0 512 512',
                35
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'viewBox',
                35
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                35
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                    ',
                35
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'path',
                true,
                36
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'd',
                36
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z',
                36
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'd',
                36
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'path',
                true,
                37
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                37
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                38
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                38
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                39
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n            ',
                39
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'rightArrow arrow',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'right\', %event)',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                41
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                41
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                41
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                42
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xmlns',
                42
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' http://www.w3.org/2000/svg ',
                42
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xmlns',
                42
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'viewBox',
                42
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0 0 512 512 ',
                42
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'viewBox',
                42
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                42
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                    ',
                42
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'path',
                true,
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'd',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'M504 256C504 119 393 8 256 8S8 119 8 256s111\n                248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72\n                20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6\n                0-12-5.4-12-12z ',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'd',
                43
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'path',
                true,
                46
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                46
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                47
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                47
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                48
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                48
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                49
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                49
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                50
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                50
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                51
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                51
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots ',
                51
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                51
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' breakOnDesktop ',
                51
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                51
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' ',
                51
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                51
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                51
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                51
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#each ./slides',
                52
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                52
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                53
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                53
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'dot ',
                53
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ../activeSlideIndex %index',
                53
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                53
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                53
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' ',
                53
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                53
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                53
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '../dotClickHandler(%index) ',
                53
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                53
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                53
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                53
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                54
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                54
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                55
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                55
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/each',
                56
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                56
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                57
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                57
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                58
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                58
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                59
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                59
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'carousel ',
                59
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.extraClass',
                59
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' ',
                59
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.extraClass',
                59
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' ',
                59
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                59
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' ',
                59
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                59
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n                breakOnDesktop ',
                59
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                59
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' ',
                59
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                59
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                60
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                60
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                61
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                61
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'slideTrack ',
                61
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                61
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                61
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                61
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                62
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
                62
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                62
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                63
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                63
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                64
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                64
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                65
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                65
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots ',
                65
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                65
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' breakOnDesktop ',
                65
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                65
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                65
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                65
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                65
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#each ./slides',
                66
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                66
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                67
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                67
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'dot ',
                67
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is %index 0',
                67
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                67
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                67
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' ',
                67
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                67
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                67
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                67
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                68
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                68
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                69
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                69
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/each',
                70
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                70
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                71
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                71
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                72
            ]
        },
        {
            'tokenType': 'done',
            'args': [72]
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*@tucows/donejs-carousel-plugin@0.1.0#donejs-carousel-plugin*/
define('@tucows/donejs-carousel-plugin', [
    'exports',
    'can-component',
    'can-define/map/map',
    '@tucows/donejs-carousel-plugin/donejs-carousel-plugin.stache',
    'steal-platform',
    'jquery',
    '@tucows/donejs-carousel-plugin/donejs-carousel-plugin.less'
], function (exports, _canComponent, _map, _donejsCarouselPlugin, _stealPlatform, _jquery) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = exports.isMobile = exports.SWIPE_OBJECT_DEFAULT = undefined;
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _map2 = _interopRequireDefault(_map);
    var _donejsCarouselPlugin2 = _interopRequireDefault(_donejsCarouselPlugin);
    var _stealPlatform2 = _interopRequireDefault(_stealPlatform);
    var _jquery2 = _interopRequireDefault(_jquery);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var SWIPE_OBJECT_DEFAULT = exports.SWIPE_OBJECT_DEFAULT = {
        startX: null,
        currentX: null,
        swipeLength: null
    };
    var isMobile = exports.isMobile = function isMobile(isTablet) {
        if (isTablet) {
            return window.innerWidth < 1024;
        }
        return window.innerWidth < 600;
    };
    var ViewModel = exports.ViewModel = _map2.default.extend({
        slides: 'any',
        activeSlideIndex: {
            type: 'number',
            value: 0
        },
        lastSlideIndex: {
            type: 'number',
            get: function get() {
                if (this.slides) {
                    return this.slides.length - 1;
                }
            }
        },
        swipeObject: {
            type: 'observable',
            value: SWIPE_OBJECT_DEFAULT
        },
        dragging: {
            type: 'boolean',
            value: false
        },
        slideWidth: {
            type: 'number',
            get: function get() {
                if ((0, _jquery2.default)('.slide')) {
                    return (0, _jquery2.default)('.slide').outerWidth(true);
                }
            }
        },
        isDesktop: {
            type: 'boolean',
            get: function get() {
                return !isMobile('isTablet');
            }
        },
        carouselOptions: {
            type: 'any',
            set: function set(newVal) {
                if (newVal) {
                    if (newVal.autoPlay && (newVal.breakOnDesktop ? !this.isDesktop : true)) {
                        this.autoPlay = newVal.autoPlay;
                    }
                    return newVal;
                }
            }
        },
        autoPlayInterval: { type: 'any' },
        autoPlay: {
            type: 'number',
            set: function set(duration) {
                var _this = this;
                if (!isNaN(duration)) {
                    this.autoPlayInterval = setInterval(function () {
                        _this.arrowClickHandler(_this.autoPlayDirection);
                    }, duration);
                    return duration;
                }
            }
        },
        autoPlayDirection: {
            type: 'string',
            value: 'right'
        },
        isDesktopBrowser: {
            type: 'boolean',
            value: _stealPlatform2.default.isDesktopBrowser
        },
        oneSlideOver: function oneSlideOver(direction) {
            if (direction == 'right') {
                this.activeSlideIndex++;
            } else {
                this.activeSlideIndex--;
            }
            this.moveCarousel('active slide');
        },
        directionHandler: function directionHandler(direction, maxSlide) {
            if (this.activeSlideIndex !== maxSlide) {
                this.oneSlideOver(direction);
            } else if (this.autoPlay) {
                var oppositeDirection = direction == 'right' ? 'left' : 'right';
                this.autoPlayDirection = oppositeDirection;
                this.oneSlideOver(oppositeDirection);
            }
        },
        arrowClickHandler: function arrowClickHandler(direction, event) {
            if (event) {
                event.preventDefault();
            }
            if (direction == 'keyboard') {
                direction = this.determineKeyDirection(event);
            }
            if (direction == 'right') {
                this.directionHandler('right', this.lastSlideIndex);
            } else if (direction == 'left') {
                this.directionHandler('left', 0);
            }
        },
        determineKeyDirection: function determineKeyDirection(event) {
            if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
                if (event.keyCode === 37) {
                    return 'left';
                } else if (event.keyCode === 39) {
                    return 'right';
                }
            }
        },
        dotClickHandler: function dotClickHandler(index) {
            this.activeSlideIndex = index;
            this.moveCarousel('active slide');
        },
        swipeHandler: function swipeHandler(event, action) {
            if (this.carouselOptions.breakOnDesktop && this.isDesktop) {
                return false;
            }
            switch (action) {
            case 'start':
                this.swipeStart(event);
                break;
            case 'move':
                this.swipeMove(event);
                break;
            case 'end':
                this.swipeEnd();
                break;
            }
        },
        defineTouchEvent: function defineTouchEvent(event) {
            var fingerCount = event.touches ? event.touches.length : 1;
            var touches = event.touches ? event.touches[0] : null;
            return {
                fingerCount: fingerCount,
                touches: touches
            };
        },
        swipeStart: function swipeStart(event) {
            var touchEvent = this.defineTouchEvent(event);
            if (touchEvent.fingerCount > 1) {
                return false;
            }
            this.swipeObject.startX = this.swipeObject.currentX = touchEvent.touches ? touchEvent.touches.pageX : event.clientX;
            this.dragging = true;
        },
        swipeMove: function swipeMove(event) {
            var touchEvent = this.defineTouchEvent(event);
            if (touchEvent.fingerCount > 1 || !this.dragging) {
                return false;
            }
            var currentLeft = this.getLeft(this.activeSlideIndex);
            this.swipeObject.currentX = touchEvent.touches ? touchEvent.touches.pageX : event.clientX;
            var swipeLength = void 0;
            this.swipeObject.swipeLength = swipeLength = this.swipeObject.currentX - this.swipeObject.startX;
            if (this.swipeObject.swipeLength < -4 || this.swipeObject.swipeLength > 4) {
                this.preventDefault(event);
            }
            var moveAmount = currentLeft + swipeLength;
            this.moveCarousel('pointer position', moveAmount);
        },
        swipeEnd: function swipeEnd() {
            var swipePercentage = this.swipeObject.swipeLength / this.slideWidth * 100;
            if (swipePercentage < -10 && this.activeSlideIndex != this.lastSlideIndex) {
                this.activeSlideIndex++;
                this.moveCarousel('active slide');
            } else if (swipePercentage > 10 && this.activeSlideIndex != 0) {
                this.activeSlideIndex--;
                this.moveCarousel('active slide');
            } else {
                this.moveCarousel('active slide');
            }
            this.swipeObject = SWIPE_OBJECT_DEFAULT;
            this.dragging = false;
        },
        getLeft: function getLeft(slideIndex) {
            var leftOfSlide = -this.slideWidth * slideIndex;
            return leftOfSlide;
        },
        moveCarousel: function moveCarousel(moveTo, pointerPosition) {
            var translateX = void 0;
            var transitionAnimation = 'none';
            switch (moveTo) {
            case 'active slide':
                translateX = 'translateX(' + -(this.activeSlideIndex * 100) + '%)';
                transitionAnimation = '500ms ease';
                break;
            case 'pointer position':
                translateX = 'translateX(' + pointerPosition + 'px)';
                break;
            }
            var classSelector = void 0;
            if (this.carouselOptions.extraClass) {
                classSelector = '.' + this.carouselOptions.extraClass + ' .slideTrack';
            } else {
                classSelector = '.slideTrack';
            }
            (0, _jquery2.default)(classSelector).css({
                'transform': translateX,
                'transition': transitionAnimation
            });
        },
        preventDefault: function preventDefault(event) {
            event.preventDefault();
        },
        handleBreakOnDesktop: function handleBreakOnDesktop() {
            this.moveCarousel('pointer position', 0);
            this.clearAutoPlay();
        },
        clearAutoPlay: function clearAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
            }
        }
    });
    exports.default = _canComponent2.default.extend({
        tag: 'tucows-donejs-carousel',
        ViewModel: ViewModel,
        view: _donejsCarouselPlugin2.default,
        events: {
            '{window} resize': function windowResize() {
                if (this.viewModel.carouselOptions.breakOnDesktop && this.viewModel.isDesktop) {
                    this.viewModel.handleBreakOnDesktop();
                }
            },
            '{element} beforeremove': function elementBeforeremove() {
                this.viewModel.clearAutoPlay();
            }
        }
    });
});
/*[global-shim-end]*/
(function(global) { // jshint ignore:line
	global._define = global.define;
	global.define = global.define.orig;
}
)(typeof self == "object" && self.Object == Object ? self : (typeof process === "object" && Object.prototype.toString.call(process) === "[object process]") ? global : window);