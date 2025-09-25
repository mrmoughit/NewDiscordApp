import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: {
        id: null,
        name: null,
        img: null,
        token: null,
      },

      friends: [],

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
    clearFriends: () =>
        set({ friends: [] }),




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
      name: "user-storage",
    }
    )
    


    
);

export default useUserStore;
