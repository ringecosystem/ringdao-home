import {
  CowSwapWidget,
  type CowSwapWidgetParams,
  TradeType,
} from "@cowprotocol/widget-react";
import { useEffect, useRef } from "preact/hooks";

// Pin the Ethereum contract: the symbol "RING" can resolve to unrelated tokens.
// Metadata matches the ecosystem token list configured below.
const ringToken = {
  chainId: 1,
  address: "0x9469d013805bffb7d3debe5e7839237e535ec483",
  name: "Darwinia Network",
  symbol: "RING",
  decimals: 18,
  logoURI: "https://assets.coingecko.com/coins/images/9443/thumb/RING.png",
};

const cowWidgetParams: CowSwapWidgetParams = {
  appCode: "ringdao-cow-app",
  width: "100%",
  height: "640px",
  chainId: 1,
  tokenLists: [
    "https://raw.githubusercontent.com/helixbox/silicon/refs/heads/main/definition/tokens/cow-widget.json",
    "https://files.cow.fi/tokens/CowSwap.json",
    "https://files.cow.fi/tokens/CoinGecko.json",
  ],
  tradeType: TradeType.SWAP,
  sell: { asset: "USDC", amount: "1000" },
  buy: { asset: ringToken.address, amount: "0" },
  enabledTradeTypes: [
    TradeType.SWAP,
    TradeType.LIMIT,
    TradeType.ADVANCED,
    TradeType.YIELD,
  ],
  theme: {
    baseTheme: "light",
    primary: "#315d3d",
    background: "#fcfcfc",
    paper: "#fcfcfc",
    text: "#202b24",
    danger: "#b93f37",
    warning: "#94600b",
    alert: "#94600b",
    info: "#436c95",
    success: "#2b773f",
  },
  standaloneMode: true,
  disableToastMessages: false,
  disableProgressBar: false,
  hideBridgeInfo: false,
  hideOrdersTable: false,
  images: {},
  sounds: {},
  customTokens: [ringToken],
};

export default function GetRING() {
  const widget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widget.current;
    if (!container) return;

    // The SDK creates its iframe asynchronously and has no title parameter.
    const labelFrame = () => {
      const frame = container.querySelector("iframe");
      if (frame) frame.title = "CoW Swap — exchange tokens for RING";
    };
    const observer = new MutationObserver(labelFrame);
    observer.observe(container, { childList: true, subtree: true });
    labelFrame();
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="swap-panel"
      id="get-ring"
      role="region"
      aria-labelledby="swap-title"
    >
      <div className="swap-heading">
        <div>
          <h3 id="swap-title">Get RING</h3>
          <p>Swap tokens. Join the ecosystem.</p>
        </div>
        <span className="network-label">
          <span />
          Ethereum
        </span>
      </div>
      <div className="swap-widget" ref={widget}>
        <CowSwapWidget params={cowWidgetParams} />
      </div>
      <p className="swap-caption">
        Powered by CoW Swap <span>Onchain, on your terms.</span>
      </p>
    </div>
  );
}
