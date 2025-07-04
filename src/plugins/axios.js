import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true; // Enable cookies for cross-origin requests
axios.defaults.withXSRFToken = true; // Enable CSRF protection
