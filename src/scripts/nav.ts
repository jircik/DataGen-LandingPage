const STICKY_OFFSET = 80;

function scrollToHash(hash: string): void {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function initNav(root: ParentNode = document): void {
  const links = root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      event.preventDefault();
      scrollToHash(hash);
      history.replaceState(null, '', hash);
    });
  });
}
