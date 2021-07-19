import create from "zustand";

type AppState = {
  isAuthenticated: boolean;
  setIsAuthenticated: (state: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (state: boolean) => void;
};

const useStore = create<AppState>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (state) => set(() => ({ isAuthenticated: state })),
  isLoggedIn: false,
  setIsLoggedIn: (state) => set(() => ({ isLoggedIn: state })),
}));

export default useStore;
