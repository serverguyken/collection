/*
 * Created on Fri Apr 14 2023
 *
 * Copyright (c) 2023 Shopascart
 */
/**
 * Generates a random number between two numbers
 * @param from - The minimum number
 * @param to - The maximum number
 */
const GENERATERANDOMTIMEOUTNUMBER = (from: number, to: number) => {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

export default GENERATERANDOMTIMEOUTNUMBER;