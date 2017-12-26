/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('client.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'client',
        gridTitle: 'Entry Grid',
        formTitle: 'Entry Form',
        infoTitle: 'Information',
        addBtnText: 'Add new entry',
        delBtnText: 'Delete entry',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    //TODO - add data, formulas and/or methods to support your view
    stores: {
    	PersonnelListStore: {
        model: 'client.model.personnel',
        autoLoad: true,
        autoSync: true,

        proxy : {
            type : 'rest',
            url : 'http://localhost:8080/personnel',
            headers : {
                'Accept' : 'application/json'
            },
            reader : {
                type : 'json',
                //rootProperty : '_embedded.{entityName}'
            },
            writer : {
                type : 'json',
                //writeAllFields : true,
                //nameProperty : 'mapping'
            }
        }

    	}
    }
});
