import axios from "axios";

export default axios.create({
    baseURL:'https://d39e-110-235-236-9.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning":"2u45nYD1skMmc65qIyVPcKsZpXq_3AbhkyxSJKoKFK27SXCKu"}
});