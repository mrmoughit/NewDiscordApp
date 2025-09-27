import { create } from "zustand";
import { persist } from "zustand/middleware";

/** ✅ Define User type */
export interface User {
  id: string | null;
  name: string | null;
  img: string | null;
  token: string | null;
}

/** ✅ Friend type (change if your backend returns objects instead of strings) */
export type Friend = string;

/** ✅ Define Store State & Actions */
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
        const ws = new WebSocket(`ws://13.222.154.232:4000/ws`);

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
      name: "user-storage", // persisted key in localStorage
    }
  )
);

export default useUserStore;
