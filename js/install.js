let installPrompt = null;
const installButton = document.querySelector("#install");
console.log(installButton)



window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});

installButton.addEventListener("click", async () => {
    if (!installPrompt) {
      return;
    }
    const result = await installPrompt.prompt();
    console.log(`${result.outcome}`);
    installPrompt = null;
    installButton.setAttribute("hidden", "");
  });