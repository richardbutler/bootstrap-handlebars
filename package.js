Package.describe({
    summary : "Handlebars template package for Bootstrap components."
});

Package.on_use(function(api) {
    api.use(['bootstrap', 'underscore', 'templating'], 'client');
    
    api.add_files([
        'buttongroup/buttongroup.html',
        'dropdown/dropdown.html',
        'nav/nav.html',
        
        'buttongroup/buttongroup.js',
        'dropdown/dropdown.js',
        'nav/nav.js'
    ],
    'client');

});
