const JiraCopier = () => {
	let urlPrefix = document.location.href.match(/https?:\/\/[\.\w-]+\//)[0] + "browse/";
	let ticketId = document.getElementById("key-val").textContent;
	let ticketDescription = document.getElementById("summary-val").childNodes[0].textContent;
	let ticketUrl = urlPrefix + ticketId;

	// Create Hyperlink
	let jiraLink = document.createElement("a");
	document.body.appendChild(jiraLink);
	jiraLink.innerHTML = "[ " + ticketId + " ] - " + ticketDescription;
	jiraLink.href = ticketUrl;

	// Copy to Clipboard
	const range = document.createRange();
	range.selectNode(jiraLink);
	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
	const successful = document.execCommand("copy");

	// Remove the added Hyperlink
	document.body.removeChild(jiraLink);
};

// On Extension Button Click
chrome.action.onClicked.addListener((tab) => {
	if (!tab.url) return;
	if (tab.url && tab.url.includes("chrome://")) return;
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: JiraCopier,
	});
});

// On Keyboard Shortcut Pressed
chrome.commands.onCommand.addListener((command, tab) => {
	if (!tab.url) return;
	if (tab.url && tab.url.includes("chrome://")) return;
	switch (command) {
		case "copytoclipboard":
			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				function: JiraCopier,
			});
			break;
	}
});
