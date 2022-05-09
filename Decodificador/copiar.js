function copyToClipBoard() {

  var content = document.getElementById('result');
  
  content.select();
  document.execCommand('copy');
  }