import { useState } from "react";
import star from "./images/icon-star.svg"
import ThankYou from "./ThanksPage";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [items, setItems] = useState("")

  function Button({ setItems, number }) {
    
    return (
        <button onClick={() => setItems(number)} className="btn-number bg-gray-700 h-10 w-10 rounded-full text-gray-200 pt-1 focus:bg-gray-400 transition-all duration-150">{ number }</button>
    )
}

  return (
    <div className="App">
      {!isSubmitted && <header className="wrapper">
      <img src={ star } alt="" className="bg-gray-700 p-2 rounded-full"/>
        <div>
        <h2 className="text-gray-100 text-3xl my-6">How did we do?</h2>

        <p className="text-gray-400 mb-10">
          Please let us know how we did with your support
          request. All feedback is appreciated
          to help us improve our offering!
        </p>
      </div>
      <div>
        <ul className="grid grid-cols-5 gap-3 mb-10">
          <li>
            <Button number={1} />
          </li>
          <li>
            <Button number={2} />
          </li>
          <li>
            <Button number={3} />
          </li>
          <li>
            <Button number={4} />
          </li>
          <li>
            <Button number={5} />
          </li>
        </ul>
      </div>
      <div className="text-center">
      <button onClick={() => setIsSubmitted(true)} className="btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full">Submit</button>
      </div>
      </header>}
      {isSubmitted && <ThankYou items={ items } setItems={ setItems } setIsSubmitted={ setIsSubmitted } />}
    </div>
  );
}

export default App;
