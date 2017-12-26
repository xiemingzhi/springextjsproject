/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('client.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onAddClick: function (sender, record) {
            var me = this,
                  vm = me.getViewModel(),
                  personnelStore = vm.getStore('PersonnelListStore');
            //var personnelStore = this.getStore('PersonnelListStore');

            var personnelModel = Ext.create('client.model.personnel');
            personnelModel.set("id", 0);
            personnelModel.set("name", "New Personnel");
            personnelModel.set("email", "");
            personnelModel.set("phone", "");

            vm.set('currentEntry', record);
            personnelStore.insert(0, personnelModel);

            //var personnelGrid = this.getView();
            //personnelGrid.editingPlugin.startEdit(personnelModel, 1);
            me.getView().down('mainlist').getView().select(0)
                    me.setActiveEastCard(1);
                    me.gridAddBtnSetDisabled(true);
        },

        onRemoveClick: function (sender, record) {
            console.log("inside remove " + record);
            var me = this,
            vm = me.getViewModel(),
            store = vm.getStore('PersonnelListStore');
            var recordModel = store.getAt(record);
            store.remove(recordModel);
            store.commitChanges();

        },

    onFormBtnClick: function(btn) {
            var me = this,
                vm = me.getViewModel(),
                store = vm.getStore('PersonnelListStore'),
                entry = vm.get('currentEntry');
            if (btn.action === 'save') {
                if (me.getView().down('mainform').isValid()) {
                    store.commitChanges();
                } else {
                    return;
                }
            } else {
                store.rejectChanges();
            }
            me.getView().down('mainlist').setSelection();
            me.setActiveEastCard(0);
            me.listAddBtnSetDisabled(false);
        },

    onItemSelected: function (sender, record) {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        var me = this;
        me.setActiveEastCard(1);
        me.getViewModel().set('currentEntry', record);
    },

    setActiveEastCard: function(n) {
            var me = this,
                cards = me.getView().down('container[region=east]');
            cards.setActiveItem(n);
        },

        listAddBtnSetDisabled: function (disabled) {
            var me = this,
                btn = me.getView().down('button[action=add]');
            btn.setDisabled(disabled);
        },
        
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
