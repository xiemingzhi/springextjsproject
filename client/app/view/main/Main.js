/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('client.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'client.view.main.MainController',
        'client.view.main.MainModel',
        'client.view.main.List'
    ],
    layout: 'border',
    controller: 'main',
    viewModel: 'main',
    
    items: [{
            region: 'north',
            xtype: 'container',
            cls: 'app-header',
            height: 50,
            bind: '{name}'
        }, {
            region: 'center',
            xtype: 'mainlist',
            margin: '5 0 5 5'
        }, {
            region: 'east',
            xtype: 'container',
            layout: 'card',
            margin: '5 5 5 0',
            split: true,
            width: '30%',
            activeItem: 0,
            items: [{
                xtype: 'panel',
                title: 'Info',
                cls: 'info-panel',
                bodyPadding: 10,
                bind: {
                    html: '{infoText}'
                }
            }, {
                xtype: 'mainform'
            }]
        }]
});
