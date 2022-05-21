import { defineComponent, ref } from 'vue';

import { useWalletStore } from '../stores/wallet';

export default defineComponent({
  setup() {
    const walletStore = useWalletStore();
    const isOpen = ref < boolean > false;

    const connectWallet = async () => {
      try {
        // @ts-expect-error Window.ethereum not typed
        const data = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        console.log('data :>> ', data);

        walletStore.saveWalletData({ address: data[0] });
        console.log('DApp connected to your wallet 💰');
      } catch (error) {
        console.error('Error connecting DApp to your wallet');
        console.error(error);
      }
    };
    return {
      connectWallet,
      walletStore,
      isOpen,
    };
  },
});
