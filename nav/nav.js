(function() {

    Handlebars.registerHelper( "tabs", function( options ) {
        var items = [],
            o = _.extend( {}, options.hash ),
            orig = options.hash.items;
        
        for ( var i = 0; i < orig.length; i++ ) {
            items.push( _.isString( orig[ i ] ) ? { label: orig[ i ] } : orig[ i ] ); 
        }
        
        return new Handlebars.SafeString( Template._tabs( o ) );
    });

    Handlebars.registerHelper( "isActive", function( options ) {
        var o = options.hash,
            value = _.isString( o.item ) ? o.item : o.item.label,
            isActive = o.active === value;
        
        return isActive ? "class=active" : "";
    });

})();
