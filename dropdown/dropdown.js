(function() {

    Handlebars.registerHelper( "dropdown", function( options ) {
        var o = options.hash || _.extend( {}, this );
        
        // If we haven't been supplied with a label, use the label of the
        // first child item passed in. It's a better fallback than no label at
        // all, but only just.
        if ( !o.label ) {
            o.label = o.items[ 0 ].label;
        }
        
        return new Handlebars.SafeString( Template._dropdown( o ) );
    });
    
    Handlebars.registerHelper( "dropdownMenu", function( options ) {
        return new Handlebars.SafeString( Template._dropdownMenu( options.hash || this ) );
    });

})();
