import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://my-portfolio-backend-dlwe.onrender.com"
});

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}

export default instance;