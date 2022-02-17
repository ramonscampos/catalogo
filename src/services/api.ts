import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Require cycle: node_modules/axios/lib/defaults.js']);

const api = axios.create({
  baseURL: API_URL,
});

export { api };
