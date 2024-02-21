document.getElementsByClassName("embed").array.forEach(element => {
    $.ajax({ url: element.getAttribute("data-src"), success: file_content => {
        element.innerHTML = file_content;
    }, error: () => {
        console.error("Failed to load: ", element.getAttribute("data-src"));
    }});
});
