let menuId;

chrome.runtime.onInstalled.addListener(() => {
  menuId = chrome.contextMenus.create({
    id: 'wiktionary',
    title: "Search Wiktionary for '%s'",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, _tab) => {
  if (info.menuItemId === 'wiktionary') {
    const txt = info.selectionText.trim();

    chrome.tabs.create({
      url: 'https://en.wiktionary.org/wiki/' + encodeURIComponent(txt)
    });
  }
});
