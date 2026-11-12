// Os identificadores são os mesmos usados em data/updates.json; apenas os nomes exibidos mudam.
const projectNames = {
  "project-tce": "CCChaos Engine",
  "ns4android": "NS4Android",
  "storm-3-android": "Mushoku Tensei Novel PT-BR"
};
const updateDataUrl = new URL("../data/updates.json", document.currentScript.src);

const menuButton = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuButton && primaryNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
    }
  });
}

// Fallbacks usados caso o script de traduções não esteja disponível.
const updateFallbacks = {
  "updates.emptyProject": "Ainda não há notas publicadas para este projeto. As atualizações serão exibidas aqui quando forem adicionadas ao arquivo central.",
  "updates.emptyAll": "Ainda não há notas de desenvolvimento publicadas. Quando houver novidades, elas aparecerão aqui.",
  "updates.error": "Não foi possível carregar as atualizações agora. Confira o arquivo data/updates.json e tente novamente.",
  "updates.unknownProject": "Projeto"
};

function translateUpdateText(key) {
  const value = window.siteI18n?.translate(key);
  return value && value !== key ? value : (updateFallbacks[key] ?? key);
}

function getActiveLanguage() {
  return window.siteI18n?.getLanguage?.() ?? "pt-BR";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function trimUrlSuffix(url) {
  const suffix = url.match(/[.,;:!?]+$/);
  return suffix ? url.slice(0, -suffix[0].length) : url;
}

function linkify(value) {
  const urlPattern = /https?:\/\/[^\s]+/g;
  let markup = "";
  let lastIndex = 0;

  for (const match of String(value).matchAll(urlPattern)) {
    const url = trimUrlSuffix(match[0]);
    const suffix = match[0].slice(url.length);
    markup += escapeHtml(value.slice(lastIndex, match.index));
    markup += `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a>`;
    markup += escapeHtml(suffix);
    lastIndex = match.index + match[0].length;
  }

  return markup + escapeHtml(String(value).slice(lastIndex));
}

function formatDate(value, language = getActiveLanguage()) {
  const parts = value.split("-").map(Number);
  const date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
  const locale = language === "en" ? "en-US" : "pt-BR";
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(date);
}

// Usa a tradução da nota quando ela existe e mantém o português como fallback.
function localizedUpdate(update, language) {
  const translation = update.translations?.[language];
  return {
    ...update,
    category: translation?.category ?? update.category,
    title: translation?.title ?? update.title,
    description: translation?.description ?? update.description
  };
}

function updateMarkup(update) {
  const language = getActiveLanguage();
  const projectName = projectNames[update.project] || translateUpdateText("updates.unknownProject");
  const projectHref = update.project === "project-tce" ? "projeto-1.html"
    : update.project === "ns4android" ? "projeto-2.html"
      : update.project === "storm-3-android" ? "projeto-3.html" : "#projetos";
  const category = update.category ? `<span>${escapeHtml(update.category)}</span>` : "";

  return `<article class="update-card">
    <div class="update-meta"><time datetime="${escapeHtml(update.date)}">${escapeHtml(formatDate(update.date, language))}</time><a class="update-project" href="${projectHref}">${escapeHtml(projectName)}</a>${category}</div>
    <h3>${escapeHtml(update.title)}</h3>
    <p>${linkify(update.description)}</p>
  </article>`;
}

function showEmpty(container, message) {
  container.innerHTML = `<div class="empty-state"><p>${escapeHtml(message)}</p></div>`;
}

// Guarda as notas em memória para trocar de idioma sem refazer a requisição.
let cachedUpdates = null;

async function loadUpdates() {
  if (cachedUpdates) return cachedUpdates;

  const response = await fetch(updateDataUrl, { cache: "no-cache" });
  if (!response.ok) throw new Error("Não foi possível carregar as atualizações.");

  const updates = await response.json();
  if (!Array.isArray(updates)) throw new Error("O arquivo de atualizações tem um formato inválido.");

  cachedUpdates = updates;
  return updates;
}

async function renderUpdates() {
  const containers = [...document.querySelectorAll("[data-updates]")];
  if (containers.length === 0) return;

  try {
    const updates = await loadUpdates();
    const orderedUpdates = [...updates].sort((first, second) => second.date.localeCompare(first.date));
    const language = getActiveLanguage();

    containers.forEach((container) => {
      const projectId = container.dataset.project;
      const limit = Number(container.dataset.limit || 0);
      const matching = orderedUpdates.filter((update) => !projectId || update.project === projectId);
      const visible = limit > 0 ? matching.slice(0, limit) : matching;
      if (visible.length === 0) {
        showEmpty(container, projectId ? translateUpdateText("updates.emptyProject") : translateUpdateText("updates.emptyAll"));
        return;
      }
      container.innerHTML = visible.map((update) => updateMarkup(localizedUpdate(update, language))).join("");
    });
  } catch (error) {
    containers.forEach((container) => showEmpty(container, translateUpdateText("updates.error")));
  }
}

// Renderiza de novo quando o visitante troca o idioma.
document.addEventListener("site:languagechange", renderUpdates);

renderUpdates();
