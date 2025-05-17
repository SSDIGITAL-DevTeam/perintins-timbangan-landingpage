export const generateWaLink = (location: string, waNumber: number) => {
  const message =`Halo Perintis Timbangan ${location}, saya ingin mengetahui lebih lanjut mengenai promo terbaru yang tersedia.`
  const waLink = `https://api.whatsapp.com/send/?phone=${waNumber}&text=${encodeURIComponent(
    message
  )}&type=phone_number&app_absent=0`;

  return waLink;
};
