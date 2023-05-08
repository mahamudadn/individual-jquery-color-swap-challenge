
console.log('Jquery is ruuning')

 $(document).ready(onReady);

// craeted an event tester

 function onReady() {
    $('#button').on('click', handleClick)
 }

// hanlde click function that will deal whenever someone clicks the generate button.
 function handleClick(event) {
    console.log('Click Generate')
 }
