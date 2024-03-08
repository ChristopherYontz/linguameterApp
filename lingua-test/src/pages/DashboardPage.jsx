import React from "react";
import { UserAuth } from "../context/AuthContext";
import LogCard from "../components/LogCard";
import LogSubmissionForm from "../components/LogSubmissionForm";
// import { supabase } from "../supabaseClient";

export default function DashboardPage() {
  const { user, signout } = UserAuth();
//   const [userId, setUserId] = useState(null);

//   console.log(user);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const { data, error } = await supabase
//           .from("auth.users")
//           .select("id")
//           .eq("email", user.email)
//           .single();

//         if (error) {
//           console.error("Error getting ID:", error);
//           return;
//         }

//         if (!data) {
//           console.error("ID does not exist.");
//           return;
//         }

//         setUserId(data.id);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, [user.email]);

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1>{`Welcome, ${user.name}`}</h1>
      {/* <LogCard /> */}
      <div className="card w-96 shadow-xl bg-green-500">
        <div className="card-body">
          <div className="flex flex-row justify-around">
            <h2 className="card-title">@Niyon</h2>
            <span>2024-04-03</span>
          </div>
          <div className="card w-full bg-white">
            <div className="card-body">
              <h2 className="card-title">Dreaming Spanish</h2>
              <span>2024-04-03</span>
            </div>
          </div>
        </div>
      </div>
      <button className="btn" onClick={signout}>
        Sign Out
      </button>
      <LogCard />
      <LogSubmissionForm />
    </div>
  );
}
