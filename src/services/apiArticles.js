import supabase from "./supabase";

export async function getArticles() {
  const { data, error } = await supabase.from("articles").select("*");
  if (error) {
    console.log(error);
    throw new Error("Articles could not be loaded");
  }
  return data;
}
