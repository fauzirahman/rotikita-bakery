/** Formats an amount in Rupiah, e.g. 12000 -> "Rp12.000". */
export function formatRupiah(amount: number): string {
  return `Rp${new Intl.NumberFormat("id-ID").format(amount)}`;
}

/** Formats a rating with an Indonesian decimal comma, e.g. 4.9 -> "4,9". */
export function formatRating(rating: number): string {
  return rating.toFixed(1).replace(".", ",");
}
