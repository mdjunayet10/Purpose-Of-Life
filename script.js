(function () {
  'use strict';

  const tree = window.CONVERSATION_TREE || {};
  const app = document.getElementById('app');
  const STORAGE_KEY = 'purpose-of-life-state-v2';
  const LANGUAGE_KEY = 'purpose-of-life-language-v1';
  const BN_TRANSLATIONS = window.BN_TRANSLATIONS || {};
  const UI_TEXT = {
    start: { en: 'Start', bn: 'শুরু করুন' },
    continuePrevious: { en: 'Continue Previous', bn: 'আগের জায়গা থেকে চলুন' },
    mainMenu: { en: 'Main Menu', bn: 'মূল মেনু' },
    back: { en: 'Back', bn: 'পেছনে' },
    restart: { en: 'Restart', bn: 'আবার শুরু' },
    reference: { en: 'Reference', bn: 'রেফারেন্স' },
    copyReflection: { en: 'Copy Reflection', bn: 'লেখা কপি করুন' },
    share: { en: 'Share', bn: 'শেয়ার করুন' },
    step: { en: 'Step', bn: 'ধাপ' },
    about: { en: 'About', bn: 'সম্পর্কে' },
    backHome: { en: 'Back Home', bn: 'হোমে ফিরুন' },
    startReflection: { en: 'Start Reflection', bn: 'ভাবনা শুরু করুন' },
    startConfirm: {
      en: 'Start a new reflection from the beginning? Your saved progress will be reset.',
      bn: 'শুরু থেকে নতুনভাবে শুরু করবেন? আগের অগ্রগতি মুছে যাবে।'
    },
    restartConfirm: {
      en: 'Restart this reflection from the beginning?',
      bn: 'শুরু থেকে আবার শুরু করবেন?'
    },
    copied: { en: 'Reflection copied.', bn: 'লেখা কপি হয়েছে।' },
    copyFailed: { en: 'Copy failed in this browser.', bn: 'এই ব্রাউজারে কপি করা যায়নি।' },
    notConnected: { en: 'This path is not connected yet.', bn: 'এই পথটি এখনো যুক্ত করা হয়নি।' },
    copyTitle: { en: 'Purpose of Life', bn: 'জীবনের উদ্দেশ্য' },
    language: { en: 'Language', bn: 'ভাষা' }
  };

  let state = loadState();
  let lang = loadLanguage();
  let showingLanding = false;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { currentId: null, history: [], started: false, tags: [] };
      const parsed = JSON.parse(raw);
      if (!parsed || !tree[parsed.currentId]) return { currentId: null, history: [], started: false, tags: [] };
      return {
        currentId: parsed.currentId,
        history: Array.isArray(parsed.history) ? parsed.history.filter((id) => tree[id]) : [],
        started: Boolean(parsed.started),
        tags: Array.isArray(parsed.tags) ? [...new Set(parsed.tags.filter(Boolean))] : []
      };
    } catch (error) {
      return { currentId: null, history: [], started: false, tags: [] };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function loadLanguage() {
    try {
      const saved = localStorage.getItem(LANGUAGE_KEY);
      if (saved === 'en' || saved === 'bn') return saved;
    } catch (error) {
      // Keep English if storage is blocked.
    }
    const browserLanguage = (navigator.language || '').toLowerCase();
    return browserLanguage.startsWith('bn') ? 'bn' : 'en';
  }

  function saveLanguage() {
    localStorage.setItem(LANGUAGE_KEY, lang);
  }

  function setLanguage(nextLang) {
    if (nextLang !== 'en' && nextLang !== 'bn') return;
    lang = nextLang;
    saveLanguage();
    render();
  }

  function t(value, selectedLang = lang) {
    if (value && typeof value === 'object') {
      return value[selectedLang] || value.en || value.bn || '';
    }
    if (selectedLang === 'bn') return BN_TRANSLATIONS[value] || value || '';
    return value || '';
  }

  function ui(key) {
    return t(UI_TEXT[key]);
  }

  function renderLanguageSwitcher() {
    return `
      <div class="language-switcher" role="group" aria-label="${escapeHtml(ui('language'))}">
        <button class="language-option ${lang === 'en' ? 'active' : ''}" data-action="language" data-lang="en" aria-pressed="${lang === 'en'}">English</button>
        <button class="language-option ${lang === 'bn' ? 'active' : ''}" data-action="language" data-lang="bn" aria-pressed="${lang === 'bn'}">বাংলা</button>
      </div>
    `;
  }

  function clearState() {
    localStorage.removeItem(STORAGE_KEY);
    state = { currentId: null, history: [], started: false, tags: [] };
  }

  function escapeHtml(value) {
    return String(value || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function getNode() {
    return tree[state.currentId] || null;
  }

  function startReflection(startId = 'start') {
    showingLanding = false;
    state = { currentId: startId, history: [], started: true, tags: [] };
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startNewReflection() {
    const saved = loadState();
    const hasSaved = Boolean(saved.started && saved.currentId);
    if (hasSaved) {
      const ok = confirm(ui('startConfirm'));
      if (!ok) return;
    }
    startReflection('start');
  }

  function continuePreviousReflection() {
    const saved = loadState();
    if (!saved.started || !saved.currentId) {
      renderLanding();
      return;
    }
    showingLanding = false;
    state = saved;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function addTags(tags) {
    if (!Array.isArray(tags) || !tags.length) return;
    state.tags = [...new Set([...(state.tags || []), ...tags.filter(Boolean)])];
  }

  function goTo(nextId, tags = []) {
    if (!tree[nextId]) {
      showToast(ui('notConnected'));
      return;
    }
    showingLanding = false;
    addTags(tags);
    if (state.currentId) state.history.push(state.currentId);
    state.currentId = nextId;
    state.started = true;
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goBack() {
    if (!state.history.length) {
      showingLanding = true;
      renderLanding();
      return;
    }
    const previousId = state.history.pop();
    state.currentId = previousId;
    saveState();
    render();
  }

  function restart() {
    const ok = confirm(ui('restartConfirm'));
    if (!ok) return;
    startReflection('start');
  }

  function render() {
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
    if (showingLanding) {
      renderLanding();
      return;
    }
    if (!state.started || !state.currentId) {
      renderLanding();
      return;
    }
    renderConversation();
  }

  function renderLanding() {
    showingLanding = true;
    const saved = loadState();
    const hasSaved = Boolean(saved.started && saved.currentId);
    app.innerHTML = `
      <section class="screen hero hero-mystery">
        <div class="hero-card">
          <div>
            <div class="landing-topline">
              <span class="kicker">${escapeHtml(t('A Quiet Question'))}</span>
              ${renderLanguageSwitcher()}
            </div>
            <h1>${escapeHtml(t('Purpose of Life'))}</h1>
            <p>
              ${escapeHtml(t('Do not try to guess where this goes. Start with the question in front of you. Be honest with yourself. The next question will open from there.'))}
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary" data-action="start">${escapeHtml(ui('start'))}</button>
              ${hasSaved ? `<button class="btn btn-secondary" data-action="continue">${escapeHtml(ui('continuePrevious'))}</button>` : ''}
            </div>
          </div>
          <p class="mystery-note">
            ${escapeHtml(t('No score. No timer. No one watching. Just you and your honest answers.'))}
          </p>
        </div>
        <aside class="side-card mystery-card">
          <div>
            <span class="mystery-symbol">◇</span>
            <h2>${escapeHtml(t('Before you start'))}</h2>
            <p>
              ${escapeHtml(t('This works best when you answer without trying to impress anyone. Choose what you really think, even if you are unsure.'))}
            </p>
          </div>
          <div class="quiet-rule">
            ${escapeHtml(t('Your answers shape the next question. Some questions may feel simple, but simple questions can show what a person is really living for.'))}
          </div>
          <div class="mystery-prompts">
            <span>${escapeHtml(t('What are you looking for?'))}</span>
            <span>${escapeHtml(t('What comes after that?'))}</span>
            <span>${escapeHtml(t('What remains?'))}</span>
          </div>
        </aside>
      </section>
    `;
  }

  function landingPath(index, title, text) {
    return `
      <div class="path-item">
        <span class="path-index">${index}</span>
        <span><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></span>
      </div>
    `;
  }

  function renderAbout() {
    app.innerHTML = `
      <section class="screen about-card">
        ${renderLanguageSwitcher()}
        <span class="node-label">${escapeHtml(ui('about'))}</span>
        <h1>${escapeHtml(t('About Purpose of Life'))}</h1>
        <p>
          ${escapeHtml(t('This is a quiet guided reflection. It asks one question at a time and adapts the next question based on your answer.'))}
        </p>
        <p>
          ${escapeHtml(t('There is no score and no timer. The path works best when you answer honestly, without trying to predict where it is going.'))}
        </p>
        <ul>
          <li>${escapeHtml(t('It saves progress locally on your device.'))}</li>
          <li>${escapeHtml(t('You can go back, restart, or return to the main menu.'))}</li>
          <li>${escapeHtml(t('The first questions are universal and do not assume your background.'))}</li>
        </ul>
        <div class="result-actions">
          <button class="btn btn-primary" data-action="start">${escapeHtml(ui('startReflection'))}</button>
          <button class="btn btn-ghost" data-action="home">${escapeHtml(ui('backHome'))}</button>
        </div>
      </section>
    `;
  }

  function renderConversation() {
    showingLanding = false;
    const node = getNode();
    if (!node) {
      clearState();
      renderLanding();
      return;
    }

    const step = state.history.length + 1;
    const progress = Math.min(100, Math.max(7, Math.round((step / 18) * 100))); // slower progress feels more like a guided journey
    const label = getThemeLabel(node.theme || node.type);

    app.innerHTML = `
      <section class="screen conversation-layout">
        <article class="conversation-card">
          <div>
            <div class="topbar">
              <div class="brand-mini"><span class="mark">◇</span>${escapeHtml(t('Purpose of Life'))}</div>
              <div class="nav-actions">
                ${renderLanguageSwitcher()}
                <button class="btn btn-ghost btn-small main-menu-button" data-action="home">← ${escapeHtml(ui('mainMenu'))}</button>
                <button class="btn btn-ghost btn-small" data-action="back" ${state.history.length ? '' : 'disabled'}>${escapeHtml(ui('back'))}</button>
                <button class="btn btn-ghost btn-small" data-action="restart">${escapeHtml(ui('restart'))}</button>
              </div>
            </div>

            <div class="progress-wrap">
              <div class="progress-meta">
                <span>${escapeHtml(ui('step'))} ${step}</span>
                <span>${escapeHtml(label)}</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width: ${progress}%"></div></div>
            </div>

            <span class="node-label">${escapeHtml(label)}</span>
            <h1 class="question-title">${escapeHtml(t(node.question || node.title))}</h1>
            ${node.description ? `<p class="node-description">${escapeHtml(t(node.description))}</p>` : ''}
            ${renderReference(node.reference)}
            ${renderNodeControls(node)}
          </div>
        </article>
      </section>
    `;
  }

  function renderReference(reference) {
    if (!reference) return '';
    return `
      <div class="reference-card">
        <strong>${escapeHtml(ui('reference'))}</strong>
        <p>${escapeHtml(t(reference.text))}</p>
        ${reference.url ? `<a href="${escapeHtml(reference.url)}" target="_blank" rel="noreferrer">${escapeHtml(t(reference.source))} ↗</a>` : `<span>${escapeHtml(t(reference.source))}</span>`}
      </div>
    `;
  }

  function renderNodeControls(node) {
    if (node.type === 'result') {
      const actions = (node.actions || []).map(renderActionButton).join('');
      return `
        <div class="result-actions">${actions}</div>
        <div class="utility-actions">
          <button class="btn btn-ghost btn-small" data-action="copy">${escapeHtml(ui('copyReflection'))}</button>
          <button class="btn btn-ghost btn-small" data-action="share">${escapeHtml(ui('share'))}</button>
        </div>
      `;
    }

    const answers = (node.answers || []).map((answer) => `
      <button class="answer-btn" data-next-id="${escapeHtml(answer.nextId)}" data-tags="${escapeHtml((answer.tags || []).join(','))}">
        <span>${escapeHtml(t(answer.label))}</span>
        <span>→</span>
      </button>
    `).join('');

    return `<div class="answers">${answers}</div>`;
  }

  function renderActionButton(action) {
    if (action.type === 'external') {
      const url = action.url === 'https://YOUR_ISLAM_QUIZ_LINK_HERE' ? window.ISLAM_QUIZ_URL : action.url;
      return `<a class="btn btn-primary" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(t(action.label))}</a>`;
    }
    if (action.type === 'restart') {
      return `<button class="btn btn-secondary" data-action="restart">${escapeHtml(t(action.label))}</button>`;
    }
    return `<button class="btn btn-primary" data-next-id="${escapeHtml(action.nextId)}">${escapeHtml(t(action.label))}</button>`;
  }

  function getThemeLabel(theme) {
    const labels = {
      purpose: { en: 'Purpose', bn: 'উদ্দেশ্য' },
      goals: { en: 'Goals', bn: 'লক্ষ্য' },
      meaning: { en: 'Meaning', bn: 'মানে' },
      death: { en: 'Death', bn: 'মৃত্যু' },
      test: { en: 'Life Test', bn: 'জীবনের পরীক্ষা' },
      happiness: { en: 'Happiness', bn: 'শান্তি' },
      morality: { en: 'Morality', bn: 'ভালো-মন্দ' },
      justice: { en: 'Justice', bn: 'ন্যায়' },
      belief: { en: 'Belief', bn: 'বিশ্বাস' },
      guidance: { en: 'Guidance', bn: 'পথনির্দেশ' },
      islam: { en: 'Islam', bn: 'ইসলাম' },
      tawhid: { en: 'Tawḥīd', bn: 'তাওহীদ' },
      aqeedah: { en: 'Aqeedah', bn: 'আকীদাহ' },
      iman: { en: 'Īmān', bn: 'ঈমান' },
      afterlife: { en: 'Hereafter', bn: 'আখিরাত' },
      hope: { en: 'Hope', bn: 'আশা' },
      action: { en: 'Next Step', bn: 'পরবর্তী ধাপ' },
      question: { en: 'Question', bn: 'প্রশ্ন' },
      reflection: { en: 'Reflection', bn: 'ভাবনা' },
      result: { en: 'Summary', bn: 'সারাংশ' }
    };
    return t(labels[theme] || labels.reflection);
  }

  function getReflectionText() {
    const node = getNode();
    if (!node) return '';
    const lines = [
      t(node.title || node.question || UI_TEXT.copyTitle),
      '',
      t(node.description || '')
    ];
    if (node.reference) {
      lines.push('', `${ui('reference')}: ${t(node.reference.text)} (${t(node.reference.source)})`);
    }
    return lines.join('\n').trim();
  }

  async function copyReflection() {
    const text = getReflectionText();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      showToast(ui('copied'));
    } catch (error) {
      showToast(ui('copyFailed'));
    }
  }

  async function shareReflection() {
    const text = getReflectionText();
    if (!text) return;
    if (navigator.share) {
      try {
        await navigator.share({ title: ui('copyTitle'), text });
        return;
      } catch (error) {
        // User cancelled or browser blocked share. Fall back to copy.
      }
    }
    copyReflection();
  }

  function showToast(message) {
    const old = document.querySelector('.toast');
    if (old) old.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    window.setTimeout(() => toast.remove(), 2400);
  }

  function handleClick(event) {
    const target = event.target.closest('[data-action], [data-next-id]');
    if (!target) return;

    const nextId = target.getAttribute('data-next-id');
    const action = target.getAttribute('data-action');
    const tags = (target.getAttribute('data-tags') || '').split(',').map((tag) => tag.trim()).filter(Boolean);

    if (action === 'language') {
      setLanguage(target.getAttribute('data-lang'));
      return;
    }

    if (nextId) {
      goTo(nextId, tags);
      return;
    }

    if (action === 'start') startNewReflection();
    if (action === 'continue') continuePreviousReflection();
    if (action === 'about') renderAbout();
    if (action === 'home') renderLanding();
    if (action === 'back') goBack();
    if (action === 'restart') restart();
    if (action === 'copy') copyReflection();
    if (action === 'share') shareReflection();
  }

  app.addEventListener('click', handleClick);
  render();
})();
