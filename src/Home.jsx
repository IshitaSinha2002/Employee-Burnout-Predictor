import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
export default function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    workHours: '',
    meetings: '',
    role: '',
    pto: ''
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
            Assess your work rhythm to understand potential burnout risks. 
            Provide your details below to get a personalized evaluation and actionable suggestions.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="burnout-form">
          <div className="form-group">
            <label htmlFor="workHours">Work hours per day</label>
            <input 
              type="number" 
              id="workHours" 
              name="workHours" 
              min="0" 
              max="24"
              step="0.5"
              required 
              value={formData.workHours} 
              onChange={handleChange} 
              placeholder="e.g. 8.5"
            />
          </div>
          <div className="form-group">
            <label htmlFor="meetings">Meetings per week</label>
            <input 
              type="number" 
              id="meetings" 
              name="meetings" 
              min="0"
              required 
              value={formData.meetings} 
              onChange={handleChange} 
              placeholder="e.g. 15"
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select 
              id="role" 
              name="role" 
              required 
              value={formData.role} 
              onChange={handleChange}
            >
              <option value="" disabled>Select your role</option>
              <option value="Engineer">Engineer</option>
              <option value="Manager">Manager</option>
              <option value="Designer">Designer</option>
              <option value="Sales">Sales</option>
              <option value="Executive">Executive</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pto">PTO taken (days)</label>
            <input 
              type="number" 
              id="pto" 
              name="pto" 
              min="0"
              required 
              value={formData.pto} 
              onChange={handleChange} 
              placeholder="e.g. 10"
            />
          </div>
          <button type="submit" className="primary-btn mt-4">Generate Output</button>
        </form>
      </div>
    </div>
  );
}