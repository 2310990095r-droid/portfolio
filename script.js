// ナビゲーションリンクの要素を全て取得
const navLinks = document.querySelectorAll('nav ul li a');

// 各リンクに対してクリックイベントリスナーを設定
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // デフォルトのアンカーリンクの動作をキャンセル
        e.preventDefault();

        // リンクの href 属性から対象のセクションIDを取得（例: '#chest'）
        const targetId = this.getAttribute('href');
       
        // 対象のセクション要素を取得
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // スムーススクロールを実行
            targetElement.scrollIntoView({
                behavior: 'smooth' // なめらかにスクロール
            });
        }
    });
});
