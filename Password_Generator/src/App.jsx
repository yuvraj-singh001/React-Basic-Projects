import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useref hook is also used to otimise the code by doing the selectsd things like how many numbers should be selecte
  const passwordref = useRef(null);

  // copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //usecallback is use to optmise the code it helps code to memorise the things that can be used later
  // generate a random password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@#$%^&*()_+=-{}[]|/?><";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  //useeffect runs first on the page and run agin when any change occur in dependency array
  // call the function passwordgenerator again and again on dependency change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, setPassword, passwordGenerator]);

  return (
    <>
      <div className="max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 ">
        {/* Title */}
        <h3 className="text-2xl text-center text-white mb-4">
          Password Generator
        </h3>

        {/* Input Box */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordref}
          />

          {/* Copy Button */}
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0"
          >
            Copy
          </button>
        </div>

        {/* For length, char, number checkbox */}
        <div className="flex text-sm gap-x-2">
          {/* Range Bar */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            {/* Length label */}
            <label className="text-lg text-white">Length: {length}</label>
          </div>

          {/* Number Adder */}
          <div className="flex item-center gap-x-1 mx-5">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />

            {/* Number Label */}
            <label className="text-lg text-white" htmlFor="numberInput">
              Numbers
            </label>
          </div>

          {/* Character Adder */}
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />

            {/* Character Adder */}
            <label className="text-lg text-white" htmlFor="characterInput">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
