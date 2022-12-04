var sketch;

// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
    // キャンバスをつくる
    createCanvas(windowWidth, max(windowHeight));
    
    // 背景をぬりつぶす
    background(0);
    
    // ブレンドモードの設定
    blendMode(ADD);

}

// 計算と描画
function draw() {
    // 輪郭（りんかく）を消す
    noStroke();
    // ぬりつぶす
    fill(random(80), random(80), 255, 50);
    
    // 円を描く
    ellipse( random(windowWidth),  random(windowHeight), random(5, 50));
}


new p5(sketch, "top");