import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [staffNumber, setStaffNumber] = useState("");
  const [location, setLocation] = useState("");
  const [wardens, setWardens] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const timestamp = new Date().toLocaleString();

    const newWarden = {
      firstName,
      lastName,
      staffNumber,
      location,
      timestamp
    };

    if (editingIndex !== null) {
      // Update existing warden
      const updated = [...wardens];
      updated[editingIndex] = newWarden;
      setWardens(updated);
      setEditingIndex(null);
    } else {
      // Add new warden
      setWardens([...wardens, newWarden]);
    }

    // Clear form
    setFirstName("");
    setLastName("");
    setStaffNumber("");
    setLocation("");
  }

  function handleDelete(index) {
    const updated = wardens.filter((_, i) => i !== index);
    setWardens(updated);
  }

  function handleEdit(index) {
    const w = wardens[index];
    setFirstName(w.firstName);
    setLastName(w.lastName);
    setStaffNumber(w.staffNumber);
    setLocation(w.location);
    setEditingIndex(index);
  }

  // Dashboard calculations
  const totalWardens = wardens.length;
  const uniqueLocations = new Set(wardens.map(w => w.location)).size;
  const lastWarden = wardens[wardens.length - 1];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Fire Warden Register</h1>

      {/* Dashboard */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          padding: "15px",
          background: "#f0f0f0",
          borderRadius: "8px"
        }}
      >
        <div>
          <strong>Total Wardens:</strong> {totalWardens}
        </div>
        <div>
          <strong>Locations Covered:</strong> {uniqueLocations}
        </div>
        <div>
          <strong>Last Added:</strong>{" "}
          {lastWarden
            ? `${lastWarden.firstName} ${lastWarden.lastName} (${lastWarden.location})`
            : "None"}
        </div>
      </div>

      {/* Form */}
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
          {editingIndex !== null ? "Update Warden" : "Submit Warden"}
        </button>
      </form>

      {/* Table */}
      <h2 style={{ marginTop: "30px" }}>Warden List</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px"
        }}
      >
        <thead>
          <tr style={{ background: "#ddd" }}>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Staff #</th>
            <th>Location</th>
            <th>Timestamp</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {wardens.map((w, index) => (
            <tr key={index}>
              <td>{w.firstName}</td>
              <td>{w.lastName}</td>
              <td>{w.staffNumber}</td>
              <td>{w.location}</td>
              <td>{w.timestamp}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;