
const Post = require("../models/Post");
const Sub=require("../models/Sub")
const Event=require("../models/Event")

module.exports = {
//   getProfile: async (req, res) => {
//     try {
//       const posts = await Post.find({ user: req.user.id }).sort({createdAt:'desc'});
//       res.render("profile.ejs", { posts: posts, user: req.user });
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   getFeed: async (req, res) => {
//     try {
//       const posts = await Post.find().sort({ createdAt: "desc" }).lean();
//       res.render("feed.ejs", { posts: posts });
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   getPost: async (req, res) => {
//     try {
//       const post = await Post.findById(req.params.id);
//       const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "desc" }).lean();
//       res.render("post.ejs", { post: post, user: req.user, comments: comments });
//     } catch (err) {
//       console.log(err);
//     }
//   },
  createEvent: async (req, res) => {
    try {
      await Event.create({
        type:req.body.type,
        amount:req.body.amount,
        
        user: req.user.id,
      });
      console.log("Event has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  createSub: async (req, res) => {
    try {
      await Sub.create({
        name:req.body.name,
        amount:req.body.amountSub,
        
        user: req.user.id,
      });
      console.log("Event has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  findSub:async(req,res)=>{
    try {  
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

       console.log(savings)
       console.log(personal)
       res.redirect("/profile");
      //console.log(savings)const posts = await Post.find({ user: req.user.id }).sort({createdAt:'desc'});
           } catch (err) {
            console.log(err);
          }
             
  },
//   likePost: async (req, res) => {
//     try {
//       await Post.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 },
//         }
//       );
//       console.log("Likes +1");
//       res.redirect(`/post/${req.params.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   deletePost: async (req, res) => {
//     try {
//       console.log('delete')
//       // Find post by id
//       let post = await Post.findById({ _id: req.params.id });
//       // Delete image from cloudinary
//       await cloudinary.uploader.destroy(post.cloudinaryId);
//       // Delete post from db
//       await Post.remove({ _id: req.params.id });
//       console.log("Deleted Post");
//       res.redirect("/profile");
//     } catch (err) {
//       res.redirect("/profile");
//     }
//   },
};
