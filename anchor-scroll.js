(function () {
  var id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;

  var userScrolled = false;
  function mark() { userScrolled = true; }
  ["wheel", "touchstart", "keydown", "mousedown"].forEach(function (t) {
    window.addEventListener(t, mark, { passive: true });
  });

  function go() {
    var el = document.getElementById(id);
    if (!el || !el.getClientRects().length) return false;
    el.scrollIntoView();
    return true;
  }

  function settle() {
    [300, 1000, 2500].forEach(function (ms) {
      setTimeout(function () { if (!userScrolled) go(); }, ms);
    });
    window.addEventListener("load", function () { if (!userScrolled) go(); });
  }

  var obs = new MutationObserver(function () {
    if (go()) { obs.disconnect(); settle(); }
  });
  obs.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["id", "style", "class"] });
  setTimeout(function () { obs.disconnect(); }, 15000);
  if (go()) { obs.disconnect(); settle(); }
})();
