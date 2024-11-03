interface EnvironmentConfig {
  apiUrl: string
  enableTesting: boolean
}

export const getEnvironmentConfig = (): EnvironmentConfig => {
  // Access env directly without type assertion
  const env = import.meta.env.VITE_APP_ENV

  switch (env) {
    case 'production':
      return {
        apiUrl: import.meta.env.VITE_API_URL || 'https://missing-persons-databases-1.onrender.com',
        enableTesting: false,
      }
    case 'staging':
      return {
        apiUrl: import.meta.env.VITE_API_URL || 'https://staging-missing-persons-api.onrender.com',
        enableTesting: true,
      }
    case 'development':
      return {
        apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:8081',
        enableTesting: true,
      }
    default:
      return {
        apiUrl: 'http://localhost:8081',
        enableTesting: true,
      }
  }
}