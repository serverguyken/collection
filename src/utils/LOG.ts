
import { GETENVIRONMENT } from '.';
/**
 * A wrapper for console.log that only logs when the environment is set to dev.
 *
 *  Use LOG.Prod to log only in production.
 * @param args 
 */


const LOG = <Message extends any, Args extends any[]>(message?: Message, ...args: Args) => {
    if (GETENVIRONMENT() === "dev") {
        console.log(message, ...args);
    }
}


/**
 * A wrapper for console.log that only logs when the environment is set to prod.
 * @param args 
 */
LOG.Prod = <Message extends any, Args extends any[]>(message?: Message, ...args: Args) => {
    if (GETENVIRONMENT() === "prod") {
        console.log(message, ...args);
    }
}

/**
 * A wrapper for console.info that only logs when the environment is set to dev.
 * @param args 
 */
LOG.info = <Message extends any, Args extends any[]>(message?: Message, ...args: Args) => {
    if (GETENVIRONMENT() === "dev") {
        console.info(message, ...args);
    }
}

/**
 * A wrapper for console.warn that only logs when the environment is set to dev.
 * @param args 
 */
LOG.warn = <Message extends any, Args extends any[]>(message?: Message, ...args: Args) => {
    if (GETENVIRONMENT() === "dev") {
        console.warn(message, ...args);
    }
}


/**
 * A wrapper for console.error that only logs when the environment is set to dev.
 * @param args 
 */
LOG.error = <Message extends any, Args extends any[]>(message?: Message, ...args: Args) => {
    if (GETENVIRONMENT() === "dev") {
        console.error(message, ...args);
    }
}


/**
 * Throws an error when the environment is set to dev.
 * @param message   The error message to throw.
 * @param mode    The mode to throw the error in. Defaults to dev.
 */
export function THROWERROR<Message extends string, Mode extends  "dev" | "prod" = "dev">(message?: Message,  mode: Mode = "dev" as Mode) {
    if (mode === "dev") {
        const env = GETENVIRONMENT();
        if (env === "dev") {
            throw new Error(message);
        }
    }
    else {
        const env = GETENVIRONMENT();
        if (env === "prod") {
            throw new Error(message);
        }
    }
}

export default LOG;
