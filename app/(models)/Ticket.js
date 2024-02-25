// import mongoose from "mongoose";//this was not in vido it came from connecting to mongoose in line 5
import mongoose from "mongoose";
import Mongoose, { Schema } from "mongoose";
//connecting to mongoose

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise; //from gpt=Setting mongoose.Promise to global.Promise is a common practice when using Mongoose with Node.js and modern JavaScript environments.Mongoose allows you to specify a custom Promise library that it should use for async operations. By default, Mongoose uses its built-in promise library, but you can override this to use a different Promise implementation if needed.Setting mongoose.Promise = global.Promise instructs Mongoose to use the native Promise implementation provided by the JavaScript environment (e.g., Node.js), which is available globally through global.Promise. This ensures compatibility and consistency with other parts of your application that might also rely on native Promises.

const ticketschema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketschema);

export default Ticket;
