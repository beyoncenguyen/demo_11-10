export default function OpenSAPMobileCards(context) {
    // Get the Nativescript Utils Module
    const utilsModule = context.nativescript.utilsModule;
    return context.executeAction('/Deep_Link/Actions/Confirmation.action').then((result) => {
        if (result.data) {
            //This will open SAP Mobile Cards app
            return utilsModule.openUrl("com.sap.content2go://");
        } else {
            return Promise.reject('User Deferred');
        }
    });
}