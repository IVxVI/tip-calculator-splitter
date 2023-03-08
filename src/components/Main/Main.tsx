import React, { useState } from 'react';
import './Main.scss';

export const Main: React.FC = () => {
  const [billValue, setBillValue] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(0);

  const handleBillValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBillValue(+event.target.value);
  };

  const handleNumberOfPeople = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(+event.target.value);
  };

  const handleTipPercentage = (percent: number) => {
    setTipPercentage(percent);
  };

  const handleCustomPercentage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipPercentage(+event.target.value);
  };

  const handleResetButton = () => {
    setBillValue(0);
    setNumberOfPeople(1);
    setTipPercentage(0);
  };

  const tipAmount = (billValue * (tipPercentage / 100)) / numberOfPeople;
  const totalAmount = (billValue + billValue * (tipPercentage / 100)) / numberOfPeople;

  return (
    <form className="form">
      <div className="fields">
        <div className="field__bill">
          <label
            className="field__label field__bill-label"
            htmlFor="billImput"
          >
            bill
            <input
              type="number"
              id="billImput"
              className="field__bill-input input"
              value={billValue}
              onChange={handleBillValue}
            />
          </label>
        </div>
        <div className="field__tip-wrapper">
          <label className="field__label field__tip-label" htmlFor="tip">
            select tip %
            <div className="field__tip">
              {[5, 10, 15, 25, 50].map(percent => (
                <button
                  key={percent}
                  type="button"
                  className="field__tip-num"
                  onClick={() => {
                    handleTipPercentage(percent);
                  }}
                >
                  {`${percent}%`}
                </button>
              ))}
              <div className="field__tip-custom">
                <input
                  className="field__tip-num custom input"
                  type="text"
                  id="tip"
                  value={tipPercentage}
                  title="Custom tip"
                  maxLength={2}
                  onChange={handleCustomPercentage}
                />
              </div>
            </div>
          </label>
        </div>
        <div className="field__people">
          <label className="field__label" htmlFor="people">
            Number of People
            <input
              type="number"
              id="people"
              className="field__people-input input"
              value={numberOfPeople}
              onChange={handleNumberOfPeople}
              min="1"
            />
          </label>
        </div>
      </div>
      <div className="results">
        <div className="results__item">
          <div className="results__info">
            <p className="results__header">tip amount</p>
            <p className="results__subheader">/ person</p>
          </div>
          <h1 className="results__value">{`$${tipAmount.toFixed(2)}`}</h1>
        </div>
        <div className="results__item">
          <div className="results__info">
            <p className="results__header">total amount</p>
            <p className="results__subheader">/ person</p>
          </div>
          <h1 className="results__value">{`$${totalAmount.toFixed(2)}`}</h1>
        </div>
        <button type="button" className="results__reset" onClick={handleResetButton}>
          reset
        </button>
      </div>
    </form>
  );
};
