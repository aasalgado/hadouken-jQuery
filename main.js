// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});
// add image of Ryu
$('#my-div').html('<img src="http://i.imgur.com/90Mmdcm.png">')
// add gif of Rye when mouse hovers over
$('#my-div img').hover( function() {
    this.src = 'http://i.imgur.com/nTj3Fxx.gif'
}, function() {
    this.src = 'http://i.imgur.com/90Mmdcm.png'
})
// add image of Ryu in fire position when clicked on
$('#my-div img').mousedown( function() {
    this.src = 'http://i.imgur.com/Rfj0a80.png'
})
// remvoe hadouken when image is pressed before the previous hadouken finshes
// this prevents multiple hadoukens being appended
$('#my-div img').mousedown(function() {
    $('.demo-hadouken').remove();
})
// append hadouken image to the ryu image
$('#my-div img').mousedown(function() {
    $('#my-div').append(
    '<img class="demo-hadouken" src="http://i.imgur.com/oTyQRvX.gif" style="margin-bottom:100px">'
    );
})
// animate the hadouken
$('#my-div img').mousedown(function() {
    $('.demo-hadouken').animate( {
        "margin-left": "600px"
    }, 1000, 'swing', function() {
        this.remove();
    })
})
// original image of ryu shows up as user unclicks 
$('#my-div img').mouseup(function() {
    this.src = 'http://i.imgur.com/90Mmdcm.png'
})