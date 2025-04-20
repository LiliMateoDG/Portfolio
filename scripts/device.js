function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android|iphone|ipad|ipod|mobile/i.test(userAgent);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if (isMobileDevice()) {
      const warning = document.getElementById("device-warning");
      if (warning) {
        warning.style.display = "flex";
      }
    }
    const closeButton = document.getElementById("close-warning");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        const warning = document.getElementById("device-warning");
        if (warning) {
          warning.style.display = "none";
        }
      });
    }
  });