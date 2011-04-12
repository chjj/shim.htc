# shim.htc: An HTML5 Shim

__shim.htc__ is an [HTML Component](http://en.wikipedia.org/wiki/HTML_Components) and 
html5 "shim" to fix bugged HTML5 elements in IE. 

Technically speaking, it's not actually a shim: The traditional html5 shim works 
by using `document.createElement` to essentially fix IE's HTML parser. This `.htc` 
file is different in that it will go in after the fact and fix the DOM structure 
by hand. This is the only way to do it because `.htc`'s can only be executed after 
the document has loaded. It's not as elegant, no, but you don't have to muddy up 
your markup. It's a little hacksy, but this is all it requires:

    html { behavior: url(shim.htc); }

Obviously, all non-IE browsers will completely ignore that property. 

It arguably saves more bandwidth in the long run because a `.css` and `.htc` file 
can be cached, whereas conditional comments will linger on every response served. 
It also seems much better looking than the ugly looking conditional comments which 
only pollute your markup. 

## License

(c) Copyright 2011 (MIT Licensed), Christopher Jeffrey.

See LICENSE for more info.