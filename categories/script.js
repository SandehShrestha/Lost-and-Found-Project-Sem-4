function initCategoriesPage() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const itemsDisplay = document.getElementById('items-display');

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelector('.category-btn.active').classList.remove('active');
            btn.classList.add('active');
            const cat = btn.getAttribute('data-category');
            let message = '';
            if (cat === 'all') {
                message = '<p style="padding:2rem;">All items will be shown here.</p>';
            } else {
                message = `<p style=\"padding:2rem;\">Items for <strong>${btn.textContent}</strong> will be shown here.</p>`;
            }
            itemsDisplay.innerHTML = message;
        });
    });

    // Initial placeholder
    itemsDisplay.innerHTML = '<p style="padding:2rem;">All items will be shown here.</p>';

    // Upload Modal Functionality
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadModal = document.getElementById('uploadModal');
    const closeModal = document.querySelector('.close-modal');
    if (uploadBtn && uploadModal && closeModal) {
        uploadBtn.addEventListener('click', () => {
            uploadModal.style.display = 'block';
        });
        closeModal.addEventListener('click', () => {
            uploadModal.style.display = 'none';
        });
        window.addEventListener('click', (e) => {
            if (e.target === uploadModal) uploadModal.style.display = 'none';
        });
    }
}
