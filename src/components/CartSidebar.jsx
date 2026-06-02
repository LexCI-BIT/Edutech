import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { isCartOpen, closeCart, cartItems, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#130f26] border-l border-[#2d1b69]/40 z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#2d1b69]/40">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-white w-6 h-6" />
                <h2 className="text-xl font-bold text-white">Your Cart</h2>
              </div>
              <button
                onClick={closeCart}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="bg-[#1a103c]/40 border border-[#2d1b69]/40 rounded-xl p-4 flex gap-4 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg bg-black shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1 pr-6">{item.title}</h4>
                      <p className="text-gray-400 text-xs mb-2">1 × {item.price}</p>
                      <p className="text-white font-bold text-sm">{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-4 right-4 text-gray-500 hover:text-red-400 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[#2d1b69]/40 bg-[#0a0a1a]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-bold">Subtotal:</span>
                  </div>
                  <span className="text-[#a855f7] font-bold text-xl">
                    ₹{cartTotal.toLocaleString('en-IN')}.00
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-6">
                  Shipping, taxes, and discounts calculated at checkout.
                </p>

                <div className="space-y-3">
                  <button 
                    onClick={closeCart}
                    className="w-full flex items-center justify-center gap-2 border border-white/20 text-white font-semibold py-3.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Browse Course
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="w-full flex items-center justify-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold py-3.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Checkout <span className="ml-1">→</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
