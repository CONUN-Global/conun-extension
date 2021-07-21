import create from "zustand";

type AppState = {
  isAuthenticated: boolean;
  setIsAuthenticated: (state: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (state: boolean) => void;
  isTransactionsOpen: boolean;
  setTransactions: (state: boolean) => void;
  isSettingsOpen: boolean;
  setSettings: (state: boolean) => void;
};

const useStore = create<AppState>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (state) => set(() => ({ isAuthenticated: state })),
  isLoggedIn: false,
  setIsLoggedIn: (state) => set(() => ({ isLoggedIn: state })),
  isTransactionsOpen: false,
  setTransactions: (state) => set(() => ({ isTransactionsOpen: state })),
  isSettingsOpen: false,
  setSettings: (state) => set(() => ({ isSettingsOpen: state })),
}));

export default useStore;
