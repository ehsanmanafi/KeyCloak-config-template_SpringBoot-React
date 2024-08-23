import PersonnelModel from "../../../../models/PersonnelModel";
import AuthService from "../../../AuthService";
import { axiosBase, inputAxiosConfig, methods } from "../../AxiosBase"

export const findAllPageable = (page?: number, size?: number) => {
   //.... code
    inputAxiosConfig.token=AuthService.getToken() || "";
   //.... code
}