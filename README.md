# wookie-mouse-gestures

Lightweight jQuery plugin to enable recognizing mouse gestures on DOM elements, e.g. swipe right/left

### Usage

Add `wookie-gestures.js` in the head section like so

	<head>
		<!-- required! -->
		<script src='resources/jquery-1.8.2.js' type='text/javascript'></script>
		<script src='resources/wookie-gestures.js' type='text/javascript'></script>
	…
	</head>

You can use the `gesture`-function on each jQuery-object like so

	$jQ( '.element' ).gesture( 'swipeRight', function( e )
	{
		alert( 'what shall we do with the drunken sailor?' );
	});

See `index.html` for a complete example.

### Notes

* You need to swipe at least 100px horizontally and
* within 40px vertically