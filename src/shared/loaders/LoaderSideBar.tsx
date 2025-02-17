import ContentLoader from "react-content-loader";

export const LoaderSidebar = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={400}
    viewBox="0 0 1200 400"
    backgroundColor="#4b61c3"
    foregroundColor="#607afb"
  >
    <rect x="10" y="13" rx="10" ry="10" width="201" height="80" />
    <rect x="10" y="103" rx="10" ry="10" width="201" height="80" />
    <rect x="12" y="191" rx="10" ry="10" width="201" height="80" />
  </ContentLoader>
);
