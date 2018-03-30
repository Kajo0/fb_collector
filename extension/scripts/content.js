chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var data = request.data || {};

  var names = [];
  var links = document.querySelectorAll('#pagelet_timeline_medley_friends .fwb');
  links.forEach(function (link) {
    names.push(link.textContent);
  });

  sendResponse({data: names, success: true});
});