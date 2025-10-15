import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string | null;
  name: string | null;
  img: string | null;
  token: string | null;
}

export type Friend = string;

export interface UserState {
  user: User;
  friends: Friend[];
  socket: WebSocket | null;

  connect: () => void;

  addFriends: (friendsArray: Friend[]) => void;
  addFriend: (friend: Friend) => void;
  removeFriend: (name: string) => void;
  clearFriends: () => void;

  setUserData: (data: Partial<User>) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
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
        const ws = new WebSocket(`wss://gzzkn4g642hvdwv4lwydxwzzkufeux34ntapibe4tjwiq27vap65hvid.onion:4000/ws`);

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
          friends: state.friends.filter((f) => f !== name),
        })),

      clearFriends: () => set({ friends: [] }),

      setUserData: (data) =>
        set((state) => ({
          user: { ...state.user, ...data },
        })),

      clearUser: () =>
        set({
          user: { id: null, name: null, img: null, token: null },
        }),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
