clickable
=========

A simple jQuery plugin to add the class "clicked" the last-clicked element.

Useful for listening to clicks on or in a certain element for easy CSS styling and animation.


## Usage

Include jQuery and the plugin on a page. Then pass a class name to it like so:

```js
	$('body').clickable('.foo');
```

Now clicking on or in an element with the class "foo" will add the class "clicked" to it (and remove it from other elements with that class.)

```css
	.foo {
		background-color: blue;
	}
	.foo.clicked {
		background-color: red;
		//Include awesome CSS animations here
	}
```
Available as a bower plugin too:

```html
	bower install clickable
```
