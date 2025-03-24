const validateEnv = () => {
  const requiredEnvs = ["PORT", "DB_URI", "JWT_SECRET", "JWT_EXPIRES_IN"];

  const missing = requiredEnvs.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
};

export default validateEnv;
