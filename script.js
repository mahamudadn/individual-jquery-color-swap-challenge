
console.log('Jquery is ruuning')

 $(document).ready(onReady);

// craeted an event tester

 function onReady() {
    $('#button').on('click', handleClick)
 }

let clickCount = 0;


// hanlde click function that will deal whenever someone clicks the generate button.
 function handleClick(event) {
    console.log('Click Generate')
    
// this funtion will add one more whenever i click the button
    clickCount++;

    // Targeted this id to be incremented

    $('#clickCounter').text(clickCount)
 }
