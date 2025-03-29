import axios from "axios";

async function requestAllTrendingMediaFromServer(time_window, language) {
  const windowOptions = ["day", "week"];

  const url = "http://localhost:3001/trending";

  try {
    if (!time_window) {
      throw new Error('Missing "time_window" value');
    }

    if (!windowOptions.includes(time_window)) {
      throw new Error('Invalid value for "time_window"');
    }

    if (!language) {
      throw new Error('Missing "language" value');
    }

    const response = await axios.get(url, {
      params: {
        time_window,
        language,
      },
    });

    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data);
    }

    throw Error(error.message);
  }
}

async function requestTrendingMoviesFromServer(time_window, language) {
  const windowOptions = ["day", "week"];

  const url = "http://localhost:3001/trending/movies";

  try {
    if (!time_window) {
      throw new Error('Missing "time_window" value');
    }

    if (!windowOptions.includes(time_window)) {
      throw new Error('Invalid value for "time_window"');
    }

    if (!language) {
      throw new Error('Missing "language" value');
    }

    const response = await axios.get(url, {
      params: {
        time_window,
        language,
      },
    });

    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data);
    }

    throw Error(error.message);
  }
}

async function requestTrendingTVShowsFromServer(time_window, language) {
  const windowOptions = ["day", "week"];

  const url = "http://localhost:3001/trending/tv_shows";

  try {
    if (!time_window) {
      throw new Error('Missing "time_window" value');
    }

    if (!windowOptions.includes(time_window)) {
      throw new Error('Invalid value for "time_window"');
    }

    if (!language) {
      throw new Error('Missing "language" value');
    }

    const response = await axios.get(url, {
      params: {
        time_window,
        language,
      },
    });

    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data);
    }

    throw Error(error.message);
  }
}

export {
  requestAllTrendingMediaFromServer,
  requestTrendingMoviesFromServer,
  requestTrendingTVShowsFromServer,
};
