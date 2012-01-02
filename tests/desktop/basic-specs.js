describe("Basic Assumptions", function() {

    it("has Ext JS version 4.0.7 and Ext JS loaded", function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().version).toEqual('4.0.7');
    });

    it("has Kebab namespace defined",function(){
        expect(Kebab).toBeTruthy();
    });

});