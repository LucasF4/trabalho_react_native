const ENV = {
  dev: {
    BASE_API: "https://obliging-noted-moccasin.ngrok-free.app",
  },
  prod: {
    BASE_API: "https://obliging-noted-moccasin.ngrok-free.app",
  },
};

const getEnvVars = (env = process.env.NODE_ENV) => {
  if (env === "production") return ENV.prod;
  else return ENV.dev;
};

export default getEnvVars;
