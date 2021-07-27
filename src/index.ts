export * from "./rights";

export const RightChecker = {
    hasRight (right: string, rights: string[]) {
        for(let i = 0; i< rights.length; i++ ){
            let exp = rights[i].replace(".", "\.");
            if(exp.includes("\.all")) {
                exp = exp.replace("\.all", "(.*)")
            }
            if(right.match(exp)) {
                return true;
            }
        }
        return false;
    },

    hasAllRights (search: string[], knownRights: string[] ) {
        for(let i = 0; i < search.length; i++) {
            if(!this.hasRight(search[i], knownRights)) {
                return false
            }
        }
        return true
    },

    hasAtLeastOneRight (search: string[], knownRights: string[]) {
        for(let i = 0; i < search.length; i++) {
            if(this.hasRight(search[i], knownRights)) {
                return true
            }
        }
        return false
    },

    canReadUserProfile (rights: string[]) {
        return this.hasRight("account.profile.read", rights)
    },

    canEditUserProfile (rights: string[]) {
        return this.hasRight("account.profile.update", rights)
    },

    canReadExchanges (rights: string[]) {
        return this.hasRight("account.exchanges.read", rights)
    },

    canCreateExchangesTickets (rights: string[]) {
        return this.hasRight("account.exchanges.tickets.create", rights)
    },

    canReadExchangesTickets (rights: string[]) {
        return this.hasRight("account.exchanges.tickets.read", rights)
    },

    canCreateStandardWallet(rights: string[]) {
        return this.hasRight("account.wallet.standard.create", rights);
    },

    canCreateBusinessWallet(rights: string[]) {
        return this.hasRight("account.wallet.business.create", rights);
    },

    canReadWallet (rights: string[]) {
        return this.hasRight("account.wallet.read", rights)
    },

    canUpdateWalletMetadata (rights: string[]) {
        return this.hasRight("account.wallet.update", rights)
    },

    canReadWalletHistory (rights: string[]) {
        return this.hasRight("account.wallet.history.read", rights)
    },

    canReadWalletTransfers (rights: string[]) {
        return this.hasRight("account.wallet.transfert.read", rights)
    },

    canTransferMoney (rights: string[]) {
        return this.hasRight("account.wallet.transfert.create", rights)
    },

    canCreateAccessKey (rights: string[]) {
        return this.hasRight("account.access.create", rights)
    },

    canReadAccessKeys (rights: string[]) {
        return this.hasRight("account.access.read", rights)
    },

    canDeleteAccessKey (rights: string[]) {
        return this.hasRight("account.access.delete", rights)
    },

    canReadBusinessDetails (rights: string[]) {
        return this.hasRight("account.business.read", rights)
    },

    canUpdateBusinessDetails (rights: string[]) {
        return this.hasRight("account.business.update", rights)
    },

    canReadProjects (rights: string[]) {
        return this.hasRight("account.project.read", rights)
    },

    canCreateProject (rights: string[]) {
        return this.hasRight("account.project.create", rights)
    },

    canUpdateProject (rights: string[]) {
        return this.hasRight("account.project.update", rights)
    },

    canDeleteProject (rights: string[]) {
        return this.hasRight("account.project.delete", rights)
    },

    canReadBusinessPayments (rights: string[]) {
        return this.hasRight("account.business.payment.read", rights)
    },

    canCreatePaymentIntent (rights: string[]) {
        return this.hasRight("account.business.payment.create-intent", rights)
    },

}