import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set, get) => ({
      user: {
        id: null,
        name: null,
        img: null,
        token: null,
      },

      friends: [],
      socket: null,

      connect: () => {

        const ws = new WebSocket(
          `ws://13.222.154.232:4000/ws`
        );

        ws.onopen = () => {
          console.log("Connected");
          ws.send(get().user.name || "");
        };

        ws.onclose = () => {
          console.log("Disconnected");
        };

        set({ socket: ws });
      },

      addFriends: (friendsArray) =>
        set((state) => ({
          friends: [...state.friends, ...friendsArray],
        })),
      
      addFriend: (friend) =>
        set((state) => ({
          friends: [...state.friends, friend],
        })),

      removeFriend: (name) =>
        set((state) => ({
          friends: state.friends.filter((f) => f.name !== name),
        })),
      
      clearFriends: () => set({ friends: [] }),

      setUserData: (data) =>
        set((state) => ({
          user: { ...state.user, ...data },
        })),

      clearUser: () =>
        set({
          user: { id: null, name: null, email: null, img: null, token: null },
        }),
    }),
    {
      name: "user-storage", // This will persist the store in localStorage
    }
  )
);

export default useUserStore;
