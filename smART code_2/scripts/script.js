function preload ()
{
    document.getElementById('review').style.display = "none";
}

//autopop 2 images 

var likedImages = [false, false, false, false, false];
var imageFiles = ['../images/memory.jpg','../images/guan.jpg','../images/primavera.jpg','../images/basquiat.jpg','../images/hilma.png']
var currentImage = 0;
var numLikedImages = 0;

function Like()
{
    // we like the current image! 
    console.log("like<3")
    if (likedImages[currentImage] !== true){
        if (numLikedImages < 2) {
            document.getElementById("likeHeart").style.display = "block"
            likedImages[currentImage] = true
            numLikedImages++;
        } else {
            alert("You can only like two images.");
        }
    }

    else {
        document.getElementById("likeHeart").style.display = "none";
        likedImages[currentImage] = false; 
        numLikedImages--;
    }

    console.log(numLikedImages);

}

function Next() {
    //go to next
    console.log("next!!!!!!");
    currentImage = currentImage + 1;
    if (currentImage + 1 > likedImages.length){
        currentImage = 0;
    }
    console.log(currentImage, likedImages[currentImage]);
    console.log(likedImages)
    if (likedImages[currentImage] == true){
        document.getElementById("likeHeart").style.display = "block";
    }
    else {
         document.getElementById("likeHeart").style.display = "none";
    }
    var image = document.getElementById('currentImage');

    // for (var i = 0; i < likedImages.length; i++){
    //     console.log(""); 
    //     if (image == likedImages[i]){
    //         document.getElementById("likeHeart").style.display = "show";
    //         break;
    //     }
    //     else {
    //         document.getElementById("likeHeart").style.display = "none";
    //     }
    // }

    if (image.src.match("memory")) {
        image.src = "../images/guan.jpg";
    }
    else if (image.src.match("guan")) {
        image.src = "../images/primavera.jpg";
    }
    else if (image.src.match("primavera")) {
        image.src = "../images/basquiat.jpg";
    }
    else if (image.src.match("basquiat")) {
        image.src = "../images/dogs.jpg";
    }
    else if (image.src.match("dogs")) {
        image.src = "../images/memory.jpg";
    }
    
}

function Previous() {
    //to to prev
    console.log("previous!");
    currentImage = currentImage - 1;
    if (currentImage < 0){
        currentImage = 4;
    }
    console.log(currentImage, likedImages[currentImage]);
    console.log(likedImages)
    var image = document.getElementById('currentImage');
    if (likedImages[currentImage] == true){
        document.getElementById("likeHeart").style.display = "block";
    }
    else {
         document.getElementById("likeHeart").style.display = "none";
    }
    var image = document.getElementById('currentImage');
    if (image.src.match("dogs")) {
        image.src = "../images/basquiat.jpg";
    }
    else if (image.src.match("basquiat")) {
        image.src = "../images/primavera.jpg";
    }
    else if (image.src.match("primavera")) {
        image.src = "../images/guan.jpg";
    }
    else if (image.src.match("guan")) {
        image.src = "../images/memory.jpg";
    }
    else if (image.src.match("memory")) {
        image.src = "../images/dogs.jpg";
    }
}

function Review (){

    document.getElementById('review').style.display = "block";
    document.getElementById('tinder').style.display = "none";

    var currImgNum = 1;

    for (i = 0; i < likedImages.length; i ++){
        if (likedImages[i] == true){
            document.getElementById(`image${currImgNum}`).src = imageFiles[i];
            currImgNum++;
        }
    }
}
// review on separate page 

function Canvas (){

}
