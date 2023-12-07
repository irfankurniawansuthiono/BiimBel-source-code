import { supabase } from "../lib/helper/supabase";
const fetchDetailsVideos = async (link) => {
  try {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .eq("link_video", link)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching videos:", error.message);
    throw error;
  }
};

export default fetchDetailsVideos;
