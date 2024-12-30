const { Mongoose } = require("mongoose");
const Category = require("../models/Category");

exports.createCategory = async(req,res) => {
    try{
        const {name,
            description} = req.body;

        if(!name || !description){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }

        const categoryDetails = await Category.create({
            name:name,
            description:description,
        });

        console.log(categoryDetails);

        return res.status(200).json({
            success:true,
            message:"category created SuccessFully",
        }) 
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};

exports.showAllCategory = async (req, res) => {
    try {
        const allCategory = await Category.find({}, { name: true, description: true });
        res.status(200).json({
            success: true,
            message: "All categories returned successfully",
            data: { categories: allCategory },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message, 
        });
    }
}


exports.categoryPageDetails = async (req, res) => {
  try {
      const { categoryId } = req.body;

      const selectedCategory = await Category.findById(categoryId)
          .populate({
              path: "courses",
              match: { status: "Published" },
              populate: "ratingAndReviews",
          })
          .exec();

      if (!selectedCategory) {
          return res.status(404).json({ success: false, message: "Category not found" });
      }

      if (!selectedCategory.courses.length) {
          return res.status(404).json({ success: false, message: "No courses found for the selected category." });
      }

      const categoriesExceptSelected = await Category.find({ _id: { $ne: categoryId } });
      const randomIndex = getRandomInt(categoriesExceptSelected.length);
      const differentCategory = await Category.findById(categoriesExceptSelected[randomIndex]._id)
          .populate({
              path: "courses",
              match: { status: "Published" },
          })
          .exec();

      const allCategories = await Category.find().populate({
          path: "courses",
          match: { status: "Published" },
          populate: { path: "instructor" },
      }).exec();

      const allCourses = allCategories.flatMap(category => category.courses);
      const mostSellingCourses = allCourses.sort((a, b) => b.sold - a.sold).slice(0, 10);

      res.status(200).json({
          success: true,
          data: {
              selectedCategory,
              differentCategory,
              mostSellingCourses,
          },
      });
  } 
  catch (error) {
      console.error("Error in categoryPageDetails:", error);
      res.status(500).json({
          success: false,
          message: "Internal server error",
          error: error.message,
      });
  }
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
