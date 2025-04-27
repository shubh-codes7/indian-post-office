import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "./Card.jsx";

export default function Dashboard({ postOffices }) {
  const officesArr = postOffices.PostOffice;
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [offices, setOffices] = useState(officesArr);

  function handleFilter(e) {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = officesArr.filter((office) =>
      office.Name.toLowerCase().includes(value)
    );
    setOffices(filtered);
  }

  return (
    <>
      <div>
        <div id="pincodeDisplay">
          <p><strong>Pincode:</strong> {officesArr[0]?.Pincode}</p>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
        <p>
          <strong>Message:</strong> {postOffices.Message}
        </p>
        <input
          type="text"
          placeholder="Filter"
          value={search}
          onChange={handleFilter}
        />
      </div>
      <div id="container">
        {offices.length > 0 ? (
          offices.map((post, idx) => <Card key={idx} post={post} />)
        ) : (
          <p>Couldn't find the postal data you're looking for…</p>
        )}
      </div>
    </>
  );
}
