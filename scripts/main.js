//clear message yang sudah di submit

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();    
    }
}