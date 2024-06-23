"use client";
const Checkout: React.FC = () => {
  return (
    <div className="container mx-auto bg-white p-6 shadow-md rounded-md">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-2/3 lg:pr-8">
          <h2 className="text-2xl font-semibold mb-4">Billing Address</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country / Region *
                </label>
                <select
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
                >
                  <option>Select a country / region</option>
                  <option>Uzbekistan</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Town / City *
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Street Address *
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                placeholder="House number and street name"
                style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
              />
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Apartment, suite, unit, etc. (optional)"
                style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State *
                </label>
                <select
                  className="mt-1 outline-none block w-full border-gray-300 rounded-md shadow-sm p-2"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
                >
                  <option>Select a state</option>
                  <option>Navoi</option>
                  <option>Toshkent</option>
                  <option>Jizax</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Zip *
                </label>
                <input
                  type="text"
                  className="mt-1 outline-none block w-full border-gray-300 rounded-md shadow-sm p-2"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address *
                </label>
                <input
                  type="email"
                  className="mt-1 outline-none block w-full border-gray-300 rounded-md shadow-sm p-2"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="text"
                  className="mt-1 outline-none block w-full border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="+998"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                className="h-4 w-4 text-green-600 border-gray-300 outline-none rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Ship to a different address?
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Order notes (optional)
              </label>
              <textarea
                className="mt-1 block w-full border-gray-300 outline-none rounded-md shadow-sm p-2"
                style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
              ></textarea>
            </div>
          </form>
        </div>

        {/* Your Order */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src={`/Barberton.png`}
                  alt="Barberton Daisy"
                  className="w-16 h-16 rounded-md"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-700">
                    Barberton Daisy
                  </p>
                  <p className="text-sm text-gray-500">SKU: 1995751877966</p>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900">$238.00</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src={`/Bulish.png`}
                  alt="Blushing Bromeliad"
                  className="w-16 h-16 rounded-md"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-700">
                    Blushing Bromeliad
                  </p>
                  <p className="text-sm text-gray-500">SKU: 1995751877965</p>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900">$834.00</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src={`/Aluminium.png`}
                  alt="Aluminum Plant"
                  className="w-16 h-16 rounded-md"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-700">
                    Aluminum Plant
                  </p>
                  <p className="text-sm text-gray-500">SKU: 1995751877786</p>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900">$1,611.00</p>
            </div>
          </div>
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-700">Subtotal</p>
              <p className="text-sm font-medium text-gray-900">$2,683.00</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-700">
                Coupon Discount
              </p>
              <p className="text-sm font-medium text-gray-900">- $0.00</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-700">Shipping</p>
              <p className="text-sm font-medium text-gray-900">$16.00</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-700">Total</p>
              <p className="text-sm font-medium text-green-600">$2,699.00</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="paymentMethod"
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">PayPal</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="paymentMethod"
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Direct bank transfer
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="paymentMethod"
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Cash on delivery
              </label>
            </div>
          </div>
          <button className="w-full bg-green-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-green-700">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
