import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="120" cy="120" r="120" />
    <rect x="8" y="248" rx="0" ry="0" width="240" height="32" />
    <rect x="6" y="291" rx="17" ry="17" width="240" height="82" />
    <rect x="12" y="390" rx="0" ry="0" width="70" height="35" />
    <rect x="116" y="387" rx="22" ry="22" width="125" height="45" />
  </ContentLoader>
);

export default MyLoader;
