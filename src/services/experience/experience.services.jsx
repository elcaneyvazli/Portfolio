import { supabase } from "@/lib/supabase";

export default async function getExperience(req, res) {
  const { data, error } = await supabase.from("Work").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ data });
}
