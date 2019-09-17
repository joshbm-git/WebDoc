 window.onscroll = function () {
     var video1 = document.getElementById("video1");
     var video2 = document.getElementById("video2");

     // getBoundingClientRect checks where the element hits the value stated.
     if (video1.getBoundingClientRect().bottom < 250 || video1.getBoundingClientRect().top > 250)
         video1.pause();
     else
         video1.play();

     if (video2.getBoundingClientRect().bottom < 250 || video2.getBoundingClientRect().top > 250)
         video2.pause();
     else
         video2.play();
 }