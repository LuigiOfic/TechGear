document.addEventListener('DOMContentLoaded', function() {
    const imgMenu = document.getElementById('imgMenu');
    const dropdownContent = document.getElementById('dropdownContent');
    const closeBtn = document.getElementById('closeBtn');

    imgMenu.addEventListener('click', function() {
        dropdownContent.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        dropdownContent.style.display = 'none';
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!dropdownContent.contains(target) && target !== imgMenu) {
            dropdownContent.style.display = 'none';
        }
    });
});
