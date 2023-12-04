import { supabase } from "../lib/helper/supabase";
const fetchUserData = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};

export default fetchUserData;
