"use strict";

document.querySelector("#current-year").textContent = new Date().getFullYear();

const interestForm = document.querySelector("#interest-form");
const ebookModal = document.querySelector("#ebook-modal");
const formToast = document.querySelector("#form-toast");
let toastTimeout;

function closeEbookModal() {
  ebookModal.hidden = true;
  interestForm.querySelector("button[type='submit']").focus();
}

interestForm.addEventListener("submit", () => {
  ebookModal.hidden = false;
  ebookModal.focus();
  formToast.hidden = false;
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    formToast.hidden = true;
  }, 6000);
});

document.querySelector("#ebook-modal-close").addEventListener("click", closeEbookModal);
ebookModal.addEventListener("click", (event) => {
  if (event.target === ebookModal) {
    closeEbookModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !ebookModal.hidden) {
    closeEbookModal();
  }
});

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
