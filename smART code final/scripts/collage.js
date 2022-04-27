var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    backgroundColor: "#FCF2EE",
    parent: 'collage-canvas', 
    
};

var game = new Phaser.Game(config);
var scene;
var selectedImage;
var testImage;

function preload () {

   this.load.image('mem1', '/images/cutouts/mem1.png');
   this.load.image('mem4', '/images/cutouts/mem4.png');
   this.load.image('prima2', '/images/cutouts/prima2.png');
   this.load.image('prima4', '/images/cutouts/prima4.png');
   this.load.image('hilma1', '/images/cutouts/hilma1.png');
   this.load.image('hilma3', '/images/cutouts/hilma3.png');
   this.load.image('plum1', '/images/cutouts/plum1.png');
   this.load.image('plum2', '/images/cutouts/plum2.png');

}

function create ()
{
    //    this.add.image(400,300, 'mem1');
    //    this.add.image(400,300, 'mem2');
    //    this.add.image(400,300, 'mem3');
    //    this.add.image(400,300, 'mem4');
    console.log(this);
    scene = this;
}

function update ()
{
    
}

///Our Custom functions for adding images

const mem1 = () =>
{
    console.log(scene);
    //this.scene.add.image(400, 300, 'mem1');  
    testImage = scene.add.image(400, 300, 'mem1'); 
    testImage.setInteractive();

    scene.input.setDraggable(testImage);

    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

}

const mem4 = () =>
{
    console.log(scene);
    testImage = scene.add.image(400, 300, 'mem4'); 
    testImage.setScale(.5);
    testImage.setInteractive();

    scene.input.setDraggable(testImage);

    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}


const prima2 = () =>
{
    console.log(scene);
    testImage = scene.add.image(400, 300, 'prima2'); 
    testImage.setScale(.5);
    testImage.setInteractive();

    scene.input.setDraggable(testImage);

    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    scene.input.on('pointerdown', function (pointer, gameObject) {

        console.log("clickd on thing");
        selectedImage = testImage;
        editUI.setPosition(selectedImage.x, selectedImage.y);
    });


    testImage.on('pointerdown', () =>
    {
    });
}

const prima4 = () =>
{
    console.log(scene);
    testImage = scene.add.image(400, 300, 'prima4'); 
    testImage.setScale(.75);
    testImage.setInteractive();

    scene.input.setDraggable(testImage);

    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    scene.input.on('pointerdown', function (pointer, gameObject) {

        console.log("clickd on thing");
        selectedImage = testImage;
        editUI.setPosition(selectedImage.x, selectedImage.y);
    });


    testImage.on('pointerdown', () =>
    {
    });
}

const hilma1 = () =>
{
    console.log(scene);
    testImage = scene.add.image(400, 300, 'hilma1'); 
    testImage.setScale(.5);
    testImage.setInteractive();

    scene.input.setDraggable(testImage);

    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    scene.input.on('pointerdown', function (pointer, gameObject) {

        console.log("clickd on thing");
        selectedImage = testImage;
        editUI.setPosition(selectedImage.x, selectedImage.y);
    });

    testImage.on('pointerdown', () =>
    {
    });
}

const hilma3 = () =>
{
    console.log(scene);
    testImage = scene.add.image(400, 300, 'hilma3'); 
    testImage.setScale(.5);
    testImage.setInteractive();

    scene.input.setDraggable(testImage);

    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    scene.input.on('pointerdown', function (pointer, gameObject) {

        console.log("clickd on thing");
        selectedImage = testImage;
        editUI.setPosition(selectedImage.x, selectedImage.y);
    });

    testImage.on('pointerdown', () =>
    {
    });
}

const plum1 = () =>
{
    console.log(scene);
    testImage = scene.add.image(400, 300, 'plum1'); 
    testImage.setScale(.5);
    testImage.setInteractive();

    scene.input.setDraggable(testImage);

    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    scene.input.on('pointerdown', function (pointer, gameObject) {

        console.log("clickd on thing");
        selectedImage = testImage;
        editUI.setPosition(selectedImage.x, selectedImage.y);
    });

    testImage.on('pointerdown', () =>
    {
    });
}

const plum2 = () =>
{
    console.log(scene);
    testImage = scene.add.image(400, 300, 'plum2'); 
    testImage.setScale(1);
    testImage.setInteractive();

    scene.input.setDraggable(testImage);

    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    scene.input.on('pointerdown', function (pointer, gameObject) {

        console.log("clickd on thing");
        selectedImage = testImage;
        editUI.setPosition(selectedImage.x, selectedImage.y);
    });

    testImage.on('pointerdown', () =>
    {
    });


// Get the modal
    var modal = document.getElementById("myModal");

// Get the button that opens the modal
    var btn = document.getElementById("tip");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
  }
}
}
//NEXT STEPS:

// 1.  Make the rotate button interactive (setInteractive) and draggable, just like the image
// 2. Do the same with the rotate
// 3. When these are dragged, set the appropriate thing (angle) or (setScale) to correspond with the drag value

// use this code of each of the icons:


// scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {

//     gameObject.x = dragX;
//     gameObject.y = dragY;

// });

//make sure you pass in the gameobject (rotate or angle) to setDraggable(angle)