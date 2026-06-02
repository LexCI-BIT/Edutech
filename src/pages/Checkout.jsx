import React from 'react';
import { motion } from 'framer-motion';
import { Lock, MapPin, CreditCard, FileText, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cartItems, cartTotal } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-bg-dark text-white font-sans pt-24 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Checkout</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Lock className="w-4 h-4 text-[#a855f7]" /> Secure checkout
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Forms */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Step 1: Contact Information */}
            <div className="bg-[#130f26] border border-[#2d1b69]/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#1a103c] rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                  <User className="w-4 h-4 text-[#a855f7]" />
                </div>
                <h2 className="text-lg font-bold text-white">1. Contact Information</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Email address</label>
                  <input type="email" placeholder="Enter your email" className="w-full bg-[#0a0a1a] border border-[#2d1b69]/60 rounded-lg px-4 py-3 text-sm text-white focus:border-[#a855f7] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Create password</label>
                  <input type="password" placeholder="Create a password" className="w-full bg-[#0a0a1a] border border-[#2d1b69]/60 rounded-lg px-4 py-3 text-sm text-white focus:border-[#a855f7] focus:outline-none transition-colors" />
                </div>
              </div>
            </div>

            {/* Step 2: Billing Address */}
            <div className="bg-[#130f26] border border-[#2d1b69]/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#1a103c] rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                  <MapPin className="w-4 h-4 text-[#a855f7]" />
                </div>
                <h2 className="text-lg font-bold text-white">2. Billing Address</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Country or region</label>
                  <select className="w-full bg-[#0a0a1a] border border-[#2d1b69]/60 rounded-lg px-4 py-3 text-sm text-white focus:border-[#a855f7] focus:outline-none transition-colors appearance-none">
                    <option>Select country or region</option>
                    <option>India</option>
                    <option>United States</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">First name</label>
                    <input type="text" placeholder="Enter your first name" className="w-full bg-[#0a0a1a] border border-[#2d1b69]/60 rounded-lg px-4 py-3 text-sm text-white focus:border-[#a855f7] focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">Last name</label>
                    <input type="text" placeholder="Enter your last name" className="w-full bg-[#0a0a1a] border border-[#2d1b69]/60 rounded-lg px-4 py-3 text-sm text-white focus:border-[#a855f7] focus:outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Address</label>
                  <input type="text" placeholder="Enter your address" className="w-full bg-[#0a0a1a] border border-[#2d1b69]/60 rounded-lg px-4 py-3 text-sm text-white focus:border-[#a855f7] focus:outline-none transition-colors" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">City</label>
                    <input type="text" placeholder="Enter your city" className="w-full bg-[#0a0a1a] border border-[#2d1b69]/60 rounded-lg px-4 py-3 text-sm text-white focus:border-[#a855f7] focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">State</label>
                    <select className="w-full bg-[#0a0a1a] border border-[#2d1b69]/60 rounded-lg px-4 py-3 text-sm text-white focus:border-[#a855f7] focus:outline-none transition-colors appearance-none">
                      <option>Select state</option>
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">Pin code</label>
                    <input type="text" placeholder="Enter pin code" className="w-full bg-[#0a0a1a] border border-[#2d1b69]/60 rounded-lg px-4 py-3 text-sm text-white focus:border-[#a855f7] focus:outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Phone (optional)</label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full bg-[#0a0a1a] border border-[#2d1b69]/60 rounded-lg px-4 py-3 text-sm text-white focus:border-[#a855f7] focus:outline-none transition-colors" />
                </div>
              </div>
            </div>

            {/* Step 3: Payment Options */}
            <div className="bg-[#130f26] border border-[#2d1b69]/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#1a103c] rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                  <CreditCard className="w-4 h-4 text-[#a855f7]" />
                </div>
                <h2 className="text-lg font-bold text-white">3. Payment Options</h2>
              </div>
              
              <div className="bg-[#0a0a1a] border border-[#a855f7]/50 rounded-xl p-5 flex items-start gap-4">
                <div className="w-5 h-5 rounded-full border-4 border-[#a855f7] bg-black mt-1 shrink-0"></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-white text-lg tracking-wider text-blue-500 italic">Razorpay</span>
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">Pay by Razorpay</h3>
                  <p className="text-xs text-gray-400">Pay securely by credit or debit card or internet banking through Razorpay.</p>
                </div>
              </div>
            </div>

            {/* Step 4: Note */}
            <div className="bg-[#130f26] border border-[#2d1b69]/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#1a103c] rounded-lg flex items-center justify-center border border-primary/20 shrink-0">
                  <FileText className="w-4 h-4 text-[#a855f7]" />
                </div>
                <h2 className="text-lg font-bold text-white">4. Add a note to your order <span className="text-gray-500 text-sm font-normal">(optional)</span></h2>
              </div>
              
              <textarea 
                placeholder="Write your note here..."
                rows="4"
                className="w-full bg-[#0a0a1a] border border-[#2d1b69]/60 rounded-lg px-4 py-3 text-sm text-white focus:border-[#a855f7] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            {/* Terms and Submit */}
            <div className="pt-2">
              <label className="flex items-start gap-3 mb-6 cursor-pointer group">
                <div className="w-5 h-5 rounded border border-[#2d1b69] bg-[#0a0a1a] group-hover:border-[#a855f7] transition-colors mt-0.5"></div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  By proceeding with your purchase, you agree to our <br/>
                  <a href="#" className="text-[#a855f7] hover:underline">Terms and Conditions</a> and <a href="#" className="text-[#a855f7] hover:underline">Privacy Policy</a>.
                </p>
              </label>

              <button className="w-full bg-[#4a1d96] hover:bg-[#5b21b6] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#4a1d96]/20">
                Place Order
              </button>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#130f26] border border-[#2d1b69]/40 rounded-2xl p-6 sticky top-28">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-5 h-5 text-gray-400" />
                <h2 className="text-lg font-bold text-white">Order Summary</h2>
              </div>

              <div className="space-y-4 mb-6">
                {cartItems.length === 0 ? (
                  <p className="text-sm text-gray-400">Your cart is empty.</p>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image} alt={item.title} className="w-16 h-12 object-cover rounded-md bg-black shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-xs font-semibold truncate mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-xs">1 × {item.price}</p>
                      </div>
                      <span className="text-gray-300 text-xs font-semibold whitespace-nowrap">{item.price}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-[#2d1b69]/40 pt-4 space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}.00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Taxes</span>
                  <span>₹0.00</span>
                </div>
              </div>

              <div className="border-t border-[#2d1b69]/40 pt-4 mb-8">
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>Total</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}.00</span>
                </div>
              </div>

              <div className="bg-[#1a103c]/40 border border-[#2d1b69]/40 rounded-xl p-4 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2d1b69]/40 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4 text-[#a855f7]" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold mb-1">Secure Checkout</h4>
                  <p className="text-gray-400 text-[10px] leading-relaxed">
                    Your payment information is encrypted and safe with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
