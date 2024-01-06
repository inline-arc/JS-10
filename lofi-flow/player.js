var player;

function onPlayerReady(event){
    document.getElementById("playbtn").addEventListener('click', function(){
        player.stopVideo();
    });

    document.getElementById('pausetbn').addEventListener('click', function() {
        player.pauseVideo();
      });

}