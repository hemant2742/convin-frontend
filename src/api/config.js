let config;

console.log("Environment =>", process.env.REACT_APP_NODE_ENV);

if (process.env.REACT_APP_NODE_ENV === "production") {
  config = {
    baseURL: "https://colorful-hospital-gown-newt.cyclic.app/",
  };
} else {
  config = {
    baseURL: "https://colorful-hospital-gown-newt.cyclic.app/",
  };
}

export default config;
