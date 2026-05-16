import express from "express";
const router = express.Router();
import garageDetails from "../models/garagedetails.js";

router.post("/add", async (req, res) => {
    try {
        const { customerName, vehicleName, email, contactNumber, serviceType, appointmentDate } = req.body;
        const newDetail = new garageDetails({
            customerName,
            vehicleName,
            email,
            contactNumber,
            serviceType,
            appointmentDate,
        });
        const savedDetail = await newDetail.save();
        res.status(201).json({ success: true, detail: savedDetail });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/all", async (req, res) => {
    try {
        const details = await garageDetails.find();
        res.status(200).json({ success: true, details });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const detail = await garageDetails.findById(req.params.id);
        if (!detail) {
            return res.status(404).json({ success: false, message: "Detail not found" });
        }
        res.status(200).json({ success: true, detail });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const { partsused, serviceCost, status, dateofservice, finalamount } = req.body;
        const updatedDetail = await garageDetails.findByIdAndUpdate(
            req.params.id,
            { partsused, serviceCost, status, dateofservice, finalamount },
            { new: true }
        );
        if (!updatedDetail) {
            return res.status(404).json({ success: false, message: "Detail not found" });
        }
        res.status(200).json({ success: true, detail: updatedDetail });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedDetail = await garageDetails.findByIdAndDelete(req.params.id);
        if (!deletedDetail) {
            return res.status(404).json({ success: false, message: "Detail not found" });
        }
        res.status(200).json({ success: true, message: "Details deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
