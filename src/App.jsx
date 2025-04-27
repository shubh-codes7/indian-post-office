import { useNavigate, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";

function App() {
  const [pincode, setPincode] = useState();
  const [postOffices, setPostOffices] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleLookup() {
    if (pincode === undefined || pincode.length !== 6  ) {
      setError("Pincode should be 6 digit long");
      return;
    }


    setLoading(true);

    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0].Status === "Error") {
          setError("Pincode is not valid");
          setLoading(false);
          return;
        }
        setPostOffices(data[0]);
        setError("");
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loading={loading}
              error={error}
              setPincode={setPincode}
              handleLookup={handleLookup}
            />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard loading={loading} postOffices={postOffices} />}
        />
      </Routes>
    </>
  );
}

export default App;
