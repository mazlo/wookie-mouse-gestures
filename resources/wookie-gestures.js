// create an "immediately invoked function" expression -> creates an own scope
( function( $jQ )
{
	// this is considered the jquery plugin -> an additional method to the jquery object.
	// this function of name 'gesture' will be available like so: $jQ( selector ).gesture
	$jQ.fn.gesture = function( type, callback )
	{
		var offsetLeft_mouseup;
		var offsetLeft_mousedown;

		// record mouse up position
		$jQ( this ).bind( 'mouseup', function( e )
		{
			offsetLeft_mouseup = e.pageX;
			console.log( offsetLeft_mouseup );
			
			if ( type == 'swipeLeft' )
			{
				// trigger event swipe left
				if ( offsetLeft_mousedown - offsetLeft_mouseup > 100 )
					callback( e );
			}
			else if ( type == 'swipeRight' )
			{
				// trigger event swipe right
				if ( offsetLeft_mouseup - offsetLeft_mousedown > 100 )
					callback( e );
			}

			return this;
		});

		// record mouse down position
		$jQ( this ).bind( 'mousedown', function( e )
		{
			offsetLeft_mousedown = e.pageX;
			console.log( offsetLeft_mousedown );
		});

		return this;
	};

})( jQuery );	// invoke function -> pass the jquery object
