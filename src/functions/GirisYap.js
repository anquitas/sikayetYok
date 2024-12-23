// ## MODULE INFO --- --- ---
const MODULE_NAME = 'giriş yap'


// ## IMPORTS --- --- ---
import axios from "axios";
import { SERVER_URL } from "../constants/serverInfo";



// ## CONSTANTS --- --- ---
const POST_URL = SERVER_URL + '/kullanicilar'

const kullanici_bilgi_cikar = (user_object) => {
  const { email, password } = user_object
  const auth_info = { email, password }
  return auth_info
}

const CuyeGiris = async (giris_nesne) => { // test // GET?
  const {email, parola} = giris_nesne // deconstruction
  const urli = SERVER_URL + '/kullanicilar'
  console.log(urli + '?' + 'email=' + email + '&' + 'parola=' + parola)
  const uyeBilgi = await axios.get(urli + '?' + 'email=' + email + '&' + 'parola=' + parola)
  // const uyeBilgi = await axios.get(urli, {params: giris_nesne})
  console.log(uyeBilgi.data)
  return uyeBilgi.data
}


const CUyeGiris = async (giris_nesne) => { // ASİL // POST
  const auth_info = kullanici_bilgi_cikar(giris_nesne)
  const result = axios.post(POST_URL, auth_info)
  return result
}

// ## EXPORTS --- --- ---
export { CuyeGiris, CUyeGiris }



// ## MODULE LOG --- --- ---
console.log(`+ ${MODULE_NAME} module connected`)