import axios from "axios";

export default async function amIAdmin(): Promise<boolean>{
    var isAdmin = await axios.get('');
    return isAdmin.data === true ? true : false;
}