import axios from "axios";

axios.defaults.baseURL = "https://663f607ae3a7c3218a4ceee9.mockapi.io";
export const getContacts = async () => {
  const { data } = await axios.get("contacts");
  return data;
};

export const postContact = async (contact) => {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
};

export const getDeleteContact = async (id) => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
