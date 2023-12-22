import { supabase } from "../lib/helper/supabase";

export default async function insertUserData(data) {
  try {
    const { data: user, error } = await supabase.from("users").upsert(
      [
        {
          id: data.id,
          name: data.user_metadata.name,
          email: data.user_metadata.email,
          phone: data.user_metadata.phone,
        },
      ],
      { onConflict: ["id"] }
    );
  } catch (error) {
    console.error("Error inserting user data:", error);
    return null;
  }
}
