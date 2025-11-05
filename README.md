# 🌍 UrbanEye Frontend

> **AI-powered Urban Encroachment Detection Dashboard**  
> Built with **Next.js**, **Tailwind CSS**, and **Flask (Backend)** to visualize satellite-based land monitoring.

---

## 🚀 Overview

UrbanEye is an intelligent platform that detects and visualizes **urban encroachment, deforestation, and land-use changes** using satellite imagery and AI/ML models.  
This repository contains the **frontend dashboard**, which interacts with a Flask-based backend service for running the detection pipeline.

---

## 🧠 Features

✅ Interactive Map Section — visualize detection results on real-world coordinates  
✅ Control Panel — select AOI (Area of Interest), date ranges, and sensitivity  
✅ Preset Locations — quick access to Thane test zones (A.P. Shah College, Godbunder Road, etc.)  
✅ Live Preview — see recent detections and confidence scores in real time  
✅ Flask Integration — seamless communication with backend `/analyze` API  

---

## 🧩 Tech Stack

| Layer | Technologies Used |
|--------|--------------------|
| Frontend | Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui |
| Backend | Flask (Python) |
| Map & Visualization | Leaflet.js / Mapbox |
| AI/ML | Sentinel Hub API + ML inference (backend side) |

---

## ⚙️ Project Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/HamzaShaikh515/UrbanEye-frontend.git
cd UrbanEye-frontend


### 2️⃣ Install Dependencies
npm install


### 3️⃣ Development Server
npm run dev