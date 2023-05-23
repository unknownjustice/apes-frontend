import axios from "axios";
import { REACT_APP_API_URL } from "../utills/constant";

export const addEventAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/event/createEvent`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getParticipentsAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/event/getParticipents`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const isParticipatedAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/event/isParticipent`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getEventByIdAPI = async (eventID) => {
  try {
    const { data } = await axios.get(
      `${REACT_APP_API_URL}/event/getEventById`,
      {
        params: {
          eventID,
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const decideWinnerAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/event/decideWinner`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getallEventsAPI = async () => {
  try {
    const { data } = await axios.get(`${REACT_APP_API_URL}/event/getallEvents`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getallusersAPI = async () => {
  try {
    const { data } = await axios.get(`${REACT_APP_API_URL}/users/getallusers`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserByIdAPI = async (id) => {
  try {
    const { data } = await axios.get(
      `${REACT_APP_API_URL}/users/getuserbyid/${id}`,
      {
        params: {
          rollno: id,
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const addUserAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/users/adduser`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const participateEventAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/users/participateEvent`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const distributeBalanceAPI = async () => {
  try {
    const { data } = await axios.get(
      `${REACT_APP_API_URL}/users/distributeBalance`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const resetPasswordAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/users/resetPassword`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};
export const loginAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/users/login`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};
export const verifyOtpAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/users/verifyOtp`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};
export const changePasswordAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/users/changePassword`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllAgendaAPI = async () => {
  try {
    const { data } = await axios.get(
      `${REACT_APP_API_URL}/agenda/getallAgendas`
    );
    return data;
  } catch (error) {
    return error;
  }
};
export const fetchAgendaAPI = async (id) => {
  try {
    const { data } = await axios.get(
      `${REACT_APP_API_URL}/agenda/fetchAgenda`,
      {
        params: {
          agendaID: id,
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};
export const voteForAgendaAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/agenda/voteForAgenda`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};
export const createAgendaAPI = async (payload) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/agenda/createAgenda`,
      payload
    );
    return data;
  } catch (error) {
    return error;
  }
};
