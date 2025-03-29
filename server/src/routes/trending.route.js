import { Router } from "express";
import { fetchAllTrendingMedia } from "../controllers/trending.controller.js";
import axios from "axios";

const router = Router();

router.get("/", fetchAllTrendingMedia);

router.get("/movies", async (req, res) => {
  const { time_window, language } = req.query;

  const windowOptions = ["day", "week"];

  const url = `https://api.themoviedb.org/3/trending/movie/${time_window}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  try {
    if (!time_window) {
      throw { status: 400, message: 'Missing "time_window" value' };
    }

    if (!windowOptions.includes(time_window)) {
      throw { status: 400, message: 'Invalid value for "time_window"' };
    }

    if (!language) {
      throw { status: 400, message: 'Missing "language" value' };
    }

    const response = await axios.get(url, options);

    return res.send(response.data);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).send(error.response.data);
    } else if (error.message === "Network error") {
      return res.status(503).send(error.message);
    } else {
      return res.status(error.status).send(error.message);
    }
  }
});

router.get("/tv_shows", async (req, res) => {
  const { time_window, language } = req.query;

  const windowOptions = ["day", "week"];

  const url = `https://api.themoviedb.org/3/trending/tv/${time_window}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  try {
    if (!time_window) {
      throw { status: 400, message: 'Missing "time_window" value' };
    }

    if (!windowOptions.includes(time_window)) {
      throw { status: 400, message: 'Invalid value for "time_window"' };
    }

    if (!language) {
      throw { status: 400, message: 'Missing "language" value' };
    }

    const response = await axios.get(url, options);

    return res.send(response.data);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).send(error.response.data);
    } else if (error.message === "Network error") {
      return res.status(503).send(error.message);
    } else {
      return res.status(error.status).send(error.message);
    }
  }
});

export default router;
