import { supabase } from "../lib/helper/supabase";
export default async function updateUserDBSubscriptionData(id, boolean) {
  supabase
    .from("users")
    .update({ subscription: boolean })
    .eq("id", id)
    .then((response) => {
      if (response.error) {
        console.error("Gagal melakukan pembaruan:", response.error.message);
        return;
      } else {
        console.log("Pembaruan berhasil.");
        return true;
      }
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error.message);
    });
}
