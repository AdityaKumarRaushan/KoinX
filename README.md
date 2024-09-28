# KoinX
This project is a server-side application built using **Node.js** and **MongoDB**. This project aims to import cryptocurrency trade data from a CSV file, store it in the database, and provide functionality to retrieve the asset-wise balance for a given timestamp.

---

## Live Link

You can access the live version of the API here:

**[https://koinx-13dp.onrender.com/](https://koinx-13dp.onrender.com/)**

---

## Features

1. **Upload CSV and Store Trade Data**
   - Upload a CSV file containing cryptocurrency trade data, which will be stored in a MongoDB database.
   
2. **Retrieve Account Balance at Specific Timestamp**
   - Based on historical trade data, query the asset-wise balance at any given timestamp.

---

## Endpoints

### 1. Upload CSV File: `https://koinx-13dp.onrender.com//v1/importUser`

**Method**: `POST`

**Description**: This endpoint accepts a CSV file with cryptocurrency trade data, parses the file, and stores the data in MongoDB.

**Request**: (via form-data in Postman or frontend)

- **file**: Upload the CSV file with the following structure:

| User_ID    | UTC_Time           | Operation | Market   | Buy/Sell Amount | Price |
|------------|--------------------|-----------|----------|-----------------|-------|
| 513235744  | 26-09-2022 11:21   | Buy       | BTC/INR  | 25              | 1000  |
| 513235744  | 27-09-2022 11:21   | Sell      | BTC/INR  | 10              | 2000  |
| 513235744  | 28-09-2022 11:21   | Buy       | MATIC/INR| 100             | 12    |

#### Sample Request in Postman:

![image](https://github.com/user-attachments/assets/867c950d-fd69-4adf-97e7-0ed5bc5c2015)

### 2. Query asset-wise balance: `https://koinx-13dp.onrender.com//v1/balance`

**Method**: `POST`

**Description**: This endpoint accepts a timestamp value and returns the asset-wise balance of the account at any given timestamp.

**Request**: (via raw data in Postman or frontend)

#### Sample Request in Postman:
![image](https://github.com/user-attachments/assets/fedcbf7d-c754-4ad0-9f49-adf1658ab5b4)




```bash

