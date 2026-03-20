<h1>Employee Burnout Predictor</h1>
<h3>Project Overview</h3>
<p>The Employee Burnout Predictor is a full-stack machine learning application designed to assess an employee’s burnout risk based on workload patterns and behavioral indicators. he system collects user inputs such as Gender, Company Type, WFH availability, Designation level, etc and processes them through a trained ML model providing personalized recommendation.</p>
<h4>Dataset: https://www.kaggle.com/datasets/blurredmachine/are-your-employees-burning-out</h4>
<h3>Tech Stack</h3>
<ul>
  <li>Front-end: ReactJS, CSS</li>
  <li>Back-end: Python, Flask</li>
  <li>Machine Learning: Random Forest Classifier, Label Encoding</li>
</ul>
<h3>Model Training Implementation Details:</h3>
<ol>
  <li>Data Processing: 
    <ul>
      <li>Removed missing/null values.</li>
      <li>Converted burnout problem into classification.</li>
      <li>Encoded categorical features using LabelEncoder.</li>
    </ul></li>
  <li>Feature Selection:
    <ul>
      </li>Identified key predictors from the dataset: Mental Fatigue Score and Resource Allocation.</li>
      <li>Dropped irrelevant or redundant columns to reduce noise and improve model performance.</li>
    </ul>
    <li>Model Development:
    <p>Algorithms Used:</p>
    <ul>
      <li>Linear Regression</li>
      <li>Random Forest Regressor</li>
    </ul>
    <p>Model Evaluation Metrics:</p>
    <li>RMSE (Root Mean Squared Error): Measures prediction error</li>
    <li>R2 Score: Measures how well the model explains variance</li>
    </li>
</ol>
