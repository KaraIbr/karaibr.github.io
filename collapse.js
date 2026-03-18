document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.collapsible').forEach(function (el) {
    el.addEventListener('click', function () {
      this.classList.toggle('open');
      var content = this.nextElementSibling;
      if (content && content.classList.contains('content')) {
        content.classList.toggle('show');
      }
    });
  });
});
