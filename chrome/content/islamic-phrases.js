islamic : function pastephrase(CODE)
{
 window.getBrowser().selectedConversation.focus();
 
	aText = " "+CODE+" ";
	var command = "cmd_insertText";
	var controller = document.commandDispatcher.getControllerForCommand(command);
	if (controller && controller.isCommandEnabled(command))
		{
			controller = controller.QueryInterface(Components.interfaces.nsICommandController);
			var params = Components.classes["@mozilla.org/embedcomp/command-params;1"];
			params = params.createInstance(Components.interfaces.nsICommandParams);
			params.setStringValue("state_data", aText);
			controller.doCommandWithParams(command, params);
		}
};
