// import { supabase } from '../supabaseClient'
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'
// import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function LoginPage() {
  const {signInWithGoogle} = UserAuth()

  return (
    <>
      <div className='h-screen flex items-center justify-center flex-col'>
      <button className="btn bg-green-500" onClick={signInWithGoogle}>Login with Google</button>
    </div>
    </>
  )
}

// export default function AuthPage () {

//     const navigate = useNavigate()

//     useEffect(() => {
//       const {
//         data: { subscription },
//       } = supabase.auth.onAuthStateChange((event) => {
//         if (event === "SIGNED_IN") {
//           navigate("/authenticated");
//         }
//       });
  
//       return () => subscription.unsubscribe();
//     }, [navigate]);

//     return (
//         <div className="card px-16 w-96 bg-base-100 shadow-xl">
//             <Auth
//             supabaseClient={supabase}
//             appearance={{ theme: ThemeSupa }}
//             providers={['google', 'facebook', 'twitter', 'discord']}
//             onlyThirdPartyProviders
//         />
//         </div>
//     )
// }