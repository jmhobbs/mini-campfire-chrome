function checkUrl (tabId, changeInfo, tab) {
  if( tab.url.indexOf('.campfirenow.com') > -1 ) {  // TODO: This is a little loose.
		chrome.pageAction.show(tabId);
	}
}

function miniCFClicked(tab) {
	/*chrome.tabs.executeScript(null, {
    code: 'document.body.style.backgroundColor="red"'
  });
	*/
	chrome.tabs.executeScript(null, {file: 'inject.js'});
	//chrome.tabs.executeScript(tab.id, {code: 'document.body.classList.add("minicf");'});
}

chrome.tabs.onUpdated.addListener(checkUrl);
chrome.pageAction.onClicked.addListener(miniCFClicked);
