function setup() {//註解，在setup()函數中，我們使用createCanvas()函數來創建一個400x400像素的畫布。
  //在這裡，我們將畫布的寬度和高度設置為windowWidth和windowHeight，這樣畫布就會自動適應瀏覽器窗口的大小。
  createCanvas(windowWidth, windowHeight);
}
//產生一個全螢幕畫布，背景顏色為#D2B48C
function draw() {//在畫布中間產生一個圓，半徑為100像素，顏色為#FF6347
  background('#D2B48C');//設置背景顏色為#D2B48C
  fill('#FF6347');//設置填充顏色為#FF6347
  stroke('#490c0c');  //設置邊框顏色為#490c0c，這是一種深紅色
  strokeWeight(5);//設置邊框寬度為5像素
  ellipse(width / 2, height / 2, 200, 200);


  // 設定方框樣式為深紅色，且無邊框
  fill('#490c0c');
  noStroke();

  // 在圓心的左上角繪製方框
  rect(width / 2 - 20, height / 2 - 20, 20, 20);

  // 在圓心的右上角繪製方框
  rect(width / 2 +   20, height / 2 - 20, 20, 20);

  // 在方框內 1/4 處繪製眼珠 (粉色實心圓)
  fill('#e7a0a0');
  ellipse(width / 2 - 15, height / 2 - 15, 12, 12); // 左眼珠 (x-20+5, y-20+5)
  ellipse(width / 2 + 25, height / 2 - 15, 12, 12); // 右眼珠 (x+20+5, y-20+5)

  // 繪製嘴巴
  noFill();
  stroke('#490c0c');
  strokeWeight(5);
  arc(width / 2, height / 2 + 20, 100, 80, 0, PI);
}
//在draw()函數中，我們使用background()函數來設置畫布的背景顏色為#D2B48C，這是一種淡棕色。每次draw()函數被調用時，畫布都會被重新繪製，這樣我們就可以在畫布上繪製其他圖形或元素了。