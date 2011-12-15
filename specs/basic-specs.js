describe("Basic Assumptions", function() {

    it("has Ext JS version 4.0.7 and Ext JS loaded", function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().version).toEqual('4.0.7');
    });

    it("has Kebab namespace defined",function(){
        expect(Kebab).toBeTruthy();
    });

    it("has Kebab.Kernel initialized",function(){
        expect(Kebab.Kernel).toBeDefined();
    });

    it("has Kebab Kernel version 2.0.0", function() {
        expect(Kebab.Kernel).toBeDefined();
        expect(Kebab.Kernel.getVersion()).toBeTruthy();
        expect(Kebab.Kernel.getVersion().version).toEqual('2.0.0');
    });

});