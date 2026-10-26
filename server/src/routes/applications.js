import express, { application } from "express";
import Application from "../models/Applications.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { company, title, date, status, url, notes } = req.body;
    if (!company || !company.trim()) {
      return res.status(400).json({ error: "Company name is required" });
    }
    if (!title || !title.trim()) {
      return res.status(400).json({ error: "Job title is required" });
    }
    if (!date) {
      return res.status(400).json({ error: "Application date is required" });
    }

    const application = await Application.create({
      company: company.trim(),
      title: title.trim(),
      date,
      status: status || "Applied",
      url: url?.trim() || "",
      notes: notes?.trim() || "",
    });

    res.status(201).json(application);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { company, title, date, status, url, notes } = req.body;
    const updates = {};
    if (company !== undefined) {
      if (!company.trim()) {
        return res.status(400).json({ error: "Company name cannot be empty" });
      }
      updates.company = company.trim();
    }
    if (title !== undefined) {
      if (!title.trim()) {
        return res.status(400).json({ error: "Job title cannot be empty" });
      }
      updates.title = title.trim();
    }
    if (date !== undefined) updates.date = date;
    if (status !== undefined) updates.status = status;
    if (url !== undefined) updates.url = url.trim();
    if (notes !== undefined) updates.notes = notes.trim();

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true },
    );
    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }
    res.json(application);
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ error: messages.join(", ") });
    }
    if (err.name === "CastError") {
      return res.status(400).json({ error: "Invalid application ID" });
    }
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }

    res.json({ message: "Deleted", application });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ error: "Invalid application ID" });
    }
    next(err);
  }
});
export default router;
