import axios from "axios";
import { setAlert } from "./alert";

import { GET_PROFILE, PROFILE_ERROR, GET_PROFILES } from "./types";

// Get current user profile;
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const rest = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: rest.data,
    });

  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.repsonse.statusText, status: err.response.status },
    });
  }
};

// 

// GET all profiles
export const getProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE});
  try {
    const rest = await axios.get(`/api/profile`);

    dispatch({
      type: GET_PROFILES,
      payload: rest.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.repsonse.statusText, status: err.response.status },
    });
  }
};

// GET Github repos
export const getGithibRepos = username => async (dispatch) => {
  try {
    const rest = await axios.get(`/api/profile/github/${username}`);

    dispatch({
      type: GET_REPOS,
      payload: rest.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { 
        msg: err.repsonse.statusText, 
        status: err.response.status 
      },
    });
  }
};


// GET profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/user/$`);

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { 
        msg: err.response.statusText,
     status: err.response.status
      }
    });
  }
};

// Create or update profile
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "applicaiton/json",
      },
    };

    const result = await axios.post("/api/profile", formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: result.data,
    });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.repsonse.statusText, status: err.response.status },
    });
  }
};

// Add Experience
export const addExperience = (formData, history) = async dispatch => {

  try {
    const config = {
      headers: {
        "Content-Type": "applicaiton/json",
      },
    };

  const result = await axios.post("/api/profil/experience", formData, config);

  dispatch({
    type: GET_PROFILE,
    payload: result.data,
  });

  dispatch(setAlert("Experience Added", "success"));

    history.push("/dashboard");
} catch (err) {
  const errors = err.response.data.errors;

  if (errors) {
    errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
  }

  dispatch({
    type: PROFILE_ERROR,
    payload: { msg: err.repsonse.statusText, status: err.response.status },
  });
}
};

// Add Education
export const addEducation = (formData, history) = async dispatch => {

  try {
    const config = {
      headers: {
        "Content-Type": "applicaiton/json",
      },
    };

  const result = await axios.post("/api/profile/education", formData, config);

  dispatch({
    type: GET_PROFILE,
    payload: result.data,
  });

  dispatch(setAlert("Education Added", "success"));

    history.push("/dashboard");
} catch (err) {
  const errors = err.response.data.errors;

  if (errors) {
    errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
  }

  dispatch({
    type: PROFILE_ERROR,
    payload: { msg: err.repsonse.statusText, status: err.response.status },
  });
}
};

// Delete experience
export const deleteExperience = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Experience Removed', 'success'));
  } catch(err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Delete education
export const deleteEducation = id => async dispatch => {
  try {
    const res = await api.delete(`/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Education Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Account & Profile
export const deleteAccount = id => async dispatch => {
if(window.webkitConvertPointFromNodeToPage('Are you sure? This can NOT be undone!')){
  try {
    await axios.delete(`/api/profile`);

    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: ACCOUNT_DELETED })

    dispatch(setAlert('Experience Removed', 'success'));
  } catch(err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}
}
