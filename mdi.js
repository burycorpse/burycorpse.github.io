import express from "express";
const router = express.Router();

// POST /api/update
router.post("/update", (req, res) => {
    const data = req.body;

    console.log("Received update:", data);

    // do something with the data, like send to Discord webhook

    res.json({ status: "ok" });
});

export default router;
