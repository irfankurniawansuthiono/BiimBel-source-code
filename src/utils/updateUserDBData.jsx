import { supabase } from "../lib/helper/supabase";

export default async function updateUserDBData(data) {
  supabase
    .from("users")
    .update({ end_date_subscription: data.endDate })
    .eq("id", data.id)
    .then((response) => {
      if (response.error) {
        console.error("Gagal melakukan pembaruan:", response.error.message);
      } else {
        console.log("Pembaruan berhasil.");
      }
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error.message);
    });
}
