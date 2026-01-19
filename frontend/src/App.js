import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [staffNumber, setStaffNumber] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const wardenData = {
      firstName,
      lastName,
      staffNumber,
      location
    };

    try {
      const response = await fetch("https://super-space-sniffle-97g5g69gxwwqfpxvg-5000.app.github.dev/wardens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(wardenData)
      });

      if (response.ok) {
        setMessage("Warden saved successfully!");
      } else {
        setMessage("Error saving warden.");
      }
    } catch (error) {
      setMessage("Cannot reach backend server.");
    }

    setFirstName("");
    setLastName("");
    setStaffNumber("");
    setLocation("");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Fire Warden Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          style={{ padding: "8px", width: "250px", display: "block", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          style={{ padding: "8px", width: "250px", display: "block", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Staff number"
          value={staffNumber}
          onChange={(e) => setStaffNumber(e.target.value)}
          required
          style={{ padding: "8px", width: "250px", display: "block", marginBottom: "10px" }}
        />

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          style={{ padding: "8px", width: "260px", display: "block", marginBottom: "10px" }}
        >
          <option value="">Select location</option>
          <option value="Alwyn Hall">Alwyn Hall</option>
          <option value="Beech Glade">Beech Glade</option>
          <option value="Bowers Building">Bowers Building</option>
          <option value="Burma Road Student Village">Burma Road Student Village</option>
          <option value="Centre for Sport">Centre for Sport</option>
          <option value="Chapel">Chapel</option>
          <option value="The Cottage">The Cottage</option>
          <option value="Fred Wheeler Building">Fred Wheeler Building</option>
          <option value="Herbert Jarman Building">Herbert Jarman Building</option>
          <option value="Holm Lodge">Holm Lodge</option>
          <option value="Kenneth Kettle Building">Kenneth Kettle Building</option>
          <option value="King Alfred Centre">King Alfred Centre</option>
          <option value="Martial Rose Library">Martial Rose Library</option>
          <option value="Masters Lodge">Masters Lodge</option>
          <option value="Medecroft">Medecroft</option>
          <option value="Medecroft Annexe">Medecroft Annexe</option>
          <option value="Paul Chamberlain Building">Paul Chamberlain Building</option>
          <option value="Queen’s Road Student Village">Queen’s Road Student Village</option>
          <option value="St Alphege">St Alphege</option>
          <option value="St Edburga">St Edburga</option>
          <option value="St Elizabeth’s Hall">St Elizabeth’s Hall</option>
          <option value="St Grimbald’s Court">St Grimbald’s Court</option>
          <option value="St James’ Hall">St James’ Hall</option>
          <option value="St Swithun’s Lodge">St Swithun’s Lodge</option>
          <option value="The Stripe">The Stripe</option>
          <option value="Business School">Business School</option>
          <option value="Tom Atkinson Building">Tom Atkinson Building</option>
          <option value="West Downs Centre">West Downs Centre</option>
          <option value="West Downs Student Village">West Downs Student Village</option>
          <option value="Winton Building">Winton Building</option>
          <option value="Students’ Union">Students’ Union</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "8px 15px",
            cursor: "pointer"
          }}
        >
          Submit Warden
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "20px", color: "green", fontWeight: "bold" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default App;