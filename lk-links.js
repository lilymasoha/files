function makeLinksClickable() {
  var blocks = document.querySelectorAll('.tmst-order-details__text dd');

  blocks.forEach(function(dd) {
    if (dd.dataset.processed === "true") return; // чтобы не перезаписывать повторно

    var text = dd.textContent; // берём чистый текст
    var urlRegex = /(https?:\/\/[^\s]+)/g;

    var i = 0;
    var html = text.replace(urlRegex, function(url) {
      i++;
      return '<a href="' + url + '" target="_blank" style="display:inline-block; margin:5px 5px 0 0; padding:6px 10px; background:#0073e6; color:#fff; text-decoration:none; border-radius:4px; font-size:14px;">Скачать ' + i + '</a>';
    });

    dd.innerHTML = html;  
    dd.dataset.processed = "true";
  });
}

// запускаем сразу
makeLinksClickable();

// следим за новыми заказами в личном кабинете
var observer = new MutationObserver(function() {
  makeLinksClickable();
});
observer.observe(document.body, { childList: true, subtree: true });
