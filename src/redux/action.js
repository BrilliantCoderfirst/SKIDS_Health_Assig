export const addUserData = (data) => {
  return {
    type: "ADD_USER",
    data,
  };
};

export const editUserData = (data) => {
  return {
    type: "EDIT_USER",
    data,
  };
};

export const deleteUserData = (id) => {
  return {
    type: "DELETE_USER",
    id,
  };
};
