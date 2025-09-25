import useUserStore from '../components/store.tsx';


function Redi(){

    const setUserData = useUserStore((state) => state.setUserData);


    const t = new URLSearchParams(window.location.search).get('code')

    if (!t)
      window.location.href = `http://localhost:5173/login`
    else{
        setUserData({token: t});
        window.location.href = `http://localhost:5173`

    }

        
    return (
        <div className="w-full h-full flex justify-center items-center">
            <p className="text-xl">redirecting soon </p>
        </div>
    )
}
export default Redi;