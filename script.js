const http = require('http');

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".signOut").css("display","block");
    console.log("Signed in");
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        $(".g-signin2").css("display","block");
        $(".signOut").css("display","none");
        console.log("Signed Out");
    });
  }

