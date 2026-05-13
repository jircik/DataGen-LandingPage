import './styles/main.css';
import { initClipboard } from './scripts/clipboard';
import { initNav } from './scripts/nav';

function ready(fn: () => void): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
}

ready(() => {
  initClipboard();
  initNav();
});
