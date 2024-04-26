// helper function to format currencies
// export const formatCurrency = (value, currency) => {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency,
//   }).format(value);
// };

export const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(value);
};