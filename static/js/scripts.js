(function () {
  /**
   * Responsive Videos
   * @param {string} elId Video Element ID
   */
  function responsiveVideo(elId){
    //get screen width and pixel ratio
    var width = screen.width;
    var dpr = window.devicePixelRatio;

    // videos
    var smallVideo = 'video/beaker_640x360.mp4';
    var bigVideo = 'video/beaker-1280x720.mp4';

    // init source tag
    var videoTag = document.getElementById(elId);
    var srcTag = document.createElement('source');

    if (width < 1400) {
      // Small screens
      srcTag.src = smallVideo;
    }
    else {
      // Large screens
      srcTag.src = bigVideo;
    }

    // keep it DRY
    srcTag.type = 'video/mp4';
    videoTag.innerHTML = '';
    videoTag.appendChild(srcTag);
  }
  responsiveVideo('bgvideo');

  /**
   * Convert an Integer into a Roman Numeral, because, fancy
   * @param {int} num The Number to Roman Numeralize
   */
  function romanNumeralize(num) {
    if (typeof num !== 'number')
      return false;

    var digits = String(+num).split(""),
      key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
      roman_num = "",
      i = 3;
    while (i--)
      roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
    return Array(+digits.join("") + 1).join("M") + roman_num;
  }

  /**
   * Automatically update copyright year (and Roman Numeralize while we're at it!)
   * @param {string} elId The ID of the element containing the date 
   */
  function updateDate(elId) {
    var el = document.getElementById(elId),
      dateObj = new Date,
      year = dateObj.getFullYear(),
      romanYear = romanNumeralize(year);
    el.innerText = romanYear;
  }
  updateDate('copyright-date');

}());
