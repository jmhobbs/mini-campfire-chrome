function checkUrl (tabId, changeInfo, tab) {
	// TODO: This is a little loose.
  if( tab.url.indexOf('.campfirenow.com') > -1 ) {
		chrome.pageAction.show(tabId);
	}
}

function miniCFClicked(tab) {
	chrome.tabs.executeScript(null, {file: 'inject.js'});
}

chrome.tabs.onUpdated.addListener(checkUrl);
chrome.pageAction.onClicked.addListener(miniCFClicked);
