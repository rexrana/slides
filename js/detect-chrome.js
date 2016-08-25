
var isChrome = !!window.chrome && !!window.chrome.webstore;
if(isChrome) {
  document.getElementsByTagName('body')[0].className+=' chrome';
}
