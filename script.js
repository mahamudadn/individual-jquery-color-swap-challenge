
console.log('Jquery is ruuning')

 $(document).ready(onReady);

// craeted an event tester

 function onReady() {
    $('#button').on('click', handleClick)
    $('#container').on('click', '.yellowColor', yellowButton)
    $('#container').on('click', '.deleteIt', deleteButton)
 }

let clickCount = 0;


// hanlde click function that will deal whenever someone clicks the generate button.
 function handleClick(event) {
    console.log('Click Generate')
clickCount++;
// this funtion will add one more whenever i click the button
   $('#container').append(`
      <div id ="container"> 
      <p>${clickCount}</p>
      <button class ="yellowColor">Yellow</button>
      <button class ="deleteIt">Delete</button>
      </div>
   `)

    // Targeted this id to be incremented
   //  clickCount++;
    //
    $('#clickCounter').text(clickCount)
       
       $('#container').css('background-color', 'red')
 }
 //function for the yellow button.
   function yellowButton() {
      // this makes the backround to yellow.
      $(this).parent().css('background-color', 'yellow');
}
// decrease whenever i click it.
  

//function that deletes the color
   function deleteButton() {
      $(this).parent().remove();

      clickCount--;
}