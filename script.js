window.onload = () => {
  const flowersLoadedTimeout = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    const birthdayMessage = document.querySelector('.birthday-message');
    birthdayMessage.style.opacity = 1;
    birthdayMessage.style.transform = 'translate(-50%, -50%) scale(1)';
    clearTimeout(flowersLoadedTimeout);
  }, 1000);
};
