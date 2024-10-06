sap.ui.define([
    "sap/ui/core/mvc/Controller"
],(Controller)=>{
    "use strick";

    return Controller.extend("ui5.walkthrough.controller.App",{
        onShowHello(){
            alert("Hello world")
        }
    });
});