Ext.define('client.model.personnel', {
    //extend: 'client.model.base',
    extend : "Ext.data.Model",
    config: {
        fields: [ {name: 'id',   type: 'int'},{name: 'name', type: 'string'}, {name:'email', type:'string'}, {name: 'phone', type:'string'} ]
    }
});