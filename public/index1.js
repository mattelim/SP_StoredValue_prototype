$(".clickBox").click(function() {
  var thisId = $(this).attr('id');
  //console.log(thisId);
  var filename = 'files/' + thisId + '.wav';
  var audio = new Audio(filename);

  var clickBox = $(this);
  var audioVolume = 1;

  audio.addEventListener('loadedmetadata', function() {
    audio.play();
    clickBox.css('background-color', 'springgreen');
    clickBox.css('opacity', 1);

    setTimeout(function() {
      clickBox.css('background-color', 'darkgray');
      clickBox.css('opacity', 1);
    }, audio.duration*1000);

    var decayInterval = setInterval(function() {
      audioVolume -= 0.1;
      if (audioVolume <= 0.1) {
        window.clearInterval(decayInterval);
        return;
      }

      audio.volume = audioVolume;
      audio.play();
      clickBox.css('background-color', 'springgreen');
      clickBox.css('opacity', audioVolume);

      setTimeout(function() {
        clickBox.css('background-color', 'darkgray');
        clickBox.css('opacity', 1);
      }, audio.duration*1000);

    }, 10000);
  });
});
