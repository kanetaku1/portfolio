document.addEventListener('DOMContentLoaded', function () {
  const detailsElements = document.querySelectorAll('details');

  detailsElements.forEach((details) => {
    details.addEventListener('toggle', function () {
      if (details.open) {
        detailsElements.forEach((otherDetails) => {
          if (otherDetails !== details) {
            otherDetails.removeAttribute('open');
          }
        });
      }
    });
  });
});