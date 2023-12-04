import { supabase } from "../lib/helper/supabase";

const fetchVideos = async () => {
  try {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching videos:", error.message);
    throw error;
  }
};

export default fetchVideos;
