  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
     /* { ACA SE CREA SOLA LA NUEVA VENTANA
        path: '/login-screen/',
        /*
        We can load it from url like:
        url: 'login-screen.html'
        But in this example we load it just from content string
        */
      /*  content: '\
        <div class="page no-navbar no-toolbar no-swipeback">\
            <div class="page-content login-screen-content">\
              <div class="login-screen-title">Agenda docente</div>\
              <form>\
                <div class="list">\
                </div>\
                <div class="list">\
                  <ul>\
                    <li><a href="#" class="list-button">Ingresar</a></li>\
                  </ul>\
                  <div class="block-footer">\
                    <p>Bienvenido, ya tienes una cuenta?</p>\
                    <p><a href="#" class="link back">Cerrar ventana de usuario</a></p>\
                  </div>\
                </div>\
              </form>\
            </div>\
          </div>'
        }
      */
    ]
    
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});
email = "primerusuario@primero.com"
password = "123456"
firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;  
  alert(errorMessage);
  // ...
});

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // 
});
//.then( function () {

  //mainView.router.navigate('/about/');

//});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    alert('Hello');
})

// Login Screen-Modal DOM events
$$('.login-screen').on('loginscreen:open', function (e) {
  console.log('Login screen open')
});
$$('.login-screen').on('loginscreen:opened', function (e) {
  console.log('Login screen opened')
});
$$('.login-screen').on('loginscreen:close', function (e) {
  console.log('Login screen close')
});
$$('.login-screen').on('loginscreen:closed', function (e) {
  console.log('Login screen closed')
});