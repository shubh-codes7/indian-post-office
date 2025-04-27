
export default function Home({loading, error, setPincode, handleLookup}) {
  
  function handleEnter(e){
    if(e.key === "Enter"){
      handleLookup()
      setPincode()
    }
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <label htmlFor="input">Enter Pincode</label>
      <input
        type="number"
        placeholder="Pincode"
        id="input"
        onChange={(e) => setPincode(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button onClick={handleLookup}>Lookup</button>
      {error && <p className="err">{error}</p>}
    </>
  );
}
