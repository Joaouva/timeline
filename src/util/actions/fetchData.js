import axios from "axios";
import { GET_DATA, GET_DATA_ERROR } from "./index";
import moment from "moment";

export const getData = () => (dispatch) => {
  axios.get("/posts").then((response) => {
    dispatch({
      type: GET_DATA,
      payload: response.data.map((item) => {
        return {
          ...item,
          date_of_post: moment(
            new Date(+new Date() - Math.floor(Math.random() * 10000000000))
          ).format("MM/DD/YYYY"),
        };
      }),
    });
  });
};

