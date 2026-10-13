function showVideo() {

    let image = document.getElementById("profileImage");
    let video = document.getElementById("profileVideo");

    image.style.display = "none";

    video.style.display = "block";

    video.play();
}