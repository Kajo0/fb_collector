document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('collectButton');

  button.addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {data: ''}, function(response) {

        $('#result').text('');
        if (response.success) {
          append('Number of friends: ' + response.data.length);
          response.data.forEach(function(name) {
            append(name);
          });
        } else {
          append('Sth gone wrong :/');
        }
      });
    });
  });
});

function append(line) {
  var $out = $('#result');
  $out.text($out.text() + '\n' + line);
}
