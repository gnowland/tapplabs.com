(function () {

  function playVidOnLoad(elId) {
    var video = document.getElementById(elId);
    if (!!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2))
      video.play();
  }
  playVidOnLoad('bgvideo');

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
