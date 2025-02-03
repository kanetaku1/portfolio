// 追加するJavaScript
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryGrids = document.querySelectorAll('.equipment-grid');

    // 初期表示
    showGallery('all');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // ボタンのアクティブ状態更新
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // ギャラリー表示更新
            const filter = button.dataset.filter;
            showGallery(filter);
        });
    });

    function showGallery(filter) {
        galleryGrids.forEach(grid => {
            if (filter === 'all') {
                grid.style.display = 'inline-flex';
            } else {
                grid.style.display = grid.dataset.category === filter ? 'inline-flex' : 'none';
            }
        });
        
        // スクロール位置リセット
        document.querySelector('.gallery-scroller').scrollLeft = 0;
    }
});