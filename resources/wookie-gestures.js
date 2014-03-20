
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
			// threshold on y axis -> do not consider movements over 30px
			if ( Math.abs( offsetTop_mousedown - e.pageY ) > 30 ){
				return;
			}

			if ( type == 'swipeLeft' )
			{
				// trigger event swipe left
				if ( offsetLeft_mousedown - e.pageX > 100 )
					callback( e );
			}
			else if ( type == 'swipeRight' )
			{
				// trigger event swipe right
				if ( e.pageX - offsetLeft_mousedown > 100 )
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
