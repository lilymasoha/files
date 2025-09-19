document.addEventListener("DOMContentLoaded", function() {
  var blocks = document.querySelectorAll('.tmst-order-details__text dd');

  blocks.forEach(function(dd) {
    var text = dd.innerHTML;
    var urlRegex = /(https?:\/\/[^\s<]+)/g;

    var i = 0;
    var newText = text.replace(urlRegex, function(url) {
      i++;
      return '<a href="' + url + '" target="_blank" style="display:inline-block; margin:5px 0; padding:8px 12px; background:#0073e6; color:#fff; text-decoration:none; border-radius:4px;">Скачать ' + i + '</a>';
    });

    dd.innerHTML = newText;
  });
});
