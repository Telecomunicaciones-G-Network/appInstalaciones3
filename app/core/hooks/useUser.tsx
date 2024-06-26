import Storage from '../../libs/storage';


export const useUser = () => {

    const getUser=async ()=>{
        const data =await Storage.get('user')
        
        return JSON.parse(data ?? "{}")
        
    }
  return {
    getUser
  }
}

