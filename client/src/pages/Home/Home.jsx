import React from "react";
import { Main } from "../../layouts/Main/Main";
import { useQuery } from "@tanstack/react-query";
import {
  requestAllTrendingMediaFromServer,
  requestTrendingMoviesFromServer,
  requestTrendingTVShowsFromServer,
} from "../../services/trending.services";
import { LargeMediaSlider } from "../../components/LargeMediaSlider/LargeMediaSlider";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { ErrorOverlay } from "../../components/ErrorOverlay/ErrorOverlay";
import { SmallMediaSlider } from "../../components/SmallMediaSlider/SmallMediaSlider";
import { SliderSubheading } from "../../components/SliderSubheading/SliderSubheading";

export const Home = () => {
  // Get all trending movies and tv shows
  const trendingAllQuery = useQuery({
    queryKey: ["trending-all"],
    queryFn: () => requestAllTrendingMediaFromServer("day", "en-US"),
    retry: false,
    staleTime: 300000,
  });

  // Get trending movies
  const trendingMoviesQuery = useQuery({
    queryKey: ["trending-movies"],
    queryFn: () => requestTrendingMoviesFromServer("day", "en-US"),
    retry: false,
    staleTime: 300000,
  });

  // Get trending tv shows
  const trendingTVShowsQuery = useQuery({
    queryKey: ["trending-tvshows"],
    queryFn: () => requestTrendingTVShowsFromServer("day", "en-US"),
    retry: false,
    staleTime: 300000,
  });

  return (
    <Main>
      <section className=" min-h-[750px] max-w-[1600px] mx-auto relative">
        <LargeMediaSlider data={trendingAllQuery.data} />
        <LoadingOverlay isLoading={trendingAllQuery.isLoading} />
        <ErrorOverlay error={trendingAllQuery.error} />
      </section>

      <section className=" min-h-[200px] w-[90%] max-w-[1600px] mx-auto space-y-6 relative mt-16">
        <SliderSubheading heading={"Trending Movies"} viewAllPath={"/movies"} />
        <SmallMediaSlider data={trendingMoviesQuery.data} />
        <LoadingOverlay isLoading={trendingMoviesQuery.isLoading} />
        <ErrorOverlay error={trendingMoviesQuery.error} />
      </section>

      <section className=" min-h-[200px] w-[90%] max-w-[1600px] mx-auto space-y-6 relative mt-16">
        <SliderSubheading
          heading={"Trending TV Shows"}
          viewAllPath={"/tv_shows"}
        />
        <SmallMediaSlider data={trendingTVShowsQuery.data} />
        <LoadingOverlay isLoading={trendingTVShowsQuery.isLoading} />
        <ErrorOverlay error={trendingTVShowsQuery.error} />
      </section>
    </Main>
  );
};
