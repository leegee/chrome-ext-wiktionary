// // // var selection = window.getSelection();
// // // var range = selection.getRangeAt(0);
// // // if (range) {
// // //   var div = document.createElement('div');
// // //   div.appendChild(range.cloneContents());
// // //   alert(div.innerHTML);
// // // }



// chrome.runtime.onInstalled.addListener(() => {
//   alert('ok')
//   // chrome.contextMenus.create({
//   //   id: 'wiktionary',
//   //   title: "Search on Wiktionary",
//   //   contexts: ["selection"]
//   // });
// });

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId === 'wiktionary') {
//     console.log(info.selectionText);
//   }
// });
