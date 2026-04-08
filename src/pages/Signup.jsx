import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputField = ({ label, type, placeholder, value, onChange, required = false }) => {
  return (
    <div className="mb-1.5">
      <fieldset className="border border-gray-300 rounded px-2 pt-[2px] pb-[3px] focus-within:border-popx-purple focus-within:border-2 transition-all">
        <legend className="text-[10px] font-semibold text-popx-purple px-1">
          {label}{required && <span className="text-red-500">*</span>}
        </legend>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full text-[13px] outline-none bg-transparent"
        />
      </fieldset>
    </div>
  );
};

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
  });

  const [isAgency, setIsAgency] = useState('yes');

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/profile', {
      state: {
        fullName: formData.fullName,
        email: formData.email
      }
    });
  };

  return (
    // ✅ No flex center (this was causing overflow)
    <div className="mt-6 px-4  flex flex-col justify-center">

      {/* Container */}
      <div className="max-w-sm w-full mx-auto">

        {/* Heading */}
        <h1 className="text-[22px] font-bold mb-2 leading-tight">
          Create your <br /> PopX account
        </h1>

        <form onSubmit={handleSignup}>
          
          <InputField label="Full Name" type="text" placeholder="Marry Doe" required value={formData.fullName} onChange={(e) => handleChange(e, 'fullName')} />
          <InputField label="Phone number" type="tel" placeholder="Marry Doe" required value={formData.phone} onChange={(e) => handleChange(e, 'phone')} />
          <InputField label="Email address" type="email" placeholder="Marry Doe" required value={formData.email} onChange={(e) => handleChange(e, 'email')} />
          <InputField label="Password" type="password" placeholder="Marry Doe" required value={formData.password} onChange={(e) => handleChange(e, 'password')} />
          <InputField label="Company name" type="text" placeholder="Marry Doe" value={formData.company} onChange={(e) => handleChange(e, 'company')} />

          {/* Radio */}
          <div className="mt-1 mb-2">
            <label className="text-[12px] font-semibold block mb-1">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>

            <div className="flex gap-3">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  value="yes"
                  checked={isAgency === 'yes'}
                  onChange={(e) => setIsAgency(e.target.value)}
                  className="accent-popx-purple"
                />
                <span className="text-[13px]">Yes</span>
              </label>

              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  value="no"
                  checked={isAgency === 'no'}
                  onChange={(e) => setIsAgency(e.target.value)}
                  className="accent-popx-purple"
                />
                <span className="text-[13px]">No</span>
              </label>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-popx-purple text-white py-2 rounded font-semibold text-[13px]"
          >
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
}

export default Signup;