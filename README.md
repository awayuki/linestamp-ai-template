LINEスタンプ制作用 Illustratorテンプレート
===========================

LINEスタンプを Adobe Illustrator で制作するためのテンプレートファイルです。
ご自由にどうぞ。

## 対応バージョンについて
Adobe Illustrator CC 推奨です（CS5/CS6 対応版もあります）。

CS2 - CS4 対応版を試験的に追加しました。ただし、アートボードでなくスライスを使ってアイテムを切り分けていますので、書き出しはWeb用に保存メニューを利用して行ってください。

## ファイルについて
テンプレートファイル（.ait）と通常の.aiを同梱しています。

### .aitファイルを利用する場合
下記のいずれかの方法で新規ファイルを作成してください。
+ Illustrator の「ファイル」メニューから「テンプレートから新規…」を選択後、 LineStamp.ait を指定
+ または、.ait ファイルを直接開く

※ Illlustrator のテンプレートについて[詳しくはこちら](http://helpx.adobe.com/jp/illustrator/kb/4287.html#main_B______________________)

### .ai ファイルを利用する場合
.ai ファイルをそのまま使用してもかまいません。

（この場合、更新するともとの .ai ファイルは上書き保存されるため、使い回したい場合はファイルをコピーしてから適宜利用してください。）

## 補助レイヤーについて
+ guide レイヤー : 上下左右に確保する余白の目安です（10px）。
+ background レイヤー : 主に透過状態の確認用です。色を適宜変更して利用してください。背景に同化しないかを確認する目安としても使えます。

書き出しメニューから画像を書き出す際は上記のレイヤーは非表示にしてください。

## ファイル一括書き出しスクリプト（CS5以降のバージョンのみ）
本リポジトリに同梱している Script/publishStickers.jsx をテンプレートとあわせて使うと、一括登録用の画像名に合わせて画像を書き出すことが可能です。

スタンプ画像が完成したら、 [ファイル] メニュー ⇒ [ スクリプト ] ⇒ [ その他のスクリプト… ] から（ショートカットは command + F12）、 publishStickers.jsx を選択してください。保存先を選択後にスタンプ画像とメイン画像、トークルームタブ画像が書き出されます。