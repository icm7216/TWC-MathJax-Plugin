# Change Log (write in Japanese)

# 変更履歴

##  1.1.7 Nov. 17, 2017

*   MathJax ライブラリを v2.7.2 に変更。
*   フォント色を黒に変更。

##  1.1.6 Jul. 27, 2017

*   ローカルライブラリ使用時の切り替えを容易にできるように、オフライン・オプション `chkMathJaxOffline` を追加。
*   ライセンスを MIT に変更。

## Jul. 26, 2017

便宜上、プラグインtiddlerを個別ファイルに作成して履歴管理できるように、[icm7216.github.io/MyTiddlyWiki/](https://icm7216.github.io/MyTiddlyWiki/) からプラグインの個別リポジトリを作成。

##  1.1.5 May 24, 2017

*   MathJax CDN 廃止に伴い CDN を [cdnjs](https://cdnjs.com/) に修正。

## 1.1.4 Aug. 27, 2014

*   MathJax Secure Access CDN を最新のアドレス `https://cdn.mathjax.org` に修正。

## 1.1.3 Nov. 22, 2013

*   MathJax メニュー、エラーメッセージの日本語表示化の設定。
*   `\$`をエスケープして`$`を表示可能に。

## 1.1.2 Nov. 09, 2013

*   handler の matchText に`「$」`を追加。

## 1.1.1 Nov. 06, 2013

*   ロードイベントを修正（IE8対応）。


## 1.1.0 Oct. 22, 2013

*   オリジナルの [LaTeX for TiddlyWiki – A MathJax Plugin | Guy Rutenberg](https://www.guyrutenberg.com/2011/06/25/latex-for-tiddlywiki-a-mathjax-plugin/) を元に作成。
*   inline equation `$---$`を追加。
*   オフライン使用できるように修正。
*   数式番号表示の設定を追加。数式番号はtiddler更新毎に「初期値1」から順番にナンバリングされます。
*   autoNumber を有効にすると Tiddler 更新時に式番号が再加算される問題が発生。"resetEquationNumbers"で式番号とラベルをリセットするように修正。  

参考: [automatic numbering updates - Google グループ](https://groups.google.com/d/searchin/mathjax-users/equationNumbers/mathjax-users/kzOOFw1qtxw/5ywOF87P-KEJ)


