"use strict";

const interestForm = document.querySelector("#interest-form");
const formStatus = document.querySelector("#form-status");

interestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!interestForm.reportValidity()) {
    return;
  }

  formStatus.textContent =
    "Formulário demonstrativo: não envia nem armazena dados.";
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const faqItems = document.querySelectorAll("#duvidas details");
faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) {
      return;
    }

    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.open = false;
      }
    });
  });
});

document.querySelectorAll("footer a[href='#politica'], footer a[href='#termos']").forEach((link) => {
  link.addEventListener("click", () => {
    const legalNotice = document.querySelector(link.hash);
    if (legalNotice && legalNotice.tagName === "DETAILS") {
      legalNotice.open = true;
    }
  });
});

if (window.lucide && window.lucide.icons) {
  window.lucide.createIcons({
    icons: window.lucide.icons,
    attrs: { "aria-hidden": "true", focusable: "false" }
  });
} else {
  console.error("Lucide Icons não foi carregada; os ícones da página não puderam ser exibidos.");
}
