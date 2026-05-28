import { api } from "./api";

const USE_MOCK = true;

export const getContacts = async () => {
  if (USE_MOCK) {
    return fakeContacts;
  }

  const res = await api.get("/contacts");
  return res.data;
};

const fakeContacts = {
  contacts: {
    title: "Contacts",
    list: [{ field: "E-mail:", value: "andrea-9_4@hotmail.it" }],
  },
  links: {
    linksTitle: "Links",
    linkaList: [
      { field: "Full name:", value: "Andrea Di Lucia" },
      { field: "Nationality:", value: "Italian" },
      { field: "Date of birth:", value: "30/04/1994" },
      { field: "Languages:", value: "Italian (native), English (fluent)" },
      { field: "Education:", value: "Bachelor's degree in Computer Science" },
    ],
  },
};
