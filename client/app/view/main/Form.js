Ext.define('client.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'mainform',
    autoScroll: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: 5,
    config: {
        currentEntry: null
    },
    bind:{
        title:'{formTitle}',
        currentEntry:'{currentEntry}'
    },
    defaults: {
        anchor: '100%',
        allowBlank: true,
        msgTarget: 'under'
    },
    items: [{
        fieldLabel: 'Id',
        name: 'id',
        xtype: 'displayfield',
        bind: {
            value: '{currentEntry.id}'
        }
    }, {
        fieldLabel: 'Name',
        name: 'name',
        xtype: 'textfield',
        bind: {
            value: '{currentEntry.name}'
        }
    }, {
        fieldLabel: 'email',
        name: 'email',
        xtype: 'textfield',
        bind: {
            value: '{currentEntry.email}'
        }
    }, {
        fieldLabel: 'phone',
        name: 'phone',
        xtype: 'textfield',
        bind: {
            value: '{currentEntry.phone}'
        }
    }
    ],
    buttons: [{
        text: 'Save',
        action: 'save',
        handler:'onFormBtnClick'
    }, {
        text: 'Cancel',
        action: 'cancel',
        handler:'onFormBtnClick'
    }]
});
