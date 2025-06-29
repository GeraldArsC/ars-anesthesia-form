
import React, { useState } from "react";

function ArsAnesthesiaForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    weight: "",
    procedure: "",
    anestheticPlan: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("arsAnesthesiaRecord", JSON.stringify(formData));
    alert("Record saved locally.");
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h1>Ars Anesthesia Record Form</h1>
      <input placeholder="Patient Name" name="patientName" value={formData.patientName} onChange={handleChange} /><br/>
      <input placeholder="Age" name="age" value={formData.age} onChange={handleChange} /><br/>
      <input placeholder="Weight (kg)" name="weight" value={formData.weight} onChange={handleChange} /><br/>
      <input placeholder="Procedure" name="procedure" value={formData.procedure} onChange={handleChange} /><br/>
      <input placeholder="Anesthetic Plan" name="anestheticPlan" value={formData.anestheticPlan} onChange={handleChange} /><br/>
      <input placeholder="Notes" name="notes" value={formData.notes} onChange={handleChange} /><br/>
      <button onClick={handleSave}>Save Locally</button>
    </div>
  );
}

export default ArsAnesthesiaForm;
