import { supabase } from "../lib/helper/supabase";

export default async function insertUserHistory(userId, link) {
  // Mengambil data user dengan id tertentu
  const { data: userData, error } = await supabase
    .from("users")
    .select("history_videos")
    .eq("id", userId)
    .single();
  if (error) {
    console.error("Error fetching user data:", error);
    return;
  }

  // Mendapatkan array history_videos dari data user atau array kosong jika tidak ada
  const previousHistory = userData?.history_videos || [];

  // Memfilter elemen yang sama dengan link dari array history_videos
  const filteredHistory = previousHistory.filter((item) => item !== link);

  // Menyusun array history_videos dengan link yang baru ditambahkan di posisi paling depan
  const updatedHistory = [link, ...filteredHistory];

  // Melakukan pembaruan data ke dalam tabel users
  const { error: updateError } = await supabase
    .from("users")
    .update({ history_videos: updatedHistory })
    .eq("id", userId);

  if (updateError) {
    console.error("Error updating user data:", updateError);
    return;
  }
}
