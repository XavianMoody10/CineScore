import { delay, http, HttpResponse } from "msw";
import allTrendingDayMockdata from "./mockdata/trending/allTrendingDay.mockdata.js";
import allTrendingWeekMockdata from "./mockdata/trending/allTrendingWeek.mockdata.js";
import trendingMoviesMockdata from "./mockdata/trending/trendingMovies.mockdata.js";
import trendingTVShowsMockdata from "./mockdata/trending/trendingTVShows.mockdata.js";

export const handlers = [
  http.get(
    "https://api.themoviedb.org/3/trending/all/:time_window",
    async ({ params }) => {
      await delay(2000);

      const { time_window } = params;

      // return HttpResponse.text("Failed getting trending media", {
      //   status: 400,
      // });

      // return HttpResponse.error();

      if (time_window === "day") {
        return HttpResponse.json(allTrendingDayMockdata);
      }

      if (time_window === "week") {
        return HttpResponse.json(allTrendingWeekMockdata);
      }
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/trending/movie/:time_window",
    async ({ params }) => {
      await delay(2000);

      const { time_window } = params;

      // return HttpResponse.text("Failed getting trending movies", {
      //   status: 400,
      // });

      // return HttpResponse.error();

      if (time_window === "day") {
        return HttpResponse.json(trendingMoviesMockdata[0]);
      }

      if (time_window === "week") {
        return HttpResponse.json(trendingMoviesMockdata[1]);
      }
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/trending/tv/:time_window",
    async ({ params }) => {
      await delay(2000);

      const { time_window } = params;

      // return HttpResponse.text("Failed getting trending tv shows", {
      //   status: 400,
      // });

      // return HttpResponse.error();

      if (time_window === "day") {
        return HttpResponse.json(trendingTVShowsMockdata[0]);
      }

      if (time_window === "week") {
        return HttpResponse.json(trendingTVShowsMockdata[1]);
      }
    }
  ),
];
