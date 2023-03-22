let config;

// console.log("Environment =>", process.env.REACT_APP_NODE_ENV);

if (process.env.REACT_APP_NODE_ENV === "production") {
  config = {
    baseURL: "http://localhost:5000/",
  };
} else {
  config = {
    baseURL: "http://localhost:5000/",
  };
}

export default config;
