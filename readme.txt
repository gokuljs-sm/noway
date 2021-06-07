NOWAY JS:
nowAy js is a javascript library designed to make easier the HTML DOM element creation and manipulation, event handling, css, very simplified AJAX.
It is free, under the open-source MIT license.
Created by Gokul J S from ROAMSOFT.

Features:
1. Create an element easily, and fast,
2. You can pass multiple classes or attrubites at a time.
3. It enables you a writing in-line code.
4. Other features are updated soon

Example to use:-
Create noway object:
var noway = window._noway;

Debug results on or off: (As default, that is on)
noway.debug = false;

Create an Element:
var obj = {
    "element": "div", // You may use any type of element
    "id": "example_id",
    "class": "example_class" (or) ["example_class",...],
    "attr": {"key1":"value1", "key2":"value2",...},
    "text": "example text",
    "html": "<p>example html</p>",
    "append": "#id" (or) ".class" (or) HTMLElement object,
};
noway.createElem(obj); // Result will done automatically and returns the created HTMLElement object (or) errors

Inner text
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "text": "example text",
};
noway.text(obj); // Result will done automatically and returns the created HTMLElement object (or) errors

Inner html
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "html": "<p>example html</p>",
};
noway.html(obj);

Set attributes:
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "attr": {"key1":"value1", "key2":"value2",...},
};
noway.attr(obj); // Result will done automatically and returns the created HTMLElement object (or) errors

Add classes:
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "class": "example_class" (or) ["example_class",...],
};
noway.addClass(obj); // Result will done automatically and returns the created HTMLElement object (or) errors

Remove classes:
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "class": "example_class" (or) ["example_class",...],
};
noway.removeClass(obj); // Result will done automatically and returns the created HTMLElement object (or) errors

Has class:
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "class": "example_class" (or) ["example_class",...],
};
noway.hasClass(obj); // Return boolean