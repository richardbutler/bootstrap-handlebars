(function() {

    Handlebars.registerHelper( "buttonToolbar", function( options ) {
        return new Handlebars.SafeString( Template._buttonToolbar( options.hash || this ) );
    });
    
    Handlebars.registerHelper( "buttonGroup", function( options ) {
        return new Handlebars.SafeString( Template._buttonGroup( options.hash || this ) );
    });

    Handlebars.registerHelper( "button", function( options ) {
        var o;
        
        if ( this instanceof String ) {
            o = _.extend( options.hash, { label: this } );
        } else {
            o = this;
        }
        
        return new Handlebars.SafeString( Template._button( o ) );
    });

})();
