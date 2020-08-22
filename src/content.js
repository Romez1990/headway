/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const app = document.createElement('div');
app.id = "my-extension-root";

document.body.appendChild(app);
ReactDOM.render(<App/>, app);

// app.style.display = "none";

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.message === "clicked_browser_action") {
            toggle();
        }
    }
);

function toggle() {
    if (app.style.display === "none") {
        app.style.display = "block";
    } else {
        app.style.display = "none";
    }
}
