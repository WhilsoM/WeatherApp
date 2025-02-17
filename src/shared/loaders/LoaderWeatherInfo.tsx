import ContentLoader from "react-content-loader";

export const LoaderWeatherInfo = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={400}
    viewBox="0 0 1200 400"
    backgroundColor="#4b61c3"
    foregroundColor="#607afb"
  >
    <rect x="8" y="3" rx="10" ry="10" width="338" height="288" />
    <rect x="400" y="1" rx="10" ry="10" width="338" height="288" />
    <rect x="800" y="1" rx="10" ry="10" width="338" height="288" />
  </ContentLoader>
);
