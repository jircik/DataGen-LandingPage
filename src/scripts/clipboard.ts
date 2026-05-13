const COPIED_LABEL = 'copied';
const RESET_MS = 1500;

async function writeClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }
  return false;
}

function flashCopied(button: HTMLElement): void {
  const originalLabel = button.dataset.originalLabel ?? button.textContent ?? '';
  button.dataset.originalLabel = originalLabel;
  button.dataset.state = 'copied';
  button.textContent = COPIED_LABEL;

  window.setTimeout(() => {
    button.textContent = originalLabel;
    delete button.dataset.state;
  }, RESET_MS);
}

export function initClipboard(root: ParentNode = document): void {
  const buttons = root.querySelectorAll<HTMLElement>('[data-copy]');

  buttons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const text = button.dataset.copy ?? '';
      if (!text) return;

      const ok = await writeClipboard(text);
      if (ok) flashCopied(button);
    });
  });
}
