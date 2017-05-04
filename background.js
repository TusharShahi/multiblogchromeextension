chrome.runtime.onInstalled.addListener(onInit);

function onInit() {

  localStorage.setItem("Twitter","inactive");
  localStorage.setItem("Gmail","inactive");
  localStorage.setItem("Facebook","inactive");
  localStorage.setItem("Linkedin","inactive");
}