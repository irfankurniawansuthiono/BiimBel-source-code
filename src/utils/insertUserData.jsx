import { supabase } from "../lib/helper/supabase";

export default async function insertUserData(data) {
  try {
    const { data: user, error } = await supabase.from("users").upsert(
      [
        {
          id: data.id,
          name: data.fullname,
          email: data.email,
          phone: data.phone,
        },
      ],
      { onConflict: ["id"] }
    );
  } catch (error) {
    console.error("Error inserting user data:", error);
    return null;
  }
}
