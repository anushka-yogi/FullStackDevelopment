import greet from "./greet.js";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
greet("Anushka");
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log("Directory Name:", __dirname);
console.log("File Name:", __filename);
