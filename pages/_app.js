import "../styles/globals.css";

import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css"

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { WagmiConfig } from 'wagmi' 
import { chain, configureChains, createClient } from "wagmi";
import { infuraProvider } from 'wagmi/providers/infura'

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    infuraProvider({
      //infuraKey
      apiKey: "a188938b355148c4b941470e9035ff72",
      priority: 1,
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Custom Dex",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "fff",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient} >
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;



