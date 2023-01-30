
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
      // const posts = await Post.find({ user: req.user.id }).sort({createdAt:'desc'});
      res.render("profile.ejs", { income:income,savings:savings,personal:personal,housing:housing,recreation:recreation,
        food:food,medical:medical,investments:investments,miscellaneous:miscellaneous,transportation:transportation
         ,school:school,utilities:utilities,user: req.user,events:events,sub:sub });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "desc" }).lean();
      res.render("post.ejs", { post: post, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      console.log('delete')
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
