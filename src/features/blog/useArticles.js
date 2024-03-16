import { getArticles } from "../../services/apiArticles";
import { useQuery } from "@tanstack/react-query";

export function useArticles() {
  const {
    isLoading,
    data: articles,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });
  return { isLoading, error, articles };
}
