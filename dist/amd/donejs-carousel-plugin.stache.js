/*@tucows/donejs-carousel-plugin@0.6.0#donejs-carousel-plugin.stache!steal-stache@3.1.3#steal-stache*/
define([
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
                '\n',
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
                '\n\t',
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
                '\n\t\t',
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
                '\n\t',
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
                '\n\n',
                7
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '<simpleCarousel',
                9
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                9
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                10
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'carousel \n\t\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.extraClass',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.extraClass',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\tbreakOnDesktop\n\t\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                10
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                10
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                16
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                16
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                17
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                17
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'slideTrack',
                17
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                17
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                17
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t\t\t',
                17
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                19
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
                19
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t\t',
                19
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                21
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t',
                21
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                23
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                23
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/simpleCarousel',
                24
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n',
                24
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! partial components end ',
                26
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n',
                26
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./isDesktopBrowser',
                28
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t',
                28
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./slides.length 1',
                30
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t',
                30
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>simpleCarousel',
                32
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t',
                32
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                34
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t',
                34
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! Note: We prevent default on the dragstart event (and use mouse events instead) to prevent the creation of the \'ghost image\' on drag',
                36
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                36
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! Note: The event handlers are on div.carousel because attaching them to div.slideTrack is unreliable (result of .slideTrack being translated)',
                37
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                37
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'carousel \n\t\t\t',
                38
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.extraClass',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t\t',
                38
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.extraClass',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t',
                38
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t',
                38
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\tbreakOnDesktop\n\t\t\t',
                38
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:dragstart',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './preventDefault(%event)',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:dragstart',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mousedown',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'start\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mousedown',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mouseup',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mouseup',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mouseleave',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mouseleave',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mousemove',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'move\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mousemove',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchstart',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'start\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchstart',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchend',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchend',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchcancel',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchcancel',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchmove',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'move\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchmove',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:keydown',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'keyboard\', %event)',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:keydown',
                38
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                59
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n\t\t\t',
                59
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                60
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                60
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'slideTrack',
                60
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                60
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
                '\n\t\t\t\t\n\t\t\t\t',
                60
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
                '\n\n\t\t\t',
                62
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
                '\n\n\t\t\t',
                64
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                66
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                66
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navArrows\n\t\t\t\t',
                66
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#unless ./carouselOptions.navArrows',
                66
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\t\tdisplayNone\n\t\t\t\t',
                66
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/unless',
                66
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                66
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                70
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t\t\t',
                70
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                72
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                72
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'leftArrow arrow',
                72
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                72
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                72
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'left\', %event)',
                72
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                72
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                74
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                74
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                75
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xmlns',
                75
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'http://www.w3.org/2000/svg',
                75
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xmlns',
                75
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'viewBox',
                75
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0 0 512 512',
                75
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'viewBox',
                75
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                75
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'path',
                true,
                75
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'd',
                75
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z',
                75
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'd',
                75
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'path',
                true,
                75
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                75
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                75
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                76
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\n\t\t\t\t',
                76
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                78
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                78
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'rightArrow arrow',
                78
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                78
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                78
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'right\', %event)',
                78
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                78
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                80
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                80
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                81
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xmlns',
                81
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'http://www.w3.org/2000/svg',
                81
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xmlns',
                81
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'viewBox',
                81
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0 0 512 512',
                81
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'viewBox',
                81
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                81
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                81
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'path',
                true,
                82
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'd',
                82
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z',
                82
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'd',
                82
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'path',
                true,
                82
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                82
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                83
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                83
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                84
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                84
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                85
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t',
                85
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                87
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                87
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                88
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                88
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots\n\t\t\t',
                88
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                88
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\tbreakOnDesktop\n\t\t\t',
                88
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                88
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                88
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                92
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                92
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#each ./slides',
                93
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                93
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                94
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                94
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'dot ',
                94
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ../activeSlideIndex %index',
                94
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                94
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                94
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                94
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                94
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '../dotClickHandler(%index)',
                94
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                94
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                94
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                94
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                95
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                95
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                96
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                96
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/each',
                97
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                97
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                98
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                98
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                99
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                99
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                100
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' ',
                100
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! When server side rendering',
                100
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                100
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>simpleCarousel',
                101
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n    ',
                101
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./slides.length 1',
                103
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n         ',
                103
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! don\'t show dots ',
                104
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                104
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                105
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    \n        ',
                105
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                107
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                107
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots\n            ',
                107
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                107
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n                breakOnDesktop\n            ',
                107
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                107
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                107
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                111
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                111
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#each ./slides',
                112
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                112
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                113
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                113
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'dot ',
                113
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is %index 0',
                113
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                113
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                113
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                113
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                113
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                    ',
                113
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                114
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                114
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                115
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                115
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/each',
                116
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                116
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                117
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                117
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                118
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                118
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                119
            ]
        },
        {
            'tokenType': 'done',
            'args': [119]
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