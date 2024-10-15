import React from 'react';

export const metadata = {
  title: "Reset Password - UniverHub",
  description: "Page for resetting your password on UniverHub.",
};

export default function ResetPassword() {
  return (
    <div className="reset-password-container">
      <div className="header mb-10">
        <h1 className="text-4xl font-bold">Reset Your Password</h1>
      </div>

      {/* Form */}
      <form>
        <div className="form-group space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="example@univerhub.com"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 text-white shadow hover:bg-blue-700"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}
