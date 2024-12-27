import {create} from 'zustand';

const useStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    services: [],
    setServices: (services) => set({ services }),
    isNavbarOpen: false,
    toggleNavbar: () => set((state) => ({ isNavbarOpen: !state.isNavbarOpen })),
}));

export default useStore;