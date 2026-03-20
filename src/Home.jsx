import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    gender: '',
    companyType: '',
    wfh: '',
    designation: '',
    resourceAllocation: '',
    fatigue: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/result', { state: { formData } });
  };

  return (
    <div className="page-wrapper center-content">
      <div className="card-container">
        <div className="card-header">
          <h1>Employee Burnout Risk</h1>
          <p>
            Assess your work environment and workload to understand potential burnout risks.
            Provide your details below to get a personalized evaluation and actionable suggestions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="burnout-form">

          {/* Gender */}
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="0">Female</option>
              <option value="1">Male</option>
            </select>
          </div>

          {/* Company Type */}
          <div className="form-group">
            <label>Company Type</label>
            <select name="companyType" value={formData.companyType} onChange={handleChange} required>
              <option value="">Select Company Type</option>
              <option value="0">Service</option>
              <option value="1">Product</option>
            </select>
          </div>

          {/* WFH Setup */}
          <div className="form-group">
            <label>Work From Home Available</label>
            <select name="wfh" value={formData.wfh} onChange={handleChange} required>
              <option value="">Select Option</option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          {/* Designation */}
          <div className="form-group">
            <label>Designation Level (0–5)</label>
            <input
              type="number"
              name="designation"
              min="0"
              max="5"
              required
              value={formData.designation}
              onChange={handleChange}
              placeholder="e.g. 2"
            />
          </div>

          {/* Resource Allocation */}
          <div className="form-group">
            <label>Workload / Resource Allocation (1–10)</label>
            <input
              type="number"
              name="resourceAllocation"
              min="1"
              max="10"
              required
              value={formData.resourceAllocation}
              onChange={handleChange}
              placeholder="e.g. 7"
            />
          </div>

          {/* Mental Fatigue */}
          <div className="form-group">
            <label>Mental Fatigue Score (1–10)</label>
            <input
              type="number"
              name="fatigue"
              min="1"
              max="10"
              required
              value={formData.fatigue}
              onChange={handleChange}
              placeholder="e.g. 6"
            />
          </div>

          <button type="submit" className="primary-btn mt-4">
            Generate Output
          </button>
        </form>
      </div>
    </div>
  );
}