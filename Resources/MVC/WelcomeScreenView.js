// Welcome screen view
// Throw it on top of MapView
exports.createWelcomeScreenView = function (win) {
  var textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
  var clientHeight = Ti.Platform.displayCaps.platformHeight;
  var clientWidth = Ti.Platform.displayCaps.platformWidth;
  if (Ti.UI.Android) {
    clientHeight = Ti.Platform.displayCaps.platformHeight / (Ti.Platform.displayCaps.dpi / 160);
  }

  var welcomeScreenView = Ti.UI.createView({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#a051be',
    zIndex: 1,
    layout: 'vertical'
  });
  var caryConnectsLogo = Ti.UI.createImageView({
    image: '/assets/icons/DefaultIcon_white_inside.png',
    width: '80%',
    height: 220
  });

  welcomeScreenView.add(caryConnectsLogo);

  var welcomeScreenLabel = Ti.UI.createLabel({
    top:'5%',
    width: '80%',
    height: 'auto',
    color: '#ffffff',
    font : {
  		fontSize : 20,
          },
    textAlign: 'center',
    text: 'Welcome to the Cary Connects Mobile App! \n We are a community of civic hackers working together to share information about Cary, North Carolina. \n This app aims to help you search for places and find parking for your next visit.',
    verticalAlign: 1
  });

  welcomeScreenView.add(welcomeScreenLabel);

  var continueButton = Ti.UI.createButton({
    textAlign: textAlign,
    verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM,
    top: "5%",
    height: '35dp',
    width: 'auto',
    title: 'Continue',
    fontWeight: 'bold',
    borderRadius: '10dp',
    borderColor: '#ffffff',
    color: '#ffffff',
    backgroundColor: '#a051be',
    verticalAlign: 2
  });

  welcomeScreenView.add(continueButton);


  continueButton.addEventListener('touchstart', function(){
    continueButton.backgroundColor = '#ffffff';
    continueButton.color = '#a051be';
  });
  continueButton.addEventListener('endstart', function(){
    continueButton.backgroundColor = '#a051be';
    continueButton.color = '#ffffff';
  });

  continueButton.addEventListener('click', function () {
    Ti.App.fireEvent('CloseWelcomeScreen');
  });

  Ti.App.addEventListener('CloseWelcomeScreen', function () {
    welcomeScreenView.animate({
      left: '100%',
      right: - clientWidth - 20 + 'dp',
      //bottom: -clientHeight - 20 + 'dp',
      opacity: 0,
      curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
      duration: 50
    })
  });
  win.add(welcomeScreenView);
  return welcomeScreenView;
};
