const retrieveCurrencyData = async () => {
  const response = await fetch(
    "https://api.currencyfreaks.com/v2.0/supported-currencies"
  );
  const data = await response.json();
  console.log(data);
};

export default retrieveCurrencyData;
