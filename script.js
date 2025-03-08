import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuSKstc9p_nhqLrqZKY_VHsr8pISLlKTY",
    authDomain: "financeportal-63336.firebaseapp.com",
    projectId: "financeportal-63336",
    storageBucket: "financeportal-63336.firebasestorage.app",
    messagingSenderId: "503084246152",
    appId: "1:503084246152:web:1c254a1d032e15655aab3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 Bulk Upload Members' Data
async function addMembers() {
    const members = [
        { Name: "Shashikala", Savings: 5000, LoanInterest: 200, LoanPaid: 1000, Penalty: 50, LoanTaken: 10000 },
        { Name: "Mahadevi", Savings: 7000, LoanInterest: 300, LoanPaid: 2000, Penalty: 30, LoanTaken: 15000 },
        { Name: "Demavva", Savings: 4000, LoanInterest: 150, LoanPaid: 800, Penalty: 20, LoanTaken: 8000 },
        { Name: "Shantavva", Savings: 6000, LoanInterest: 250, LoanPaid: 1500, Penalty: 40, LoanTaken: 12000 },
        { Name: "Savitri", Savings: 7500, LoanInterest: 350, LoanPaid: 2200, Penalty: 60, LoanTaken: 18000 },
        { Name: "Kasturi", Savings: 3000, LoanInterest: 100, LoanPaid: 500, Penalty: 10, LoanTaken: 5000 },
        { Name: "Basavanevva", Savings: 4500, LoanInterest: 200, LoanPaid: 900, Penalty: 25, LoanTaken: 9000 },
        { Name: "Kashavva", Savings: 5000, LoanInterest: 150, LoanPaid: 1200, Penalty: 35, LoanTaken: 11000 },
        { Name: "Kallavva", Savings: 5500, LoanInterest: 200, LoanPaid: 1400, Penalty: 40, LoanTaken: 13000 },
        { Name: "Mahadevi", Savings: 6500, LoanInterest: 250, LoanPaid: 1800, Penalty: 50, LoanTaken: 16000 },
        { Name: "Tanevva", Savings: 4800, LoanInterest: 180, LoanPaid: 1000, Penalty: 30, LoanTaken: 10500 },
        { Name: "Pattrevva", Savings: 5200, LoanInterest: 220, LoanPaid: 1300, Penalty: 45, LoanTaken: 12500 },
        { Name: "Girija", Savings: 6000, LoanInterest: 300, LoanPaid: 2000, Penalty: 50, LoanTaken: 15000 },
        { Name: "Rahhashree", Savings: 7000, LoanInterest: 350, LoanPaid: 2500, Penalty: 60, LoanTaken: 18000 },
        { Name: "Mahadevi", Savings: 4000, LoanInterest: 200, LoanPaid: 900, Penalty: 25, LoanTaken: 8500 },
        { Name: "Kashavva.T", Savings: 5300, LoanInterest: 220, LoanPaid: 1400, Penalty: 40, LoanTaken: 12000 },
        { Name: "Mahadevi.M", Savings: 4900, LoanInterest: 190, LoanPaid: 1100, Penalty: 35, LoanTaken: 11000 },
        { Name: "Gangavva", Savings: 5500, LoanInterest: 250, LoanPaid: 1500, Penalty: 45, LoanTaken: 14000 },
        { Name: "Savitri", Savings: 6200, LoanInterest: 280, LoanPaid: 1900, Penalty: 55, LoanTaken: 16500 },
        { Name: "Riyana", Savings: 5800, LoanInterest: 260, LoanPaid: 1700, Penalty: 50, LoanTaken: 15500 },
        { Name: "Suvarna", Savings: 5000, LoanInterest: 200, LoanPaid: 1200, Penalty: 40, LoanTaken: 13000 },
        { Name: "Mallamma", Savings: 4800, LoanInterest: 180, LoanPaid: 1000, Penalty: 30, LoanTaken: 11000 },
        { Name: "Sharada", Savings: 5300, LoanInterest: 220, LoanPaid: 1400, Penalty: 45, LoanTaken: 12500 },
        { Name: "Shavaleela", Savings: 6000, LoanInterest: 300, LoanPaid: 2000, Penalty: 50, LoanTaken: 15000 },
        { Name: "Nagaratna", Savings: 7000, LoanInterest: 350, LoanPaid: 2500, Penalty: 60, LoanTaken: 18000 },
        { Name: "Kamallamma", Savings: 4000, LoanInterest: 200, LoanPaid: 900, Penalty: 25, LoanTaken: 8500 },
        { Name: "Ratna", Savings: 5300, LoanInterest: 220, LoanPaid: 1400, Penalty: 40, LoanTaken: 12000 },
        { Name: "Jayashree", Savings: 4900, LoanInterest: 190, LoanPaid: 1100, Penalty: 35, LoanTaken: 11000 },
        { Name: "Mamataj", Savings: 5500, LoanInterest: 250, LoanPaid: 1500, Penalty: 45, LoanTaken: 14000 }
    ];

    for (const member of members) {
        try {
            await addDoc(collection(db, "members"), member);
            console.log(`✅ Added: ${member.Name}`);
        } catch (error) {
            console.error("❌ Error adding member:", error);
        }
    }

    alert("🔥 30 Members' Details Added Successfully!");
}

// Call function to upload members
addMembers();
