import { instance } from "../../Services/axiosservices";
export function DummyData() {
  return instance.get("https://jsonplaceholder.typicode.com/todos");
}
