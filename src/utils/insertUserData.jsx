import { supabase } from "../lib/helper/supabase";

export default async function insertUserData(data) {
  const { data: insertedData, error } = await supabase.from("users").upsert(
    [
      {
        id: data.id,
        name: data.user_metadata.name,
        email: data.user_metadata.email,
      },
    ],
    { onConflict: ["id"], ignoreDuplicates: true }
  );
}
