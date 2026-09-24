(function () {
  var GA_ID = "G-XXXXXXXXXX";
  if (GA_ID.indexOf("XXXX") !== -1) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { transport_type: "beacon" });

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);

  function textOf(el) {
    return (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60);
  }

  function locationOf(el) {
    if (el.closest("header")) return "header";
    if (el.closest("footer")) return "footer";
    if (el.closest("form")) return "booking_form";
    var p = el.parentElement;
    if (p && p.style && p.style.position === "fixed") return "sticky_bar";
    var sec = el.closest("section");
    if (sec) return sec.id || (sec === document.querySelector("section") ? "hero" : "other");
    return "other";
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var href = a.getAttribute("href") || "";
    var name = null;
    if (href.indexOf("tel:") === 0) name = "call_click";
    else if (/wa\.me|whatsapp\.com/.test(href)) name = "whatsapp_click";
    if (!name) return;
    window.gtag("event", name, {
      link_location: locationOf(a),
      link_text: textOf(a),
      page_path: location.pathname
    });
  }, true);

  document.addEventListener("submit", function (e) {
    if (e.target && e.target.tagName === "FORM") {
      window.gtag("event", "booking_form_submit", { page_path: location.pathname });
    }
  }, true);
})();
