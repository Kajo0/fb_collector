document.addEventListener('DOMContentLoaded', function () {
  var collect = document.getElementById('collect');
  var diff = document.getElementById('diff');

  collect.addEventListener('click', function () {
    sendCollect(function (response) {
      clearResult();
      if (response.success) {
        $('#count').text('Number of friends: ' + response.data.length);
        response.data.forEach(function (name) {
          appendResult(name);
        });
      } else {
        appendResult('Sth gone wrong :/');
      }
    });
  });

  diff.addEventListener('click', function () {
    sendCollect(function (response) {
      var input = $('#input').val();

      var previous = input.split('\n');
      for (var i in previous) {
        previous[i] = previous[i].replace(/\s+/g, ' ').trim();
      }
      previous = previous.filter(function (val) {
        return val.trim() !== '';
      });

      clearResult();
      if (response.success) {
        var names = response.data;
        for (var i in names) {
          names[i] = names[i].replace(/\s+/g, ' ');
        }

        $('#oldCount').text('Previous number of friends: ' + previous.length);
        $('#count').text('New number of friends: ' + names.length);
        previous.forEach(function (old) {
          if (!names.includes(old)) {
            appendResult(old);
          }
        })
      } else {
        appendResult('Sth gone wrong :/');
      }
    });
  });
});


function sendCollect(callback) {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {data: ''}, callback);
  });
}

function clearResult() {
  $('#result').text('');
  $('#oldCount').text('');
  $('#count').text('');
}
function appendResult(line) {
  var $out = $('#result');
  if ($out.val().length === 0) {
    $out.text(line);
  } else {
    $out.text($out.val() + '\n' + line);
  }
}
