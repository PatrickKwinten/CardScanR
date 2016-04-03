/*
 The function in this scriptlibrary is to create a javascriptobject with all settings
 in the preferences document and put it to an applicationScope named initPref. The function is
 called for in the "ccAppLayout" control in "BeforePageLoad". It is also executed when the
 preferences xpage is saved. This is because we want the new preferences to kick in when changed.
 */

var initLayout = (function(){
	// private properties
	
	// Private methods
	function _setInitScope(){
		var prefView:NotesView = database.getView("$v-preferences");
		if (prefView != null){
			var pref:NotesDocument = prefView.getFirstDocument();
			if (pref != null) {
				var tmp = {
					theme: pref.getItemValueString("Tx_PrefTheme"),
					logo: pref.getItemValueString("Tx_Logotypes"),
					title: pref.getItemValueString("Tx_PrefTitle"),
					titlesub: pref.getItemValueString("Tx_PrefTitleSub"),
					footer: pref.getItemValueString("Tx_PrefFooter"),
					search: pref.getItemValueString("Tx_PrefSearch"),
					legal: pref.getItemValueString("Tx_PrefLegal"),
					legaltext: pref.getItemValueString("Tx_PrefLegalText")
					
				}
				applicationScope.initPref = tmp;
				return tmp;
			}
		}
	}

	// Public properties and methods
	
return{
	setInitScope: function(){
			return _setInitScope();
		}
			
	}
}())


