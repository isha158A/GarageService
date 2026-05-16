import garagedetails from "../models/garagedetails";
query = garagedetails.find();
export const addGarageDetail = async (req, res) => {
    try {        const { customerName, vehicleName, email, contactNumber, serviceType, appointmentDate } = req.body;
        const newDetail = new garagedetails({
            customerName,
            vehicleName,
            email,
            contactNumber,
            serviceType,
            appointmentDate,
            finalamount: 0,
            status: "pending"
        });
        const savedDetail = await newDetail.save();
        res.status(201).json({ success: true, detail: savedDetail });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }};
export const getAllGarageDetails = async (req, res) => {
    try {
        const details = await garagedetails.find();
        res.status(200).json({ success: true, details });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }};
    