// 自定义折叠功能
document.addEventListener('DOMContentLoaded', function() {
    // 为所有折叠标题添加点击事件
    const headers = document.querySelectorAll('.collapsible-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isExpanded = content.classList.contains('expanded');
            
            if (isExpanded) {
                // 折叠内容
                content.classList.remove('expanded');
                this.classList.add('collapsed');
            } else {
                // 展开内容
                content.classList.add('expanded');
                this.classList.remove('collapsed');
            }
        });
    });
    
    // 默认展开第一个爱好
    const firstHeader = document.querySelector('.collapsible-header');
    const firstContent = firstHeader?.nextElementSibling;
    if (firstHeader && firstContent) {
        firstContent.classList.add('expanded');
        firstHeader.classList.remove('collapsed');
    }
});
