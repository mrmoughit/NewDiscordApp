import useUserStore from '../components/store.tsx';


function Redi(){

    const setUserData = useUserStore((state) => state.setUserData);


    const t = new URLSearchParams(window.location.search).get('code')

    if (!t)
      window.location.href = `http://13.222.154.232/login`
    else{
        setUserData({token: t});
        window.location.href = `http://13.222.154.232`

    }

        
    return (
        <div className="w-full h-full flex justify-center items-center">
            <p className="text-xl">redirecting soon </p>
        </div>
    )
}
export default Redi;