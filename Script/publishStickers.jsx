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
