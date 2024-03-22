import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getArticles() {
  const { data, error } = await supabase.from("articles").select("*");
  if (error) {
    console.log(error);
    throw new Error("Artykuł nie mógł zostać wczytany");
  }
  return data;
}

export async function createArticleAPI(newArticle, id) {
  const imageName = `${Math.random()}-${newArticle.img.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/article-images/${imageName}`;
  const { data, error } = await supabase
    .from("articles")
    .insert([{ ...newArticle, img: imagePath }])
    .select();
  if (error) {
    console.log(error);
    throw new Error("Artykuł nie mógł zostać utworzony");
  }
  // 2. Upload Image

  const { error: storageError } = await supabase.storage
    .from("article-images")
    .upload(imageName, newArticle.img);

  // 3. Delete if error while uploading img
  if (storageError) {
    await supabase.from("articles").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Zdjęcie nie mogło zostać dodane");
  }

  return data;
}

export async function deleteArticle(id) {
  const { data, error } = await supabase.from("articles").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Artykuł nie mógł zostać usunięty");
  }
  return data;
}
