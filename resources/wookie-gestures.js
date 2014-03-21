
// create an "immediately invoked function" expression -> creates an own scope
( function( $jQ )
{
	// this is considered the jquery plugin -> an additional method to the jquery object.
	// this function of name 'gesture' will be available like so: $jQ( selector ).gesture
	$jQ.fn.gesture = function( type, callback )
	{
		var offsetLeft_mousedown;
		var offsetTop_mousedown;

		// record mouse up position
		$jQ( this ).bind( 'mouseup', function( e )
		{	
			var x_diff = offsetLeft_mousedown - e.pageX;
			var y_diff = offsetTop_mousedown - e.pageY;

			if ( Math.abs( x_diff ) > 100 )
			{
				// threshold on y axis -> do not consider movements over 30px
				if ( Math.abs( y_diff ) > 30 )
					return;

				// trigger event swipe left
				if ( x_diff > 100 && type == 'swipeLeft' )
					callback( e );

				// trigger event swipe right
				else if ( x_diff < 100 && type == 'swipeRight' )
					callback( e );
			}

			return this;
		});

		// record mouse down position
		$jQ( this ).bind( 'mousedown', function( e )
		{
			offsetTop_mousedown = e.pageY;
			offsetLeft_mousedown = e.pageX;
		});

		return this;
	};

})( jQuery );	// invoke function -> pass the jquery object
