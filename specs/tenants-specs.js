describe("Tenant Registering & Authenticity Token Assumptions", function() {

    var tenantsStore = null, controller = null;

    beforeEach(function(){

        // Check controller
        if (!tenantController) {
            tenantController = Kebab.Kernel.getController('Tenant');
        }

        // Check store
        if (!tenantsStore) {
            tenantsStore = controller.getStore('Tenants');
        }

        expect(tenantsStore).toBeTruthy();

        // wait store loading status
        waitsFor(
            function(){ return !tenantsStore.isLoading(); },
            "load never completed",
            4000
        );
    });

    it("should have Tenant data",function(){
        expect(tenantsStore.getCount()).toBeGreaterThan(1);
    });

});