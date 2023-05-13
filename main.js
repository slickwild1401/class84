canvas = document.getElementById("mycanvas");
ctx = canvas.getContext('2d');

rover_width = 100;
rover_height = 90;

rover_x = 200;
rover_y = 200;

background_image = "mars.jpg";

rover_image = "rover.png";

function add() {
    background_imgTag = new Image()
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image()
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    key_press = e.keyCode
    console.log(key_press)

    if (key_press == '38'); {
        console.log("up");
        up();
    }
    if (key_press == '37'); {
        console.log("left");
        left();
    }
    if (key_press == '39'); {
        console.log("right");
        right();
    }
    if (key_press == '40'); {
        console.log("down");
        down();
    }

}

function up() {


    if (rover_y > 0) {
        rover_y=rover_y - 10;
        console.log( "When up arrow is pressed, x = " + rover_x + "| y = " + rover_y );
        uploadbackground();
        uploadrover();
    }

}

function down(){
     if(rover_y < 500){
        rover_y= rover_y +10;
        console.log( "When down arrow is pressed, x = " + rover_x + "| y = " + rover_y );
        uploadbackground();
        uploadrover();
        
    }
}
function left(){
    if( rover_x >0){
        rover_x = rover_x-10
        console.log( "When left arrow is pressed, x = " + rover_x + "| y = " + rover_y );
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if( rover_x <500){
        rover_x = rover_x+10
        console.log( "When right arrow is pressed, x = " + rover_x + "| y = " + rover_y );
        uploadbackground();
        uploadrover();
    }
}
