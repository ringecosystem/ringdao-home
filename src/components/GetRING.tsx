import { CowSwapWidget, CowSwapWidgetParams, TradeType } from '@cowprotocol/widget-react'



    //  Fill this form https://cowprotocol.typeform.com/to/rONXaxHV once you pick your "appCode"
    const cowWidgetarams: CowSwapWidgetParams = {
      "appCode": "My Cool App", // Name of your app (max 50 characters)
      "width": "100%", // Width in pixels (or 100% to use all available space)
      "height": "640px",
      "chainId": 1, // 1 (Mainnet), 100 (Gnosis), 11155111 (Sepolia)
      "tokenLists": [ // All default enabled token lists. Also see https://tokenlists.org
          "https://raw.githubusercontent.com/helixbox/silicon/refs/heads/main/definition/tokens/cow-widget.json",
          "https://files.cow.fi/tokens/CowSwap.json",
          "https://files.cow.fi/tokens/CoinGecko.json"
      ],
      "tradeType": TradeType.SWAP, // TradeType.SWAP, TradeType.LIMIT or TradeType.ADVANCED
      "sell": { // Sell token. Optionally add amount for sell orders
          "asset": "USDC",
          "amount": "100"
      },
      "buy": { // Buy token. Optionally add amount for buy orders
          "asset": "RING",
          "amount": "0"
      },
      "enabledTradeTypes": [ // TradeType.SWAP, TradeType.LIMIT and/or TradeType.ADVANCED
          TradeType.SWAP,
          TradeType.LIMIT,
          TradeType.ADVANCED,
          TradeType.YIELD
      ],
      "theme": "dark", // light/dark or provide your own color palette
      "standaloneMode": false,
      "disableToastMessages": false,
      "disableProgressBar": false,
      "hideBridgeInfo": false,
      "hideOrdersTable": false,
      "images": {},
      "sounds": {},
      "customTokens": []
  }

export default function GetRING() {
    return (
      <>
        <div
          id="get-ring"
          className="p-[50px_20px] sm:p-[60px] relative border-b-solid border-b-black border-b-[1px]"
        >
          <div className="absolute bg-black w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] top-0 left-0" />
          <h2 className="text-[50px] leading-[64px] font-bold">Get RING</h2>
        </div>
        <div className="sm:flex gap-[60px] border-b-solid border-b-[1px] border-b-black p-[60px]">
          <div className="flex flex-coljustify-center">
            <CowSwapWidget params={cowWidgetarams} />
          </div>
        </div>
      </>
    );
  }
  