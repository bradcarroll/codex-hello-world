function copyCurrentLink() {
  const button = document.getElementById('copy-link');

  if (!button) {
    return;
  }

  button.addEventListener('click', async () => {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      button.textContent = 'Copied';
      setTimeout(() => {
        button.textContent = 'Copy Link';
      }, 1200);
    } catch (error) {
      console.error('Could not copy link:', error);
      button.textContent = 'Copy failed';
      setTimeout(() => {
        button.textContent = 'Copy Link';
      }, 1200);
    }
  });
}

function handleWorldNavigation() {
  const links = document.querySelectorAll('[data-world-link]');
  const sceneTitle = document.querySelector('.scene-title');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      if (!sceneTitle) {
        return;
      }

      sceneTitle.textContent = link.textContent || 'World';
    });
  });
}

function enableDebugPanelIfNeeded() {
  const panel = document.getElementById('event-runtime-panel');

  if (!panel) {
    return;
  }

  const query = new URLSearchParams(window.location.search);
  const explicitDebugFlag = query.get('debug') === 'true';
  const adminDebugMode = document.body.dataset.adminDebug === 'true';

  if (explicitDebugFlag || adminDebugMode) {
    panel.hidden = false;
  }
}

function initFrontPorchAtmosphere() {
  copyCurrentLink();
  handleWorldNavigation();
  enableDebugPanelIfNeeded();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFrontPorchAtmosphere);
} else {
  initFrontPorchAtmosphere();
}
