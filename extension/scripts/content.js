chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var data = request.data || {};

  var names = [];
  var links = document.querySelectorAll('.dati1w0a.ihqw7lf3.hv4rvrfc.discj3wi div.buofh1pr.hv4rvrfc a > span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.gk29lw5a.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.tia6h79c.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.a5q79mjw.g1cxx5fr.lrazzd5p.oo9gr5id');
  links.forEach(function (link) {
    names.push(link.textContent);
  });

  sendResponse({data: names, success: true});
});
