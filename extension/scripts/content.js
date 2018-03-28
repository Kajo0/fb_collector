chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var data = request.data || {};

  var names = [];
  var links = document.querySelectorAll('.fsl, .fwb, .fcb');
  links.forEach(function(link) {
    names.push(link.textContent);
  });

  sendResponse({data: names, success: true});
});