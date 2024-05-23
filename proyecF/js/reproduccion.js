const video = document.querySelector('video');

        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.code === 'ArrowLeft') {
                video.currentTime -= 10;
            } else if (event.code === 'ArrowRight') {
                video.currentTime += 10;
            }
        });