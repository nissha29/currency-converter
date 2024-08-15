import { useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyOptions from "./hooks/useCurrencyOptions"
import useCurrencyInfo from "./hooks/useCurrencyInFo"

function App() {
  const [fromCurrencyKey, setFromCurrencyKey] = useState("inr")
  const [toCurrencyKey, setToCurrencyKey] = useState("usd")
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyOptions = useCurrencyOptions()
  const currencyInfo = useCurrencyInfo(fromCurrencyKey)

  const convert = (e) => {
    e.preventDefault()
    setConvertedAmount((amount * currencyInfo[toCurrencyKey]).toFixed(6))
  }

  return (
    <div className=" flex flex-wrap justify-center items-center w-screen h-screen">
      <form 
        className=" flex flex-col flex-wrap mx-1 gap-2 justify-center items-center bg-[#00000072] w-[22rem] h-[16rem] sm:w-[30rem] sm:h-[18rem]" 
        onSubmit={convert}
      >
        <div>
          <InputBox
            label="From"
            readonly={false}
            currencyOption={currencyOptions}
            defaultValue="Indian Rupee"
            onKeyChange={setFromCurrencyKey}
            onAmountChange={ (amount) => setAmount(amount)}
            amount={amount}
          />
        </div>
        <div>
          <InputBox
            label="To"  
            readonly={true}  
            currencyOption={currencyOptions}
            defaultValue="US Dollar"
            onKeyChange={setToCurrencyKey}
            inputField={setConvertedAmount}
            amount={convertedAmount}
          />
        </div>
        <button className="bg-[#f8c22d] text-[#000] text-[20px] w-[20rem]  sm:w-[27rem] h-[3rem] 
        font-semibold">Convert</button>
      </form>
    </div>
  )
}

export default App
