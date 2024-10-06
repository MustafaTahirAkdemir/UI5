sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],(Controller, MessageToast)=>{
    "use strick";

    return Controller.extend("ui5.walkthrough.controller.App",{
        onShowHello(){
            // alert("Hello world")
            MessageToast.show("Hello World");
        }
    });
});