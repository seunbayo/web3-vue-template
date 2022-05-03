import { defineStore } from 'pinia';

interface walletData {
    address: string;
}

export const useWalletStore = defineStore('wallet', {
    state: () => {
        return {
            address: '',
        };
    },

    actions: {
        //@ts-ignore
        saveWalletData(payload: WalletData) {
            this.address = payload.address;
        },
    },
});
