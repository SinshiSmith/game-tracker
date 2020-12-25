import createPersistedState from "use-persisted-state";

const useUserState = createPersistedState("user");

const useUser = () => {
  const [user, setUser] = useUserState({});

  return [user, setUser];
};

export default useUser;
