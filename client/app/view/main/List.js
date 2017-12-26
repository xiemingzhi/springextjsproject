/**
 * This view is an example list of people.
 */
Ext.define('client.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        //'client.view.main.PersonnelViewModel',
        //'client.store.Personnel'
    ],

    //viewModel: { type: 'personnelviewmodel' },
    title: 'Personnel',

    // store: {
    //     type: 'personnel'
    // },
    bind: {
            store: '{PersonnelListStore}'
        },

    dockedItems: [{
            xtype: 'toolbar',
            items: ['->', {
                xtype: 'button',
                action: 'add',
                bind: '{addBtnText}',
                iconCls: 'fa-plus-circle',
                handler:  'onAddClick'
            }]
        }],

    columns: [
      {
        xtype: 'actioncolumn',
        width: 40,
        align: 'center',
        items: [{
            action: 'del',
            iconCls: 'fa-minus-circle',
            handler: 'onRemoveClick'
        }],
        text: 'Action'
    },
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
