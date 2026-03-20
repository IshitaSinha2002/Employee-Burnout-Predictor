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
<h3>Home Page</h3>
<p>Created a home page where users can fill their information.</p>
<img src="https://github.com/IshitaSinha2002/Employee-Burnout-Predictor/blob/main/Screenshot%20(9).png" style="width: 500px; height: 400px; object-fit: cover;">
<img src="https://github.com/IshitaSinha2002/Employee-Burnout-Predictor/blob/main/Screenshot%20(10).png" width: 300px; height: 100px>
<h3>Results Page</h3>
<p>Created a page where the result will be generated according to the information filled by the user.</p>
<img src="https://github.com/IshitaSinha2002/Employee-Burnout-Predictor/blob/main/Screenshot%20(12).png" width: 300px; height: 100px>
<img src="https://github.com/IshitaSinha2002/Employee-Burnout-Predictor/blob/main/Screenshot%20(11).png" width: 300px; height: 100px>
<img src="https://github.com/IshitaSinha2002/Employee-Burnout-Predictor/blob/main/Screenshot%20(13).png" width: 300px; height: 100px>
<h3>Model Training Implementation Details</h3>
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
    <li>Training Process: 
    <ul>
      <li>Split dataset into training and testing sets(80/20 split).</li>
      <li>Ensured randomization to avoid bias.</li>
      <li>Used training data to learn patterns between input features and burn rate.</li>
    </ul></li>
   <li>Model Training: 
    <ul>
      <li>Trained models using Scikit-learn.</li>
      <li>Initialized model.</li>
      <li>Fit model on training data.</li>
      <li>Generated predictions on test data.</li>
    </ul></li>
    <li>Model Evaluation Metrics:
    <ul>
      <li>RMSE (Root Mean Squared Error): Measures prediction error</li>
      <li>R2 Score: Measures how well the model explains variance</li>
    </ul>
    </li>
    <li>Model Comparison:
    <table>
      <thead>
        <tr>
          <th>Algorithm</th>
          <th>R2 Score</th>
          <th>RMSE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Linear Regression</td>
          <td>0.9202219777928837</td>
          <td>0.055352126446872936</td>
        </tr>
        <tr>
          <td>Random Forest Classifier</td>
          <td>0.9124443764042149</td>
          <td>0.057987541957028876</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>Linear Regression outperformed Random Forest as it has higher R2 and lower RMSE.</li>
    </ul>
</ol>
