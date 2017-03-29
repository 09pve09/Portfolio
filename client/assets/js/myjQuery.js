// console.log("jQuery is here");



$(window).on('load', function() {
   $("#cover").fadeOut(2000);
});

function init_video() {
           var myVideo = document.getElementById("video");
           myVideo.addEventListener('ended', loopVideo, false);
}
 function loopVideo() {
     var myVideo = document.getElementById("video");
     myVideo.play();
 }

$(document).ready(function(){
  resizeDiv();

  setTimeout(show_main_nav, 2500);
  setTimeout(show_header, 1500);

  $( "#header_name" ).hover(
  function() {
    $( '.header_intro' ).fadeOut();
  }, function() {
    $( '.header_intro' ).fadeIn();
    }
  );

  $( ".link" ).hover(
  function() {
    $( '.header_intro' ).fadeOut();
  }
  );

  $( ".icon" ).hover(
  function() {
    $( this ).animate({'width': "50%"});
  }, function() {
    $( this ).animate({'width': "40%"});
    }
  );
  $('#preload_logo').hover(function() {
    $( '.preload_logo_span' ).fadeIn();

    }, function() {
    $( '.preload_logo_span' ).fadeOut();
  });

  $('#logo').hover(function() {
    $( '.logo_span' ).fadeIn();

    }, function() {
    $( '.logo_span' ).fadeOut();
  });

  $( ".link" ).click(function() {
    goToByScroll($(this).attr('href'));
    if($(this).attr('href') == '#work'){
      $('#projects_screen').fadeIn("slow");
      $('#projects_nav').fadeIn("slow");
    }
    return false;
  })

});

// function clicked(){
//   // $('.hover_animation').removeClass('background_changed');
//   $(this).addClass('background_changed');
//   console.log($(this));
//   console.log('lol');
// };

function goToByScroll(id){
    // console.log(id);
    $('html,body').animate({scrollTop: $(id).offset().top},'fast');
}

function show_header() {
  $(".header_intro").fadeIn(350);
};

function show_main_nav(){
  $( "#main_nav" ).fadeIn();
};

function rotateIcon() {
    icon = document.getElementById("nav-icon");
    icon.classList.toggle("change");
}

function checkNav() {
  nav = document.getElementById("mySidenav");
  if (nav.style.width == "20%") {
    nav.style.width = "0";
  }
  else {
    nav.style.width = "20%";
  }
}

window.onresize = function(event) {
  resizeDiv();
};

$(window).scroll(function(){
  height = $('.video_wrapper').css( "height" );
  // header_opacity = $('#welcome').css('opacity');
  // var ratio = window.devicePixelRatio || 1;
  number = height.match(/\d/g).join("");;
  // number = number.join("");
  h1 = screen.height;
  // console.log('screen width: ', w1);
  // console.log('h1: ', h1);
  // console.log('number: ', number);
  // console.log('this: ', $(this).scrollTop());
  if ($(this).scrollTop()>number/3){
    $('#about_text').fadeIn("slow");
    // console.log('ABOUT TEXT APPENDED');
  }
  if ($(this).scrollTop()>number*1.6){
    $('#projects_screen').fadeIn("slow");
    $('#projects_nav').fadeIn("slow");

  }
  if ($(this).scrollTop()>number){
    $('#sticky_nav').fadeIn();
    $( '.header_intro' ).fadeOut();
    $( "#main_nav" ).fadeOut();
  }
  // if((h1-number) <= 111){
  //   $('#about_text').fadeIn("slow");
  //   $('#projects_screen').fadeIn("slow");
  //   $('#projects_nav').fadeIn("slow");
  // }
  else {
    if(document.getElementById("mySidenav").style.width == "20%"){
      document.getElementById("mySidenav").style.width = "0";
    }
    if($("#checkbar").css('opacity') == "0"){
      rotateIcon();
    }
    $('#sticky_nav').fadeOut();
    $( "#main_nav" ).fadeIn();
  }
});

function checkMobileHeight(){
  w1 = screen.width;
  h1 = screen.height;
  if(w1 < h1){
    $('#about_text').fadeIn("slow");
    $('#projects_screen').fadeIn();
    $('#projects_nav').fadeIn();
    // console.log('APPENDED');
  }
}

function resizeDiv() {
  width = $('.video_wrapper').css( "width" );
  height = $('#main').css( "height" );
  // console.log('resized: ', height);
  number = height.match(/\d/g);
  number = number.join("");
  $("#video").css({'width': width});
  // console.log('height/3: ',number/3);
  $("#contact").css({'height': number/3+"px;"});
  // console.log('contact div: ', $('#contact').css( "height" ));
  // console.log('resized');
};
