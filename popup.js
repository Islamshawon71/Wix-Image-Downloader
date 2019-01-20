// Update the relevant fields with the new data
function setDOMInfo(info) {
 
   document.getElementById('allImages').innerHTML = info;

}
   
window.addEventListener('DOMContentLoaded', function () { 
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) { 
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'DOMInfo'}, 
                setDOMInfo);
        });
});