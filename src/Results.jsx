import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Results.css';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!formData) return;

    const fetchPrediction = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "Gender": Number(formData.gender),
            "Company Type": Number(formData.companyType),
            "WFH Setup Available": Number(formData.wfh),
            "Designation": Number(formData.designation),
            "Resource Allocation": Number(formData.resourceAllocation),
            "Mental Fatigue Score": Number(formData.fatigue)
          })
        });

        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrediction();
  }, [formData]);

  if (!formData) {
    return (
      <div className="page-wrapper center-content">
        <div className="card-container text-center">
          <p>No data provided. Please go back and fill the form.</p>
          <button onClick={() => navigate('/')} className="secondary-btn mt-4">
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="page-wrapper center-content">
        <div className="card-container text-center">
          <p>Analyzing your data...</p>
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

        <div className={`risk-indicator ${
          result.risk === 'High Risk'
            ? 'badge-high'
            : result.risk === 'Medium Risk'
            ? 'badge-medium'
            : 'badge-low'
        }`}>
          <span className="risk-label">Result:</span>
          <span className="risk-value">{result.risk}</span>
        </div>

        <div className="suggestion-box">
          <h3>Suggestion</h3>
          <p>{result.suggestion}</p>
        </div>

        <button onClick={() => navigate('/')} className="primary-btn w-full mt-6">
          Evaluate Another
        </button>
      </div>
    </div>
  );
}