var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();


app.use( express.static( path.join( root, './client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( bp.json());
app.use('/animate/styles', express.static(root + '/node_modules/animate.css/'));
app.use('/vidage/styles', express.static(root + '/node_modules/vidage/dist/styles/'));
app.use('/vidage/scripts', express.static(root + '/node_modules/vidage/dist/scripts/'));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
