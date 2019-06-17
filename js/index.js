// controls for changing the background
// create your event listener here
// add the background image change code inside of the event listener
document.getElementById('background-btn').addEventListener('click', function(){

    var backgroundImage = document.getElementById('newimg')
    
    var newimg = document.getElementById('background').style.background = "url('https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi1k7PQ9_DiAhWlMHwKHQx7AhsQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fminecraft-statistic.net%252Fen%252Fplayer%252FEpicFahimXD.html%26psig%3DAOvVaw2TuzO3F6sh3jdAtwMXT4lI%26ust%3D1560875263972608&psig=AOvVaw2TuzO3F6sh3jdAtwMXT4lI&ust=1560875263972608')";
});





// this is the code for changing a background image
// missing image url
// document.getElementById('background').style.backgroundImage = "url('')";








// BUTTON CONTROLS

// controls for the left button
document.getElementById('left').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 20.;

    document.getElementById('ball').style.left = newPosition +'px';
});

// controls for the right button
// missing element id and event type
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 20.;

    document.getElementById('ball').style.left = newPosition +'px';
});
