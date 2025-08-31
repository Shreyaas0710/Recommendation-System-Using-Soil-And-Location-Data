# Recommendation-System-Using-Soil-And-Location-Data

An AI-powered web platform built with **Django** to recommend the best crops for farmers based on **soil, weather, and location data**.  
Designed to support sustainable farming and maximize yield efficiency.  

---

## 📖 Abstract  

Agriculture remains the backbone of India’s economy, yet many farmers face low yields and financial instability due to uninformed crop selection.  
This project introduces a **Smart Crop Recommendation System** that uses **soil composition, geolocation, and climatic conditions** to generate tailored crop suggestions.  

Built with **Django (Python)** and **MySQL**, the platform provides an intuitive web interface with **General** and **Advanced** modes for farmers.  
Machine learning models trained on agricultural datasets achieve **90%+ accuracy**, enabling **data-driven and sustainable decisions**.  

---

## ✨ Features  

- Soil-based & location-specific crop recommendations.  
- **General Mode**: basic suggestions using soil & district-level data.  
- **Advanced Mode**: detailed suggestions (water availability, land size, budget).  
- Interactive dashboards with graphs & charts.  
- Crop yield comparison (Traditional vs AI-based).  
- Role-based access: Admin, Researcher, Farmer.  
- Export reports and visualizations.  
- Responsive UI (Bootstrap/Tailwind CSS).  

---

## 🗄️ Database Design  

### ER Observations  
- **Crop Table** → crop metadata (name, type, yield, requirements).  
- **Soil Data Table** → pH, NPK, texture, moisture.  
- **User Table** → farmer details, region, mode used.  
- **Recommendation Table** → generated crop suggestions, yield predictions.  

### Schema Example  

**Crop Table**  
- crop_id (PK)  
- crop_name  
- crop_type  
- season  
- avg_yield  

**Soil Data Table**  
- soil_id (PK)  
- ph_value  
- nitrogen  
- phosphorus  
- potassium  
- moisture  

**Recommendation Table**  
- rec_id (PK)  
- user_id (FK)  
- crop_id (FK)  
- predicted_yield  
- date_generated  

---

## 🖥️ System Workflow  

1. User enters **soil & location data**.  
2. System fetches **climate info via APIs**.  
3. Machine learning model processes inputs.  
4. Recommended crops displayed with **graphs & yield predictions**.  
5. Users can **filter results** and **export reports**.  

---

## 📊 Visualization  

- **Chart.js** → quick, responsive charts.  
- **Plotly** → interactive 2D/3D visualizations.  
- Yield comparison graphs between **traditional and AI-based methods**.  
