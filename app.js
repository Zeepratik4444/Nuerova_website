const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navMenu = document.querySelector("[data-nav-menu]");
const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-panel]");
const billingButtons = document.querySelectorAll("[data-billing]");
const demoForm = document.querySelector("[data-demo-form]");
const formNote = document.querySelector("[data-form-note]");

const teamSize = document.getElementById("teamSize");
const hoursLost = document.getElementById("hoursLost");
const hourlyCost = document.getElementById("hourlyCost");
const teamSizeOutput = document.getElementById("teamSizeOutput");
const hoursOutput = document.getElementById("hoursOutput");
const costOutput = document.getElementById("costOutput");
const hoursRecovered = document.getElementById("hoursRecovered");
const annualValue = document.getElementById("annualValue");
const continuityScore = document.getElementById("continuityScore");

document.body.classList.add("js-enabled");

function updateHeader() {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 12);
  }
}

function closeMenu() {
  if (!navMenu || !menuButton) return;
  document.body.classList.remove("menu-open");
  navMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function updateCalculator() {
  const size = Number(teamSize.value);
  const hours = Number(hoursLost.value);
  const cost = Number(hourlyCost.value);
  const recovered = Math.round(size * hours * 4.3 * 0.6);
  const annual = recovered * cost * 12;

  teamSizeOutput.textContent = size;
  hoursOutput.textContent = hours;
  costOutput.textContent = formatCurrency(cost);
  hoursRecovered.textContent = recovered.toLocaleString("en-US");
  annualValue.textContent = formatCurrency(annual);
  continuityScore.textContent = size >= 50 ? "High" : size >= 20 ? "Medium" : "Emerging";
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeTab = button.dataset.tab;

    tabButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === activeTab);
    });
  });
});

if (teamSize && hoursLost && hourlyCost) {
  [teamSize, hoursLost, hourlyCost].forEach((input) => {
    input.addEventListener("input", updateCalculator);
  });
  updateCalculator();
}

billingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    billingButtons.forEach((item) => item.classList.toggle("active", item === button));
    const annual = button.dataset.billing === "annual";
    document.querySelector("[data-price-starter]").textContent = annual ? "$39" : "$49";
    document.querySelector("[data-price-teams]").textContent = annual ? "$159" : "$199";
  });
});

if (demoForm && formNote) {
  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Demo request captured locally. Connect this form to your backend when you are ready.";
    demoForm.reset();
  });
}

document.querySelectorAll("[data-dismiss]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.dismiss);
    if (target) target.remove();
  });
});

document.querySelectorAll("[data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    const eventName = element.dataset.track;
    window.dispatchEvent(new CustomEvent("nuerova:analytics", { detail: { eventName } }));
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  const rect = element.getBoundingClientRect();
  if (rect.top < window.innerHeight * 1.1) {
    element.classList.add("visible");
  } else {
    observer.observe(element);
  }
});
