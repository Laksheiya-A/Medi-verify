# MediVerify : Online Testing and Monitoring of Quality of Medicines and Consumables

PROJECT OVERVIEW :
This project aims to detect counterfeit, substandard, and poor-quality medicines using computer vision (OpenCV.js), machine learning (TensorFlow.js, optional), and pharmaceutical databases (RxNorm, OpenFDA, WHO Medicine Database). It provides an online platform for users (healthcare professionals, pharmacists, and consumers) to verify the authenticity and quality of medicines before use.

OBJECTIVES :
- Detect counterfeit medicines using image processing and AI.
- Check medicine authenticity by cross-referencing with official databases.
- Analyze drug quality parameters like ingredients, packaging, and expiry dates.
- Provide real-time monitoring for pharmaceutical products.
- Ensure public safety by reducing the distribution of fake or harmful medicines.

KEY FEATURES :
1. Counterfeit Medicine Detection (OpenCV.js)
- Uses image processing techniques to detect fake medicines based on packaging, pill color, shape, and texture.
- Compares images with a database of genuine medicines to identify anomalies.
  
2. Side Effects and Composition Analysis (TensorFlow.js, Optional)
- Predicts potential adverse reactions based on a medicine’s ingredients.
- Uses AI to analyze medicine composition and detect inconsistencies.

3. Database Cross-Verification (RxNorm, OpenFDA, WHO Medicine Database)
- Retrieves medicine details from official pharmaceutical databases.
- Confirms whether a drug is approved, recalled, or counterfeit.

4. Web-Based Platform
- Users can upload images of medicines for authenticity checks.
- Provides detailed reports on drug quality, risks, and database verification.

5. Cloud Deployment & Accessibility
- Hosted on AWS or DigitalOcean (backend) and Vercel or Netlify (frontend).
- Ensures real-time and secure access for users worldwide.

TECH STACK :
- Backend : Node.js (Express.js)
- Frontend : HTML, CSS, JavaScript (or Vue.js)
- Database : PostgreSQL
- Image Processing : OpenCV.js
- AI/ML (Optional) : TensorFlow.js
- API Integration : RxNorm, OpenFDA, WHO Medicine Database
- Hosting : AWS/DigitalOcean (Backend), Vercel/Netlify (Frontend)

WORKFLOW :
- User uploads a medicine image or enters drug details.
- System analyzes the image using OpenCV.js to detect counterfeit patterns.
- Cross-verifies drug details with RxNorm, OpenFDA, and WHO databases.
- Optional: AI model predicts risks (if TensorFlow.js is used).
- Generates a report with authenticity results and risk factors.
- User receives feedback on whether the medicine is genuine or counterfeit.

EXPECTED IMPACT :
✅ Reduces counterfeit medicine circulation in the market.
✅ Helps consumers and medical professionals verify medicine authenticity.
✅ Prevents health risks by identifying substandard drugs.
✅ Creates a reliable online platform for medicine quality monitoring.

