// console.log("jQuery is here");

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
  header_opacity = $('#welcome').css('opacity');
  number = height.match(/\d/g);
  number = number.join("");
  // console.log('video_div: ', height);
  if ($(this).scrollTop()>number/3){
    $('#about_text').fadeIn("slow");
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

function resizeDiv() {
  width = $('.video_wrapper').css( "width" );
  height = $('.video_wrapper').css( "height" );
  // console.log('resized: ', height);
  number = height.match(/\d/g);
  number = number.join("");
  $("#video").css({'width': width});
  // console.log('height/3: ',number/3);
  $("#contact").css({'height': number/3+"px;"});
  // console.log('contact div: ', $('#contact').css( "height" ));
  // console.log('resized');
};
