import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import './Results.css';
export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;
  // Mock ML prediction logic
  const prediction = useMemo(() => {
    if (!formData) return null;
    
    const hours = parseFloat(formData.workHours);
    const meetings = parseInt(formData.meetings, 10);
    const pto = parseInt(formData.pto, 10);
    
    // Simple heuristic for mock ML
    let riskScore = 0;
    
    if (hours > 10) riskScore += 3;
    else if (hours > 8) riskScore += 1;
    
    if (meetings > 20) riskScore += 3;
    else if (meetings > 10) riskScore += 1;
    
    if (pto < 5) riskScore += 2;
    else if (pto > 15) riskScore -= 2;
    if (formData.role === 'Executive' || formData.role === 'Manager') {
      riskScore += 1;
    }
    if (riskScore >= 5) {
      return { 
        level: 'High Risk', 
        severity: 'high',
        suggestion: 'Your current workload strongly indicates a high risk of burnout. It is critical to speak with your manager about redistributing tasks, prioritize your mental health, and schedule immediate time off.'
      };
    } else if (riskScore >= 2) {
      return { 
        level: 'Medium Risk', 
        severity: 'medium',
        suggestion: 'You are showing moderate signs of potential burnout. Consider setting firmer boundaries around your work hours, reducing non-essential meetings, and planning a short break soon.'
      };
    } else {
      return { 
        level: 'Low Risk', 
        severity: 'low',
        suggestion: 'Your current work rhythm seems balanced. Continue applying your healthy work habits, stay mindful of your workload, and ensure you keep taking personal time as needed.'
      };
    }
  }, [formData]);
  if (!formData) {
    return (
      <div className="page-wrapper center-content">
        <div className="card-container text-center">
          <p>No data provided. Please go back and fill the form.</p>
          <button onClick={() => navigate('/')} className="secondary-btn mt-4">Go to Home</button>
        </div>
      </div>
    );
  }
  return (
    <div className="page-wrapper center-content">
      <div className="card-container result-card">
        <div className="result-header">
          <h2>Evaluation Complete</h2>
        </div>
        
        <div className={`risk-indicator badge-${prediction.severity}`}>
          <span className="risk-label">Result:</span>
          <span className="risk-value">{prediction.level}</span>
        </div>
        <div className="suggestion-box">
          <h3>Suggestion</h3>
          <p>{prediction.suggestion}</p>
        </div>
        <button onClick={() => navigate('/')} className="primary-btn w-full mt-6">
          Evaluate Another
        </button>
      </div>
    </div>
  );
}
