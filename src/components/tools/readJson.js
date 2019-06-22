import axios from 'axios'
let readJson = async ()=>await axios('/fetchAppsList');
export default readJson ;