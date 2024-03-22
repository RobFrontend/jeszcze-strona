import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createArticleAPI } from "../../services/apiArticles";
import toast from "react-hot-toast";

export function useCreateArticle() {
  const queryClient = useQueryClient();
  const { mutate: createArticle, isPending: isCreating } = useMutation({
    mutationFn: createArticleAPI,
    onSuccess: () => {
      toast.success("Artykuł utworzony!", {
        duration: 2000,
        icon: "✅",
      });
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
    onError: (err) => {
      toast.error(
        "Artykuł nie mógł zostać utworzony, sprawdź czy wszystkie pola są wypełnione oraz czy dodano plik",
        { duration: 5000, icon: "❗" }
      );
    },
  });
  return { isCreating, createArticle };
}
