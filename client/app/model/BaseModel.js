Ext.define("client.model.base", {
    extend : "Ext.data.Model",
    schema : {
        namespace : 'client.model',
        proxy : {
            type : 'rest',
            pageParam : false, //to remove param "page"
            startParam : false, //to remove param "start"
            limitParam : false, //to remove param "limit"
            //noCache : false, //to remove param "_dc"
            //appendId : false,
            url : 'http://localhost:8080/{entityName}',
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
});
