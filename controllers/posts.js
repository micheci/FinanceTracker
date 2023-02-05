
const Post = require("../models/Post");
const Event=require("../models/Event")
const Sub=require("../models/Sub")
const Income=require("../models/Income")

module.exports = {
  getProfile: async (req, res) => {
    try {
      const income=await Income.find({user:req.user.id}).sort({createdAt:'desc'});

      const events=await Event.find({ user: req.user.id }).sort({createdAt:'desc'});
      const sub=await Sub.find({ user: req.user.id }).sort({createdAt:'desc'});
      const savings = await Event.find({type: "Savings",user: req.user.id}).sort({ createdAt: "desc" }).lean();
      const personal = await Event.find({type: "Personal",user: req.user.id}).sort({ createdAt: "desc" }).lean();
      const housing = await Event.find({type: "Housing",user: req.user.id}).sort({ createdAt: "desc" }).lean();
      const recreation = await Event.find({type: "Recreation",user: req.user.id}).sort({ createdAt: "desc" }).lean();
      const food = await Event.find({type: "Food",user: req.user.id}).sort({ createdAt: "desc" }).lean();
      const medical = await Event.find({type: "Medical",user: req.user.id}).sort({ createdAt: "desc" }).lean();
      const investments = await Event.find({type: "Investments",user: req.user.id}).sort({ createdAt: "desc" }).lean();
      const miscellaneous = await Event.find({type: "Miscellaneous",user: req.user.id}).sort({ createdAt: "desc" }).lean();
      const transportation= await Event.find({type: "Transportation",user: req.user.id}).sort({ createdAt: "desc" }).lean();
      const school = await Event.find({type: "School",user: req.user.id}).sort({ createdAt: "desc" }).lean();
      const utilities = await Event.find({type: "Utilities",user: req.user.id}).sort({ createdAt: "desc" }).lean();
      res.render("profile.ejs", { income:income,savings:savings,personal:personal,housing:housing,recreation:recreation,
        food:food,medical:medical,investments:investments,miscellaneous:miscellaneous,transportation:transportation
         ,school:school,utilities:utilities,user: req.user,events:events,sub:sub });
    } catch (err) {
      console.log(err);
    }
  },
  
};
