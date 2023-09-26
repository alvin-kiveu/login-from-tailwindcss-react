import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMoneyBill, faEyeSlash, faUser, faPhone } from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <div className="App">
<div className="bg-cover bg-center min-h-screen" >
      <div className="font-poppins text-xl p-4 sm:p-12">
        <div className="bg-white flex flex-col p-4 sm:p-16 mt-2 sm:w-full sm:h-auto">
          <div className="title text-3xl font-bold text-primary-main">MPESA PAYMENT</div>
          <form className="mt-6 flex flex-col">
          <div className="mb-4 w-full">
              <label className="text-sm text-black font-black text-primary-main" htmlFor="password">
                Phone number
              </label>
              <div className="relative text-black flex items-center border-solid border-2 border-black justify-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 px-2 py-4" />
                <input
                  id="password"
                  type="tel"
                  placeholder="Enter Phone number"
                  className="text-sm text-black w-full bg-white/70 px-2 py-4 mb-1 focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-4 w-full">
              <label className="text-sm text-black font-black text-primary-main" htmlFor="UserName">
                Amount
              </label>
              <div className="relative text-black flex items-center border-solid border-2 border-black justify-center">
                <FontAwesomeIcon icon={faMoneyBill} className="mr-2 px-2 py-4" />
                <input
                  id="UserName"
                  type="text"
                  placeholder="Enter Amount"
                  className="text-sm text-black w-full bg-white/70 px-2 py-4 mb-1 focus:outline-none"
                />
              </div>
            </div>
            
            <button className="bg-primary-main text-white sm:w-1/2 text-xl py-2 px-2">
               MAKE PAYMENT
            </button>
        
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
