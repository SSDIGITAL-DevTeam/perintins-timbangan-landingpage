export const generateWaLink = (location: string, waNumber: number) => {
  const message =
    `Halo Perintis Timbangan ${location}, saya ingin mengetahui lebih banyak mengenai diskon toko 2025 ini`;
  const waLink = `https://api.whatsapp.com/send/?phone=${waNumber}&text=${encodeURIComponent(
    message
  )}&type=phone_number&app_absent=0`;

  return waLink;
};
