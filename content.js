// this tab should have a page-action
chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction'
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
 
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {

    var imgs = document.getElementsByTagName("img");
    var imgSrcs = "";

    for (var i = 0; i < imgs.length; i++) {

 
        var images = imgs[i].src.split("/v");
        var html ='<img src="'+images[0]+'" > <br>';
        imgSrcs = imgSrcs + html;
    }

    response(imgSrcs);
  }
});