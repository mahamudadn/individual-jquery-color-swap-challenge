$(document).ready(onReady);

function onReady() {

    // called my id of the botton and told jquery to do something when ever click hsppens.
    $('#button').on('click', genereteButton)

}



// created a funtion that will put things in my DOM

function genereteButton() {
    $('#button').append('<div></div>')

}
