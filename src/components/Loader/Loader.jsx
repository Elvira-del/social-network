import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => {
  <ContentLoader
    speed={2}
    width={271}
    height={60}
    viewBox="0 0 271 60"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="30" cy="30" r="30" />
    <rect x="80" y="21" rx="5" ry="5" width="150" height="19" />
  </ContentLoader>;
};

export { Loader };
