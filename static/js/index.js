window.HELP_IMPROVE_VIDEOJS = false;

function copyBibTeX() {
  const bibtexElement = document.getElementById('bibtex-code');
  const button = document.querySelector('.copy-bibtex-btn');
  const copyText = button ? button.querySelector('.copy-text') : null;

  if (!bibtexElement || !button || !copyText) {
    return;
  }

  const finishCopy = () => {
    button.classList.add('copied');
    copyText.textContent = 'Copied';

    window.setTimeout(() => {
      button.classList.remove('copied');
      copyText.textContent = 'Copy';
    }, 1800);
  };

  const fallbackCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = bibtexElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    finishCopy();
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(bibtexElement.textContent).then(finishCopy).catch(fallbackCopy);
    return;
  }

  fallbackCopy();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

document.addEventListener('scroll', () => {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (!scrollButton) {
    return;
  }

  if (window.scrollY > 360) {
    scrollButton.classList.add('visible');
  } else {
    scrollButton.classList.remove('visible');
  }
});
