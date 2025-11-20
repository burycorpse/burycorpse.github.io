import express from "express";
const router = express.Router();

router.post("/update", (req, res) => {
    const data = req.body;

    console.log("reponse:", data);

    res.json({ status: "ok" });
});

export default router;
