/* ============================================================
   WISHLIST / MERKLISTE — Web Storage API
   js/wishlist.js
   
   Uses localStorage to persist the user's project favorites.
   Data format: Array of { id, title, img, cat, href }
   ============================================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio_merkliste';

  // ─── Helpers ──────────────────────────────────────────────
  function getWishlist() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveWishlist(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function isInWishlist(id) {
    return getWishlist().some(item => item.id === id);
  }

  function addToWishlist(project) {
    const list = getWishlist();
    if (!list.some(item => item.id === project.id)) {
      list.push(project);
      saveWishlist(list);
    }
  }

  function removeFromWishlist(id) {
    const list = getWishlist().filter(item => item.id !== id);
    saveWishlist(list);
  }

  function clearWishlist() {
    localStorage.removeItem(STORAGE_KEY);
  }

  // ─── Toast Notification ───────────────────────────────────
  let toastEl = null;
  let toastTimeout = null;

  function showToast(message) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'wishlist-toast';
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }

    toastEl.textContent = message;
    toastEl.classList.remove('show');

    // Force reflow
    void toastEl.offsetWidth;

    toastEl.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2500);
  }

  // ─── Update Nav Badge ─────────────────────────────────────
  function updateNavBadge() {
    const count = getWishlist().length;
    const badges = document.querySelectorAll('.wishlist-count');

    badges.forEach(badge => {
      badge.textContent = count;
      if (count > 0) {
        badge.classList.add('visible');
      } else {
        badge.classList.remove('visible');
      }
    });
  }

  // ─── Sync Heart Button State ──────────────────────────────
  function syncHeartButtons() {
    const buttons = document.querySelectorAll('.wishlist-btn');
    buttons.forEach(btn => {
      const projectId = btn.getAttribute('data-project');
      if (isInWishlist(projectId)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // ─── Heart Button Click Handler ───────────────────────────
  function handleHeartClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const btn = e.currentTarget;
    const projectId = btn.getAttribute('data-project');

    // Find the parent article for project data
    const card = btn.closest('.project-card, [data-project-id]');

    if (isInWishlist(projectId)) {
      removeFromWishlist(projectId);
      btn.classList.remove('active');
      showToast('Von der Merkliste entfernt');
    } else {
      // Build project data from the card's data attributes or DOM
      const project = {
        id: projectId,
        title: card ? (card.dataset.projectTitle || card.querySelector('.card-title')?.textContent || projectId) : projectId,
        img: card ? (card.dataset.projectImg || card.querySelector('.card-thumb-img')?.src || '') : '',
        cat: card ? (card.dataset.projectCat || card.querySelector('.card-badge')?.textContent || '') : '',
        href: card ? (card.dataset.projectHref || card.querySelector('.card-link-layer')?.href || '#') : '#'
      };

      addToWishlist(project);
      btn.classList.add('active');
      showToast('Zur Merkliste hinzugefügt ❤');
    }

    updateNavBadge();
    renderMerkliste();
  }

  // ─── Render Merkliste Section ─────────────────────────────
  function renderMerkliste() {
    const section = document.getElementById('merklisteSection');
    const grid = document.getElementById('merklisteGrid');
    if (!section || !grid) return;

    const list = getWishlist();

    if (list.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = '';

    grid.innerHTML = list.map(item => `
      <article class="project-card" style="position: relative;">
        <a href="${item.href}" class="card-link-layer" aria-label="${item.title} ansehen"></a>
        <div class="card-thumb">
          <img src="${item.img}" alt="${item.title}" class="card-thumb-img">
          <span class="card-badge">${item.cat}</span>
          <button class="wishlist-btn active" data-project="${item.id}" aria-label="Von Merkliste entfernen">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="heart-outline" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.title}</h3>
          <a href="${item.href}" class="card-link">Projekt ansehen</a>
        </div>
      </article>
    `).join('');

    // Re-bind the heart buttons in the merkliste grid
    grid.querySelectorAll('.wishlist-btn').forEach(btn => {
      btn.addEventListener('click', handleHeartClick);
    });
  }

  // ─── Clear Merkliste Button ───────────────────────────────
  function handleClearMerkliste() {
    clearWishlist();
    updateNavBadge();
    syncHeartButtons();
    renderMerkliste();
    showToast('Merkliste wurde geleert');
  }

  // ─── Init ─────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Bind all heart buttons
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      btn.addEventListener('click', handleHeartClick);
    });

    // 2. Sync heart states from localStorage
    syncHeartButtons();

    // 3. Update nav badge
    updateNavBadge();

    // 4. Render merkliste section if present
    renderMerkliste();

    // 5. Clear button
    const clearBtn = document.getElementById('clearMerkliste');
    if (clearBtn) {
      clearBtn.addEventListener('click', handleClearMerkliste);
    }

    // 6. Listen for storage changes from other tabs
    window.addEventListener('storage', (e) => {
      if (e.key === STORAGE_KEY) {
        syncHeartButtons();
        updateNavBadge();
        renderMerkliste();
      }
    });
  });
})();
