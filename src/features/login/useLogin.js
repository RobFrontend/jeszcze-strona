import { useMutation } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending: isLogin } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      toast.success("Zalogowano!");
      navigate("/panel-edycji-blog");
    },
    onError: (err) => {
      toast.error("Sprawdź mail i hasło!");
    },
  });

  return { isLogin, login };
}
