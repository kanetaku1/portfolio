document.addEventListener("DOMContentLoaded", function() {
  function convertToAccordion() {
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".flow ul li").forEach(function(li) {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        summary.className = "flow__step";
        summary.innerHTML = li.querySelector(".flow__step").innerHTML;
        details.appendChild(summary);
        let content = li.querySelector(".flow__sentence");
        content.classList.add("details__content");
        details.innerHTML += content.outerHTML;
        li.replaceWith(details);
      });
    } else {
      document.querySelectorAll(".flow ul details").forEach(function(details) {
        const li = document.createElement("li");
        const div = document.createElement("div");
        div.className = "flow__step";
        div.innerHTML = details.querySelector("summary").innerHTML;
        li.appendChild(div);
        li.innerHTML += details.querySelector(".flow__sentence").outerHTML;
        details.replaceWith(li);
      });
    }
  }

  convertToAccordion();
  window.addEventListener("resize", convertToAccordion);
});