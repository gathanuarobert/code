const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";


const anchorTags = document.querySelectorAll('.navbar a');
anchorTags.forEach(function(anchorTag) {
    anchorTag.addEventListener('click', function(event) {
        event.preventDefault();

        const href = anchorTag.getAttribute('href');
        console.log('Clicked link with href:', href);
    });
});
