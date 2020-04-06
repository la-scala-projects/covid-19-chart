const syncTime = document.querySelector('.time');

const updateSyncTime = (time) => {
  syncTime.textContent = time;
};

export { updateSyncTime };
