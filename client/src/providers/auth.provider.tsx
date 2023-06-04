import { useEffect, PropsWithChildren } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/redux";
import { authApi } from "../services/AuthService";
import { setUser } from "../store/reducers/authSlice";
import { selectUser } from "../store/reducers/authSlice";

function AuthProvider(props: PropsWithChildren): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { data: apiUser, isLoading } = authApi.useAuthQuery();

  useEffect(() => {
    if (apiUser) {
      dispatch(setUser({user: apiUser}));
    }
  }, [apiUser]);

  if (isLoading) return <div>Loading...</div>;

  return <>{props.children}</>;
}

export default AuthProvider;
