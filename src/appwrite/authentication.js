import { Client, Account, ID} from "appwrite";
export const client = new Client();

client
.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT)
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
 
const account = new Account(client);

class UserAuth {
  async createAccount({
    email,
    password,
    name,
  }) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      console.log(userAccount);
      if (userAccount) return await this.login({email,
        password});
    } catch (err) {
      throw err;
    }
  }

  async login({email,
    password}) {
    try {
      const loggedinUser = await account.createEmailSession(email, password);
      return loggedinUser
    } catch (error) {
      throw error;
    }
  }

  async isLoggedIn() {
    try {
      const _isloggedIn = await this.getCurrentUser();
       if(_isloggedIn) return true;
       else return false
    } catch (error) {
      return false;
    }
  }
  
  async getCurrentUser() {
    try {
      const currentUser = await account.get();
      return currentUser || null;
    } catch (error) {
    }
  }
  

  async logOut() {
    try {
       await account.deleteSession("current");
    } catch (error) {
    }
  }  

  async passwordRecovery(email) {
    try {
      await account.createRecovery(email, 'https://streak-maker-app-fariha-ranas-projects.vercel.app/account/recoverypath');
    } catch (error) {
      throw error;
    }
  } 
   async passwordRecoveryPath(userid, secret, password, repeatPassword) {
    try {
       await account.updateRecovery(userid, secret, password, repeatPassword);
    } catch (error) {
      throw error;
    }
  }
}

const userAuth = new UserAuth();

export default userAuth;
