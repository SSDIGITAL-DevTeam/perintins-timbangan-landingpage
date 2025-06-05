export const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

export const splitPriceDiscount =(value: number): { price: number; discount: number } => {
  const str = value.toString().replace(/\D/g, ""); // hilangkan titik/koma kalau ada
  const middle = Math.ceil(str.length / 2);

  const price = Number(str.slice(0, middle) + "000");
  const discount = Number(str.slice(middle) + "000");

  return { price, discount };
}
