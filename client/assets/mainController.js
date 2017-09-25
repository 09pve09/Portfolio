app.controller('mainController', ['$scope', '$location', 'mainFactory', '$rootScope', function($scope, $location, mainFactory, $rootScope) {
  library = {
    'housingcrime': {
      'name': "HousingCrime",
      'image_name': "housingcrime",
      'description': "Key team member that developed 'Housing Crime', which allows people to check if there was any crime happened for the past 2 weeks in particular area of San Francisco along with the listing houses. The whole idea is to show people if that particular area, they are planning to purchase a property, is safe.",
      'description2': "Used technologies: Python, Django, Google Maps API, SF Crime API, SF Real Estate Database",
      'github': 'https://github.com/zhongraymond/Housing_Crime',
      'web': 'http://54.191.108.91/'
    },
    'spaceranger': {
      name: "SpaceRanger",
      image_name: "spaceranger",
      description: 'A 2d game build on HTML5 canvas. Shoot the aliens and get the highest score in the game!',
      description2: 'Used technologies: MEAN',
      github: 'https://github.com/09pve09/SpaceRanger',
      web: 'http://54.191.83.44/'
    },
    'foodfind': {
      name: "FoodFind",
      image_name: "foodfind",
      description: '"FoodFind" allows users to view photos of the restaurants that are near them. If the user likes the photo, they can click on “like” button and see the full information about this location, along with the directions.',
      description2: 'Used technologies: Ruby on Rails, Google API, Yelp API, Yelp Fusion API.',
      github: 'https://github.com/conniechu929/rails_project',
      web: 'http://52.40.131.196/'
    },
    'billpay': {
      name: "BillPay",
      image_name: "billpay",
      description: 'We all have been there at one point or another when things just get too hectic and some things tend to slip our minds. Keeping track of all the bills on top of sifting through all the paperwork can be a hassle and time consuming. We created BillPay to help manage, keep track, and pay bills all in one convenient place so you dont have to. This is project is still on going.',
      description2: 'Used technologies: Python',
      github: 'https://github.com/conniechu929/billpay',
      web: 'http://34.223.251.157/'
    },
    'sewniq': {
      name: "Sewniq",
      image_name: "sewniq",
      description: 'Worked as one of the lead developers to create and launch Sewniq ICO into Ethereum Blockchain. Developed from user interface design to contract code implementation.',
      description2: 'Used technologies: Node.js, Angular, Bootstrap, animate.js, web3, Solidity',
      github: 'https://github.com/09pve09/Sewniq',
      web: 'https://www.sewniq.com/'
    }
  }
  curr_project = library['housingcrime'];
  $rootScope.project = library['housingcrime'];
  checkMobileHeight();

  $scope.switch_project = function(name){
    if(curr_project['name'] != library[name]['name']){
      $('#projects_screen').hide();
      $rootScope.project = library[name];
      curr_project = library[name];
      $('#projects_screen').fadeIn("slow");
    }

  }
  $( ".hover_animation" ).click(function() {
    $(".hover_animation").removeClass('underlined');
    $( this ).addClass('underlined');
  });
}]);
