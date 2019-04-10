chrome.runtime.onMessage.addListener(_ => {
	document.documentElement.classList.toggle('css-diagnostics');
});
