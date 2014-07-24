/*
LINEスタンプ 一括書き出しスクリプト
Last modified: Thu Jul 24 22:25:45 2014

awayuki 製 LINEスタンプ制作用 Illustratorテンプレートとあわせて使うと、
スタンプ画像／メイン画像／トークルームタブ画像を
一括登録可能なファイル名で書き出せます。

https://github.com/awayuki/linestamp-ai-template
*/

function exportSticker( dest, abd ) {
	var type    =     ExportType.PNG24,
		options = new ExportOptionsPNG24(),
		spec    = new File( dest.fsName + '/' + abd.name );

	options.artBoardClipping = true;
	options.antiAliasing = true;
	options.transparency = true;
	options.saveAsHTML   = false;

	app.activeDocument.exportFile( spec, type, options );
}

var savePath;

if ( documents.length > 0 ) {
	var abd = activeDocument.artboards,
		num = abd.length;

	var docPath  = app.activeDocument.fullName.path;
		savePath = Folder.selectDialog( 'Choose folder: ', docPath );

	if ( savePath != null ) {
		for (var i = 1; i < num ; i++) {
			abd.setActiveArtboardIndex(i);
			exportSticker( savePath, abd[i] );
		};
	}
}
