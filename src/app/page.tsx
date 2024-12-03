'use client';

import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);
  const [measurements, setMeasurements] = useState({
    height: '',
    weight: '',
    chest: '',
    waist: '',
    hip: '',
    inseam: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold">Smart Size Calculator</h1>
          <button className="btn btn-ghost">Sign In</button>
        </header>

        <div className="mb-8">
          <ul className="steps w-full">
            <li className={`step ${step >= 1 ? 'step-primary' : ''}`}>Measurements</li>
            <li className={`step ${step >= 2 ? 'step-primary' : ''}`}>Brand Selection</li>
            <li className={`step ${step >= 3 ? 'step-primary' : ''}`}>Results</li>
          </ul>
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Enter Your Measurements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">Height</label>
                <div className="input-group">
                  <input
                    type="number"
                    name="height"
                    value={measurements.height}
                    onChange={handleInputChange}
                    placeholder="Enter height"
                    className="input input-bordered w-full"
                  />
                  <span className="input-group-text">cm</span>
                </div>
              </div>

              <div>
                <label className="label">Weight</label>
                <div className="input-group">
                  <input
                    type="number"
                    name="weight"
                    value={measurements.weight}
                    onChange={handleInputChange}
                    placeholder="Enter weight"
                    className="input input-bordered w-full"
                  />
                  <span className="input-group-text">kg</span>
                </div>
              </div>

              <div>
                <label className="label">Chest Circumference</label>
                <div className="input-group">
                  <input
                    type="number"
                    name="chest"
                    value={measurements.chest}
                    onChange={handleInputChange}
                    placeholder="Enter chest measurement"
                    className="input input-bordered w-full"
                  />
                  <span className="input-group-text">cm</span>
                </div>
              </div>

              <div>
                <label className="label">Waist Circumference</label>
                <div className="input-group">
                  <input
                    type="number"
                    name="waist"
                    value={measurements.waist}
                    onChange={handleInputChange}
                    placeholder="Enter waist measurement"
                    className="input input-bordered w-full"
                  />
                  <span className="input-group-text">cm</span>
                </div>
              </div>

              <div>
                <label className="label">Hip Circumference</label>
                <div className="input-group">
                  <input
                    type="number"
                    name="hip"
                    value={measurements.hip}
                    onChange={handleInputChange}
                    placeholder="Enter hip measurement"
                    className="input input-bordered w-full"
                  />
                  <span className="input-group-text">cm</span>
                </div>
              </div>

              <div>
                <label className="label">Inseam Length</label>
                <div className="input-group">
                  <input
                    type="number"
                    name="inseam"
                    value={measurements.inseam}
                    onChange={handleInputChange}
                    placeholder="Enter inseam measurement"
                    className="input input-bordered w-full"
                  />
                  <span className="input-group-text">cm</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-base-200 rounded-lg">
              <h3 className="font-semibold mb-2">How to Measure</h3>
              <ul className="list-decimal list-inside space-y-1">
                <li>Chest: Measure around the fullest part</li>
                <li>Waist: Measure at natural waistline</li>
                <li>Hip: Measure at the fullest part</li>
                <li>Inseam: Measure from crotch to ankle</li>
              </ul>
            </div>

            <div className="mt-8 flex justify-between">
              <button className="btn btn-ghost" disabled>Back</button>
              <button className="btn btn-primary" onClick={handleNext}>Next Step</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
