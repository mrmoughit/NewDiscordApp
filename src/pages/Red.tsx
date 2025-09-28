import useUserStore from '../components/store.tsx';


function Redi(){

    const setUserData = useUserStore((state) => state.setUserData);


    const t = new URLSearchParams(window.location.search).get('code')

    if (!t)
      window.location.href = `${import.meta.env.VITE_API_URL}/login`
    else{
        setUserData({token: t});
        window.location.href = `${import.meta.env.VITE_API_URL}`

    }

        
    return (
        <div className="w-full h-full flex justify-center items-center">
            <p className="text-xl">redirecting soon </p>
        </div>
    )
}
export default Redi;