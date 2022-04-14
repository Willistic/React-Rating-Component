
import Thanks from "./images/illustration-thank-you.svg"

function ThankYou({ items, setIsSubmitted }) {
    return (
        <div className="wrapper">
            <img src={ Thanks } alt="" className="block mx-auto mb-5" />
            <div className="flex intems-center justify-center">
            <p className="p-rating bg-gray-700 rounded-full text-center text-sm px-4 pt-1">You selected {items} out of 5</p>
            </div>
            <h2 className="text-gray-100 text-3xl my-6 text-center">Thank You</h2>
            <p className="text-gray-400 mb-10 text-center">We appreciate you taking the time to give a rating. <br />
          If you ever need more support
          don’t hesitate to get in touch!
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full">Rate Again</button>
        </div>
    )
}
export default ThankYou