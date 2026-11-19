import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
    },

    techStack: [
      {
        type: String,
        trim: true,
      },
    ],

    image: {
      type: String,
      required: [true, "Project image is required"],
    },

    liveLink: {
      type: String,
      trim: true,
    },

    githubLink: {
      type: String,
      trim: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;