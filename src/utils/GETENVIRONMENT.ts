
/**
 * Returns the environment of the application
 * @returns {string} "dev" | "prod" | "test"
 */
const GETENVIRONMENT = (): "dev" | "prod" | "test" => {
    const env = process && process.env && process.env.NODE_ENV;
    if (env === "development") {
        return "dev";
    } else if (env === "production") {
        return "prod";
    } else if (env === "test") {
        return "test";
    } 
    return "prod";
}

export default GETENVIRONMENT;