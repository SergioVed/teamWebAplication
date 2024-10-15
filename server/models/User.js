const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
    },
    secondName: {
      type: String,
    },
  },
  direction: [
    {
      name: String,
      enum: [
        "Фронтенд розробка",
        "Бекенд розробка",
        "IOS розробка",
        "Гейм дев",
        "Веб дизайн",
      ],
    },
  ],
  technologies: [
    {
      name: String,
      enum: [
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "React",
        "Angular",
        "Vue.js",
        "TypeScript",
        "Bootstrap",
        "Tailwind CSS",
        "Java",
        "Node.js",
        "Python",
        "Ruby on Rails",
        "PHP",
        "Go",
        "Django",
        "Flask",
        "Spring",
        "Objective-C",
        "Swift",
        "UIKit",
        "SwiftUI",
        "Core Data",
        "Xcode",
        "CocoaPods",
        "C#",
        "C++",
        "Unity",
        "Unreal Engine",
        "GameMaker",
        "Godot",
        "Phaser",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Figma",
        "Sketch",
        "InVision",
        "Webflow",
        "Adobe XD",
      ],
    },
  ],
  englishLevel: {
    type: String,
    enum: ["A1", "A2", "B1", "B2", "C1", "C2"],
    message: `{VALUE} не є допустимим параметром`,
  },
  education: [
    {
      name: {
        type: String,
        required: false,
      },
      year: {
        start: String,
        end: String,
      },
    },
  ],
  experience: {
    answer: {
      type: String,
    },
    description: {
      type: String,
      required: false,
    },
  },
  description: String,
  isActivated: {
    type: Boolean,
    default: false,
  },
  activationLink: String,
});

module.exports = mongoose.model("user", UserSchema);
