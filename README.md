# NOWAY JS:
<p><b>nowAy</b> is a <b>javascript library</b> designed to make easier the HTML DOM element creation and manipulation, event handling, css, very simplified AJAX.
It is free, under the <b>open-source MIT license</b>.<br><br>
Created by <b>Gokul J S</b> from <b>ROAMSOFT</br>.</p>

# Features:
1. Create an element easily, and fast,
2. You can pass multiple classes or attrubites at a time.
3. It enables you a writing in-line code.
4. Other features are updated soon

# Create noway object:
<pre>var noway = window._noway;</pre>

# Debug results on or off: (As default, that is on)
<pre>
noway.debug = false;
</pre>

# Create an Element:
<pre> var obj = {
    "element": "div", // You may use any type of element
    "id": "example_id",
    "class": "example_class" (or) ["example_class",...],
    "attr": {"key1":"value1", "key2":"value2",...},
    "text": "example text",
    "html": "<p>example html</p>",
    "append": "#id" (or) ".class" (or) HTMLElement object,
};
noway.createElem(obj); // Result will done automatically and returns the created HTMLElement object (or) errors</pre>

# Inner text:
<pre>
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "text": "example text",
};
noway.text(obj); // Result will done automatically and returns the created HTMLElement object (or) errors</pre>

# Inner html
<pre>
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "html": "<p>example html</p>",
};
noway.html(obj); // Result will done automatically and returns the created HTMLElement object (or) errors</pre>

# Set attributes:
<pre>
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "attr": {"key1":"value1", "key2":"value2",...},
};
noway.attr(obj); // Result will done automatically and returns the created HTMLElement object (or) errors</pre>

# Add classes:
<pre>
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "class": "example_class" (or) ["example_class",...],
};
noway.addClass(obj); // Result will done automatically and returns the created HTMLElement object (or) errors</pre>

# Remove classes:
<pre>
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "class": "example_class" (or) ["example_class",...],
};
noway.removeClass(obj); // Result will done automatically and returns the created HTMLElement object (or) errors</pre>

# Has class:
<pre>
var obj = {
    "element": "#id" (or) ".class" (or) HTMLElement object,
    "class": "example_class" (or) ["example_class",...],
};
noway.hasClass(obj); // Return boolean</pre>
