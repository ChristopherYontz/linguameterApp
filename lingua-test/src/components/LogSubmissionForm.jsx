import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function LogSubmissionForm() {
//   const { user, signout } = UserAuth();

  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [lang, setLang] = useState("");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = { activity, duration, type, lang, tag, date };

    try {
      const { data, error } = await supabase.from("logs").insert([formData]);

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Data inserted successfully:", data);

        // Clear form after submission
        setActivity("");
        setDuration("");
        setType("");
        setLang("");
        setTag("");
        setDate("");
      }
    } catch (error) {
      console.error("Error inserting data:", error.message);
    }

    console.log(formData);
  };

  return (
    <div>
      <form>
        <label className="input input-bordered flex items-center gap-2">
          Activity
          <input
            type="text"
            className="grow"
            placeholder="YouTube"
            onChange={(e) => {
              setActivity(e.target.value);
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Duration
          <input
            type="number"
            className="grow"
            placeholder="15"
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Type
          <input
            type="text"
            className="grow"
            placeholder="Listening"
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Language
          <input
            type="text"
            className="grow"
            placeholder="Spanish"
            onChange={(e) => {
              setLang(e.target.value);
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Tag
          <input
            type="text"
            className="grow"
            placeholder="YouTube"
            onChange={(e) => {
              setTag(e.target.value);
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Date
          <input
            type="date"
            className="grow"
            placeholder=""
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
        <button className="btn" type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}
