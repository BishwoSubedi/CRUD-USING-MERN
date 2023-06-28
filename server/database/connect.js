import mongoose from "mongoose";
const Connection = async () => {
  const URL ="Db_Url"
  try {
    await mongoose.connect(URL);
    console.log("Database Connected SuccessFully");
  } catch (error) {
    console.log("Error While Connectiong", error);
  }
};
export default Connection;
