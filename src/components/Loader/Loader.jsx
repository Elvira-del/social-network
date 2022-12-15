import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={271}
    height={690}
    viewBox="0 0 271 690"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="30" cy="30" r="30" />
    <rect x="80" y="20" rx="5" ry="5" width="150" height="19" />

    <circle cx="30" cy="100" r="30" />
    <rect x="80" y="90" rx="5" ry="5" width="150" height="19" />

    <circle cx="30" cy="170" r="30" />
    <rect x="80" y="160" rx="5" ry="5" width="150" height="19" />

    <circle cx="30" cy="240" r="30" />
    <rect x="80" y="230" rx="5" ry="5" width="150" height="19" />

    <circle cx="30" cy="310" r="30" />
    <rect x="80" y="300" rx="5" ry="5" width="150" height="19" />

    <circle cx="30" cy="380" r="30" />
    <rect x="80" y="370" rx="5" ry="5" width="150" height="19" />

    <circle cx="30" cy="450" r="30" />
    <rect x="80" y="440" rx="5" ry="5" width="150" height="19" />

    <circle cx="30" cy="520" r="30" />
    <rect x="80" y="510" rx="5" ry="5" width="150" height="19" />

    <circle cx="30" cy="590" r="30" />
    <rect x="80" y="580" rx="5" ry="5" width="150" height="19" />

    <circle cx="30" cy="660" r="30" />
    <rect x="80" y="650" rx="5" ry="5" width="150" height="19" />
  </ContentLoader>
);

export { Loader };
