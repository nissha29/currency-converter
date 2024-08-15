

import { useEffect, useState } from "react"

function InputBox({
    label,
    readonly,
    currencyOption = [],
    defaultValue,
    onKeyChange,
    onAmountChange,
    amount,
}) {
  const [selectedCurrency, setSelectedCurrency] = useState(defaultValue)

  const setKeysValues = (e) => {
    const value = e.target.value
    const key = Object.keys(currencyOption).find(
        (key) => currencyOption[key] === value
    );
    setSelectedCurrency(value)
    onKeyChange(key)
  }

  return (
    <div className="flex flex-wrap justify-center items-center bg-[#ffffffba] w-[20rem] h-[5rem] sm:w-[27rem] sm:h-[5rem] relative font-semibold text-[17px]">
      <div className="absolute left-3 top-1">{label}</div>
      <div className="absolute bottom-3 left-3">
        <input 
            type="text"
            className="outline-none w-24 bg-transparent border-2 border-black rounded-md px-1"
            min={0}
            readOnly={readonly}
            value={amount}
            onChange={ (e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="absolute  right-3 top-1">Currency Type</div>
      <div className="absolute right-3 bottom-3">
        <select 
          className="rounded-md px-1 py-1 bg-transparent cursor-pointer outline-none"
          style={{
            textAlignLast: 'right',
            textAlign: 'left',   
          }}
          value={selectedCurrency}
          onChange={setKeysValues}
        >
          {Object.entries(currencyOption).map( ([key,value]) => {
            return value.trim() !== "" && <option key={key}>{value}</option>
          })}
        </select>
      </div>
    </div>
  )
}

export default InputBox
