export function closePopUp(popUp) {
  popUp.classList.remove('pop-up_opened');
}

export function openPopUp(popUp) {
  popUp.classList.add('pop-up_opened');
}

export function handleEscKey(event) {
  if (event.key === 'Escape') {
    const activePopUp = document.querySelector('.pop-up_opened');
    if (activePopUp) {
      closePopUp(activePopUp, {});
    }
  }
}

export function handleClickOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopUp(event.currentTarget, {});
  }
}