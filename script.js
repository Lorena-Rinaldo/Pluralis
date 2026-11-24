"use strict";

const interestForm = document.querySelector("#interest-form");

interestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!interestForm.reportValidity()) {
    return;
  }

  interestForm.innerHTML = `
    <div class="flex min-h-64 flex-col items-start justify-center" role="status" aria-live="polite">
      <h3 class="font-heading text-2xl font-bold">Agradecemos pela confiança.</h3>
      <p class="mt-2 text-lg">Baixe seus e-books</p>
      <div class="mt-6 grid w-full gap-3">
        <a
          class="inline-flex min-h-14 items-center justify-center rounded-full bg-pluralis-navy px-6 text-lg font-bold text-white transition-colors hover:bg-pluralis-navy/90"
          href="assets/ebook_pluralis.pdf"
          download
        >
          Baixar e-book 1
        </a>
        <a
          class="inline-flex min-h-14 items-center justify-center rounded-full bg-pluralis-navy px-6 text-lg font-bold text-white transition-colors hover:bg-pluralis-navy/90"
          href="assets/ebook_pluralis_2.pdf"
          download
        >
          Baixar e-book 2
        </a>
      </div>
    </div>
  `;
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
