// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有互動功能
    initClickableTexts();
    initExpandableTexts();
});

/**
 * 初始化可點擊文字功能
 * 點擊描述文字時，顏色會在預設色和 #004B97 之間切換
 */
function initClickableTexts() {
    const clickableTexts = document.querySelectorAll('.clickable-text');
    
    clickableTexts.forEach(text => {
        text.addEventListener('click', function(e) {
            // 如果點擊的是 "See All" 連結，不觸發顏色切換
            if (e.target.classList.contains('see-all-link')) {
                return;
            }
            
            // 切換 active 類別
            this.classList.toggle('active');
        });
    });
}

/**
 * 初始化可展開文字功能
 * 處理 "See All" 按鈕點擊和文字區塊收合
 */
function initExpandableTexts() {
    const seeAllLinks = document.querySelectorAll('.see-all-link');
    const expandableWrappers = document.querySelectorAll('.description-wrapper');
    
    // 處理 "See All" 連結點擊
    seeAllLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const wrapper = this.closest('.description-wrapper');
            const shortText = wrapper.querySelector('.expandable-text:not(.full-text)');
            const fullText = wrapper.querySelector('.full-text');
            
            if (fullText && !fullText.classList.contains('expanded')) {
                // 展開文字
                shortText.style.display = 'none';
                fullText.style.display = 'block';
                fullText.classList.add('expanded');
            }
        });
    });
    
    // 處理文字區塊點擊收合
    expandableWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function(e) {
            // 如果點擊的是 "See All" 連結，不觸發收合
            if (e.target.classList.contains('see-all-link')) {
                return;
            }
            
            const shortText = wrapper.querySelector('.expandable-text:not(.full-text)');
            const fullText = wrapper.querySelector('.full-text');
            
            // 只有在文字已展開時才收合
            if (fullText && fullText.classList.contains('expanded')) {
                // 收合文字
                fullText.classList.remove('expanded');
                fullText.style.display = 'none';
                shortText.style.display = 'block';
            }
        });
    });
}
