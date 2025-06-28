import axios from "axios";

export function DummyData() {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
}
