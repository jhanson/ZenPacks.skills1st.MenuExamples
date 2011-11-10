(function() {

    Ext.ComponentMgr.onAvailable('device_configure_menu', function(config) {
        var menuButton = Ext.getCmp('device_configure_menu');
        menuButton.menuItems.push({
            xtype: 'menuitem',
            text: _t('Example Device Action'),
            handler: function(){
                console.log('example device action clicked!');
            }
        });

    });
}());


