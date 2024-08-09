import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_PEvAu1JONAba2Oxm89JlB0IyN1Ho3OXkJWHyQRAG"
);

// convertCurrency("INR", "USD", 2);

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const multiplier = res.data[toCurrency];
  // console.log(multiplier);
  return multiplier * units;
}
