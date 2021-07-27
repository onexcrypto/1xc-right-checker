"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./rights"));
exports.RightChecker = {
    hasRight(right, rights) {
        for (let i = 0; i < rights.length; i++) {
            let exp = rights[i].replace(".", "\.");
            if (exp.includes("\.all")) {
                exp = exp.replace("\.all", "(.*)");
            }
            if (right.match(exp)) {
                return true;
            }
        }
        return false;
    },
    hasAllRights(search, knownRights) {
        for (let i = 0; i < search.length; i++) {
            if (!this.hasRight(search[i], knownRights)) {
                return false;
            }
        }
        return true;
    },
    hasAtLeastOneRight(search, knownRights) {
        for (let i = 0; i < search.length; i++) {
            if (this.hasRight(search[i], knownRights)) {
                return true;
            }
        }
        return false;
    },
    canReadUserProfile(rights) {
        return this.hasRight("account.profile.read", rights);
    },
    canEditUserProfile(rights) {
        return this.hasRight("account.profile.update", rights);
    },
    canSubmitExchanges(rights) {
        return this.hasRight("account.exchanges.submit", rights);
    },
    canReadExchanges(rights) {
        return this.hasRight("account.exchanges.read", rights);
    },
    canReadWallet(rights) {
        return this.hasRight("account.wallet.read", rights);
    },
    canUpdateWalletMetadata(rights) {
        return this.hasRight("account.wallet.update", rights);
    },
    canReadWalletHistory(rights) {
        return this.hasRight("account.wallet.history.read", rights);
    },
    canReadWalletTransfers(rights) {
        return this.hasRight("account.wallet.transfert.read", rights);
    },
    canTransferMoney(rights) {
        return this.hasRight("account.wallet.transfert.create", rights);
    },
    canCreateAccessKey(rights) {
        return this.hasRight("account.access.create", rights);
    },
    canReadAccessKeys(rights) {
        return this.hasRight("account.access.read", rights);
    },
    canDeleteAccessKey(rights) {
        return this.hasRight("account.access.delete", rights);
    },
    canReadBusinessDetails(rights) {
        return this.hasRight("account.business.read", rights);
    },
    canUpdateBusinessDetails(rights) {
        return this.hasRight("account.business.update", rights);
    },
    canReadProjects(rights) {
        return this.hasRight("account.project.read", rights);
    },
    canCreateProject(rights) {
        return this.hasRight("account.project.create", rights);
    },
    canUpdateProject(rights) {
        return this.hasRight("account.project.update", rights);
    },
    canDeleteProject(rights) {
        return this.hasRight("account.project.delete", rights);
    },
    canReadBusinessPayments(rights) {
        return this.hasRight("account.business.payment.read", rights);
    },
    canCreatePaymentIntent(rights) {
        return this.hasRight("account.business.payment.create-intent", rights);
    },
};
