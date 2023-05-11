
console.log('Jquery is ruuning')

 $(document).ready(onReady);

// craeted an event tester

 function onReady() {
    $('#button').on('click', handleClick)
    $('#container').on('click', '.yellowColor', yellowButton)
    $('#container').on('click', '.deleteIt', yellowButton)
 }

let clickCount = 0;


// hanlde click function that will deal whenever someone clicks the generate button.
 function handleClick(event) {
    console.log('Click Generate')

// this funtion will add one more whenever i click the button
$('#container').append(`
   <div id ="container"> 
   <button class ="yellowColor">Yellow</button>
   <button class ="deleteIt">Delete</button>
   </div>
`)

    // Targeted this id to be incremented
    clickCount++;
    $('#clickCounter').text(clickCount).css('background-color', 'red')
    // $('#button').css('background-color', 'red')
 }
function yellowButton() {
   $(this).parent().css('background-color', 'yellow');
}