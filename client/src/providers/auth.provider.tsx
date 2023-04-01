import { useEffect, PropsWithChildren } from "react";
import { auth } from "../store/reducers/ActionCreators";
import { useAppDispatch, useAppSelector } from "../store/hooks/redux";

function AuthProvider(props: PropsWithChildren): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(auth());
  }, []);

  if (user.isLoading) return <div>Loading...</div>;

  return <>{props.children}</>;
}

export default AuthProvider;
