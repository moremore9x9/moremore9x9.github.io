// Dicionário central de traduções do site.
// pt-BR é o idioma padrão e também serve como fallback quando uma chave não existe no idioma ativo.
const translations = {
  "pt-BR": {
    "global.skipToContent": "Pular para o conteúdo",
    "global.homeLabel": "Página inicial",
    "global.menuLabel": "Abrir menu de navegação",
    "global.navLabel": "Navegação principal",
    "global.contactNav": "Contato e apoio",
    "global.footer": "Feito por Moremore.",
    "global.languageLabel": "Idioma",
    "global.statusInProgress": "Em andamento",
    "global.statusLine": "Status: Em andamento",

    "meta.locale": "pt_BR",
    "meta.home.title": "Projetos — início",
    "meta.home.description": "Um espaço para acompanhar projetos de software, jogos e notas de desenvolvimento.",
    "meta.home.ogTitle": "Projetos — desenvolvimento em andamento",
    "meta.home.ogDescription": "Projetos pessoais, desenvolvimento de jogos e notas de progresso em um só lugar.",

    "home.heroEyebrow": "Projetos independentes",
    "home.heroTitleLead": "Ideias de Moremore",
    "home.heroTitleAccent": "em desenvolvimento",
    "home.heroCopy": "Acompanhe todos os meus projetos por aqui.",
    "home.explore": "Explorar projetos",
    "home.projectsTitle": "Projetos",
    "home.ccchaosDescription": "Engine 2D fortemente baseada em Stardew Valley.",
    "home.ns4androidDescription": "Port para Android de Naruto Storm 4 da versão de Switch.",
    "home.mushokuDescription": "Tradução para pt-br da Light Novel de Mushoku Tensei.",
    "home.viewProject": "Ver projeto",
    "home.journalEyebrow": "Diário",
    "home.notesTitle": "Notas recentes",
    "home.notesDescription": "Atualizações dos projetos em ordem cronológica, da mais nova para a mais antiga.",
    "home.notesNoscript": "As notas são carregadas com JavaScript. Consulte as páginas de cada projeto para ver as informações de apresentação.",
    "home.notesLoading": "Carregando notas de desenvolvimento…",

    "common.context": "Contexto",
    "common.initialIdea": "Ideia inicial",
    "common.direction": "Direção",
    "common.mainGoals": "Objetivos principais",
    "common.techFoundation": "Base técnica",
    "common.technologies": "Tecnologias",
    "common.journal": "Diário",
    "common.updatesTitle": "Atualizações e histórico",
    "common.updatesDescription": "As notas abaixo formam o registro cronológico do projeto e vêm do arquivo central do site.",
    "common.updatesNoscript": "Ative JavaScript para carregar as notas. A manutenção é feita em data/updates.json.",
    "common.notesLoading": "Carregando notas…",
    "common.follow": "Acompanhe",
    "common.projectLinks": "Links do projeto",
    "common.repoTba": "Repositório a informar",
    "common.downloadsUnavailable": "Downloads indisponíveis",
    "common.backHome": "Voltar ao início",

    "project1.meta.title": "CCChaos Engine — Projetos",
    "project1.meta.description": "Página de acompanhamento do CCChaos Engine, uma iniciativa provisória de engine 2D.",
    "project1.meta.ogTitle": "CCChaos Engine — Projetos",
    "project1.meta.ogDescription": "Resumo e notas de desenvolvimento do CCChaos Engine.",
    "project1.hero": "Engine para jogos 2D fortemente baseada nos sistemas de Stardew Valley. Construído com carinho.",
    "project1.description": "Focado em trazer uma engine sólida para construir jogos 2D, RPG e multiplataforma, com foco inicial em rodá-los em Windows e Linux. A principal inspiração de design é o Stardew Valley.",
    "project1.goal1": "Manter a engine leve e compreensível.",
    "project1.goal2": "Rodar de forma estável em aparelhos fracos.",
    "project1.goal3": "Focar especificamente na criação de jogos de simulação e RPG.",
    "project1.techFramework": "Framework principal: Monogame 3.8.6.",
    "project1.techRuntime": "Runtime: .NET 10",
    "project1.techPlatforms": "Foco inicial nas plataformas Windows e Linux. Futuro foco em Android.",

    "project2.meta.title": "NS4Android — Projetos",
    "project2.meta.description": "Página de acompanhamento provisória do NS4Android.",
    "project2.meta.ogTitle": "NS4Android — Projetos",
    "project2.meta.ogDescription": "Resumo e notas de desenvolvimento do NS4Android.",
    "project2.hero": "Porte nativo para Android de Naruto Shippuden: Ultimate Ninja Storm 4 Road to Boruto de Switch.",
    "project2.description": "Foco em gerar um port otimizado para rodar com desempenho superior ao observado em emuladores de Switch e Windows no Android.",
    "project2.goal1": "Recompilação estática de AArch64 para C.",
    "project2.goal2": "Otimização inicialmente focada em dispositivos intermediários com GPU Mali.",
    "project2.goal3": "Revisão constante e demorada devido ao tamanho e complexidade do projeto.",
    "project2.tech": "Python, Android NDK r28c, LLVM / Clang 19, Unicorn 2.1.4, Capstone 5.0.7, Ghidra e REA. Para extração e análise do jogo: hactool, nstool e nscb_rust.",

    "project3.meta.title": "Mushoku Tensei Novel PT-BR — Projetos",
    "project3.meta.description": "Página de acompanhamento provisória do projeto Mushoku Tensei Novel PT-BR.",
    "project3.meta.ogTitle": "Mushoku Tensei Novel PT-BR — Projetos",
    "project3.meta.ogDescription": "Página provisória com informações e notas do projeto Mushoku Tensei Novel PT-BR.",
    "project3.hero": "Tradução para PT-BR da light novel oficial em inglês de Mushoku Tensei: Jobless Reincarnation.",
    "project3.description": "Foco em uma tradução de qualidade sem retirar o contexto original, com revisão posterior utilizando a Web Novel em japonês.",
    "project3.goal1": "Manter as partes problemáticas da obra.",
    "project3.goal2": "Revisar as intenções originais da obra em busca de alterações na tradução oficial para inglês.",
    "project3.goal3": "Formatação adequada dos textos e cuidado na qualidade das imagens.",
    "project3.tech": "LibreOffice, Collabora Office e ilovepdf.",

    "contact.meta.title": "Contato e apoio — Projetos",
    "contact.meta.description": "Entre em contato sobre os projetos e saiba como adicionar formas opcionais de apoio.",
    "contact.meta.ogTitle": "Contato e apoio — Projetos",
    "contact.meta.ogDescription": "Canais de contato e informações sobre apoio voluntário aos projetos.",
    "contact.eyebrow": "Vamos conversar",
    "contact.title": "Contato e apoio",
    "contact.channelsEyebrow": "Canais",
    "contact.getInTouch": "Entre em contato",
    "contact.githubDescription": "Veja repositórios e acompanhe o código dos projetos.",
    "contact.emailDescription": "Para perguntas, sugestões ou conversas sobre colaboração.",
    "contact.emailLabel": "E-mail",
    "contact.twitterDescription": "Acompanhe o perfil no Twitter/X.",
    "contact.optional": "Opcional",
    "contact.supportTitle": "Apoio voluntário",

    "updates.emptyProject": "Ainda não há notas publicadas para este projeto. As atualizações serão exibidas aqui quando forem adicionadas ao arquivo central.",
    "updates.emptyAll": "Ainda não há notas de desenvolvimento publicadas. Quando houver novidades, elas aparecerão aqui.",
    "updates.unknownProject": "Projeto",
    "updates.error": "Não foi possível carregar as atualizações agora. Confira o arquivo data/updates.json e tente novamente."
  },

  en: {
    "global.skipToContent": "Skip to content",
    "global.homeLabel": "Home",
    "global.menuLabel": "Open navigation menu",
    "global.navLabel": "Main navigation",
    "global.contactNav": "Contact and support",
    "global.footer": "Made by Moremore.",
    "global.languageLabel": "Language",
    "global.statusInProgress": "In progress",
    "global.statusLine": "Status: In progress",

    "meta.locale": "en_US",
    "meta.home.title": "Projects — home",
    "meta.home.description": "A space to follow software projects, games, and development notes.",
    "meta.home.ogTitle": "Projects — work in progress",
    "meta.home.ogDescription": "Personal projects, game development, and progress notes in one place.",

    "home.heroEyebrow": "Independent projects",
    "home.heroTitleLead": "Moremore's ideas",
    "home.heroTitleAccent": "in development",
    "home.heroCopy": "Follow all my projects here.",
    "home.explore": "Explore projects",
    "home.projectsTitle": "Projects",
    "home.ccchaosDescription": "2D engine heavily inspired by Stardew Valley.",
    "home.ns4androidDescription": "Android port of Naruto Storm 4 from the Switch version.",
    "home.mushokuDescription": "Mushoku Tensei light novel translated into Brazilian Portuguese.",
    "home.viewProject": "View project",
    "home.journalEyebrow": "Journal",
    "home.notesTitle": "Recent notes",
    "home.notesDescription": "Project updates in chronological order, from newest to oldest.",
    "home.notesNoscript": "Notes are loaded with JavaScript. Visit each project page to see its overview information.",
    "home.notesLoading": "Loading development notes…",

    "common.context": "Context",
    "common.initialIdea": "Initial idea",
    "common.direction": "Direction",
    "common.mainGoals": "Main goals",
    "common.techFoundation": "Technical foundation",
    "common.technologies": "Technologies",
    "common.journal": "Journal",
    "common.updatesTitle": "Updates and history",
    "common.updatesDescription": "The notes below form the project's chronological record and come from the site's central file.",
    "common.updatesNoscript": "Enable JavaScript to load the notes. Maintenance is handled in data/updates.json.",
    "common.notesLoading": "Loading notes…",
    "common.follow": "Follow",
    "common.projectLinks": "Project links",
    "common.repoTba": "Repository to be announced",
    "common.downloadsUnavailable": "Downloads unavailable",
    "common.backHome": "Back to home",

    "project1.meta.title": "CCChaos Engine — Projects",
    "project1.meta.description": "Follow-up page for CCChaos Engine, a provisional 2D engine initiative.",
    "project1.meta.ogTitle": "CCChaos Engine — Projects",
    "project1.meta.ogDescription": "Overview and development notes for CCChaos Engine.",
    "project1.hero": "2D game engine heavily inspired by Stardew Valley's systems. Built with care.",
    "project1.description": "Focused on providing a solid engine for building 2D, RPG, and cross-platform games, with an initial focus on running them on Windows and Linux. The main design inspiration is Stardew Valley.",
    "project1.goal1": "Keep the engine lightweight and understandable.",
    "project1.goal2": "Run stably on low-end devices.",
    "project1.goal3": "Focus specifically on creating simulation and RPG games.",
    "project1.techFramework": "Main framework: Monogame 3.8.6.",
    "project1.techRuntime": "Runtime: .NET 10",
    "project1.techPlatforms": "Initial focus on Windows and Linux platforms. Future focus on Android.",

    "project2.meta.title": "NS4Android — Projects",
    "project2.meta.description": "Provisional follow-up page for NS4Android.",
    "project2.meta.ogTitle": "NS4Android — Projects",
    "project2.meta.ogDescription": "Overview and development notes for NS4Android.",
    "project2.hero": "Native Android port of Naruto Shippuden: Ultimate Ninja Storm 4 Road to Boruto from Switch.",
    "project2.description": "Focused on producing an optimized port that runs with better performance on Android than Switch and Windows emulators.",
    "project2.goal1": "Static recompilation from AArch64 to C.",
    "project2.goal2": "Optimization initially focused on mid-range devices with Mali GPUs.",
    "project2.goal3": "Constant, time-consuming review due to the project's size and complexity.",
    "project2.tech": "Python, Android NDK r28c, LLVM / Clang 19, Unicorn 2.1.4, Capstone 5.0.7, Ghidra, and REA. For game extraction and analysis: hactool, nstool, and nscb_rust.",

    "project3.meta.title": "Mushoku Tensei Novel PT-BR — Projects",
    "project3.meta.description": "Provisional follow-up page for the Mushoku Tensei Novel PT-BR project.",
    "project3.meta.ogTitle": "Mushoku Tensei Novel PT-BR — Projects",
    "project3.meta.ogDescription": "Provisional page with information and notes about the Mushoku Tensei Novel PT-BR project.",
    "project3.hero": "Brazilian Portuguese translation of the official English light novel of Mushoku Tensei: Jobless Reincarnation.",
    "project3.description": "Focused on a quality translation that preserves the original context, with later revision using the Japanese web novel.",
    "project3.goal1": "Preserve the problematic parts of the work.",
    "project3.goal2": "Review the work's original intentions in search of changes made in the official English translation.",
    "project3.goal3": "Proper text formatting and attention to image quality.",
    "project3.tech": "LibreOffice, Collabora Office, and ilovepdf.",

    "contact.meta.title": "Contact and support — Projects",
    "contact.meta.description": "Get in touch about the projects and learn how to add optional ways to support them.",
    "contact.meta.ogTitle": "Contact and support — Projects",
    "contact.meta.ogDescription": "Contact channels and information about voluntary support for the projects.",
    "contact.eyebrow": "Let's talk",
    "contact.title": "Contact and support",
    "contact.channelsEyebrow": "Channels",
    "contact.getInTouch": "Get in touch",
    "contact.githubDescription": "Browse repositories and follow the projects' code.",
    "contact.emailDescription": "For questions, suggestions, or conversations about collaboration.",
    "contact.emailLabel": "Email",
    "contact.twitterDescription": "Follow the profile on Twitter/X.",
    "contact.optional": "Optional",
    "contact.supportTitle": "Voluntary support",

    "updates.emptyProject": "No notes have been published for this project yet. Updates will appear here once they are added to the central file.",
    "updates.emptyAll": "No development notes have been published yet. When there is news, it will appear here.",
    "updates.error": "The updates could not be loaded right now. Check the data/updates.json file and try again.",
    "updates.unknownProject": "Project"
  }
};

const defaultLanguage = "pt-BR";
const supportedLanguages = Object.keys(translations);
const storageKey = "moremore-language";
let currentLanguage = defaultLanguage;

// Lê a preferência salva sem quebrar a página quando o armazenamento não está disponível.
function readStoredLanguage() {
  try {
    const storedLanguage = localStorage.getItem(storageKey);
    return supportedLanguages.includes(storedLanguage) ? storedLanguage : defaultLanguage;
  } catch (error) {
    return defaultLanguage;
  }
}

// Retorna a tradução da chave no idioma ativo, com fallback para pt-BR.
function translate(key, language = currentLanguage) {
  const dictionary = translations[language] || translations[defaultLanguage];
  return dictionary[key] ?? translations[defaultLanguage][key] ?? key;
}

// Aplica as traduções em elementos de texto, atributos e controles de idioma.
function applyTranslations(language) {
  currentLanguage = supportedLanguages.includes(language) ? language : defaultLanguage;
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((part) => part.trim());
      if (attribute && key) element.setAttribute(attribute, translate(key));
    });
  });

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === currentLanguage;
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
  });

  document.dispatchEvent(new CustomEvent("site:languagechange", {
    detail: { language: currentLanguage }
  }));
}

// Troca o idioma, salva a preferência e atualiza a página sem recarregar.
function setLanguage(language) {
  if (!supportedLanguages.includes(language)) return;

  try {
    localStorage.setItem(storageKey, language);
  } catch (error) {
    // Sem armazenamento disponível: a troca continua funcionando apenas nesta página.
  }

  applyTranslations(language);
}

// Expõe a API usada pelos outros scripts do site.
window.siteI18n = {
  translate,
  getLanguage: () => currentLanguage,
  setLanguage,
  supportedLanguages,
  defaultLanguage
};

// Conecta os botões do seletor de idioma.
document.querySelectorAll("[data-language-option]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.languageOption));
});

currentLanguage = readStoredLanguage();
applyTranslations(currentLanguage);
