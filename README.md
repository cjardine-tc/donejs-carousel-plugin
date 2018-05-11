# @tucows/donejs-carousel-plugin

[![Build Status](https://travis-ci.org/tucows/donejs-carousel-plugin.svg?branch=master)](https://travis-ci.org/tucows/donejs-carousel-plugin)

A carousel plugin for DoneJS.

## Usage

### Import in stache

```js
<can-import from="@tucows/tucows-carousel-plugin" />
```

### Insert component in stache 

Call the element

```js
<tucows-donejs-carousel></tucows-donejs-carousel>
```

Pass it the required properties

```js
<tucows-donejs-carousel
    activeSlideIndex:to='./activeSlideIndex'
    slides:from='./userReviews'
    carouselOptions:from='./carouselOptions'
>

</tucows-donejs-carousel>
```

Include the slide content. 

Make sure to do the following:

* Loop through same property that you passed into component as 'slides'; in the example below, this is userReviews
* Include this in the class of the parent element
    * ```jsclass="slide {{#is ../activeSlideIndexAltTest %index}} active {{/is}}" tabindex="{{#is ../activeSlideIndexAltTest %index}} 0 {{else}} -1 {{/is}}">```
    * And any other class you want; in the example below, block and icon are optional classes for styling

```js
<tucows-donejs-carousel
    activeSlideIndex:to='./activeSlideIndex'
    slides:from='./userReviews'
    carouselOptions:from='./carouselOptions'
>
    {{#each ./userReviews}}
        <div class="block icon slide {{#is ../activeSlideIndexAltTest %index}} active {{/is}}" tabindex="{{#is ../activeSlideIndexAltTest %index}} 0 {{else}} -1 {{/is}}">
        <div class="pointIcon">
            <ting-svg hash="{{./icon}}" title="" dimensions="66" />
        </div>
        <h2>{{ l10n ./title}}</h2>
        <p class="tagline">{{ l10n ./body}}</p>
        </div>
    {{/each}}

</tucows-donejs-carousel>
```

### Define the JS properties 

define activeSlideIndex

```Js 
    /**
	 * @property {number} activeSlideIndex passed up from the carousel component
	 */
	activeSlideIndex: 'number',
```

define carousel options 

```js
    /**
	 * @property {object} carouselOptions options to be passed down to carousel component
	 */
	carouselOptions: {
		type: 'any',
		value: {
			navArrows: false,
			extraClass: 'userReviewsCarousel',
            breakOnDesktop: true,
            autoPlay: 6000
		}
	},
```

 ### Carousel options

Option | Type | Default | Description
------ | ---- | ------- | -----------
navArrows | boolean | false | display clickable arrows for slide navigation
extraClasses | string | none | class name to be added to parent carousel element for styling
breakOnDesktop | boolean | false |  turn off the carousel on desktop view (1024px width and greater). All slides will shown side-by-side.
autoPlay | number | off | enable auto-play sliding. the number represents interval in millisecond.

