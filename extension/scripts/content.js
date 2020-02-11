chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var data = request.data || {};

  var names = [];
  var links = document.querySelectorAll('.dati1w0a.ihqw7lf3.hv4rvrfc.discj3wi div.buofh1pr.hv4rvrfc a > span.oi732d6d.ik7dh3pa.d2edcug0.qv66sw1b.c1et5uql.a8c37x1j.s89635nw.ew0dbk1b.a5q79mjw.g1cxx5fr.hnhda86s.oo9gr5id');
  links.forEach(function (link) {
    names.push(link.textContent);
  });

  sendResponse({data: names, success: true});
});
